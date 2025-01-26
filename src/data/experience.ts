import type { Props as ExperienceProp } from "../components/experience/props";

export const EXPERIENCE: ExperienceProp[] = [
  {
    dates: "Saas",
    title: "Index Context",
    company: "Fullstack",
    companyUrl: "https://github.com/rcrdevelop/index-context",
    description:
      "Diseño y desarrollo de una herramienta SaaS para gestionar informacion compleja de múltiples tiendas en tiempo real. Utilicé Next y Java para la sincronización y Tailwind CSS para una interfaz atractiva y funcional.",
    technologies: ["Next", "Java", "Tailwind CSS", "Openai"],
    logo: "/logos/nextjs-icon-dark-background.svg",
  },
  {
    dates: "Ecommerce",
    title: "Shopify",
    company: "FullStack",
    companyUrl: "https://headless.rcrdevelop.com",
    description:
      "Diseño y desarrollo de una solución completa de eCommerce para Dutch Pet utilizando Shopify Storefront API y Admin API. Implementé integraciones avanzadas como ReCharge para suscripciones, y optimicé la experiencia de usuario a través de layouts y flujos pixel-perfect creados en colaboración con el equipo de diseño.",
    technologies: [
      "Shopify Storefront API",
      "Shopify Admin API",
      "Nuxt",
      "Node.JS",
      "Liquid",
      "Tailwind",
    ],
    logo: "/logos/shopify_glyph_white.svg",
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
  },
  {
    dates: "Template",
    title: "Custom Shopify Theme",
    company: "Frontend",
    companyUrl: "https://store.rcrdevelop.com",
    description:
      "Creación de un tema personalizado para Shopify, optimizado para SEO y alto rendimiento. El proyecto incluyó diseño desde cero con Liquid y Tailwind CSS, priorizando la velocidad de carga y la usabilidad.",
    technologies: ["Shopify", "Liquid", "Tailwind CSS"],
    logo: "/logos/shopify_glyph_white.svg",
  }
];
