let express = require('express');
let router = express.Router()
let users = require('../controller/users');
let accounts = require('../controller/accounts');

router.post('/user/register', users.register);
router.post('/user/update', users.update);
router.post('/user/changePassword', users.changePassword);
router.get('/user/authentication/:email/:password', users.authentication);
router.get('/user/delete/:email/:password', users.delete);

router.post('/account/register', accounts.register);
router.post('/account/update', accounts.update);
router.post('/account/changeStatus', accounts.changeStatus)
router.get('/account/delete/:id/:email/:password', accounts.delete);
router.get('/account/getByType/:type/:email/:password', accounts.getByType);
router.get('/account/getByStatus/:status/:email/:password', accounts.getByStatus);
router.get('/account/getById/:id/:email/:password', accounts.getById);
router.get('/account/search/:searchContent/:email/:password', accounts.search);
router.get('/account/monthlySummary/:email/:password', accounts.monthlySummary);

module.exports = router;

