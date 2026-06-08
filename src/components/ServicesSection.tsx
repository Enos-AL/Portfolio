import React from "react";
import { servicesData } from "../types";
import { Code, Globe, Wrench, Network, Shield, Zap, HeartPulse, Bot, Monitor } from "lucide-react";
import { motion } from "motion/react";

// Associating string keys to vector lucide icons
const iconMap: Record<string, React.ComponentType<any>> = {
  Code: Code,
  Globe: Globe,
  Wrench: Wrench,
  Network: Network,
  ShieldAlert: Shield,
  Zap: Zap,
  HeartPulse: HeartPulse,
  Bot: Bot,
  Smartphone: Monitor, // Render desktop-friendly layout icon as requested
};

export default function ServicesSection() {
  return (
    <section id="servicos" className="relative py-24 scroll-mt-12 overflow-hidden">
      
      {/* Absolute graphic background dots */}
      <div className="absolute inset-0 bg-dot-cyber opacity-30" />
      
      {/* Decorative colored lights */}
      <div className="absolute top-[20%] left-[-5%] w-[400px] h-[400px] rounded-full bg-brand-blue/3 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[-5%] w-[400px] h-[400px] rounded-full bg-brand-green/3 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title with decorative lines */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block">
            // CATÁLOGO DE COMPETÊNCIAS
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
            Soluções Sob Medida para <span className="text-brand-cyan">Impulsionar</span> seu Negócio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-transparent mx-auto rounded-full" />
          <p className="text-brand-gray text-sm font-light leading-relaxed pt-2">
            Desenvolvemos tecnologias robustas, do design estético do frontend à segurança de dados e configurações de servidores, garantindo robustez de ponta a ponta.
          </p>
        </div>

        {/* 9 Services Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Code;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative glass-panel rounded-2xl p-6 hover:bg-brand-bg-card/90 transition-all-300 transform glow-cyan-hover flex flex-col justify-between"
              >
                {/* Micro tech pattern grid overlay inside cards */}
                <div className="absolute inset-0 bg-grid-cyber opacity-5 rounded-2xl pointer-events-none" />

                <div className="space-y-4">
                  {/* Neon Glow Icon Frame */}
                  <div className="relative w-12 h-12 rounded-xl bg-brand-bg-main border border-brand-cyan/20 group-hover:border-brand-cyan/70 flex items-center justify-center transition-all duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                    {/* Glowing shadow background on hover */}
                    <div className="absolute inset-0 rounded-xl bg-brand-cyan/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-[8px]" />
                    <IconComponent className="relative w-6 h-6 text-brand-cyan group-hover:text-brand-green group-hover:scale-110 transition-all duration-300" />
                  </div>

                  <h3 className="font-display font-semibold text-lg text-brand-white group-hover:text-brand-cyan transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-brand-gray text-xs leading-relaxed font-light font-sans group-hover:text-brand-white/90 transition-all duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Card micro interactive footer indicators */}
                <div className="flex items-center justify-between border-t border-brand-cyan/10 pt-4 mt-6">
                  <span className="font-mono text-[9px] text-[#AAB4C0] uppercase tracking-wider">
                    ED² SERVICE // COD-0{index + 1}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan group-hover:bg-brand-green group-hover:scale-125 transition-all duration-300 shadow-[0_0_8px_rgba(0,217,255,1)]" />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
