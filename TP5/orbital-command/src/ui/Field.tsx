import type { ReactNode } from "react";

export function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}) {
  const errorId = `${id}-error`;
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} role="alert" className="text-sm text-rose-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export function inputClass(error?: string): string {
  const base =
    "w-full rounded-md border bg-slate-900 px-3 py-2 text-sm text-slate-100 placeholder:text-slate-500";
  return error
    ? `${base} border-rose-500`
    : `${base} border-slate-700 focus:border-cyan-400`;
}
