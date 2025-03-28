import Image from "next/image";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        className="blur-xs"
        src="/home/home.jpg"
        alt="Background Image"
        fill
        style={{ objectFit: "cover" }}
      ></Image>
      <div className="z-10 flex flex-col justify-center p-2 items-center bg-purple-100 rounded-md lg:w-2/5 h-1/4">
        <div className="flex items-center pb-4 mb-4 text-3xl text-purple-800">
          <SparklesIcon className="h-8 w-8 text-yellow-500" />
          <p className="mx-1">BookShine</p>
        </div>
        <div>
          <Link
            className="text-white bg-purple-600 rounded-sm p-2"
            href="/store"
          >
            Take me to the Store
          </Link>
        </div>
      </div>
    </div>
  );
}
