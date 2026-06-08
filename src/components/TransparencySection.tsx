import React from "react";
import {
  Building2, Hash, BadgeCheck, MapPin, Calendar, Briefcase, FileText, Sparkles,
  Search, ShieldCheck, GraduationCap, Award, ExternalLink, CheckCircle, BookOpen, Layers
} from "lucide-react";
import { motion } from "motion/react";
import {
  businessInfo, academicCredentials, certificates, serviceAreas, secondaryActivities
} from "../data/businessInfo";

// Reusable entrance animation (respects prefers-reduced-motion via MotionConfig).
const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: false, amount: 0.2 },
};

const infoFields: { icon: React.ComponentType<any>; label: string; value: string; highlight?: boolean }[] = [
  { icon: Building2, label: "Razão Social", value: businessInfo.legalName },
  { icon: Sparkles, label: "Nome comercial / Marca", value: businessInfo.brandName },
  { icon: Hash, label: "CNPJ", value: businessInfo.cnpj },
  { icon: BadgeCheck, label: "Situação", value: businessInfo.status, highlight: true },
  { icon: Building2, label: "Porte", value: businessInfo.companySize },
  { icon: MapPin, label: "Cidade / UF", value: businessInfo.city },
  { icon: Calendar, label: "Data de abertura", value: businessInfo.openingDate },
  { icon: Briefcase, label: "Ramo / Segmento", value: businessInfo.segment },
  { icon: FileText, label: "CNAE principal (registro formal)", value: `${businessInfo.mainCnae} — ${businessInfo.mainActivity}` },
];

const credibilityCards = [
  {
    icon: BadgeCheck,
    title: "Empresa Formalizada",
    description: "CNPJ ativo e atuação empresarial registrada para prestação de serviços em tecnologia.",
  },
  {
    icon: Briefcase,
    title: "Atuação Profissional",
    description: "Soluções digitais, sistemas, sites, suporte, automações e treinamento em informática.",
  },
  {
    icon: Search,
    title: "Consulta Pública",
    description: "Informações cadastrais podem ser verificadas em plataformas públicas de consulta empresarial.",
  },
  {
    icon: ShieldCheck,
    title: "Compromisso Técnico",
    description: "Projetos desenvolvidos com foco em organização, segurança, performance e boas práticas.",
  },
];

