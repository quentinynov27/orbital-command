export interface MetricProps {
  label: string;
  value: string | number;
  unit?: string;
}

function formatValue(value: string | number): string {
  return typeof value === "number" ? value.toLocaleString("fr-FR") : value;
}

export default function Metric({ label, value, unit = "" }: MetricProps) {
  return (
    <div className="metric">
      <p className="metric-label">{label}</p>
      <p className="metric-value">
        {formatValue(value)}
        {unit ? ` ${unit}` : ""}
      </p>
    </div>
  );
}
