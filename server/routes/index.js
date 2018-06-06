const router = require('koa-router')()
const superagent = require('superagent');
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/test', async (ctx, next) => {

  var data = {
    "Action": "GetLotteryOpen",
    "LotteryCode": "1303",
    "IssueNo": "0",
    "DataNum": "10",
    "SourceName": "PC"
  };

  var res = await superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com');

  if (res && res.ok) {
    ctx.body = res.body;
  }

})



router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
