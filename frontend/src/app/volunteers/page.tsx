import RAUser from "@/components/rauser";

// prettier-ignore
const volunteers = {
    "Hosts": [
        "voiceofautumn",
        "Searo",
    ],
    "Stream Team": [
        "starblades",
        "TimeCrush",
        "RaphMec",
        "Wimpyfox",
        "freezestar",
        "Prota",
        "AmazingBaha",
        "theelkspeaks",
        "Homuki",
    ],
    "Referee Team": [
        "Amir96lx",
        "Kiutgh",
        "xClawz",
        "Retrokaiser",
    ],
    "Game Testers": [
        "Adenothe",
        "GalacticSpear",
        "Nickyy",
        "r0ach3d",
        "Tayadaoc",
        "Zexerous",
        "HardSonicStorm",
        "Mindez",
        "RetroGameMaster",
    ],
    "Leaderboard Devs": [
        "Bartis1989",
        "clymax",
        "s0uth",
        "kmpers",
    ],
    "Web Team": [
        "drisc",
        "MonkeyBug",
        "Daisey",
        "amine456",
        "falsepopsky",
        "Joncky",
        "Rooksie",
    ],
    "Media Team": [
        "PrinnyPrinny",
        "ChocoMilk",
        "Nydaxn",
        "TheoVellum",
    ],
    "Event Support": [
        "Zegjita",
    ],
};

function shuffle(array: string[]) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function renderTeam(team: string, members: string[]) {
    if (team != "Hosts") {
        shuffle(members);
    }

    return (
        <div>
            <h1 className="text-2xl">{team}</h1>
            <hr className="mb-2 text-white" />
            <div className="flex flex-wrap items-center justify-center gap-4">
                {members.map((member, i) => (
                    <div className="flex w-[100px] flex-col items-center justify-center gap-2" key={i}>
                        <RAUser username={member} />
                        <p>{member}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default function Volunteers() {
    return (
        <div className="flex flex-col items-center justify-center gap-8">
            {Object.entries(volunteers).map(([team, members]) =>
                renderTeam(team, members),
            )}
        </div>
    );
}
