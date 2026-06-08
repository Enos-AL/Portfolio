import React from "react";
import { Check, ShieldCheck, Flame, Sliders, Smartphone, Network, TrendingUp, HelpCircle } from "lucide-react";
import { motion } from "motion/react";

export default function DiferenciaisSection() {
  const points = [
    {
      title: "Sistemas 100% Sob Medida",
      description: "Esqueça templates rígidos e difíceis de usar. Criamos painéis reativos projetados exatamente segundo a regência interna de seu fluxo de trabalho.",
      icon: Sliders,
    },
    {
      title: "Desenvolvimento Moderno",
      description: "Utilização de bibliotecas consolidadas do ecossistema global, garantindo respostas rápidas e interfaces fluidas de alta qualidade visual.",
      icon: TrendingUp,
    },
    {
      title: "Segurança e Boas Práticas de Código",
      description: "Estrita conformidade com a LGPD e privacidade corporativa. Criptografia ativa de dados sensíveis e auditoria de segurança integrada.",
      icon: ShieldCheck,
    },
    {
      title: "Soluções Escaláveis",
      description: "Seja para acessos médicos municipais ou um fluxo crescente de pedidos em SaaS, sua plataforma é projetada para manter estabilidade e desempenho conforme o uso cresce.",
      icon: Network,
    },
    {
      title: "Suporte Técnico Especializado",
      description: "Suporte resolutivo e direto, sem atendimentos robóticos demorados. Resposta ágil nas instabilidades e melhorias corretivas programadas.",
      icon: Flame,
    },
    {
      title: "Sólida Visão de Negócio",
      description: "Entendemos de finanças, estoque, agendamento de saúde municipal e varejo. Falamos a língua do seu problema operacional, não apenas de codagem pura.",
      icon: HelpCircle,
    },
    {
      title: "Automação Extrema de Processos",
      description: "Substitua planilhas offline confusas ou processos demorados de redigitação manual por fluxos clicáveis com exportação automática de relatórios.",
      icon: Smartphone,
    },
    {
      title: "Foco Exclusivo em Resultados Reais",
      description: "Fidelidade de clientes, agilidade na regulação de exames e conversão acelerada de leads. Criamos valor prático para justificar plenamente seu investimento.",
      icon: Check,
    }
  ];

  return (
    <section id="por-que-ed2" className="relative py-24 scroll-mt-12 overflow-hidden bg-brand-bg-main/50">
      
      {/* Decorative separating line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block">
                // COMPROMISSO DE VALOR
              </span>
              <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-white leading-tight">
                Por que escolher a ED² Tecnologic?
              </h2>
            </div>
            
            <p className="text-brand-gray text-sm leading-relaxed font-light">
              Nossa abordagem une rigor matemático na arquitetura lógica de dados com excelência no design gráfico, resultando em softwares que os profissionais da sua organização realmente gostam de usar todos os dias.
            </p>

            <div className="p-5 rounded-2xl bg-brand-bg-card border border-brand-cyan/15 space-y-3">
              <p className="font-sans font-medium text-xs text-brand-white uppercase tracking-wider text-brand-green">
                // SEGURANÇA OPERACIONAL ESTÁVEL
              </p>
              <p className="text-brand-gray text-xs leading-relaxed font-light">
                “Nenhum detalhe é pequeno demais para ser esquecido. Do tempo de carregamento de uma tabela pública de TFD à proteção contra invasões, cada bit do sistema é projetado para resistir.”
              </p>
              <span className="block text-right font-mono text-[9px] text-brand-cyan">
                — Enos Alves Santos, CTO
              </span>
            </div>
          </div>

          {/* Grid Right Column (8 differential factors) */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {points.map((pt, idx) => {
                const IconComponent = pt.icon;
                return (
                  <motion.div
                    key={pt.title}
                    initial={{ opacity: 0, x: 15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="flex gap-4 p-4 rounded-xl hover:bg-brand-bg-card border border-transparent hover:border-brand-cyan/10 transition-all duration-300 group"
                  >
                    <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-bg-main border border-brand-cyan/15 group-hover:border-brand-green/30 flex items-center justify-center text-brand-cyan group-hover:text-brand-green transition-colors duration-300">
                      <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="font-display font-semibold text-sm sm:text-base text-brand-white group-hover:text-brand-cyan transition-colors">
                        {pt.title}
                      </h4>
                      <p className="text-brand-gray text-xs font-light leading-relaxed">
                        {pt.description}
                      </p>
                    </div>
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
