const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});
// const logger = require('./middleware/logger');
// const members = require('./Members');

const app = express();
const PORT = process.env.PORT || 3001

// Init middleware
// app.use(logger);

// Handlebars Middleware:
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

app.get('/', (req, res) => res.render('index.handlebars', {
    title: 'Animal Companion App',
    members
  }));
// members api routes
app.use('/api/user', require('./controllers/api/user-routes'));


// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });







