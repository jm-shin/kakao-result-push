import express from 'express';
import * as campaignController from '../controller/campaign.js';

const router = express.Router();

router.post('/kakao/result', campaignController.createKakaoResult);

export default router;