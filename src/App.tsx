function App() {
  return (
    <>
      <header>
        <h1>John Giles / CodeDiggs</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        <p>Short professional bio here…</p>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>UnBalanced – AI-driven CYOA MMORPG</li>
          <li>Context-Tree NN Layer – reasoning engine</li>
        </ul>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p><a href="mailto:codediggs@gmail.com">codediggs@gmail.com</a></p>
      </section>
    </>
  );
}

export default App;
