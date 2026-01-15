// lib/feedback.ts
'use client';

export async function logUnsatisfiedResult(code: string, careerTitle: string) {
  try {
    // Track in Google Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'negative_feedback', {
        career_title: careerTitle,
        code: code,
        timestamp: new Date().toISOString(),
        url: window.location.href
      });
    }

    // Also save to localStorage
    if (typeof window !== 'undefined') {
      try {
        const feedbacks = JSON.parse(localStorage.getItem('career_quiz_feedback') || '[]');
        feedbacks.push({
          code,
          careerTitle,
          timestamp: new Date().toISOString(),
          type: 'unsatisfied'
        });
        localStorage.setItem('career_quiz_feedback', JSON.stringify(feedbacks));
        console.log('Feedback saved to localStorage');
      } catch (storageError) {
        console.log('localStorage not available or full');
      }
    }

    return { success: true };
  } catch (error) {
    console.error('Failed to log feedback:', error);
    return { success: false, error: 'Failed to save feedback.' };
  }
}