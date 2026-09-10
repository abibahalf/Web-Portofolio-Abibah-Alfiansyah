import type {
  ContactInfo,
  Education,
  Experience,
  NavItem,
  Profile,
  Project,
  Service,
  SkillItem,
  SocialLink,
  Statistic,
} from "@/types/portfolio";

export const profile: Profile = {
  firstName: "Abibah",
  fullName: "Abibah Alfiansyah",
  role: "Web & Mobile Developer",
  roles: [
    "Web Developer",
    "Flutter Developer",
    "PHP Developer",
    "Mobile App Developer",
  ],
  skills: [
    "HTML",
    "CSS",
    "PHP",
    "MySQL",
    "Flutter (Mobile Development)",
    "Firebase",
    "Kerja Sama Tim",
    "Komunikasi",
    "Problem Solving",
  ],
  bio: "Lulusan S1 Sistem Informasi Universitas Bina Insani dengan pengalaman Web dan Mobile Development. Saya mengembangkan aplikasi Flutter/Dart serta sistem website dengan HTML, CSS, PHP, dan CodeIgniter.",
  aboutTitle: "I Am Available For Web & Mobile Project",
  aboutHighlight: "Web & Mobile",
  aboutDescription:
    "Saya lulusan S1 Sistem Informasi Universitas Bina Insani dengan pengalaman kerja di bidang Web dan Mobile Development. Terbiasa membangun serta mengembangkan aplikasi berbasis mobile menggunakan Flutter dan Dart, serta mengelola arsitektur dan sistem website berbasis HTML, CSS, PHP, dan CodeIgniter. Memiliki pemahaman alur pemrograman yang kuat, terbiasa bekerja dalam tim, dan berorientasi pada penyelesaian masalah.",
  heroImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
  aboutImage:
    "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
};

export const contact: ContactInfo = {
  email: "abibahalfian@gmail.com",
  phone: "+62 812-8534-3626",
  phoneHref: "tel:+6281285343626",
  whatsappUrl: "https://wa.me/6281285343626",
  location: "Bekasi, Jawa Barat",
};

export const navItems: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About Me", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abibah-alfiansyah-b91378209",
    icon: "linkedin",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:abibahalfian@gmail.com",
    icon: "email",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    href: "https://wa.me/6281285343626",
    icon: "whatsapp",
  },
];

export const skillItems: SkillItem[] = [
  { id: "html", name: "HTML", icon: "html" },
  { id: "css", name: "CSS", icon: "css" },
  { id: "php", name: "PHP", icon: "php" },
  { id: "mysql", name: "MySQL", icon: "mysql" },
  {
    id: "flutter",
    name: "Flutter",
    icon: "flutter",
  },
  { id: "firebase", name: "Firebase", icon: "firebase" },
  { id: "teamwork", name: "Kerja Sama Tim", icon: "teamwork" },
  { id: "communication", name: "Komunikasi", icon: "communication" },
  { id: "problem-solving", name: "Problem Solving", icon: "problemSolving" },
];

export const statistics: Statistic[] = [
  { id: "experience", value: "4+", label: "Pengalaman" },
  { id: "gpa", value: "3.24", label: "IPK" },
  { id: "skills", value: "9+", label: "Keahlian" },
];

