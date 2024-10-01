from psycopg2 import Error as DBError
from api.model.database import bettingconn as dbconn

team_table_schema = """
    CREATE TABLE IF NOT EXISTS teams (
        id BIGINT PRIMARY KEY,
        name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS teams_users (
        id BIGSERIAL PRIMARY KEY,
        team_id BIGINT REFERENCES teams(id),
        user_id BIGINT REFERENCES users(id)
    );
"""


class Team:
    def __init__(self, id, name, members):
        self.id = id
        self.name = name
        self.members = members


def get_all_teams():
    with dbconn.cursor() as curs:
        curs.execute("""
            SELECT teams.id, teams.name, array_agg(users.username)
            FROM teams
            LEFT JOIN teams_users AS tu ON tu.team_id = teams.id
            LEFT JOIN users ON users.id = tu.user_id
            GROUP BY teams.id
            ORDER BY teams.name ASC
            ;
        """)
        return [Team(*team) for team in curs.fetchall()]


def get_team(id):
    with dbconn.cursor() as curs:
        curs.execute("""
            SELECT teams.id, teams.name, array_agg(users.username)
            FROM teams
            LEFT JOIN teams_users AS tu ON tu.team_id = teams.id
            LEFT JOIN users ON users.id = tu.user_id
            WHERE teams.id=%s
            GROUP BY teams.id
            ;
        """, (id,))
        return Team(*curs.fetchall()[0])


def __init__():
    with dbconn.cursor() as cursor:
        try:
            cursor.execute(team_table_schema)
        except DBError as error:
            print(error)


__init__()
