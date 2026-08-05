type Props = {
  gallery: any[];
};

export default function ProjectGallery({ gallery }: Props) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {gallery.map((item, index) => (
        <div key={index} className="overflow-hidden rounded-3xl">
          {item.type === "image" ? (
            <img src={item.src} className="w-full" />
          ) : (
            <video controls className="w-full">
              <source src={item.src} />
            </video>
          )}
        </div>
      ))}
    </div>
  );
}
