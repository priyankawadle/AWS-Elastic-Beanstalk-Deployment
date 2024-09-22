const express=require('express');
const app = express();

app.get('/start', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => console.log(`http://localhost:8080 app listening on port 8080!`));