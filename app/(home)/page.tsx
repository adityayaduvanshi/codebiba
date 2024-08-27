import AboutSection from "@/components/UI/AboutSection/about";
import ContactSection from "@/components/UI/ContactSection/contact";
import FAQ from "@/components/UI/FAQ/faq";
import Featured from "@/components/UI/Featured/featured";
import Footer from "@/components/UI/Footer/footer";
import HeroSection from "@/components/UI/HeroSection/hero-section";
import ProjectSection from "@/components/UI/ProjectSection/project";
import ServiceSection from "@/components/UI/ServiceSection/service";
import GradiantUI from "@/components/UI/GradiantUI/gradiant-ui";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <AboutSection />
      <ProjectSection />
      <ServiceSection />
      <ContactSection />

      <FAQ />
      <GradiantUI />

      <Footer />
    </main>
  );
}
