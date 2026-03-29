import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaFileDownload } from "react-icons/fa";

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
    id: "resume",
    icon: FaFileDownload,
    url: "https://drive.google.com/file/d/18Qy-SsRVgqNoW9Iob8rPgFB5nNVkDdb2/view?usp=sharing",
    label: "Resume",
  },
];
