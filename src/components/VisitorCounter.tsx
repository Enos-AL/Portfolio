import React, { useState, useEffect } from "react";

const ENDPOINT = "/.netlify/functions/visitas";
const SESSION_FLAG = "visit-counted";

type Status = "loading" | "ready" | "error";

export default function VisitorCounter() {
  const [total, setTotal] = useState<number | null>(null);
  const [status, setStatus] = useState<Status>("loading");

  useEffect(() => {
    // Conta apenas uma vez por sessão do navegador; nas demais cargas, só lê.
    let alreadyCounted = false;
    try {
      alreadyCounted = sessionStorage.getItem(SESSION_FLAG) === "1";
    } catch {
      /* sessionStorage indisponível — segue contando normalmente */
    }

    const url = alreadyCounted ? ENDPOINT : `${ENDPOINT}?hit=1`;

    fetch(url)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("falha"))))
      .then((data) => {
        if (typeof data.total === "number") {
          setTotal(data.total);
          setStatus("ready");
          try {
            sessionStorage.setItem(SESSION_FLAG, "1");
          } catch {
            /* ignora */
          }
        } else {
          setStatus("error");
        }
      })
      .catch(() => setStatus("error"));
  }, []);

  // Se o contador falhar, não mostra nada (evita um card quebrado no footer).
  if (status === "error") return null;

  return (
    <div className="bg-brand-bg-card border border-brand-green/10 rounded-lg p-2.5 flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green" />
        </span>
        <span className="text-[10px]">VISITAS NO SITE</span>
      </div>
      <span className="text-brand-white font-semibold tabular-nums">
        {status === "loading" || total === null
          ? "•••"
          : total.toLocaleString("pt-BR")}
      </span>
    </div>
  );
}
