import { Reveal } from 'components/Reveal/Reveal';
import { Section } from 'components/Section/Section';
import portfolio from 'data/portfolio';

import styles from './Awards.module.css';

export function Awards() {
  const { awards } = portfolio;

  return (
    <Section id="awards" index="04" title="Awards">
      <div className={styles.grid}>
        {awards.map((award, i) => (
          <Reveal key={award.title} className={styles.cell} delay={i * 70}>
            <article className={styles.card}>
              <div className={styles.icon} aria-hidden="true">
                ★
              </div>
              <div>
                <h3 className={styles.title}>{award.title}</h3>
                <span className={styles.period}>{award.period}</span>
                <p className={styles.description}>{award.description}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
