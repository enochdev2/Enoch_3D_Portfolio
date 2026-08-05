import { categories } from "../../data/categories";

type Props = {
  category: string;

  setCategory: (value: string) => void;
};

export default function ProjectFilter({
  category,

  setCategory,
}: Props) {
  return (
    <div className="mb-16 flex flex-wrap gap-4">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`rounded-full px-5 py-2 transition

${category === item ? "bg-orange-500" : "bg-zinc-900"}

`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
