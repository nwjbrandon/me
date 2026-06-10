import type { ReactNode } from 'react';

import { Reveal } from 'components/Reveal/Reveal';

import styles from './Section.module.css';

interface SectionProps {
  id: string;
  /** Two-digit index shown before the title, e.g. "01". */
  index: string;
  title: string;
  children: ReactNode;
}

export function Section({ id, index, title, children }: SectionProps) {
  return (
    <section id={id} className={styles.section}>
      <div className="container">
        <Reveal>
          <header className={styles.header}>
            <span className={styles.index}>{index}</span>
            <h2 className={styles.title}>{title}</h2>
            <span className={styles.rule} aria-hidden="true" />
          </header>
        </Reveal>
        {children}
      </div>
    </section>
  );
}
