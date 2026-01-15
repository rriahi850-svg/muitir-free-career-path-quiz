'use client';

export default function QuestionWrapper({ children, themeColor }: { children: React.ReactNode, themeColor?: string }) {
  const gradientStyle = themeColor
    ? { background: `radial-gradient(ellipse at 50% 0%, ${themeColor}25, transparent 70%)` }
    : {};

  return (
    <main
      className="flex-1 flex items-center justify-center p-4 transition-all duration-700"
      style={gradientStyle}
    >
      <div className="w-full max-w-3xl">
        {children}
      </div>
    </main>
  );
}