export const experiences: Experience[] = [
  {
    id: "exp-atrindo-mobile",
    role: "Mobile App Developer",
    title: "Membuat Aplikasi Mobile",
    company: "PT. Atrindo Asia Global",
    period: "Januari 2025 — Sekarang",
    bullets: [
      "Mengembangkan dan merilis aplikasi mobile AAG Pest Control di Google Play Store menggunakan Flutter & Dart, serta memudahkan pengguna melakukan booking survey dan pemantauan treatment.",
      "Membangun aplikasi internal AAG Teknisi yang digunakan teknisi untuk melihat jadwal dan detail tugas, serta check-in kunjungan dengan foto dan live location.",
      "Mengintegrasikan Google Sign-In dan REST API untuk pelacakan status kerja secara real-time agar operasional lebih efisien.",
    ],
    url: "https://play.google.com/store/apps/details?id=com.flutter.aag4u",
    urlLabel: "Lihat di Google Play",
  },
  {
    id: "exp-atrindo-web",
    role: "Web Developer Intern",
    title: "Memperbaiki Website Yang Sudah Ada",
    company: "PT. Atrindo Asia Global",
    period: "Februari 2024 — Desember 2024",
    bullets: [
      "Anggota divisi IT dalam tim 2 orang, bertanggung jawab memperbaiki tampilan website.",
      "Memperbaiki website menggunakan WordPress.",
      "Membuat tampilan website menggunakan HTML.",
    ],
  },
  {
    id: "exp-elit-prima",
    role: "Web Developer Intern",
    title:
      "Sistem Informasi Tenant Portal Berbasis Web dengan CodeIgniter",
    company: "PT. Elit Prima Indonesia",
    period: "Oktober 2022 — Januari 2023",
    bullets: [
      "Anggota divisi Web Developer Tenant Portal dalam tim 2 orang, membuat tampilan website tenant portal.",
      "Mengelola website menggunakan CodeIgniter.",
      "Membuat tampilan website menggunakan HTML, PHP, dan Bootstrap.",
    ],
  },
  {
    id: "exp-kampus",
    role: "Anggota Tim Projek Web Developer",
    title:
      "Sistem Informasi Kegiatan Masyarakat Berbasis Web dengan CodeIgniter",
    company: "Mata Kuliah Web Programming, Universitas Bina Insani",
    period: "Mei 2021 — Juni 2021",
    bullets: [
      "Anggota tim 6 orang pada mata kuliah Web Programming.",
      "Bertugas membuat program sistem informasi kegiatan masyarakat.",
    ],
  },
];

export const education: Education[] = [
  {
    id: "edu-ubi",
    school: "Universitas Bina Insani",
    program: "S1 Sistem Informasi",
    period: "2019 — 2024",
    detail: "IPK 3.24",
  },
  {
    id: "edu-smk",
    school: "SMK Sumber Daya Bekasi",
    program: "Teknik Komputer dan Jaringan",
    period: "2016 — 2019",
  },
];

export const projects: Project[] = [
  {
    id: "proj-aag4u",
    title: "AAG Pest Control",
    category: "Flutter, Dart",
    thumbnail: "/projects/aag4u/beranda.png",
    images: [
      "/projects/aag4u/beranda.png",
      "/projects/aag4u/survey.png",
      "/projects/aag4u/promo.png",
    ],
    demoUrl: "https://play.google.com/store/apps/details?id=com.flutter.aag4u",
    demoLabel: "Google Play",
    description:
      "Aplikasi mobile AAG Pest Control yang dirilis di Google Play Store: booking survey, pemantauan treatment, promo, dan informasi layanan pest control.",
    isFeatured: true,
  },
  {
    id: "proj-teknisi",
    title: "AAG Teknisi",
    category: "Flutter, Dart",
    thumbnail: "/projects/teknisi/beranda.png",
    images: [
      "/projects/teknisi/beranda.png",
      "/projects/teknisi/jadwal.png",
      "/projects/teknisi/detail-tugas.png",
    ],
    demoUrl: "#",
    description:
      "Aplikasi internal teknisi AAG di PT. Atrindo Asia Global: jadwal dan detail tugas, check-in kunjungan, foto, serta live location.",
    isFeatured: true,
  },
];

export const services: Service[] = [
  {
    id: "svc-1",
    title: "Mobile Development",
    description:
      "Pengembangan aplikasi mobile dengan Flutter dan Dart, sesuai pengalaman di PT. Atrindo Asia Global.",
    icon: "mobile",
  },
  {
    id: "svc-2",
    title: "Web Development",
    description:
      "Membangun dan memperbaiki tampilan website dengan HTML, CSS, PHP, dan Bootstrap.",
    icon: "monitor",
  },
  {
    id: "svc-3",
    title: "CodeIgniter",
    description:
      "Mengelola dan mengembangkan sistem informasi berbasis web menggunakan CodeIgniter.",
    icon: "strategy",
  },
  {
    id: "svc-4",
    title: "WordPress",
    description:
      "Memperbaiki dan merapikan website yang sudah ada menggunakan WordPress.",
    icon: "palette",
  },
  {
    id: "svc-5",
    title: "Database MySQL",
    description:
      "Perancangan dan pengelolaan database MySQL untuk mendukung sistem informasi.",
    icon: "brand",
  },
  {
    id: "svc-6",
    title: "Firebase",
    description:
      "Integrasi Firebase untuk autentikasi, penyimpanan data, dan fitur real-time pada aplikasi.",
    icon: "motion",
  },
];
