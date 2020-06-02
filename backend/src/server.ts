import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    res.json([
        "Pedro",
        "Lucas",
        "Anderson",
        "Bruno",
        "Carlos"
    ]);
});

app.listen(3333);