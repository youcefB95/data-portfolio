// src/images.ts
import { StaticImageData } from "next/image";
import card1 from "../assets/images/project1/card.png";
import dashboard1 from "../assets/images/project1/dashboard_looker.png";
import etl1 from "../assets/images/project1/etl-architecture.jpg";
import dashboard3 from "../assets/images/project1/dashboard_looker.png";
import etl3 from "../assets/images/project1/etl-architecture.jpg";
import card2 from "../assets/images/project2/card.png";
import card3 from "../assets/images/project3/card.png";
import card4 from "../assets/images/project4/card.png";
import card5 from "../assets/images/project5/card.png";

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
    card: card2,
    image1: "/images/project2/image1.jpg",
    banner: "/images/project2/banner.jpg",
  },
  project3: {
    card: card3,
    dashboard: dashboard3,
    etl: etl3,
  },
  project4: {
    card: card4,
  },
  project5: {
    card: card5,
  },
};

export default projectImages;
