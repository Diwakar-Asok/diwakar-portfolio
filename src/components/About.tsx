export const About = () => {
  return (
   <section id="about" className="card about-card">
      <h2>About</h2>
      <div className="about-grid">
        <div className="about-text">
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
            <strong>Frontend (Primary):</strong> React.js | Redux Toolkit | TypeScript | Vite | Tailwind CSS | SCSS | AG-Grid | JavaScript (ES6+) | Webpack | Material UI | HTML5 | CSS3 | Next.js (basic) | Responsive UI | Micro-Frontends | Performance Optimization
          </p>

          <p>
            <strong>DevOps / Tools:</strong> GitLab CI/CD | Jenkins | Docker (basic) | Azure DevOps | Git | SonarQube
          </p>

          <p>
            <strong>Domains:</strong> AI Productivity | Telecom | Fintech | Social Apps | Enterprise SaaS
          </p>

          <p>
            <strong>Backend (Secondary / Legacy Skills):</strong> Ruby | Ruby on Rails | MySQL | PostgreSQL | REST APIs
          </p>

          <p>
            I’m open to global onsite engineering roles where innovation, design quality, and performance engineering come together to build exceptional digital experiences.
          </p>
        </div>
        
        <ul className="tags">
          <li><i className="devicon-react-original colored"></i> React 19</li>
          <li><i className="devicon-nextjs-original"></i> NextJS</li>
          <li><i className="devicon-typescript-plain colored"></i> TypeScript</li>
          <li><i className="devicon-redux-original colored"></i> Redux Toolkit</li>
          <li><i className="devicon-tailwindcss-plain colored"></i> Tailwind</li>
          <li><i className="devicon-jest-plain colored"></i> Jest</li>
          <li><i className="devicon-javascript-plain colored"></i> JavaScript</li>
          <li><i className="devicon-docker-plain colored"></i> Docker</li>
          <li><i className="devicon-gitlab-plain colored"></i> CI/CD</li>
          <li><i className="devicon-rails-plain colored"></i> Ruby on Rails</li>
          <li><i className="devicon-mysql-plain colored"></i> MySQL</li>
          <li><i className="devicon-postgresql-plain colored"></i> PostgreSQL</li>
          <li><i className="devicon-css3-plain colored"></i> CSS3</li>
          <li><i className="devicon-html5-plain colored"></i> HTML5</li>
        </ul>
      </div>
    </section>
  );
};
