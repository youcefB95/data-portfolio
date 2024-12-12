import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { Section } from "./Section";
import { ContactCard } from "./Status";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Contact = () => {
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
            Contact me
          </Badge>
          <p className="text-2xl font-semibold p-3 mx-auto">
            I will be happy to work with you
          </p>
        </div>
        <div className="flex-1 flex flex-wrap flex-row max-md:flex-col gap-4 w-full p-4">
          <ContactCard
            name="in/youcef-belhadri"
            image="https://dam.malt.com/46936f3d-5a4e-4a71-8eec-f7f91e7a5e83?gravity=face&func=face&face_margin=70&w=440&h=440&force_format=webp"
            mediumImage="https://get-picto.com/wp-content/uploads/2023/02/Linkedin-logo-black.webp"
            description="+600 followers"
          />

          <ContactCard
            name="@BelhYouc"
            image="https://i.pinimg.com/736x/a2/64/7d/a2647dca4115499aa43dfc79ddfa10aa.jpg"
            mediumImage="https://upload.wikimedia.org/wikipedia/commons/e/e6/Twitter-new-logo.jpg"
            description=""
          />
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
