from flask import Flask

from api.components.betting import betting_api
from api.components.hello import hello_api
from api.components.matches import matches_api

api: Flask | None = None


def get_api() -> Flask:
    global api
    if api is None:
        api = Flask(__name__)

        api.register_blueprint(hello_api)
        api.register_blueprint(betting_api)
        api.register_blueprint(matches_api)

    return api
