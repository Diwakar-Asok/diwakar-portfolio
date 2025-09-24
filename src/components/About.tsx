export const About = () => {
  return (
   <section id="about" className="card about-card">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            Innovating the web, pixel by pixel, sprint by sprint. With over 9.9 years of
            end-to-end experience in frontend engineering, I specialize in building scalable,
            modular, and performance-optimized applications using React.js, Redux Toolkit,
            and modern UI frameworks.
          </p>

          <p>
            Currently working at LTIMindtree as a Specialist - Software Engineering, I’ve been
            driving the Gallagher AI Productivity Platform, an internal AI tool similar to ChatGPT that helps
            employees securely generate PPTs, notes, and keyword insights using OpenAI and
            LLM-based APIs. I architected the platform using React 19, Vite, Tailwind CSS, and
            TypeScript, while managing sprint boards and pipelines in Azure DevOps.
          </p>

          <p>
            Previously, I contributed to Nokia Mediation dashboards, developing enterprise-grade
            telecom UIs with React + AG-Grid, integrated with CI/CD pipelines (GitLab → Jenkins → Docker),
            and delivered WCAG-compliant, accessible interfaces at scale.
          </p>

          <p>
            At Farshore Software, I worked on financial dashboards and also built CivicBell
            (US Client) — a social engagement app connecting residents with public officials.
            I implemented React-Redux state management and Firebase Cloud Messaging (FCM)
            for real-time notifications.
          </p>

          <p>
            <strong>What sets me apart?</strong> I don't just develop interfaces—I design robust frontend
            systems that are clean, reusable, and production-ready. From converting Figma/Adobe XD
            designs into responsive components to building AI-driven and data-rich dashboards, my focus
            is always on delivering seamless, high-performance digital experiences.
          </p>

          <p>
            <strong>Domains:</strong> AI Productivity | Telecom | Fintech | Social Apps | Enterprise SaaS
          </p>

          <p>
            I’m actively open to challenging roles where innovation, design precision, and
            performance tuning go hand-in-hand. Let’s connect.
          </p>
        </div>
        
        <ul className="tags">
          {[
            "React 19","NextJS","TypeScript","Vite","Redux Toolkit","Tailwind",
            "Jest","Javascript","Docker","CI/CD","Ruby on Rails","MySQL","PostgreSQL", "CSS3", "HTML5"
          ].map(t => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};
