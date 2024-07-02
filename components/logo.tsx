import Image from "next/image";
import Link from "next/link";

const Logo = ({ isAuth }: { isAuth?: boolean }) => {
  return (
    <Link
      href={isAuth ? "/manage/projects" : "/"}
      className="hidden md:flex items-center gap-x-2 font-semibold"
    >
      <Image
        src="/logo-black.png"
        height="30"
        width="30"
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/logo-white.png"
        height="30"
        width="30"
        alt="Logo"
        className="hidden dark:block"
      />
      <span>eventmo</span>
    </Link>
  );
};

export default Logo;
