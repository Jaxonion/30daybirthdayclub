import NavBar from "~/components/nav";


export default function ErrorPage() {

        return (
            <div>
                <NavBar />
                <div className="h-screen flex align-center jusify-center bg-[#111111] h-36">
                    <h1 className="mx-auto text-xl text-center text-slate-400 pt-9">Error</h1>
                </div>
            </div>
        )
}