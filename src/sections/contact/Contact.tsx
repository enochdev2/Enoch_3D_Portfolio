
import { Container, SectionTitle } from "../../components/ui";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32"
    >
      <Container>
        <SectionTitle
          subtitle="Contact"
          title="Let's Work Together"
        />

        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-8 max-w-lg text-zinc-400">
              Whether you need a stylized character,
              animation, or a custom 3D asset, I'd love
              to hear about your project.
            </p>

            <ContactInfo />
          </div>

          <ContactForm />
        </div>
      </Container>
    </section>
  );
}