export const Experience = () => {
  return (
    <section id="experience" className="card">
      <h2>Live Project Experiences</h2>

      <div className="xp">
        <div className="xp-row">
          <div className="xp-dot" />
          <div className="xp-body">
            <div className="xp-head">
              <strong>Specialist Software Engineer</strong>
              <span className="muted">LTIMindtree - 2022–Present</span>
            </div>
            <ul className="bullets">
              <strong>Gallagher AI</strong>
              <li>Developed a domain-specific AI productivity tool enabling Gallagher employees to securely auto-generate PPTs, notes, and keyword insights using OpenAI and LLM-based APIs.</li>
              <li>Architected the frontend with React 19, Vite, Tailwind CSS, TypeScript, and integrated secure API authentication.</li>
              <li>Used Azure DevOps boards & pipelines for sprint planning, CI/CD, and deployments.</li>
              <li>Delivered optimized UI performance through lazy loading, code splitting, and React.memo.</li>
              <li>Implemented unit tests with Jest & React Testing Library, ensuring reliability and regression-free releases.</li>
            </ul>
            <ul className="bullets">
              <strong>Nokia Mediation - Micro Frontends</strong>
              <li>Built enterprise-grade dashboards and alerting systems using React + AG-Grid for real-time telecom data monitoring.</li>
              <li>Applied SOLID principles and modular architecture to enhance scalability and maintainability.</li>
              <li>Collaborated with backend & DevOps teams to streamline CI/CD pipelines (GitLab → Jenkins → Docker).</li>
              <li>Mentored 4+ frontend engineers and enforced WCAG accessibility standards across modules.</li>
              <li>Ensured cross-browser/device compatibility and consistently improved UI performance.</li>
            </ul>
          </div>
        </div>

        <div className="xp-row">
          <div className="xp-dot" />
          <div className="xp-body">
            <div className="xp-head">
              <strong>Senior Web Developer (Client Projects)</strong>
              <span className="muted">Farshore Software - 2019–2022</span>
            </div>
            <ul className="bullets">
              <li><strong>CivicBell</strong> — Social/civic engagement app (React + Redux, Firebase): petitions, invites, local news, push tokens/FCM integration.</li>
              <li><strong>NSL (National Scavenger League)</strong> — Admin panel for nationwide scavenger hunt league (React, Firebase Auth/Hosting, polygon-map driven tournament setup).</li>
              <li><strong>Zenebi</strong> — Real-estate style family asset viewer (React, charts, Material Table).</li>
              <li><strong>Telli (Triangle Investigations)</strong> — Web + mobile backend (RoR + PostgreSQL): designed REST APIs, split API/web apps, owned admin UI.</li>
            </ul>
          </div>
        </div>

        <div className="xp-row">
          <div className="xp-dot" />
          <div className="xp-body">
            <div className="xp-head">
              <strong>Tech Project-Associate</strong>
              <span className="muted">QDXSoft Solutions - 2015–2019</span>
            </div>
            <ul className="bullets">
              <li><strong>QADEX PLM</strong> — Project templates, online forms, attachments for food-supply projects (RoR, MySQL, jQuery).</li>
              <li><strong>QADEX System Standardization</strong> — App-wide responsive revamp; user/browser/IP/page telemetry persisted for performance insights.</li>
              <li><strong>QADEX Change Requests</strong> — Iterative CR pipeline delivering customer-specific features across modules.</li>
              <li><strong>Supply Chain Mapping</strong> — Multi-level supplier maps and geo visualizations for raw-material provenance.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
