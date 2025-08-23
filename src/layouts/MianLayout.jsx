import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/footer/Footer"

export default function MianLayout() {
    return (
        <div className="min-h-screen bg-background">
            <NavBar />
            <Outlet />
            <Footer />
        </div>
    )
}