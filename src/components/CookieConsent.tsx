import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Cookie } from "lucide-react";

const CONSENT_KEY = "cookie-consent";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  // Só exibe o aviso enquanto o visitante ainda não fez uma escolha.
  useEffect(() => {
    try {
      if (!localStorage.getItem(CONSENT_KEY)) {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const decide = (accepted: boolean) => {
    try {
      localStorage.setItem(CONSENT_KEY, accepted ? "accepted" : "rejected");
    } catch {
      /* localStorage indisponível (ex.: modo privado) — apenas fecha o aviso */
    }

    // Libera a análise do GA4 somente quando o usuário aceita.
    if (accepted && typeof window.gtag === "function") {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }

    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Aviso de cookies"
          className="fixed z-[60] bottom-4 inset-x-4 sm:inset-x-auto sm:right-6 sm:max-w-sm glass-panel rounded-2xl p-5 shadow-[0_8px_40px_rgba(0,0,0,0.5)]"
        >
          {/* Faixa neon decorativa no topo */}
          <div className="absolute top-0 left-5 right-5 h-[1px] bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent" />

          <div className="flex items-start gap-3">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-brand-bg-card border border-brand-cyan/20 flex items-center justify-center">
              <Cookie className="w-4.5 h-4.5 text-brand-cyan" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <h3 className="font-display font-semibold text-sm text-brand-white">
                Cookies &amp; Privacidade
              </h3>
              <p className="text-xs leading-relaxed text-brand-gray font-light">
                Usamos cookies para medir os acessos e melhorar sua experiência.
                Você decide se aceita a análise de navegação.
              </p>
            </div>
          </div>

          <div className="flex gap-2.5 pt-4">
            <button
              type="button"
              onClick={() => decide(false)}
              className="flex-1 px-4 py-2.5 rounded-lg bg-brand-bg-card border border-brand-cyan/20 text-brand-gray hover:text-brand-white hover:border-brand-cyan/45 font-medium text-xs transition-all duration-300"
            >
              Recusar
            </button>
            <button
              type="button"
              onClick={() => decide(true)}
              className="flex-1 px-4 py-2.5 rounded-lg font-display font-medium text-xs tracking-wide text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-green hover:from-brand-green hover:to-brand-cyan shadow-[0_4px_18px_rgba(0,217,255,0.25)] transition-all duration-300"
            >
              Aceitar
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
