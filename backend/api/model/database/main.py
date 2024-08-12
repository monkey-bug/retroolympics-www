import psycopg2

bettingconn = psycopg2.connect(
    host="localhost", port="8001", user="postgres", password="postgres", dbname="retroolympics"
)
bettingconn.autocommit = True
