import { Link, Routes, Route } from "react-router-dom";

function NavButton({ label, to }) {
  return (
    <Link className="button" to={to}>
      {label}
    </Link>
  );
}

function AboutPage() {
  return (
    <div className="page">
      <h1>This is the about me page</h1>
      <p>I’m a computer scientist with a passion for data science, machine learning, and large language models. I enjoy tackling complex problems and using data and development to build meaningful solutions.</p>
      <h2>From bag boy to computer scientist</h2>
      <p style={{ textIndent: "40px" }}>
        I started working at an early age for friends and family, once I was old enough to work I took flexible jobs to gain work experience while going to highschool. Once out of high-school, I worked my way up to an assistant department head for a grocery store, but my advancement was stifled, I chose to move to a completely different industry which was cash logistics and was eventually promoted to a operations supervisor position within about two years. It was here that I hit a different kind of roadblock. The only way to be promoted further was to move to a different location many of which wer out of state and thousands of miles away from friends and family. I had very little desire to relocate. I decided to persue an education in computer science to advance my career. When I initially started this journey, I had no idea how much I would grow and learn. After making some friends and gaining academic experience, I realized that computer science was the field for me. The decision to persue a further degree came much later after I had nearly completed my undergraduate degree, I was finally able to take courses that aligned with my interests and the skills I wanted to develop. AI, machine learning, and Natural language processing were my focus in my graduate degree. To learn more about my educational experience, please view my curriculum vitae.
      </p>
      <div className="button-row">
        <NavButton label="See CV" to="/cv" />
      </div>
      <h2>Technical Skills</h2>
      <p>Programming Languages: Python, C#, CSS, JavaScript, C++(some experience)</p>
      <p>Web Frameworks: React, Node.js, Express, ASP.NET</p>
      <p>Data Science: Pandas, NumPy, Scikit-learn, TensorFlow</p>
      <p>AI/ML: PyTorch, Keras, HuggingFace Transformers, Tokenizers, Regex</p>
      <p>LLM: Llama2/3, GPT-2/3, BERT, Gemini(family), Qwen2.5</p>
      <p>Reporting/Visualization: Power BI, Matplotlib, Seaborn, Tableau(limited)</p>
      <p>Database: SQL, SQLite, PostgreSQL, MSS, Weaviate, Neo4j</p>
      <p>IDEs: Visual Studio, VS Code, Jupyter Notebook, Notepad++(not in sometime)</p>
      <p>Other: Git, Docker, Linux, REST APIs, Agile methodologies, JSON, XML, YAML, Matlab(little experience)</p>
      <div className="button-row">
        <NavButton label="Back to home" to="/" />
      </div>
    </div>
  );
}

function ProjectsPage() {
  return (
    <div className="page">
      <h1>Projects</h1>
      <p>Here are some of my recent projects.</p>
      <ul>
        <li>Project A — description</li>
        <li>Project B — description</li>
        <li>Project C — description</li>
      </ul>
      <div className="button-row">
        <NavButton label="Back to home" to="/" />
      </div>
    </div>
  );
}

function CVPage() {
  return (
    <div className="page">
      <h1>Curriculum Vitae</h1>
      <p>Download or view my resume and experience details.</p>
      <ul>
        <li>Experience: Example Company</li>
        <li>Education: Example University</li>
        <li>Skills: React, JavaScript, CSS</li>
      </ul>
      <div className="button-row">
        <NavButton label="Back to home" to="/" />
      </div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="page">
      <h1>Welcome to my portfolio</h1>
      <h2>Get to know me better</h2>
      <div className="button-column">
        <NavButton label="Go to About" to="/about" />
        <p className="button-note">Learn more about who I am and what I do.</p>
        <NavButton label="View Projects" to="/projects" />
        <p className="button-note">Explore some of the work I’ve built.</p>
        <NavButton label="See CV" to="/cv" />
        <p className="button-note">Download or review my academic background.</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/cv" element={<CVPage />} />
      </Routes>
    </div>
  );
}


