import React from "react";
import { ChevronRight, Database, Code, ShieldCheck, HeartPulse, Sparkles } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Decorative center orb glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full bg-brand-cyan/5 blur-[120px] pointer-events-none select-none glow-pulse" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Left Content Column */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tiny Premium Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-bg-card/95 border border-brand-cyan/20 shadow-[0_0_15px_rgba(0,217,255,0.06)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="font-mono text-[11px] tracking-wide text-brand-white uppercase flex items-center gap-1.5">
                <Sparkles className="w-3 h-3 text-brand-cyan animate-spin" style={{ animationDuration: "3s" }} />
                Desenvolvimento de Alta Performance
              </span>
            </motion.div>

            {/* Main Catchphrase with Gradient Text */}
            <div className="space-y-3">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight leading-[1.1] text-brand-white"
              >
                Tecnologia que <span className="gradient-title">transforma</span>.
                <br />
                Soluções que <span className="text-brand-cyan">conectam</span>.
              </motion.h1>

              {/* Subtitle Paragraph */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base sm:text-lg text-brand-gray/95 max-w-2xl font-sans font-light leading-relaxed"
              >
                A <strong className="font-medium text-brand-cyan">ED² Tecnologic</strong> desenvolve sistemas empresariais, sites corporativos, automações sob medida e soluções inovadoras em inteligência artificial para otimizar processos em resultados de alta rentabilidade.
              </motion.p>
            </div>

            {/* Quick value badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="flex flex-wrap gap-x-6 gap-y-2.5 pt-2"
            >
              <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                Sistemas Inteligentes Web
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-green" />
                Softwares Desktop Rápidos
              </div>
              <div className="flex items-center gap-2 text-xs font-mono text-brand-gray">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                Segurança & Automação AI
              </div>
            </motion.div>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                id="hero-cta-systems"
                href="#sistemas"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-medium text-sm tracking-wide text-brand-bg-main bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-green hover:from-brand-green hover:to-brand-cyan shadow-[0_4px_25px_rgba(0,217,255,0.3)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                Ver Sistemas Desenvolvidos
                <ChevronRight className="w-4 h-4" />
              </a>
              <a
                id="hero-cta-contact"
                href="#contato"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-display font-medium text-sm tracking-wide text-brand-white bg-brand-bg-card hover:bg-brand-bg-card/60 border border-brand-cyan/25 hover:border-brand-cyan/50 shadow-lg hover:shadow-[0_0_15px_rgba(0,217,255,0.1)] transition-all duration-300 transform hover:-translate-y-0.5 text-center"
              >
                Fale Conosco
              </a>
            </motion.div>
          </div>

          {/* Hero Right Interactive Geometric Visualization (Cyber Console Mockup) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl glass-panel-neon p-6 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-brand-cyan/30 flex flex-col justify-between overflow-hidden"
            >
              {/* Internal neon wire mesh overlay */}
              <div className="absolute inset-0 bg-grid-cyber opacity-15 pointer-events-none" />
              
              {/* Glass Header */}
              <div className="relative flex items-center justify-between border-b border-brand-cyan/15 pb-4 z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                    <span className="w-3 h-3 rounded-full bg-brand-green/80 inline-block animate-pulse" />
                  </div>
                  <span className="font-mono text-[10px] text-brand-cyan tracking-wider uppercase ml-2 select-none">
                    ed2_tecnologic_core.sh
                  </span>
                </div>
                <div className="px-2 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/20">
                  <span className="font-mono text-[9px] text-brand-cyan">PORT: 3000</span>
                </div>
              </div>

              {/* Status display panel */}
              <div className="relative my-auto space-y-5 py-4 z-10">
                <div className="space-y-2">
                  <div className="font-mono text-xs text-brand-gray flex items-center gap-1.5">
                    <span className="text-brand-green">&gt;</span> init system --profile=production
                  </div>
                  <div className="font-mono text-xs text-brand-cyan pl-4">
                    [OK] Database Synced (Cloud SQL / PostgreSQL)
                  </div>
                  <div className="font-mono text-xs text-brand-green pl-4">
                    [OK] AI Speech Lab Online (ED² Voice Lab Engine)
                  </div>
                </div>

                {/* Project status indicators */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-gray">
                    <span>ED² SISGREG TFD</span>
                    <span className="text-brand-cyan">EM IMPLANTAÇÃO</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-bg-main rounded-full overflow-hidden border border-brand-cyan/10">
                    <div className="h-full w-[72%] bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full shadow-[0_0_8px_#00D9FF]" />
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-gray">
                    <span>ATLAS COMMERCE SaaS</span>
                    <span className="text-amber-400">EM DESENVOLVIMENTO</span>
                  </div>
                  <div className="w-full h-1.5 bg-brand-bg-main rounded-full overflow-hidden border border-brand-cyan/10">
                    <div className="h-full w-[55%] bg-gradient-to-r from-brand-blue to-brand-green rounded-full shadow-[0_0_8px_#7CFF00]" />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-3">
                  <div className="bg-brand-bg-main/70 border border-brand-cyan/10 rounded-lg p-2 text-center">
                    <span className="block font-mono text-[10px] text-brand-gray leading-none uppercase">Sistemas no Portfólio</span>
                    <span className="font-display font-extrabold text-xl text-brand-cyan">12</span>
                  </div>
                  <div className="bg-brand-bg-main/70 border border-brand-green/10 rounded-lg p-2 text-center">
                    <span className="block font-mono text-[10px] text-brand-gray leading-none uppercase">Tecnologias</span>
                    <span className="font-display font-extrabold text-xl text-brand-green">14+</span>
                  </div>
                </div>
              </div>

              {/* Bottom Credits sign */}
              <div className="relative border-t border-brand-cyan/15 pt-3 text-right z-10">
                <span className="font-mono text-[9px] text-brand-gray block">
                  Enos Alves Santos - Chief Technology Officer
                </span>
                <span className="font-mono text-[8px] text-brand-cyan uppercase tracking-widest block">
                  ED² Tecnologic CORP 2026
                </span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
