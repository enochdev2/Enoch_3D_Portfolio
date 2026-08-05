type Props = {
  title: string;

  image: string;
};

export default function ProjectHero({
  title,

  image,
}: Props) {
  return (
    <section className="relative h-[70vh]">
      <img src={image} alt={title} className="h-full w-full object-cover" />

      <div className="absolute inset-0 bg-black/60" />

      <div className="absolute bottom-16 left-16">
        <h1 className="text-6xl font-bold">{title}</h1>
      </div>
    </section>
  );
}
