import type { Career } from './careers';

interface MatchResult {
  career: Career;
  score: number;
  confidence: 'high' | 'medium' | 'low';
  reasons: string[];
}

const CATEGORY_NAMES = ['Practical', 'Technical', 'Business', 'Helping', 'Creative', 'Competitive'];

const TYPE_COMPATIBILITY: Record<string, Record<string, number>> = {
  'C': { 'C': 100, 'N': 80, 'P': 60, 'S': 40 },  
  'P': { 'P': 100, 'N': 80, 'C': 60, 'S': 50 },   
  'S': { 'S': 100, 'N': 80, 'C': 50, 'P': 40 },   
  'N': { 'N': 100, 'P': 80, 'S': 80, 'C': 80 }    
};

function getWeight(answer: string, isMain: boolean = true): number {
  if (answer === '0') return 0.5; 
  if (answer === '2') return 0.8; 
  if (answer === '1') return 1.0; 
  return 0.5;
}

function parseCode(code: string) {
  if (!code || code.length < 1) {
    return {
      type: 'N',
      mainAnswers: ['0', '0', '0', '0', '0', '0'],
      simpleAnswers: [[], [], [], [], [], []],
      convenience: '00000000'
    };
  }

  const type = code[0];
  let position = 1;
  const mainAnswers: string[] = [];
  const simpleAnswers: string[][] = [[], [], [], [], [], []];
  for (let i = 0; i < 6; i++) {
    if (position >= code.length - 8) {
      mainAnswers.push('0');
      continue;
    }
    
    const mainAnswer = code[position] || '0';
    mainAnswers.push(mainAnswer);
    position++; 
    if (mainAnswer === '1' && position + 5 <= code.length - 8) {
      simpleAnswers[i] = code.slice(position, position + 5).split('');
      position += 5;
    }
  }  
  const convenience = code.slice(-8).padEnd(8, '0');
  
  return { type, mainAnswers, simpleAnswers, convenience };
}
function calculateMatchScore(userCode: string, careerCode: string): { score: number, reasons: string[] } {
  const reasons: string[] = [];
  
  try {
    if (userCode === careerCode) {
      return { score: 100, reasons: ["Perfect match - your answers align exactly with this career"] };
    }
    
    const user = parseCode(userCode);
    const career = parseCode(careerCode);
    
    const typeScore = TYPE_COMPATIBILITY[user.type]?.[career.type] || 50;
    if (user.type === career.type) {
      reasons.push(`Same personality type (${user.type})`);
    }  
    let mainScoreTotal = 0;
    let mainWeightTotal = 0;
    let strongMatches = 0;
    let weakMatches = 0;
    
    for (let i = 0; i < 6; i++) {
      const userAnswer = user.mainAnswers[i] || '0';
      const careerAnswer = career.mainAnswers[i] || '0';
      const userWeight = getWeight(userAnswer);
      
      let matchValue = 0;
      
      if (userAnswer === careerAnswer) {
        if (userAnswer === '1') {
          matchValue = 100; 
          strongMatches++;
          if (userWeight > 0.8) {
            reasons.push(`Strong interest in ${CATEGORY_NAMES[i]}`);
          }
        } else if (userAnswer === '2') {
          matchValue = 80;
        } else {
          matchValue = 60;
          weakMatches++;
        }
      } else {
        if (userAnswer === '0' || careerAnswer === '0') {
          matchValue = 40;
          weakMatches++;
        } else if ((userAnswer === '1' && careerAnswer === '2') || 
                   (userAnswer === '2' && careerAnswer === '1')) {
          if (userWeight > 0.8) {
            matchValue = 10; 
          } else {
            matchValue = 30;
          }
        } else {
          matchValue = 50;
        }
      }
      
      mainScoreTotal += matchValue * userWeight;
      mainWeightTotal += 100 * userWeight;
    }
    
    const mainScore = mainWeightTotal > 0 ? (mainScoreTotal / mainWeightTotal) * 100 : 50;  
    let simpleScore = 50;
    let simpleMatches = 0;
    let simpleTotal = 0;
    
    for (let i = 0; i < 6; i++) {
      if (user.mainAnswers[i] === '1' && career.mainAnswers[i] === '1') {
        const userSimples = user.simpleAnswers[i] || [];
        const careerSimples = career.simpleAnswers[i] || [];
        const minLength = Math.min(userSimples.length, careerSimples.length, 5);
        
        for (let j = 0; j < minLength; j++) {
          simpleTotal++;
          if (userSimples[j] === careerSimples[j]) {
            simpleMatches++;
          }
        }
      }
    }
    
    if (simpleTotal > 0) {
      simpleScore = (simpleMatches / simpleTotal) * 100;
    }  
    let workStyleScore = 50;
    let workStyleMatches = 0;
    
    for (let i = 0; i < 8; i++) {
      const userStyle = user.convenience[i] || '0';
      const careerStyle = career.convenience[i] || '0';
      
      if (userStyle === careerStyle) {
        workStyleMatches++;
      } else if (userStyle === '0' || careerStyle === '0') {
        workStyleMatches += 0.5;
      }
     
    }
    
    workStyleScore = (workStyleMatches / 8) * 100;
    if (workStyleScore > 80) {
      reasons.push("Compatible work style preferences");
    }
    const userCertainty = strongMatches / 6;
    const weights = {
      type: 20,
      main: 50,
      simple: 15,
      workStyle: 15
    };
    if (userCertainty > 0.5) {
      weights.main = 60;
      weights.type = 15;
    }
    
    const finalScore = Math.round(
      (typeScore * weights.type / 100) +
      (mainScore * weights.main / 100) +
      (simpleScore * weights.simple / 100) +
      (workStyleScore * weights.workStyle / 100)
    );
    let adjustedScore = Math.min(100, Math.max(0, finalScore));
    if (strongMatches >= 3) {
      adjustedScore = Math.min(100, adjustedScore + 10);
      reasons.push("Multiple strong interest matches");
    }
    if (weakMatches > 3) {
      adjustedScore = Math.max(0, adjustedScore - 5);
    }
    if (adjustedScore >= 85) {
      reasons.unshift("Excellent match!");
    } else if (adjustedScore >= 70) {
      reasons.unshift("Good match");
    } else if (adjustedScore >= 50) {
      reasons.unshift("Moderate match");
    }
    if (reasons.length === 0) {
      reasons.push("Based on your assessment profile");
    }
    
    return { score: adjustedScore, reasons };
    
  } catch (error) {
    console.error('Error in calculateMatchScore:', error);
    return { score: 0, reasons: ["Error calculating match"] };
  }
}
export function findBestMatch(userCode: string, careerList: Career[]): Career | null {
  if (!userCode || !careerList?.length) return null;
  
  console.log(`Matching: ${userCode.substring(0, 30)}...`);
  const perfectMatch = careerList.find(c => c.code === userCode);
  if (perfectMatch) {
    console.log(`Perfect match: ${perfectMatch.title}`);
    return perfectMatch;
  }
  const user = parseCode(userCode);
  const userType = user.type;
  const userYesCount = user.mainAnswers.filter(a => a === '1').length;
  
  console.log(`User type: ${userType}, Strong interests: ${userYesCount}`);
  const filteredCareers = careerList
    .filter(c => {
      const careerType = c.code[0];
      return TYPE_COMPATIBILITY[userType]?.[careerType] >= 50;
    })
    .sort((a, b) => {
      const aDiff = Math.abs(a.code.length - userCode.length);
      const bDiff = Math.abs(b.code.length - userCode.length);
      return aDiff - bDiff;
    });
  
  console.log(`Considering ${filteredCareers.length} compatible careers`);
  const scoredCareers = filteredCareers.slice(0, 50).map(career => {
    const { score, reasons } = calculateMatchScore(userCode, career.code);
    return { career, score, reasons };
  });
  scoredCareers.sort((a, b) => b.score - a.score);
  console.log("Top matches:");
  scoredCareers.slice(0, 5).forEach((r, i) => {
    console.log(`  ${i + 1}. ${r.career.title}: ${r.score}%`);
  });
  const bestMatch = scoredCareers[0];
  if (bestMatch && bestMatch.score >= 40) {
    console.log(` Selected: ${bestMatch.career.title} (${bestMatch.score}%)`);
    return bestMatch.career;
  }
  
  console.log(` No good match, using fallback`);
  return careerList[0];
}

