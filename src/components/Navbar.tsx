import React, { useState, useEffect } from "react";
import { Terminal, Menu, X, Phone, Cpu, Settings, Layers, MessageSquare, Globe } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Início", href: "#" },
    { name: "Sobre", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Sistemas", href: "#sistemas" },
    { name: "Tecnologia", href: "#tecnologia" },
    { name: "Por que ED²", href: "#por-que-ed2" },
  ];

  // Closes the mobile menu and scrolls reliably to the section (works even on
  // mobile where the animated/blurred panel can swallow the default link tap).
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-nav-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-3 bg-brand-bg-main/80 backdrop-blur-md border-b border-brand-cyan/15 shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo ED² */}
          <a
            id="nav-logo-link"
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus:ring-1 focus:ring-brand-cyan rounded p-1"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-brand-bg-card border border-brand-cyan/25 group-hover:border-brand-green/50 transition-colors duration-300 shadow-[0_0_15px_rgba(0,217,255,0.1)]">
              {/* Circuit decoration in logo block */}
              <div className="absolute inset-0.5 rounded-md bg-gradient-to-tr from-brand-bg-main to-brand-bg-card opacity-85" />
              <span className="relative font-display font-extrabold text-base tracking-tighter text-brand-cyan group-hover:text-brand-green transition-colors duration-300">
                ED²
              </span>
              <div className="absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full bg-brand-green group-hover:animate-ping" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-none tracking-tight text-brand-white group-hover:text-brand-cyan transition-colors duration-300">
                ED² Tecnologic
              </span>
              <span className="font-mono text-[9px] tracking-widest text-brand-gray uppercase">
                Sistemas Inteligentes
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-3 py-2 text-sm font-medium text-brand-gray hover:text-brand-white tracking-wide transition-colors duration-200 group rounded-md"
              >
                {link.name}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-brand-cyan transition-all duration-300 group-hover:w-8" />
              </a>
            ))}
          </nav>

          {/* Fale Conosco CTA Button */}
          <div className="hidden md:block">
            <a
              id="cta-nav-whatsapp"
              href="#contato"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-display font-medium text-xs tracking-wider uppercase text-brand-bg-main bg-gradient-to-r from-brand-cyan to-brand-blue hover:from-brand-green hover:to-brand-cyan shadow-[0_0_20px_rgba(0,217,255,0.25)] hover:shadow-[0_0_25px_rgba(124,255,0,0.3)] transition-all duration-300 transform active:scale-95"
            >
              <Phone className="w-3.5 h-3.5" />
              Fale Conosco
            </a>
          </div>

          {/* Mobile Menu Icon Toggle */}
          <div className="md:hidden">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-brand-bg-card border border-brand-cyan/20 text-brand-gray hover:text-brand-cyan transition-colors"
              aria-label="Abrir menu de navegação"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Glass Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-nav-panel"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden relative z-50 overflow-hidden border-t border-brand-cyan/10 bg-brand-bg-main shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
          >
            <div className="px-5 pt-3 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block px-4 py-3 rounded-lg text-base font-medium text-brand-gray hover:text-brand-cyan hover:bg-brand-bg-card border-l-2 border-transparent hover:border-brand-cyan transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  id="cta-mobile-whatsapp"
                  href="#contato"
                  onClick={(e) => handleNavClick(e, "#contato")}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-display font-bold text-sm text-brand-bg-main bg-brand-cyan hover:bg-brand-green shadow-lg transition-colors text-center"
                >
                  <Phone className="w-4 h-4" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
