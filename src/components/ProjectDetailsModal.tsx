import React, { useEffect } from "react";
import { Project } from "../types";
import { X, CheckCircle, Flame, ShieldAlert, Cpu, HeartPulse, Send, Wrench, Terminal } from "lucide-react";
import { motion } from "motion/react";

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailsModal({ project, onClose }: ProjectDetailsModalProps) {
  
  // Close modal when Escape key is pressed
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  // Formatting custom Whatsapp text for precise conversions
  const contactText = encodeURIComponent(
    `Olá Enos / ED² Tecnologic, gostaria de solicitar uma demonstração ou saber mais detalhes sobre o sistema "${project.name}" (Área: ${project.category}) que encontrei no seu portfólio.`
  );
  const whatsappUrl = `https://wa.me/5533999113419?text=${contactText}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-bg-main/90 backdrop-blur-md"
      />

      {/* Modal Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 15 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-4xl max-h-[85vh] overflow-y-auto glass-panel rounded-2xl border border-brand-cyan/25 shadow-[0_20px_50px_rgba(0,217,255,0.15)] z-10 p-6 md:p-8"
      >
        
        {/* Absolute blueprint matrix design details in modal corners */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-green" />

        {/* Header Bar */}
        <div className="flex items-start justify-between gap-4 border-b border-brand-cyan/10 pb-4 mb-6">
          <div className="space-y-1">
            <span className="font-mono text-[10px] text-brand-green tracking-widest uppercase">
              // DETALHES DE ENGENHARIA // DE-{project.id.toUpperCase()}
            </span>
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-brand-white leading-tight">
              {project.name}
            </h2>
            <p className="font-mono text-xs text-brand-cyan">
              {project.category}
            </p>
          </div>
          <button
            id="close-modal-btn"
            onClick={onClose}
            className="p-2 rounded-lg bg-brand-bg-main hover:bg-brand-bg-card border border-brand-cyan/15 hover:border-brand-cyan/50 text-brand-gray hover:text-brand-white transition-all duration-300"
            aria-label="Fechar modal de detalhes"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body content divided in columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Column Left: Visual Cap, Description, Problems Solved, CTA */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Visual Cap Header */}
            <div className={`p-8 rounded-2xl bg-gradient-to-br ${project.coverGradient} border border-brand-cyan/15 relative overflow-hidden flex flex-col items-center justify-center aspect-[16/8]`}>
              <div className="absolute inset-0 bg-grid-cyber opacity-15" />
              <div className="w-16 h-16 rounded-full bg-brand-bg-card border border-brand-cyan/35 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                <Flame className="w-8 h-8 text-brand-cyan animate-pulse" />
              </div>
              <span className="font-mono text-[9px] text-brand-cyan/80 tracking-widest uppercase block mb-1">
                SISTEMA MODELO OPERACIONAL
              </span>
              <p className="font-display font-bold text-lg text-brand-white">
                {project.name}
              </p>
            </div>

            {/* Complete overview description */}
            <div className="space-y-2">
              <h3 className="font-display font-semibold text-sm text-brand-cyan uppercase tracking-wider">
                Descrição Geral da Solução
              </h3>
              <p className="text-brand-gray text-sm font-light leading-relaxed">
                {project.fullDescription}
              </p>
            </div>

            {/* Problem Solved Container */}
            <div className="p-4 rounded-xl bg-brand-bg-main/60 border border-brand-cyan/10 space-y-2">
              <h4 className="font-mono text-xs text-brand-green uppercase tracking-wider flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4 text-brand-cyan shrink-0" />
                Problema que resolve:
              </h4>
              <p className="text-brand-gray text-xs font-light leading-relaxed">
                {project.problemSolved}
              </p>
            </div>

            {/* Tech Badges List */}
            <div className="space-y-2">
              <h4 className="font-mono text-xs text-brand-gray uppercase tracking-widest block">
                TECNOLOGIAS DE INTEGRAÇÃO
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-brand-bg-card border border-brand-cyan/10 text-brand-white font-mono text-xs hover:border-brand-cyan/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Column Right: Features List, Status card, Contact CTA */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Project Specifications Card */}
            <div className="rounded-xl border border-brand-cyan/10 bg-brand-bg-main/45 p-4 space-y-3">
              <h4 className="font-mono text-xs text-brand-gray uppercase tracking-widest block border-b border-brand-cyan/10 pb-2">
                ESPECIFICAÇÕES TÉCNICAS
              </h4>
              
              <div className="flex justify-between items-center text-xs">
                <span className="text-brand-gray">Status do Projeto:</span>
                <span className="px-2.5 py-0.5 rounded bg-brand-cyan/10 border border-brand-cyan/25 text-brand-cyan font-mono font-medium text-[10px] uppercase">
                  {project.status}
                </span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-brand-gray">Versão de Arquitetura:</span>
                <span className="text-brand-white font-mono">v1.2.0-secure</span>
              </div>

              <div className="flex justify-between items-center text-xs">
                <span className="text-brand-gray">Escopo de Produção:</span>
                <span className="text-brand-green font-mono">ED² Tecnologic exclusive</span>
              </div>
            </div>

            {/* Core Features List */}
            <div className="space-y-3">
              <h3 className="font-display font-semibold text-sm text-brand-cyan uppercase tracking-wider">
                Principais Funcionalidades
              </h3>
              
              <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 text-xs text-brand-gray leading-relaxed font-light"
                  >
                    <CheckCircle className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-brand-cyan/10 space-y-3">
              <a
                id="modal-cta-whatsapp"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Solicitar demonstração ou contato sobre ${project.name} pelo WhatsApp`}
                className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-display font-semibold text-xs text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-green hover:shadow-[0_0_20px_rgba(124,255,0,0.3)] hover:scale-[1.01] transition-all duration-300"
              >
                <Send className="w-4 h-4" aria-hidden="true" />
                SOLICITAR DEMONSTRAÇÃO / CONTATO
              </a>
              <button
                onClick={onClose}
                className="w-full py-3.5 rounded-xl border border-brand-cyan/15 hover:bg-brand-bg-card font-display text-xs font-medium text-brand-gray hover:text-brand-white transition-all"
              >
                Voltar ao Portfólio
              </button>
            </div>

          </div>

        </div>

      </motion.div>
    </div>
  );
}
