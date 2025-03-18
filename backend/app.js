const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

let notes = [
    { id: 0, title: 'Grocery List', content: 'Milk, eggs, bread' },
    { id: 1, title: 'Meeting Notes', content: 'Discussed project deadlines' },
    { id: 2, title: 'Ideas', content: 'New app features' }
];
// GET all notes
app.get('/notes', (req, res) => {
    res.json(notes);
});

// POST new note

// PUT update note

// DELETE note

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});