import { Header } from "./components/Header";
import Image from "next/image";
import { Hero } from "./components/Hero";
import { Spacing } from "./components/Spacing";
import { Status } from "./components/Status";
import { Contact } from "./components/Contact";
import { DataTalk } from "./components/DataTalk";
import { Projects } from "./components/Projects";
import { About } from "./components/About";

export default function Home() {
  return (
    <main>
      <Header />
      <Spacing size="md" />
      <Hero />
      <Spacing size="sm" />
      <About />
      <Spacing size="sm" />
      <Status />
      <Spacing size="sm" />
      <Projects />
      {/* <Spacing size="sm" />
      <DataTalk /> */}
      <Spacing size="sm" />
      <Contact />
      <Spacing size="md" />
      <Spacing size="md" />
    </main>
  );
}
