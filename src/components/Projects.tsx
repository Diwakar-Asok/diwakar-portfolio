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
    tags: ["React 19", "Vite", "TypeScript", "OpenAI", "Javascript", "RTK", "React Hook Form","Tailwind CSS", "MUI", "i18next"],
    repo: "https://github.com/Diwakar-Asok/citizen-care-portal",
    live: "https://citizen-care-portal.vercel.app/apply/step1",
  },
  { title: "Trackify",
    blurb: "Trackify is a modern team-based project and task management system built using **React 19 + TypeScript + Vite**. It includes role-based access (Admin & Member), project creation, task assignment, kanban board view, team management, and local persistence",
    tags: ["React 19", "Vite", "Typescript", "RTK", "Javascript", "React DnD", "Tailwind CSS"],
    repo: "https://github.com/Diwakar-Asok/team-task-manager",
    live: "https://trackify-blond-phi.vercel.app"
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="card">
      <h2>GitHub Projects</h2>
      <div className="grid-3">
        {projects.map(p => (
          <article key={p.title} className="proj">
          
            <div className="proj-h">
              <h3>{p.title}</h3>
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