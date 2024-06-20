from invoke import task

from api import get_api


# Python reqs
@task
def update_app_reqs(c):
    c.run("pip-compile backend/requirements.in")


@task
def update_combined_reqs(c):
    c.run(
        "pip-compile backend/requirements.in backend/requirements-dev.in -o backend/requirements-combined.txt"
    )


# Run
@task
def run_back(c):
    get_api().run()
