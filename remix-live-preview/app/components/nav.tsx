import { Link } from "@remix-run/react"
export default function NavBar () {
    const navigationLinks = [
        {
            url: '',
            name: 'HOME',
        },
        {
            url: 'deals',
            name: 'DEALS',
        },
        {
            url: 'contact',
            name: 'CONTACT',
        },
        {
            url: 'login',
            name: 'LOGIN',
        }
    ]
    const color = [
        '#3730a3', //indigo
        '#6b21a8', //purple
        '#9d174d', //pink
        '#9d174d' //pink
    ]
    return(
        <nav className="z-10 fixed w-screen flex flex-row justify-evenly bg-[#1e1e1e] p-2 h-20">
            <Link to='/' className="m-auto font-bold text-2xl p-2 border-l-2 border-r-2 bg-gradient-to-r border-gray-600 from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">30 DAY BIRTHDAY CLUB</Link>
            <div className="flex flex-row justify-evenly items-center p-1 m-auto h-5/6 rounded-full ">
                {
                    navigationLinks.map((e, idx) => {
                        return(
                            <Link key={idx} className='text-slate-400 hover:text-white duration-500 active:opacity-60 bg-[#1e1e1e] w-auto p-3 mx-1 rounded-full' to={`/${e.url}`}>{e.name}</Link>
                        )
                    })
                }
            </div>
        </nav>
    )
}