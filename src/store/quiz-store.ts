// store/quiz-store.ts - COMPLETE FIXED VERSION
import { create } from 'zustand';
import { questions, MainPassionQuestion, Question, SimplePassionQuestion } from '@/lib/questions';

const passionQuestions = questions.filter(q => q.type === 'mainPassion');
const convenienceQuestions = questions.filter(q => q.type === 'convenience');
const INITIAL_QUESTION_COUNT = 1 + passionQuestions.length + convenienceQuestions.length;

type QuizState = {
  answers: string[];
  mainQuestionIndex: number;
  simpleQuestionIndex: number;
  isCompleted: boolean;
  totalQuestions: number;
  questionsAnswered: number;
  answerHistory: Array<{
    mainIndex: number;
    simpleIndex: number;
    answer: string;
    timestamp: number;
  }>;
  startQuiz: () => void;
  answerQuestion: (answer: string, onComplete: (code: string) => void) => void;
  getCurrentQuestion: () => Question | null;
  getProgress: () => number;
  generateCode: () => string;
  goToPreviousQuestion: () => void;
  resetCurrentAnswer: () => void;
  canGoBack: () => boolean;
  getCurrentQuestionIndex: () => number;
  getTotalQuestionsCount: () => number;
};

const getNextQuestionIndex = (mainIndex: number, simpleIndex: number): { nextMain: number, nextSimple: number } => {
  if (mainIndex >= questions.length) {
    return { nextMain: mainIndex, nextSimple: -1 };
  }

  const currentQuestion = questions[mainIndex];

  if (currentQuestion.type === 'mainPassion' && simpleIndex !== -1) {
    const nextSimple = simpleIndex + 1;
    if (nextSimple < currentQuestion.simpleQuestions.length) {
      return { nextMain: mainIndex, nextSimple };
    }
  }
  
  let nextMain = mainIndex + 1;
  
  while(nextMain < questions.length) {
    const nextQuestion = questions[nextMain];
    if (nextQuestion.type === 'mainPassion' || nextQuestion.type === 'convenience') {
      break; 
    }
    nextMain++;
  }

  return { nextMain, nextSimple: -1 };
};

