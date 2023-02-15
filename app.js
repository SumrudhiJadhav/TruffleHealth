const express = require('express');
const app = express();

const indexRouter = require('./routes/index')

const port = process.env.PORT || 3000;
const server = app.listen(port, (err) => {
   console.log(`Server started on ${port}`);
   if (err) throw err;
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', indexRouter);

module.exports = app;