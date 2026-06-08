import React, { useEffect } from "react";
import { X, Award, Building2, Calendar, ShieldCheck, ShieldAlert } from "lucide-react";
import { motion } from "motion/react";
import { Certificate } from "../data/businessInfo";

interface CertificateModalProps {
  certificate: Certificate;
  onClose: () => void;
}

export default function CertificateModal({ certificate, onClose }: CertificateModalProps) {
  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-brand-bg-main/90 backdrop-blur-md"
      />

      {/* Modal */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 15 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-5xl max-h-[88vh] overflow-y-auto glass-panel rounded-2xl border border-brand-cyan/25 shadow-[0_20px_50px_rgba(0,217,255,0.15)] z-10"
      >
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-cyan via-brand-blue to-brand-green z-20" />

        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar visualização do certificado"
          className="absolute top-3 right-3 z-30 p-2 rounded-lg bg-brand-bg-main/80 hover:bg-brand-bg-card border border-brand-cyan/20 hover:border-brand-cyan/50 text-brand-gray hover:text-brand-white transition-all"
        >
          <X className="w-5 h-5" aria-hidden="true" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12">

          {/* Image panel — light backdrop so the certificate reads well */}
          <div className="lg:col-span-8 p-4 sm:p-6 flex items-center justify-center bg-gradient-to-br from-slate-100 via-slate-200 to-slate-300 lg:rounded-l-2xl">
            <img
              src={certificate.imageUrl}
              alt={`Certificado: ${certificate.title} — ${certificate.institution}`}
              loading="lazy"
              className="w-full h-auto rounded-lg shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            />
          </div>

          {/* Description panel */}
          <div className="lg:col-span-4 p-6 space-y-4">
            <span className="font-mono text-[10px] text-brand-green tracking-widest uppercase flex items-center gap-1.5">
              <Award className="w-4 h-4" aria-hidden="true" /> Certificado
            </span>
            <h3 className="font-display font-bold text-xl text-brand-white leading-tight">
              {certificate.title}
            </h3>

            <div className="space-y-2.5 text-sm border-t border-brand-cyan/10 pt-4">
              <p className="text-brand-gray flex items-center gap-2">
                <Building2 className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" /> {certificate.institution}
              </p>
              <p className="text-brand-gray flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-cyan shrink-0" aria-hidden="true" /> {certificate.category} · {certificate.year}
              </p>
              <p className="text-brand-green flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 shrink-0" aria-hidden="true" /> {certificate.status}
              </p>
            </div>

            {certificate.description && (
              <div className="flex items-start gap-2 rounded-xl bg-brand-bg-main/50 border border-brand-cyan/10 p-3">
                <ShieldAlert className="w-4 h-4 text-brand-cyan shrink-0 mt-0.5" aria-hidden="true" />
                <p className="text-brand-gray text-xs font-light leading-relaxed">
                  {certificate.description}
                </p>
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              className="w-full py-3 rounded-xl border border-brand-cyan/20 hover:bg-brand-bg-card text-brand-gray hover:text-brand-white text-xs font-display font-medium transition-all"
            >
              Fechar
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}
