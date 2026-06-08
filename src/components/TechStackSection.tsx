import React from "react";
import { techStackData } from "../types";
import { 
  Atom, Layers, ShieldCheck, Palette, Boxes, Server, Database, 
  Binary, Cpu, Monitor, Zap, Shield, Network, BrainCircuit, Globe 
} from "lucide-react";
import { motion } from "motion/react";

const iconMap: Record<string, React.ComponentType<any>> = {
  Atom: Atom,
  Layers: Layers,
  Shield: ShieldCheck,
  Palette: Palette,
  Boxes: Boxes,
  Server: Server,
  Database: Database,
  Binary: Binary,
  Container: Cpu, // Docker backup key
  Monitor: Monitor,
  Zap: Zap,
  BrainCircuit: BrainCircuit,
  Lock: Shield,
  Network: Network,
};

export default function TechStackSection() {
  const categories = [
    { key: "frontend", title: "Frontend & Interfaces" },
    { key: "backend", title: "Sistemas & APIs" },
    { key: "database", title: "Banco de Dados & ORMs" },
    { key: "specialty", title: "Infraestrutura, IA & Segurança" }
  ];

  return (
    <section id="tecnologia" className="relative py-24 scroll-mt-12 overflow-hidden bg-brand-bg-main/30">
      
      {/* Decorative center divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-brand-green/3 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-mono text-xs text-brand-green tracking-widest uppercase block">
            // ARQUITETURA DE DADOS & COMPONENTES
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
            Tecnologias de Ponta e Stack Consolidado
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-green via-brand-cyan to-transparent mx-auto rounded-full" />
          <p className="text-brand-gray text-sm font-light leading-relaxed pt-2">
            Nossa stack é selecionada a dedo, priorizando soluções consolidadas orientadas à escalabilidade, robustez de dados e tempo de resposta insignificante.
          </p>
        </div>

        {/* Organized Stack Cards Grouped by Categories */}
        <div className="space-y-10">
          {categories.map((cat, idx) => {
            const items = techStackData.filter(item => item.category === cat.key || (cat.key === "specialty" && (item.category === "devops" || item.category === "other" || item.category === "specialty" || item.category === "desktop")));
            
            return (
              <div key={cat.key} className="space-y-4">
                {/* Category block title */}
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-4 bg-brand-cyan rounded-full" />
                  <h3 className="font-display font-bold text-sm tracking-widest text-[#F5F7FA] uppercase">
                    {cat.title}
                  </h3>
                  <span className="font-mono text-[9px] text-[#AAB4C0]">
                    // 0{idx + 1}
                  </span>
                </div>

                {/* Sub items columns */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {items.map((tech) => {
                    // Fallback to Code icons
                    let IconComp = iconMap[tech.icon] || Atom;
                    if (tech.name === "Docker") IconComp = Cpu;

                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: 12 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.2 }}
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className="glass-panel hover:bg-brand-bg-card hover:border-brand-cyan/40 p-4 rounded-xl flex items-center gap-3 transition-colors duration-300 group"
                      >
                        <div className="p-2 rounded-lg bg-brand-bg-main border border-brand-cyan/10 group-hover:bg-brand-cyan/10 group-hover:border-brand-cyan/20 transition-all text-brand-cyan">
                          <IconComp className="w-5 h-5 group-hover:text-brand-green group-hover:rotate-6 transition-all duration-300" />
                        </div>
                        <div className="space-y-0.5">
                          <span className="font-display font-medium text-xs sm:text-sm text-brand-white group-hover:text-brand-cyan transition-colors">
                            {tech.name}
                          </span>
                          <span className="block font-mono text-[8px] text-[#AAB4C0] uppercase">
                            ED² // READY
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
