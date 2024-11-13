const {Router} = require('express');
const {newController} = require('../controllers/newController');
const newRouter = Router();
newRouter.get('/', newController);

module.exports = {newRouter};