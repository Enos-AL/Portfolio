import React, { useState } from "react";
import { Project, projectsData } from "../types";
import { 
  HeartPulse, ShoppingBag, Video, MonitorPlay, Mic, Cpu, 
  Utensils, Tv, Sliders, Share2, Globe, Layout, Search, Filter, ArrowUpRight 
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Association of icon names with Lucide components
const iconMap: Record<string, React.ComponentType<any>> = {
  HeartPulse: HeartPulse,
  ShoppingBag: ShoppingBag,
  Video: Video,
  MonitorPlay: MonitorPlay,
  Mic: Mic,
  Cpu: Cpu,
  Utensils: Utensils,
  Tv: Tv,
  Sliders: Sliders,
  Share2: Share2,
  Globe: Globe,
  Layout: Layout,
};

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export default function ProjectsSection({ onSelectProject }: ProjectsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>("todos");
  const [searchQuery, setSearchQuery] = useState("");

  // Extracted unique category labels
  const categories = [
    { key: "todos", label: "Todos os Sistemas" },
    { key: "saude", label: "Saúde Pública" },
    { key: "ia", label: "Inteligência Artificial" },
    { key: "desktop", label: "Desktop / Automação" },
    { key: "gestao", label: "ERP / Gestão" },
    { key: "web", label: "Web / E-commerce" },
  ];

  const filterProject = (project: Project) => {
    const projectTags = project.tags || project.technologies;
    // Basic search filtering
    const matchesSearch = 
      project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      projectTags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    if (!matchesSearch) return false;

    // Category routing logic based on category string tags
    if (activeCategory === "todos") return true;
    if (activeCategory === "saude") return project.category.includes("Saúde");
    if (activeCategory === "ia") return project.category.includes("Inteligência") || project.category.includes("IA");
    if (activeCategory === "desktop") return project.category.includes("Desktop") || project.category.includes("Áudio") || project.category.includes("Conversão") || project.category.includes("Gravação");
    if (activeCategory === "gestao") return project.category.includes("ERP") || project.category.includes("Atendimento") || project.category.includes("Painel");
    if (activeCategory === "web") return project.category.includes("E-commerce") || project.category.includes("SaaS") || project.category.includes("Site") || project.category.includes("Landing") || project.category.includes("Social");

    return true;
  };

  const filteredProjects = projectsData.filter(filterProject);

  const getStatusStyle = (status: string) => {
    switch (status) {
      case "Finalizado":
        return "bg-brand-green/10 text-brand-green border-brand-green/30";
      case "Em desenvolvimento":
        return "bg-amber-500/10 text-amber-400 border-amber-500/30";
      case "Em desenvolvimento / implantação":
      case "Em implantação":
        return "bg-brand-cyan/10 text-brand-cyan border-brand-cyan/30";
      case "Protótipo":
        return "bg-red-500/10 text-red-400 border-red-500/30";
      case "Funcional / Produto em evolução":
        return "bg-brand-blue/10 text-brand-cyan border-brand-blue/30";
      default:
        return "bg-brand-gray/10 text-brand-gray border-brand-cyan/25";
    }
  };

  return (
    <section id="sistemas" className="relative py-24 scroll-mt-12 overflow-hidden bg-brand-bg-main/30">
      
      {/* Decorative center divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      
      {/* Dynamic graphic background circuit dot anchors */}
      <div className="absolute top-[10%] right-[5%] w-1.5 h-1.5 rounded-full bg-brand-cyan shadow-[0_0_8px_#00D9FF] animate-ping" />
      <div className="absolute bottom-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-brand-green shadow-[0_0_8px_#7CFF00] animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block">
            // DOSSIÊ DE ENGENHARIA
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
            Sistemas e Soluções Desenvolvidas
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-green to-transparent mx-auto rounded-full" />
          <p className="text-brand-gray text-sm font-light leading-relaxed pt-2">
            Explore nossa galeria de softwares corporativos, painéis de gestão municipal, aplicativos nativos de mídia e ferramentas de apoio automatizado.
          </p>
        </div>

        {/* Dynamic Nav Controls: Filters & Search bar */}
        <div className="glass-panel rounded-2xl p-5 mb-12 border border-brand-cyan/15 shadow-[0_8px_32px_rgba(0,0,0,0.3)] space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Search inputs */}
            <div className="relative w-full md:max-w-md group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-brand-gray group-focus-within:text-brand-cyan transition-colors" aria-hidden="true" />
              <input
                id="project-search-input"
                type="text"
                aria-label="Pesquisar sistemas por nome, tag ou categoria"
                placeholder="Pesquisar por nome, tag ou categoria..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-3 rounded-xl bg-brand-bg-main/80 border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-sm font-sans focus:outline-none focus:ring-1 focus:ring-brand-cyan transition-all placeholder:text-brand-gray/50"
              />
            </div>

            {/* Total Indicator */}
            <div className="text-right text-xs font-mono text-brand-gray shrink-0">
              SISTEMAS MAPEADOS: <span className="text-brand-cyan font-semibold">{filteredProjects.length} / 12</span>
            </div>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-brand-cyan/10">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg font-display text-xs font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat.key
                    ? "bg-gradient-to-r from-brand-cyan to-brand-blue text-brand-bg-main font-semibold shadow-[0_0_15px_rgba(0,217,255,0.25)]"
                    : "bg-brand-bg-main/50 hover:bg-brand-bg-card hover:text-brand-cyan text-brand-gray border border-brand-cyan/10 hover:border-brand-cyan/25"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const IconComponent = iconMap[project.icon] || Globe;
              
              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: false, amount: 0.2 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group relative flex flex-col justify-between rounded-2xl bg-brand-bg-card/75 border border-brand-cyan/15 hover:border-brand-cyan/40 hover:shadow-[0_12px_40px_rgba(0,217,255,0.12)] transition-all-300 overflow-hidden"
                >
                  
                  {/* Decorative corner lights inside the card */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-cyan/5 to-transparent pointer-events-none" />

                  {/* IMAGE PREVIEW — real screenshots when available, cyber gradient placeholder otherwise */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-brand-bg-main border-b border-brand-cyan/10">

                    {project.coverImage ? (
                      <>
                        {/* PRIMARY REAL IMAGE (zoom on hover) */}
                        <img
                          src={project.coverImage}
                          alt={`Captura de tela do sistema ${project.name}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        />

                        {/* SECONDARY REAL IMAGE (smooth cross-fade on hover) */}
                        {project.hoverImage && (
                          <img
                            src={project.hoverImage}
                            alt=""
                            aria-hidden="true"
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
                          />
                        )}

                        {/* Glow / overlay kept for premium feel */}
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-bg-main/80 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_60px_rgba(0,217,255,0.25)] pointer-events-none" />
                      </>
                    ) : (
                      <>
                        {/* PRIMARY PLACEHOLDER (Interactive Blueprint Pattern with core logo) */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.coverGradient} flex flex-col items-center justify-center p-6 transition-transform duration-700 ease-out group-hover:scale-105 group-hover:rotate-1`}>

                          {/* Grid background inside layout */}
                          <div className="absolute inset-0 bg-grid-cyber opacity-20" />

                          {/* Stylized Core Icon */}
                          <div className="relative w-14 h-14 rounded-full bg-brand-bg-card border border-brand-cyan/35 flex items-center justify-center shadow-lg">
                            <IconComponent className="w-7 h-7 text-brand-cyan" aria-hidden="true" />
                            <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-ping opacity-25" style={{ animationDuration: "3s" }} />
                          </div>

                          {/* Code/Architecture overlay tags */}
                          <div className="mt-4 text-center">
                            <span className="font-mono text-[9px] tracking-widest text-brand-cyan/70 uppercase">
                              // ED² INFRA_UNIT
                            </span>
                            <h4 className="font-display font-medium text-sm text-brand-white">
                              {project.name}
                            </h4>
                          </div>

                          {/* Technical metric values at the lower margins */}
                          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between pointer-events-none select-none opacity-40">
                            <span className="font-mono text-[7px] text-brand-gray tracking-tighter">
                              SYS_CODE: {project.id.toUpperCase()}_v1.0
                            </span>
                            <span className="font-mono text-[7px] text-brand-gray tracking-tighter">
                              STATUS // COMPILED
                            </span>
                          </div>
                        </div>

                        {/* SECONDARY HOVER PLACEHOLDER (reveals real project info: stack, category, status) */}
                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${project.hoverGradient} flex flex-col justify-between p-4`}>

                          {/* Mesh overlay */}
                          <div className="absolute inset-0 bg-dot-cyber opacity-25" />

                          {/* Interactive blueprint lines */}
                          <div className="relative flex items-center justify-between border-b border-brand-cyan/20 pb-2 z-10">
                            <span className="font-mono text-[9px] text-brand-green tracking-widest uppercase">
                              &gt; FICHA TÉCNICA
                            </span>
                            <span className="font-mono text-[8px] text-brand-cyan">HTTPS</span>
                          </div>

                          <div className="relative my-auto space-y-1.5 z-10 pl-2">
                            <p className="font-mono text-[9px] text-brand-white leading-tight">
                              • STACK: {project.technologies.slice(0, 3).join(", ")}
                            </p>
                            <p className="font-mono text-[9px] text-brand-gray leading-tight">
                              • CATEGORIA: {project.category}
                            </p>
                            <p className="font-mono text-[9px] text-brand-cyan leading-tight">
                              • STATUS: {project.status}
                            </p>
                          </div>

                          <div className="relative border-t border-brand-cyan/20 pt-2 flex justify-between items-center z-10">
                            <span className="font-mono text-[8px] text-brand-gray">
                              ED² Tecnologic
                            </span>
                            <div className="flex gap-1">
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse" />
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    {/* Left overlay quick tag (shown for both real images and placeholder) */}
                    <span className="absolute top-3 left-3 px-2 py-1 rounded bg-brand-bg-main/90 border border-brand-cyan/25 z-10 font-mono text-[8px] tracking-wider text-brand-cyan uppercase">
                      {project.category.split(" / ")[0]}
                    </span>
                  </div>

                  {/* Text Contents */}
                  <div className="p-6 space-y-4 flex flex-col justify-between flex-grow">
                    
                    <div className="space-y-2">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-display font-bold text-lg text-brand-white group-hover:text-brand-cyan transition-colors duration-200">
                          {project.name}
                        </h3>
                        {/* Status badge */}
                        <span className={`px-2 py-0.5 rounded-full text-[9px] font-mono border ${getStatusStyle(project.status)} shrink-0 uppercase`}>
                          {project.status === "Em desenvolvimento / implantação" ? "Em implantação" : project.status}
                        </span>
                      </div>

                      <p className="text-brand-gray text-xs font-light leading-relaxed h-[60px] overflow-hidden text-ellipsis">
                        {project.description}
                      </p>
                    </div>

                    {/* Tech tag elements */}
                    <div className="space-y-4 pt-2">
                      <div className="flex flex-wrap gap-1.5">
                        {(project.tags || project.technologies).slice(0, 3).map((tag) => (
                          <span 
                            key={tag} 
                            className="px-2 py-0.5 rounded bg-brand-bg-main/50 border border-brand-cyan/10 text-brand-gray font-mono text-[9px] hover:border-brand-cyan/30 hover:text-brand-cyan transition-colors duration-200"
                          >
                            {tag}
                          </span>
                        ))}
                        {(project.tags || project.technologies).length > 3 && (
                          <span className="px-1 py-0.5 rounded bg-brand-bg-main/50 border border-brand-cyan/10 text-brand-cyan font-mono text-[9px]">
                            +{(project.tags || project.technologies).length - 3}
                          </span>
                        )}
                      </div>

                      {/* CTA Trigger details modal */}
                      <button
                        id={`btn-details-${project.id}`}
                        onClick={() => onSelectProject(project)}
                        className="flex items-center justify-between w-full px-4 py-2.5 rounded-xl border border-brand-cyan/20 hover:border-brand-cyan text-xs font-display font-medium text-brand-gray hover:text-brand-cyan bg-brand-bg-card group-hover:bg-brand-bg-main transition-all duration-300"
                      >
                        Ver Detalhes Técnicos
                        <ArrowUpRight className="w-3.5 h-3.5 text-brand-cyan group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      </button>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Empty Search Result feedback */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12 border border-dashed border-brand-cyan/15 rounded-2xl bg-brand-bg-card max-w-md mx-auto space-y-3">
            <span className="block text-brand-cyan font-mono text-3xl">📭</span>
            <h4 className="font-display font-bold text-base text-brand-white">Nenhum sistema encontrado</h4>
            <p className="text-brand-gray text-xs font-light max-w-xs mx-auto">
              Sua busca por “{searchQuery}” não retornou resultados. Experimente usar palavras-chave como TFD, SaaS, IA ou Desktop.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("todos"); }}
              className="mt-2 text-xs text-brand-green font-mono hover:underline focus:outline-none"
            >
              Exibir Todos os Sistemas
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
