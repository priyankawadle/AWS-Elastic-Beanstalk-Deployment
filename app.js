const express=require('express');
const app = express();
require('dotenv').config();
app.get('/start', (req, res) => {
    res.send('Hello World!');
});

app.listen(process.env.PORT, () => console.log(`http://localhost:${process.env.PORT} app listening on port ${process.env.PORT}!`));