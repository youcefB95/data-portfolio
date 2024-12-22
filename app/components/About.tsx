"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Section } from "./Section";

export const About = () => {
  const words = `In the world of data engineering, the journey from data retrieval to insightful visualization is an adventure filled with challenges and rewards. 
  I like it !! `;
  return (
    <Section>
      <TextGenerateEffect
        words={words}
        className="font-caption text-lg text-primary-foreground gap-2 "
      />
    </Section>
  );
};
