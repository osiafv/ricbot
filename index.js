process.on('uncaughtException', console.error) //Safe Log Error
require('./setting')
const { default: makeWASocket, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, msgRetryCounterMap, 
makeCacheableSignalKeyStore,      
downloadContentFromMessage, makeInMemoryStore, jidDecode, getAggregateVotesInPollMessage, proto } = require("@whiskeysockets/baileys")
const fs = require ('fs')
const { readdirSync, existsSync, watch } = require('fs')
const logg = require('pino')
const pino = require('pino')
const chalk = require('chalk')
const spinnies = new(require('spinnies'))()
const path = require('path')
const readline = require("readline");
const qrcode = require('qrcode-terminal')
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const usePairingCode = true
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid } = require('./lib/exif')
const { isUrl, generateMessageTag, getBuffer, getSizeMedia, getRandom, fetchJson, await, sleep } = require('./lib/myfunc')

const express = require('express')
const app = express()
app.get('/', (req, res) => {
  res.send('Bot Berjalan! Changes Saved!')
});

app.listen(3000, () => {
  console.log(
    chalk.white('['),
    chalk.cyan('Express'),
    chalk.white(']'),
    chalk.grey(' : '),
    chalk.white('Connected')
  );
});
const simple = require('./lib/simple') 
const question = (text) => {
  const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//

//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
//const {Low} = require('lowdb')
//const got = (await import("got"))
//const chalk =  require('chalk')
//const { JSONFile } = ("lowdb/node")
global.db = new Low( new JSONFile(`database/database.json`))
/*global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
/https?:\/\//.test(opts['db'] || '') ?
new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
new mongoDB(opts['db']) :
new JSONFile(`./database/database.json`)
)*/
global.DATABASE = global.db // Backwards Compatibility
global.loadDatabase = async function loadDatabase() {
if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(conn), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
if (global.db.data !== null) return
global.db.READ = true
await global.db.read()
global.db.READ = false
global.db.data = {
allcommand: [],
anonymous: [],
blockcmd: [],
banned: [],
premium: [],
claim: [],
data: [],
sewa: [],
antispam: [],
dashboard: [],
listerror: [],
hittoday: [],
clearchat: [],
users: {},
chats: {},
settings : {},
kickon: {},
others: {},
...(global.db.data || {})
}
global.db.chain = _.chain(global.db.data)
}
loadDatabase()
//=================================================//
//=================================================//
async function connectToWhatsApp() {
//Connect to WhatsApp

const { state, saveCreds } = await useMultiFileAuthState("session")
const store = makeInMemoryStore({ logger: logg().child({ level: 'fatal', stream: 'store' }) })
const { isLatest } = await fetchLatestBaileysVersion()
if (global.db.data) await global.db.write() 
/*const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)*/
const zex = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: true,
      markOnlineOnConnect: false,
      generateHighQualityLinkPreview: true, 
      msgRetryCounterMap, 
      defaultQueryTimeoutMs: undefined, 
      browser: ['Chrome (Linux)', '', ''],
      auth: state,
      // To see the latest version : https://web.whatsapp.com/check-update?version=1&platform=web
      isLatest
});

   spinnies.add('start', {
      text: 'Connecting . . .'
   })
   

if(usePairingCode && !zex.authState.creds.registered) {
				const phoneNumber = await question('MASUKKAN NOMOR DENGAN AWALAN 62 UNTUK MENDAPATKAN PAIRING CODE\n');
		const code = await zex.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)
	}

//=================================================//
//Untuk menyimpan session  
const auth = {
creds: state.creds,
/** caching membuat penyimpanan lebih cepat untuk mengirim/menerima pesan */
keys: makeCacheableSignalKeyStore(state.keys, logg().child({ level: 'fatal', stream: 'store' })),
}
zex.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
zex.ev.on('messages.upsert', async (chatUpdate) => {
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return
m = simple.smsg(zex, m, store)
 
require('./ric.js')(zex, m, chatUpdate,store)
  
}catch (err){
//Log("Error bro")
console.log(err)
}
    })
/*zex.ev.on('messages.upsert', async (chatUpdate) => {
try{
if (global.db.data) await global.db.write() 
if (!chatUpdate.messages) return;
var m = chatUpdate.messages[0] || chatUpdate.messages[chatUpdate.messages.length - 1]
if (!m.message) return
if (m.key.id.startsWith('BAE5') && m.key.id.length === 16) return;
m = await smsg(zex, m, store)
 
require('./zex.js')(zex, m, chatUpdate,store)
  
} catch (err) {
console.log(err)
}
})*/

