import Link from "next/link";

export default function Navbar(){
    return (
    <div className="w-full h-64">
        <nav>
            <ul className="flex justify-between text-2xl bg-purple-500">
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Home</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Teams</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Standings</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Schedules</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Games</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">Volunteers</Link>
                </li>
                <li className="mr-6">
                    <Link className="text-blue-500 hover:text-blue-800" href="/">History</Link>
                </li>
            </ul>    
        </nav>      
    </div>
    );
}