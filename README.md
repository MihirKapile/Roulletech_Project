# To-Do List & Notes App

This project is a simple To-Do List and Notes application built using **React** for the frontend and **Django** for the backend. The app allows users to create, update, delete, and manage their tasks and notes efficiently.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Task Management:**
  - Add new tasks.
  - Edit existing tasks.
  - Delete tasks.
  - View all tasks.

- **Notes Management:**
  - Add new notes.
  - Edit existing notes.
  - Delete notes.
  - View all notes.

## Tech Stack

### Frontend:
- React.js
- Axios

### Backend:
- Django
- Django REST Framework
- SQLite (default Django database)

## Installation

### Prerequisites:

- Node.js and npm installed
- Python 3.x and pip installed

### Backend Setup:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-notes-app.git
   cd todo-notes-app
   ```

2. Navigate to the `backend` directory:

   ```bash
   cd backend
   ```

3. Install the required Python packages:

   ```bash
   pip install -r requirements.txt
   ```

4. Apply migrations and start the Django server:

   ```bash
   python manage.py migrate
   python manage.py runserver
   ```

   The backend server will start at `http://localhost:8000/`.

### Frontend Setup:

1. Navigate to the `frontend` directory:

   ```bash
   cd frontend
   ```

2. Install the required npm packages:

   ```bash
   npm install
   ```

3. Start the React development server:

   ```bash
   npm start
   ```

   The frontend server will start at `http://localhost:3000/`.

## Usage

- Navigate to `http://localhost:3000/` in your browser.
- Add, edit, and delete tasks and notes using the UI.
- The data is persisted in the Django backend using a RESTful API.

## API Endpoints

### Tasks API:

- **GET** `/api/tasks/` - Retrieve all tasks
- **POST** `/api/tasks/` - Create a new task
- **PUT** `/api/tasks/<id>/` - Update a task by ID
- **DELETE** `/api/tasks/<id>/` - Delete a task by ID

### Notes API:

- **GET** `/api/notes/` - Retrieve all notes
- **POST** `/api/notes/` - Create a new note
- **PUT** `/api/notes/<id>/` - Update a note by ID
- **DELETE** `/api/notes/<id>/` - Delete a note by ID
