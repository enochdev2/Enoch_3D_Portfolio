type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({
  title,
  subtitle,
}: Props) {
  return (
    <div className="mb-16">
      <p className="mb-3 text-orange-500 uppercase tracking-[0.3em]">
        {subtitle}
      </p>

      <h2 className="font-['Space_Grotesk'] text-4xl font-bold md:text-5xl">
        {title}
      </h2>
    </div>
  );
}