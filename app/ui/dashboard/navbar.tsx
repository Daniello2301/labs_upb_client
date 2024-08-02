import Link from "next/link";
import Search from "../search";
import { UserIcon } from "@heroicons/react/24/outline";

export default function NavBar() {
    return(
        <nav className="flex px-10 mb-8 sticky justify-between items-center">
            <Search placeholder="Buscar" className="w-3/4" />
            <div>
                <Link 
                    href="#"
                    className="text-blue-300 flex gap-2 hover:text-blue-950 hover:border-blue-950 hover:border-b-[1px]"
                >
                    <UserIcon className="w-5" />
                    Profile
                </Link>
            </div>
        </nav>
        
    )
}