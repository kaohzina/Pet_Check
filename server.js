// const express = require('express');
// const mysql2 = require('mysql2');
// const path = require('path');
// const exphbs = require('express-handlebars');
// const logger = require('./middleware/logger');
// // get access to the array:
// const members = require('./Members');

// const app = express();


// // Init middleware
// // app.use(logger);

// // Handlebars Middleware:
// //set theview engine to handlebars pass in the exphbs
// app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
// //setting the view engine
// app.set('view engine', 'handlebars');

// // Body Parser Middleware
// app.use(express.json());
// // handle url encoding data
// app.use(express.urlencoded({ extended: false }));

// // connect to the database

// // Homepage Route:
// app.get('/', (req, res) => res.render('index', {
//     title: 'Animal Companion App',
//     members
// }));

// // route to the users pet profile

// // Set static folder
// // hint: move after the Homepage route to see another render of the server
// app.use(express.static(path.join(__dirname, 'public')));

// // members api routes
// app.use('/api/members', require('./routes/api/members-route'));

// const PORT = process.env.PORT || 3001;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

// //turn on connection to db and server
// sequelize.sync({ force: false }).then(() => {
//     app.listen(PORT, () => console.log('Now listening'));
//   });



  const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// turn on routes
app.use(routes);

//turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});