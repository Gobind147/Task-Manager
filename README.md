# Task Manager API

## Description

Task Manager API is a simple RESTful API for managing tasks. It allows users to create, read, update, and delete tasks. This API is built with Node.js, Express, and MongoDB.

## Tech Stack
- Backend: Node.js, Express
- Database: MongoDB
- Frontend: JavaScript, HTML, CSS

## Features

- Create a new task
- Retrieve all tasks
- Retrieve a single task by ID
- Update a task by ID
- Delete a task by ID

## Installation

1. Clone the repository:

    ```bash
    git clone <https://github.com/Gobind147/Task-Manager>
    cd <Task-Manager>
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your MongoDB URI:

    ```env
    MONGO_URI=<your-mongo-uri>
    PORT=5000
    ```

4. Start the server:

    ```bash
    npm start
    ```

5. Open your browser and navigate to http://localhost:5000 to access the frontend interface.

## Usage

Once the server is running, you can use the following endpoints to interact with the API:

### Get All Tasks

- **Endpoint:** `/api/v1/tasks`
- **Method:** `GET`
- **Description:** Retrieve all tasks.

### Create a New Task

- **Endpoint:** `/api/v1/tasks`
- **Method:** `POST`
- **Description:** Create a new task.
- **Body Parameters:**
  - `name` (string): The name of the task.
  - `completed` (boolean): The completion status of the task (default is `false`).

### Get a Single Task

- **Endpoint:** `/api/v1/tasks/:id`
- **Method:** `GET`
- **Description:** Retrieve a single task by its ID.

### Update a Task

- **Endpoint:** `/api/v1/tasks/:id`
- **Method:** `PATCH`
- **Description:** Update a task by its ID.
- **Body Parameters:**
  - `name` (string): The new name of the task.
  - `completed` (boolean): The new completion status of the task.

### Delete a Task

- **Endpoint:** `/api/v1/tasks/:id`
- **Method:** `DELETE`
- **Description:** Delete a task by its ID.






