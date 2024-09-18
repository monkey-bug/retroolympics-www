from invoke import task

from api import get_api


# Python reqs
@task
def update_app_reqs(c):
    c.run("pip-compile backend/requirements.in")


@task
def update_combined_reqs(c):
    c.run(
        "pip-compile requirements.in requirements-dev.in -o requirements-combined.txt"
    )


# Run
@task
def run_back(c):
    get_api().run("0.0.0.0")


@task
def run_back_debug(c):
    get_api().run("0.0.0.0", debug=True)
