const kakaoResultRepository = require('../data/campaign');

export async function createKakaoResult (req, res, next) {
    const body = req.body;
    let info = {
        device : body.DEVICE,
        phone: body.PHONE,
        media: body.MEDIA,
        unixTime: body.UNIXTIME,
        result: body.RESULT,
        telRes: body.TELRES,
        telTime: body.TELTIME,
        transmitted_date: new Date()
    }
    await kakaoResultRepository.create(info);
    res.status(201);
}