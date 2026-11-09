import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <Container className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Enoch Promise. All rights reserved.
        </p>
        <p className="text-xs uppercase tracking-[0.16em] text-zinc-600">
          3D Art · Character · Product · Motion
        </p>
      </Container>
    </footer>
  );
}
