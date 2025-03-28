import {
  BookOpenIcon,
  CogIcon,
  CubeTransparentIcon,
  HomeIcon,
  RectangleStackIcon,
  Squares2X2Icon,
  TruckIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const links = [
  { name: "Home", href: "/", icon: HomeIcon },
  { name: "Books", href: "/store", icon: BookOpenIcon },
  { name: "Sell or Lend", href: "/store/sell-lend", icon: RectangleStackIcon },
  { name: "Track order", href: "/store/track-order", icon: TruckIcon },
  { name: "Community", href: "/store/community", icon: UserGroupIcon },
  { name: "Settings", href: "/store/settings", icon: CogIcon },
  { name: "About", href: "/store/about", icon: Squares2X2Icon },
  { name: "Admin", href: "/store/admin", icon: CubeTransparentIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const IconComponent = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex grow items-center justify-start gap-2 h-[48px] rounded-sm p-4 bg-purple-100 text-black"
          >
            <IconComponent className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
