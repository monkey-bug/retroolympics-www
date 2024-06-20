from api.components.hello import hello_api
from flask import Flask

api: Flask | None = None


def get_api() -> Flask:
    global api
    if api is None:
        api = Flask(__name__)

        api.register_blueprint(hello_api)

    return api

