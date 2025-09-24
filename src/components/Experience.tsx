export const Experience = () => {
  return (
    <section id="experience" className="card">
      <h2>Experience</h2>

      <div className="xp">
        {/* Farshore → Nokia Mediation (your current flagship) */}
        <div className="xp-row">
          <div className="xp-dot" />
          <div className="xp-body">
            <div className="xp-head">
              <strong>Specialist Software Engineer</strong>
              <span className="muted">LTIMindtree - 2022–Present</span>
            </div>
            <ul className="bullets">
              <strong>Gallagher AI</strong>
              <li>Built a domain-specific AI productivity tool similar to ChatGPT that one who has used is Gallagher employees to securely auto-generate PPTs, notes, and keyword insights using OpenAI and other LLM-based APIs.</li>
              <li>Azure DevOps: Used for sprint planning, task boards, CI/CD pipelines, and secure deployments.</li>
              <li>Delivered responsive, modern UI with Tailwind and advanced state management using React hooks + Redux Toolkit.</li>
              <li>Optimized performance with lazy loading, code splitting, and memoization, delivering smooth UX for AI-assisted workflows.</li>
            </ul>
            <ul className="bullets">
              <strong>Nokia Mediation</strong>
              <li>Owned dashboard & alerts modules across a 90k+ LOC React app (microfrontends).</li>
              <li>Developed advanced data dashboards using AG-Grid with features like grouping, filtering, and custom columns.</li>
              <li>Mentored 4+ frontend engineers and enforced WCAG accessibility standards across modules.</li>
              <li>Collaborated with backend & DevOps teams to streamline CI/CD pipelines (GitLab → Jenkins → Docker).</li>
            </ul>
          </div>
        </div>

        {/* Farshore – other client projects */}
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

        {/* QDXSoft – QADEX product suite */}
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
