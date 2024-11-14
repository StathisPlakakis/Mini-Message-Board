const asyncHandler = require("express-async-handler");
const getNewController = asyncHandler(async (req, res) => {
  res.render('form',  {
    title: "Mini Messageboard",
  });
});

module.exports = {getNewController};
