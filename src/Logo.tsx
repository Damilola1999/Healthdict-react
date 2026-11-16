import { Leaf } from "lucide-react";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`logo ${light ? "logo--light" : ""}`}>
      <Leaf className="logo__mark" size={44} />
      <span className="logo__text">
        <span className="logo__name">Healthdict</span>
        <span className="logo__by">by Hannah</span>
        <span className="logo__tag">Better Food &nbsp;•&nbsp; Healthier You</span>
      </span>
    </a>
  );
}