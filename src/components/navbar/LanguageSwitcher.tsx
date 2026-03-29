import { useTranslation } from "react-i18next";
import "./LanguageSwitcher.css";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="language-switcher">
      <button
        onClick={() => i18n.changeLanguage("en")}
        className={`language-btn ${i18n.language === "en" ? "active" : ""}`}
      >
        EN
      </button>

      <button
        onClick={() => i18n.changeLanguage("es")}
        className={`language-btn ${i18n.language === "es" ? "active" : ""}`}
      >
        ES
      </button>
    </div>
  );
}
