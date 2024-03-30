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
    // Note: thằng bọc ngoài cùng bắt buộc phải có position để giữ cho 2 con mắt nằm trong phạm vi của con minion
    // Em có thể giảm kích thước của con minion = nhiều cách. Mà scale là đỡ phải canh chỉnh 2 con mắt lại nhất
    // Con mininon này có shadow nên nghĩ cách khác đi
    <main className="relative" ref={mainRef}>
      <img
        id="anchor"
        src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/minion.png"
        alt="Minion"
        className='relative z-10'
      />
      {/* 
      Note: chỉnh vị trì của 2 con mắt
      Để dễ nhìn thì cho cái border xung quanh con mắt cho dể canh chỉnh, xong rồi thì xóa đi
      Position của mắt phải thì giữ
      Nhớ là z-index 2 con mắt phải lớn hơn con minion
       */}
      {/* 2 con mắt này ko phải hình tròn =)))))) */}
      <div id="eyes" className="absolute z-20 flex top-[163px] left-[169px]   ">
        <img id='eye-left'
          className="eye border-red-600 border-2"
          src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
          style={{ bottom: 'calc(50% - 16px)', right: 'calc(50% - 16px)' }}
          alt="Eye"
        />
        <img
          id='eye-right'
          className="eye border-red-600 border-2 relative left-[29px] "
          src="https://raw.githubusercontent.com/ornelasedward/EyeFollow_effect/main/eye.png"
          style={{ bottom: 'calc(50% - 16px)', right: 'calc(50% - 248px)' }}
          alt="Eye"
        />
      </div>
    </main>
  );
}

export default EyeTracker;
