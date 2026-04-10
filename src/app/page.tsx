import { AppCard } from "@/components/AppCard";
import { apps, comingSoon, links } from "@/config/apps";
import { ArrowUpRight, Link2 } from "lucide-react";

export default function Home() {
  const liveCount = apps.filter((a) => a.status === "live").length;

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <header className="mb-16">
        <div className="mb-3 flex items-center gap-2 text-sm text-accent-light">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-light animate-pulse" />
          <span className="uppercase tracking-[0.2em]">frelo command center</span>
        </div>
        <h1 className="font-serif text-5xl font-semibold leading-tight sm:text-6xl">
          Your creative <span className="bg-brand-gradient bg-clip-text text-transparent">universe</span>,
          <br />
          in one place.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-text-secondary">
          {liveCount} apps live · {comingSoon.length} ideas brewing · one click to any of them.
        </p>
      </header>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl font-semibold">My Apps</h2>
          <span className="text-sm text-text-muted">{apps.length} total</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {apps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      <section className="mb-16">
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl font-semibold">Coming Soon</h2>
          <span className="text-sm text-text-muted">ideas & future apps</span>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoon.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
      </section>

      <section>
        <div className="mb-6 flex items-baseline justify-between">
          <h2 className="font-serif text-3xl font-semibold">Assets & Links</h2>
          <span className="text-sm text-text-muted">everything else</span>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-card border border-surface-border bg-surface px-5 py-4 transition-all hover:border-accent/40 hover:bg-surface-hover"
            >
              <div className="flex items-center gap-3">
                <Link2 className="h-4 w-4 text-accent" />
                <div>
                  <div className="font-medium text-text-primary">{link.name}</div>
                  <div className="text-xs uppercase tracking-wider text-text-muted">{link.category}</div>
                </div>
              </div>
              <ArrowUpRight className="h-4 w-4 text-text-muted transition-colors group-hover:text-accent-light" />
            </a>
          ))}
        </div>
      </section>

      <footer className="mt-24 border-t border-surface-border pt-8 text-center text-sm text-text-muted">
        frelo hub · {new Date().getFullYear()}
      </footer>
    </main>
  );
}
