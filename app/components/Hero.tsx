"use client";
import { ComponentPropsWithoutRef } from "react";
import { Section } from "./Section";
import { cn } from "@/lib/utils";
import { PythonIcon } from "./icons/Pythonicon";
import { AzureIcon } from "./icons/Azureicon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/Spotlight";
import { PinContainer } from "@/components/ui/3d-pin";

const Code = ({ className, ...props }: ComponentPropsWithoutRef<"span">) => {
  return (
    <span
      className={cn(
        "bg-accent/30 font-mono hover:bg-accent/50 transition-colors border border-accent my-0.5 px-2 py-1  rounded",
        className
      )}
      {...props}
    ></span>
  );
};

export const Hero = () => {
  return (
    <Section className="flex max-lg:flex-col items-start gap-4 w-full">
      {/* <Spotlight /> */}
      <div className="flex-[3] flex flex-col gap-2 p-4 w-full">
        {/* <h2 className="font-caption font-bold text-5xl text-primary">
          Hi, I'm Youcef B :)
        </h2> */}
        <h2 className="font-caption font-bold text-5xl">Hi, I'm Youcef B :)</h2>

        <h3 className="font-caption text-3xl text-primary">
          Fullstack Data Engineer
        </h3>
        <p className="text-base">
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
          .<br /> Currently living in{" "}
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

      <div className="flex-[2] flex justify-center items-center w-full my-3">
        <img
          src="https://i.pinimg.com/736x/8e/a4/cf/8ea4cf4088d45df1909257059ff51e34.jpg"
          className="rounded-full h-56 w-56 max-md:w-56 "
          alt="youcef picture"
        />
      </div>
    </Section>
  );
};
