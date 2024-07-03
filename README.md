# The Retro Olympics web application

## Running the Repository Inside a DevContainer

This guide will walk you through the steps to run this repository inside a Development Container (DevContainer) using Visual Studio Code (VS Code). DevContainers provide a fully configured development environment that can include specific versions of programming languages, extensions, and tools configured exactly as needed for a project.

### Prerequisites

- **Visual Studio Code**: Ensure you have Visual Studio Code installed on your system. You can download it from [here](https://code.visualstudio.com/Download).
- **Docker**: DevContainers use Docker to create and manage your development environments. Make sure Docker is installed and running on your system. Download Docker from [here](https://docs.docker.com/get-docker/).
- **Dev Containers Extension**: This extension allows you to open any folder inside (or mounted into) a container and take advantage of VS Code's full feature set. Extension id: `ms-vscode-remote.remote-containers`

### Setup

1. **Open the Project in VS Code**: Start by opening the folder containing the project in VS Code.

2. **Reopen in Container**: Once the project is open, you'll see a popup in the lower right corner asking if you want to reopen the folder to develop inside a container. Click "Reopen in Container". If you don't see the popup, you can also open the Command Palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS) and select `Dev Containers: Reopen in Container`.

3. **Wait for the Container to Build**: The first time you open your project in a container, VS Code will build the Docker image. This process can take some time depending on your internet connection and the complexity of the build. Subsequent loads will be much faster since Docker caches the build steps.

4. **Start Developing**: Once the container is built and started, VS Code will connect to it. You can now start editing, running, and debugging your project just like you would on your local machine.

## Additional Commands

- **Rebuild Container**: If you make changes to the devcontainer configuration, you may need to rebuild the container. You can do this by opening the Command Palette and selecting `Dev Containers: Rebuild Container`.

## Setup the application locally
### Setup the backend
1. Install `python 3.12`, the instructions may vary by OS and distribution.
2. Make sure you have `pip` installed and linked to correct version of python.
3. Install the necessary python libraries with the following command: `pip install -r backend/src/requirements-combined.txt`

### Setup the frontend
TODO

## Run the application
### Run the backend alone
- Execute the following command: `invoke run-back`

- Check the hello world endpoint: `http://127.0.0.1:5000/api/v1/hello/`

You should see the following response in your browser or a tool like postman:
```json
{
  "message": "Hello World ! From the retro olympics backend !"
}