import { Reveal } from 'components/Reveal/Reveal';
import { socialIcons } from 'components/socialIcons';
import portfolio from 'data/portfolio';

import styles from './Contact.module.css';

export function Contact() {
  const { name, email } = portfolio.profile;
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contact" className={styles.contact}>
        <div className="container">
          <Reveal className={styles.inner}>
            <p className={styles.eyebrow}>05 — What&apos;s next</p>
            <h2 className={styles.title}>Get in touch</h2>
            <p className={styles.text}>
              I&apos;m always happy to talk about machine learning, full-stack work, or a role that
              might be a good fit. My inbox is open — let&apos;s build something.
            </p>
            <a className={styles.emailBtn} href={`mailto:${email}`}>
              Say hello
            </a>

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
          </Reveal>
        </div>
      </section>

      <footer className={styles.footer}>
        <div className="container">
          <span>
            © {year} {name}
          </span>
          <span className={styles.builtWith}>Designed &amp; built with React + Vite</span>
        </div>
      </footer>
    </>
  );
}
