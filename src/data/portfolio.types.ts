/** Types for the portfolio content in `./portfolio.ts`. */

export type SocialIcon = 'github' | 'linkedin' | 'mail';

export interface SocialLink {
  label: string;
  href: string;
  icon: SocialIcon;
}

export interface Profile {
  name: string;
  /** Rotated through with a typewriter effect in the hero. */
  roles: string[];
  tagline: string;
  about: string;
  location: string;
  email: string;
  /** Path to a resume PDF in `public/`, or `null` to hide the button. */
  resumeUrl: string | null;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  highlights: string[];
  tags: string[];
}

export interface Project {
  title: string;
  context: string;
  period: string;
  highlights: string[];
  tags: string[];
  /** External link to the project, or `null` if there isn't one. */
  link: string | null;
}

export interface Award {
  title: string;
  period: string;
  description: string;
}

export interface PortfolioData {
  profile: Profile;
  socials: SocialLink[];
  skills: SkillGroup[];
  experiences: Experience[];
  projects: Project[];
  awards: Award[];
}
