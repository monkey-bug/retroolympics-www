from .main import datacon, getAllMatches, getMatch, getMatchesByTeam, insertMatch
import psycopg2

__all__=["getAllMatches", "getMatch", "getMatchesByTeam", "insertMatch"]


createMatchTableString = """
                    CREATE TABLE matches (
                        matchid SERIAL PRIMARY KEY,
                        teamid1 INT,
                        teamid2 INT
                    );
                    """




def __init__():
    with datacon.cursor() as curs:
        try:
            curs.execute(createMatchTableString)
        except psycopg2.errors.DuplicateTable:
            print("duplicate table encountered")
            pass
__init__()
