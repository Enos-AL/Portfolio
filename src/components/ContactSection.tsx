import React, { useState } from "react";
import { Send, Phone, Mail, MapPin, Check, Copy, MessageSquare, Sparkles, ExternalLink } from "lucide-react";
import { motion } from "motion/react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: ""
  });
  const [sent, setSent] = useState(false);
  const [waUrl, setWaUrl] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const phoneRaw = "5533999113419";
  const emailVal = "ciscopackettracent@gmail.com";

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Builds a real WhatsApp message from the form and opens the chat.
  const buildWhatsappUrl = () => {
    const lines = [
      "Olá, ED² Tecnologic! Vim pelo site e gostaria de mais informações.",
      "",
      `*Nome:* ${formData.nome}`,
      formData.email ? `*E-mail:* ${formData.email}` : "",
      formData.telefone ? `*Telefone:* ${formData.telefone}` : "",
      formData.assunto ? `*Assunto:* ${formData.assunto}` : "",
      "",
      "*Mensagem:*",
      formData.mensagem
    ].filter(Boolean);

    return `https://wa.me/${phoneRaw}?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.mensagem) return;

    const url = buildWhatsappUrl();
    setWaUrl(url);
    // Opens the real WhatsApp conversation (new tab / app).
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  return (
    <section id="contato" className="relative py-24 scroll-mt-12 overflow-hidden bg-brand-bg-main/30">

      {/* Separating top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

        {/* Title */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <span className="font-mono text-xs text-brand-cyan tracking-widest uppercase block">
            // FALE COM A NOSSA EQUIPE
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-white leading-tight">
            Vamos conectar sua empresa ao futuro?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-transparent mx-auto rounded-full" />
          <p className="text-brand-gray text-sm font-light leading-relaxed pt-2">
            Entre em contato com a equipe da <strong className="text-brand-cyan font-medium">ED² Tecnologic</strong> e transforme sua ideia ou necessidade operacional em um sistema corporativo seguro e bem construído.
          </p>
        </div>

        {/* Contact panel grids */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Card Left: Contact channels info */}
          <div className="lg:col-span-5 space-y-6">

            <div className="glass-panel rounded-2xl p-6 border-l-4 border-l-brand-cyan relative overflow-hidden">
              <div className="absolute inset-0 bg-grid-cyber opacity-10" />
              <h3 className="relative font-display font-bold text-xl text-brand-white tracking-tight mb-3 flex items-center gap-2 z-10">
                <Sparkles className="w-5 h-5 text-brand-cyan" aria-hidden="true" />
                Informações de Atendimento
              </h3>
              <p className="relative text-brand-gray text-xs font-light leading-relaxed mb-6 z-10">
                Estamos prontos para atendê-lo, fornecendo as ferramentas necessárias para empresas, comércios e gestões públicas expandirem seus canais digitais.
              </p>

              {/* Items List */}
              <div className="space-y-5 relative z-10">

                {/* WHATSAPP CONTAINER */}
                <div className="flex items-center gap-4 p-3 bg-brand-bg-main/40 border border-brand-cyan/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/35 flex items-center justify-center text-green-400">
                    <Phone className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-mono text-[9px] text-[#AAB4C0] uppercase tracking-wider leading-none">WhatsApp Comercial</p>
                    <a
                      href={`https://wa.me/${phoneRaw}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Conversar no WhatsApp comercial da ED² Tecnologic"
                      className="text-brand-white hover:text-brand-cyan text-sm font-semibold transition"
                    >
                      +55 (33) 99911-3419
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard("+5533999113419", "phone")}
                    className="p-1.5 rounded-md hover:bg-brand-bg-card border border-transparent hover:border-brand-cyan/20 text-brand-gray hover:text-brand-cyan transition-all"
                    aria-label="Copiar número de WhatsApp"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-brand-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </div>

                {/* EMAIL CONTAINER */}
                <div className="flex items-center gap-4 p-3 bg-brand-bg-main/40 border border-brand-cyan/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-cyan/10 border border-brand-cyan/35 flex items-center justify-center text-brand-cyan">
                    <Mail className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-mono text-[9px] text-[#AAB4C0] uppercase tracking-wider leading-none">E-mail Profissional</p>
                    <a
                      href={`mailto:${emailVal}`}
                      aria-label="Enviar e-mail para a ED² Tecnologic"
                      className="text-brand-white hover:text-brand-cyan text-xs sm:text-sm font-semibold break-all transition"
                    >
                      {emailVal}
                    </a>
                  </div>
                  <button
                    type="button"
                    onClick={() => copyToClipboard(emailVal, "email")}
                    className="p-1.5 rounded-md hover:bg-brand-bg-card border border-transparent hover:border-brand-cyan/20 text-brand-gray hover:text-brand-cyan transition-all"
                    aria-label="Copiar endereço de e-mail"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-brand-green" aria-hidden="true" /> : <Copy className="w-4 h-4" aria-hidden="true" />}
                  </button>
                </div>

                {/* LOCATION ATTACHMENT */}
                <div className="flex items-center gap-4 p-3 bg-brand-bg-main/40 border border-brand-cyan/10 rounded-xl">
                  <div className="w-10 h-10 rounded-lg bg-brand-green/10 border border-brand-green/35 flex items-center justify-center text-brand-green">
                    <MapPin className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="flex-grow">
                    <p className="font-mono text-[9px] text-[#AAB4C0] uppercase tracking-wider leading-none">Atendimento</p>
                    <span className="text-brand-white text-xs sm:text-sm font-semibold block leading-tight">
                      Remoto / Online · Jordânia-MG, Brasil
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* Quick action button to WhatsApp */}
            <div className="space-y-3">
              <a
                id="btn-whatsapp-direct"
                href={`https://wa.me/${phoneRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir conversa no WhatsApp com a ED² Tecnologic"
                className="flex items-center justify-center gap-3 w-full py-4 rounded-xl font-display font-bold text-sm text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-green hover:shadow-[0_0_25px_rgba(0,217,255,0.3)] hover:scale-[1.01] transition-all duration-300 text-center"
              >
                <MessageSquare className="w-5 h-5" aria-hidden="true" />
                CONVERSAR VIA WHATSAPP
              </a>
              <span className="block text-center font-mono text-[9px] text-brand-gray tracking-wide">
                Clique acima para abrir o chat diretamente e falar com Enos Alves Santos.
              </span>
            </div>

          </div>

          {/* Card Right: Direct message formulation form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-brand-cyan/15 relative">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-cyan to-brand-green opacity-50" />

              <div className="flex items-center justify-between border-b border-brand-cyan/10 pb-4 mb-6">
                <h3 className="font-display font-bold text-lg text-brand-white">
                  Formulário de Mensagem Direta
                </h3>
                <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-brand-green/10 border border-brand-green/25">
                  <MessageSquare className="w-3.5 h-3.5 text-brand-green" aria-hidden="true" />
                  <span className="font-mono text-[9px] text-brand-green">VIA WHATSAPP</span>
                </div>
              </div>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-8 text-center border border-brand-green/30 rounded-2xl bg-brand-green/5 space-y-4"
                >
                  <span className="text-4xl text-brand-green block" aria-hidden="true">💬</span>
                  <p className="font-display font-bold text-lg text-brand-white">Abrimos o WhatsApp para você!</p>
                  <p className="text-brand-gray text-xs font-light max-w-sm mx-auto leading-relaxed">
                    Sua mensagem já foi montada com os dados preenchidos. Basta tocar em enviar na conversa para falar com Enos Alves Santos. Se a janela não abriu automaticamente, use o botão abaixo.
                  </p>
                  <a
                    href={waUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Abrir conversa no WhatsApp com a mensagem preenchida"
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-r from-brand-cyan to-brand-green text-brand-bg-main text-xs font-display font-semibold hover:scale-[1.02] transition-transform"
                  >
                    <ExternalLink className="w-4 h-4" aria-hidden="true" />
                    Abrir conversa no WhatsApp
                  </a>
                  <div>
                    <button
                      type="button"
                      onClick={() => setSent(false)}
                      className="px-6 py-2.5 rounded-xl border border-brand-cyan/25 text-brand-cyan text-xs font-mono hover:bg-brand-bg-card transition-colors"
                    >
                      Editar mensagem
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* NOME */}
                    <div className="space-y-1">
                      <label htmlFor="contact-nome" className="block font-mono text-[10px] text-brand-gray uppercase">Nome completo *</label>
                      <input
                        id="contact-nome"
                        required
                        type="text"
                        name="nome"
                        value={formData.nome}
                        onChange={handleInputChange}
                        placeholder="Ex: João da Silva"
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-bg-main border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-xs sm:text-sm transition-all placeholder:text-brand-gray/30"
                      />
                    </div>
                    {/* EMAIL */}
                    <div className="space-y-1">
                      <label htmlFor="contact-email" className="block font-mono text-[10px] text-brand-gray uppercase">E-mail Profissional</label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Ex: joao@empresa.com"
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-bg-main border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-xs sm:text-sm transition-all placeholder:text-brand-gray/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* TELEFONE */}
                    <div className="space-y-1">
                      <label htmlFor="contact-telefone" className="block font-mono text-[10px] text-brand-gray uppercase">Telefone / WhatsApp</label>
                      <input
                        id="contact-telefone"
                        type="text"
                        name="telefone"
                        value={formData.telefone}
                        onChange={handleInputChange}
                        placeholder="Ex: (33) 99999-9999"
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-bg-main border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-xs sm:text-sm transition-all placeholder:text-brand-gray/30"
                      />
                    </div>
                    {/* ASSUNTO */}
                    <div className="space-y-1">
                      <label htmlFor="contact-assunto" className="block font-mono text-[10px] text-brand-gray uppercase">Assunto Principal</label>
                      <input
                        id="contact-assunto"
                        type="text"
                        name="assunto"
                        value={formData.assunto}
                        onChange={handleInputChange}
                        placeholder="Ex: Orçamento de Sistema Web"
                        className="w-full px-4 py-2.5 rounded-xl bg-brand-bg-main border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-xs sm:text-sm transition-all placeholder:text-brand-gray/30"
                      />
                    </div>
                  </div>

                  {/* MENSAGEM */}
                  <div className="space-y-1">
                    <label htmlFor="contact-mensagem" className="block font-mono text-[10px] text-brand-gray uppercase">Detalhes da sua Solicitação *</label>
                    <textarea
                      id="contact-mensagem"
                      required
                      rows={4}
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Descreva detalhadamente sua necessidade ou ideia do sistema a ser desenvolvido..."
                      className="w-full px-4 py-2.5 rounded-xl bg-brand-bg-main border border-brand-cyan/15 focus:border-brand-cyan text-brand-white text-xs sm:text-sm transition-all placeholder:text-brand-gray/30 resize-none"
                    />
                  </div>

                  {/* INFO BAR */}
                  <div className="flex items-center justify-between text-[11px] font-mono text-brand-gray py-1">
                    <span>* Campos obrigatórios</span>
                    <span className="text-brand-green">Você será levado ao WhatsApp</span>
                  </div>

                  {/* Submission trigger */}
                  <button
                    id="submit-contact-form-btn"
                    type="submit"
                    aria-label="Enviar mensagem pelo WhatsApp"
                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-display font-medium text-xs tracking-wider uppercase text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-green hover:to-brand-cyan transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    <Send className="w-4 h-4" aria-hidden="true" />
                    ENVIAR VIA WHATSAPP
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
