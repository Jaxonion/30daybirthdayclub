import Purchase from "./purchase";

export default function Home() {

    return (
        <div className="text-center p-10">
            <h1 className="text-2xl py-5 border-t border-slate-400 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-700 bg-clip-text text-transparent">BIRTHDAY CLUB MEMBERSHIP</h1>
            <p className="text-slate-400 pb-5">Purchase one for a friend, or buy one for yourself. Over $500 in birthday gifts for only $19.95</p>
            <Purchase />
            <h1 className="text-slate-400 text-xl border-t border-slate-400 mt-10 py-5">WHAT TO EXPECT</h1>
            <p className="text-slate-400">We’ll send an email to the birthday recipient on the first of their birth month. The email will contain a link to the all of the available deals which can be activated for free gifts.
Is it already the recipient’s birth month? Don’t worry, we’ll send the email out today so they can make the most of their birthday gifts.</p>
        </div>
    )
}