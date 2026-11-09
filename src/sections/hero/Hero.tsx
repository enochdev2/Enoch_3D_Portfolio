import { Container } from "../../components/ui";
import HeroContent from "./HeroContent";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden border-b border-white/[0.06]"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden bg-[#090b11]">
        <div className="absolute -left-64 top-20 h-[700px] w-[700px] rounded-full bg-blue-600/[0.09] blur-[180px]" />
        <div className="absolute -right-40 top-1/3 h-[650px] w-[650px] rounded-full bg-orange-500/[0.13] blur-[170px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#090b11_100%)]" />
        <div className="hero-grid absolute inset-0 opacity-20" />
      </div>

      <Container>
        <div className="grid min-h-screen items-center gap-12 py-28 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 lg:pt-28">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}
