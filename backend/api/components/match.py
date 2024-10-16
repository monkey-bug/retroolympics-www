from flask import Blueprint, Response, jsonify

from api.consts import COMMON_API_PREFIX
from api.model.match import get_all_matches, get_match

match_api = Blueprint(
    "match_api", __name__, url_prefix=COMMON_API_PREFIX + "/match"
)


@match_api.route("/all", methods=["GET"])
def api_get_all_teams():
    try:
        return jsonify([vars(x) for x in get_all_matches()])
    except Exception as e:
        print(e)
        return Response(str(e), 500)


@match_api.route("/<id>", methods=["GET"])
def api_get_team(id):
    try:
        return jsonify(vars(get_match(int(id))))
    except Exception as e:
        print(e)
        return Response(str(e), 500)