export const useQuizStore = create<QuizState>((set, get) => ({
  answers: [],
  mainQuestionIndex: 0,
  simpleQuestionIndex: -1,
  isCompleted: false,
  totalQuestions: INITIAL_QUESTION_COUNT,
  questionsAnswered: 0,
  answerHistory: [],

  startQuiz: () => {
    set({
      answers: [],
      mainQuestionIndex: 0,
      simpleQuestionIndex: -1,
      isCompleted: false,
      totalQuestions: INITIAL_QUESTION_COUNT,
      questionsAnswered: 0,
      answerHistory: [],
    });
  },

  answerQuestion: (answer: string, onComplete) => {
    const currentQuestion = get().getCurrentQuestion();
    if (!currentQuestion || get().isCompleted) return;

    let currentAnswers = [...get().answers];
    const currentMainIndex = get().mainQuestionIndex;
    const currentSimpleIndex = get().simpleQuestionIndex;
    
    // Add to answer history
    set(state => ({
      answerHistory: [
        ...state.answerHistory,
        {
          mainIndex: currentMainIndex,
          simpleIndex: currentSimpleIndex,
          answer: answer,
          timestamp: Date.now()
        }
      ]
    }));
    
    if (currentQuestion.type !== 'mainPassion') {
      currentAnswers.push(answer);
    }
    
    if (currentQuestion.type === 'mainPassion' && answer === '1') {
        set(state => ({ 
          totalQuestions: state.totalQuestions + (currentQuestion as MainPassionQuestion).simpleQuestions.length 
        }));
    }

    if (currentQuestion.type === 'mainPassion' && answer !== '1') {
      currentAnswers.push(answer);
      let { mainQuestionIndex, simpleQuestionIndex } = get();
      const { nextMain, nextSimple } = getNextQuestionIndex(mainQuestionIndex, -1);
      mainQuestionIndex = nextMain;
      simpleQuestionIndex = nextSimple;
      set(state => ({ 
        answers: currentAnswers, 
        mainQuestionIndex, 
        simpleQuestionIndex, 
        questionsAnswered: state.questionsAnswered + 1 
      }));
      
      if (mainQuestionIndex >= questions.length) {
          set({ isCompleted: true });
          onComplete(get().generateCode());
      }
      return;
    }
    
    let { mainQuestionIndex, simpleQuestionIndex } = get();

    if (currentQuestion.type === 'mainPassion' && answer === '1') {
       currentAnswers.push(answer);
       if (currentQuestion.simpleQuestions.length > 0) {
           simpleQuestionIndex = 0;
       } else {
            const { nextMain, nextSimple } = getNextQuestionIndex(mainQuestionIndex, -1);
            mainQuestionIndex = nextMain;
            simpleQuestionIndex = nextSimple;
       }
    } else {
      const { nextMain, nextSimple } = getNextQuestionIndex(mainQuestionIndex, simpleQuestionIndex);
      mainQuestionIndex = nextMain;
      simpleQuestionIndex = nextSimple;
    }

    set(state => ({ 
      answers: currentAnswers, 
      mainQuestionIndex, 
      simpleQuestionIndex, 
      questionsAnswered: state.questionsAnswered + 1 
    }));

    if (mainQuestionIndex >= questions.length) {
      set({ isCompleted: true });
      onComplete(get().generateCode());
    }
  },
  
  getCurrentQuestion: () => {
    const { mainQuestionIndex, simpleQuestionIndex } = get();
    if (mainQuestionIndex >= questions.length) return null;
    
    const question = questions[mainQuestionIndex];
    if (question.type === 'mainPassion' && simpleQuestionIndex !== -1) {
      return (question as MainPassionQuestion).simpleQuestions[simpleQuestionIndex] as SimplePassionQuestion;
    }
    return question;
  },

  getProgress: () => {
    const { mainQuestionIndex, simpleQuestionIndex, isCompleted, answers } = get();
    
    if (isCompleted) return 100;
    
    // Calculate total questions for current path
    let totalForPath = 1; // Type question
    
    // Add main passion questions
    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      if (question.type === 'type') continue; // Already counted
      
      if (question.type === 'mainPassion') {
        // Check if we've answered this question
        if (i < mainQuestionIndex) {
          const answer = answers[i];
          if (answer === '1') {
            // Answered "Yes" - count main + 5 simple questions
            totalForPath += 1 + 5; // Main + 5 simple
          } else {
            // Answered "No" or "Not Sure" - count only main question
            totalForPath += 1;
          }
        } else if (i === mainQuestionIndex) {
          // Current question - add it
          totalForPath += 1;
          // If we're answering simple questions, add them as we go
          if (simpleQuestionIndex >= 0) {
            totalForPath += simpleQuestionIndex; // Simple questions answered so far
          }
        } else {
          // Future question - assume "No" (minimum path) for calculation
          totalForPath += 1;
        }
      } else if (question.type === 'convenience') {
        // Convenience questions - always 1 each
        totalForPath += 1;
      }
    }
    
    // Calculate completed questions
    let completed = 0;
    
    // Count through answered questions
    for (let i = 0; i < mainQuestionIndex; i++) {
      const question = questions[i];
      if (question.type === 'mainPassion') {
        const answer = answers[i];
        if (answer === '1') {
          completed += 1 + 5; // Main + all 5 simple questions
        } else {
          completed += 1; // Just main question
        }
      } else {
        completed += 1; // Type or convenience question
      }
    }
    
    // Add progress for current question
    if (mainQuestionIndex < questions.length) {
      const currentQuestion = questions[mainQuestionIndex];
      
      if (currentQuestion.type === 'mainPassion' && simpleQuestionIndex >= 0) {
        // We're answering simple questions
        completed += simpleQuestionIndex + 1; // +1 for the main question we answered "Yes" to
      } else if (mainQuestionIndex < answers.length) {
        // We've answered the current main question
        completed += 1;
      }
      // If we haven't answered the current question yet, don't add to completed
    }
    
    // Calculate percentage
    const progress = totalForPath > 0 ? (completed / totalForPath) * 100 : 0;
    
    return Math.min(100, Math.max(0, Math.round(progress)));
  },

  generateCode: () => {
    return get().answers.join('');
  },

  goToPreviousQuestion: () => {
    const state = get();
    
    if (state.answerHistory.length > 0) {
      const lastAnswer = state.answerHistory[state.answerHistory.length - 1];
      const newHistory = state.answerHistory.slice(0, -1);
      
      const newAnswers = state.answers.slice(0, -1);
      
      const question = questions[lastAnswer.mainIndex];
      let newTotalQuestions = state.totalQuestions;
      let questionsToSubtract = 1;
      
      if (question.type === 'mainPassion' && lastAnswer.answer === '1') {
        newTotalQuestions -= 5; // Subtract 5 simple questions
        questionsToSubtract = 1 + 5; // Main + 5 simple questions
      }
      
      set({
        mainQuestionIndex: lastAnswer.mainIndex,
        simpleQuestionIndex: lastAnswer.simpleIndex,
        answers: newAnswers,
        questionsAnswered: Math.max(0, state.questionsAnswered - questionsToSubtract),
        totalQuestions: Math.max(INITIAL_QUESTION_COUNT, newTotalQuestions),
        answerHistory: newHistory,
        isCompleted: false
      });
    } else {
      const { mainQuestionIndex, simpleQuestionIndex, answers } = state;
      
      let newMainIndex = mainQuestionIndex;
      let newSimpleIndex = simpleQuestionIndex;
      let newQuestionsAnswered = state.questionsAnswered;
      
      if (simpleQuestionIndex > 0) {
        newSimpleIndex = simpleQuestionIndex - 1;
        newQuestionsAnswered = Math.max(0, state.questionsAnswered - 1);
      } else if (simpleQuestionIndex === 0) {
        newSimpleIndex = -1;
        newQuestionsAnswered = Math.max(0, state.questionsAnswered - 1);
      } else if (mainQuestionIndex > 0) {
        newMainIndex = mainQuestionIndex - 1;
        const prevQuestion = questions[newMainIndex];
        
        if (prevQuestion.type === 'mainPassion') {
          const prevAnswer = answers[newMainIndex];
          if (prevAnswer === '1') {
            newSimpleIndex = 4; // Go to last simple question (index 4)
            newQuestionsAnswered = Math.max(0, state.questionsAnswered - (1 + 5));
          } else {
            newSimpleIndex = -1;
            newQuestionsAnswered = Math.max(0, state.questionsAnswered - 1);
          }
        } else {
          newSimpleIndex = -1;
          newQuestionsAnswered = Math.max(0, state.questionsAnswered - 1);
        }
      }
      
      set({ 
        mainQuestionIndex: newMainIndex,
        simpleQuestionIndex: newSimpleIndex,
        questionsAnswered: newQuestionsAnswered,
        isCompleted: false
      });
    }
  },

  resetCurrentAnswer: () => {
    const state = get();
    const currentQuestion = state.getCurrentQuestion();
    
    if (!currentQuestion) return;
    
    const lastAnswerIndex = state.answerHistory.findLastIndex(
      entry => entry.mainIndex === state.mainQuestionIndex && 
              entry.simpleIndex === state.simpleQuestionIndex
    );
    
    if (lastAnswerIndex !== -1) {
      const lastAnswer = state.answerHistory[lastAnswerIndex];
      
      const newHistory = [
        ...state.answerHistory.slice(0, lastAnswerIndex),
        ...state.answerHistory.slice(lastAnswerIndex + 1)
      ];
      
      let newAnswers = [...state.answers];
      if (newAnswers.length > 0) {
        newAnswers.pop();
      }
      
      const question = questions[lastAnswer.mainIndex];
      let newTotalQuestions = state.totalQuestions;
      let questionsToSubtract = 1;
      
      if (question.type === 'mainPassion' && lastAnswer.answer === '1') {
        newTotalQuestions -= 5;
        questionsToSubtract = 1 + 5;
      }
      
      set({
        answers: newAnswers,
        questionsAnswered: Math.max(0, state.questionsAnswered - questionsToSubtract),
        totalQuestions: Math.max(INITIAL_QUESTION_COUNT, newTotalQuestions),
        answerHistory: newHistory
      });
    }
  },

  canGoBack: () => {
    const { mainQuestionIndex, simpleQuestionIndex, answerHistory } = get();
    return answerHistory.length > 0 || mainQuestionIndex > 0 || simpleQuestionIndex > 0;
  },

  getCurrentQuestionIndex: () => {
    const state = get();
    let questionNumber = 0;
    
    for (let i = 0; i < state.mainQuestionIndex; i++) {
      const question = questions[i];
      if (question.type === 'mainPassion') {
        const answer = state.answers[i];
        if (answer === '1') {
          questionNumber += 1 + 5; // Main + 5 simple
        } else {
          questionNumber += 1;
        }
      } else {
        questionNumber += 1;
      }
    }
    
    if (state.mainQuestionIndex < questions.length) {
      const currentQuestion = questions[state.mainQuestionIndex];
      if (currentQuestion.type === 'mainPassion' && state.simpleQuestionIndex >= 0) {
        questionNumber += state.simpleQuestionIndex + 1;
      } else {
        questionNumber += 1;
      }
    }
    
    return Math.max(1, questionNumber);
  },

  getTotalQuestionsCount: () => {
    return get().totalQuestions;
  }
}));