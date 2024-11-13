const express = require('express');
const app = express();
const PORT = 3000;  
const {indexRouter} = require('./routes/indexRouter');
const {newRouter} = require('./routes/newRouter');

app.use('/', indexRouter);
app.use('/new', newRouter);
app.listen(PORT, () => {
  console.log(`The app listens at Port: ${PORT}`);
});