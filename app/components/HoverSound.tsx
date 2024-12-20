"use client"
import { useHoverSound } from '../hooks/useHoverSound';
import { useEffect } from 'react';

export const HoverSound = () => {
  const playSound = useHoverSound();

  useEffect(() => {
    const handleHover = () => {
      playSound();
    };

    // Add hover sound to all interactive elements
    const elements = document.querySelectorAll(`
      a, 
      button,
      [role="button"],
      .modal,
      .hover-sound,
      div[class*="hover:"],
      div[class*="cursor-pointer"]
    `);
    
    elements.forEach((element) => {
      element.addEventListener('mouseenter', handleHover);
    });

    // Create a MutationObserver to watch for dynamically added elements
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node instanceof HTMLElement) {
            const newElements = node.querySelectorAll(`
              a, 
              button,
              [role="button"],
              .modal,
              .hover-sound,
              div[class*="hover:"],
              div[class*="cursor-pointer"]
            `);
            newElements.forEach((element) => {
              element.addEventListener('mouseenter', handleHover);
            });
          }
        });
      });
    });

    // Start observing the document with the configured parameters
    observer.observe(document.body, { 
      childList: true, 
      subtree: true 
    });

    return () => {
      elements.forEach((element) => {
        element.removeEventListener('mouseenter', handleHover);
      });
      observer.disconnect();
    };
  }, [playSound]);

  return null;
};
