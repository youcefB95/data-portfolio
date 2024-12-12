import { Card } from "@/components/ui/card";
import { Section } from "./Section";
import { SkillIcon } from "./icons/Skillicon";
import { PythonIcon } from "./icons/Pythonicon";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";

// Ici on passe à la partie des projets et expériences dans le portfolio

export const Status = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 w-full">
      {/* // Div 1 */}
      <Card className="flex-[3] p-4 w-full">
        {" "}
        <p className="text-xl text-muted-foreground font-semibold p-3 mx-auto">
          Essential Tools I use
        </p>
        <div className="flex flex-col flex-wrap">
          {SKILLS.map((skill, index) => (
            <Skill
              key={index}
              Logo={skill.Logo} // Passer le composant
              title={skill.title}
              description={skill.description}
              LogoImgSrc={skill.LogoImgSrc}
              url={skill.url}
              // Prop pour l'url
            />
          ))}
        </div>
      </Card>

      {/* Div 2 qui va contenir 2 divs l'une au dessus de l'autre */}
      <div className="flex-[2] flex flex-col gap-4   w-full">
        <Card className="p-4 flex-1 ">
          <p className="text-xl text-muted-foreground font-semibold p-3 mx-auto">
            Work
          </p>
          <div className="flex flex-col flex-wrap">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                {...work}

                // Prop pour l'url
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-xl text-muted-foreground font-semibold p-3 mr-auto">
            Contact Me
          </p>

          <Link href="https://www.linkedin.com/in/youcef-belhadri/">
            <ContactCard
              name="in/youcef-belhadri"
              image="https://dam.malt.com/46936f3d-5a4e-4a71-8eec-f7f91e7a5e83?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp"
              mediumImage="https://get-picto.com/wp-content/uploads/2023/02/Linkedin-logo-black.webp"
              description="+600 followers"
            />
          </Link>
          <Link href="https://twitter.com/BelhYouc">
            <ContactCard
              name="@BelhYouc"
              image="https://i.pinimg.com/736x/a2/64/7d/a2647dca4115499aa43dfc79ddfa10aa.jpg"
              mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
              description=""
            />
          </Link>
        </Card>
      </div>
    </Section>
  );
};

type SkillProps = {
  Logo: React.ElementType; // Prendre un composant, pas un élément JSX
  LogoImgSrc?: string;
  title: string;
  description: string;
  url: string;
};

const Skill = (props: SkillProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex  items-center gap-4 hover:bg-accent/50 transition-colors p-1 rounded-xl"
    >
      <span className="bg-accent text-accent-foreground p-3 rounded-xl">
        {/* Utiliser la prop Logo comme un composant */}
        <props.Logo
          size={40}
          src={props.LogoImgSrc}
          className="rounded-full border border-accent "
        />
      </span>
      <div className="p-0.5">
        <p className="text-md font-semibold">{props.title}</p>
        <p className="text-sm text-muted-foreground">{props.description}</p>
        {/* Utiliser 'url' comme un lien */}
      </div>
    </Link>
  );
};

const SKILLS: SkillProps[] = [
  {
    url: "https://www.python.org/",
    title: "Databricks",
    description: "Data transformation, data cleaning & Delta Lake",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://cdn.freelogovectors.net/wp-content/uploads/2023/04/databrickslogo-freelogovectors.net_.png",
  },
  {
    url: "https://www.python.org/",
    title: "Airflow",
    description: "Orchestration tool, very powerful",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://static-00.iconduck.com/assets.00/airflow-icon-2048x2048-ptyvisqh.png",
  },
  {
    url: "https://www.python.org/",
    title: "BigQuery",
    description: "Data transformation, data cleaning & Delta Lake",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://cdn.worldvectorlogo.com/logos/google-bigquery-logo-1.svg",
  },
  {
    url: "https://www.python.org/",
    title: "NextJS",
    description: "Moden Web Development",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/nextjs-icon.png",
  },

  {
    url: "https://www.python.org/",
    title: "Python",
    description: "Data cleaning, manipulation",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
  },
  {
    url: "https://www.python.org/",
    title: "Docker",
    description: "Contenerization",
    Logo: SkillIcon,
    LogoImgSrc: "https://img.icons8.com/fluent/512/docker.png",
  },
  {
    url: "https://www.python.org/",
    title: "PostgreSQL",
    description: "Data Warehouse",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/800px-Postgresql_elephant.svg.png",
  },
  {
    url: "https://www.python.org/",
    title: "Vite JS",
    description: "Acceleration",
    Logo: SkillIcon,
    LogoImgSrc:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Vitejs-logo.svg/779px-Vitejs-logo.svg.png",
  },
];

type WorkProps = {
  image: string; // Prendre un composant, pas un élément JSX
  title: string;
  role: string;
  date: string;
  url: string;
  fulltime?: boolean;
  trainee?: boolean;
};

