import { Team } from "./teams"
import { Match } from "./matches"

export default function matchCard(match: Match){

    return (
        <div className="max-w-2xl rounded lg:max-w-full flex text-center border-2 border-fuchsia-600 mt-8">
            <div className="w-2/5 bg-red-400">
                <span>{match.teams[0].name}</span>
            </div>
            <div className="w-1/5">
                <span>VERSUS</span>
            </div>
            <div className="w-2/5 bg-blue-400">
                <span>{match.teams[1].name}</span>
            </div>

        </div>
    )
}