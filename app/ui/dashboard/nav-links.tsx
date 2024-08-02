'use client';
 
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
  CalendarDaysIcon,
  ListBulletIcon,
  BuildingLibraryIcon,
  BookmarkIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Inicio", href: "/dashboard", icon: HomeIcon,disabled: false, },
  {
    name: "Activos",
    href: "/dashboard/activos",
    icon: DocumentDuplicateIcon,
    disabled: false,
  },
  { name: "Prestamos de Activos", href: "/dashboard/prestamos", icon: BookmarkIcon,disabled: true, },
  { name: "Aulas", href: "/dashboard/aulas", icon: BuildingLibraryIcon, disabled: true, },
  { name: "Tipos de Activos", href: "/dashboard/tipos-activos", icon: ListBulletIcon, disabled: true, },
  { name: "Reservas de Aulas", href: "/dashboard/reservas-aula", icon: CalendarDaysIcon, disabled: true, },
  { name: "Usuarios", href: "/dashboard/usuarios", icon: UserGroupIcon, disabled: true, },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={!link.disabled ? link.href : "#"}
            className={clsx(
              'flex h-[48px] flex-none items-center justify-start gap-2 rounded-md p-2 text-sm font-medium pl-8 hover:bg-blue-300/15 hover:text-blue-300 ',
              {
                'bg-blue-300/15 text-blue-300': pathname === link.href,
              },
              {
                'cursor-not-allowed': link.disabled,
                'opacity-30': link.disabled,
                'cursor-pointer': !link.disabled,
              }
            )}
            aria-disabled={link.disabled}
          >
            <LinkIcon className="w-5" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}