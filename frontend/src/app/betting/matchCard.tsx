"use client";
import { Team } from "./teams"
import { Match } from "./matches"
import { useState } from "react";
export default function MatchCard(data:any){
    var match:Match = data.match;
    const startingWidth = 35;
    const [styleVar, setStyleVar] = useState({"width" : startingWidth + "%"});
    const [otherStyleVar, setOtherStyleVar] = useState({"width" : (100-startingWidth) + "%"});
    function addPercent(){
        var widthAux = Number(styleVar.width.match("[0-9]+")![0]) + 5;
        setStyleVar({"width" : (widthAux)+"%"})
        setOtherStyleVar({"width" : (100-widthAux)+"%"})
    }
    function removePercent(){
        var widthAux = Number(styleVar.width.match("[0-9]+")![0]) - 5;
        setStyleVar({"width" : (widthAux)+"%"})
        setOtherStyleVar({"width" : (100-widthAux)+"%"})
    }
    return (
        <div className="rounded-md border-2 border-amber-600 my-2">
            <div className="rounded w-full flex text-center">
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
                <div className="h-4 my-2 mx-0 px-0 bg-green-500 float-left" style={styleVar}></div>
                <div className="h-4 my-2 mx-0 px-0 bg-red-500 float-right" style={otherStyleVar}></div>
            </div>
            
            <div className="w-full flex">  
                <button onClick={addPercent} className="mx-2 border-4 rounded-md border-gray-400 bg-gray-200">add 5%</button>
                <button onClick={removePercent} className="mx-2 border-4 rounded-md border-gray-400 bg-gray-200">remove 5%</button>
            </div>
        </div>
    )
}