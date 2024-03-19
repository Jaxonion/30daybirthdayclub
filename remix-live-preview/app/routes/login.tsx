import NavBar from "~/components/nav"
import { useState, useEffect } from "react";
import { Form } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js";
import Footer from "~/components/footer";

export const loader = async () => {
    const supabase = createClient(
        "https://enungwejmhdpzawiuqox.supabase.co",
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVudW5nd2VqbWhkcHphd2l1cW94Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0NTI1NjAsImV4cCI6MjAyNDAyODU2MH0.XUmpQ_ZziemyGeN08IoB0QmuakqEqCkENJPMf0YtfRA"
    )
    const {data} = await supabase.from("Users").select();
    return {
        data,
    };
};

export default function Login() {
    const data = useLoaderData();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const signUp = async (e) => {
        e.preventDefault();
        console.log("username: ", username, "password: ", password);
    }

    useEffect(() => {
        //console.log(username, password)
    })
    

    //https://blog.logrocket.com/remix-supabase-real-time-chat-app/



    return(
        <div className="bg-[#111111]">
            <NavBar />
            {/*<h1>{JSON.stringify(data, null, 2)}</h1>*/}
            <div className="flex py-32 bg-[#111111] bg-gradient-to-b from-black/10 to-black/0 to-5%">
                <Form onSubmit={(e) => [e.preventDefault(), signUp(e)]} className="mx-auto p-9 w-3/4 h-full flex flex-col justify evenly rounded shadow-md bg-[#1c1c1c]">
                    <h1 className="text-slate-400 mb-3 mx-auto text-lg">LOG IN</h1>
                    <label className='text-slate-400 mx-auto w-3/4 text-sm' htmlFor="">EMAIL</label>
                    <input onChange={(e) => setUsername(e.target.value)} className="text-slate-400 focus:outline-none focus:ring focus:border-blue-200 my-3 mx-auto text-center border-b border-black w-3/4 h-10 rounded" type="email" placeholder="Enter Username" name="uname" required />
                    <label className="text-slate-400 mx-auto w-3/4 text-sm" htmlFor="">PASSWORD</label>
                    <input onChange={(e) => setPassword(e.target.value)} className="text-slate-400 focus:outline-none focus:ring focus:border-blue-200 my-3 mx-auto text-center border-b border-black w-3/4 h-10 rounded" type="password" placeholder="Enter Password" name="psw" required />

                    <button className='my-3 mx-auto py-2 w-3/4 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded text-white hover:text-black hover:shadow-sm hover:shadow-black active:translate-y-1' type="submit">Login</button>
                </Form>
            </div>
            <Footer />
        </div>
    )
}