from flask import Blueprint, Response, jsonify
from base64 import urlsafe_b64decode

from api.consts import COMMON_API_PREFIX
from api.model.user import get_user, get_user_by_username

__all__ = ["user_api"]

user_api = Blueprint(
    "user_api", __name__, url_prefix=COMMON_API_PREFIX + "/user"
)


@user_api.route("/<user>", methods=["GET"])
def api_get_user(user):
    try:
        return jsonify(vars(get_user_by_username(user)))
    except Exception as e:
        print(e)
        return Response(str(e), 500)


@user_api.route("/id/<b64id>", methods=["GET"])
def api_get_user_id(b64id):
    try:
        return jsonify(vars(get_user(urlsafe_b64decode(b64id))))
    except Exception as e:
        print(e)
        return Response(str(e), 500)
