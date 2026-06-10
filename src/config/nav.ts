export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'awards', label: 'Awards' },
  { id: 'contact', label: 'Contact' },
];

/** Stable array of section ids, used by the active-section observer. */
export const NAV_SECTION_IDS = NAV_ITEMS.map((item) => item.id);
