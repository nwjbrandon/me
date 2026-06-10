import type { ComponentType } from 'react';

import type { SocialIcon } from 'data/portfolio.types';

import { GithubIcon, type IconProps, LinkedinIcon, MailIcon } from './Icons';

/** Maps a social-link icon name from the data file to its component. */
export const socialIcons: Record<SocialIcon, ComponentType<IconProps>> = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon,
};
