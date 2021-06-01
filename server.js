const express = require('express');
const path = require('path');
//paths
const controller = require('./controllers');
//handlebars
const exphbs = require('express-handlebars');
//Sequelize
const sequelize = require('./config/connection');
//Session
const session = require('express-session');
const SequlizeStore = require('connect-session-sequelize')(session.Store);

//set up the actual session
const sess = {
  secret: 'super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequlizeStore({
    db: sequelize,
  }),
};
//initialize the server
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sess));

//use controllers
app.use('/', controller);

//set handlebars as render engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
});