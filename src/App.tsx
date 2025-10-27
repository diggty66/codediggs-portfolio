import './index.css'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      {/* HEADER */}
      <header className="bg-slate-900 border-b border-slate-800 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold text-cyan-400">CodeDiggs</h1>
          <nav className="space-x-6 text-slate-300">
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* HERO SECTION */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-slate-900 to-slate-950">
        <h2 className="text-5xl font-extrabold text-cyan-400 mb-4">Hi, I’m John Giles</h2>
        <p className="text-lg text-slate-300 max-w-2xl">
          I blend mechanical intuition with software precision — building systems that connect the physical and digital worlds.
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
