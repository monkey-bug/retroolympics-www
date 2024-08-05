from flask import Blueprint, Response, jsonify, request

from api.consts import COMMON_API_PREFIX
from api.model.matches import getAllMatches, getMatch, getMatchesByTeam, insertMatch

matches_api = Blueprint(
    "matches_api", __name__, url_prefix= COMMON_API_PREFIX + "/matches"
)

@matches_api.route("/", methods=["GET"])
def api_get_all():
    try:
        responseObject = getAllMatches()
        return responseObject
    except Exception as e:
        print(e)
        return Response("smth went wrong", 500)
    
@matches_api.route("/" , methods=["POST", "PUT"])
def api_insertMatch():
    if request.method == "POST":
        try:
            jsoncontent = request.json
            teamid1 = jsoncontent["teamid1"]
            teamid2 = jsoncontent["teamid2"]
        except Exception as e:
            print(e)
            return Response("Bad reequest", 400)
        
        try:
            insertMatch(teamid1, teamid2)
            return Response("done", 200)
        except Exception as e:
            print(e)
            return Response("something went wrong xxx", 500)

@matches_api.route("/match/<matchid>")
def api_getByMatchId(matchid):
    try:
        responseObject = getMatch(matchid)
        return responseObject
    except Exception as e:
        print(e)
        return Response("smth went wrong", 500)
    
@matches_api.route("/team/<teamid>")
def api_getByTeamId(teamid):
    try:
        responseObject = getMatchesByTeam(teamid)
        return responseObject
    except Exception as e:
        print(e)
        return Response("smth went wrong", 500)
    
    
