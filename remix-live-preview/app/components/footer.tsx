export default function Footer() {
    return(
        <div className="bg-[#111111] mx-10 pt-5 flex flex-row justify-evenly border-t border-slate-400">
            <div className="w-1/3">

            </div>
            <div className="w-1/3 mb-10 flex flex-col">
                <h1 className="text-slate-400 m-auto text-xl mb-3">NEED HELP?</h1>
                <h2 className="text-slate-400 m-auto text-lg mb-1">EMAIL US:</h2>
                <a className="text-slate-400 m-auto" href="mailto:support@30daybirthdayclub" target="_blank">support@30daybirthdayclub.com</a>
            </div>
            <div className="w-1/3">

            </div>
        </div>
    )
}