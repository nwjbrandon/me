import { Reveal } from 'components/Reveal/Reveal';
import { Section } from 'components/Section/Section';
import { TagList } from 'components/Tag/TagList';
import portfolio from 'data/portfolio';

import styles from './Experience.module.css';

export function Experience() {
  const { experiences } = portfolio;

  return (
    <Section id="experience" index="02" title="Experience">
      <div className={styles.timeline}>
        {experiences.map((exp, i) => (
          <Reveal key={`${exp.company}-${exp.period}`} className={styles.item} delay={i * 60}>
            <span className={styles.dot} aria-hidden="true" />
            <article className={styles.card}>
              <span className={styles.period}>{exp.period}</span>
              <h3 className={styles.role}>
                {exp.role}
                <span className={styles.company}> · {exp.company}</span>
              </h3>
              <ul className={styles.highlights}>
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
              <TagList tags={exp.tags} />
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
