/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useEffect, useRef, useState } from 'react';

function EyeTracker() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const main = mainRef.current;
      if (!main) return;

      const mainRect = main.getBoundingClientRect();
      const centerX = mainRect.left + mainRect.width / 2;
      const centerY = mainRect.top + mainRect.height / 2;

      const angleDeg = calculateAngle(mouseX, mouseY, centerX, centerY);

      const eyes = document.querySelectorAll('.eye');
      eyes.forEach((eye: any) => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
      });
    }

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  });

  function calculateAngle(cx: number, cy: number, ex: number, ey: number) {
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx);
    const deg = (rad * 180) / Math.PI;
    return deg;
  }

  return (
    <main className="min-h-screen bg-white text-white" ref={mainRef}>
      <img
        id="anchor"
        src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/minion.png"
        alt="Minion"
      />
      <div id="eyes" className="absolute">
        <img
          className="eye"
          src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
          style={{ bottom: 'calc(50% - 16px)', right: 'calc(50% - 16px)' }}
          alt="Eye"
        />
        <img
          className="eye"
          src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
          style={{ bottom: 'calc(50% - 16px)', right: 'calc(50% - 248px)' }}
          alt="Eye"
        />
      </div>
    </main>
  );
}

export default EyeTracker;
