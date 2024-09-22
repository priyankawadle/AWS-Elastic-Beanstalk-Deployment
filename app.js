const express=require('express');
const app = express();

app.get('/start', (req, res) => {
    res.send('Hello World!');
});

app.listen(8080, () => console.log(`http://localhost:3000 app listening on port 3000!`));