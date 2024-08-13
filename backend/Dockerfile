FROM python:3.12-alpine

# install psycopg2 dependencies
RUN apk update
RUN apk add postgresql-dev gcc python3-dev musl-dev

COPY requirements-combined.txt /tmp
RUN pip install -r /tmp/requirements-combined.txt