const Work = (props: WorkProps) => {
  return (
    <Link
      href={props.url}
      className="inline-flex  items-center gap-4 hover:bg-accent/50 transition-colors p-1.5 rounded-lg"
    >
      <img
        src={props.image}
        alt={props.title}
        className="w-12 h-12 object-contain rounded-sm"
      />

      <div className="p-0.5 mr-auto">
        <div className="flex items-center gap-3">
          <p className="text-md font-semibold ">{props.title}</p>
          {/* {props.fulltime && (
            <Badge variant="default" className="rounded">
              permanent
            </Badge>
          )} */}

          {props.trainee && (
            <Badge variant="default" className="rounded">
              trainee
            </Badge>
          )}
        </div>
        <p className="text-xs text-muted-foreground">{props.role}</p>
        {/* Utiliser 'url' comme un lien */}
      </div>

      <p className="text-xs text-muted-foreground text-end ">{props.date}</p>
    </Link>
  );
};

const WORKS: WorkProps[] = [
  {
    url: "https://www.python.org/",
    title: "Uber Eats",
    role: "Freelance",
    date: "2024",
    image:
      "https://www.lephillys.fr/wp-content/uploads/2020/11/uber-eats-logo.png",
  },
  {
    url: "https://www.python.org/",
    title: "Lincoln",
    role: "Data Engineer",
    date: "2023",
    fulltime: true,
    image:
      "https://media.licdn.com/dms/image/v2/D4D0BAQFeB3trnvEzdw/company-logo_200_200/company-logo_200_200/0/1730300454805/lincoln__logo?e=2147483647&v=beta&t=b49zx42UWk4ZuRYr-GP2FIWKiEV7erbfWpnKKTNrsek",
  },
  {
    url: "https://www.python.org/",
    title: "Completude",
    role: "Science Tutor",
    date: "2021-2022",
    image: "https://professeur.completude.com/assets/icons/icon.png",
  },
  {
    url: "https://www.python.org/",
    title: "SG",
    role: "Data & AI Engineer",
    date: "2018-2020",
    trainee: true,
    image:
      "https://i.pinimg.com/736x/07/47/8d/07478deafe9d06f4c248fd783859930e.jpg",
  },
];

// export const ContactCard = (props: {
//   image: string;
//   mediumImage: string;
//   name: string;
//   description: string;
// }) => {
//   return (
//     <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4">
//       <div>
//         <img
//           src={props.image}
//           alt={props.name}
//           className="w-10 h-10  rounded-full object-contain"
//         ></img>
//         <img
//           src={props.mediumImage}
//           alt={props.name}
//           className="w-4 h-10 absolute -bottom-1 -right-1 rounded-full object-contain"
//         ></img>
//       </div>
//       <div className="p-0.5 mr-auto">
//         <div className="flex items-center gap-2">
//           <p className="text-md font-semibold">{props.name}</p>
//         </div>
//         <p className="text-xs text-muted-foreground">{props.description}</p>
//         {/* Utiliser 'url' comme un lien */}
//       </div>
//       <ArrowUpRight
//         className="group-hover:translate-x-2 mr-2 group:hover:-translate-y-2 transition-transform"
//         size={16}
//       />
//     </Card>
//   );
// };

// export const ContactCard = (props: {
//   image: string;
//   mediumImage: string;
//   name: string;
//   description: string;
// }) => {
//   return (
//     <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-4 w-auto">
//       {/* Parent contenant les images */}
//       <div className="relative">
//         {/* Image principale */}
//         <img
//           src={props.image}
//           alt={props.name}
//           className="w-10 h-10 relative rounded-full object-contain"
//         />
//         {/* Image secondaire (mediumImage) */}
//         <img
//           src={props.mediumImage}
//           alt={`${props.name} logo`}
//           className="w-4 h-4 absolute -bottom-1 -right-1 rounded-full object-contain"
//         />
//       </div>
//       {/* Détails texte */}
//       <div className="p-0.5 mr-auto">
//         <div className="flex items-center gap-2">
//           <p className="text-md font-semibold">{props.name}</p>
//         </div>
//         <p className="text-xs text-muted-foreground">{props.description}</p>
//       </div>
//       {/* Icone avec effet */}
//       <ArrowUpRight
//         className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform"
//         size={16}
//       />
//     </Card>
//   );
// };

export const ContactCard = (props: {
  image: string;
  mediumImage: string;
  name: string;
  description: string;
}) => {
  return (
    <Card className="p-3 bg-accent/10 hover:bg-accent/30 transition-colors group flex items-center gap-2">
      {/* Conteneur des images */}
      <div className="flex items-center justify-center">
        {/* Conteneur pour superposer les images */}
        <div className="flex items-end justify-end bg-transparent">
          {/* Image principale */}
          <img
            src={props.image}
            alt={props.name}
            className="w-10 h-10 rounded-full object-contain"
          />
          {/* Image secondaire (mediumImage) */}
          <div className="w-4 h-4 -ml-2 -mt-2">
            <img
              src={props.mediumImage}
              alt={`${props.name} logo`}
              className="w-full h-full rounded-full object-contain"
            />
          </div>
        </div>
      </div>
      {/* Texte descriptif */}
      <div className="p-0.5 mr-auto">
        <div className="flex items-center gap-2">
          <p className="text-md font-semibold">{props.name}</p>
        </div>
        <p className="text-xs text-muted-foreground">{props.description}</p>
      </div>
      {/* Icone avec effet */}
      <ArrowUpRight
        className="group-hover:translate-x-2 mr-2 group-hover:-translate-y-2 transition-transform"
        size={16}
      />
    </Card>
  );
};
