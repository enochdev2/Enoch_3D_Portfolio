type Props = {
  level: number;
};

export default function SkillProgress({ level }: Props) {
  return (
    <div>
      <div className="mb-3 h-3 overflow-hidden rounded-full bg-zinc-800">
        <div
          style={{
            width: `${level}%`,
          }}
          className="h-full rounded-full bg-orange-500"
        />
      </div>

      <p>{level}%</p>
    </div>
  );
}
