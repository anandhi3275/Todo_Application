# To-Do Application

This is a To-Do application built using React. It allows users to manage their tasks by organizing them into different categories such as "To Do", "Doing", and "Done".

## Features

- Add new tasks with a title, status, and tags.
- Organize tasks into different columns based on their status.
- Mark tasks as complete and move them between columns.
- Delete tasks when they are no longer needed.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm (Node Package Manager) installed on your system.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/task-manager.git

2. Navigate to the project directory:
    cd TodoList

3. Install dependencies:
    npm install

## Usage
1. Start the development server:
    npm start

2. Open your web browser and go to http://localhost:5173 to view the application.

## How to Use

- Add a new task by filling out the form in the task manager interface.
- Select tags for the task and choose its status (To Do, Doing, or Done).
- Click the "+Add Task" button to add the task to the list.
- Manage existing tasks by moving them between columns or deleting them as needed.

# Project Structure

- src/components/: Contains React components used in the application.
- TaskForm.js: Component for adding new tasks. It includes a form with input fields for task    title and tags, as well as a dropdown menu for task status. Users can select tags for their tasks and submit them to be added to the task list.
- TaskCol.js: Component for displaying a column of tasks.
- TaskCard.js: Component for rendering individual task cards.
- Tag.js: Component for rendering tags associated with tasks.
- src/assets/: Contains images and other assets used in the application.

# Technologies Used
- React
- HTML/CSS
- Local Storage (for persisting tasks between sessions)


