import { Link } from "@remix-run/react"
import food_img from '~/images/food_example.jpg';
import { useState } from "react";

export default function Deal() {
    const [ sortType, setSortType ] = useState("ASCENDING")
    const handleClick = (event) => {
        setSortType(event.target.id);
        console.log(event.target.id)
    }
    const sort = [
        {
            name: "Ascending",
        },
        {
            name: "Descending",
        },
        {
            name: "Newest",
        },
    ]
    const deals = [
        {
            name: 'Deal 1',
            description: "description",
            location: "location",
            url: "url1",
            img: food_img,
            date: new Date("1/27/2023"),
        },
        {
            name: 'Deal 2',
            description: "description",
            location: "location",
            url: "url2",
            img: food_img,
            date: new Date("1/5/2023"),
        },
        {
            name: 'Deal 3',
            description: "description",
            location: "location",
            url: "url3",
            img: food_img,
            date: new Date("11/2/2023"),
        },
        {
            name: 'Deal 4',
            description: "description",
            location: "location",
            url: "url4",
            img: food_img,
            date: new Date("10/2/2023"),
        },
        {
            name: 'Deal 5',
            description: "description",
            location: "location",
            url: "url5",
            img: food_img,
            date: new Date("12/2/2023"),
        },
        {
            name: 'Deal 6',
            description: "description",
            location: "location",
            url: "url6",
            img: food_img,
            date: new Date("3/2/2023"),
        },
        {
            name: 'Deal 7',
            description: "description",
            location: "location",
            url: "url7",
            img: food_img,
            date: new Date("2/2/2023"),
        },
        {
            name: 'Deal 8',
            description: "description",
            location: "location",
            url: "url8",
            img: food_img,
            date: new Date("5/2/2023"),
        },
    ]
    let numDeals = 0;
    const buttonItems = sort.map((e, idx) => {
        return(
            <button onClick={handleClick} id={e.name} className="active:translate-y-1 text-sm text-white shadow-xl my-2 focus:border-[#2d69f4] focus:text-white opacity-75 border-2 border-[#1e1e1e] border-slate-700 rounded-full p-3 mx-3 bg-[#1e1e1e]">{e.name}</button>
        )
    })
    const sorted = deals.sort((a, b) => (a.name > b.name) ? 1: -1)
    if (sortType === "DESCENDING"){
        const sorted = deals.sort((a, b) => (a.name < b.name) ? 1: -1)
    }
    else if(sortType === "NEWEST"){
        const sorted = deals.sort((a, b) => (a.date > b.date) ? 1: -1)
    }
    const dealItems = sorted.map((e, idx) => {
        numDeals++;
        return(
            <div key={idx} className="my-3 mx-2 w-[calc(50%-32px)] lg:w-[calc(25%-32px)] shadow-2xl hover:shadow-gray-900 hover:shadow-lg rounded-3xl">
                <div className="text-white w-full flex flex-col justify-start text-center bg-[#1e1e1e] rounded-3xl">
                    <Link className="rounded-3xl text-left hover:bg-slate-800" to={e.url}>
                        <img className='hover:brightness-75 rounded-t-3xl' src={e.img} />
                        <p className="text-left text-lg text-slate-300 mx-6">{e.name}</p>
                        <p className="text-left text-sm text-slate-300 mx-6 pb-2">{e.location} {e.description}</p>
                    </Link>
                </div>
            </div>
        )
    })
    return(
        <div className="px-8 py-20 w-full flex flex-col bg-[#121212] bg-gradient-to-b from-black/10 to-black/0 to-5%">
            <h1 className="text-center text-slate-400 text-xl p-3 mx-10 border-b border-slate-400">DEALS</h1>
            <div className="flex flex-wrap flex-col sm:flex-row justify-center mt-3">
                {
                    buttonItems
                }
            </div>
            <div className="pb-5 w-full flex flex-wrap justify-evenly">
                {
                    dealItems
                }
            </div>
            <div>
                <p className="w-full p-3">{`Number of deals: ${numDeals}`}</p>
            </div>
        </div>
    )
}