import Link from "next/link";
import { Sparkles } from "lucide-react";

const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/" : "/"}
      className="hidden md:flex items-center gap-x-2 font-semibold"
    >
      <Sparkles className="text-primary" />
      <span>eventmo</span>
    </Link>
  );
};

export default Logo;
