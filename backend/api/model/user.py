from enum import IntFlag, auto
from psycopg2 import Error as DBError
from api.model.database import bettingconn as dbconn

user_table_schema = """
    CREATE TABLE IF NOT EXISTS users (
        id BIGINT PRIMARY KEY,
        username TEXT UNIQUE NOT NULL,
        points BIGINT DEFAULT 1000,
        roles BIT(6)
    );
"""


class Role(IntFlag):
    COMPETITOR = auto()
    GAMETESTER = auto()
    STREAMTEAM = auto()
    REFEREE = auto()
    ADMIN = auto()
    HOST = auto()


class User:
    def __init__(self, id, username, points, roles):
        self.id = id
        self.username = username
        self.points = points
        self.roles = int(roles, 2)


def __init__():
    with dbconn.cursor() as cursor:
        try:
            cursor.execute(user_table_schema)
        except DBError as error:
            print(error)


def get_all_users():
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM users;")
        return [User(*data) for data in curs.fetchall()]


def get_user(id):
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM users WHERE id=%s;", (id,))
        return User(*curs.fetchall()[0])


def get_user_by_username(username):
    with dbconn.cursor() as curs:
        curs.execute("SELECT * FROM users WHERE username=%s;", (username,))
        return User(*curs.fetchall()[0])


__init__()
