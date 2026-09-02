import CTA from "@/components/CTA";
import FeaturedProjects from "@/components/FeaturedProjects";
import FocusAreas from "@/components/FocusAreas";
import Hero from "@/components/Hero";
import Technologies from "@/components/Technologies";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <FocusAreas />

      <Technologies />

      <CTA />
    </>
  );
}