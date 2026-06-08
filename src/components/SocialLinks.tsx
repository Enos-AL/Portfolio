import React from "react";
import { socialLinks } from "../data/socialLinks";

type SocialSize = "sm" | "md" | "lg";

interface SocialLinksProps {
  /** Tamanho dos botões de ícone (ignorado quando `showLabels` é true). */
  size?: SocialSize;
  /** Inclui o link do site oficial (padrão: false — o visitante já está no site). */
  includeSite?: boolean;
  /** Renderiza cards com o nome da rede ao lado do ícone (usado no Contato). */
  showLabels?: boolean;
  /** Classes extras para o container (layout/espaçamento). */
  className?: string;
}

const sizeStyles: Record<SocialSize, { box: string; icon: string }> = {
  sm: { box: "w-8 h-8", icon: "w-4 h-4" },
  md: { box: "w-9 h-9", icon: "w-[18px] h-[18px]" },
  lg: { box: "w-11 h-11", icon: "w-5 h-5" },
};

/**
 * Links de redes sociais oficiais da ED² Tecnologic.
 * Componente reutilizado na Navbar, Hero, ContactSection e Footer.
 * Todos os links abrem em nova aba com rel de segurança e aria-label descritivo.
 */
export default function SocialLinks({
  size = "md",
  includeSite = false,
  showLabels = false,
  className = "",
}: SocialLinksProps) {
  const links = includeSite
    ? socialLinks
    : socialLinks.filter((link) => !link.isSite);

  // Variante com rótulo: cards pequenos (ex.: bloco "Redes e Plataformas").
  if (showLabels) {
    return (
      <div className={`grid grid-cols-2 sm:grid-cols-3 gap-2.5 ${className}`}>
        {links.map(({ name, url, ariaLabel, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={ariaLabel}
            className="group flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-brand-bg-main/40 border border-brand-cyan/15 hover:border-brand-green/50 text-brand-gray hover:text-brand-cyan transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_18px_rgba(124,255,0,0.18)]"
          >
            <Icon
              className="w-[18px] h-[18px] shrink-0 transition-colors duration-300"
              aria-hidden="true"
            />
            <span className="font-mono text-xs font-medium truncate">{name}</span>
          </a>
        ))}
      </div>
    );
  }

  // Variante padrão: botões redondos somente com ícone + tooltip nativo (title).
  const s = sizeStyles[size];

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {links.map(({ name, url, ariaLabel, icon: Icon }) => (
        <a
          key={name}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          title={name}
          className={`group ${s.box} rounded-lg bg-brand-bg-card/70 border border-brand-cyan/20 hover:border-brand-green/60 text-brand-gray hover:text-brand-cyan flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 hover:shadow-[0_0_15px_rgba(124,255,0,0.25)]`}
        >
          <Icon className={`${s.icon} transition-colors duration-300`} aria-hidden="true" />
        </a>
      ))}
    </div>
  );
}
