export function SectionHeading({ index, label, title, action }: { index: string; label: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="section-heading">
      <div><p className="eyebrow"><span>{index}</span> {label}</p><h2>{title}</h2></div>
      {action && <div className="section-action">{action}</div>}
    </div>
  );
}
