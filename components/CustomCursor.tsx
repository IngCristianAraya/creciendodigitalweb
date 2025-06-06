// CustomCursor.tsx
'use client';
import React, { useEffect, useRef } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;

    const moveCursor = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    // Animación del punto azul con retraso
    let animationFrame: number;
    const animateDot = () => {
      dotX += (mouseX - dotX) * 0.18; // 0.18 = suavidad/retardo
      dotY += (mouseY - dotY) * 0.18;
      dot.style.transform = `translate(-50%, -50%) translate(${dotX - mouseX}px, ${dotY - mouseY}px)`;
      animationFrame = requestAnimationFrame(animateDot);
    };
    animateDot();

    const handleMouseDown = () => {
      cursor.classList.add('active');
    };
    const handleMouseUp = () => {
      cursor.classList.remove('active');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor">
      <div ref={dotRef} className="cursor-dot" />
    </div>
  );
};

export default CustomCursor;
