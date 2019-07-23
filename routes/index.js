const express = require('express');
const router = express.Router();

const shareController = require('../controllers/share.controller')
const shareholderController = require('../controllers/shareholder.controller')

// share
router.post('/api/share', shareController.createShare)
router.put('/api/share', shareController.updateShare)
router.delete('/api/share', shareController.deleteShare)

// shareholder
router.post('/api/shareholder', shareholderController.createShareholder)
router.get('/api/shareholder', shareholderController.getShareholders)
router.put('/api/shareholder/share', shareholderController.appendShareToShareholder)
router.delete('/api/shareholder/delete-share', shareholderController.deleteShareFromShareholder)

module.exports = {router};