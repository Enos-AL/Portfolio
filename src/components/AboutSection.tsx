import React from "react";
import { UserCheck, Sliders, Shield, Zap, Target, PenTool, Cpu, Star } from "lucide-react";
import { motion } from "motion/react";

export default function AboutSection() {
  const differentials = [
    {
      title: "Atendimento Personalizado",
      description: "Tratamento de proximidade extrema, entendendo exatamente sua necessidade cotidiana para criar ferramentas úteis e ergonômicas.",
      icon: UserCheck,
      colorClass: "text-brand-cyan",
      borderColor: "rgba(0, 217, 255, 0.2)"
    },
    {
      title: "Soluções Escaláveis",
      description: "Sistemas planejados para suportar o crescimento natural do negócio sem perdas de desempenho ou necessidade de refatorações completas.",
      icon: Cpu,
      colorClass: "text-brand-blue",
      borderColor: "rgba(0, 140, 255, 0.2)"
    },
    {
      title: "Segurança e Confiabilidade",
      description: "Garantias rígidas de criptografia de dados, proteção inteligente, auditoria de acesso e backups automáticos para resguardar as operações.",
      icon: Shield,
      colorClass: "text-brand-green",
      borderColor: "rgba(124, 255, 0, 0.2)"
    },
    {
      title: "Alta Performance",
      description: "Carregamento instantâneo, consultas otimizadas ao banco de dados e execução leve em qualquer celular ou dispositivo de trabalho desktop.",
      icon: Zap,
      colorClass: "text-brand-cyan",
      borderColor: "rgba(0, 217, 255, 0.2)"
    },
    {
      title: "Foco em Resultados",
      description: "Nenhum código é escrito à toa. Tudo visa encurtar tempos logísticos, economizar recursos operacionais ou gerar novas fontes de vendas.",
      icon: Target,
      colorClass: "text-brand-blue",
      borderColor: "rgba(0, 140, 255, 0.2)"
    },
    {
      title: "Tecnologia sob Medida",
      description: "Sem ferramentas genéricas enfadonhas. Desenvolvemos o sistema exatamente moldado ao seu processo e aos seus funcionários de campo.",
      icon: PenTool,
      colorClass: "text-brand-green",
      borderColor: "rgba(124, 255, 0, 0.2)"
    }
  ];

  return (
    <section id="sobre" className="relative py-24 scroll-mt-12 bg-brand-bg-main/50 overflow-hidden">
      
      {/* Visual top border dividing sections */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Institution Intro Left Side Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-brand-green tracking-widest uppercase block">
                // SOBRE A EMPRESA
              </span>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
                Engenharia de Software para o Amanhã, <span className="text-brand-cyan">Hoje</span>
              </h2>
            </div>

            <p className="text-brand-gray text-base font-light leading-relaxed">
              A <strong className="text-brand-white font-medium">ED² Tecnologic</strong> idealiza, programa e implanta ecossistemas digitais inteligentes de alto nível. Unimos desenvolvimento de sistemas integrados, automação de processos manuais, suporte técnico especializado e infraestrutura de alta segurança para transformar fluxos de trabalho em resultados mensuráveis.
            </p>

            <p className="text-brand-gray text-base font-light leading-relaxed">
              Sob a liderança de <span className="text-brand-green">Enos Alves Santos</span>, a empresa opera como aliada tecnológica indispensável de gestões públicas, lojas varejistas e indústrias, projetando ferramentas robustas de alta eficiência sem burocracias desnecessárias.
            </p>

            {/* Micro stats banner */}
            <div className="border border-brand-cyan/15 rounded-2xl bg-brand-bg-card p-4 flex gap-4 items-center">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/10 border border-brand-cyan/25 flex items-center justify-center shrink-0">
                <Star className="w-6 h-6 text-brand-cyan animate-pulse" />
              </div>
              <div>
                <p className="font-mono text-xs text-brand-gray tracking-wider">COMPROMISSO ABSOLUTO</p>
                <p className="font-display font-medium text-sm text-brand-white">Sistemas em conformidade estrita com leis e regulamentos do cliente.</p>
              </div>
            </div>
          </div>

          {/* Differentials Grid On Right Side */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {differentials.map((diff, index) => {
                const IconComponent = diff.icon;
                return (
                  <motion.div
                    key={diff.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-panel hover:bg-brand-bg-card/90 rounded-2xl p-5 hover:border-brand-cyan/40 transition-all duration-300 group"
                    style={{ borderLeftColor: diff.colorClass === "text-brand-cyan" ? "rgba(0, 217, 255, 0.4)" : diff.colorClass === "text-brand-blue" ? "rgba(0, 140, 255, 0.4)" : "rgba(124, 255, 0, 0.4)" }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className={`p-2.5 rounded-lg bg-brand-bg-main border border-brand-cyan/10 group-hover:border-transparent group-hover:bg-brand-cyan/10 transition-colors duration-300 ${diff.colorClass}`}>
                        <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <span className="font-mono text-[9px] text-[#AAB4C0] group-hover:text-brand-cyan transition-colors">
                        0{index + 1} // ED²
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-base text-brand-white mb-2 group-hover:text-brand-cyan transition-colors">
                      {diff.title}
                    </h3>
                    <p className="text-brand-gray text-xs font-light leading-relaxed">
                      {diff.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
