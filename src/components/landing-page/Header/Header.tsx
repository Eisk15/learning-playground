import { ModeToggle } from "./ThemeModeToggle";
import logo from "../../../assets/code.png";
import { NavBar } from "./NavBar";
export default function Header () {
    return (
        <header className="bg-background">
            <div className="flex justify-between items-center px-4 py-2 font-sans">

                {/* logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                    <div className="text-xl font-bold">I'm trying to learn man!</div>
                </div>

                {/* navigation-menu */}
                <NavBar/>

                {/* theme-toggle */}
                <ModeToggle/>
            </div>


        </header>






    )
}