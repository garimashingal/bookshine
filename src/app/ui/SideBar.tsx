// import { SparklesIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import NavLinks from "./NavLinks";
import Logo from "./Logo";

export default function SideBar() {
  return (
    <div className="flex flex-col">
      <Link
        href="/store"
        className="bg-purple-500 flex h-20 justify-start items-end rounded-md"
      >
        <Logo />
      </Link>

      <div className="flex md:flex-col flex-row flex-wrap gap-2 justify-center md:grow md:justify-between space-x-2 md:space-x-0 md:space-y-2">
        <NavLinks />
        <form>
          <button>Sign Out</button>
        </form>
      </div>
    </div>
  );
}
