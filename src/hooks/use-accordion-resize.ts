import { useEffect } from 'react';

/**
 * Custom hook to handle accordion state changes and trigger resize events
 * for smooth scroll libraries like Lenis to recalculate document height
 */
export function useAccordionResize(isOpen: boolean, transitionDuration = 300) {
  useEffect(() => {
    const timer = setTimeout(() => {
      // Dispatch resize event to trigger smooth scroll recalculation
      window.dispatchEvent(new Event('resize'));
    }, transitionDuration + 50); // Add small buffer to transition duration

    return () => clearTimeout(timer);
  }, [isOpen, transitionDuration]);
}
