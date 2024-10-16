from psycopg2 import Error as DBError
from api.model.database import bettingconn as dbconn

match_table_schema = """
    CREATE TABLE IF NOT EXISTS matches (
        id BIGINT PRIMARY KEY,
        result BIT(2),
        detail1 TEXT,
        detail2 TEXT,
        user1_id BIGINT REFERENCES users(id),
        user2_id BIGINT REFERENCES users(id),
        game_id BIGINT REFERENCES users(id),
        treasure_id BIGINT -- REFERENCES treasures(id)
    );
"""


class Match:
    def __init__(self, id, result, detail1, detail2, user1, user2, game):
        self.id = id
        self.result = int(result, 2)
        self.details = [detail1, detail2]
        self.user1 = user1
        self.user2 = user2
        self.game = game


def get_all_matches():
    with dbconn.cursor() as curs:
        curs.execute("""
            SELECT
                m.id, m.result, m.detail1, m.detail2,
                u1.username, u2.username, g.id
            FROM matches m
            JOIN users u1 ON u1.id = m.user1_id
            JOIN users u2 ON u2.id = m.user2_id
            JOIN games g ON g.id = m.game_id
            ;
        """)
        return [Match(*match) for match in curs.fetchall()]


def get_match(id):
    with dbconn.cursor() as curs:
        curs.execute("""
            SELECT
                m.id, m.result, m.detail1, m.detail2,
                u1.username, u2.username, g.id
            FROM matches m
            JOIN users u1 ON u1.id = m.user1_id
            JOIN users u2 ON u2.id = m.user2_id
            JOIN games g ON g.id = m.game_id
            WHERE m.id = %s
            ;
        """, (id,))
        return Match(*curs.fetchall()[0])


def __init__():
    with dbconn.cursor() as cursor:
        try:
            cursor.execute(match_table_schema)
        except DBError as error:
            print(error)


__init__()
