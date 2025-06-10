# Task-Manager-CLI
A simple command-line task manager built with Node.js that allows you to add, list, and delete tasks. Tasks are saved persistently in a local JSON file.



Features
Add new tasks
List all saved tasks
Delete tasks by exact task name
Persistent storage using a JSON file (created.json)

Installation
Clone the repository:

git clone <your-repo-url>
cd <your-repo-folder>
Make sure you have Node.js installed.

Usage
Run the script with the following commands:
Add a task:
node app.js Add "Your task description"

List all tasks:
node app.js List

Delete a task (must match exactly):
node app.js Del "Your task description"

Examples
node app.js Add "Buy groceries"
node app.js Add "Finish homework"
node app.js List
node app.js Del "Buy groceries"
node app.js List

Notes
Tasks are stored in the created.json file in the project directory.
When deleting a task, you must provide the exact task string.

License
This project is open source and available under the MIT License.
