import { cookies } from "next/headers";
import Link from "next/link";

export default function Navbar() {
    const userName = cookies().get("user");

    function userElement() {
        if (userName != undefined) {
            const userString = userName.value;
            return <li>{userString}</li>;
        } else {
            return <li>UNKNOWN</li>;
        }
    }
    return (
        <div className="w-full bg-gray-900">
            <nav>
                <ul className="flex h-16 items-center justify-between text-2xl text-blue-500">
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Teams
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Standings
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Schedules
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Games
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/betting"
                        >
                            Betting
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            Volunteers
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="rounded bg-gray-600 px-2 py-1 hover:bg-gray-700"
                            href="/"
                        >
                            History
                        </Link>
                    </li>
                    {userElement()}
                </ul>
            </nav>
        </div>
    );
}
