import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { ContactCard } from "./Status";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import projectImages from "../assets/images";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { AnimatePresence } from "framer-motion";

export const Projects = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 w-full">
      {/* // Div 1 */}{" "}
      <div className="flex flex-col flex-wrap w-full">
        <div className="p-4 flex-1 ">
          {" "}
          <Badge
            variant="outline"
            className="bg-zinc-700 text-white rounded hover:bg-zinc-950 transition-colors"
          >
            Projects
          </Badge>
          <p className="text-2xl font-semibold p-3 mx-auto">
            My Portfolio Highlights
          </p>
        </div>
        <div className="flex-1 flex flex-wrap flex-row items-center justify-center max-sm:flex-col gap-4 w-full p-4 max-sm:p-10 max-md:w-full">
          {TOP_PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}

              // Prop pour l'url
            />
          ))}
        </div>
        <div className="flex-1 flex flex-wrap flex-row max-sm:flex-col gap-4 w-full p-4 max-sm:p-16">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}

              // Prop pour l'url
            />
          ))}
        </div>
      </div>
    </Section>
  );
};

// const ProjectCard = (props: {
//   image: string;
//   projectName: string;
//   description?: string;
// }) => {
//   return (
//     <Card className="p-3 flex-1 flex items-center gap-4">
//       <div className="flex-1 flex flex-col gap-2">
//         <div className="relative object-contain">
//           <img
//             src={props.image}
//             alt={props.projectName}
//             className="rounded-md"
//           ></img>
//         </div>
//         <div className="flex items-center">
//           <p className="text-md font-semibold text-primary">
//             {props.projectName}
//           </p>
//         </div>

//         <div className="flex flex-row gap-2">
//           <div className="w-5/6">
//             <p className="text-xs text-muted-foreground">{props.description}</p>
//           </div>
//           <div className="w-1/6 group transition-colors">
//             <ArrowUpRight
//               className="ml-2 group-hover:translate-x-2  group:hover:-translate-y-2 transition-transform"
//               size={16}
//             />
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

// const ProjectCard = (props: {
//   image: string;
//   projectName: string;
//   description?: string;
// }) => {
//   return (
//     <Card className="p-3 flex-1 flex items-center gap-4">
//       <div className="flex-1 flex flex-col gap-2">
//         {/* Image avec taille fixée */}
//         <div className="relative object-contain">
//           <img
//             src={props.image}
//             alt={props.projectName}
//             className="rounded-md h-100 w-full object-cover"
//           />
//         </div>
//         {/* Nom du projet */}
//         <div className="flex items-center">
//           <p className="text-md font-semibold text-primary">
//             {props.projectName}
//           </p>
//         </div>

//         {/* Description et bouton */}
//         <div className="flex flex-row gap-2">
//           {/* Description */}
//           <div className="w-4/5">
//             <p className="text-xs text-muted-foreground">{props.description}</p>
//           </div>

//           {/* Bouton avec Medium logo + Arrow */}
//           <div className="p-0.5 flex flex-row rounded-xl w-1/5 group bg-accent/10 hover:bg-accent/30 transition-colors max-md:w-auto">
//             <div className="flex items-center">
//               <ArrowRight
//                 className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-transform"
//                 size={16}
//                 strokeWidth={3} /* Augmente l'épaisseur de la flèche */
//                 color="currentColor"
//               />
//             </div>
//             <div className="flex-1"></div>

//             <div>
//               <button className="flex items-center gap-1 ml-1 mr-1 group-hover:translate-x-1 group-hover:-translate-y-0 transition-transform ">
//                 {/* Logo Medium */}
//                 <img
//                   src="https://cdn-icons-png.flaticon.com/512/5968/5968906.png"
//                   alt="Medium"
//                   className="h-4 w-4"
//                 />{" "}
//               </button>
//             </div>
//             {/* Icone Arrow */}
//           </div>
//         </div>
//       </div>
//     </Card>
//   );
// };

type ProjectProps = {
  image: StaticImageData;
  height?: string;
  projectName: string;
  description?: string;
  skills?: string[];
  githubRepo: string;
  dashboardTool?: string;
  dashboardLink?: string;
};

const TOP_PROJECTS: ProjectProps[] = [
  {
    image: projectImages.project1.card,
    projectName: "🚕 Data Analytics - GCP / Mage AI",
    description: "Perform data analytics on NYC Taxi Trip Records ...",
    skills: [
      "GCP",
      "BigQuery",
      "Python",
      "Mage AI",
      "Compute Engine",
      "Docker",
    ],
    githubRepo:
      "https://github.com/youcefB95/nyc-taxi-etl-data-project/tree/main",
    dashboardTool: "Looker",
    dashboardLink:
      "https://lookerstudio.google.com/u/0/reporting/0fd8cbe1-5d1b-4b0b-9ca2-a0b2015d629d/page/3vfYE/edit",
  },
  {
    image: projectImages.project2.card,
    projectName: "🚀 Reddit Data Pipeline - AWS / Airflow",
    description: "Perform data analytics on Reddit social network...",
    skills: ["AWS", "Airflow", "API", "Python", "Quicksight"],
    githubRepo: "",
    dashboardTool: "Quicksight",
    dashboardLink: "",
  },
];

