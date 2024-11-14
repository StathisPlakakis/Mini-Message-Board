const {Router} = require('express');
const {getNewController} = require('../controllers/getNewController');
const {postNewController} = require('../controllers/postNewController');
const newRouter = Router();
newRouter.get('/', getNewController);
newRouter.post('/',postNewController);

module.exports = {newRouter};