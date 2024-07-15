from flask import Blueprint, jsonify, request, render_template, Response

from api.consts import COMMON_API_PREFIX
import api.model.betting

betting_api = Blueprint("betting_api", __name__, url_prefix=COMMON_API_PREFIX + "/betting",
                        template_folder="templates")


@betting_api.route("/", methods=["GET"])
def get_collections():
    try:
        responseobject = api.model.betting.getAll()
        return jsonify(responseobject)
    except Exception as e:
        print(e)
        return Response("something went wrong", 500)



@betting_api.route("/", methods=["POST", "PUT"])
def handle_post():
    if request.method == "POST":
        try:
            content = request.json
            userid = content["userid"]
            matchid = content["matchid"]
            teamid = content["teamid"]
            amount = content["amount"]
        except Exception as e:
            print(e)
            return Response(f"""content_type="bad request, please supply the following: \"user\", \"matchid\", \"teamid\"and \"amount\"
                            in json form with a content-type json header"""
                            , 400)
        try:
            print(f"userid = {userid}, matchid={matchid}, teamid{teamid}, amount={amount}")
            api.model.betting.insertBet(userid, matchid, teamid, amount)
            return Response("inserted", 200)
        except Exception as e:
            print(e)
            return Response(f"""something went wrong with inserting the bet in the database"""
                            , 500)
    else:
        return Response("Only posts are allowed right now", 400)
    
@betting_api.route("/datatest", methods=["GET", "POST", "PUT"])
def handle_test():
    pass
