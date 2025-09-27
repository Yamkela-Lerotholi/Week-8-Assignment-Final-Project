const express = require('express');
const router = express.Router();
const db = require('../db');

// Create User
router.post('/', (req, res) => {
    const { FullName, Email, Phone } = req.body;
    db.query('INSERT INTO Users (FullName, Email, Phone) VALUES (?, ?, ?)',
        [FullName, Email, Phone], (err, results) => {
            if(err) return res.status(500).send(err);
            res.send({ message: 'User added', UserID: results.insertId });
        });
});

// Read all Users
router.get('/', (req, res) => {
    db.query('SELECT * FROM Users', (err, results) => {
        if(err) return res.status(500).send(err);
        res.send(results);
    });
});

// Update User
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { FullName, Email, Phone } = req.body;
    db.query('UPDATE Users SET FullName=?, Email=?, Phone=? WHERE UserID=?',
        [FullName, Email, Phone, id], (err) => {
            if(err) return res.status(500).send(err);
            res.send({ message: 'User updated' });
        });
});

// Delete User
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM Users WHERE UserID=?', [id], (err) => {
        if(err) return res.status(500).send(err);
        res.send({ message: 'User deleted' });
    });
});

module.exports = router;
