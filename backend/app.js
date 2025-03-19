const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs'); // Import the fs module
const path = require('path'); // Import path for file paths

const PORT = 5042;

const notesFilePath = path.join(__dirname, 'notes.json');

// Documentation Prompt: #file:Backlog.MD This file states that a requirement of this project is to add jsdocs to each method, can you generate me some documentation for this backend application

app.use(cors());
app.use(express.json());

let notes = [
    { id: 0, title: 'Grocery List', content: 'Milk, eggs, bread' },
    { id: 1, title: 'Meeting Notes', content: 'Discussed project deadlines' },
    { id: 2, title: 'Ideas', content: 'New app features' }
];

// Helper function to write notes to the JSON file
const writeNotesToFile = (notes) => {
    fs.writeFileSync(notesFilePath, JSON.stringify(notes, null, 2));
};

/**
 * GET /notes/:id?
 * Retrieves all notes or a specific note by ID.
 * Prompt 1: Please scaffold the GET note part
 * Prompt 2: I need to add a parameter to the get request in order to get specific notes by id
 * Prompt 3: The id should be an optional parameter so I can still get all of the notes
 * 
 * @route GET /notes/:id?
 * @param {number} [req.params.id] - The optional ID of the note to retrieve
 * @returns {Array<Object>|Object} 200 - An array of notes or a single note
 * @returns {Object} 404 - Error message if the note is not found
 */
app.get('/notes/:id?', (req, res) => {
    const { id } = req.params;

    if (id) {
        const note = notes.find(note => note.id === parseInt(id));
        if (!note) {
            return res.status(404).json({ error: 'Note not found' });
        }
        return res.json(note);
    }

    res.json(notes);
});

/**
 * POST /notes
 * Creates a new note.
 * Prompt: Please scaffold the POST new note part
 * 
 * @route POST /notes
 * @param {string} req.body.title - The title of the note
 * @param {string} req.body.content - The content of the note
 * @returns {Object} 201 - The created note
 * @returns {Object} 400 - Error message if title or content is missing
 */
app.post('/notes', (req, res) => {
    const { title, content } = req.body;
    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }
    const newNote = {
        id: notes.length > 0 ? notes[notes.length - 1].id + 1 : 0,
        title,
        content
    };
    notes.push(newNote);
    writeNotesToFile(notes);
    res.status(201).json(newNote);
});

/**
 * PUT /notes/:id
 * Updates an existing note by ID.
 * Prompt: create the code for the PUT update note part
 * 
 * @route PUT /notes/:id
 * @param {number} req.params.id - The ID of the note to update
 * @param {string} req.body.title - The updated title of the note
 * @param {string} req.body.content - The updated content of the note
 * @returns {Object} 200 - The updated note
 * @returns {Object} 400 - Error message if title or content is missing
 * @returns {Object} 404 - Error message if the note is not found
 */
app.put('/notes/:id', (req, res) => {
    const { id } = req.params;
    const { title, content } = req.body;

    const noteIndex = notes.findIndex(note => note.id === parseInt(id));
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }

    if (!title || !content) {
        return res.status(400).json({ error: 'Title and content are required' });
    }

    notes[noteIndex] = { id: parseInt(id), title, content };
    writeNotesToFile(notes);
    res.json(notes[noteIndex]);
});

/**
 * DELETE /notes/:id
 * Deletes a note by ID.
 * Prompt: create the code for the DELETE note part
 * 
 * @route DELETE /notes/:id
 * @param {number} req.params.id - The ID of the note to delete
 * @returns {Object} 200 - The deleted note
 * @returns {Object} 404 - Error message if the note is not found
 */
app.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    const noteIndex = notes.findIndex(note => note.id === parseInt(id));
    if (noteIndex === -1) {
        return res.status(404).json({ error: 'Note not found' });
    }
    const deletedNote = notes.splice(noteIndex, 1);
    res.json(deletedNote[0]);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});