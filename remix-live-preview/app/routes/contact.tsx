import NavBar from "~/components/nav"
import Contact from "~/components/contact-us"

export default function ContactUs () {
    return(
        <div className="h-screen bg-[#121212] bg-gradient-to-b from-black/10 to-black/0 to-10%">
            <NavBar />
            <Contact />
        </div>
    )
}