const {Router} = require('express');
const {getNewController} = require('../controllers/getNewController');
const newRouter = Router();
newRouter.get('/', getNewController);
newRouter.post('/',)

module.exports = {newRouter};