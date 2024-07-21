import Link from "next/link";

export default function Navbar(){
    return (
    <div className="w-full bg-gray-900">
        <nav>
            <ul className="flex h-16 justify-between items-center text-2x mx-20 text-blue-500">
                <li>
                    <Link className="hover:text-blue-800" href="/">Home</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">Teams</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">Standings</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">Schedules</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">Games</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">Volunteers</Link>
                </li>
                <li>
                    <Link className="hover:text-blue-800" href="/">History</Link>
                </li>
            </ul>
        </nav>      
    </div>
    );
}