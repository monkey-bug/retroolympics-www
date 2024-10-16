from flask import Flask

from api.components.betting import betting_api
from api.components.hello import hello_api
# from api.components.matches import matches_api
from api.components.user import user_api
from api.components.team import team_api
from api.components.game import game_api
from api.components.match import match_api
from api.model.database import bettingconn as dbconn
import psycopg2

api: Flask | None = None


def get_api(seed=False) -> Flask:
    global api
    if api is None:
        api = Flask(__name__)

        api.register_blueprint(hello_api)
        api.register_blueprint(betting_api)
        # api.register_blueprint(matches_api)
        api.register_blueprint(user_api)
        api.register_blueprint(team_api)
        api.register_blueprint(game_api)
        api.register_blueprint(match_api)

        if seed:
            with dbconn.cursor() as cursor:
                try:
                    cursor.execute(open("api/seed.sql", "r").read())
                except psycopg2.Error as error:
                    print(error)

    return api
