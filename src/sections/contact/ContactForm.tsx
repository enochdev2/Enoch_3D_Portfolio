import { Button } from "../../components/ui";

export default function ContactForm() {
  return (
    <form className="space-y-5">
      <input
        placeholder="Name"
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-orange-500"
      />

      <input
        type="email"
        placeholder="Email"
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-orange-500"
      />

      <input
        placeholder="Subject"
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-orange-500"
      />

      <textarea
        rows={6}
        placeholder="Tell me about your project..."
        className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none focus:border-orange-500"
      />

      <Button className="w-full">
        Send Message
      </Button>
    </form>
  );
}