const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;  
const {indexRouter} = require('./routes/indexRouter');
const {newRouter} = require('./routes/newRouter');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use('/new', newRouter);
app.use('/', indexRouter);
app.use((err, req, res, next) => {
  res.send(err.message);
})
app.listen(PORT, () => {
  console.log(`The app listens at Port: ${PORT}`);
});