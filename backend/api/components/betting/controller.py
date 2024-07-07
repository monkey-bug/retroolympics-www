from flask import Blueprint, jsonify, request, render_template, Response

from api.consts import COMMON_API_PREFIX
import api.model.betting

betting_api = Blueprint("betting_api", __name__, url_prefix=COMMON_API_PREFIX + "/betting",
                        template_folder="templates")


@betting_api.route("/", methods=["GET"])
def get_collections():
    return jsonify({"message": "Hello World ! From the retro olympics betting backend !"}), 200



@betting_api.route("/", methods=["POST", "PUT"])
def handle_post():
    if request.method == "POST":
        try:
            content = request.json
            userid = content["userid"]
            matchid = content["matchid"]
            teamid = content["teamid"]
            amount = content["amount"]
            print(f"userid = {userid}, matchid={matchid}, teamid{teamid}, amount={amount}")
            api.model.betting.insertBet(userid, matchid, teamid, amount)
            return Response("inserted", 200)
        except Exception as e:
            print(e)
            return Response(f"""content_type="bad request, please supply the following: \"user\", \"matchid\", \"teamid\"and \"amount\"
                            in json form with a content-type json header"""
                            , 400)
    else:
        return render_template("notallowed.html")
    
@betting_api.route("/datatest", methods=["GET", "POST", "PUT"])
def handle_test():
    pass
