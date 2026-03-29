import { useTranslation } from "react-i18next";
import profileImg from "../../assets/images/capivara-cold.png";
import SocialLinks from "./SocialLinks";
import "./Profile.css";

export default function Profile() {
  const { t } = useTranslation();

  return (
    <div className="profile-container">
      <img
        src={profileImg}
        alt="Photo Carlos Zubilete"
        className="profile-image"
      />

      <h1 className="profile-name">{t("profile.name")}</h1>

      <h3 className="profile-title">{t("profile.title")}</h3>

      <div className="profile-location">
        📍 <strong>{t("hero.location")}</strong>
      </div>

      <SocialLinks />
    </div>
  );
}
