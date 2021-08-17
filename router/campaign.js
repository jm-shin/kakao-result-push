const express = require('express');
const campaignController = require('../controller/campaign');

const router = express.Router();

router.post('/kakao/result', campaignController.createKakaoResult);

export default router;