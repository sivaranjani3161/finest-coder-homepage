export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface NavbarData {
  logo: string;
  links: NavLink[];
  cta: {
    label: string;
    href: string;
  };
}