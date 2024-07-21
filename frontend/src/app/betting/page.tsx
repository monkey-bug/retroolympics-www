import { Team, teams} from "./teams";
import { matches } from "./matches";
import matchCard from "./matchCard";
export default function BettingPage(){
    

    const matchesList = matches.map((element) => {
        const undefinedTeam: Team = { "id": -1, "name" : "undefined team" }
        var teamObject1 = teams.find((team) => team.id==element.teams[0]);
        var teamObject2 = teams.find((team) => team.id==element.teams[1]);
        if(teamObject1 === undefined){
            teamObject1 = undefinedTeam; 
        }
        if(teamObject2 === undefined){
            teamObject2 = undefinedTeam; 
        }

        return (

                <div>
                    {matchCard(element)}
                </div>

        )
    })

    return (
        <div className="text-2xl">
            {matchesList}
        </div>
    );
}