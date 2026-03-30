import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaDocker } from "react-icons/fa";

export interface SocialLink {
  id: string;
  icon: IconType;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    icon: FaLinkedin,
    url: "https://www.linkedin.com/in/carlos-zubilete-sanchez/",
    label: "LinkedIn",
  },
  {
    id: "github",
    icon: FaGithub,
    url: "https://github.com/CarlosZubilete",
    label: "GitHub",
  },
  {
    id: "docker",
    icon: FaDocker,
    url: "https://hub.docker.com/u/happykitten",
    label: "Docker",
  },
];
