const express = require('express');
const router = express.Router();

const SaladController = require('./controllers/SaladController');

router.get('/salads', SaladController.buscarTodos);
router.get('/salad/:codigo', SaladController.buscarUm);
router.post('/salad', SaladController.inserir);
router.put('/salad/:codigo', SaladController.alterar);
router.delete('/salad/:codigo', SaladController.excluir);

module.exports = router;