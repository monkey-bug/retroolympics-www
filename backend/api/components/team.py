from flask import Blueprint, Response, jsonify

from api.consts import COMMON_API_PREFIX
from api.model.team import get_all_teams, get_team

__all__ = ["team_api"]

team_api = Blueprint(
    "team_api", __name__, url_prefix=COMMON_API_PREFIX + "/team"
)


@team_api.route("/all", methods=["GET"])
def api_get_all_teams():
    try:
        return jsonify([vars(x) for x in get_all_teams()])
    except Exception as e:
        print(e)
        return Response(str(e), 500)


@team_api.route("/<id>", methods=["GET"])
def api_get_team(id):
    try:
        return jsonify(vars(get_team(int(id))))
    except Exception as e:
        print(e)
        return Response(str(e), 500)
