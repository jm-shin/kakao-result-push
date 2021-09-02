import * as kakaoResultRepository from '../data/campaign.js';
import logger from "../util/logger.js";

export async function createKakaoResult (req, res, next) {
    const body = req.body;
    let info = {
        device : body.DEVICE,
        phone: body.PHONE.slice(-4),
        media: body.MEDIA,
        sendTime: body.UNIXTIME,
        result: body.RESULT,
        telRes: body.TELRES? body.TELRES: 0,
        telTime: body.TELTIME? body.TELTIME: 0,
        transmitted_date: new Date(),
    }
    logger.info(`response: { type: ${info.device}, phone: ${info.phone.slice(-4)}, code: ${info.result}, resend: ${info.telRes} }`);
    const result = await kakaoResultRepository.create(info);
    logger.info(`=> insert result: ${JSON.stringify(result)}`);
    res.status(201).json(result);
}