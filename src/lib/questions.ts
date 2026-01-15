export type QuestionOption = {
  label: string;
  value: string;
};

export type TypeQuestion = {
  id: string;
  type: 'type';
  text: string;
  options: QuestionOption[];
  themeColor?: never;
};

export type SimplePassionQuestion = {
  id: string;
  type: 'simplePassion';
  text: string;
  options: [string, string];
  themeColor?: string;
};

export type MainPassionQuestion = {
  id: string;
  type: 'mainPassion';
  text: string;
  simpleQuestions: SimplePassionQuestion[];
  themeColor: string;
};

export type ConvenienceQuestion = {
  id: string;
  type: 'convenience';
  text: string;
  options: [string, string];
  themeColor?: string;
};

export type Question = TypeQuestion | MainPassionQuestion | SimplePassionQuestion | ConvenienceQuestion;

export const questions: Question[] = [
  {
    id: 'type',
    type: 'type',
    text: 'How would you describe yourself?',
    options: [
      { label: 'Creative', value: 'C' },
      { label: 'Physically Gifted / Talented Performer', value: 'P' },
      { label: 'Smart', value: 'S' },
      { label: 'Balanced', value: 'N' },
    ],
  },
  {
    id: 'passion-1',
    type: 'mainPassion',
    text: 'Do you enjoy working with your hands, building, fixing, or repairing things?',
    themeColor: '#e3871f',
    simpleQuestions: [
      {
        id: 'p1-s1',
        type: 'simplePassion',
        text: 'When you see a broken item (like a bike or a phone), is your first thought to try and fix it yourself?',
        options: ['Try to fix it', 'Look for someone else'],
      },
      {
        id: 'p1-s2',
        type: 'simplePassion',
        text: 'Do you prefer putting together detailed instructions (like furniture or models), or do you like creating something new from your own ideas?',
        options: ['Follow instructions', 'Create from my own ideas'],
      },
      {
        id: 'p1-s3',
        type: 'simplePassion',
        text: 'Would you rather work with traditional tools (like hammers and saws) or with technology (like fixing computers or electronics)?',
        options: ['Traditional tools', 'Technology'],
      },
      {
        id: 'p1-s4',
        type: 'simplePassion',
        text: 'Do you get more satisfaction from fixing something that\'s broken, or from building something from scratch?',
        options: ['Fixing the broken', 'Building from scratch'],
      },
      {
        id: 'p1-s5',
        type: 'simplePassion',
        text: 'Do you enjoy outdoor, physical projects (like gardening or building a fence), or indoor, detailed projects (like model-making or jewelry repair)?',
        options: ['Outdoor projects', 'Indoor projects'],
      },
    ],
  },
  {
    id: 'passion-2',
    type: 'mainPassion',
    text: 'Are you curious about how things work, and do you enjoy using technology or solving complex problems?',
    themeColor: '#9720ff',
    simpleQuestions: [
      {
        id: 'p2-s1',
        type: 'simplePassion',
        text: 'When you get a new gadget or download a new app, do you immediately explore all its features and settings?',
        options: ['Explore all features', 'Just use the basics'],
      },
      {
        id: 'p2-s2',
        type: 'simplePassion',
        text: 'If a website or program isn\'t working, do you try different things to fix it yourself before asking for help?',
        options: ['Try to fix it myself', 'Ask for help'],
      },
      {
        id: 'p2-s3',
        type: 'simplePassion',
        text: 'Do you enjoy puzzles, riddles, or strategy games that challenge you to think logically step-by-step?',
        options: ['Enjoy logic games', 'Not really my thing'],
      },
      {
        id: 'p2-s4',
        type: 'simplePassion',
        text: 'When you see a new machine, is your first thought "I wonder how they built that" or "What would make it work better?"',
        options: ['How it was built', 'How to improve it'],
      },
      {
        id: 'p2-s5',
        type: 'simplePassion',
        text: 'Do you prefer tasks where you follow clear instructions, or do you get bored and prefer to find your own, more efficient way?',
        options: ['Follow instructions', 'Find my own way'],
      },
    ],
  },
  {
    id: 'passion-3',
    type: 'mainPassion',
    text: 'Do you enjoy persuading people, selling things, or coming up with business ideas?',
    themeColor: '#7af0ff',
    simpleQuestions: [
      {
        id: 'p3-s1',
        type: 'simplePassion',
        text: 'If a friend disagrees with you on a plan, do you naturally try to convince them, or do you quickly go along with their choice?',
        options: ['Try to convince them', 'Go with their choice'],
      },
      {
        id: 'p3-s2',
        type: 'simplePassion',
        text: 'When you see a problem, is your first thought to brainstorm a new service or event to fix it?',
        options: ['Brainstorm a solution', 'Hope someone else fixes it'],
      },
      {
        id: 'p3-s3',
        type: 'simplePassion',
        text: 'Do you feel a sense of achievement when you successfully negotiate for something, like a better price or a compromise?',
        options: ['Feel achievement', 'Avoid negotiation'],
      },
      {
        id: 'p3-s4',
        type: 'simplePassion',
        text: 'Would you rather be responsible for your own project and its success, even if it\'s risky?',
        options: ['Take responsibility', 'Prefer assigned tasks'],
      },
      {
        id: 'p3-s5',
        type: 'simplePassion',
        text: 'When you hear a friend\'s problem, do you often think of a product or service that could help them?',
        options: ['Think of solutions', 'Just listen'],
      },
    ],
  },
  {
    id: 'passion-4',
    type: 'mainPassion',
    text: 'Do you get deep satisfaction from helping, teaching, or caring for others?',
    themeColor: '#26ff63',
    simpleQuestions: [
      {
        id: 'p4-s1',
        type: 'simplePassion',
        text: 'When someone is upset, do you feel a strong need to comfort them and try to make them feel better?',
        options: ['Feel strong need to comfort', 'Give them space'],
      },
      {
        id: 'p4-s2',
        type: 'simplePassion',
        text: 'Do you enjoy it when a friend asks you to explain something you know well, just to hear you explain it?',
        options: ['Enjoy explaining', 'Find it a bit tedious'],
      },
      {
        id: 'p4-s3',
        type: 'simplePassion',
        text: 'Would you rather help someone by doing a practical task for them or by giving them advice and listening?',
        options: ['Do a practical task', 'Give advice and listen'],
      },
      {
        id: 'p4-s4',
        type: 'simplePassion',
        text: 'In a group, do you naturally notice if someone is being left out and feel responsible for including them?',
        options: ['Naturally notice and include', 'Might not notice'],
      },
      {
        id: 'p4-s5',
        type: 'simplePassion',
        text: 'Does your mood improve after you\'ve spent time actively helping someone, even if it was tiring?',
        options: ['Mood improves', 'Feel drained'],
      },
    ],
  },
  {
    id: 'passion-5',
    type: 'mainPassion',
    text: 'Do you have a strong need to express yourself creatively, through art, writing, performance, or design?',
    themeColor: '#ff00ea',
    simpleQuestions: [
      {
        id: 'p5-s1',
        type: 'simplePassion',
        text: 'When you have a free afternoon, do you often choose to do something creative (like draw, write, or craft) just for fun?',
        options: ['Choose creative activity', 'Choose something else'],
      },
      {
        id: 'p5-s2',
        type: 'simplePassion',
        text: 'Do you often feel a strong urge to share your creative projects with others, or do you mainly keep them to yourself?',
        options: ['Urge to share', 'Keep them to myself'],
      },
      {
        id: 'p5-s3',
        type: 'simplePassion',
        text: 'Do you get ideas for creative projects so often that you wish you had more time to bring them all to life?',
        options: ['Have many ideas', 'Rarely get ideas'],
      },
      {
        id: 'p5-s4',
        type: 'simplePassion',
        text: 'Is the process of creating more satisfying to you than the finished product itself?',
        options: ['Process over product', 'Product over process'],
      },
      {
        id: 'p5-s5',
        type: 'simplePassion',
        text: 'Do you often find yourself thinking of more creative or interesting ways to do everyday things?',
        options: ['Think of creative ways', 'Stick to the usual way'],
      },
    ],
  },
  {
    id: 'passion-6',
    type: 'mainPassion',
    text: 'Do you thrive on competition, performance, and testing your skills against others?',
    themeColor: '#ff0b0b',
    simpleQuestions: [
      {
        id: 'p6-s1',
        type: 'simplePassion',
        text: 'Do you prefer games and activities where there\'s a clear winner, or just for fun without keeping score?',
        options: ['Prefer a clear winner', 'Just for fun'],
      },
      {
        id: 'p6-s2',
        type: 'simplePassion',
        text: 'When you see someone who is very good at something, does it make you want to practice harder to be better?',
        options: ['Want to practice harder', 'Feel impressed but not competitive'],
      },
      {
        id: 'p6-s3',
        type: 'simplePassion',
        text: 'Do you feel more excited or more nervous when you have to perform a skill in front of a group?',
        options: ['More excited', 'More nervous'],
      },
      {
        id: 'p6-s4',
        type: 'simplePassion',
        text: 'After a loss or a mistake, is your first thought to learn from it for next time?',
        options: ['Learn from it', 'Feel discouraged'],
      },
      {
        id: 'p6-s5',
        type: 'simplePassion',
        text: 'Is the biggest reward the prize/recognition, or the satisfaction of knowing you pushed yourself to your limit?',
        options: ['The prize/recognition', 'The personal satisfaction'],
      },
    ],
  },
  {
    id: 'convenience-1',
    type: 'convenience',
    text: 'Do you prefer a quiet space to work by yourself, or a busy area where you can talk with others?',
    options: ['Quiet space alone', 'Busy area with others'],
  },
  {
    id: 'convenience-2',
    type: 'convenience',
    text: 'Do you like making decisions by yourself, or do you prefer making decisions together with others?',
    options: ['By myself', 'Together with others'],
  },
  {
    id: 'convenience-3',
    type: 'convenience',
    text: 'Is it easier for you to focus when you\'re alone, or when you\'re surrounded by people?',
    options: ['Alone', 'With people'],
  },
  {
    id: 'convenience-4',
    type: 'convenience',
    text: 'When you learn something new, do you like to practice by yourself first, or with a partner?',
    options: ['By myself', 'With a partner'],
  },
  {
    id: 'convenience-5',
    type: 'convenience',
    text: 'Do you prefer jobs where your success is based on your own work, or on the team\'s work?',
    options: ['My own work', "The team's work"],
  },
  {
    id: 'convenience-6',
    type: 'convenience',
    text: 'Do you find meetings and group discussions slow you down, or do you often feel they are helpful?',
    options: ['They slow me down', 'they are helpful'],
  },
  {
    id: 'convenience-7',
    type: 'convenience',
    text: 'If you have a problem at work, is your first thought to solve it myself, or to talk it over with a coworker?',
    options: ['Solve it myself', 'Talk it over'],
  },
  {
    id: 'convenience-8',
    type: 'convenience',
    text: 'Do you enjoy the freedom of managing your own time, or do you like having a structured schedule with your team?',
    options: ['Managing my own time', 'Structured schedule'],
  },
];
