const router = require('koa-router')()
const superagent = require('superagent');
router.prefix('/api')


router.post('/GetLotteryOpen', async (ctx, next) => {
  var code = ctx.request.body.code;
  var data = {
    "Action": "GetLotteryOpen",
    "LotteryCode": "1303",
    "IssueNo": "0",
    "DataNum": "10",
    "SourceName": "PC"
  };
  data.LotteryCode=code;

  var res = await superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com');

  if (res && res.ok) {
    ctx.body = res.body;
  }
})

router.post('/GetLotteryPlan', async (ctx, next) => {
  var code = ctx.request.body.code;
  var data = {
    "Action": "GetLotteryPlan",
    "Qort": "1303",
    "SourceName": "PC"
  };
  data.Qort=code;
  var res = await superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com');

  if (res && res.ok) {
    ctx.body = res.body;
  }
})

router.post('/GetNewestBonusList', async (ctx, next) => {

  var data = {
    "Action": "GetNewestBonusList",
    "dataNum": 20,
    "SourceName": "PC"
  };

  var res = await superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com');

  if (res && res.ok) {
    ctx.body = res.body;
  };
})

router.post('/GetServerTimeMillisecond', async (ctx, next) => {

  var data = {
    "Action": "GetServerTimeMillisecond",
    "SourceName": "PC"
  };


  var res = await superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com');

  if (res && res.ok) {
    ctx.body = res.body;
  };
})

module.exports = router
