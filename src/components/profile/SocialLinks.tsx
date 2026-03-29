import { useState } from "react";
import { socialLinks } from "../../data/socialLinks";
import "./SocialLinks.css";

export default function SocialLinks() {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="profile-socials">
      {socialLinks.map((social) => {
        const IconComponent = social.icon;
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            onMouseEnter={() => setHoveredIcon(social.id)}
            onMouseLeave={() => setHoveredIcon(null)}
            className={hoveredIcon === social.id ? "active-icon" : ""}
          >
            <IconComponent />
          </a>
        );
      })}
    </div>
  );
}
