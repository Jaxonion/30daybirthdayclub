import { useLoaderData } from "@remix-run/react";
import { createClient } from "@supabase/supabase-js"

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

export default function Test() {
    const data = useLoaderData();
    return(
        <>
            <h1>{JSON.stringify(data, null, 2)}</h1>
        </>
    )
}