import AboutImage from "./AboutImage";
import AboutContent from "./AboutContent";
import Timeline from "./Timeline";
import { Container } from "../../components/ui";

export default function About() {
  return (
    <section id="about" className="py-32">
      <Container>
        <div className="grid gap-20 lg:grid-cols-2">
          <AboutImage />

          <AboutContent />
        </div>

        <Timeline />
      </Container>
    </section>
  );
}
