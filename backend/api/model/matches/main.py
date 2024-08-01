from api.model.database import bettingconn as datacon

def getAllMatches():
    with datacon.cursor() as curs:
        curs.execute(
            """
            SELECT * FROM matches;
            """
        )
        res = curs.fetchall()
    return res

def getMatch(matchid):
    with datacon.cursor() as curs:
        curs.execute(
            f"""
            SELECT * FROM matches
            WHERE matchid=\'{matchid}\';  
            """
        )
        res = curs.fetchall()
    return res

def getMatchesByTeam(teamid):
    with datacon.cursor() as curs:
        curs.execute(
            f"""
            SELECT * FROM matches
            WHERE teamid1=\'{teamid}\' OR teamid2=\'{teamid}\';  
            """
        )
        res = curs.fetchall()
    return res


def insertMatch(teamid1, teamid2):
    with datacon.cursor() as curs:
        curs.execute(
    f"""
    INSERT INTO matches (teamid1, teamid2) VALUES({teamid1}, {teamid2});
    """
    )
