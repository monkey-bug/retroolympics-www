import { Team, teams } from "./teams";
interface Match {
    id: number;
    teams: [Team, Team];
}
const matches: Match[] = [
    { id: 0, teams: [teams[0], teams[1]] },
    { id: 1, teams: [teams[0], teams[2]] },
    { id: 2, teams: [teams[1], teams[2]] },
];

export { matches };
export type { Match };
