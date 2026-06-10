import { ExternalLinkIcon } from 'components/Icons';
import { Reveal } from 'components/Reveal/Reveal';
import { Section } from 'components/Section/Section';
import { TagList } from 'components/Tag/TagList';
import portfolio from 'data/portfolio';

import styles from './Projects.module.css';

export function Projects() {
  const { projects } = portfolio;

  return (
    <Section id="projects" index="03" title="Projects">
      <div className={styles.grid}>
        {projects.map((project, i) => (
          <Reveal key={project.title} className={styles.cell} delay={i * 70}>
            <article className={styles.card}>
              <div className={styles.top}>
                <span className={styles.context}>{project.context}</span>
                {project.link && (
                  <a
                    className={styles.link}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title}`}
                  >
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>

              <h3 className={styles.title}>{project.title}</h3>
              <span className={styles.period}>{project.period}</span>

              <ul className={styles.highlights}>
                {project.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>

              <div className={styles.tags}>
                <TagList tags={project.tags} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
