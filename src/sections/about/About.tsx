import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Timeline from "./Timeline";
import { Container } from "../../components/ui";
import Reveal from "../../components/common/Reveal";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <AboutImage />
          </Reveal>

          <Reveal delay={0.08}>
            <AboutContent />
          </Reveal>
        </div>

        <Reveal className="mt-8">
          <Timeline />
        </Reveal>
      </Container>
    </section>
  );
}
