'use client';

import Link from "next/link";
import Search from "../search";
import { UserIcon } from "@heroicons/react/24/outline";
import { useUser } from "../../../hooks/useUser";

export default function NavBar() {
  const { user } = useUser();
  return (
    <nav className="flex px-10 mb-8 sticky justify-between items-center">
      <Search placeholder="Buscar" className="w-3/4" />
      <div>
        <Link
          href="#"
          className="text-blue-300 flex gap-2 hover:text-blue-950 hover:border-blue-950 hover:border-b-[1px]"
        >
          <UserIcon className="w-5" />
          {user?.nombre ? user?.nombre : "Profile"}
        </Link>
      </div>
    </nav>
  );
}
