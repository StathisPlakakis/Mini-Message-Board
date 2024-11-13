const {Router} = require('express');
const {getNewController} = require('../controllers/getNewController');
const newRouter = Router();
newRouter.get('/', getNewController);

module.exports = {newRouter};