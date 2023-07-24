// create web server 
const express = require('express');
const app = express();
const port = 3000;
const db = require('./db');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/comments', (req, res) => {
    let sql = "SELECT * FROM comments";
    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.get('/comments/:id', (req, res) => {
    let sql = "SELECT * FROM comments WHERE id = ?";
    db.all(sql, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.post('/comments', (req, res) => {
    let sql = "INSERT INTO comments (name, content) VALUES (?, ?)";
    db.run(sql, [req.body.name, req.body.content], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.put('/comments/:id', (req, res) => {
    let sql = "UPDATE comments SET name = ?, content = ? WHERE id = ?";
    db.run(sql, [req.body.name, req.body.content, req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.delete('/comments/:id', (req, res) => {
    let sql = "DELETE FROM comments WHERE id = ?";
    db.run(sql, [req.params.id], (err, rows) => {
        if (err) {
            throw err;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

