export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  // { name: 'Home', path: '/' },
  { name: 'Menu', path: '#menu' },
  { name: 'About', path: '#about' },
  { name: 'Gallery', path: '#gallery' },
  { name: 'Blog', path: '#blog' },
  { name: 'Contact', path: '#contact' },
];