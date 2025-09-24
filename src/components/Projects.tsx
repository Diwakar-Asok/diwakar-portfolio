type Project = {
  title: string;
  blurb: string;
  tags: string[];
  repo: string;
  live: string;
  shot?: string;
};

const projects: Project[] = [
  { title: "Pulse Admin",
    blurb: "Role-based dashboard with audit logs, widgets, theming.",
    tags: ["React 19", "Vite", "RTK Query"],
    repo: "https://github.com/you/pulse-admin",
    live: "https://pulse-admin.your.dev"
  },
  { title: "Ledger",
    blurb: "Expense tracker with budgets, charts, CSV import/export.",
    tags: ["TypeScript", "Zustand", "Recharts"],
    repo: "https://github.com/you/ledger",
    live: "https://ledger.your.dev"
  },
  { title: "Kanflow",
    blurb: "Realtime kanban with drag & drop and optimistic updates.",
    tags: ["WebSockets", "DndKit", "Postgres"],
    repo: "https://github.com/you/kanflow",
    live: "https://kanflow.your.dev"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="card">
      <h2>Projects</h2>
      <div className="grid-3">
        {projects.map(p => (
          <article key={p.title} className="proj">
            <div className="shot">{p.shot ? <img src={p.shot} /> :  <span>preview</span>}</div>
            <div className="proj-h">
              <strong>{p.title}</strong>
              <div className="links">
                <a href={p.repo} title="GitHub">🐙</a>
                <a href={p.live} title="Live">↗</a>
              </div>
            </div>
            <p>{p.blurb}</p>
            <ul className="tags">
              {p.tags.map(t=>(
                <li key={t}>{t}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}