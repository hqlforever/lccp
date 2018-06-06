var superagent = require('superagent');
var data = {
    "Action":"GetServerTimeMillisecond",
    "SourceName":"PC"
};


superagent
    .post('http://www.ascp00.com/tools/ssc_ajax.ashx')
    .type('form')
    .send(data)
    .set('Origin', 'www.ascp00.com')
    .end(function (err, res) {
        if (err) {
            console.info(1);
        } else {
            console.dir(res.body);
        }
    })

