import type { CSSProperties, ReactNode } from 'react';

import { useReveal } from 'hooks/useReveal';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger the reveal by this many milliseconds. */
  delay?: number;
}

/** Fades + slides its children in when they first scroll into view. */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useReveal<HTMLDivElement>();
  const style: CSSProperties | undefined = delay ? { transitionDelay: `${delay}ms` } : undefined;

  return (
    <div ref={ref} className={className ? `reveal ${className}` : 'reveal'} style={style}>
      {children}
    </div>
  );
}
