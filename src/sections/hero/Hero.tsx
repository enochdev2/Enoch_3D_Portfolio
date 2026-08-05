import { Container } from "../../components/ui";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-50">
        {/* Base */}
        <div className="absolute inset-0 bg-[#090b11]" />

        {/* Left Blue Glow */}
        <div className="absolute -left-64 top-20 h-[700px] w-[700px] rounded-full bg-blue-600/10 blur-[180px]" />

        {/* Orange Glow */}
        <div className="absolute right-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-orange-500/20 blur-[170px]" />

        {/* Vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_40%,#090b11_100%)]" />

        {/* Grid */}
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <Container>
        <div className="grid min-h-screen items-center gap-20 pt-24 lg:grid-cols-2">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
