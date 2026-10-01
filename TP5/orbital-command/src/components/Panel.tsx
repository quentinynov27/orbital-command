import type { ReactNode } from "react";

export interface PanelProps {
    children: ReactNode;
}

export default function Panel({ children }: PanelProps) {
    return <section className="panel">{children}</section>;
}
