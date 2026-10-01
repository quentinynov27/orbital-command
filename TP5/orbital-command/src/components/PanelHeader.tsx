import type { ReactNode } from "react";

export interface PanelHeaderProps {
    title: string;
    children?: ReactNode;
}

export default function PanelHeader({ title, children }: PanelHeaderProps) {
    return (
        <header className="panel-header">
            <h2>{title}</h2>
            {children}
        </header>
    );
}
