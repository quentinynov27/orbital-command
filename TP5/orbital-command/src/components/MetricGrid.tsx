import type { ReactNode } from "react";

export interface MetricGridProps {
    children: ReactNode;
}

export default function MetricGrid({ children }: MetricGridProps) {
    return <div className="metric-grid">{children}</div>;
}
