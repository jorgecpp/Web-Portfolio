import { AboutMe } from "@/src/components/aboutMe/AboutMe";
import { ContactMe } from "@/src/components/contactMe/ContactMe";
import { Hero } from "@/src/components/hero/Hero";
import { MyProjects } from "@/src/components/myProjects/MyProjects";
import { ProfessionalExperience } from "@/src/components/professionalExperience/ProfessionalExperience";
import { Tools } from "@/src/components/tools/Tools";


export default function Home() {
  return (
    <main> 
      <Hero/>
      <AboutMe/>
      <ProfessionalExperience/>
      <MyProjects/>
      <Tools/>
      <ContactMe/>
    </main>
  );
}
