'use client';

import AnimatedCursor from 'react-animated-cursor';
import { useTheme } from '@/context/theme-context';

const Cursor = (): React.JSX.Element => {
  const { theme } = useTheme();

  return (
    <div className="cursor__dot">
      <AnimatedCursor
        innerSize={20}
        outerSize={35}
        color={theme === 'light' ? '49, 195, 231' : '255, 255 ,255'}
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={3}
      />
    </div>
  );
};

export default Cursor;
