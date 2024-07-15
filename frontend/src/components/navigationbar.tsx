

export default function Navbar(){
    return (
    <div className="w-full h-64">
        <nav>
            <ul className="flex justify-between text-2xl">
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Home</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Teams</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Standings</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Schedules</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Games</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">Volunteers</a>
                </li>
                <li className="mr-6">
                    <a className="text-blue-500 hover:text-blue-800" href="/">History</a>
                </li>
            </ul>    
        </nav>      
    </div>
    );
}