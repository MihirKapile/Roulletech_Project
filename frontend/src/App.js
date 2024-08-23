import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
    const [tasks, setTasks] = useState([]);
    const [notes, setNotes] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newNote, setNewNote] = useState('');
    const [editTaskId, setEditTaskId] = useState(null);
    const [editNoteId, setEditNoteId] = useState(null);

    useEffect(() => {
        // Fetch tasks
        axios.get('http://localhost:8000/api/tasks/')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => console.error('Error fetching tasks:', error));

        // Fetch notes
        axios.get('http://localhost:8000/api/notes/')
            .then(response => {
                setNotes(response.data);
            })
            .catch(error => console.error('Error fetching notes:', error));
    }, []);

    const addTask = () => {
        if (editTaskId !== null) {
            // Edit existing task
            axios.put(`http://localhost:8000/api/tasks/${editTaskId}/`, { title: newTask })
                .then(response => {
                    setTasks(tasks.map(task => task.id === editTaskId ? response.data : task));
                    setNewTask('');
                    setEditTaskId(null);
                })
                .catch(error => console.error('Error editing task:', error));
        } else {
            // Add new task
            axios.post('http://localhost:8000/api/tasks/', { title: newTask, completed: false })
                .then(response => {
                    setTasks([...tasks, response.data]);
                    setNewTask('');
                })
                .catch(error => console.error('Error adding task:', error));
        }
    };
    //Delete Task
    const deleteTask = (id) => {
        axios.delete(`http://localhost:8000/api/tasks/${id}/`)
            .then(() => {
                setTasks(tasks.filter(task => task.id !== id));
            })
            .catch(error => console.error('Error deleting task:', error));
    };

    const editTask = (task) => {
        setNewTask(task.title);
        setEditTaskId(task.id);
    };

    const addNote = () => {
        if (editNoteId !== null) {
            // Edit existing note
            axios.put(`http://localhost:8000/api/notes/${editNoteId}/`, { content: newNote })
                .then(response => {
                    setNotes(notes.map(note => note.id === editNoteId ? response.data : note));
                    setNewNote('');
                    setEditNoteId(null);
                })
                .catch(error => console.error('Error editing note:', error));
        } else {
            // Add new note
            axios.post('http://localhost:8000/api/notes/', { content: newNote })
                .then(response => {
                    setNotes([...notes, response.data]);
                    setNewNote('');
                })
                .catch(error => console.error('Error adding note:', error));
        }
    };

    //Delete Note
    const deleteNote = (id) => {
        axios.delete(`http://localhost:8000/api/notes/${id}/`)
            .then(() => {
                setNotes(notes.filter(note => note.id !== id));
            })
            .catch(error => console.error('Error deleting note:', error));
    };

    const editNote = (note) => {
        setNewNote(note.content);
        setEditNoteId(note.id);
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.title}
                        <button onClick={() => editTask(task)}>Edit</button>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTask}>{editTaskId ? "Update Task" : "Add Task"}</button>

            <h1>Notes</h1>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.content}
                        <button onClick={() => editNote(note)}>Edit</button>
                        <button onClick={() => deleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
            <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add a new note"
            />
            <button onClick={addNote}>{editNoteId ? "Update Note" : "Add Note"}</button>
        </div>
    );
}

export default App;
