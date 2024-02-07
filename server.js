const express = require('express');
const multer  = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static(path.join(__dirname, 'public')));

app.post('/upload', upload.single('video'), (req, res) => {
    const tempPath = req.file.path;
    const targetPath = path.join(__dirname, 'uploads/' + req.file.originalname);

    fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
            .status(200)
            .contentType('text/plain')
            .end('File uploaded successfully');
    });
});

function handleError(err, res) {
    console.error(err);
    res
        .status(500)
        .contentType('text/plain')
        .end('Something went wrong. Please try again later.');
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
