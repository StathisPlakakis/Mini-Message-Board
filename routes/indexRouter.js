const {Router} = require('express');
const {getIndexController} = require('../controllers/getIndexController');
const indexRouter = Router();

indexRouter.get('/', getIndexController);

module.exports = {indexRouter};