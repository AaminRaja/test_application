const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/birthdayWish', (req, res) => {
    res.send('Happy Birthday Sumu');
});

const port = process.env.PORT || 4040;
app.listen(port, () => {
    console.log(`Server running on port : http://localhost:${port}`);
});
