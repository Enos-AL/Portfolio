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
  // Atividade e CNAE oficiais registrados (verificáveis na consulta pública).
  mainActivity: "Treinamento em informática",
  mainCnae: "P-8599-6/03",
  description:
    "A ED² Tecnologic atua com soluções digitais, desenvolvimento de sistemas, sites profissionais, suporte técnico, automações, infraestrutura, treinamento em informática e tecnologia sob medida para empresas, comércios e gestão pública.",
  publicVerificationUrl:
    "https://www.econodata.com.br/consulta-empresa/59635881000160-enos-alves-santos",
};

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
   * Caminho do documento JÁ TRATADO em /public/certificates
   * (ex.: "/certificates/nome-do-curso.pdf").
   * Deixe vazio ("") para exibir "Documento disponível mediante solicitação".
   */
  fileUrl?: string;
  status: string;
}

// Bloco preparado para expansão futura. Basta adicionar novos objetos aqui.
// Os documentos só devem ser publicados depois de tratados (sem CPF,
// assinatura sensível, códigos privados ou dados pessoais desnecessários).
export const certificates: Certificate[] = [
  // {
  //   title: "Nome do certificado",
  //   institution: "Instituição",
  //   category: "Tecnologia",
  //   year: "2026",
  //   fileUrl: "", // se vazio -> "Documento disponível mediante solicitação"
  //   status: "Concluído",
  // },
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
