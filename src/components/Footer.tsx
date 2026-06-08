import React, { useState, useEffect } from "react";
import { Terminal, Shield, ChevronUp, Cpu, HeartPulse, Globe, Instagram, Github, Linkedin, Facebook } from "lucide-react";
import { socialLinks } from "../data/businessInfo";
import VisitorCounter from "./VisitorCounter";

const socialIconMap: Record<string, React.ComponentType<any>> = {
  Instagram,
  Github,
  Linkedin,
  Facebook,
};

export default function Footer() {
  const [timeBR, setTimeBR] = useState("");
  const [timeUTC, setTimeUTC] = useState("");

  useEffect(() => {
    const updateClocks = () => {
      const now = new Date();
      
      // Formatting time for Brasília (Jordânia-MG is GMT-3)
      const optionsBR: Intl.DateTimeFormatOptions = {
        timeZone: "America/Sao_Paulo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      
      const optionsUTC: Intl.DateTimeFormatOptions = {
        timeZone: "UTC",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false
      };
      
      setTimeBR(now.toLocaleTimeString("pt-BR", optionsBR));
      setTimeUTC(now.toLocaleTimeString("pt-BR", optionsUTC));
    };

    updateClocks();
    const interval = setInterval(updateClocks, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="main-footer" className="relative bg-[#02070D] border-t border-brand-cyan/15 pt-16 pb-8 overflow-hidden">
      
      {/* Decorative vertical circuit border line */}
      <div className="absolute top-0 right-1/4 w-[1px] h-32 bg-gradient-to-b from-brand-cyan/20 to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-[1px] h-20 bg-gradient-to-b from-brand-green/20 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Main upper link row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-brand-cyan/10">
          
          {/* Logo Brand summary cell */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Logo ED² Tecnologic"
                className="w-12 h-12 object-contain drop-shadow-[0_0_12px_rgba(0,217,255,0.25)]"
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-none text-brand-white">
                  ED² Tecnologic
                </span>
                <span className="font-mono text-[9px] tracking-widest text-brand-cyan uppercase">
                  Sistemas Inteligentes
                </span>
              </div>
            </div>
            
            <p className="text-brand-gray text-xs font-light leading-relaxed max-w-sm">
              Desenvolvimento corporativo e institucional sob medida. Soluções projetadas por Enos Alves Santos para alavancar faturamento e consolidar rotinas operacionais com máxima segurança cibernética.
            </p>

            <span className="block font-sans font-medium text-xs text-brand-green">
              “Tecnologia que transforma. Soluções que conectam.”
            </span>

            <div className="flex flex-col gap-1 pt-1 font-mono text-[10px] text-brand-gray tracking-wide">
              <span>CNPJ: 59.635.881/0001-60</span>
              <span>Atendimento 100% remoto (online)</span>
            </div>

            {/* Redes sociais */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((s) => {
                const Icon = socialIconMap[s.icon] || Globe;
                return (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${s.name} da ED² Tecnologic (abre em nova aba)`}
                    title={s.name}
                    className="w-9 h-9 rounded-lg bg-brand-bg-card border border-brand-cyan/20 hover:border-brand-cyan/60 text-brand-gray hover:text-brand-cyan flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(0,217,255,0.2)]"
                  >
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick linkages columns */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest text-[#F5F7FA] uppercase">
              // MENU RÁPIDO
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#" className="text-brand-gray hover:text-brand-cyan transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#sobre" className="text-brand-gray hover:text-brand-cyan transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#servicos" className="text-brand-gray hover:text-brand-cyan transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#sistemas" className="text-brand-gray hover:text-brand-cyan transition-colors">
                  Sistemas
                </a>
              </li>
            </ul>
          </div>

          {/* Live system monitoring clocks column */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-xs tracking-widest text-[#F5F7FA] uppercase">
              // TELEMETRIA DE TEMPO REAL
            </h4>
            
            <div className="space-y-3 font-mono text-[11px] text-brand-gray">
              
              {/* Jordânia, MG Clock */}
              <div className="bg-brand-bg-card border border-brand-cyan/10 rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-ping" />
                  <span className="text-[10px]">JORDÂNIA - BR</span>
                </div>
                <span className="text-brand-white font-semibold tabular-nums">{timeBR || "00:00:00"}</span>
              </div>

              {/* UTC Clock */}
              <div className="bg-brand-bg-card border border-brand-cyan/10 rounded-lg p-2.5 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                  <span className="text-[10px]">COORDINATED UTC</span>
                </div>
                <span className="text-brand-white font-semibold tabular-nums">{timeUTC || "00:00:00"}</span>
              </div>

              {/* Contador de visitas (Netlify Function + Blobs) */}
              <VisitorCounter />

            </div>
          </div>

        </div>

        {/* Lower row: copyrights and back-to-top */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pt-8 text-[11px] font-mono text-brand-gray">
          
          <div className="space-y-1 text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} ED² Tecnologic. Todos os direitos reservados.
            </p>
            <p className="text-brand-cyan/60">
              Desenvolvido por Enos Alves Santos // Jordânia-MG, Brasil
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-1.5 text-brand-green">
              <Shield className="w-3.5 h-3.5 text-brand-cyan" aria-hidden="true" />
              <span>Conexão segura (HTTPS)</span>
            </div>

            {/* Scroll back to Top trigger */}
            <button
              type="button"
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-brand-bg-card border border-brand-cyan/25 hover:border-brand-green/70 text-brand-white hover:text-brand-green transition-all duration-300 flex items-center justify-center"
              aria-label="Voltar ao topo da página"
            >
              <ChevronUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>

        </div>

      </div>
    </footer>
  );
}
