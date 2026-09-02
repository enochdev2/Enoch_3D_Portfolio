import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import { Button } from "../../components/ui";
// src/schemas/contact.ts

import { z } from "zod";

 const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),

  email: z
    .string()
    .email("Please enter a valid email"),

  subject: z.string().min(3, "Subject is required"),

  message: z
    .string()
    .min(10, "Message is too short"),
});

export type ContactFormData = z.infer<
  typeof contactSchema
>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    try {
      console.log(data);
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,

        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,

        {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
        },

        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );

      toast.success("Message sent successfully!");

      reset();
    } catch (error) {
      console.error(error);

      toast.error("Failed to send message.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Name */}
      <div>
        <input
          {...register("name")}
          placeholder="Name"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-orange-500"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          type="email"
          {...register("email")}
          placeholder="Email"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-orange-500"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Subject */}
      <div>
        <input
          {...register("subject")}
          placeholder="Subject"
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-orange-500"
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          rows={6}
          {...register("message")}
          placeholder="Tell me about your project..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 p-4 outline-none transition focus:border-orange-500"
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button className="w-full cursor-pointer" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
