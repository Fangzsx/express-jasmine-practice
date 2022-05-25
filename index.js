const express = require('express');
const app = express();
const port = 3000;

//routers
const usersRouter = require('./routers/users');

app.use('/', usersRouter);

const server = app.listen(port, () => {
    console.log(`listening with port ${port}`);
})

module.exports = app

