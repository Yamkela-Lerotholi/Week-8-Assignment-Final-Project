const express = require('express');
const router = express.Router();
const db = require('../db');

// Create Book
router.post('/', (req, res) => {
    const { Title, Author, ISBN, PublishedYear, CategoryID } = req.body;
    db.query('INSERT INTO Books (Title, Author, ISBN, PublishedYear, CategoryID) VALUES (?, ?, ?, ?, ?)',
        [Title, Author, ISBN, PublishedYear, CategoryID], (err, results) => {
            if(err) return res.status(500).send(err);
            res.send({ message: 'Book added', BookID: results.insertId });
        });
});

// Read all Books
router.get('/', (req, res) => {
    db.query('SELECT * FROM Books', (err, results) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    });
});

// Update Book
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { Title, Author, ISBN, PublishedYear, CategoryID } = req.body;
    db.query('UPDATE Books SET Title=?, Author=?, ISBN=?, PublishedYear=?, CategoryID=? WHERE BookID=?',
        [Title, Author, ISBN, PublishedYear, CategoryID, id], (err) => {
            if(err) return res.status(500).send(err);
            res.send({ message: 'Book updated' });
        });
});

// Delete Book
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Books WHERE BookID=?', [id], (err) => {
        if(err) return res.status(500).send(err);
        res.send({ message: 'Book deleted' });
    });
});

module.exports = router;
