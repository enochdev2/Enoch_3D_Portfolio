import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <Container className="flex flex-col items-center justify-between gap-4 md:flex-row">
        <p className="text-zinc-500">
          © 2026 Enoch Promise.
        </p>

        <p className="text-zinc-500">
          Built with React & Tailwind CSS
        </p>
      </Container>
    </footer>
  );
}