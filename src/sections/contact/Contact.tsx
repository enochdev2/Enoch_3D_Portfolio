import { Container, SectionTitle } from "../../components/ui";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 sm:py-32">
      <div className="pointer-events-none absolute -left-48 bottom-0 h-96 w-96 rounded-full bg-orange-500/[0.08] blur-[120px]" />
      <Container>
        <div className="relative mb-12 max-w-3xl">
          <SectionTitle
            subtitle="Have a project in mind?"
            title="Let's Create Something"
          />
          <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
            Share what you are building, the visual problem you need to solve,
            or the kind of 3D work you have in mind. I’m available to discuss
            character, product visualization, and animation projects.
          </p>
        </div>

        <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
          <ContactInfo />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
