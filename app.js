const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
const port = 3000;
app.use(bodyParser.json());
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'your_database_name'
});
db.connect((err) => {
    if (err) {
        console.error('Σφάλμα σύνδεσης στη βάση δεδομένων:', err);
    } else {
        console.log('Επιτυχής σύνδεση στη βάση δεδομένων');
    }
});
app.post('/register', (req, res) => {
    const userData = req.body;
    db.query('INSERT INTO users SET ?', userData, (error, results) => {
        if (error) {
            console.error('Σφάλμα κατά την εγγραφή:', error);
            res.json({ success: false, error: 'Σφάλμα κατά την εγγραφή' });
        } else {
            console.log('Επιτυχής εγγραφή:', results);
            res.json({ success: true });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
