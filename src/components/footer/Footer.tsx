import { useTranslation } from "react-i18next";
import "./Footer.css";
import { socialLinks } from "../../data/socialLinks";
import { navItems } from "../../data/navItems";
import { Link } from "react-router-dom";

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear(); // Get the current year dynamically

  return (
    <footer className="footer">
      <div className="footer__content">
        <section className="footer__section footer__about">
          <h2 className="footer__title">{t("footer.letsTalk")}</h2>
          <p className="footer__location">📍 {t("footer.location")}</p>
          <p className="footer__email">
            <a href="mailto:carloszubiletesanchez@gmail.com">
              📩 carloszubiletesanchez@gmail.com
            </a>
          </p>
          <p className="footer__message">
            {t("footer.thanks")}
            <br /> <br />
            {t("footer.tagline")}
          </p>
        </section>
        <section className="footer__section footer__links">
          <h2 className="footer__title">{t("footer.quickLinks")}</h2>
          <ul className="footer__list">
            {navItems.map((item) => (
              <Link key={item.labelKey} to={item.href} className="footer__link">
                {t(item.labelKey)}
              </Link>
            ))}
          </ul>
        </section>
        <section className="footer__section footer__social">
          <h2 className="footer__title">{t("footer.followUs")}</h2>
          <ul className="footer__social-list">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <li key={social.id}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="footer__social-link"
                    aria-label={social.label}
                  >
                    <IconComponent className="footer__icon" /> {social.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
      <div className="footer__bottom">
        <p className="footer__copyright">
          © {currentYear} {t("footer.copyright")} — Carlos Zubilete
        </p>
      </div>
    </footer>
  );
}
