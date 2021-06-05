const help = (pushname, prefix, botName, ownerName) => {
        return `
┏ *Murazor Bot*
╿
┷┯ *Bot Info*
   ╽
   ┠≽ *Creator* : Er Murazor
   ┠≽ *Version* : 0.0.1
   ╿
┯┷ *This ot can do whatever you want in following list*
╽
┠≽ ${prefix}info
┠≽ ${prefix}blocklist
╿
┷┯ *〈 MAKER 〉*
   ╽
   ┠≽ ${prefix}sticker
   ┠≽ ${prefix}toimg
   ╿
┯┷ *〈 GROUP 〉*
╽
┠≽ ${prefix}tagall
┠≽ ${prefix}tagall2
┠≽ ${prefix}tagall3
┠≽ ${prefix}add 628885xxxxxx
┠≽ ${prefix}kick @tag
┠≽ ${prefix}promote @tag
┠≽ ${prefix}demote @tag
┠≽ ${prefix}listadmins
┠≽ ${prefix}simih 1/0
┠≽ ${prefix}welcome 1/0
╿
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ ${prefix}bc
   ┠≽ ${prefix}setprefix
   ┠≽ ${prefix}clearall
   ╿
┯┷ *〈 OTHER 〉*
╽
┠≽ ${prefix}wait
╿ *${ownerName},*
╰╼≽ *Developer © ErMurazor*`
}
exports.help = help
