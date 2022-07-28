const express = require('express');
const routes = require('./routes');
const dashboardRoutes = require('./routes/dashboard');
const session = require('express-session');
const { engine } = require('express-handlebars');
// import sequelize connection
const db= require('./config/db')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
}))
app.use(routes);
app.use("/dashboard", dashboardRoutes);

// sync sequelize models to the database, then turn on the server
db.sync();
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
