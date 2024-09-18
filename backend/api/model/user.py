from enum import IntFlag, auto
from psycopg2 import Error as DBError
from api.model.database import bettingconn as dbconn

user_table_schema = """
    CREATE TABLE IF NOT EXISTS users (
        id BIGINT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        points BIGINT DEFAULT 1000,
        roles BIT(5)
    );
"""


class Role(IntFlag):
    HOST = auto()
    ADMIN = auto()
    REFEREE = auto()
    GAMETESTER = auto()
    COMPETITOR = auto()


class User:
    id = 0
    username = ""
    points = 0
    roles = 0

    def __init__(self, id, username, points, roles):
        self.id = id
        self.username = username
        self.points = points
        self.roles = roles


def __init__():
    with dbconn.cursor() as cursor:
        try:
            cursor.execute(user_table_schema)
        except DBError as error:
            print(error)


def get_user(id):
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM users WHERE id=%s;", id)
        return User(*curs.fetchall()[0])


def get_user_by_username(username):
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM users WHERE username=%s;", (username,))
        return User(*curs.fetchall()[0])


__init__()
