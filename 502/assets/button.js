function sendtodiscord() {
    let xmlhttp = new XMLHttpRequest();
    let webhook_url = 'https://discord.com/api/webhooks/1188439009899315281/rZuBuLceX0IemLzSin1U4mzvIqjJwn57PMsFnWvxJ9yiij5OQo-ueSwxRcouG9RKx8Bw';
    let myJSONStr = '{"content":"<@794846685113221131><@804270661693997116> 502 Bad Gatewayボタンが押されました。"}';
    xmlhttp.open('POST', webhook_url, false);
    xmlhttp.setRequestHeader('Content-Type', 'application/json');
    xmlhttp.send(myJSONStr);
    console.log("ご協力ありがとうございます！");
}