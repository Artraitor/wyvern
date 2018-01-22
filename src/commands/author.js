const stringUtils = require('./../stringutils.js');

module.exports.launch = (client, api, config, message, args) => {
    message.channel.send({
        embed: {
            color: 0x8e44ad,  
            author: {
                icon_url: "https://avatars.githubusercontent.com/zxvnme",
                name: "zxvnme"
            },
            description: stringUtils.wrapWithBold("Source code available at:") + "\n" +"https://github.com/zxvnme/wyvern" + "\n\n" + stringUtils.wrapWithBold("Official discord:") + "\n" + "https://discord.gg/3FVVyXW" + "\n",
            fields: [
                {
                    name: "Programmer & Graphic designer:",
                    value: '[zxvnme](https://github.com/zxvnme)',
                    inline: true,
                },
            ],
            timestamp: new Date(),
            footer: {
                icon_url: "https://avatars.githubusercontent.com/zxvnme",
                text: "© zxvnme"
            }
        }
    });
};

module.exports.getSyntax = () => {
    return "author";
};

module.exports.getDescription = () => {
    return "Short credits note.";
};