export function findBestMatches(userCode: string, careerList: Career[], limit: number = 5): MatchResult[] {
  if (!userCode || !careerList) return [];
  
  const results = careerList.map(career => {
    const { score, reasons } = calculateMatchScore(userCode, career.code);
    
    const confidence: 'high' | 'medium' | 'low' = 
      score >= 80 ? 'high' : 
      score >= 60 ? 'medium' : 'low';
    
    return {
      career,
      score,
      confidence,
      reasons: reasons.length > 0 ? reasons : ["General compatibility"]
    };
  });
  results.sort((a, b) => b.score - a.score);
  const uniqueResults: MatchResult[] = [];
  const seenTitles = new Set<string>();
  
  for (const result of results) {
    if (!seenTitles.has(result.career.title)) {
      seenTitles.add(result.career.title);
      uniqueResults.push(result);
    }
    if (uniqueResults.length >= limit) break;
  }
  
  return uniqueResults;
}
export function debugMatch(userCode: string, careerCode: string, careerTitle: string) {
  console.log(`\n DEBUG MATCH:`);
  console.log(`User:    ${userCode}`);
  console.log(`Career:  ${careerCode} (${careerTitle})`);
  
  const { score, reasons } = calculateMatchScore(userCode, careerCode);
  
  console.log(`Score: ${score}%`);
  console.log(`Reasons: ${reasons.join(', ')}`);
  const user = parseCode(userCode);
  const career = parseCode(careerCode);
  
  console.log('\nDetailed comparison:');
  console.log(`Type: ${user.type} vs ${career.type} (compatibility: ${TYPE_COMPATIBILITY[user.type]?.[career.type] || 50}%)`);
  
  console.log('\nMain passions:');
  for (let i = 0; i < 6; i++) {
    console.log(`  ${CATEGORY_NAMES[i]}: ${user.mainAnswers[i]} vs ${career.mainAnswers[i]}`);
  }
  
  console.log(`\nWork style: ${user.convenience} vs ${career.convenience}`);
  
  return { score, reasons };
}
export function testWithExamples() {
  console.log(' TESTING WITH EXAMPLE CODES');
  
  const accountantCode = "S2111111002011111212";
  const testCareer: Career = {
    code: accountantCode,
    title: "Accountant",
    description: "Test",
    benefits: []
  };
  
  const result = findBestMatch(accountantCode, [testCareer]);
  console.log(`Perfect match test: ${result?.title} (expected: Accountant)`);
  
  const similarCode = "S2111111002011111211";
  const { score } = calculateMatchScore(accountantCode, similarCode);
  console.log(`Similar code match: ${score}%`);
  const differentCode = "N2111111002011111212";
  const { score: score2 } = calculateMatchScore(accountantCode, differentCode);
  console.log(`Different type match: ${score2}%`);
  
  return "Tests complete";
}
