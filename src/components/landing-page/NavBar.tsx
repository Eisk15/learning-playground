import { ModeToggle } from "../layout/ModeToggle";
import logo from "../../assets/code.png";

export default function NavBar () {
    return (
        <header className="bg-background">
            <div className="flex justify-between items-center px-4 py-2 font-sans">

                {/* logo */}
                <div className="flex items-center space-x-2">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                    <div className="text-xl font-bold">I'm trying to learn man!</div>
                </div>

                {/* navigation-menu */}
                <nav className="space-x-6 text-base font-medium ">
                    <a href="#" className="text-muted-foreground hover:text-foreground ">Data Structures</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Algorithms</a>
                    <a href="#" className="text-muted-foreground hover:text-foreground">Fundamentals</a>
                </nav>

                {/* theme-toggle */}
                <ModeToggle/>
            </div>


        </header>






    )
}