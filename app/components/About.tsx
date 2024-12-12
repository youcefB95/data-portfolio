"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { Section } from "./Section";

export const About = () => {
  const words = `Data collection, data transformation et more ...`;
  return (
    <Section>
      <TextGenerateEffect
        words={words}
        className="font-caption font-bold text-5xl text-primary p-2"
      />
    </Section>
  );
};
