"use client";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { PythonIcon } from "./icons/Pythonicon";
import { AzureIcon } from "./icons/Azureicon";
import Link from "next/link";
import Image from "next/image";
import heroImage from "../assets/images/hero/astronaut-chill.png";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors border border-accent my-0.5 px-2 py-1 rounded",
        className
      )}
      {...props}
    ></span>
  );
};

export const Hero = () => {
  return (
    <div className="relative overflow-hidden max-w-4xl flex flex-col items-center mx-auto ">
      {/* Grid of Dots */}

      <div
        className="absolute inset-0 bg-dots bg-center bg-repeat opacity-20 pointer-events-none"
        aria-hidden="true"
      ></div>

      {/* Main Content */}
      <Section className="relative z-10 flex max-lg:flex-col items-start gap-4 w-full p-4">
        <div className="flex-[3] flex flex-col gap-2 p-4 w-full">
          <h6 className="font-caption font-bold text-lg">Hi, I'm</h6>
          <h2 className="font-caption font-bold text-6xl">Youcef B.</h2>
          <h3 className="font-caption text-3xl text-primary">
            🚀 Data Ops Engineer
          </h3>
          <p className="text-base my-10">
            I love working with{" "}
            <Link href="https://www.python.org/">
              <Code className="inline-flex items-center gap-1">
                <PythonIcon size={16} className="inline" />
                Python
              </Code>
            </Link>
            , certified in{" "}
            <Code className="inline-flex items-center gap-1">
              <AzureIcon size={16} className="inline" />
              Azure
            </Code>
            .<br /> Living in{" "}
            <Code className="inline-flex items-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/1920px-Flag_of_France.svg.png"
                style={{ width: "16px", height: "auto" }}
                alt="france flag"
              />
              France.
            </Code>
          </p>
        </div>

        <div className="flex-[2] flex justify-center items-center w-full">
          <Image
            src={heroImage}
            className="rounded-full h-56 w-56 max-md:w-56 border border-zinc-200 border-8 dark:border-zinc-800"
            alt="youcef picture"
          />
        </div>
      </Section>
    </div>
  );
};
