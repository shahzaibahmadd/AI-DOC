import { useState, useEffect } from 'react';

export default function TypewriterText({ text, speed = 30, onComplete }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (!text || currentIndex >= text.length) {
      setIsTyping(false);
      onComplete?.();
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [currentIndex, text, speed, onComplete]);

  // Reset when text changes
  useEffect(() => {
    setDisplayedText('');
    setCurrentIndex(0);
    setIsTyping(true);
  }, [text]);

  return (
    <span className="relative">
      {displayedText}
      {isTyping && (
        <span className="animate-pulse text-emerald-400">|</span>
      )}
    </span>
  );
}
