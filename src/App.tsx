import './index.css'
import profilePhoto from './assets/profile_photo.jpg';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HEADER */}
      <header className="flex items-center justify-between px-8 py-4 bg-slate-900 shadow-md">
      {/* Left side – Site name */}
      <h1 className="text-2xl font-bold text-cyan-400">CodeDiggs</h1>

      {/* Right side – Nav + Photo */}
      <div className="flex items-center space-x-6">
        <nav className="flex space-x-6 text-slate-300">
          <a href="#about" className="hover:text-cyan-400 transition">About</a>
          <a href="#projects" className="hover:text-cyan-400 transition">Projects</a>
          <a href="#resume" className="hover:text-cyan-400 transition">Résumé</a>
          <a href="#contact" className="hover:text-cyan-400 transition">Contact</a>
        </nav>


        {/* Profile Image */}
        <div className="relative flex items-center justify-center">
          <img
            src={profilePhoto}
            alt="John Giles portrait"
            className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-cyan-400 shadow-md object-cover 
                      transition-transform duration-500 ease-out hover:scale-[2.5] hover:z-50 hover:shadow-cyan-400"
          />
        </div>
      </div>
    </header>


      {/* HERO SECTION */}
     <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
      <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">Hi, I’m John Giles</h2>
      <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
        I blend mechanical intuition with software precision — building systems that connect
        the physical and digital worlds.
      </p>
      <a
        href="#projects"
        className="mt-8 inline-block bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition"
      >
        View My Work
      </a>
    </section>


      {/* ABOUT */}
      <section id="about" className="max-w-4xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-cyan-400 mb-6">About Me</h3>
        <p className="text-slate-300 leading-relaxed text-lg">
          I’m a multidisciplinary engineer with experience spanning automotive diagnostics,
          full-stack web development, and AI-driven systems design. My approach combines
          real-world problem solving with structured, modular software design.
        </p>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-cyan-400 mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 transition">
            <h4 className="text-xl font-medium text-cyan-300">UnBalanced</h4>
            <p className="text-slate-400 mt-2">
              AI-driven CYOA MMORPG framework for autonomous narrative generation and decision modeling.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 hover:border-cyan-400 transition">
            <h4 className="text-xl font-medium text-cyan-300">Context-Tree NN Layer</h4>
            <p className="text-slate-400 mt-2">
              Dynamic reasoning framework for modular AI thought structure and contextual weighting.
            </p>
          </div>
        </div>
      </section>

      <section id="resume" className="max-w-5xl mx-auto px-6 py-20">
        <h3 className="text-3xl font-semibold text-cyan-400 mb-8 text-center">Résumé & Experience</h3>

        <div className="space-y-8 text-slate-300">
          <div>
            <h4 className="text-xl font-semibold text-cyan-300">Software Engineer / Full Stack Developer</h4>
            <p className="text-slate-400 text-sm">CodeDiggs • 2023 – Present</p>
            <p className="mt-2 leading-relaxed">
              Designing and deploying full-stack applications using React, Flask, and Django.  
              Experience with DevOps pipelines, GitHub Actions, and cloud deployment via Render and Linode.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-300">Automotive Diagnostics Specialist</h4>
            <p className="text-slate-400 text-sm">Auto Diagnostic Services LLC • 2011 – 2012</p>
            <p className="mt-2 leading-relaxed">
              Performed advanced diagnostics, CAN-bus communication analysis, and repair for VW/Audi systems.  
              ASE-certified technician with emphasis on electrical and engine control troubleshooting.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-cyan-300">Education</h4>
            <p className="text-slate-400 text-sm">B.S. Computer and Informatics Engineering • Magna Cum Laude</p>
          </div>
        </div>

        <div className="text-center mt-10">
          <a
            href="https://diggty66.github.io/codediggs-portfolio/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-cyan-400 text-slate-950 font-semibold px-6 py-3 rounded-lg hover:bg-cyan-300 transition"
          >
            View Résumé (PDF)
          </a>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="text-center py-20 bg-slate-900">
        <h3 className="text-3xl font-semibold text-cyan-400 mb-6">Contact</h3>
        <p className="text-lg text-slate-300">
          Reach out at{" "}
          <a href="mailto:codediggs@gmail.com" className="text-cyan-400 hover:underline">
            codediggs@gmail.com
          </a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-slate-600 border-t border-slate-800">
        © {new Date().getFullYear()} CodeDiggs – Built with React + Tailwind CSS
      </footer>
    </div>
  );
}
