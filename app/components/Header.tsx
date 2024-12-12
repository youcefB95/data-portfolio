"use client";

import { buttonVariants } from "@/components/ui/button";
import { GithubIcon } from "./icons/Githubicon";
import { TwitterIcon } from "./icons/Twittericon";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { Section } from "./Section";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { MediumIcon } from "./icons/Mediumicon";
import { useState, useEffect } from "react";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  // Détecter le scroll et ajuster la classe du header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true); // Applique une classe si on a défilé
      } else {
        setIsScrolled(false);
      }
    };

    // Ajouter un écouteur d'événements pour le scroll
    window.addEventListener("scroll", handleScroll);

    // Nettoyage du listener quand le composant est démonté
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 py-4 transition-all duration-300 ${
        isScrolled
          ? "bg-black bg-opacity-40 backdrop-blur-sm" // Quand on a défilé
          : "bg-transparent" // Par défaut, le header est transparent
      }`}
    >
      {/* Contenu de votre header */}
      <Section className="flex items-baseline">
        <h1 className="text-lg font-bold">YB95</h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/youcef-belhadri/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-1 rounded",
              isScrolled ? "hidden" : "" // Masquer l'icône quand défilé
            )}
          >
            <LinkedinIcon size={12} className="text-foreground " />
          </Link>
          <Link
            href="https://github.com/youcefB95"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-1 rounded",
              isScrolled ? "hidden" : "" // Masquer l'icône quand défilé
            )}
          >
            <GithubIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://medium.com/@youcef.belhadri95"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-1 rounded",
              isScrolled ? "hidden" : "" // Masquer l'icône quand défilé
            )}
          >
            <MediumIcon size={12} className="text-foreground" />
          </Link>
          <Link
            href="https://x.com/BelhYouc"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-1 rounded",
              isScrolled ? "hidden" : "" // Masquer l'icône quand défilé
            )}
          >
            <TwitterIcon size={12} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
