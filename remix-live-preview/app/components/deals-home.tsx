import { Link } from '@remix-run/react'
export default function DealsHome() {
    const deals = {
        name: 'deal1',
        url: '/deals/url1',
        description: 'description1',
        location: 'farmington',
    }
    return(
        <div className='bg-[#111111] py-20 pb-5 flex align-center flex-col justify-center bg-gradient-to-b from-black/10 to-black/0 to-10%'>
            <h1 className='p-5 text-center text-xl text-slate-400'>CURRENT FEATURED DEAL:</h1>
            <div className='border-2 border-[#111111] hover:border-[#2d69f4] m-auto p-1 w-3/4 rounded-md'>
                <div className="m-auto bg-[#232323] w-full p-3 flex flex-col justify-center text-center rounded-md">
                    <Link className="p-2 text-xl text-slate-400 bg-[#111111] rounded" to={deals.url}>{deals.name}</Link>
                    <p className="py-3 text-slate-400">{deals.description}</p>
                    <p className='text-slate-400'>{deals.location}</p>
                </div>
            </div>
        </div>
    )
}