const express = require('express');
const exphbs = require('express-handlebars');
const conn = require('./db/conn');

const Task = require('./models/Task');
const tasksRoutes = require('./routes/tasksRoutes');

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
);

app.use(express.json());

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/tasks', tasksRoutes);

conn.sync().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Listening on port ${PORT}!`);
    });
}).catch(err => console.log(err));