import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Saas",
    title: "Index Context",
    company: "Fullstack",
    companyUrl: "https://github.com/rcrdevelop/index-context",
    description:
      "Diseño y desarrollo de una herramienta SaaS para gestionar informacion compleja de múltiples tiendas en tiempo real. Utilicé Next y Java para la sincronización y Tailwind CSS para una interfaz atractiva y funcional.",
    technologies: ["Next", "Tailwind CSS", "Openai"],
    logo: "/logos/nextjs-icon-dark-background.svg",
  },
  {
    dates: "Saas",
    title: "PICPRESS",
    company: "Backend",
    companyUrl: "https://picpress.techcraftpanda.com/",
    description:
      "Desarrollo de una plataforma SaaS que permite a los usuarios personalizar y gestionar contenido visual para impresión. Implementé soluciones con Vue.js y BigCommerce para una experiencia interactiva y altamente funcional.",
    technologies: [
      "Vue",
      "Firebase"
    ],
    logo: "/logos/Firebase Realtime Database_Standalone logomark.svg",
  }
];
