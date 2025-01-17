'use client'

import { RouteInterface } from "@/app/lib/interfaces/route.interface";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavBarButtonProps = {
  routes: RouteInterface[];
};

export default function NavBarButton({ routes }: NavBarButtonProps) {
  const pathname = usePathname();
  return (
    <>
      {routes.map((route) => (
        <Link 
            key={route.key} 
            href={route.url}
            className={`w-fit py-1.5 px-3.5 text-neutral text-sm ${route.url === pathname ? "bg-primary rounded-full" : "hover:text-accent hover:scale-105"} transition-all`}
            >
          {route.name}
        </Link>
      ))}
    </>
  );
}
