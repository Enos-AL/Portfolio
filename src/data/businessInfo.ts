// Informações públicas e institucionais da ED² Tecnologic.
// Use SOMENTE dados públicos/cadastrais — nunca CPF, RG, assinatura,
// códigos privados de autenticação ou documentos sensíveis.

export const businessInfo = {
  legalName: "Enos Alves Santos",
  brandName: "ED² Tecnologic",
  cnpj: "59.635.881/0001-60",
  status: "Ativa",
  companySize: "ME",
  city: "Jordânia - MG",
  openingDate: "24/02/2025",
  // Posicionamento/segmento de atuação (descritivo, voltado ao negócio).
  segment: "Tecnologia e Soluções Digitais",
  // Atividade e CNAE principais oficiais (conforme Cartão CNPJ / Receita Federal).
  mainActivity: "Suporte técnico, manutenção e outros serviços em tecnologia da informação",
  mainCnae: "6209-1/00",
  description:
    "A ED² Tecnologic atua com soluções digitais, desenvolvimento de sistemas, sites profissionais, suporte técnico, automações, infraestrutura, treinamento em informática e tecnologia sob medida para empresas, comércios e gestão pública.",
  publicVerificationUrl:
    "https://www.econodata.com.br/consulta-empresa/59635881000160-enos-alves-santos",
};

// Destaques das atividades secundárias REGISTRADAS (somente as relevantes de
// tecnologia). A lista oficial completa fica disponível na verificação pública.
export const secondaryActivities: string[] = [
  "6201-5/01 — Desenvolvimento de programas de computador sob encomenda",
  "6202-3/00 — Desenvolvimento e licenciamento de programas de computador customizáveis",
  "6311-9/00 — Tratamento de dados, hospedagem e serviços de aplicação na internet",
  "9511-8/00 — Reparação e manutenção de computadores e periféricos",
  "6190-6/99 — Outras atividades de telecomunicações",
];

export interface AcademicCredential {
  title: string;
  type: string;
  institution: string;
  completion: string;
}

export const academicCredentials: AcademicCredential[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    type: "Graduação / Superior Tecnólogo",
    institution: "Universidade Cesumar - Unicesumar",
    completion: "12/2024",
  },
  {
    title: "Segurança de Redes de Computadores",
    type: "Pós-graduação",
    institution: "Faculdade Iguaçu",
    completion: "08/2025",
  },
  {
    title: "Desenvolvimento em Aplicações Web",
    type: "Pós-graduação",
    institution: "Faculdade Iguaçu",
    completion: "08/2025",
  },
];

export interface Certificate {
  title: string;
  institution: string;
  category: string;
  year: string;
  /**
   * Imagem JÁ TRATADA do certificado em /public/certificates
   * (ex.: "/certificates/nome-do-curso.png"). Ao clicar, abre num modal.
   * Deixe vazio para exibir "Documento disponível mediante solicitação".
   */
  imageUrl?: string;
  status: string;
  description?: string;
}

// Documentos só são publicados depois de TRATADOS: CPF, RG, data de
// nascimento e códigos de validação são ocultados (ver public/certificates/README).
export const certificates: Certificate[] = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    institution: "Universidade Cesumar — Unicesumar",
    category: "Graduação / Tecnólogo",
    year: "2024",
    imageUrl: "/certificates/ads-unicesumar.png",
    status: "Concluído",
    description:
      "Diploma de Tecnólogo em Análise e Desenvolvimento de Sistemas. Por segurança e privacidade, o RG, a data de nascimento e o código de validação foram ocultados nesta imagem. Documento original disponível mediante solicitação.",
  },
  {
    title: "Desenvolvimento em Aplicações Web",
    institution: "Faculdade Iguaçu",
    category: "Pós-graduação Lato Sensu (720h)",
    year: "2025",
    imageUrl: "/certificates/pos-dev-web.png",
    status: "Concluído",
    description:
      "Certificado de Especialista em Desenvolvimento em Aplicações Web. Por segurança e privacidade, o número de CPF foi ocultado nesta imagem. Documento original disponível mediante solicitação.",
  },
  {
    title: "Segurança de Redes de Computadores",
    institution: "Faculdade Iguaçu",
    category: "Pós-graduação Lato Sensu (700h)",
    year: "2025",
    imageUrl: "/certificates/pos-seguranca-redes.png",
    status: "Concluído",
    description:
      "Certificado de Especialista em Segurança de Redes de Computadores. Por segurança e privacidade, o número de CPF foi ocultado nesta imagem. Documento original disponível mediante solicitação.",
  },
];

export interface SocialLink {
  name: string;
  url: string;
  icon: string; // nome do ícone lucide-react
}

// Redes sociais oficiais. Adicione LinkedIn/Facebook quando tiver as URLs.
export const socialLinks: SocialLink[] = [
  { name: "Instagram", url: "https://www.instagram.com/enos.cursos", icon: "Instagram" },
  { name: "GitHub", url: "https://github.com/Enos-AL", icon: "Github" },
  // { name: "LinkedIn", url: "https://www.linkedin.com/in/...", icon: "Linkedin" },
  // { name: "Facebook", url: "https://www.facebook.com/...", icon: "Facebook" },
];

export const serviceAreas: string[] = [
  "Desenvolvimento de sistemas",
  "Sites e aplicações web",
  "Suporte técnico e manutenção",
  "Redes e infraestrutura",
  "Segurança da informação",
  "Automação de processos",
  "Treinamento em informática",
  "Soluções para saúde pública",
  "Sistemas corporativos",
  "Consultoria em tecnologia",
];
