import NavBar from "./nav";
import Home from "./home";
import DealsHome from "./deals-home";
import Footer from "./footer";

export default function Layout () {
    return (
        <div className="bg-[#121212]">
            <NavBar />
            <DealsHome />
            <Home />
            <Footer />
        </div>
    )
}