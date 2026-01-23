export interface CVData {
  hero: {
    name: string;
    title: string;
    description: string;
    imageUrl?: string;
  };
  about: string[];
  skills: string[];
  experience: {
    id: string;
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];
  education: {
    id: string;
    degree: string;
    institution: string;
    year: string;
  }[];
  contact?:{
    github:string;
    linkedin:string;
    email:string;
  }
}

export type ThemeName = 'blue-tech' | 'slate-minimal' | 'emerald-night';

export interface Theme {
  name: ThemeName;
  label: string;
  colors: {
    primary: string;
    'primary-light': string;
    'primary-dark': string;
    secondary: string;
    background: string;
    'background-alt': string;
    text: string;
    'text-muted': string;
    accent: string;
  };
}
