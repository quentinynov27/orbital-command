import type { ReactNode } from "react";

export function SimulationBanner() {
  return (
    <p className="border-b border-cyan-900/70 bg-cyan-950/50 px-4 py-2 text-center text-xs uppercase tracking-[0.22em] text-cyan-300">
      AstraForge Aerospace — simulation pédagogique — aucune donnée réelle
    </p>
  );
}

export function Shell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <SimulationBanner />
      <header className="border-b border-slate-800 px-6 py-5">
        <p className="text-xs uppercase tracking-[0.28em] text-cyan-400">Orbital Command</p>
        <h1 className="mt-1 text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-1 max-w-3xl text-sm text-slate-400">{subtitle}</p>
      </header>
      <main className="mx-auto max-w-5xl px-6 py-8">{children}</main>
    </div>
  );
}
