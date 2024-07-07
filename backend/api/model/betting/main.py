import psycopg2

bettingconn = psycopg2.connect(host="db", user="postgres", password="postgres", dbname="betting")
bettingconn.autocommit=True

def insertBet(userid, matchid, teamid, amount):
    with bettingconn.cursor() as curs:
        curs.execute(f"""INSERT INTO bettingtest (userid, matchid, teamid, amount)
                    VALUES ({userid},{matchid},{teamid},{amount});""")
    

def removeBet():
    pass
