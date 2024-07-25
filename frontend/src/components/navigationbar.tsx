import Link from "next/link";

export default function Navbar() {
  return (
    <div className="w-full bg-gray-900">
      <nav>
        <ul className="text-2xl flex h-16 items-center justify-between text-blue-500">
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded  bg-gray-600" href="/">
              Teams
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              Standings
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              Schedules
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              Games
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/betting">
              Betting
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              Volunteers
            </Link>
          </li>
          <li>
            <Link className="hover:bg-gray-700 px-2 py-1 rounded bg-gray-600" href="/">
              History
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
