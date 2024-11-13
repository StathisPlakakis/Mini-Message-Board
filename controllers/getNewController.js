const CustomNotFoundError = require('../errors/CustomNotFoundError');
const asyncHandler = require("express-async-handler");
const getNewController = asyncHandler(async (req, res) => {
  res.send('Hello World new');
});

module.exports = {getNewController};
