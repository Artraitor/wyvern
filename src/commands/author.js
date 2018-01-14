module.exports.launch = (client, api, config, message, args) => {
    message.channel.send({
        embed: {
            color: 0x8e44ad,
            author: {
                icon_url: "https://avatars.githubusercontent.com/zxvnme",
                name: "zxvnme"
            },
            fields: [
                {
                    name: "Programmer:",
                    value: '[zxvnme](https://github.com/zxvnme)',
                    inline: true,
                },
                {
                    name: "Graphic designer:",
                    value: "[vx1ne](https://github.com/vx1ne)",
                    inline: true,
                }
            ],
            timestamp: new Date(),
            footer: {
                icon_url: "https://avatars.githubusercontent.com/zxvnme",
                text: "© zxvnme"
            }
        }
    });
};