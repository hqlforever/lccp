const superagent = require('superagent');
function a() {
    var data = {
        "Action": "GetLotteryPlan",
        "Qort": "1000",
        "SourceName": "PC"
    };
    superagent
        .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
        .type('form')
        .send(data)
        .set('Origin', 'www.ascp00.com').then(function (res) {
           console.dir(res.body);
        })


}
a();