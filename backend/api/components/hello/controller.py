from api.consts import COMMON_API_PREFIX
from flask import Blueprint, jsonify

hello_api = Blueprint("hello_api", __name__, url_prefix=COMMON_API_PREFIX + "/hello")


@hello_api.route("/", methods=["GET"])
def get_collections():
    return jsonify({"message": "Hello World ! From the retro olympics backend !"}), 200
