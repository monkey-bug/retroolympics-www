from psycopg2 import Error as DBError
from api.model.database import bettingconn as dbconn

game_table_schema = """
    CREATE TABLE IF NOT EXISTS games (
        id BIGINT PRIMARY KEY,
        title TEXT NOT NULL,
        console TEXT NOT NULL,
        challenge TEXT NOT NULL,
        hash TEXT
    );
"""


class Game:
    def __init__(self, id, title, console, challenge, hash):
        self.id = id
        self.title = title
        self.challenge = challenge
        self.console = console
        self.hash = hash


def get_all_games():
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM games;")
        return [Game(*data) for data in curs.fetchall()]


def get_game(id):
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM games WHERE id=%s;", (id,))
        return Game(*curs.fetchall()[0])


def __init__():
    with dbconn.cursor() as cursor:
        try:
            cursor.execute(game_table_schema)
        except DBError as error:
            print(error)


__init__()
