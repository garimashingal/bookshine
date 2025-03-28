import { SparklesIcon } from "@heroicons/react/24/solid";

export default function Logo() {
  return (
    <div className="flex flex-row ml-1 text-white p-4 items-center">
      <SparklesIcon className="h-8 w-8" />
      <p className=" p-2 text-3xl ">BookShine</p>
    </div>
  );
}
