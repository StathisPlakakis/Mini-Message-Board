const CustomNotFoundError = require('../errors/CustomNotFoundError');
const asyncHandler = require("express-async-handler");
const getNewController = asyncHandler(async (req, res) => {
  res.render('form' );
});

module.exports = {getNewController};
