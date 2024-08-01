import { XMarkIcon } from "@heroicons/react/24/outline";
import Form from "../ui/login-form";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex h-screen m-h-screen flex-col items-center justify-center p-24 bg-[#354E95]/[.25]">
      <div className="relative w-[500px] h-[400px] bg-white rounded-sm grid content-center justify-center">
        <Link href="/" className="absolute md:top-[-4px] md:right-[16px] text-[#354E95] hover:text-red-500">
            <XMarkIcon className="mt-4 h-[24px] w-[24px] cursor-pointer" />
        </Link>
        <span className="absolute w-10/12 h-[0.5px] bg-[#354E95]/[.2] md:top-14 md:left-10"></span>
        <span className="absolute h-5/6 w-[0.5px] bg-[#354E95]/[.2] md:top-10 md:left-16"></span>
        <Form />
      </div>
    </main>
  );
}
