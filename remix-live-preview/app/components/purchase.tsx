import { useState } from "react";
export default function Purchase() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const purchase = async (e) => {
        e.preventDefault();
        console.log("first name: ", firstName, "last name: ", lastName);
    }

    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
    ]
    const inputs = [
        {
            placeholder: "First Name",
            type: "text",
        },
        {
            placeholder: "Last Name",
            type: "text",
        },
        {
            placeholder: "Email",
            type: "text",
        }
    ]
    return(
        <div className="bg-[#121212]">
            <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1 rounded-md">
                <form onSubmit={(e) => {purchase}} method='post' className=" bg-[#232323] flex flex-row justify-center content-center flex-wrap text-center py-5 rounded-md">
                    <div className="w-1/2 flex flex-col justify-center content-center flex-wrap text-center">
                        <h1 className="pb-4 text-slate-400">TO</h1>
                        {
                            inputs.map((e, idx) => {
                                return(
                                    <input className="focus:outline-none focus:ring focus:border-blue-200 flex my-2 py-2 w-3/4 text-center border rounded" placeholder={e.placeholder} />
                                )
                            })
                        }
                        <select className="focus:outline-none focus:ring focus:border-blue-200 border my-2 py-2 w-3/4 rounded">
                            <option className="text-center" disabled selected> -- Birth Month -- </option>
                            {
                                months.map((month, idx) => {
                                    return(
                                        <option className="text-center" key={idx} value={month}>{month}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                    <div className="border-l border-slate-400 w-1/2 flex flex-col justify-start content-center flex-wrap text-center">
                        <h1 className="pb-4 text-slate-400">FROM</h1>
                        <input className="focus:outline-none focus:ring focus:border-blue-200 w-3/4 text-center my-2 py-2 border rounded" placeholder="Full Name" />
                        <textarea className="focus:outline-none focus:ring focus:border-blue-200 w-3/4 my-2 py-2 border resize-none text-center rounded" placeholder="Custom Message" />
                        <button className="my-1 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white hover:text-black hover:shadow-sm hover:shadow-black active:translate-y-1" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}