const PROJECTS: ProjectProps[] = [
  {
    image: projectImages.project3.card,
    height: "32",
    projectName: "🏏 Crickets Stats - ETL",
    description: "Perform data analytics on NYC Taxi Trip Records ...",
    skills: ["GCP", "Python", "Mage AI", "Spark", "Docker"],
    githubRepo: "https://github.com/youcefB95/cricket-stats-etl-gcp",
    dashboardTool: "Looker",
    dashboardLink:
      "https://lookerstudio.google.com/u/0/reporting/5f6f1428-a5eb-43bb-aa9c-f9f4b07fd0fd/page/q6ZZE",
  },
  {
    image: projectImages.project4.card,
    height: "32",
    projectName: "⚙️ Snowflake - dbt - Airflow Use Case",
    description: "Perform data analytics on ...",
    skills: ["Snowflake", "dbt", "Airflow", "Python"],
    githubRepo: "",
    dashboardTool: "",
    dashboardLink:
      "https://lookerstudio.google.com/u/0/reporting/0fd8cbe1-5d1b-4b0b-9ca2-a0b2015d629d/page/3vfYE/edit",
  },
  {
    image: projectImages.project5.card,
    projectName: "FastAPI - Airflow, Amazon scrapper ",
    height: "32",
    description: "Perform ETL on Amazon data",
    skills: [
      "Python",
      "FastAPI",
      "Docker",
      "Airflow",
      "Streamlit",
      "Git",
      "PostgreSQL",
    ],
    dashboardTool: "Streamlit",
    githubRepo: "https://github.com/youcefB95/fastapi-airflow-amazon-scraper",
    dashboardLink:
      "https://github.com/youcefB95/fastapi-airflow-amazon-scraper/blob/master/images/streamlit.png",
  },
];

const ProjectCard = (props: ProjectProps) => {
  const dynamicClassName = props.height
    ? `rounded-md w-full h-${props.height}`
    : "rounded-md w-full h-52";
  return (
    <Card className="flex-1 w-full flex flex-col overflow-hidden gap-2 p-4">
      {/* Image avec taille fixée */}
      <div className=" flex  w-full object-contain overflow-hidden rounded max-md:h-full">
        <Image
          src={props.image} // Fallback en cas d'absence d'image
          alt={props.projectName}
          className={dynamicClassName}
        />
      </div>

      {/* Nom du projet */}
      <div className="flex items-center gap-2 p-1">
        <p className="text-md font-semibold  truncate">{props.projectName}</p>
      </div>

      <div className="flex-1 gap-2 p-1">
        {/* Description */}
        <p className="text-xs text-muted-foreground break-words">
          {props.description}
        </p>

        {/* Badges */}
        <div className="flex flex-wrap flex-row gap-2 my-2">
          {props.skills && props.skills.length > 0 ? (
            props.skills.map((skill, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-zinc-800 text-white rounded hover:bg-zinc-900 transition-colors"
              >
                {skill}
              </Badge>
            ))
          ) : (
            <span className="text-xs text-muted-foreground italic">
              No skills available
            </span>
          )}
        </div>
      </div>

      {/* Description et bouton */}

      <Link
        href={props.githubRepo}
        className="flex flex-row items-center justify-end w-full transition-transform hover:translate-x-2"
      >
        {/* Bouton avec Medium logo + Arrow */}

        <div className="p-0.5 flex items-center rounded-xl bg-accent/10 hover:bg-accent/30 transition-colors max-md:flex-wrap">
          <button className="flex items-center gap-1 group">
            {/* Logo Medium */}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
              alt="Github"
              className="h-4 w-4"
            />
            <span className="text-xs font-semibold truncate">Github Repo</span>
          </button>
          {/* Icone Arrow */}
          <ArrowRight
            className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-transform"
            size={16}
            strokeWidth={3}
            color="currentColor"
          />
        </div>
      </Link>

      <Link
        href={props.dashboardLink ?? ""}
        className="flex flex-row items-center justify-end w-full transition-transform hover:translate-x-2"
      >
        {/* Bouton avec Medium logo + Arrow */}
        <div className="p-0.5 flex items-center rounded-xl bg-accent/10 hover:bg-accent/30 transition-colors max-md:flex-wrap">
          <button className="flex items-center gap-1 group">
            {/* Logo Dynamique */}
            <img
              src={
                props.dashboardTool === "Looker"
                  ? "https://www.svgrepo.com/show/354012/looker-icon.svg"
                  : props.dashboardTool === "Quicksight"
                  ? "https://www.svgrepo.com/show/353457/aws-quicksight.svg"
                  : props.dashboardTool === "Streamlit"
                  ? "https://seeklogo.com/images/S/streamlit-logo-1A3B208AE4-seeklogo.com.png"
                  : "https://www.jeveuxetredatascientist.fr/wp-content/uploads/2023/09/Power-BI-Logo-2016.png" // Fallback image
              }
              alt={`${props.dashboardTool} logo`}
              className="h-4 w-5"
            />
            <span className="text-xs font-semibold truncate">
              See Dashboard
            </span>
          </button>
          {/* Icone Arrow */}
          <ArrowRight
            className="group-hover:translate-x-1 group-hover:-translate-y-0 transition-transform"
            size={16}
            strokeWidth={3}
            color="currentColor"
          />
        </div>
      </Link>
    </Card>
  );
};
