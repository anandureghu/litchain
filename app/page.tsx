import Image from "next/image";
import HeaderSection from "./sections/header/HeaderSection";
import AboutSection from "./sections/about/AboutSection";
import EmpoweredBySection from "./sections/empowered/EmpoweredBySection";
import QuestionsSection from "./sections/questions/QuestionsSection";

export default function Home() {
  return (
    <div className="">
      <HeaderSection />
      <AboutSection />
      <EmpoweredBySection />
      <QuestionsSection />
    </div>
  );
}
