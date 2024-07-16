import Link from "next/link";

export default function Navbar(){
    return (
    <div className="w-full bg-gray-900">
        <nav>
            <ul className="flex h-16 justify-between items-center text-2x">
                <li className="mx-6">
                    <Link className="text-blue-500 hover:text-blue-1000" href="/">Home</Link>
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