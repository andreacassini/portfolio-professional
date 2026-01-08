'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

export default function TopLoader() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Simulate route change progress
    setVisible(true);
    setProgress(5);
    const t1 = setTimeout(() => setProgress(35), 100);
    const t2 = setTimeout(() => setProgress(65), 250);
    const t3 = setTimeout(() => setProgress(85), 500);
    const t4 = setTimeout(() => {
      setProgress(100);
      setTimeout(() => setVisible(false), 200);
      setTimeout(() => setProgress(0), 400);
    }, 750);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, [pathname]);

  if (!visible && progress === 0) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '3px',
      zIndex: 1000,
      background: 'transparent'
    }}>
      <div style={{
        width: `${progress}%`,
        height: '100%',
        background: 'var(--accent-primary)',
        boxShadow: 'var(--shadow-glow)',
        transition: 'width 200ms var(--ease-smooth)'
      }} />
    </div>
  );
}
