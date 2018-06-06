var http = require('http');
var qs = require('querystring');
var data = {
    "Action":"GetLotteryPlan",
    "Qort":"1303",
    "SourceName":"PC"
};
var content = qs.stringify(data);
var options = {
    hostname: "www.ascp00.com",
    path: "/tools/ssc_ajax.ashx",
    port :80,
    method: 'POST',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded',
        "Origin": "www.ascp00.com",
        "Content-Length": content.length
    }
}



var req = http.request(options, function (res) {
    var body = "";

    res.on('data', function (data) { body += data;
        console.dir(data); })
        .on('end', function () {
            if (body)
            console.dir(body);
            else
            console.info("111");
        });
});
req.on('error', function (e) {

    console.log('problem with request: ' + e.message);
});