export default function TransparencySection() {
  return (
    <section id="transparencia" className="relative py-24 scroll-mt-12 overflow-hidden bg-brand-bg-main/40">

      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      {/* Decorative circuit anchors */}
      <div className="absolute top-[12%] right-[6%] w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00D9FF] animate-pulse" />
      <div className="absolute bottom-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_#7CFF00] animate-ping" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block">
            // TRANSPARÊNCIA EMPRESARIAL
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
            Credibilidade que pode ser <span className="text-brand-cyan">verificada</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-green to-transparent mx-auto rounded-full" />
          <p className="text-brand-gray text-sm font-light leading-relaxed pt-2">
            A ED² Tecnologic mantém informações públicas de registro empresarial, atuação formalizada e compromisso com soluções digitais profissionais.
          </p>
        </div>

        {/* Business info panel + public verification */}
        <motion.div
          {...reveal}
          transition={{ duration: 0.5 }}
          className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-cyan/15 relative overflow-hidden mb-12"
        >
          <div className="absolute inset-0 bg-grid-cyber opacity-10 pointer-events-none" />
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-green opacity-50" />

          <div className="relative z-10 flex items-center gap-2 mb-6">
            <Building2 className="w-5 h-5 text-brand-cyan" aria-hidden="true" />
            <h3 className="font-display font-bold text-xl text-brand-white">Dados Empresariais</h3>
          </div>

          {/* Fields grid */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {infoFields.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.label} className="flex items-start gap-3 p-3 rounded-xl bg-brand-bg-main/40 border border-brand-cyan/10">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center text-brand-cyan">
                    <Icon className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[9px] text-brand-gray uppercase tracking-wider leading-none mb-1">{f.label}</p>
                    <p className={`text-sm font-semibold leading-tight break-words ${f.highlight ? "text-brand-green" : "text-brand-white"}`}>
                      {f.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Institutional description */}
          <p className="relative z-10 text-brand-gray text-xs sm:text-sm font-light leading-relaxed mt-6 border-t border-brand-cyan/10 pt-5">
            {businessInfo.description}
          </p>

          {/* Public verification button */}
          <div className="relative z-10 mt-6 space-y-2">
            <a
              href={businessInfo.publicVerificationUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Verificar dados públicos da empresa ED² Tecnologic em fonte de consulta cadastral (abre em nova aba)"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-display font-semibold text-xs tracking-wide text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-green hover:shadow-[0_0_22px_rgba(0,217,255,0.35)] hover:scale-[1.02] transition-all duration-300"
            >
              <Search className="w-4 h-4" aria-hidden="true" />
              Verificar dados públicos da empresa
              <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            <p className="font-mono text-[10px] text-brand-gray tracking-wide">
              Os dados empresariais podem ser conferidos em fontes públicas de consulta cadastral.
            </p>
          </div>
        </motion.div>

        {/* Credibility cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {credibilityCards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                {...reveal}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.03 }}
                className="group glass-panel rounded-2xl p-5 border border-brand-cyan/15 hover:border-brand-green/40 hover:shadow-[0_0_22px_rgba(124,255,0,0.12)] transition-colors duration-300 flex flex-col gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-brand-bg-main border border-brand-cyan/20 group-hover:border-brand-green/40 flex items-center justify-center text-brand-cyan group-hover:text-brand-green transition-colors duration-300 shadow-[0_0_15px_rgba(0,217,255,0.08)]">
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                </div>
                <h4 className="font-display font-semibold text-base text-brand-white group-hover:text-brand-cyan transition-colors">{card.title}</h4>
                <p className="text-brand-gray text-xs font-light leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Formação, Certificados e Qualificações */}
        <div className="space-y-6 mb-16">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-6 h-6 text-brand-green shrink-0" aria-hidden="true" />
            <h3 className="font-display font-bold text-2xl text-brand-white">Formação, Certificados e Qualificações</h3>
          </div>
          <p className="text-brand-gray text-sm font-light max-w-2xl">
            Formação técnica e acadêmica que embasa o desenvolvimento das soluções da ED² Tecnologic.
          </p>

          {/* Academic credentials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {academicCredentials.map((c, idx) => (
              <motion.div
                key={c.title}
                {...reveal}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ scale: 1.02 }}
                className="group glass-panel rounded-2xl p-6 border border-brand-cyan/15 hover:border-brand-cyan/40 hover:shadow-[0_0_22px_rgba(0,217,255,0.12)] transition-colors duration-300 flex flex-col gap-3"
              >
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-brand-bg-main border border-brand-cyan/20 group-hover:border-brand-green/40 flex items-center justify-center text-brand-cyan group-hover:text-brand-green transition-colors">
                    <GraduationCap className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-[9px] px-2 py-1 rounded bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan uppercase tracking-wider text-right">
                    {c.type}
                  </span>
                </div>
                <h4 className="font-display font-semibold text-base text-brand-white leading-tight group-hover:text-brand-cyan transition-colors">{c.title}</h4>
                <div className="mt-auto space-y-1.5 pt-2">
                  <p className="text-brand-gray text-xs font-light flex items-center gap-1.5">
                    <Building2 className="w-3.5 h-3.5 text-brand-cyan/70 shrink-0" aria-hidden="true" /> {c.institution}
                  </p>
                  <p className="text-brand-gray text-xs font-light flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-cyan/70 shrink-0" aria-hidden="true" /> Conclusão: {c.completion}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Technical certificates block (expandable via data array) */}
          <div className="pt-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-brand-cyan shrink-0" aria-hidden="true" />
              <h4 className="font-display font-semibold text-lg text-brand-white">Certificados Técnicos e Cursos Complementares</h4>
            </div>

            {certificates.length === 0 ? (
              <div className="glass-panel rounded-2xl p-8 border border-dashed border-brand-cyan/20 text-center space-y-2">
                <Award className="w-8 h-8 text-brand-cyan/60 mx-auto" aria-hidden="true" />
                <p className="font-display font-medium text-sm text-brand-white">Em constante atualização</p>
                <p className="text-brand-gray text-xs font-light max-w-md mx-auto leading-relaxed">
                  Novos certificados e cursos complementares serão adicionados conforme concluídos. Documentos disponíveis mediante solicitação.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certificates.map((cert, idx) => (
                  <motion.div
                    key={`${cert.title}-${idx}`}
                    {...reveal}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    whileHover={{ scale: 1.02 }}
                    className="group glass-panel rounded-2xl p-5 border border-brand-cyan/15 hover:border-brand-green/40 hover:shadow-[0_0_22px_rgba(124,255,0,0.12)] transition-colors duration-300 flex flex-col gap-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-brand-bg-main border border-brand-cyan/20 flex items-center justify-center text-brand-cyan group-hover:text-brand-green transition-colors">
                        <Award className="w-5 h-5" aria-hidden="true" />
                      </div>
                      <span className="font-mono text-[9px] px-2 py-1 rounded bg-brand-green/10 border border-brand-green/25 text-brand-green uppercase tracking-wider">
                        {cert.status}
                      </span>
                    </div>
                    <h5 className="font-display font-semibold text-sm text-brand-white leading-tight">{cert.title}</h5>
                    <div className="space-y-1">
                      <p className="text-brand-gray text-xs font-light">{cert.institution}</p>
                      <p className="font-mono text-[10px] text-brand-cyan/80 uppercase tracking-wide">{cert.category} · {cert.year}</p>
                    </div>
                    {cert.fileUrl ? (
                      <a
                        href={cert.fileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Ver certificado: ${cert.title} (abre em nova aba)`}
                        className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-brand-cyan/25 hover:border-brand-cyan text-brand-cyan text-xs font-display font-medium hover:bg-brand-bg-card transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" /> Ver certificado
                      </a>
                    ) : (
                      <span className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-brand-cyan/10 text-brand-gray/70 text-[11px] font-mono cursor-not-allowed select-none">
                        Documento disponível mediante solicitação
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Serviços e Áreas de Atuação */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Layers className="w-6 h-6 text-brand-cyan shrink-0" aria-hidden="true" />
            <h3 className="font-display font-bold text-2xl text-brand-white">Serviços e Áreas de Atuação</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Service badges */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 glass-panel rounded-2xl p-6 border border-brand-cyan/15"
            >
              <div className="flex flex-wrap gap-2.5">
                {serviceAreas.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-brand-bg-main/50 border border-brand-cyan/15 text-brand-gray hover:text-brand-cyan hover:border-brand-cyan/35 text-xs font-medium transition-colors duration-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-brand-green shrink-0" aria-hidden="true" />
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CNAE card */}
            <motion.div
              {...reveal}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-panel-neon rounded-2xl p-6 border border-brand-green/20 flex flex-col gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-brand-bg-main border border-brand-green/25 flex items-center justify-center text-brand-green">
                <BookOpen className="w-5 h-5" aria-hidden="true" />
              </div>
              <p className="font-mono text-[10px] text-brand-gray uppercase tracking-wider">CNAE principal</p>
              <p className="font-display font-bold text-sm text-brand-white leading-snug">
                {businessInfo.mainCnae} — {businessInfo.mainActivity}
              </p>
            </motion.div>
          </div>

          {/* Atividades secundárias registradas (destaques de TI) */}
          <motion.div
            {...reveal}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="glass-panel rounded-2xl p-6 border border-brand-cyan/15 space-y-3"
          >
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" />
              <h4 className="font-display font-semibold text-sm text-brand-white">
                Atividades secundárias registradas <span className="text-brand-gray font-normal">(destaques de TI)</span>
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {secondaryActivities.map((a) => (
                <span
                  key={a}
                  className="inline-flex items-center px-3 py-1.5 rounded-lg bg-brand-bg-main/50 border border-brand-cyan/10 text-brand-gray font-mono text-[11px] leading-tight"
                >
                  {a}
                </span>
              ))}
            </div>
            <p className="font-mono text-[10px] text-brand-gray/80 tracking-wide pt-1">
              Lista completa de atividades econômicas disponível na verificação pública dos dados da empresa.
            </p>
          </motion.div>

          <p className="text-brand-gray text-sm font-light leading-relaxed max-w-3xl">
            Além da atividade principal, a ED² Tecnologic estrutura soluções tecnológicas voltadas à digitalização de processos, suporte operacional, automação e desenvolvimento de sistemas sob medida.
          </p>
        </div>

      </div>
    </section>
  );
}
