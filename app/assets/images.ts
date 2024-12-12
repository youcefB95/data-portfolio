// src/images.ts
import { StaticImageData } from "next/image";
import card1 from "../assets/images/project1/card.png";
import dashboard1 from "../assets/images/project1/dashboard_looker.png";
import etl1 from "../assets/images/project1/etl-architecture.jpg";

type ProjectImages = {
  [key: string]: {
    // Accès dynamique à n'importe quelle clé comme "project1", "project2", etc.
    dashboard: StaticImageData;
    etl: StaticImageData;
  };
};

const projectImages = {
  project1: {
    card: card1,
    dashboard: dashboard1,
    etl: etl1,
  },
  project2: {
    image1: "/images/project2/image1.jpg",
    banner: "/images/project2/banner.jpg",
  },
};

export default projectImages;
