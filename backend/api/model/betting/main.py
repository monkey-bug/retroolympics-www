import psycopg2
import api.model.database as data


datacon = data.bettingconn
datacon.autocommit=True

def insertBet(userid, matchid, teamid, amount):
    with datacon.cursor() as curs:
        curs.execute(f"""INSERT INTO bettingtest (userid, matchid, teamid, amount)
                    VALUES ({userid},{matchid},{teamid},{amount});""")
    

def removeBet():
    pass
