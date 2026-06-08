// Redes sociais e plataformas oficiais da ED² Tecnologic / Enos Alves Santos.
// Fonte ÚNICA de verdade — consumida pelo componente <SocialLinks />, que por
// sua vez é reutilizado na Navbar, Hero, Contato e Footer.
//
// Use SOMENTE links públicos e oficiais. Não adicione perfis pessoais privados
// nem repita o e-mail pessoal aqui (o contato já vive na ContactSection).

import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
  type LucideIcon,
} from "lucide-react";

export interface SocialLink {
  name: string;
  url: string;
  /** Texto acessível, lido por leitores de tela. */
  ariaLabel: string;
  /** Ícone lucide-react renderizado no botão. */
  icon: LucideIcon;
  /**
   * Marca o link como o site institucional. A Navbar/Hero/Footer ocultam este
   * item (o visitante já está no site); a ContactSection o exibe.
   */
  isSite?: boolean;
}

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Enos-AL",
    ariaLabel: "Acessar GitHub da ED² Tecnologic",
    icon: Github,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/enos-alves-santos-3388b7310/",
    ariaLabel: "Acessar LinkedIn de Enos Alves Santos",
    icon: Linkedin,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/enos.cursos/",
    ariaLabel: "Acessar Instagram da ED² Tecnologic",
    icon: Instagram,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com/enos.alves.501",
    ariaLabel: "Acessar Facebook de Enos Alves Santos",
    icon: Facebook,
  },
  {
    name: "Site",
    url: "https://ed2tecnologic.com.br/",
    ariaLabel: "Acessar site oficial da ED² Tecnologic",
    icon: Globe,
    isSite: true,
  },
];
