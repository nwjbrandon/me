import { ArrowDownIcon } from 'components/Icons';
import { socialIcons } from 'components/socialIcons';
import portfolio from 'data/portfolio';
import { useTypewriter } from 'hooks/useTypewriter';

import styles from './Hero.module.css';

export function Hero() {
  const { name, roles, tagline, resumeUrl } = portfolio.profile;
  const typed = useTypewriter(roles);

  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.inner}`}>
        <p className={styles.greeting}>Hi, my name is</p>

        <h1 className={styles.name}>{name}.</h1>

        <p className={styles.role}>
          <span className="gradient-text">{typed}</span>
          <span className={styles.cursor} aria-hidden="true" />
        </p>

        <p className={styles.tagline}>{tagline}</p>

        <div className={styles.actions}>
          <a className={styles.primaryBtn} href="#projects">
            View my work
          </a>
          {resumeUrl ? (
            <a className={styles.ghostBtn} href={resumeUrl} target="_blank" rel="noreferrer">
              Download resume
            </a>
          ) : (
            <a className={styles.ghostBtn} href="#contact">
              Get in touch
            </a>
          )}
        </div>

        <ul className={styles.socials}>
          {portfolio.socials.map(({ label, href, icon }) => {
            const Icon = socialIcons[icon];
            return (
              <li key={label}>
                <a
                  href={href}
                  className={styles.social}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon />
                </a>
              </li>
            );
          })}
        </ul>
      </div>

      <a href="#about" className={styles.scrollHint} aria-label="Scroll to about section">
        <ArrowDownIcon />
      </a>
    </section>
  );
}
