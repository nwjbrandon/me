import { useEffect, useState } from 'react';

import { ThemeToggle } from 'components/ThemeToggle/ThemeToggle';
import { NAV_ITEMS, NAV_SECTION_IDS } from 'config/nav';
import portfolio from 'data/portfolio';
import { useActiveSection } from 'hooks/useActiveSection';

import styles from './Navbar.module.css';

export function Navbar() {
  const { name, resumeUrl } = portfolio.profile;
  const active = useActiveSection(NAV_SECTION_IDS);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <nav className={`container ${styles.inner}`} aria-label="Primary">
        <a href="#top" className={styles.brand} onClick={close}>
          <span className={styles.mark}>B</span>
          <span className={styles.brandName}>{name}</span>
        </a>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div className={`${styles.menu} ${menuOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.links}>
            {NAV_ITEMS.map((item, i) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={active === item.id ? styles.linkActive : styles.link}
                  onClick={close}
                >
                  <span className={styles.linkIndex}>0{i + 1}.</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <div className={styles.actions}>
            {resumeUrl && (
              <a
                className={styles.resume}
                href={resumeUrl}
                target="_blank"
                rel="noreferrer"
                onClick={close}
              >
                Resume
              </a>
            )}
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
}
