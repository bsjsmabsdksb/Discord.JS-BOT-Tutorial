const { MessageEmbed } = require("discord.js")

module.exports = 879450795572092948 => {
    const welcomechannelId = '877430664591446117' 
    const targetChannelId = `877428225402347560` 

    client.on('guildMemberAdd', (member) => {
        console.log(member) 
        const channel = member.guild.channels.cache.get(welcomechannelId)

        const embed = new MessageEmbed()
        .setTitle(`Welcome To ${member.guild.name}`)
        .setThumbnail(member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setDescription(`Hello <@${member.user.id}>, Welcome to **${member.guild.name}**. Thanks For Joining Our Server.
Please Read ${member.guild.channels.cache.get(targetChannelId).toString()}. Have a Nice Time.
Chat In <#787083837833871404>`)
        
        .setFooter(`Welcome ${member.user.username}#${member.user.discriminator}`,member.user.displayAvatarURL({dynamic: true, size: 512}))
        .setColor('RANDOM')
    channel.send(embed)
        
    })
}
