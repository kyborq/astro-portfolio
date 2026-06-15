export interface Profile {
  name: string;
  title: string;
  tagline: string;
  location: string;
  bio: string;
  lookingFor: {
    label: string;
    items: string[];
  };
  contacts: Contact[];
  primaryContactHref: string;
  cv?: { label: string; href: string };
}

export interface Contact {
  label: string;
  value: string;
  href: string;
}

export interface Experience {
  company: string;
  location: string;
  url?: string;
  role: string;
  period: string;
  project: string;
  /** 1–2 строки про эффект для бизнеса, не про стек */
  impact: string;
  /** Пути к изображениям из public, например ['/experience/innostage.png'] */
  screenshots?: string[];
  highlights: string[];
  stack: string[];
}

export interface Project {
  title: string;
  description: string;
  /** Что именно делал сам — отдельно от командной работы */
  contribution: string;
  year: string;
  /** Пути к изображениям из public, например ['/projects/roxend.png'] */
  screenshots?: string[];
  url?: string;
  github?: string;
  stack: string[];
}

export interface Activity {
  title: string;
  role?: string;
  description: string;
  year: string;
  /** Обложка из public, например '/activities/coffee-and-code.png' */
  cover?: string;
  url?: string;
  /** Подпись ссылки, например 'YouTube'. Иначе — из домена */
  urlLabel?: string;
}
