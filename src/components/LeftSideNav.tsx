import {useState, useEffect} from "react";
import ThemeToggle from "./ThemeToggle";
import diwakarImg from '../assets/Diwakar.jpeg';
import resumePdf from '../assets/Diwakar_A_Senior_Frontend_Developer.pdf';

export const LeftSidenav = () => {

  const [active, setActive] = useState<string>("about");

  // highlight current section in sidebar
  useEffect(() => {
    const ids = ["about","experience","projects","contact"];
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6] }
    );
    ids.forEach(id => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);
  
  return (
    <aside className="side">
      <img src={diwakarImg} alt="Diwakar A" className="avatar" />
      <h1 className="name">Diwakar A</h1>
      <p className="role">Senior/Lead Frontend Developer</p>
      <p className="bio">
        React.js & Redux Expert | AI & LLM Integration | Scalable UI/UX Solutions | Performance-Driven | CI/CD | Web Accessibility | 9.9 Yrs in AI, Telecom, Fintech & Analytics
      </p>
      <ThemeToggle />
      <nav className="nav">
        {[
          ["about","About"],
          ["experience","Experience"],
          ["projects","Projects"],
        ].map(([id,label]) => (
          <a key={id}
              className={`navlink ${active===id ? "active" : ""}`}
              href={`#${id}`}>{label}</a>
        ))}
      </nav>

      <div className="social">
        <a href="mailto:diwaasok@gmail.com" aria-label="Email" title="Email" target="blank">✉️</a>
        <a href="https://github.com/Diwakar-Asok" aria-label="GitHub" title="GitHub" target="blank">🐙</a>
        <a href="https://www.linkedin.com/in/diwakar-a-03079913b/" aria-label="LinkedIn" title="LinkedIn" target="blank">in</a>
      </div>
      <div className="cta">
        <a className="btn" href={resumePdf} download="Diwakar_A_Senior_Frontend_Developer.pdf">Download Resume</a>
      </div>
    </aside>
  );
}