const express = require('express');
const bodyParser = require('body-parser');

const usersRoutes = require('./routes/users');
const booksRoutes = require('./routes/books');

const app = express();
app.use(bodyParser.json());

app.use('/users', usersRoutes);
app.use('/books', booksRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
