import { pageRoutes } from "@/app/lib/constant/routes.constant";
import NavBarButton from "./NavBarButton";

export default function NavBar(){
    return (
        <nav className="w-full h-20 fixed z-50 shadow-[0_0_3px_0] shadow-neutral bg-secondary flex items-center px-4 gap-4">
            <NavBarButton routes={pageRoutes}/>
        </nav>
    )
}