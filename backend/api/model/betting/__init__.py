from .main import *
import psycopg2

__all__ = ["insertBet", "removeBet"]


createTableString = """
                    CREATE TABLE bettingtest (
                        id SERIAL PRIMARY KEY,
                        userid VARCHAR,
                        matchid INT,
                        teamid INT,
                        amount FLOAT
                    );
                    """

def __init__():
    with bettingconn.cursor() as curs:
        try:
            curs.execute(createTableString)
        except psycopg2.errors.DuplicateTable as e:
            print("duplicate table encountered")
            pass
__init__()