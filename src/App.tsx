import { LeftSidenav } from "./components/LeftSideNav";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Contact } from "lucide-react";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="shell">
      {/* LEFT SIDEBAR */}
      <LeftSidenav />
      {/* RIGHT CONTENT */}
      <main className="main">
        <About />
        <Experience/>
        <Projects/>
        <Contact/>
        <Footer/>
      </main>
    </div>
  );
}
