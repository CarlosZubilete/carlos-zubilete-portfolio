import { skills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  return (
    <div className="skills-container">
      <h2 className="skills-title">Who am I</h2>

      <p className="skills-description">
        Estudiante de Programación en la Universidad Tecnológica de la Nación
        (UTN), actualmente en mi último año.
      </p>

      <p className="skills-description">
        Estoy emocionado por encontrar mi primera experiencia laboral en
        software.
      </p>

      <div className="skills-section">
        <h3 className="skills-section-title">Skills</h3>

        <div className="skills-grid">
          <SkillGroup title="Frontend" items={skills.frontend} />
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="Tools" items={skills.tools} />
        </div>
      </div>
    </div>
  );
}

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p
        className="skills-section-title"
        style={{ fontSize: "1rem", marginBottom: "0.5rem" }}
      >
        {title}
      </p>

      <div className="skills-list">
        {items.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
