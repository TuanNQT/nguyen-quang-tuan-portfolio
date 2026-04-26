// src/hooks/useScroll.tsx
import { useEffect } from 'react';

export const useSmoothScroll = (): void => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (!link) {
        return;
      }

      const hash = link.hash?.trim();
      if (!hash || hash === '#') {
        return;
      }

      let targetElement: Element | null = null;
      try {
        targetElement = document.querySelector(hash);
      } catch {
        return;
      }

      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);
};
