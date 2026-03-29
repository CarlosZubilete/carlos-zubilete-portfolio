import profileImg from "../../assets/images/capivara-cold.png";
import SocialLinks from "./SocialLinks";
import "./Profile.css";

export default function Profile() {
  return (
    <div className="profile-container">
      <img
        src={profileImg}
        alt="Photo Carlos Zubilete"
        className="profile-image"
      />

      <h1 className="profile-name">Hi, I'm Carlos Z.</h1>

      <h3 className="profile-title">Data Developer</h3>

      <div className="profile-location">
        📍 <strong>Argentina | Bs. As.</strong>
      </div>

      <SocialLinks />
    </div>
  );
}
