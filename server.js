const express = require('express');
const app = new express();
const port = 5000;

app.get('/api/users', (req, res) => {
    const users = [
        {
            id: 1,
            first_name: 'Michael',
            last_name: 'Jordan',
            email: 'mj23@gmail.com'
        },
        {
            id: 2,
            first_name: 'Steph',
            last_name: 'Curry',
            email: 'sc30@gmail.com'
        },
        {
            id: 3,
            first_name: 'Kobe',
            last_name: 'Bryant',
            email: 'kb8@gmail.com'
        }
    ];

    res.json(users);
});

app.listen(port, () => {
    console.log(`Server started at port ${port}`);
});
