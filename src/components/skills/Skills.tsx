import { useTranslation } from "react-i18next";
import { skills } from "../../data/skills";
import "./Skills.css";

export default function Skills() {
  const { t } = useTranslation();

  return (
    <div className="skills-container">
      <h2 className="skills-title">{t("skills.whoAmI")}</h2>

      <p className="skills-description">{t("skills.description1")}</p>

      <p className="skills-description">{t("skills.description2")}</p>

      <div className="skills-section">
        <h3 className="skills-section-title">{t("skills.sectionTitle")}</h3>

        <div className="skills-grid">
          <SkillGroup title={t("skills.frontend")} items={skills.frontend} />
          <SkillGroup title={t("skills.languages")} items={skills.languages} />
          <SkillGroup title={t("skills.tools")} items={skills.tools} />
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
