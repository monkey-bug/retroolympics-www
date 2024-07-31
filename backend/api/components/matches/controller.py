from flask import Blueprint, Response, jsonify, request

from api.consts import COMMON_API_PREFIX
from api.model.matches import getAllMatches, getMatch, getMatchesByTeam

matches_api = Blueprint(
    "matches_api", __name__, url_prefix= COMMON_API_PREFIX + "/matches"
)

@matches_api.route("/", methods=["GET"])
def get_all():
    try:
        responseObject = getAllMatches()
    except Exception as e:
        print(e)
        return Response("smth went wrong", 500)
    
