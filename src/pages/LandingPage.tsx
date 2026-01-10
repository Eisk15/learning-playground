//import { Button } from "@/components/ui/button"
import Footer from "@/components/landing-page/Footer/Footer"
import  NavBar from "@/components/landing-page/Header/Header"
export default function LandingPage(){
    return (
        <>
        <div className="w-full min-h-screen flex flex-col">
            <NavBar/>
            <main className="flex-1" />
            <Footer/>
        </div>
        </>
    )
}