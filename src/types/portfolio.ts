export type NavItem = {
  label: string;
  href: string;
};

export type SocialLink = {
  id: string;
  label: string;
  href: string;
  icon: "linkedin" | "email" | "whatsapp";
};

export type ContactInfo = {
  email: string;
  phone: string;
  phoneHref: string;
  whatsappUrl: string;
  location: string;
};

export type Experience = {
  id: string;
  role: string;
  title: string;
  company: string;
  period: string;
  bullets: string[];
  url?: string;
  urlLabel?: string;
};

export type Education = {
  id: string;
  school: string;
  program: string;
  period: string;
  detail?: string;
};

export type Statistic = {
  id: string;
  value: string;
  label: string;
};

export type Project = {
  id: string;
  title: string;
  category: string;
  thumbnail: string;
  images: string[];
  demoUrl: string;
  demoLabel?: string;
  description: string;
  isFeatured: boolean;
};

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "palette" | "monitor" | "strategy" | "mobile" | "brand" | "motion";
};

export type SkillItem = {
  id: string;
  name: string;
  icon:
    | "html"
    | "css"
    | "php"
    | "mysql"
    | "flutter"
    | "firebase"
    | "teamwork"
    | "communication"
    | "problemSolving";
};

export type Profile = {
  firstName: string;
  fullName: string;
  role: string;
  roles: string[];
  skills: string[];
  bio: string;
  aboutTitle: string;
  aboutHighlight: string;
  aboutDescription: string;
  heroImage: string;
  aboutImage: string;
};
