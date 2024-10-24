'use client';

import Link from "next/link";
import NavLinks from "@/ui/dashboard/nav-links";
import { PowerIcon } from "@heroicons/react/24/outline";
import UPBLogo from "../logo";
import useCookie from "../../../hooks/useCookies";

export default function SideNav() {

  const { removeCookie } = useCookie();

  const handleSignOut = () => {
    localStorage.removeItem("data");
    removeCookie("token");
  }

  return (
    <nav className="sticky flex min-h-full flex-col min-w-[240px] bg-[#F1F2F7] text-blue-300/[.70] py-4 px-2">
      <Link
        className="mb-2 flex items-end justify-start p-4"
        href="/dashboard">
            <div className="w-32 text-white md:w-40">{/* <AcmeLogo /> */}
                <UPBLogo />
            </div>
      </Link>
      <div className="flex grow justify-between mt-5 flex-col space-x-0 space-y-2 text"> 
        <h3 className="text-blue-300/[.8] font-medium ml-4">MENU</h3>
        <NavLinks />
        <div className="h-auto w-full grow rounded-md "></div>
        <form>
          <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-blue-300/15 hover:text-blue-300 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <Link href={"/"} onClick={handleSignOut} className="hidden md:block">Sign Out</Link>
          </button>
        </form>
      </div>
    </nav>
  );
}
