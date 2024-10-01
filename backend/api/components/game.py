from flask import Blueprint, Response, jsonify

from api.consts import COMMON_API_PREFIX
from api.model.game import get_all_games, get_game


game_api = Blueprint(
    "game_api", __name__, url_prefix=COMMON_API_PREFIX + "/game"
)


@game_api.route("/all", methods=["GET"])
def api_get_all_games():
    try:
        return jsonify([vars(x) for x in get_all_games()])
    except Exception as e:
        print(e)
        return Response(str(e), 500)


@game_api.route("/<id>", methods=["GET"])
def api_get_game(id):
    try:
        return jsonify(vars(get_game(int(id))))
    except Exception as e:
        print(e)
        return Response(str(e), 500)
