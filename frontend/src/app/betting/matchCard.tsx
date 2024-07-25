"use client";
import { Team } from "./teams";
import { Match } from "./matches";
import { useState } from "react";
export default function MatchCard(data: any) {
  var match: Match = data.match;
  const startingWidth = 35;
  const [styleVar, setStyleVar] = useState({ width: startingWidth + "%" });
  const [otherStyleVar, setOtherStyleVar] = useState({ width: 100 - startingWidth + "%" });
  function addPercent() {
    var widthAux = Number(styleVar.width.match("[0-9]+")![0]) + 5;
    setStyleVar({ width: widthAux + "%" });
    setOtherStyleVar({ width: 100 - widthAux + "%" });
  }
  function removePercent() {
    var widthAux = Number(styleVar.width.match("[0-9]+")![0]) - 5;
    setStyleVar({ width: widthAux + "%" });
    setOtherStyleVar({ width: 100 - widthAux + "%" });
  }
  return (
    <div className="my-2 rounded-md border-2 border-amber-600">
      <div className="flex w-full rounded text-center">
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
      <div className="w-full">
        <div className="float-left mx-0 my-2 h-4 bg-green-500 px-0" style={styleVar}></div>
        <div className="float-right mx-0 my-2 h-4 bg-red-500 px-0" style={otherStyleVar}></div>
      </div>

      <div className="flex w-full">
        <button onClick={addPercent} className="mx-2 rounded-md border-4 border-gray-400 bg-gray-200">
          add 5%
        </button>
        <button onClick={removePercent} className="mx-2 rounded-md border-4 border-gray-400 bg-gray-200">
          remove 5%
        </button>
      </div>
    </div>
  );
}
