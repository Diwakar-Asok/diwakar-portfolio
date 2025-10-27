type Project = {
  title: string;
  blurb: string;
  tags: string[];
  repo: string;
  live: string;
  shot?: string;
};

const projects: Project[] = [
  { title: "CitizenCare Portal",
    blurb: "CitizenCare Portal is a multi-step social support application form built using React + TypeScript + Vite. It allows users to fill personal, family, and financial information, supports English/Arabic translation, and includes an AI-assisted writing helper powered by OpenAI.",
    tags: ["React 19", "Vite", "TypeScript", "OpenAI"],
    repo: "https://github.com/Diwakar-Asok/citizen-care-portal",
    live: "https://citizen-care-portal.vercel.app/apply/step1"
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
                <a href={p.repo} title="GitHub" target="blank">🐙</a>
                <a href={p.live} title="Live" target="blank">↗</a>
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