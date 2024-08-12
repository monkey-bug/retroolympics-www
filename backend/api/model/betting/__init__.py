import psycopg2

from .main import datacon, getAllBets, insertBet, removeBet

__all__ = ["insertBet", "removeBet", "getAllBets"]


createBettingTableString = """
                    CREATE TABLE bettingtest (
                        id SERIAL PRIMARY KEY,
                        userid VARCHAR,
                        matchid INT,
                        teamid INT,
                        amount FLOAT
                    );
                    """

createUserTableString = """
                        CREATE TABLE bettingusers (
                            userid VARCHAR,
                            points FLOAT,
                            PRIMARY KEY (userid)
                        );
                        """

def __init__():
    with datacon.cursor() as curs:
        try:
            curs.execute(createBettingTableString)
        except psycopg2.errors.DuplicateTable:
            print("duplicate table encountered")
            pass
        try:
            curs.execute(createUserTableString)
        except psycopg2.errors.DuplicateTable:
            print("duplicate table encountered")
            pass


__init__()
