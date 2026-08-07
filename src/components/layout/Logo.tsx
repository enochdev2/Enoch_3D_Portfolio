import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link
      to="/"
      className="text-2xl font-bold tracking-tight font-['Space_Grotesk']"
    >
      ENOCH
      <span className="text-orange-500">.</span>
    </Link>
  );
}