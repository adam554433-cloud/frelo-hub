import * as Icons from "lucide-react";
import type { AppCard as AppCardType } from "@/config/apps";

const statusLabel: Record<AppCardType["status"], string> = {
  live: "Live",
  beta: "Beta",
  idea: "Coming Soon",
};

const statusStyles: Record<AppCardType["status"], string> = {
  live: "bg-accent/15 text-accent-light border-accent/30",
  beta: "bg-cream/10 text-cream border-cream/20",
  idea: "bg-white/5 text-text-secondary border-white/10",
};

export function AppCard({ app }: { app: AppCardType }) {
  const Icon = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[app.icon] ?? Icons.AppWindow;
  const isLive = app.status !== "idea";

  const content = (
    <div className="group relative h-full overflow-hidden rounded-card border border-surface-border bg-surface p-6 transition-all hover:border-accent/40 hover:bg-surface-hover">
      <div className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" style={{
        background: "radial-gradient(circle at 50% 0%, rgba(185,146,59,0.15), transparent 70%)",
      }} />

      <div className="relative flex flex-col gap-4">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-card bg-accent-gradient shadow-lg shadow-accent/20">
            <Icon className="h-6 w-6 text-chocolate" />
          </div>
          <span className={`rounded-pill border px-3 py-1 text-xs font-medium ${statusStyles[app.status]}`}>
            {statusLabel[app.status]}
          </span>
        </div>

        <div>
          <h3 className="font-serif text-2xl font-semibold text-text-primary">{app.name}</h3>
          <p className="mt-1 text-sm text-text-secondary">{app.tagline}</p>
        </div>

        {isLive && (
          <div className="flex items-center gap-2 text-sm text-accent-light opacity-0 transition-opacity group-hover:opacity-100">
            <span>Open app</span>
            <Icons.ArrowUpRight className="h-4 w-4" />
          </div>
        )}
      </div>
    </div>
  );

  if (!isLive) return content;

  return (
    <a href={app.url} target="_blank" rel="noopener noreferrer" className="block h-full">
      {content}
    </a>
  );
}
