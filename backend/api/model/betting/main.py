from api.model.database import bettingconn as datacon

datacon.autocommit = True


def insertBet(userid, matchid, teamid, amount): #TODO make this subtract from the usertable points first
    with datacon.cursor() as curs:
        curs.execute(
            f"""
            INSERT INTO bettingtest (userid, matchid, teamid, amount)
                VALUES ({userid},{matchid},{teamid},{amount});
                    """
        )


def getAllBets():
    with datacon.cursor() as curs:
        curs.execute(
                """
                    SELECT * FROM bettingtest;
                """
        )
        res = curs.fetchall()
    return res

def getUserData(userid):
    with datacon.cursor() as curs:
        curs.execute(
            f"""
            SELECT * FROM bettingusers
            WHERE userid=\'{userid}\';  
            """
        )
        res = curs.fetchall()
    return res

def removeBet():
    pass
