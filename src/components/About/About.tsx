import { Reveal } from 'components/Reveal/Reveal';
import { Section } from 'components/Section/Section';
import { TagList } from 'components/Tag/TagList';
import portfolio from 'data/portfolio';

import styles from './About.module.css';

export function About() {
  const { about, location } = portfolio.profile;
  const { skills } = portfolio;

  return (
    <Section id="about" index="01" title="About">
      <div className={styles.grid}>
        <Reveal className={styles.bio}>
          <p>{about}</p>
          <p className={styles.meta}>
            Based in <strong>{location}</strong> · open to interesting problems.
          </p>
        </Reveal>

        <Reveal className={styles.skills} delay={120}>
          <h3 className={styles.skillsHeading}>Tech I work with</h3>
          <div className={styles.groups}>
            {skills.map((group) => (
              <div key={group.label} className={styles.group}>
                <span className={styles.groupLabel}>{group.label}</span>
                <TagList tags={group.items} />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
