var webhook_err = 'https://discord.com/api/webhooks/1188439009899315281/rZuBuLceX0IemLzSin1U4mzvIqjJwn57PMsFnWvxJ9yiij5OQo-ueSwxRcouG9RKx8Bw';
var webhook_gnrl = 'https://discord.com/api/webhooks/1188622184185331756/JJph8c4UHY8sLjxFiZIdCop3RxC6vFG-6uLvwzoabYIYVaTlJtb49AJqjAx0VEfa7-QM';
var xmlhttp = new XMLHttpRequest();{
function sendtodiscord408() {
    let myJSONStr408 = '{"content":"<@794846685113221131><@804270661693997116> 408 Request Timeoutボタンが押されました。https://http.cat/408"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr408);
    window.alert("ご協力ありがとうございます！(408)");
};
function sendtodiscord429() {
    let myJSONStr429 = '{"content":"<@794846685113221131><@804270661693997116> 429 Too many Requestsボタンが押されました。https://http.cat/429"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr429);
    window.alert("ご協力ありがとうございます！(429)");
};
function sendtodiscord500() {
    let myJSONStr500 = '{"content":"<@794846685113221131><@804270661693997116> 500 Internal Server Errorボタンが押されました。https://http.cat/500"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr500);
    window.alert("ご協力ありがとうございます！(500)");
};
function sendtodiscord502() {
    let myJSONStr502 = '{"content":"<@794846685113221131><@804270661693997116> 502 Bad Gatewayボタンが押されました。https://http.cat/502"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr502);
    window.alert("ご協力ありがとうございます！(502)");
};
function sendtodiscord504() {
    let myJSONStr504 = '{"content":"<@794846685113221131><@804270661693997116> 504 Gateway Timeoutボタンが押されました。https://http.cat/504"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr504);
    window.alert("ご協力ありがとうございます！(504)");
};
function sendtodiscordacdn() {
    let myJSONStracdn = '{"content":"<@794846685113221131><@804270661693997116> Access Deniedボタンが押されました。"}';
    xmlhttp.open('POST', webhook_err, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStracdn);
    window.alert("ご協力ありがとうございます！(ACDN)");
};
function sendtodiscordosnabruck() {
    let myJSONStrDeutschland = '{"content":"押すなっていったじゃない！！！この変態！！by 星府牡丹"}';
    xmlhttp.open('POST', webhook_gnrl, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStrDeutschland);
    window.alert("押すなっていったよね？");
};
}