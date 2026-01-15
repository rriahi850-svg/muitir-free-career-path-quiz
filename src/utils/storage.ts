// utils/storage.ts
export const getQuizResultCode = (): string | null => {
  if (typeof window === 'undefined') return null;
  
  // Try direct localStorage first
  let code = localStorage.getItem('quizResultCode');
  if (code) return code;
  
  // Try different port keys
  const ports = ['3000', '3001', '3002', '9000', '9002'];
  for (const port of ports) {
    code = localStorage.getItem(`quizResultCode_${port}`);
    if (code) {
      // Copy to current port
      localStorage.setItem('quizResultCode', code);
      return code;
    }
  }
  
  return null;
};

export const setQuizResultCode = (code: string): void => {
  if (typeof window === 'undefined') return;
  
  const port = window.location.port || '3000';
  
  // Save with port-specific key
  localStorage.setItem(`quizResultCode_${port}`, code);
  // Save with generic key
  localStorage.setItem('quizResultCode', code);
};