
import FAQ from "@/components/UI/FAQ/faq";
import Featured from "@/components/UI/Featured/featured";
import HeroSection from "@/components/UI/HeroSection/hero-section";
import ProjectSection from "@/components/UI/ProjectSection/project";
import ServiceSection from '@/components/UI/ServiceSection/service';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured/>
      <ProjectSection/>
      <ServiceSection />
      <FAQ/>
    </main>
  );
}