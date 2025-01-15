import IdeaIcon from "../assets/IdeaIcon";
import MailIcon from "../assets/MailIcon";
import ProfileIcon from "../assets/ProfileIcon";
import { Routes } from "../types/route";

export const ROUTE_LIST: Routes = [
  { text: "about", path: "/about", icon: ProfileIcon },
  { text: "works", path: "/works", icon: IdeaIcon },
  {
    text: "form",
    path: "https://docs.google.com/forms/d/e/1FAIpQLSd8H3BFMBC8cLKJKE2K1szrEUZqAnmQ8PdYCT911OA0JLRbVQ/viewform",
    icon: MailIcon,
  },
];