zex.ev.on('call', async (celled) => {
let botNumber = await zex.decodeJid(zex.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await zex.sendTextWithMentions(kopel.from, `*${zex.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
zex.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await zex.updateBlockStatus(kopel.from, "block")
}
}
}
})
//=================================================//

/*zex.ev.on('contacts.update', update => {
for (let contact of update) {
let id = zex.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})*/
//=================================================//
zex.getName = (jid, withoutContact  = false) => {
id = zex.decodeJid(jid)
withoutContact = zex.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zex.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === zex.decodeJid(zex.user.id) ?
zex.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//

// Welcome
zex.ev.on("groups.update", async (json) => {
console.log(json)
const res = json[0];
    try {
ppgroup = await zex.profilePictureUrl(anu.id, 'image')
  } catch {
  ppgroup = 'https://tinyurl.com/yx93l6da'
                }
			if (res.announce == true) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup has been closed by admin, Now only admin can send messages !`
zex.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.announce == false) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup has been opened by admin, Now participants can send messages !`
zex.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == true) {
				await sleep(2000)
let a = `「 Group Settings Change 」\n\nGroup info has been restricted, Now only admin can edit group info !`
zex.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if (res.restrict == false) {
				await sleep(2000)
let anu = `「Group Settings Change 」\n\nGroup info has been opened, Now participant can edit group info !`
zex.sendMessage(res.id, {
text: anu, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
                        }
                    }
                }
            );
			} else if(!res.desc == ''){
				await sleep(2000)
let a = `「Group Settings Change 」\n\n*Group desk has been changed to*\n\n${res.desc}`
zex.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true }}} );
  } else { 
await sleep(2000)
let a = `「Group Settings Change 」\n\n*Group Subject has been changed to*\n\n*${res.subject}*`
zex.sendMessage(res.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppgroup,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true 
} } });
	}
        });
	 
        zex.ev.on('group-participants.update', async (anu) => {
        console.log(anu)
        try {
            let metadata = await zex.groupMetadata(anu.id)
            let participants = anu.participants
            for (let num of participants) {
                // Get Profile Picture User
                try {
                    ppuser = await zex.profilePictureUrl(num, 'image')
                } catch {
                    ppuser = 'https://tinyurl.com/yx93l6da'
                }

                // Get Profile Picture Group
                try {
                    ppgroup = await zex.profilePictureUrl(anu.id, 'image')
                } catch {
                    ppgroup = 'https://tinyurl.com/yx93l6da'
                }
               if (anu.action == 'add') {
let ngel = fs.readFileSync('./temp/audio/welcome.mp3')
let contextInfo = {
externalAdReply: {
title: `WELCOME👋 @${num.split("@")[0]}To ${metadata.subject}`, 
body: 'Jangan Lupa Ikuti Rules Nya Ye',
//description: 'Patuhi Deskriptif Yak',
mediaType: 1,
thumbnailUrl: ppuser,
sourceUrl: "https://instagram.com/iamkizakixd",
renderLargerThumbnail: true
}
}
zex.sendMessage( anu.id,{contextInfo, audio: ngel,mimetype:'audio/mp4', ptt:true })
} 

else if (anu.action == 'remove') {
let ngel2 = fs.readFileSync('./temp/audio/left.mp3')
let contextInfo = {
externalAdReply: {
title: `GOD BYEE 👋 @${num.split("@")[0]},`, 
body: 'Balik Lagi Bawa Gorengan Yekk',
//description: 'Patuhi Deskriptif Yak',
mediaType: 1,
thumbnailUrl: ppuser,
sourceUrl: "https://instagram.com/iamkizakixd",
renderLargerThumbnail: true
}
}

zex.sendMessage( anu.id,{contextInfo, audio: ngel2,mimetype:'audio/mp4', ptt:true })
} else if (anu.action == 'promote') {
                    let a = `Ciee @${num.split("@")[0]}, Jadi Admin Nih ekhemm ${metadata.subject} 🎉`
zex.sendMessage(anu.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppuser,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
    }}})
} else if (anu.action == 'demote') {
let a = `Yhahahhaaaa @${num.split("@")[0]}, kena demote awokawok `
zex.sendMessage(anu.id, {
text: a, 
contextInfo: {
externalAdReply: {
title: `${botName}`,
body: `${ownerName}`,
thumbnailUrl: ppuser,
sourceUrl: "https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS",
mediaType: 1,
renderLargerThumbnail: true
    }}})
              }
            }
        } catch (err) {
            console.log("Eror Di Bagian Welcome Group "+err)
        }
    })

    

    

zex.sendContAngel = async (jid, number, name, quoted, options) => {
let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD
`
return await zex.sendMessage(jid, {
contacts: {
displayName: `${name}`,
contacts: [{ vcard }],
...options
}
},
{
quoted,
...options
})
}
zex.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await zex.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await zex.getName(i + '@s.whatsapp.net')}\nFN:${await zex.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:aplusscell@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/iamkizakixd\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
zex.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
zex.public = true
//=================================================//
//=================================================//
 // kredensial diperbarui -- simpan


zex.ev.on('creds.update', saveCreds)
 //=================================================//
 zex.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 zex.sendMedia = async (jid, path, quoted, options = {}) => {
      let { ext, mime, data } = await zex.getFile(path)
      messageType = mime.split("/")[0]
      pase = messageType.replace('application', 'document') || messageType
      return await zex.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
  }
 zex.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zex.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
zex.sendText = (jid, text, quoted = '', options) => zex.sendMessage(jid, { text: text, ...options }, { quoted })

 

//=================================================//
zex.sendTextWithMentions = async (jid, text, quoted, options = {}) => zex.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
   zex.sendImageAsSticker = async (jid, media, m, options = {}) => {
    let { Sticker, StickerTypes } = require('wa-sticker-formatter')
    let jancok = new Sticker(media, {
        pack:"© Zex-ID Simple WhatsApp Bot", // The pack name
        author:"Anonym ",// The author name
        type: StickerTypes.FULL, // The sticker type
        categories: ['🤩', '🎉'], // The sticker category
        id: '12345', // The sticker id
        quality: 50, // The quality of the output file
        background: '#FFFFFF00' // The sticker background color (only for full stickers)
    })
    let stok = getRandom(".webp")
    let nono = await jancok.toFile(stok)
    let nah = fs.readFileSync(nono)
   await zex.sendMessage(jid, { contextInfo: { externalAdReply: { showAdAttribution: true,
  title:"© Zex-ID Simple WhatsApp Bot",body: `${textT}`,previewType:"PHOTO",thumbnail: fs.readFileSync('./media/thumb.jpeg'),
  sourceUrl:'https://chat.whatsapp.com/Fguw4KxsP6qCBm9RfZvHOS'																																
  }}, sticker: nah }, { quoted:m})   				
  return await fs.unlinkSync(stok)
  }
 //=================================================//
zex.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await zex.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 zex.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 zex.cMod = (jid, copy, text = '', sender = zex.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === zex.user.id
return proto.WebMessageInfo.fromObject(copy)}
zex.sendFile = async(jid, PATH, fileName, quoted = {}, options = {}) => {
let types = await zex.getFile(PATH, true)
let { filename, size, ext, mime, data } = types
let type = '', mimetype = mime, pathFile = filename
if (options.asDocument) type = 'document'
if (options.asSticker || /webp/.test(mime)) {
let { writeExif } = require('./lib/sticker.js')
let media = { mimetype: mime, data }
pathFile = await writeExif(media, { packname: global.packname, author: global.packname2, categories: options.categories ? options.categories : [] })
await fs.promises.unlink(filename)
type = 'sticker'
mimetype = 'image/webp'}
else if (/image/.test(mime)) type = 'image'
else if (/video/.test(mime)) type = 'video'
else if (/audio/.test(mime)) type = 'audio'
else type = 'document'
await zex.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
zex.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}
//=================================================//
zex.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await zex.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//=================================================//

//Function to Send Media/File with Automatic Type Specifier
zex.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await zex.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try { throw { json: JSON.parse(file.toString()) } }
catch (e) { if (e.json) throw e.json }
}
let opt = { filename }
if (quoted) opt.quoted = quoted
if (!type) if (options.asDocument) options.asDocument = true
let mtype = '', mimetype = type.mime
if (/webp/.test(type.mime)) mtype = 'sticker'
else if (/image/.test(type.mime)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime)) (
//convert = await (ptt ? toPTT : toAudio)(file, type.ext),
//file = convert.data,
//pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
await zex.sendMessage(jid, {
...options,
caption,
ptt,
[mtype]: { url: pathFile },
mimetype
}, {
...opt,
...options
})
return fs.unlinkSync(pathFile)
}
 const Log = (text) =>{
  console.log(text)
 }
  
const isNumber = x => typeof x === 'number' && !isNaN(x)

let d = new Date
let locale = 'id'
let gmt = new Date(0).getTime() - new Date('1 Januari 2021').getTime()
let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
const calender = d.toLocaleDateString("id", {
day: 'numeric',
month: 'long',
year: 'numeric'
})

  

const toFirstCase = (str) =>{
 let first = str.split(" ")              // Memenggal nama menggunakan spasi
.map(nama => 
nama.charAt(0).toUpperCase() + 
nama.slice(1))                 // Ganti huruf besar kata-kata pertama
.join(" ");

return first
 }
zex.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}
zex.serializeM = (m) => smsg(zex, m, store)
zex.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect, qr } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
         spinnies.succeed('start', {
            text: `Connected To Bot WhatsApp`
         });
}
// console.log('Connected...', update)
});
global.Log = Log
global.isNumber = isNumber 
global.week = week
global.toFirstCase = toFirstCase
global.calender = calender 
return zex
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})

