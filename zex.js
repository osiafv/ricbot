require('./setting')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = require("@whiskeysockets/baileys")
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const ms = require("parse-ms")
const speed = require("performance-now")
const imageToBase64 = require ('image-to-base64')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const cheerio = require( 'cheerio')
const fetch = require('node-fetch')
const { Primbon } = require('scrape-primbon')
const { Configuration, OpenAIApi } = require('openai')
const primbon = new Primbon()
const hxz = require('hxz-api')
const ytdl = require("ytdl-core")
const calip = require ('caliph-api')
const yts = require("yt-search")
const { exec, spawn, execSync } = require("child_process")
const {  tiktokdl, tiktokdlv2, lyricsv2,  lyrics,tiktokdlv3, savefrom, instagramdlv3, instagramdlv2 } = require('@bochilteam/scraper')
//========== Via LIB =========//
let afk = require("./lib/afk");
const { userXp, userLeveling, } = require("./lib/user");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("./lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const _sewa = require('./lib/sewa')
const _prem = require("./lib/premium");
const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
const { toAudio, toPTT, toVideo } = require('./lib/converter')
 const VnExec = JSON.parse(fs.readFileSync('./src/media/vn.json'))
const StickerExec = JSON.parse(fs.readFileSync('./src/media/sticker.json'))
const ImageExec = JSON.parse(fs.readFileSync('./src/media/image.json'))
const VideoExec = JSON.parse(fs.readFileSync('./src/media/video.json'))
const { otw,marah,paan,bad,eror,fuck } = require('./temp/stickerPack.js')

let _afk = JSON.parse(fs.readFileSync('./src/data/user/afk-user.json'))
const { color, bgcolor } = require('./lib/color')
const { TelegraPh, UploadFileUgu,webp2mp4File } = require('./lib/uploader.js')
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, formatp, parseMention, getRandom, h2k, makeid, randomNomor, reSize, getGroupAdmins, sendMedia, FileSize, generateProfilePicture } = require('./lib/myfunc')
//=================================================//

/* ~~~~~~~~~ WAKTU SETEMPAT ~~~~~~~~~ */
moment.tz.setDefault("Asia/Jakarta").locale("id")

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const waktu = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if (waktu < "23:59:00") {
		var ucapanWaktu = 'Selamat Malam 🏙️'
}
if (waktu < "19:00:00") {
		var ucapanWaktu = 'Selamat Petang 🌆'
}
if (waktu < "18:00:00") {
		var ucapanWaktu = 'Selamat Sore 🌇'
}
if (waktu < "15:00:00") {
		var ucapanWaktu = 'Selamat Siang 🌤️'
}
if (waktu < "10:00:00") {
		var ucapanWaktu = 'Selamat Pagi 🌄'
}
if (waktu < "05:00:00") {
		var ucapanWaktu = 'Selamat Subuh 🌆'
}
if (waktu < "03:00:00") {
		var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}
//database
const AntiSpam = db.data.antispam
const DataId = db.data.data
const ban = db.data.banned
const premium = db.data.premium
const listcmdblock = db.data.blockcmd 
const listerror = db.data.listerror
const hitnya = db.data.hittoday
const dash = db.data.dashboard 
const anonChat = db.data.anonymous 
const allcommand = db.data.allcommand 
const sewa = db.data.sewa
const spammer = []

//=================================================//
module.exports = zex = async (zex, m, chatUpdate, store) => {

	var ownerNumber = [`${nomerOwner}@s.whatsapp.net` ,`${nomerOwner2}@s.whatsapp.net`,`${zex.user.jid}`]
const Tnow = (new Date()/1000).toFixed(0)
const { type, now, args, sender, fromMe,from,botNumber,groupMetadata,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = m

 try {
    const from = m.key.remoteJid
const fatkuns = (m.quoted || m)
const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
const qmsg = (quoted.msg || quoted)      
const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau pasang prefix ganti jadi ini : const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' 
const args = body.trim().split(/ +/).slice(1)
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 
const mime = (quoted.msg || quoted).mimetype || ''
const text = q = args.join(" ")
const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
const timestampp = speed();
const latensi = speed() - timestampp
//const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
//const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false
//==================================//
const isGroup = from.endsWith('@g.us')
const botNumber = await zex.decodeJid(zex.user.id)
const sender = m.key.fromMe ? (zex.user.id.split(':')[0]+'@s.whatsapp.net' || zex.user.id) : (m.key.participant || m.key.remoteJid)
const senderNumber = sender.split('@')[0]
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const groupMetadata = isGroup ? await zex.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const participants = isGroup ? await groupMetadata.participants : ''
const groupAdmins = isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const isBotAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
const isAdmins = isGroup ? groupAdmins.includes(sender) : false 
 const isAfkOn = afk.checkAfkUser(m.sender, _afk)
const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())

//bot respon jika button nya di tekan 
const user = global.db.data.users[m.sender]
const chat = isGroup? global.db.data.chats[m.chat] : false 
const kickon = global.db.data.kickon[m.chat]
// Database
const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
const hitnya = db.data.hittoday
//const prem = JSON.parse(fs.readFileSync("./all/database/premium.json"))
const ownerNumber = JSON.parse(fs.readFileSync("./database/owner.json"))
// C Database
const isContacts = contacts.includes(sender)
//const isPremium = prem.includes(sender)
const isOwner = ownerNumber.includes(senderNumber) || isBot
const isPremium = isOwner ? true : _prem.checkPremiumUser(sender, premium)
const gcount = isPremium ? gcounti.prem : gcounti.user
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
}
const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}
const math = (teks) => {
return Math.floor(teks)
}  
//===========================================================//  
let colors = ['red','white','black','blue','yellow','green','magenta','cyan','pink','gold','purple','navy','gray']
				const isMedia = /image|video|sticker|audio/.test(mime)
				const isImage = (type == 'imageMessage')
				const isVideo = (type == 'videoMessage')
				const isAudio = (type == 'audioMessage')
				const isText = (type == 'textMessage')
				const isSticker = (type == 'stickerMessage')
				const isQuotedText = type === 'extendexTextMessage' && content.includes('textMessage')
const isAllMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'stickerMessage' || type === 'audioMessage' || type === 'contactMessage' || type === 'locationMessage')
				const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
				const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')
				const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
				const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
				const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
				const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
				const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

//===========================================================//

//FAKE REPLY  
const ftoko = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "16505434800@s.whatsapp.net" } : {})},message: {"productMessage": {"product": {"productImage":{"mimetype": "image/jpeg","jpegThumbnail": fs.readFileSync('./media/quoted.jpg')},"title": `${pushname}`,"description": `${ucapanWaktu} kak`,"currencyCode": "IDR", "priceAmount1000": `${pushname}`, "retailerId": `Rp10`,"productImageCount": 1},"businessOwnerJid": `0@s.whatsapp.net`}}}
const fkontak = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `0@s.whatsapp.net` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync('./media/thumb.jpeg')}}}
//persen online
if(m.myButton) {return}  
zex.readMessages([m.key])
//Presence Online
if (isCmd){
zex.sendPresenceUpdate('recording', from)
} else {
zex.sendPresenceUpdate('recording', from)
}
 //User 
const userLevel = user? db.data.users[m.sender].level : false
const userExp = user? db.data.users[m.sender].exp : false
const userId = user? db.data.users[m.sender].id : false
const amountExp = Math.floor(Math.random() * 10) + 50
const requiredExp = 10000 * userLevel
const userPersen = userExp/requiredExp*100
const userVerified = user? db.data.users[m.sender].date : false
// Random Color
const listcolor = ['red','green','yellow','blue','magenta','cyan','white']
const randomcolor = listcolor[Math.floor(Math.random() * listcolor.length)]
const createSerial = (size) => {
				return crypto.randomBytes(size).toString('hex').slice(0, size)
				}            
//Console Log
try{
var virus = m.message.extendedTextMessage.contextInfo.externalAdReply.title.length
}catch{
var virus = 100
}

if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
if(isGroup && isBotGroupAdmins) zex.sendMessage(from, { delete: m.key})
if(!isGroup) zex.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
}
if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Jakarta').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
//=≠===========
const newReply = async(teks) =>{ 
zex.sendMessage(m.chat, {
	document: fs.readFileSync("./package.json"),
	fileName: 'Zex Simple Bot WhatsApp',
	mimetype: 'application.pdf',
	fileLength: 99999999999999,
	bpageCount: 10909143,	
			contextInfo: {
			mentionedJid: [sender],
forwardingScore: 9999999, 
isForwarded: true, 
			externalAdReply: {
	showAdAttribution: false,
	title: 'Zex Simple Bot WhatsApp',
	body: `${ucapanWaktu} kak ${pushname}`,
	previewType:"PHOTO",
	//caption: `oke Tunggu Bentar kak`,
	thumbnailUrl: "https://telegra.ph/file/bb39868a2de11c075e4cb.jpg",

	//sourceUrl: `${sig}`,
	}}}, { quoted: m,ephemeralExpiration: 86400});
	}
//setReply
async function setReply(teks) {
let photo = pickRandom(global.fotoRandom)
 const ngel = {
contextInfo: {
 mentionedJid: [m.sender],
 forwardingScore: 9999999, 
isForwarded: true, 
 externalAdReply: {
 showAdAttribution: true,
	title: '© Zex-ID V²',
body: `Hai  ${ucapanWaktu} kak ${pushname}`,
previewType: "PHOTO",
 thumbnailUrl: photo,
 sourceUrl: 'https://instagram/iamkizakixd'
	 }
	},
 text: teks
	};
return zex.sendMessage(m.chat, ngel, { quoted: fkontak});
};

 /* ~~~~~~~~~ RESPON DATA MEDIA ~~~~~~~~~ */
		for (let Mwuhehe of VnExec) {
						if (budy === Mwuhehe) {
								let audiobuffy = fs.readFileSync(`./media/audio/${Mwuhehe}.mp3`)
								zex.sendMessage(m.chat, {
										audio: audiobuffy,
										mimetype: 'audio/mp4',
										ptt: true
								}, {
										quoted: m
								})
						}
				}
				for (let Mwuhehe of StickerExec) {
						if (budy === Mwuhehe) {
								let stickerbuffy = fs.readFileSync(`./media/sticker/${Mwuhehe}.webp`)
								zex.sendMessage(m.chat, {
										sticker: stickerbuffy
								}, {
										quoted: m
								})
						}
				}
				for (let Mwuhehe of ImageExec) {
						if (budy === Mwuhehe) {
								let imagebuffy = fs.readFileSync(`./media/image/${Mwuhehe}.jpg`)
								zex.sendMessage(m.chat, {
										image: imagebuffy
								}, {
										quoted: m
								})
						}
				}
				for (let Mwuhehe of VideoExec) {
						if (budy === Mwuhehe) {
								let videobuffy = fs.readFileSync(`./media/video/${Mwuhehe}.mp4`)
								zex.sendMessage(m.chat, {
										video: videobuffy
								}, {
										quoted: m
								})
						}
				}





const makeid = (length) => {
		let result = '';
		const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		const charactersLength = characters.length;
		for (let i = 0; i < length; i++) {
				result += characters.charAt(Math.floor(Math.random() *
						charactersLength));
		}
		return result;
}

// Pp ini mah
try {
var ppimg = await zex.profilePictureUrl(sender, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
} catch (err) {
console.log(err)
}
const its = await getBuffer (ppimg)
const dfrply = await reSize(ppimg, 300, 300)
const vid = { url : `wa.me/6281316643491`, type : "video/mp4" }         



 //if(selectedText == "register"){
if(isCmd){
if (user) {
if (!('name' in user)) user.name = pushname
if (!('id' in user)) user.id = senderNumber
if (!isNumber(user.exp)) user.exp = 0
if (!isNumber(user.level)) user.level = 1
if (!isNumber(user.hit)) user.hit = 1
if (!isNumber(user.balance)) user.balance = 1000
if (!isNumber(user.limit)) user.limit = 30
if (!isNumber(user.glimit)) user.glimit = 30
if (!('serial' in user)) user.serial = makeid(4)
if (!isNumber(user.afk)) user.afk = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.lastclaim)) user.lastclaim = 0
if (!isNumber(user.pc)) user.pc = 0
if (!('autolevelup' in user)) user.autolevelup = false
if (!isNumber(user.pc)) user.pc = 0
if (!user.grade) user.grade = 'Newbie'

} else {
global.db.data.users[m.sender] = {
name: pushname,
id: senderNumber,
date: calender,
exp: 100,
level: 1,
hit: 0,
balance: 1000,
limit: 30,
glimit: 30,
serial: makeid(4).toUpperCase(),
lastclaim: 0,
afk: -1,
pc: 0,
grade: 'Newbie',
autolevelup: false 
}


let me = m.sender
let anu = "https://telegra.ph/file/33d58a3a7b931d3902642.jpg";

		let contextInfo = {
			externalAdReply: {
				showAdAttribution: false,
				title: "Saved to database",
				mediaType: 1,
				renderLargerThumbnail: true,
				thumbnailUrl: anu,
			},
		};
let teks =`*]───── REGISTERED ─────[*

👤 Nama: ${pushname}
☎️ Nomer: ${senderNumber}
📡 Serial: ${db.data.users[m.sender].serial}
📍 Verified: ${calender}
💸 Saldo: Rp 1000
⚜️ Grade: Newbie
🥇 Rank : 
🌀 Level : 1
 `
	await sleep(1000)
zex.sendMessage(m.chat,{contextInfo, text:teks},{quoted:m})
																																							}
}   


	//Auto Hit 
expiredCmd(hitnya, dash)
const thisHit = `${getHit("run", hitnya)}`  
//add to dashboard  db.data.allcommand.push(toFirstCase(command)) //
//if(!isGroup) //addAutoClear(m, "1h", clearchat)  
if(isCmd){
db.data.users[sender].hit += 1
cmdAdd("run", "1d", hitnya)
Succes(toFirstCase(command), dash, allcommand)
}

if (isGroup && chat) {
if (!('name' in chat)) chat.name = groupNmae
//if (!isNumber(chat.add)) chat.add = 0
if (!('detect' in chat)) chat.detect = true
if (!('sBye' in chat)) chat.sBye = ''
if (!('sPromote' in chat)) chat.sPromote = ''
if (!('sDemote' in chat)) chat.sDemote = ''
if (!('desc' in chat)) chat.desc = true
if (!('descUpdate' in chat)) chat.descUpdate = true
if (!('stiker' in chat)) chat.stiker = false
if (!('antiLink' in chat)) chat.antiLink = true
//if (!isNumber(chat.expired)) chat.expired = 0
if (!('antiBadword' in chat)) chat.antiBadword = true
if (!('antispam' in chat)) chat.antispam = true
if (!('antitroli' in chat)) chat.antitroli = false
if (!('antivirtex' in chat)) chat.antivirtex = false
if (!('antiwame' in chat)) chat.antiwame = false
if (!('viewonce' in chat)) chat.viewonce = true
if (!('nsfw' in chat)) chat.nsfw = false
if (!('antitoxic' in chat)) chat.antitoxic = false
if (!('clear' in chat)) chat.clear = false
//if (!isNumber(chat.cleartime)) chat.clearTime = 0
} else if (isGroup) global.db.data.chats[m.chat] = {
name: groupName,
add: 0,
detect: true,
welcome: true,
sWelcome: true,
sBye: '',
sPromote: '',
sDemote: '',
desc: true,
descUpdate: true,
autostiker: false,
antilink: false,
antilinkgc: false,
antidelete: false,
antiasing: false,
banchat: false,
antitoxic: true,
expired: 0,
antibadword: true,
antispam: true,
antitroli: false,
antivirtex: false,
antiwame: false,
antihidetag: false,
viewonce: true,
nsfw: false,
clear: false,
clearTime: 0
}

//STICKER
const nt = otw
const stikot = nt[Math.floor(Math.random() * nt.length)]
const sendSticker = (teks) => {
let oti = fs.readFileSync('./temp/sticker/oke tunggu.webp')
zex.sendMessage(from, {sticker: oti },{quoted: m})
}
//=============
const jan = fuck
const heh = jan[Math.floor(Math.random() * jan.length)]
const sendSticker1 = (teks) => {
let kocak = fs.readFileSync('./temp/sticker/pakyu.webp')
zex.sendMessage(from, {sticker: kocak },{quoted: m})
}
//==========
const pedo = paan
const mosi = pedo[Math.floor(Math.random() * pedo.length)]
const sendSticker2 = (teks) => {
let prosi = fs.readFileSync('./temp/sticker/why.webp')
zex.sendMessage(from, {sticker: prosi },{quoted: m})
}
//==========
const weh = marah
const awas = weh[Math.floor(Math.random() * weh.length)]
const sendSticker3 = (teks) => {
let jaga = fs.readFileSync('./temp/sticker/marah.webp')
zex.sendMessage(from, {sticker: jaga },{quoted: m})
}
//==========
const toxc = bad
const hus = toxc[Math.floor(Math.random() * toxc.length)]
const sendSticker4 = (teks) => {
let eeh = fs.readFileSync('./temp/sticker/istighfar.webp')
zex.sendMessage(from, {sticker: eeh },{quoted: m})
}
//System Expired
_sewa.expiredCheck(zex, sewa)
_prem.expiredCheck(premium) 
//-------------------- 》SECURITY《 ------------------\\
// Anti promosi HAPUS
const Promosi2 = isGroup ?

db.data.chats[from].promosi2 : false
if (isGroup && Promosi2) {
if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
if (!isBotGroupAdmins) {return} setReply(` lagi promosi awokawok`)
if (isGroupAdmins) return setReply(`Admin Mah Bebas Yakan?`)
if (isOwner) return setReply(`Gw Mah Bebas Yakan?`)
sendSticker2(mosi)
zex.sendMessage(m.chat, { delete: m.key })
zex.sendMessage(m.chat, { delete: m.key })

}
}
// ANTI TOXIC
 const isAntiToxic = isGroup ? db.data.chats[from].antitoxic : true
// ANTI TOXIC
if (isGroup && isAntiToxic) {
if (budy.match(`Anjing|Monyet|Setan|Goblog|Yatim|ngentot|Memek|Kontol|Asu|coli|sange|Bot goblog|ngewe|njing|nying|nyet`)) {
//if (isGroupAdmins) return setReply(`Alah sia admin grup mah bebas yekan :v`)
if (!isBotGroupAdmins) {return}
setReply (`*heh@${pushname} *\nKata Aneh Terdeteksi\nJangan Ulangi Lagi Hindari Admin Marah\nAtau Kamu Akan Di kick oleh Bot`)
sendSticker4(toxc)
zex.sendMessage(from, { delete: m.key })

 }
//
 }



const isAntilinkGc = isGroup ? db.data.chats[from].antilinkgc : false
 //ANTI LINK GROUP
if (isGroup && isAntilinkGc && budy.includes(`chat.whatsapp.com`) ){
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(!isBotGroupAdmins) return m.reply ('Bot bukan admin jadi gbisa hapus pesan nya :(')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await zex.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return m.reply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
await setReply(` *「 LINK GROUP DETECTED 」*\nKamu mengirimkan link group, maaf saya hapus karena antilink grub aktif`)
await sleep(2000)
if(isBotGroupAdmins) await
sendSticker3(awas)
 zex.sendMessage(from, { delete: m.key })
 //conn.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}   
const isAntiLink = isGroup ? db.data.chats[from].antilink : false
//ANTI LINK 
if (isGroup && isAntiLink){
if (budy.includes(`https:`)) { 
if (isGroupAdmins) return setReply('Alah sia admin grup mah bebas yekan :v')
if(ownerNumber.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
let linkgc = await zex.groupInviteCode(from)
if (budy.includes(`${linkgc}`)) return setReply ('Wuanjir kirain link grup lain, huh hampir aja kena kick 😆')
//if (budy.includes('zin admin') || budy.includes('zinmin') )return setReply('Izin Admin diterima')
setReply(` *「 LINK DETECTED 」*\nKamu mengirimkan link, maaf kamu di kick dari grup :(`)
setTimeout(() => {
if(isBotGroupAdmins) zex.sendMessage(from, { delete: m.key })
//zex.groupParticipantsUpdate(from, [sender], 'remove').catch((e) => { setReply(`BOT HARUS JADI ADMIN`) })
}, 2000)
}
}
const isAntiVirtex = isGroup ? db.data.chats[from].antivirtex : false
//ANTI VIRUS
if (isGroup && isAntiVirtex) {
if (budy.includes('๒๒๒๒') || budy.includes('ดุ') || budy.includes('ผิดุท้เึางืผิดุท้เึางื') || budy.includes('๑๑๑๑๑๑๑๑') || budy.includes('৭৭৭৭৭৭৭৭') || budy.includes('   ⃢   ⃢   ⃢  ') || budy.includes('*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟') || budy.includes('ผดิทุเ้ึางผืดิทุเ้') || budy.includes('.*࡞ࣰࣰࣰࣲࣲࣲࣲࣩࣩࣩࣩࣶࣶ࣯࣯࣮࣮ࣦ࣯ࣨࣨࣨࣻࣻࣻࣼࣼࣼࣽࣽࣾࣷࣵࣴ࣬࣬࣬ࣤࣤࣧࣧ*') || budy.includes('᥋') || budy.includes('؁') || budy.includes('ٯٯٯٯٯ') ) {
if (isGroupAdmins) return setReply('*VIRTEX DETECTED*')
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
	zex.sendText(m.chat, `*TANDAI TELAH DIBACA*\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n *Bang yg ngirim virtex nih:* \nwa.me/${sender.split("@")[0]}`)   
if (!isBotGroupAdmins) {return }
if(isOwner) {return}
await zex.groupParticipantsUpdate(from, [sender], 'remove')
zex.sendMessage(from, { delete: m.key })
await zex.sendMessage(`${nomerOwner}@s.whatsapp.net`,{text: `Hai Owner! wa.me/${sender.split("@")[0]} Terdeteksi Telah Mengirim Virtex ${isGroup?`di Group ${groupName}`:''}`})
 }
 }

//AREA FUNCTION NYA
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ?  zex.sendMessage(from, { text: teks, mentions: memberr, contextInfo: { "mentionedJid": memberr }}):  zex.sendMessage(from, {mentions: memberr,text: teks, contextInfo: { "mentionedJid": memberr }},{quoted: m})
}
//Jika ada yg cek bot akan merespon   
if (budy.startsWith('Bot') || budy.startsWith('bot')){
if (cekSpam("NotCase",senderNumber, AntiSpam)) return
addSpam("NotCase",senderNumber, "10s", AntiSpam)
m.reply(`${global.botName} Aktif Kak`)
}
 /* ~~~~~~~~~ RESPON USER AFK ~~~~~~~~~ */
				if (m.isGroup && !m.key.fromMe) {
						let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
						for (let ment of mentionUser) {
								if (afk.checkAfkUser(ment, _afk)) {
										let getId2 = afk.getAfkId(ment, _afk)
										let getReason2 = afk.getAfkReason(getId2, _afk)
										let getTimee = Date.now() - afk.getAfkTime(getId2, _afk)
										let heheh2 = ms(getTimee)
										setReply(`Jangan tag, dia sedang afk\n\n*Reason :* ${getReason2}`)
								}
						}
						if (afk.checkAfkUser(m.sender, _afk)) {
								let getId = afk.getAfkId(m.sender, _afk)
								let getReason = afk.getAfkReason(getId, _afk)
								let getTime = Date.now() - afk.getAfkTime(getId, _afk)
								let heheh = ms(getTime)
								_afk.splice(afk.getAfkPosition(m.sender, _afk), 1)
								fs.writeFileSync('./src/data/user/afk-user.json', JSON.stringify(_afk))
								zex.sendTextWithMentions(m.chat, `@${m.sender.split('@')[0]} telah kembali dari afk`, m)
						}
				}

//AUTO REACT
let regex =[ "bilek","banh","cum","kntl","anjing","mmk","bang","wibu","pantek","pepek","hentai"]
for (let i of regex){
if (!cekSpam("NotCase",senderNumber, AntiSpam) && isGroup && budy.toLowerCase().includes(i)){ 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
let emot = await pickRandom(["🗿", "👍", "🙄", "😝", "😏", "💩", "👻", "🔥", "🤣","🤬", "😎", "😂", "😘", "😑", "😱", "❤️", "🔥", "😳","😍","🤩","🥳","🤔","🤗","🤤","👎","👊","🙈","🤡"])
zex.sendMessage(from, { react: { text: emot, key: m.key } })	
}
}


// Jangan Di Edit Tar Error
let list = []
for (let i of ownerNumber) {
list.push({
displayName: await zex.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await zex.getName(i + '@s.whatsapp.net')}\n
FN:${await zex.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:zex@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://zex.com
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
//MAKE Sticker
async function makeSticker(media,Sticker, StickerTypes){
let jancok = new Sticker(media, {
pack: packName, // The pack name
author: pushname, // The author name
type: StickerTypes.FULL, // The sticker type
categories: ['🤩', '🎉'], // The sticker category
id: '12345', // The sticker id
quality: 70, // The quality of the output file
background: '#FFFFFF00' // The sticker background color (only for full stickers)
})
let stok = getRandom(".webp")
let nono = await jancok.toFile(stok)
let nah = fs.readFileSync(nono)
await zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: 'Zex Simple Bot WhatsApp', mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: vid.url,sourceUrl: `${sgc}`																												
}}, sticker: nah }, { quoted: fkontak })   				
await fs.unlinkSync(stok)
}	

//Download Mp3
const downloadMp3 = async (Link ) => {
try{
await ytdl.getInfo(Link);
let mp3File = getRandom('.mp3') 
ytdl(Link, {filter: 'audioonly'})
.pipe(fs.createWriteStream(mp3File))
.on("finish", async () => {  
await zex.sendMessage(from, { audio:  fs.readFileSync(mp3File), mimetype: 'audio/mp4' },{ quoted: m })
fs.unlinkSync(mp3File)
})       
} catch (err){
console.log(color(err))
}
}
const onlyLimit = async() => {
let yameteh = `Maaf kak @${sender.split('@')[0]} limit kamu sudah habis!`
zex.sendMessage(from, {text: yameteh},{quoted: m})
}

const onlyGlimit = async() => {
let kyahh = `Maaf kak @${sender.split('@')[0]} limit game kamu sudah habis!`
zex.sendMessage(from, {text: kyahh},{quoted: m})
}
const onlyOwner = async() => {
setReply(`Ngapain Kak??, Fitur ini khusus Owner Ku Tau mmm!`)
}
const onlyGroup = async() => {
let teks = `[ P R I V A T E - C H A T ]

Halo ${m.pushName} 👋.
Fitur tersebut digunakan untuk group
Fitur khusus private hanya diperbolehkan berikut ini :
╭
├ .ttpoto
├ .openai
├ .remini
╰

Akses Lebih Hanya Di Group
https://chat.whatsapp.com/GtFwrS0TqnA0FQ7xmrRUih
`+readmore+`
[  A U T O - D O W N L O A D ]

╭
├ Tiktok
├ Instagram 
╰

𝗡𝗢𝗧𝗘 :
Auto download hanya kirim linknya saja`
zex.sendMessage(from, {text: teks},{quoted: fkontak})
}
//FUNCTION TOTAL FITUR 
const totalFitur = () =>{
						var mytext = fs.readFileSync("./zex.js").toString()
						var numUpper = (mytext.match(/case '/g) || []).length;
						return numUpper
				}

	//FITUR USER PREMIUM
if(!checkDataName("premium", "", DataId)) { 
await createDataId("premium", DataId) 
}
let userPremium =  DataId.filter(item => item.name == "premium" )
for(let i of userPremium[0].id){
if(command == i && !isPremium) return setReply(`Kamu bukan user premium`)
}

//FITUR KHUSUS OWNER
if(!checkDataName("commands", "", DataId)) { 
await createDataId("commands", DataId) 

}
let ownerCommands =  DataId.filter(item => item.name == "commands" )
for(let i of ownerCommands[0].id){
if(command == i && !isOwner) return onlyOwner()
} 

//FITUR USER LIMIT
if(!checkDataName("limit", "", DataId)) { 
await createDataId("limit", DataId) 
}
let userLimit =  DataId.filter(item => item.name == "limit" )
for(let i of userLimit[0].id){
if(!isOwner && command == i ){
if(!isPremium && db.data.users[sender].limit < 1) return m.reply (`Limit kamu sudah habis silahkan kirim ${prefix}limit untuk mengecek limit`)
if(!isPremium) {
db.data.users[sender].limit -= 1
zex.sendMessage(from,{text:`Limit kamu tersisa ${db.data.users[sender].limit}`}, {quoted: fkontak})
}

}
}




// Auto Blocked Nomor +212
if (m.sender.startsWith('212')) return zex.updateBlockStatus(m.sender, 'block')
// ====== GAME FEATURE ========//
//GAME Caklontong Function
zex.caklontong = zex.caklontong ? zex.caklontong : {}  
if(isGroup && from in zex.caklontong){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.caklontong[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
 global.db.data.users[m.sender].exp += zex.caklontong[id][2]
// global.db.data.users[m.sender].tiketcoin += 1
 setReply(`*Benar!*\n+${zex.caklontong[id][2]} XP\n+1500 Money\n${json.deskripsi}`)
 clearTimeout(zex.caklontong[id][3])
 delete zex.caklontong[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi><*`)
// else setReply(`*Salah!*`)

}
	//GAME tebak gambar
zex.tebakgambar = zex.tebakgambar ? zex.tebakgambar : {}  
if(isGroup && from in zex.tebakgambar){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.tebakgambar[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.tebakgambar[id][2]
 var teks = `*GAME TEBAK GAMBAR*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.tebakgambar[id][2]} Money 💸`
	 m.reply (teks)
 clearTimeout(zex.tebakgambar[id][3])
 delete zex.tebakgambar[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}


//Game Family 100
zex.family = zex.family ? zex.family : {}
if(isGroup && from in zex.family){
if(!isGroup) {return} 
let similarity = require('similarity')
let threshold = 0.72 // semakin tinggi nilai, semakin mirip
let id =  m.chat
let room = zex.family[id]
let text = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurrender = /^((me)?nyerah|surr?ender)$/i.test(budy)
if (!isSurrender) {
let index = room.jawaban.indexOf(text)

if (index < 0) {
if (Math.max(...room.jawaban.filter((_, index) => !room.terjawab[index]).map(jawaban => similarity(jawaban, text))) >= threshold) return setReply('Dikit lagi!')
 }
if (!isCmd && room.terjawab[index]) {return} 
user.balance += room.winScore
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length

let caption = `*GAME FAMILY100*

*Soal:* ${room.soal}

Terdapat ${room.jawaban.length} jawaban${room.jawaban.find(v => v.includes(' ')) ? `
(beberapa jawaban terdapat spasi)
`: ''}
${isWin ? `*SEMUA JAWABAN TERJAWAB ✅*` : isSurrender ? '*MENYERAH ❌*' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
 return isSurrender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '✓ ' + room.terjawab[index].split('@')[0]  : ''}`.trim() : false
 }).filter(v => v).join('\n')}

${isSurrender ? '' : `+${room.winScore} Money tiap jawaban benar`}
		 `.trim()

zex.sendMessage(from, {text: `${caption}`, mentions: [room.terjawab + '@s.whatsapp.net']}, {quoted:fkontak}).then(msg => {
 zex.family[id].msg = msg
}).catch(_ => _)
if (isWin || isSurrender) delete zex.family[id] 
//if (isWin || isSurrender) clearTimeout(200000)
}
//GAME tebak lirik Function
zex.tebaklirik = zex.tebaklirik ? zex.tebaklirik : {}  
if(isGroup && from in zex.tebaklirik){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
let json = JSON.parse(JSON.stringify(zex.tebaklirik[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.tebaklirik[id][2]
 global.db.data.users[m.sender].exp += 10
	 var teks = `*GAME TEBAK LIRIK*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.tebaklirik[id][2]} Money 💸\n EXP: +10`
	 m.reply (teks)
 clearTimeout(zex.tebaklirik[id][3])
 delete zex.tebaklirik[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)
 }
	//GAME tebak kimia Function
zex.tebakkimia = zex.tebakkimia ? zex.tebakkimia : {}  
if(isGroup && from in zex.tebakkimia){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.tebakkimia[id][1]))
 let isSurender = /^((me)?nyerah|surr?ender)$/i.test(budy)

 if (budy.toLowerCase() == json.lambang.toLowerCase().trim()) {
user.balance += zex.tebakkimia[id][2]
 global.db.data.users[m.sender].exp += 10
	 var teks = `*GAME TEBAK KIMIA*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.tebakkimia[id][2]} Money 💸`
	 m.reply (teks)
 clearTimeout(zex.tebakkimia[id][3])
 delete zex.tebakkimia[id]
 } else if(similarity(budy.toLowerCase(), json.lambang.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi ><*`)
// else setReply(`*Salah!*`)
 }
//GAME MATH FUNCTION
zex.math = zex.math ? zex.math : {}
if(isGroup && from in zex.math){
if(!isGroup) {return} 
//console.log(zex.math)
try{
let id = from
if (!(id in zex.math) && /^apa hasil dari/i.test(budy)) return setReply('soal itu sudah berakhir')
let math = JSON.parse(JSON.stringify(zex.math[id][1]))
if (budy == math.result) {
user.balance += math.bonus
clearTimeout(zex.math[id][3])
delete zex.math[id]
await setReply(` benar\n\nSaldo: Rp${math.bonus}\n\nmath ${math.mode}`)
} else { 

}
}catch(err){
console.log(err)
}
}
//GAME  teka teki Function
zex.tekateki = zex.tekateki ? zex.tekateki : {}  
if(isGroup && from in zex.tekateki){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.tekateki[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.tekateki[id][2]
 var teks = `*GAME TEKATEKI*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.tekateki[id][2]} Money 💸`
 setReply(teks)
 clearTimeout(zex.tekateki[id][3])
 delete zex.tekateki[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
}
 //GAME Susunkata Function
zex.susunkata = zex.susunkata ? zex.susunkata : {}  
if(isGroup && from in zex.susunkata){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.susunkata[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.susunkata[id][2]
	 var teks = `*GAME SUSUN KATA*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.susunkata[id][2]} Money 💸`
m.reply(teks)
 clearTimeout(zex.susunkata[id][3])
 delete zex.susunkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`)

}
//GAME tebak kata Function
zex.tebakkata = zex.tebakkata ? zex.tebakkata : {}  
if(isGroup && from in zex.tebakkata){
const similarity = require('similarity')
const threshold = 0.72
let id = from

 let json = JSON.parse(JSON.stringify(zex.tebakkata[id][1]))
 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.tebakkata[id][2]
setReply(`*TEBAK KATA*

Jawaban Kamu Benar!
Bonus Saldo : +${zex.tebakkata[id][2]}
Exp : +999`)  
 clearTimeout(conn.tebakkata[id][3])
 delete zex.tebakkata[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)

}
//GAME siapa aku Function
zex.siapaaku = zex.siapaaku ? zex.siapaaku : {}  
if(isGroup && from in zex.siapaaku){
if(!isGroup) {return} 
const similarity = require('similarity')
const threshold = 0.72
let id = m.chat
 let json = JSON.parse(JSON.stringify(zex.siapaaku[id][1]))

 if (budy.toLowerCase() == json.jawaban.toLowerCase().trim()) {
user.balance += zex.siapaaku[id][2]
var teks = `*GAME SIAPAKAH AKU*\n\nJawaban Kamu Benar!\n Hadiah : +${zex.siapaaku[id][2]} Money 💸`
	 m.reply (teks)
 clearTimeout(zex.siapaaku[id][3])
 delete zex.siapaaku[id]
 } else if(similarity(budy.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold) setReply(`*Dikit Lagi!*`)
// else setReply(`*Salah!*`) 
}

				//Game Suit PvP
			zex.suit = zex.suit ? zex.suit : {}
			let roof = Object.values(zex.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(sender))
			if (roof) {
			let win = ''
			let tie = false
			if (sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(budy) && isGroup && roof.status == 'wait') {
			if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(budy)) {
			zex.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, dev)
			delete zex.suit[roof.id]
			return !0
			}
			roof.status = 'play'
			roof.asal = m.chat
			clearTimeout(roof.waktu)
			//delete roof[roof.id].waktu
			zex.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
			if (!roof.pilih) zex.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
			if (!roof.pilih2) zex.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
			roof.waktu_milih = setTimeout(() => {
			if (!roof.pilih && !roof.pilih2) zex.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
			else if (!roof.pilih || !roof.pilih2) {
			win = !roof.pilih ? roof.p2 : roof.p
			zex.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
			}
			delete zex.suit[roof.id]
			return !0
			}, roof.timeout)
			}
			let jwb = sender == roof.p
			let jwb2 = sender == roof.p2
			let g = /gunting/i
			let b = /batu/i
			let k = /kertas/i
			let reg = /^(gunting|batu|kertas)/i
			if (jwb && reg.test(budy) && !roof.pilih && !isGroup) {
			roof.pilih = reg.exec(budy.toLowerCase())[0]
			roof.text = budy
			setReply(`Kamu telah memilih ${budy} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
			if (!roof.pilih2) zex.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			if (jwb2 && reg.test(budy) && !roof.pilih2 && !isGroup) {
			roof.pilih2 = reg.exec(budy.toLowerCase())[0]
			roof.text2 = budy
			setReply(`Kamu telah memilih ${budy} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
			if (!roof.pilih) zex.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
			clearTimeout(roof.waktu_milih)
			if (b.test(stage) && g.test(stage2)) win = roof.p
			else if (b.test(stage) && k.test(stage2)) win = roof.p2
			else if (g.test(stage) && k.test(stage2)) win = roof.p
			else if (g.test(stage) && b.test(stage2)) win = roof.p2
			else if (k.test(stage) && b.test(stage2)) win = roof.p
			else if (k.test(stage) && g.test(stage2)) win = roof.p2
			else if (stage == stage2) tie = true
			zex.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
			delete zex.suit[roof.id]
			}
			}
//ANONYMOUS CHAT
let secreto = JSON.parse(fs.readFileSync('./database/secreto_balas.json'))
const anonChat = db.data.anonymous
const roomChat = Object.values(anonChat).find(room => [room.a, room.b].includes(m.sender) && room.state == 'CHATTING')
const roomA = Object.values(anonChat).find(room => room.a == m.sender)
const roomB = Object.values(anonChat).find(room => room.b == m.sender )
const room = Object.values(anonChat).find(room => room.state == 'WAITING' && room.b == "")

if (roomChat && !isCmd && !isGroup && roomChat.b !=="") {
//let nono = m.quoted.fakeObj? m.quoted.fakeObj : m
let other = [roomChat.a, roomChat.b].find(user => user !== m.sender)
m.copyNForward(other, true)
}

if (room && Date.now() >= room.expired){

await zex.sendMessage(room.a, {text:"Partner tidak di temukan\nKamu telah keluar dari room anonymous"})
anonChat.splice(anonChat.indexOf(room, 1)) 
}
		// Secreto
							if(!isGroup){
								if (!m.key.fromMe && secreto.find(i => i.sender === sender)) {
									 var dbx = secreto.find(i => i.sender === sender)
									 if (dbx.status === 'ENTER-MESSAGE') {
										 if (['conversation', 'extendedTextMessage'].includes(m.type)) {
											 var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya:\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
											 zex.sendMessage(dbx.pengirim, { text: teks_balasan })
											 m.reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
										 } else {
											 var teks_balasan = `Hai kak, kamu menerima pesan balasan nih\n\nPesan Balasannya :\n${budy}\n\n\n_ingat pesan ini satu kali kirim saja yaa_`
											 var pes = await zex.sendMessage(dbx.pengirim, { text: teks_balasan })
											 zex.sendMessage(dbx.pengirim, { forward: m }, { quoted: pes })
											 m.reply(`Sukses mengirimkan balasan, ingat pesan ini satu kali kirim saja yaa`)
										 }
										 var pos = secreto.indexOf(dbx)
										 secreto.splice(pos, 1)
										 fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto, null, 2))
									 }
								}
							}
switch (command) {
case 'confes':
								case 'menfess': case 'menfes': {
									 if (isGroup) return setReply('Khsus Private Chat Bot')
									 if (args.length < 1) return setReply (`*Cara penggunaan :*\n${prefix+command} nomer|nama pengirim|pesannya\n\n*Note :* nomer harus format internasional dan nama pengirim boleh nama samaran atau rahasia\n\n*Contoh :* ${prefix+command} ${botNumber.split("@")[0]}|Seseorang|Hai Kak`)
									 var no = q.split('|')[0];
									 if (isNaN(no)) return setReply (`Tujuan Harus Berupa Nomor!\n\nContoh :\n${command} `+botNumber.split("@")[0]+'|Anonim|Hai Kak')
									 var num = no.replace(/[^0-9]/g, ""); 
									 var name = q.split('|')[1]; 
									 var pesan = q.split('|')[2];
										if (!num) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
									 if (!name) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
									 if (!pesan) return setReply (`Format salah, contoh pemakaian : ${prefix+command} ${botNumber.split("@")[0]}|Anonim|Hai Kak`)
									var num = num.replace(/[^0-9]/gi, '')+'@s.whatsapp.net'
									 var cek = await zex.onWhatsApp(num)
									 if (cek.length === 0) return setReply (`Nomer yang anda masukkan tidak terdaftar di WhatsApp!`)
									 var num = cek[0].jid
									 if (sender === num) return setReply (`Jangan kirim ke diri sendiri dong🥲`)
									 if (botNumber === num) return setReply (`Jangan kirim ke nomer bot kak🥲`)
									 var teks = `Hi Saya *${botName}* Ada Yang Kirim Pesan Rahasia Untuk Kamu Nih 🥳

🌷 Nama Pengirim: *${name}*

💌 Pesan : ${pesan}


*NOTE*:
_Ketik .balas dan geser ke kanan pesan ini untuk menjawab pesan seseorang tersebut_
`                

									 if(isImage || isQuotedImage){
										const media = await zex.downloadAndSaveMediaMessage(quoted)
									 const anu = await TelegraPh(media) 
									 zex.sendMessage(num, {caption: teks, image: {url: anu}, mentions: [sender]})
										await sleep(2000)
									 zex.sendMessage(num, {image: {url: 'https://telegra.ph/file/b089dfb307251ad5e5559.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
									 } else if(isVideo || isQuotedVideo){
									 const media = await zex.downloadAndSaveMediaMessage(quoted)
									 const anu = await TelegraPh(media) 
									 zex.sendMessage(num, {caption: teks, video: {url: anu}, mentions: [sender]})
										await sleep(2000)
									 zex.sendMessage(num, {image: {url: 'https://telegra.ph/file/0ca9c64720e7728535491.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})
									 } else {
									 zex.sendMessage(num, {text: teks, mentions: [sender]})
										await sleep(2000)
									 zex.sendMessage(num, {image: {url: 'https://telegra.ph/file/15b96750f11c403727c6e.jpg'}, caption: 'Contoh cara membalas pesan rahasia'})      
									 }
										 m.reply(`Sukses mengirim pesan Rahasia kepada ${num.split("@")[0]}`)
									 }
									 break
case 'balas':{
										if(isGroup) return
										if(!mentionByReply) return m.reply('Balas pesan bot yang isinya menfess di atas')
										if(!m.quoted.text.includes('Hi Saya')) return m.reply('Balas/Reply pesan bot yang isi menfes di atas')
										var isSecreto = secreto.find(i => i.sender === sender)
										if (isSecreto) {
										 if (isSecreto.status === 'ENTER-MESSAGE') {
											 m.reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
										 }
									 } else {
										 var obj = {
											 sender: sender,
											 pengirim: m.quoted.mentionedJid[0],
											 status: 'ENTER-MESSAGE'
										 }
										 //console.log(obj)
										 secreto.push(obj)
										 fs.writeFileSync('./database/secreto_balas.json', JSON.stringify(secreto))
										 m.reply(`Mau dibalas apa kak? Silahkan kirim pesan balasannya`)
									 }
									 }
									 break   

case 'cr': case 'credits': case 'tqto': case 'thanksto': {
let me = m.sender

let tqto = `─┉┈◈ * THANKS TO *◈┈┉

╭── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╮
» Allah SWT 
» Orang Tua
» Penyedia Module & Api
» DikaArdnt
» DITTAZ
» Hashira
» Ehanz
» Zakk [ kizakixd ]
╰── ⋅ ⋅ ── ✩ ── ⋅ ⋅ ──╯
`
zex.sendMessage(from, { 
text: tqto,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `Main Tqto`,
"body": `Date : ${week}, ${calender}`,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/d7e614f7a1d2412f67223.jpg",
"sourceUrl": `${sig}`
}
}
},{ 
quoted: fkontak })
			}
			break

	case 'help': case 'menu':{
if (!isGroup) return onlyGroup()
let hoshino = [ "https://telegra.ph/file/3aa8cfea605710aef851c.jpg","https://telegra.ph/file/1e3235ecb315f3dd7d73b.jpg" ]
let ngel = fs.readFileSync('./temp/audio/menu2.mp3')
let ehe = [
 '■□□□□□□□□□ 10%',
 '■■□□□□□□□□ 20%',
 '■■■■□□□□□□ 40%',
 '■■■■■■□□□□ 60%',
 '■■■■■■■■□□ 80%',
 '■■■■■■■■■■ 100%',
`ᴄᴏᴍᴘʟᴇᴛᴇ!`
 ]

let { key } = await zex.sendMessage(m.chat, {text: 'wait!!'})//Pengalih isu

for (let i = 0; i < ehe.length; i++) {
await zex.sendMessage(m.chat, {text: ehe[i], edit: key });
}
let {fitur} = require('./src/allmenu.js')
let amm = require('./src/allmenu.js').allmenu(isPremium,thisHit, sender, prefix, pushname)
let fiturnya = fitur()

/*
 zex.sendMessage(m.chat, {
document: fs.readFileSync("./package.json"),
fileName: '',
mimetype: "application/pdf", 
caption: `${amm}${fiturnya}`,
contextInfo: {
externalAdReply: {
showAdAttribution: true,
title: '© Zex Simple WhatsApp Bot V²',
body: `Hai  ${ucapanWaktu} kak ${pushname}` ,
thumbnailUrl:
 await pickRandom(hoshino),
sourceUrl: 'https://chat.whatsapp.com/GtFwrS0TqnA0FQ7xmrRUih',
mediaType: 1,
renderLargerThumbnail: true 
}}}, { quoted: m,ephemeralExpiration: 86400});  
*/
zex.sendMessage(from, { 
text:amm+fiturnya,
contextInfo:{
forwardingScore: 9999999,
isForwarded: true, 
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `© Zex-ID Simple WhatsApp Bot`,
"body": ``,
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": "https://telegra.ph/file/bdc7b334d267ec27ba243.jpg",
"sourceUrl": `https://whatsapp.com/channel/0029VaTHABeJJhzcfse0go1c`
}
}
},{ 
quoted: m })
}
break


 case 'rules':{
let teks =`
Syarat dan Ketentuan menggunakan *${fake}*

1. Nama dan nomer user ${fake}
akan Kami simpan di dalam
server selama bot aktif

2. Data akan di hapus ketika bot Offline
atau di hapus oleh Owner Bot

3. Kami tidak menyimpan gambar,
video, file, audio, dan dokumen
yang kamu kirim ke ${fake}

4. Kami tidak akan pernah meminta users
untuk memberikan informasi pribadi

5. Jika menemukan Bug/Error silahkan
langsung lapor ke Owner atau Developer
atau bisa juga memakai fitur _*reportbug*_

6. Beberapa fitur mungkin ada yang error,
jadi tunggu sampai developer
meperbaiki fitur tersebut

8. Bot ini sudah di lengkapi dengan
fitur _*Auto laporerror*_ jika terjadi
error maka bot akan auto report ke
developer, terkecuali error yang
menyebabkan bot mati, maka user
harus lapor ke developer

7. Bot ini juga sudah di lengkapi dengan
Fitur Anti Spam jika kamu terdeteksi
melakukan spam, maka Bot tidak
akan menanggapi kamu selama 20 detik

9. User dilarang keras menelpon bot!
jika melanggar maka kamu akan terkena
banned,block dan dikirim bug

10. Bot tidak akan menanggapi user yang
meminta untuk di save nomernya`
zex.relayMessage(from, { liveLocationMessage: { 
degreesLatitude: 35.676570,
degreesLongitude: 139.762148,
caption : teks,
sequenceNumber: 1656662972682001, timeOffset: 8600, jpegThumbnail: null,
contextInfo: {
mentionedJid: [m.sender],
externalAdReply: {
containsAutoReply: true,
showAdAttribution: true,
}
}
}
}, { quoted: fkontak })
}
break
//=========== AREA GRUP NYA ===========//
case 'on':
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.only.admin)
setReply(`*[ Silakan di pilih ]*

- antivirtex
- antilink
- antitoxic
- antilinkgc
- antipromosi



contoh : 
.antilinkgc on untuk mengaktifkan
.antilinkgc off untuk menonaktifkan`)
break
case 'setppgc':{
if (!isGroupAdmins) return setReply(mess.only.admin)
if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
if (/image/.test(mime)){
let media = await zex.downloadAndSaveMediaMessage(quoted,makeid(5))
await zex.updateProfilePicture(from, { url: media })
.then( res => {
setReply(`Sukses`)
fs.unlinkSync(media)
}).catch(() => m.reply(mess.error.api))
} else {
setReply(`Kirim/balas gambar dengan caption ${command}`)
}
}
break
case 'setnamegc': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text nya ?')
await zex.groupUpdateSubject(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Subjek Grup✅`)
}
break
case 'infogc': {
if(!isGroup) return setReply("Hanya bisa di dalam group")
let _meta = await zex.groupMetadata(from)
	console.log(_meta)
let _img = await zex.profilePictureUrl(_meta.id, 'image') 
let caption = `${_meta.subject} - Created on ${moment(_meta.creation * 1000).format('ll')}\n\n` +
`*${_meta.participants.length}* Total Members\n*${_meta.participants.filter(x => x.admin === 'admin').length}* Admin\n*${_meta.participants.filter(x => x.admin === null).length}* Not Admin\n\n` +
`Group ID : ${_meta.id}`
await zex.sendMessage(from,{
caption,
image: await getBuffer(_img)
},
{ quoted: m }
)
}
break
case  'getppgc':
	if (!isGroup) return 
	setReply(mess.wait)
	try {
	var ppimg = await zex.profilePictureUrl(from, 'image')
	} catch (err) {
	console.log(err)
	var ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
	}
	await zex.sendMessage(from, { image: { url: ppimg }}, { quoted: m })
	break

case 'setdesc':{
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!q) return setReply('Text Nya ?')
await zex.groupUpdateDescription(from, q).then((res)).catch((err) => setReply(jsonformat(err)))
setReply(`Sukses Edit Deskripsi Grup✅`)
}
break
if (!isGroup) return onlyGroup()
case 'closegroup': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zex.groupSettingUpdate(from, 'announcement')
setReply(`Waktu Telah Tiba!\nGrup Ditutup Oleh Bot Dikarenakan Tidak Ada Yg Menjaga Grup🙏\nGrup Akan Dibuka Sesuai Waktu Yg Ditentukan Oleh Admin`)
}, timer)
}
break
case 'opengroup': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
if (!args[0]) return setReply(`*Pilih Waktu:*\n-second\n-minute\n-hour\n-day\n\n*Contoh:*\n${prefix+command}10 second`)
if (args[1] == 'second') {
var timer = args[0] * `1000`
} else if (args[1] == 'minute') {
var timer = args[0] * `60000`
} else if (args[1] == 'hour') {
var timer = args[0] * `3600000`
} else if (args[1] == 'day') {
var timer = args[0] * `86400000`
}
setReply(`*Waktu dimulai dari sekarang*`)
setTimeout(() => {
var nomor = m.participant
zex.groupSettingUpdate(from, 'not_announcement')
setReply(`Tepat Waktu Group Sudah Di Buka Sekarang Semua Peserta Bisa Mengirim Pesan`)
}, timer)
}
break
case 'promote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await zex.groupParticipantsUpdate(from, [users], 'promote')
setReply(`@${users} Naik Jabatan Menjadi Admin Group😎`)
}
break
case 'demote': {
if (!isGroup) return onlyGroup()
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+"@s.whatsapp.net"
await zex.groupParticipantsUpdate(from, [botNumber], 'demote')
setReply(`@${users} Turun Jabatan Menjadi Member Biasa🗿`)
}
break
case  'intro': {
if (!isGroup) return onlyGroup()
let teks = 'Member baru INTRO  :)\nNama lengkap:\nNama panggilan:\nHobi:\nUmur:\nGender:\nKelas:\nTinggi badan:\nBeratbadan :\nAgama:\nGolongan darah:\nStatus:\nNama pacar:\nJumlah mantan:\nNama mantan:\nNama bapak :\nNama ibu : \nNama kakak:\nKakak online:\nKakak kandung\tiri:\nJumlah kakak:\nNama adek:\nAdek online:\nAdek kandung\tiri:\nJumlah adek:\nNama kakek:\nKakek dari ayah :\nKakek dari ibu :\nNama nenek:\nNenek dari ayah :\nNenek dari ibu :\nNama bibi:\nBibi dari ayah :\nBibi dari ibu :\nNama paman:\nBibi dari ayah :\nBibi dari ibu :\nKTP:\nSIM:\nSTNK:\nBPKB:\nKK:\nAlamat rumah:\nRT:\nRW:\nKELURAHAN:\nKECAMATAN:\nKABUPATEN:\nKOTA:\nPROVINSI:\nPLANET:\nGALAXY:\nUNIVERSE:\nLANGIT:\nDARATAN:\nLAUTAN:\nKEPULAUAN:\nSAMUDRA:\nUKURAN SEPATU:\nUKURAN BAJU:\nUKURAN CELANA:\nLEBAR PINGGANG:\nPANJANG TANGAN:\nPANJANG KAKI:\nMAKANAN FAVORIT:\nMINUMAN FAVORIT:\nFILM FAVORIT:\nSINETRON FAVORIT:\nGAME FAVORIT:\nANIME FAVORIT:\nMANGA FAVORIT:\nMANHUA FAVORIT:\nMANHWA FAVORIT:\nCHANNEL YOUTUBE:\nINSTAGRAM:\nTWITTEER:\nFACEBOOK:\nMUSIC FAVORIT:\nSIFAT:\nSIKAP:\nZODIAK:\nTANGGAL LAHIR:\nMERK HP:\nMERK MOTOR:\nMERK MOBIL:\nTINGKAT RUMAH:\nALAMAT SEKOLAH:\nUkuran daleman:\nUkuran atasan :\nDiameter kepala :\nStatistik tubuh:\nDiameter perut :\nDiameter lengan :\nDiameter paha :\nDiameter lutut :\nDiameter betis:\nPanjang tangan :\nPanjang kaki :\nPanjang kepala :\nLebar hidung :\nCita cita :\nHobi :\nJenis hewanpeliharaan :\nNama hewan:\nDiameter rumah:\nWaifu:\nHusbu:\nLoli kesukaan :\nShota kesukaan :\nPunya brp teman :\nTeman online :\nTeman offline :\nTeman main game:\nTeman sekolah:\nTemen rumah:'
setReply(teks)
}
break    
case 'hidetag':
if (!isGroup) return setReply(mess.only.group)
if (!isGroupAdmins && !isOwner) return m.reply(mess.only.admin)
let mem = [];
groupMembers.map( i => mem.push(i.id) )
zex.sendMessage(from, { text: q ? q : '', mentions: mem })
break
case "tagall": {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
if (!q) return setReply(`Teks Nya Mana Kak?`)
let teks = `${q ? q : ''}hai bebban\n‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎ \n`
for (let mem of participants) {
teks += `⊝ @${mem.id.split('@')[0]}\n`
}
zex.sendMessage(from, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'kick': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zex.groupParticipantsUpdate(from, [users], 'remove')
}
break
case 'add': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let users = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await zex.groupParticipantsUpdate(from, [users], 'add')
}
break
case 'linkgroup': case 'linkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
let response = await zex.groupInviteCode(from)
zex.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'resetlinkgroup': case 'resetlinkgc':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!m.isGroup) return setReply(mess.only.group)
if (!isBotAdmins) return setReply(mess.only.badmin)
zex.groupRevokeInvite(from)
}
break
case 'bcmem':{
			if (!isGroup) return m.reply(mess.only.group)
				if (!isOwner) return m.reply(mess.owner);
				if (!q) return m.reply(`Teks Nya Bang?\nContoh: ${prefix+command} Hallo`);
 setReply("waitt.....! sedang memuat")
				let mem = [];
			groupMembers.map( i => mem.push(i.id) )
			 // let anu = await store.chats.all().map((v) => v.id);
				for (let yoi of mem) {
					if (yoi.includes('.net')) {
						await sleep (6000)
						zex.sendMessage(yoi, {text: `${q}`});
					}
				}
				m.reply(`Succes`);
				}
				break;
case 'jadian': {
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let orang = member[Math.floor(Math.random() * member.length)]
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Ciee yang jadian ❤️ Jangan lupa pajak jadiannya yee

@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
let menst = [orang, jodoh]
zex.sendMessage(from, { text: jawab, mentions: menst },{quoted: m}) 
}
break
case 'jodohku':{
if (!isGroup) return onlyGroup()
let member = groupMembers.map(u => u.id)
let jodoh = member[Math.floor(Math.random() * member.length)]
let jawab = `Jodoh kamu adalah @${jodoh.split('@')[0]}`
let menst = [jodoh]
zex.sendMessage(from, { text: jawab, mentions: menst }, { quoted: m })
}
break
case 'caridoi':
		case 'cariteman':{
	 if (!isGroup) return onlyGroup()
		let userny = Object.values(db.data.users);
		let teman = pickRandom(userny)
		let namTemen = teman.name
		let nomerTemen = teman.id
		setTimeout(() => {
		setReply('Sedang mencari....')
		}, 1000)
		setTimeout(() => {
		setReply('Berhasil mendapatkan satu org')
		}, 5000)
		setTimeout(() => {
		zex.sendContAngel(from, nomerTemen, namTemen, m)
		}, 9000)
		}
		break
						case 'afk':
								if (!m.isGroup) return setReply(mess.group)
								if (isAfkOn) return setReply("Kakak Sudah Afk Sebelumnya")
								let reason = q ? q : 'Nothing.'
								afk.addAfkUser(m.sender, Date.now(), reason, _afk)
								let kyah = (`@${m.sender.split('@')[0]} Sedang AFK\nDengan Alasan : ${reason}`)

								zex.sendMessage(from, { 
text: `${kyah}`,
contextInfo:{
mentionedJid:[m.sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${botName}`,
"body": 'Zex-ID V²',
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/a3bba1fe230159c82e6d3.jpg' ,
}
}
},{ 
quoted: m })

break
case 'tagme':{
if (!isGroup) return onlyGroup()
let menst = [sender]
zex.sendMessage(from, { text: `@${senderNumber}`, mentions: menst })
}
break
case 'listgc': {
if(!isOwner) return setReply(mess.only.owner)
let getGroups = await zex.groupFetchAllParticipating()
 //console.log(getGroups)
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
let teks = `*Group chat*\n\nTotal: ${anu.length} Group\n\n`
for (let i of anu) {
let metadata2 = await zex.groupMetadata(i)
teks += `◉ Nama : ${metadata2.subject}\n◉ Owner : ${metadata2.owner !== undefined ? '@' + metadata2.owner.split`@`[0] : 'Tidak diketahui'}\n◉ ID : ${metadata2.id}\n◉ Dibuat : ${moment(metadata2.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n` 
 }
zex.sendTextWithMentions(from, teks, m)
}
break
	case 'listpc': {
if(!isOwner) return setReply(mess.only.owner)
let anulistp = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
let teks = `*Private Chat*\nTotal: ${anulistp.length} Chat\n\n`
for (let i of anulistp) {
let nama = store.messages[i].array[0].pushName
teks += `*Name :* ${pushname}\n*User :* @${sender.split('@')[0]}\n*Chat :* https://wa.me/${sender.split('@')[0]}\n\n───────────\n\n`
}
setReply(teks)
}
break
case 'laporerror':{
let reportzhir = args[0]
if (!reportzhir) return setReply(`Contoh:\n.laporbug menu tidak muncul`)
let duhhh = text.split('|')[0]
let text12 = `「 *Report Bug* 」
*Pesan:* ${duhhh}
*Dari:* @${sender.split('@')[0]}
Ketik *.accerror* Jika Ingin Menerima Laporan
Jika Ingin Menolak Biarin Aja🗿`
setReply(`Oke Kak Reportmu Sudah Terkirim Ke Owner`)
zex.sendMessage(6281316643491 + "@s.whatsapp.net",{image: { url: `https://telegra.ph/file/df778c74a8f0417235acf.jpg`}, caption: text12, mentionedJid:[sender], quoted: m })
}
break
case 'accerror': {
if (!isOwner && !isAdmins) return setReply()
let zhiratxt = `_Terima Kasih Atas Laporan Anda! Laporan Sudah Diterima oleh kami,Tunggu 1 - 3 Hari Agar Owner Bisa Memperbaikinya_`
let targetNumber = `${q.split(",")[0]}@s.whatsapp.net`;

	zex.sendMessage(targetNumber, {
		text: `*${zhiratxt}*`,
		mentionesJid: [sender]
	}, {
		quoted: m
	}).then(() => {
		setReply(`Acc berhasil!`);
	}).catch(() => {
		setReply(`Gagal mengirim pesan!`);
	});
}
break

case 'del': case 'delete': case 'd':{     if (!isGroup) return onlyGroup()
				 if (!isOwner && isBotAdmins) return m.reply("ga maoo")
if (!isAdmins) return setReply(mess.admin)
zex.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break 
case 'ban': {

if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await zex.updateBlockStatus(users, 'block').then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
}
break
case 'unban': {
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
if (!isGroup) return setReply(mess.only.group)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
await zex.updateBlockStatus(users, 'unblock').then((res) => setReply(jsonformat(res))).catch((err) => setReply(jsonformat(err)))
}
break
//============ KE AMANAN ===========/)
case 'antilinkgc':{
		if (!isGroup) return onlyGroup()
		if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntilinkGc) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilinkgc = true
	let ih =`Fitur antilink group telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntilinkGc) return setReply('Udah mati')
	db.data.chats[from].antilinkgc = false
	let ih =`Fitur antilink group telah di matikan`
	setReply(ih)
	}else if (!q) {
		setReply ( `*MODE ANTI LINK GRUB*\n ${prefix+command} on/off`)
	 }
	 }
	break;  
	 case 'antipromosi': {
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if (args[0] === "on") {
if (db.data.chats[m.chat].promosi2) return setReply(`Sudah Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = true
setReply(`antipromosi Aktif !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].promosi2) return setReply(`Sudah Tidak Aktif Sebelumnya`)
db.data.chats[m.chat].promosi2 = false
setReply(`antipromosi Tidak Aktif !`)
} else {
setReply(`Mode ${command}\n\n\nKetik ${prefix + command}on/off`)
}
}
break
 case 'antitoxic':{
if (!isGroup) return onlyGroup()
if (!isGroupAdmins) return setReply(mess.Badmin)
if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
if (isAntiLink) return setReply('Fitur sudah aktif kak')
db.data.chats[from].antitoxic = true
let ih =`Fitur ${command} telah di aktifkan`
setReply(ih)
} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
if (!isAntiLink) return setReply(`Fitur ${command} sudah off`)
db.data.chats[from].antitoxic = false
let ih =`Fitur ${command} telah di matikan`
setReply(ih)
} else if (!q) {
setReply(`Mode ${command}\n• .${command} on \n• .${command} off`)
}
}
break
case 'antilink':{
		if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
		if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiLink) return setReply('Fitur sudah aktif kak')
	db.data.chats[from].antilink = true
	let ih =`Fitur antilink telah di aktifkan`
	setReply(ih)
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiLink) return setReply('Fitur Anti link sudah off')
	db.data.chats[from].antilink = false
	let ih =`Fitur antilink telah di matikan`
	setReply(ih)
	} else if (!q) {
		setReply ( `*MODE ANTI LINK*\n ${prefix+command} on/off`)
	}
	}
	break;          
case 'antivirtex':{
	if (!isGroup) return setReply(mess.group)
	if (!isGroupAdmins && !isOwner) return setReply(mess.only.admin)
	if (!isBotGroupAdmins) return setReply(mess.only.Badmin)
	 if ((args[0]) === 'on' || (args[0]) === 'enable' || (args[0]) === '1' ) {
	if (isAntiVirtex) return setReply("Sudah aktif!!");
	db.data.chats[from].antivirtex = true
	setReply("Sukses mengaktifkan antivirtex!");
	} else  if ((args[0]) === 'off' || (args[0]) === 'disable' || (args[0]) === '0') {
	if (!isAntiVirtex) return setReply("Udah off!!");
	db.data.chats[from].antivirtex = false
	setReply("Sukses mematikan antivirtex!");
	} else if (!q) {
	setReply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
	 }
	 }
	break;




		//============ ISLAMIC ============//
 case 'kisahnabi':
 if (!isGroup) return onlyGroup()
			if (args.length == 0) return m.reply(`Example: ${prefix + command} Muhammad`)
			m.reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/kisahnabi/${q}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var nabi = `Name : ${data.result.name}\n`
					nabi += `Lahir : ${data.result.thn_kelahiran}\n`
					nabi += `Umur : ${data.result.age}\n`
					nabi += `Tempat : ${data.result.place}\n`
					nabi += `Story : \n${data.result.story}`
					m.reply(nabi)
				})
				.catch(console.error)
			break
 case 'alquran':
if (!isGroup) return onlyGroup()
			if (args.length < 1) return setReply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
			setReply(mess.wait)
			axios
				.get(`https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${api.Lol}`)
				.then(({ data }) => {
					var ayat = data.result.ayat
					var text = `QS. ${data.result.surah} : 1-${ayat.length}\n\n`
					for (var x of ayat) {
						text += `${x.arab}\n${x.ayat}. ${x.latin}\n${x.indonesia}\n\n`
					}
					text = text.replace(/<u>/g, '_').replace(/<\/u>/g, '_')
					text = text.replace(/<strong>/g, '*').replace(/<\/strong>/g, '*')
					setReply(text)
				})
				.catch(console.error)
						break
 case 'islamic': 
case 'randomislam': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/Islamic.json`)
let f = await g.json()
let a = f[Math.floor(Math.random() * f.length)]
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                            
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Zex Simple Bot WhatsApp`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url: a}, caption: `${mess.success}` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
				//=========== AREA FUN ============//
 case 'sc': case 'script':{
			zex.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'INR',
			amount1000: 1234567,
			requestFrom: m.sender,
			noteMessage: {
			extendedTextMessage: {
			text: `
			SCRIPT : https://www.youtube.com/@kizakixd
			© Zex Simple WhatsApp Bot
`,
			contextInfo: {
			externalAdReply: {
			showAdAttribution: true
			}}}}}}, {})
			}
			break
	case 'joincall':{
if (!isGroup) return onlyGroup()
zex.relayMessage(m.chat, {
		scheduledCallCreationMessage: {
		callType: "VIDEO",		
		scheduledTimestampMs: 12000,
		title: `Slep Call🗿\n\n
═══ Rangel Multidevice☙\n\n`,		
		inviteCode: 'yandex.com',
		}
	}, {})
	}
	break
 case 'kodebahasa':{
	let LANGUAGES = `
	*╭─❲ KODE BAHASA ❳*
	*│*
	*│▸* af: Afrikaans 
	*│▸* sq: Albanian
	*│▸* ar: Arabic
	*│▸* hy: Armenian
	*│▸* ca: Catalan 
	*│▸* zh: Chinese 
	*│▸* zh-cn: Chinese (Mandarin/China)
	*│▸* zh-tw: Chinese (Mandarin/Taiwan)
	*│▸* zh-yue: Chinese (Cantonese)
	*│▸* hr: Croatian
	*│▸* cs: Czech
	*│▸* da: Danish
	*│▸* nl: Dutch
	*│▸* en: English    
	*│▸* en-au: English (Australia)
	*│▸* en-uk: English (United Kingdom)
	*│▸* en-us: English (United States) 
	*│▸* eo: Esperanto 
	*│▸* fi: Finnish 
	*│▸* fr: French
	*│▸* de: German
	*│▸* el: Greek 
	*│▸* ht: Haitian Creole 
	*│▸* hi: Hindi 
	*│▸* hu: Hungarian 
	*│▸* is: Icelandic 
	*│▸* id: Indonesian 
	*│▸* it: Italian
	*│▸* ja: Japanese
	*│▸* ko: Korean
	*│▸* la: Latin
	*│▸* lv: Latvian
	*│▸* mk: Macedonian
	*│▸* no: Norwegian
	*│▸* pl: Polish
	*│▸* pt: Portuguese
	*│▸* pt-br: Portuguese (Brazil)
	*│▸* ro: Romanian
	*│▸* ru: Russian
	*│▸* sr: Serbian
	*│▸* sk: Slovak
	*│▸* es: Spanish 
	*│▸* es-es: Spanish (Spain)
	*│▸* es-us: Spanish (United States)
	*│▸* sw: Swahili
	*│▸* sv: Swedish
	*│▸* ta: Tamil
	*│▸* th: Thai
	*│▸* tr: Turkish
	*│▸* vi: Vietnamese 
	*│▸* cy: Welsh
	*│*
	*╰────────────⦁*`
	setReply(LANGUAGES)
	}
	break
//========= GROUP FEATURE=========//
case 'tebaklirik':{

		if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in zex.tebaklirik) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}


	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zex.tebaklirik[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (zex.tebaklirik[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK LIRIK*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.tebaklirik[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break

case 'siapaaku':{
	if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in zex.siapaaku) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/siapakahaku.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}


	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zex.siapaaku[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (zex.siapaaku[id]) 
user.balance -= 200
m.reply(`*GAME SIAPAKAH AKU*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.siapaaku[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break
case 'susunkata':{
			if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in zex.susunkata) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/susunkata.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}
	Tipe: ${json.tipe}

	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zex.susunkata[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME SUSUN KATA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.susunkata[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break
case 'tekateki':{
	if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 1000
	let id = m.chat
	if (id in zex.tekateki) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tekateki.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	Soal: ${json.soal}


	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money 💸
	`.trim()
	zex.tekateki[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (zex.tekateki[id]) 
user.balance -= 200
setReply(`*GAME TEKA-TEKI*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.tekateki[id]
	 }, timeout)
	 ]
	}
db.data.users[sender].glimit -= 1
	break
case 'math': case 'match': case 'mtk': case 'matematika': {
		let modes = {
		noob: [-3, 3, -3, 3, '+-', 10000, 500],
		easy: [-10, 10, -10, 10, '*/+-', 15000, 600],
		medium: [-40, 40, -20, 20, '*/+-', 15000, 730],
		hard: [-100, 100, -70, 70, '*/+-', 20000, 850],
		extreme: [-999999, 999999, -999999, 999999, '*/', 20000, 1000],
		impossible: [-99999999999, 99999999999, -99999999999, 999999999999, '*/', 30000, 2500],
		impossible2: [-999999999999999, 999999999999999, -999, 999, '/', 35000, 3000]
	}


	let operators = {
		'+': '+',
		'-': '-',
		'*': '×',
		'/': '÷'
	}

	function genMath(mode) {
		let [a1, a2, b1, b2, ops, time, bonus] = modes[mode]
		let a = randomInt(a1, a2)
		let b = randomInt(b1, b2)
		let op = pickRandom([...ops])
		let result = (new Function(`return ${a} ${op.replace('/', '*')} ${b < 0 ? `(${b})` : b}`))()
		if (op == '/') [a, result] = [result, a]
		return {
		str: `${a} ${operators[op]} ${b}`,
		mode,
		time,
		bonus,
		result
		}
	}

	function randomInt(from, to) {
		if (from > to) [from, to] = [to, from]
		from = Math.floor(from)
		to = Math.floor(to)
		return Math.floor((to - from) * Math.random() + from)
	}
		if (!q) return setReply( `*MATEMATIKA*

┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
		let mode = args[0].toLowerCase()
		if (!(mode in modes)) return setReply( `
┌─〔 Mode 〕
├ ${Object.keys(modes).join('\n├ ')}
└────    
	contoh:
	${prefix}math hard
	`)
		let id = from
		if (id in zex.math) return setReply('Masih ada soal belum terjawab di chat ini')
		let math2 = genMath(mode)
		zex.math[id] = [
		await setReply(`*MATEMATIKA*\n\nBerapa hasil dari *${math2.str}*?\n\nTimeout: ${(math2.time / 1000).toFixed(2)} detik\nBonus Jawaban Benar: Rp ${math2.bonus} `),
		math2, 4,
		setTimeout(async () => {
			if (zex.math[id]) await setReply(`Waktu habis!\nJawabannya adalah ${math2.result}\n\n${math2.mode.toUpperCase()}\n\nmath ${math2.mode}`)
		 delete zex.math[id]
		}, math2.time)
		]
	}
	break 	

case 'tebakkata':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].glimit < 1) return onlyGlimit()
let poin = 1000
let timeout = 120000
let id = m.chat

if (id in zex.tebakkata) return setReply('Masih ada soal belum terjawab di chat ini')
let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')).json()
let json = src[Math.floor(Math.random() * src.length)]
let caption = `*Soal :* ${json.soal}

Timeout *${(timeout / 1000).toFixed(2)} detik*
Exp : +999
Bonus : +${poin} Saldo`.trim()
zex.tebakkata[id] = [
await setReply(caption),
json, poin,
setTimeout(() => {
if (zex.tebakkata[id]) 
setReply(`Waktu game telah habis
Jawabannya adalah : ${json.jawaban}`)
delete zex.tebakkata[id]
 }, timeout)
 ]
}
db.data.users[sender].glimit -= 1
break
 case 'tebakkimia':{
		if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return onlyGroup()
	let timeout = 30000
	let poin = 1000
	let id = m.chat
	if (id in zex.tebakkimia) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkimia.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*TEBAK KIMIA*
	Unsur: ${json.unsur}
	Soal: Singkatan atau lambang di atas adalah...

	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()
	zex.tebakkimia[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	if (zex.tebakkimia[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK KIMIA*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.tebakkimia[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break
	case 'tebakgambar':{
		if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
		if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 2000
	let id = m.chat
	if (id in zex.tebakgambar) return setReply('Masih ada soal belum terjawab di chat ini')
	async function tebakgambar() {
	let random_level = Math.floor(Math.random() * 136)
	let random_eq = Math.floor(Math.random() * 20)
	return axios.get(`https://jawabantebakgambar.net/level-${random_level}/`).then((val) => {
		let url = "https://jawabantebakgambar.net"
		const $ = cheerio.load(val.data)
		let href = $("ul > * > a").eq(random_eq)
		let jwbn = href.find("span").text()
		let img = href.find("img").attr("data-src")
		let src = url + img
		let petunjuk = jwbn.replace(/[AIUEO|aiueo]/g, "_")
		return {
			img: src,
			jawaban: jwbn,
			petunjuk,
		}
	})
		}
	let tos = await tebakgambar ()
	console.log(tos)
	let caption = `*GAME TEBAK GAMBAR*

	Waktu: *${(timeout / 1000).toFixed(2)} detik*
	Hadiah: ${poin} Money
	`.trim()

	zex.tebakgambar[id] = [
		await zex.sendMessage(from, {caption: caption, image: {url: tos.img}}, {quoted: fkontak}),
	tos, poin,
	setTimeout(() => {
	if (zex.tebakgambar[id]) 
user.balance -= 200
m.reply(`*GAME TEBAK GAMBAR*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${tos.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.tebakgambar[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break
 case 'caklontong':{
	if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let timeout = 80000
	let poin = 3000
	let tiketcoin = 1500
	let id = m.chat
	if (id in zex.caklontong) return setReply('Masih ada soal belum terjawab di chat ini')
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `
	${json.soal}

	Timeout *${(timeout / 1000).toFixed(2)} detik*
	Bonus: ${poin} XP
	Balance: +${tiketcoin} Money
	`.trim()
	zex.caklontong[id] = [
	await setReply(caption),
	json, poin,
	setTimeout(() => {
	user.balance -= 200
m.reply(`*GAME CAK LONTONG*\n\nWaktu habis!\n𖦹 Jawabannya adalah; *${json.jawaban}*\n𖦹 Saldo kamu dikurangi 200\n𖦹 Sisa Saldo kamu: *${db.data.users[sender].balance.toLocaleString()}*`)
	delete zex.caklontong[id]
	 }, timeout)
	 ]
	}
		db.data.users[sender].glimit -= 1
	break
case 'family100': {
		if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
if (!isGroup) return setReply(mess.only.group)
	let winScore = 1000
	let timeot = 200000  
	let timeout = 80000
	let id = m.chat
	if (id in zex.family) return setReply('Masih ada kuis yang belum terjawab di chat ini') 
	let src = await (await fetch('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')).json()
	let json = src[Math.floor(Math.random() * src.length)]
	let caption = `*GAME FAMILY100*

	*Soal:* ${json.soal}

	Terdapat ${json.jawaban.length} jawaban${json.jawaban.find(v => v.includes(' ')) ? `
	(beberapa jawaban terdapat spasi)
	`: ''}

	+${winScore} Money tiap jawaban benar

		`.trim()
		zex.family[id] = {
			id,

			msg: await m.reply(caption),
			...json,
			terjawab: Array.from(json.jawaban, () => false),
			winScore,  
				}


	}
		db.data.users[sender].glimit -= 1
	break
		case 'suitpvp': case 'suit': {
			if (!isPremium && global.db.data.users[sender].glimit < 1) return setReply('Limit game sudah habis, silahkan ketik .limit') // respon ketika limit habis 
	if (!isGroup) return setReply (mess.group)
						zex.suit = zex.suit ? zex.suit : {}
						let poin = 10
						let poin_lose = 10
						let timeout = 60000
						if (Object.values(zex.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(sender))) setReply(`Selesaikan suit mu yang sebelumnya`)
			if (m.mentionedJid[0] === sender) return setReply(`Tidak bisa bermain dengan diri sendiri !`)
	if (m.mentionedJid[0] === botNumber) return setReply (`Tidak bisa bermain dengan Bot !`)
						if (!m.mentionedJid[0]) return setReply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${nomerOwner}`, m.chat, { mentions: [nomerOwner + '@s.whatsapp.net'] })
						if (Object.values(zex.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return setReply ( `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
						let id = 'suit_' + new Date() * 1
						let caption = `_*GAME SUIT PvP*_

@${sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
						zex.suit[id] = {
						chat: await zex.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
						id: id,
						p: sender,
						p2: m.mentionedJid[0],
						status: 'wait',
						waktu: setTimeout(() => {
						if (zex.suit[id]) zex.sendText(m.chat, `_Waktu suit habis_`, m)
						delete zex.suit[id]
						}, 60000), poin, poin_lose, timeout
						}
						}
						db.data.users[sender].glimit -= 1
						break  
 case 'limit':
	case 'ceklimit': 
	if(mentionByReply){
	let nomer = mentionByReply.split("@")[0]
	 setReply(`*${await conn.getName(mentionByReply)}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[mentionByReply].glimit}/${gcount}`}\nSaldo : Rp ${db.data.users[mentionByReply].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`) 
	} else {   
	setReply(`*${pushname}*\n\nLimit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}/${limitCount}`}\nLimit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcount}`} \nSaldo : Rp ${db.data.users[sender].balance.toLocaleString()}\n\nKamu dapat membeli limit dengan ${prefix}buylimit dan ${prefix}buyglimit untuk membeli game limit\nAtau ketik .buyprem untuk membeli unlimited limit`)

	}
	break
 case 'buylimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buylimit* jumlah limit yang ingin dibeli\n\nHarga 1 limit = Rp1000`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 1000)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].limit += math(q)
	setReply(`Pembeliaan limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].limit}/${limitCount}`)
	}
	break
case 'buyglimit':{
	if (!q) return setReply(`Kirim perintah *${prefix}buyglimit* jumlah limit yang ingin dibeli\n\nHarga 1 game limit = Rp 700`)
	if (q.includes('-')) return setReply(`Jangan menggunakan -`)
	if (isNaN(q)) return setReply(`Harus berupa angka`)
	let ane = Number(math(q) * 700)
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi untuk pembelian ini`)
	db.data.users[sender].balance -= ane
	db.data.users[sender].glimit += math(q)
	setReply(`Pembeliaan game limit sebanyak ${q} berhasil\n\nSisa Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}\nSisa Limit : ${db.data.users[sender].glimit}/${limitCount}`)
	}
	break
 case 'claim':
	case 'daily':{
	const limi = ['2','4','1','5','9','3','8','7','6','10','11']
		const randomny = limi[Math.floor(Math.random() * limi.length)]
	const limitfree = randomny
	const free = 3000
	const prem = 10000
	const moneyfree = 3000
	const moneyprem = 10000
	const timeout = 86400000
	let time = global.db.data.users[m.sender].lastclaim + 86400000
	 if (new Date - global.db.data.users[m.sender].lastclaim < 86400000) return setReply( `Anda sudah mengklaim, klaim harian hari ini\ntunggu selama ${conn.msToTime(time - new Date())} lagi`)
	 global.db.data.users[m.sender].exp += isPremium ? prem : free
		 global.db.data.users[m.sender].limit += limitfree
	 global.db.data.users[m.sender].balance += isPremium ? moneyprem : moneyfree
	setReply(`Selamat kamu mendapatkan:\n\n+${limitfree} Limit\n+${isPremium? prem : free} Exp\n+${isPremium? moneyprem : moneyfree} Balance`)
	global.db.data.users[m.sender].lastclaim = new Date * 1
	} 
	break 
 case 'me': case 'profil': {
if (!isGroup) return onlyGroup()
	let ppimg = await zex.profilePictureUrl(sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png')
	try{
	 let sol = await zex.fetchStatus(sender)
	var stst = sol.status == undefined ? '' : sol.status 
	} catch(err){
	var stst = ""

	}
	let persenya =`${userPersen}`
	let nana =`${userExp}/${requiredExp}`

	let prmm = isPremium? isOwner? 'Premium' : user? user.premiumDate : '' : 'Not Premium'
	 //
	let teks = `*]────「 Profile User 」────[*

	🆔 Nama : ${pushname} 
	💳 Saldo  : Rp ${db.data.users[sender].balance.toLocaleString()}
	✅ Verified : ${userVerified}
	📇 Status : ${isPremium ? 'Premium':'Free'}
	🧬 Level : ${userLevel}
	🔰 Grade : ${userLeveling(`${db.data.users[sender].level}`)}
	⚡ Exp :  ${userXp(userPersen)} ${persenya.split(".")[0]}%
	♻️ Total Exp : ${nana}
	📟 User Hit : ${db.data.users[sender].hit}
	🤖 Status Bot : ${isOwner ? 'Owner':'User'}
	🕔 Expired : ${prmm}
	📉 Limit : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
	📈 Limit Game : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}/${gcounti.user}`}
	📲 No : wa.me/${sender.split("@")[0]}
	🧸 Bio : ${stst}`


	let its = await getBuffer (ppimg)

	const canvacord = require("canvacord");
		let image3 = new canvacord.Rank()
		.setAvatar(its)
		.setCurrentXP(math(userExp))
		.setRequiredXP(requiredExp)
		.setStatus("online")
		.setProgressBar("#FFFFFF", "COLOR")
		.setBackground( "COLOR","#141414")
		.setCustomStatusColor("#ff1a8c")  
		.setUsername(`EXP: ${persenya.split(".")[0]}%,`)
		.setLevel(userLevel)
		.setRank(4)
		.setOverlay("#3d3d3d")
		.setDiscriminator("0007");

		let foto = await getRandom(".png")
		image3.build()
		.then(async data => {
		await canvacord.write(data,foto);
		let gambar = await fs.readFileSync(foto)
	zex.sendMessage(from, { caption: teks, image: gambar}, {quoted: fkontak})
		await fs.unlinkSync(foto)
				});

	}

	break
 case  'topbalance': case 'topglobal' :{
if (!isGroup) return onlyGroup()
let uang = Object.values(db.data.users);
uang.sort((a, b) => (a.balance < b.balance) ? 1 : -1)
let top = '*── 「 TOP BALANCE 」 ──*\n\n'
var arrTop = []
var total = 15
if (uang.length < 15) total = uang.length
for (let i = 0; i < total; i ++){
		top += `${i + 1}. wa.me/${uang[i].id.split("@")[0]}\n=> balance : $${uang[i].balance}\n\n`
		arrTop.push(uang[i].id)
}
	 //zex.sendMessage(from, {text: top, mentions: arrTop}, {quoted: m})
 mentions(top, arrTop, true)
	}
break
	case 'shop':{
	let teks = `
	*]────「 SHOP」────[*

	Halo ${pushname} 
	Saldo : Rp ${db.data.users[sender].balance.toLocaleString()}

	• List Harga
	1 Limit : Rp 1000
	1 Limit Game : Rp 700

	NOTE :
	Untuk membeli Limit ketik ${prefix}buylimit jumlah limit
	Contoh : ${prefix}buylimit 10

	Untuk membeli Limit Game ketik ${prefix}buyglimit jumlah limit
	Contoh : ${prefix}buyglimit 10

Atau ketik .buyprem untuk membeli unlimited limit`
	setReply(teks)
	}
	break 
	case 'tf':
	case 'transfer':{
		try{
	if(!q) return setReply(`Masukan angka\nContoh: .transfer 100`)
	 if(!mentionByReply) return setReply("Reply targetnya")
				 if(budy.includes('-') || budy.includes('+')) return setReply ("Harus angka blok")
	if (isNaN(q)) return setReply(`Masukan angka\nContoh: .transfer 100`)

	let ane = q
			if(100 > ane) return setReply('Minimal transaksi 100 rupiah')
	if (db.data.users[sender].balance < ane) return setReply(`Saldo kamu tidak mencukupi`)
			db.data.users[mentionByReply].balance += parseInt(ane)
	db.data.users[sender].balance -= parseInt(ane)
	setReply(`Berhasil mentransfer saldo ke nomer ${mentionByReply.split("@")[0]} sebesar Rp.${Number(q).toLocaleString()}`)
	}catch(err){
			setReply ('User tersebut belum terdaftar di database bot, silahkan suruh ketik .menu terlebih dahulu')
	}
	}
	break
 case 'listonline':
						case 'liston': {
								if (!m.isGroup) setReply(mess.group)
								let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
								let online = [...Object.keys(store.presences[id]), botNumber]
								zex.sendText(m.chat, '⏰ List Online:\n\n' + online.map(v => '🌱 @' + v.replace(/@.+/, '')).join`\n`, m, {
										mentions: online
								})
						}
						break
//======= MENU DOWNLOAD =====//






case 'song': case 'yts': case 'ytsearch' : {
if (!isGroup) return onlyGroup()
if (q === 'help') {
return setReply(`Command : ${command}\n🧩 Category : Search\n🛠 ️Usage : ${prefix + command} \n\n📚 Description : Sends song in Whatsapp `)
}
if (!args.join(" ")) return setReply(`Example : ${prefix + command} dj ehan pulang angel goyang`)
let search = await yts(q)
let listSerch = []
let teskd = `📂 Youtube Search by *${botName}*\n🎵 Result From : *${args.join(" ")}*\n\n`
let no = 1
	for (let i of search.all) {
			teskd += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
teskd += `\n________________________________\n`
}
setReply(teskd)
}
break



 case 'ai':
		case 'openai' : {
		if (!q) return setReply(`Ada Yang Bisa Saya Bantu?`)			
m.reply(mess.wait)
			var data = await fetchJson(`https://itzpire.site/ai/gpt?model=gpt-4&q=${q}`)
	setReply(`${data.data.response}`.trim())
		}
			break
case 'ig': case 'instagram' :{
								if (!q) return setReply("Link?")
		sendSticker(stikot)
								let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api.Lol}&url=${q}`)
								for (var i = 0; i < ag.result.length; i++) {
										let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
										await zex.sendMessage(m.chat, {
												[pap]: {
														url: ag.result[i]
												},
												caption: 'DOWNLOADER INSTAGRAM'
										}, {
												quoted: m
										})
								}
						}
						break
case 'tt':
case 'tiktok':
 if (!q) return setReply('link nya mana:b')
 sendSticker(stikot)
 let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${api.Lol}&url=${q}`)
 let ee = `*DOWNLOADER TIKTOK*\n ketik .ttaudio jika ingin mengunduh audio nya`
 await zex.sendMessage(m.chat, {video: { url: e.result.link }, caption: ee }, { quoted: m })
 break
				case 'ttmp3': 
case 'tiktokaudio':
						case 'ttaudio': {
if (!isGroup) return onlyGroup()
								if (!q) return setReply('where is the link')
setReply(mess.wait)
								let i = await fetchJson(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${api.Lol}&url=${q}`)
								zex.sendMessage(m.chat, { audio: { url: i.result }, mimetype: 'audio/mp4' }, { quoted: fkontak })
						}
						break

case 'play': 
case 'ytaudio':
case 'playmusik':
case 'playmusic': {
if (!isGroup) return onlyGroup()
if (!q) return setReply("Kirim perintah judul lagu/link youtube nya bwang")
try {
sendSticker(stikot)
let rus = await yts(q)
if (rus.all.length == "0") return setReply("Video tidak bisa di download")
let data = await rus.all.filter(v => v.type == 'video')
try{
var res = data[0]
var info = await ytdl.getInfo(res.url);
} catch{
var res = data[1]
var info = await ytdl.getInfo(res.url);
}
let audio = ytdl.filterFormats(info.formats, 'audioonly');
let format = ytdl.chooseFormat(info.formats, { quality: '18' });
try{
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/hqdefault.jpg`
} catch(err) {
var thumbnya =`https://i.ytimg.com/vi/${res.videoId}/default.jpg`
}
let inithumb = await getBuffer(thumbnya)
let teks = `*💢 Y O U T U B E - M P 3*

🔶 Channel : ${res.author.name}
🔶 Viewers : ${h2k(res.views)} Kali
🔶 Duration : ${res.timestamp}
🔶 Url : ${res.url}`


zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true, 
title: `${res.title}`,
body: `${week} , ${calender}`,																													
mediaType: 2,  
renderLargerThumbnail : true,
thumbnail: inithumb,
mediaUrl: res.url,
sourceUrl: res.url
}}, image: {url: inithumb},text: teks},{quoted: m})                                        
downloadMp3(`${res.url}`) 
} catch (err){
console.log(err)
setReply(`Server sedang error`)
}
}
break
case 'gimage': case 'pinterest': case'pin': {
if (!isGroup) return onlyGroup()
if (!q) return setReply (`salah!!\nContoh: ${prefix + command} jokowi pake jas hujan`)
setReply (mess.wait)
let res = await fetchJson (`https://skizo.tech/api/pinterest?search=${q}&apikey=${api.zex}`)
zex.sendMessage(from, {image: {url: res[0].media.url}}, {quoted:m})
}
break
				case 'ttpoto':{

			if (!q) return m.reply (`Example : ${prefix + command} https://vt.tiktok.com/ZSNhbmwU1/`)

			let url = `https://dlpanda.com/id?url=${q}&token=G7eRpMaa`

			let response = await axios.get(url)
					const html = response.data;
					const $ = cheerio.load(html);

					let asd = []
					let imgSrc = []
					let creator = 'Jikarinka'

			$('div.col-md-12 > img').each((index, element) => {
						imgSrc.push($(element).attr('src'));
					});

					asd.push({ creator, imgSrc })
				let fix = imgSrc.map((e,i) => {
				return {img: e, creator: creator[i] } 
				})

			m.reply('media Akan Rangel Kirim Lewat Pc')
			for (let i of asd[0].imgSrc) {
					 let lol = m.mentionedJid[0] || m.sender || zex.parseMention(args[0]) || (args[0].replace(/[@.+-]/g, '').replace(' ', '') + '@s.whatsapp.net') || ''
					 zex.sendFile(lol, i, '', null, m)
					 }
			}

			break
		case 'getmusic': {
			if (!q) throw `Example : ${prefix + command} 1`
			if (!m.quoted) return m.reply('Reply Pesan')
			if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
	let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
			if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
			try{
				let info = await ytdl.getInfo(urls[q - 1]);
				let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
				try{
				var low = audioFormats[2].contentLength
				} catch (err){
				var low = audioFormats[0].contentLength
				}
				if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
				if (audioFormats[0].contentLength == "undefined"){
				var rus = await yts(q)
				//var data = await rus.all.filter(v => v.type == 'video')
				var res = data[0]
				if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
				}
				downloadMp3(urls[q - 1]) 
				} catch (err){
				console.log(err)
				}
		}
		break

case 'ytmp3':
case 'playmp3':
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
if (!isUrl) return setReply("Masukan link youtube nya kak")

sendSticker(stikot)
try{
let info = await ytdl.getInfo(q);
let audioFormats = ytdl.filterFormats(info.formats, 'audioonly');
try{
var low = audioFormats[2].contentLength
} catch (err){
var low = audioFormats[0].contentLength
}
if (Number(low) > 15000000 ) return setReply(`Bjir sizenya ${FileSize(low)}\nAu ah ga mao download 😤`)
if (audioFormats[0].contentLength == "undefined"){
var rus = await yts(q)
//var data = await rus.all.filter(v => v.type == 'video')
var res = data[0]
if (res.timestamp.split(":") > "10") return setReply("Tidak bisa mendownload audio lebih dari 10 menit")
}
downloadMp3(q) 
} catch (err){
console.log(err)
db.data.users[sender].limit -= 1 
}
break 
case 'ytmp4':
case 'playmp4':
 if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
sendSticker(stikot)
axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${api.Lol}&url=${args[0]}`)
.then(({ data }) => {
var caption = `❖ Title    : *${data.result.title}*\n`
caption += `❖ Size     : *${data.result.size}*`
zex.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
zex.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })})
})
.catch(console.error)
break
case 'remini':
						case 'hd': {
								if (!isMedia) return setReply("Where The A Image")
sendSticker(stikot)
								let media = await zex.downloadAndSaveMediaMessage(quoted)
								let anu = await TelegraPh(media)
								zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/upscale?apikey=${api.Lol}&img=${anu}` }, caption: "nih kak >\<" }, { quoted: m })}
						break




case 'ttsearch':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return setReply(mess.wait) // respon ketika limit habis
if(!q) return m.reply (`Mau cari apa??\nCara penggunaan: ${prefix+command} judul|jumlah\n\nContoh: ${prefix+command} taubat|3`)
setReply(mess.wait)
let res = await fetchJson(`https://skizo.tech/api/ttsearch?search=${q}&apikey=${api.zex}`)
let caption = `*TIKTOK SEARCH*

*𖦹 Judul:* ${res.title}
*𖦹 Region:* ${res.region}
*𖦹 Durasi:* ${res.duration}
*𖦹 Musik:* ${res.music}
	*- Musik Info:*
			*• Judul:* ${res.music_info.title}
			*• Link:* ${res.music_info.play}
			*• Author:* ${res.music_info.author}
`
zex.sendMedia(from, res.play, m, {caption: caption})
db.data.users[sender].limit -= 1 // -1 limit
}
break
case 'jarak':{
if (!isGroup) return onlyGroup()
if(!q.includes("|")) return setReply("Contoh Tasik|Bandung")
let Dari = q.split("|")[0]
let Ke = q.split("|")[1]
async function jarak(dari, ke) {
	let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
	let { data } = await axios(url)
	let $ = cheerio.load(data)
	let img = data.split("var s=\'")[1].split("\'")[0]
	let res = {
	 result: {
		img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
		desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
		}
	}
	return res
}
let nana = await jarak(Dari,Ke)
let image = nana.result.img
let caption = `*Google Maps* \n\n${nana.result.desc}`
zex.sendMessage(from,{image, caption},{quoted: m})
} 
break
case 'nsfw': {

		if (!isPremium) return onlyPrem()
let anu = `╭─❒ 「  𝘕𝘚𝘍𝘞 」    
│
├  .xhentai
├  .loli 
├  .milf 
├  .husbu 
├  .cosplay 
├  .zettai
├  .thighs
├  .panties
├  .pussy
├  .tentacles
├  .masturbasi
├  .jahy
├  .glases
├  .foot
├  .hentai
├  .hentai gifs
├  .blowjob
├  .orgy
├  .nekopoi
├  .manga
├  .ass
├  .ahegao
├  .bdsm
├  .cuckold
├  .cum
├  .femdom
├  .ero
├  .yuri
│
╰────────────˧
`
await sleep(1000)
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `Zex Simple Bot WhatsApp`,
body:`Bot aktif ${runtime(process.uptime())}`,
previewType:"PHOTO", 
thumbnail: fs.readFileSync('./media/reply.jpg'),
sourceUrl:`https://chat.whatsapp.com/GtFwrS0TqnA0FQ7xmrRUih`
}}, image: fs.readFileSync('./media/thumb.jpeg'), caption: anu}, { quoted: m })
}
break
case 'zettai': case 'thighs': case 'panties': case 'pussy': case 'tentacles':
case 'masturbasi': case 'jahy': case 'glases':  case 'foot': case 'hentai': 
case 'orgy': case 'nekopoi': case 'manga': case 'ass': case 'ahegao': case 'hentai gifs': case 'cuckold': case 'hentai': case 'blowjob': case 'gangbang': case 'yuri': case 'bdsm': case 'cuckold': case 'cum': case 'femdom': case 'ero':{
	if (!isPremium && !isOwner) return onlyPrem()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()
setReply('waittt....\nmedia akan di kirim lewat private chat')
zex.sendMessage(m.sender, { caption: `Random Anime ${command}`, image: { url: `https://botapi.takimtod.repl.co/api/nsfw/${command}?apikey=BetaBotz`}, quoted: m })
	db.data.users[sender].limit -= 1  
}
break
				case 'cry': case 'kill': case 'hug': case 'pat': case 'lick': case 'kiss': case 'bite': case 'yeet': case 'bully': case 'bonk': case 'wink': case 'poke': case 'nom': case 'slap': case 'smile': case 'wave': case 'awoo': case 'blush': case 'smug': case 'glomp': case 'happy': case 'dance': case 'cringe': case 'cuddle': case 'highfive': case 'handhold':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
axios.get(`https://api.waifu.pics/sfw/${command}`)
.then(({data}) => {
zex.sendImageAsSticker(m.chat, data.url, m, { packname: global.packName, author: global.authorName })
})
break
case 'anime':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/pajaar/grabbed-results/master/pajaar-2020-gambar-anime.txt')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
imageToBase64(pjr)
.then((response) => {
var media =  Buffer.from(response, 'base64');
//let buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️ ɴᴇxᴛ ᴘʜᴏᴛᴏ`},type:1}]                       
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																
}}, image: media, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })								
/*}}, image: media, caption: `${mess.success}`, buttons: buttons , footer: `Hasil pencarian dari ${command}`}, { quoted: m })*/
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
});
})
}
break
 case 'animerandom':
case 'randomanime':
if (!isGroup) return onlyGroup()
setReply(`
Silakan pilih salah satu

akira || akiyama || anna || asuna || ayuzawa ||| boruto || chitanda || chitoge ||| deidara || elaina || emilia || asuna || erza || gremory || hestia || hinata || inori || itachi || isuzu || itori || kaga  || kakasih || kaori || kaneki || kosaki || kotori || kuriyama || kuroha || kurumi || madara || mikasa || miku || minato || naruto || natsukawa || nekohime || nezuko || nishimiya || onepiece || rem || rize || sagiri || sakura || sasuke || shina || shinka || shizuka || shota || tomori || toukachan || tsunade || yatogami || yuki

Contoh : .shina`)
break
case 'akira': case 'akiyama': case 'anna': case 'asuna': case 'ayuzawa': case 'boruto': case 'chitanda': case 'chitoge': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'asuna': case 'erza': case 'gremory': case 'hestia': case 'hinata': case 'inori': case 'itachi': case 'isuzu': case 'itori': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'kaneki': case 'kosaki': case 'kotori': case 'kuriyama': case 'kuroha': case 'kurumi': case 'madara': case 'mikasa': case 'miku': case 'minato': case 'naruto': case 'natsukawa': case 'nekohime': case 'nezuko': case 'nishimiya': case 'onepiece': case 'pokemon': case 'rem': case 'rize': case 'sagiri': case 'sakura': case 'sasuke': case 'shina': case 'shinka': case 'shizuka': case 'shota': case 'tomori': case 'toukachan': case 'tsunade': case 'yatogami': case 'yuki':{
if (!isGroup) return onlyGroup()
let res = await (await fetch(`https://raw.githubusercontent.com/KazukoGans/database/main/anime/${command}.json`)).json()
let cita = res[Math.floor(Math.random() * res.length)]
await zex.sendFile(m.chat, cita, 'image.jpg', `_${command}_`, m)

}
break
	 case 'wallpaper':
if (!isGroup) return onlyGroup()
try{
setReply(mess.wait)
zex.sendMessage(from, { image: { url: `https://api.lolhuman.xyz/api/random2/${command}?apikey=${api.Lol}` } })
}catch(err){
console.log((err) => setReply(mess.err))
}
break
case 'loli':
	case 'cosplay': 
	case 'husbu':
	case 'milf':
case 'wallml':{
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
//let data = global.db.data.others['runtime']
//let time = (new Date - data.runtime) || "Tidak terdeteksi" 
let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
let kentir = await getBuffer(wipi)                             
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${TextT}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail:'',sourceUrl: `https://wa.me/${nomerOwner}`																										
}}, image: kentir, caption: `_${command}_` ,footer: `Hasil pencarian dari ${command}`}, { quoted: m })
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1 
}
break
case 'nao':
case 'naotomori':{
if (!isGroup) return onlyGroup()
setReply(mess.wait)
let hehe = `https://api.zahwazein.xyz/randomanime/v2/tomori?apikey=${api.angel}`
zex.sendMessage(m.chat, { image: { url: hehe }, caption: `_${command}_`}, { quoted: m})
}
break
 //========== TOOLS ===========//
 case 'tomp4': 
					case 'tovideo': {
if (!isGroup) return onlyGroup()
								if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(qmsg)
								let webpToMp4 = await webp2mp4File(media)
								await zex.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
								await fs.unlinkSync(media)

						}
						break
 case 'toimage': 
						case 'toimg': {
if (!isGroup) return onlyGroup()
								if (!/webp/.test(mime)) return setReply(`Reply sticker dengan caption *${prefix + command}*`)
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(qmsg)
								let ran = await getRandom('.png')
								exec(`ffmpeg -i ${media} ${ran}`, (err) => {
										fs.unlinkSync(media)
										if (err) return err
										let buffer = fs.readFileSync(ran)
										zex.sendMessage(m.chat, { image: buffer }, { quoted: m })
										fs.unlinkSync(ran)
								})

						}
						break
		case 'tomp3': 
						case 'toaudio': {
if (!isGroup) return onlyGroup()
						if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
						sendSticker(stikot)
						let media = await zex.downloadMediaMessage(qmsg)
						let audio = await toAudio(media, 'mp4')
						zex.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })

						}
						break
 case 'tr':
case 'translate':{
if (!isGroup) return onlyGroup()
let translate = require('translate-google-api')
let defaultLang = 'en'
let tld = 'cn'
let toks = `
Contoh:
${prefix + command} <lang> [text]
${prefix + command} id your messages
Daftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages
`.trim()

let lang = args[0]
let text = args.slice(1).join(' ')
if ((args[0] || '').length !== 2) {
lang = defaultLang
text = args.join(' ')
}
if (!text && m.quoted && m.quoted.text) text = m.quoted.text
let result
try {
result = await translate(`${text}`, {to: lang})
} catch (e) {
result = await translate(`${text}`, {to: defaultLang,})
setReply(toks)
} finally {
setReply(result[0])
}
}
break
case 'terbalik':{
if (!isGroup) return onlyGroup()
	if (/audio/.test(mime)){ 
	setReply(mess.wait)
	let media3 = await zex.downloadAndSaveMediaMessage(quoted,makeid(5))
	let rname = getRandom('.mp3')
	exec(`ffmpeg -i ${media3} -filter_complex "areverse" ${rname}`, async (err, stderr, stdout) => {
	if (err) return setReply('Error!')
	let jadie = fs.readFileSync(rname)
	await zex.sendMessage(from, {audio: jadie, mimetype: 'audio/mp4' }, {quoted: m})
	fs.unlinkSync(rname)
	fs.unlinkSync(media3)
	}
	)
	} else {
	setReply('Reply audio!')
	}
	}
	break
 case 'tovn': 
						case 'toptt': {
if (!isGroup) return onlyGroup()
						if (!/video/.test(mime) && !/audio/.test(mime)) return setReply(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
						setReply(mess.wait)
						let media = await zex.downloadMediaMessage(qmsg)
						let { toPTT } = require('./lib/converter')
						let audio = await toPTT(media, 'mp4')
						zex.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})

						}
						break
 case 'togif': {
if (!isGroup) return onlyGroup()
								if (!/webp/.test(mime)) return setReply(`Reply stiker dengan caption *${prefix + command}*`)
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(qmsg)
								let webpToMp4 = await webp2mp4File(media)
								await zex.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
								await fs.unlinkSync(media)

						}
						break
 case 'tourl': {
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(qmsg)
								if (/image/.test(mime)) {
										let anu = await TelegraPh(media)
										setReply(util.format(anu))
								} else if (!/image/.test(mime)) {
										let anu = await UploadFileUgu(media)
										setReply(util.format(anu))
								}
								await fs.unlinkSync(media)

						}
						break
 case 'bass': 
						case 'blown': 
						case 'deep': 
						case 'earrape': 
						case 'fast': 
						case 'fat': 
						case 'nightcore': 
						case 'reverse': 
						case 'robot': 
						case 'slow': 
						case 'smooth': 
						case 'tupai': {
if (!isGroup) return onlyGroup()
								try {
								let set
								if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
								if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
								if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
								if (/earrape/.test(command)) set = '-af volume=12'
								if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
								if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
								if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
								if (/reverse/.test(command)) set = '-filter_complex "areverse"'
								if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
								if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
								if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
								if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
								if (/audio/.test(mime)) {
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(qmsg)
								let ran = getRandom('.mp3')
								exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
								fs.unlinkSync(media)
								if (err) return newReply(err)
								let buff = fs.readFileSync(ran)
								zex.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
								fs.unlinkSync(ran)
								})
								} else setReply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
								} catch (e) {
								setReply(e)
								}
								}
						break
 case 'lirik':{
if (!isGroup) return onlyGroup()
if(!q) return setReply("Masukan judul lagu")	
function lirik(judul){
	return new Promise(async(resolve, reject) => {
			axios.get('https://www.musixmatch.com/search/' + judul)
			.then(async({ data }) => {
			const $ = cheerio.load(data)
			const hasil = {};
			let limk = 'https://www.musixmatch.com'
			const link = limk + $('div.media-card-body > div > h2').find('a').attr('href')
				await axios.get(link)
				.then(({ data }) => {
					const $$ = cheerio.load(data)
					hasil.thumb = 'https:' + $$('div.col-sm-1.col-md-2.col-ml-3.col-lg-3.static-position > div > div > div').find('img').attr('src')
					$$('div.col-sm-10.col-md-8.col-ml-6.col-lg-6 > div.mxm-lyrics').each(function(a,b) {
			 hasil.lirik = $$(b).find('span > p > span').text() +'\n' + $$(b).find('span > div > p > span').text()
			 })
		 })
		 resolve(hasil)
	 })
	 .catch(reject)
	 })
}
let data = await lirik(q)
let teks =`
Judul: ${q}

Lirik:
${data.lirik}
`
setReply(teks)

}
break
case'toptv':{
try {
	if (!isGroup) return onlyGroup()
		setReply(mess.wait)
if
	(m.message.extendedTextMessage) 
{
	var dataVideo = { ptvMessage: m.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage }
		zex.relayMessage(m.chat, dataVideo, {})
 }
		} catch (error) {
				m.reply(error);
				}
				}
				break
	case "get":
case "fetch":
	if (!q) {
		return m.reply(`Contoh:\n${prefix + command} https://github.com/RangelChan`);
	}
	if (!/^https?:\/\//.test(q)) {
		return m.reply("URL is Invalid!");
	}
	var requestOptions = {
		method: "GET",
		redirect: "follow",
	};
	if (body.match(/(mp4)/gi)) {
		fetch(`${q}`, requestOptions)
			.then((res) => zex.sendMessage(from, { video: { url: `${q}` }, mimetype: "video/mp4", caption: "Success" }, { quoted: m }))
			.catch((error) => m.reply("Error", error));
	} else if (body.match(/(mp3)/gi)) {
		fetch(`${q}`, requestOptions)
			.then((res) => zex.sendMessage(from, { audio: { url: `${q}` }, mimetype: "audio/mp4", fileName: "Audio" }, { quoted: m }))
			.catch((error) => m.reply("Error", error));
	} else if (body.match(/(png|jpg|jpeg)/gi)) {
		fetch(`${q}`, requestOptions)
			.then((res) => zex.sendMessage(from, { image: { url: `${q}` }, caption: "Success" }, { quoted: m }))
			.catch((error) => m.reply("Error", error));
	} else {
		fetch(`${q}`, requestOptions)
			.then((response) => response.text())
			.then((result) => m.reply(result))
			.catch((error) => m.reply("Error", error));
	}
	break;
	case 'removebg':
	case 'nobg': {
 if (!isGroup) return onlyGroup()
 if (!isMedia) return setReply("Where The A Image")
								setReply(mess.wait)
								let media = await zex.downloadAndSaveMediaMessage(quoted)
								let anu = await TelegraPh(media)
								zex.sendMessage(m.chat, {
										image: { url: `https://api.lolhuman.xyz/api/removebg?apikey=${api.Lol}&img=${anu}` },caption: "nih kak>\<" }, { quoted: m}) }
						break
	case 'flaming1':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Zex Simple Bot WhatsApp`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:"https://telegra.ph/file/33d58a3a7b931d3902642.jpg",sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
 case 'flaming2':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `Zex Simple Bot WhatsApp`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming3':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming4':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming5':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnailUrl:'https://telegra.ph/file/33d58a3a7b931d3902642.jpg',sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'flaming6':{
if (!isGroup) return onlyGroup()
if (args.length == 0) return setReply(`Example: ${prefix + command} Teks`)
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
let ini_txt = args.join(" ")
var buffer = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${ini_txt}`
zex.sendMessage(from, { contextInfo: {externalAdReply: {showAdAttribution: true, title: `${botName}`, mediaType: 3,  renderLargerThumbnail : true,thumbnail: fs.readFileSync('./media/thumb.jpeg'),sourceUrl: `https://wa.me/${nomerOwner}`
}}, image: {url:buffer}, caption: `${mess.success}`}, { quoted: m})
.catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'emojimix': {
								let [emoji1, emoji2] = q.split`+`
								if (!emoji1) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
								if (!emoji2) return setReply(`Contoh : ${prefix + command} 😅+🤔`)
								setReply(mess.wait)
								let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
								for (let res of anu.results) {
										let encmedia = await zex.sendImageAsSticker(m.chat, res.url, m, {
												packname: global.packName,
												author: 'tes',
												categories: res.tags
										})
										await fs.unlinkSync(encmedia)
								}

						}
						break
case 'patrick':
case 'petrik':
case 'stikpatrick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'dogestick': 
case 'doge': 
case 'domge':
case 'dogesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'lovestick' :
case 'slove':
case 'lovesticker': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'gura': 
case 'gurastick': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
// ===================================== //
case 'paimon': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/Paimon')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
})
db.data.users[sender].limit -= 1
}
break
case 'mukelu': 
case 'lu':
case 'mukestik': {
if (!isGroup) return onlyGroup()
if (!isPremium && global.db.data.users[sender].limit < 1) return onlyLimit()

setReply(mess.wait)
await fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/mukelu')
.then(res => res.text())
.then(body => {
let tod = body.split("\n");
let pjr = tod[Math.floor(Math.random() * tod.length)];
zex.sendImageAsSticker(from, pjr, m)
}).catch((err) => setReply('Server sedang error coba lagi besok!'))
db.data.users[sender].limit -= 1
}
break
case 'smeme': {
					let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
					if (!/image/.test(mime)) return setReply(respond)
						if (!q) return setReply(respond)
					setReply(mess.wait)
						let atas = q.split('|')[0] ? q.split('|')[0] : '-'
						let bawah = q.split('|')[1] ? q.split('|')[1] : '-'
					let dwnld = await zex.downloadAndSaveMediaMessage(qmsg)
					let fatGans = await TelegraPh(dwnld)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans}`
					let FaTiH = await zex.sendImageAsSticker(m.chat, smeme, m, { packname: global.packName, author: global.authorName })
					await fs.unlinkSync(FaTiH)
						}
					break
case 'take': case 'swm': {
								let [teks1, teks2] = q.split`|`
								if (!teks1) return setReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`)
								if (!teks2) return setReply(`Kirim/reply image/video dengan caption ${prefix + command} teks1|text2 t`)
						setReply(mess.wait)
								if (/image/.test(mime)) {
										let media = await zex.downloadMediaMessage(qmsg)
										let encmedia = await zex.sendImageAsSticker(m.chat, media, m, { pacname: teks1, author: teks2 })
										await fs.unlinkSync(encmedia)
								} else if (/video/.test(mime)) {
										if ((quoted.msg || quoted).seconds > 11) return setReply('Maksimal 10 detik!')
										let media = await zex.downloadMediaMessage(qmsg)
										let encmedia = await zex.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
										await fs.unlinkSync(encmedia)
								} else {
										return setReply(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
								}
						}
						break
 case 'attp':
								if (!q) return setReply('Masukan Text')
								setReply(mess.wait)
								zex.sendMessage(m.chat, { sticker: { url: `https://api.lolhuman.xyz/api/attp?apikey=${api.Lol}&text=${q}`} }, { quoted: m })
								break
case 'ttp':{
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
		localFontName: 'coolvetica rg',                                            
		color: 'white',
		textAlign: "left",
		lineSpacing: 10,
		strokeColor: "black",
		strokeWidth : 2,
		padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: packName, // The pack name
		author: authorName, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await zex.sendMessage(from,{sticker: nah},{quoted: m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
case 'tts':
	const gtts = require( 'node-gtts')
	function tts(text, lang = 'id') {
	// console.log(lang, text)
	return new Promise((resolve, reject) => {
	try {
	let tts = gtts(lang)
	let filePath =  (1 * new Date) + '.mp3'
	tts.save(filePath, text, () => {
	resolve(fs.readFileSync(filePath))
	fs.unlinkSync(filePath)
	})
	} catch (e) { reject(e) }
	})
	}

	const defaultLang = 'id'


	let lang = args[0]
	let text = args.slice(1).join(' ')
	if ((args[0] || '').length !== 2) {
	lang = defaultLang
	text = args.join(' ')
	}
	if (!text && m.quoted?.text) text = m.quoted.text

	let ras
	try { ras = await tts(text, lang) }
	catch (e) {
	m.reply(e + '')
	text = args.join(' ')
	if (!text) setReply( `Use example ${prefix}${command} en hello world`)
	ras = await tts(text, defaultLang)
	} finally {
	if (ras) zex.sendMedia(from, ras, m, {caption: "Nih"})
	//conn.sendFile(m.chat, res, 'tts.opus', null, m, true)
	}

	break
case 'hentaivid':{
setReply(mess.wait)
async function hentai() {
return new Promise((resolve, reject) => {
const page = Math.floor(Math.random() * 1153)
axios.get('https://sfmcompile.club/page/'+page)
.then((data) => {
const $ = cheerio.load(data.data)
const hasil = []
$('#primary > div > div > ul > li > article').each(function (a, b) {
hasil.push({
title: $(b).find('header > h2').text(),
link: $(b).find('header > h2 > a').attr('href'),
 category: $(b).find('header > div.entry-before-title > span > span').text().replace('in ', ''),
share_count: $(b).find('header > div.entry-after-title > p > span.entry-shares').text(),
views_count: $(b).find('header > div.entry-after-title > p > span.entry-views').text(),
type: $(b).find('source').attr('type') || 'image/jpeg',
video_1: $(b).find('source').attr('src') || $(b).find('img').attr('data-src'),
video_2: $(b).find('video > a').attr('href') || ''
})
})
resolve(hasil)
})
})
}
let ah = await hentai()
let nano = await pickRandom(ah)
zex.sendMessage(from,{caption: 'Dosa Tanggung  Sendiri Dah',video:{url: nano.video_1}},{quoted:m})


}
break     
case  'jjmeryani':{
setReply(mess.wait)
let kaydt = await fetchJson('https://raw.githubusercontent.com/KirBotz/nyenyee/master/meryani.json')
let hayu = kaydt[Math.floor(Math.random() * kaydt.length)];
zex.sendMessage(m.chat,{video:{url:hayu},caption:`nih kak🗿`},{quoted: m})
}
break 

// ===================PRimbon====== //
case 'bisakah':{
if (!isGroup) return m.reply('Kusus group')
const bisakah = body.slice(0)
const bisa =['BISA','Tidak Bisa','Oh tentu saja bisa dong','Udah dari lahir dia bisa kaya gitu kak 😂˜„','Oh tentu saja tidak bisa','Wuih bisa bisa','Ga mao jawab ah lu wibu','Tentu saja bisa eh tapi boong awokawok ','Engga engga dia ga bisa','Enggaklah','Aku ga mao jawbab 😆™‚','Rahasia dong','Ulangi Tod gua ga paham','Mana gua tau anjir']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/iamkizakixd`,}
}, text: '*Pertanyaan : '+bisakah+'*\n\n*Jawaban :* '+ keh }, { quoted: m })
}
break
case 'gimana':
case 'gimanadong':
case 'bagaimanakah':{
if (!isGroup) return m.reply('Kusus group')
const bagaimanakah = body.slice(0)
const bagai =['Kita Kenal?','Nanya Terus deh','Tidak Tahu','Gua tabok boleh ?','Cari Aja Sendiri','Kurang Tahu','Mana Saya Tahu, Saya kan ikan','Hah kamu tanya sama aku trus aku tanya ke siapa dong','Whahahaha ga tau 😑']
const mana = bagai[Math.floor(Math.random() * bagai.length)]
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://www.instagram.com/iamkizakixd`,}
}, text: '*Pertanyaan : '+bagaimanakah+'*\n\n*Jawaban :* '+ mana}, { quoted: m })
}
break
case 'apakah':{
if (!isGroup) return m.reply('Kusus group')
const apakah = body.slice(0)
const apa =['iya dong jelas itu','Tidak lah','Oh tentu saja tidak','Ya mana saya tau kok tanya saya','Rahasia dong','ga usah di tanya emang udah kaya gitu dia','Au ah mending mandi','Bentar aku lagi berak','Knpa emang kamu suka sama dia yak ??','Haha mna mungkin 👻']
const kah = apa[Math.floor(Math.random() * apa.length)]
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `wa.me/6281316643491`,}
}, text: '*Pertanyaan : '+apakah+'*\n\n*Jawaban :* '+ kah}, { quoted: m })
}
break
case 'kapankah':{
if (!isGroup) return m.reply('Kusus group')
const kapankah = body.slice(0)
const kapan =['Besok','Lusa','1 Hari Lagi','2 Hari Lagi','3 Hari Lagi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','7 Bulan Lagi','8 Bulan Lagi','9 Bulan Lagi','10 Bulan Lagi','11 Bulan Lagi','1 Tahun lagi','2 Tahun lagi','3 Tahun lag0i','4 Tahun lagi','5 Tahun lagi','6 Tahun lagi','7 Tahun lagi','8 Tahun lagi','9 Tahun lagi','10 Tahun lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://instagram/iamkizakixd`,}
}, text: '*Pertanyaan : '+kapankah+'*\n\n*Jawaban :* '+ koh}, { quoted: m })
}
break
		case 'watakcek': case 'cekwatak':
const watak = body.slice(0)
const wa =['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const tak = wa[Math.floor(Math.random() * wa.length)]
zex.sendMessage(from, { text: 'Pertanyaan : *'+watak+'*\n\nJawaban : '+ tak}, { quoted: fkontak })
break				
		case 'hobbycek': case 'cekhobby':
const hobby = body.slice(0)
const hob =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const by = hob[Math.floor(Math.random() * hob.length)]
zex.sendMessage(from, { text: 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by}, { quoted: fkontak })
break
case 'cebelapaimutciaku': case 'seberapaimutsiaku':{
if (!isGroup) return m.reply('Kusus group')
const edgar = body.slice(0)
const nanya =['*79%*\n\nImut Banget Loh Kawai><','*15%*\n\nKamu imut kata mamakmu:v🗿','*30%*\n\nMene Ketehe Kok Tanya saya\nMinimal Mandi🗿','*28%*\n\nIya deh Cipaling Imut;)','*100%*\n\nPap imutnya dulu dong:v😘']
const pret = nanya[Math.floor(Math.random() * nanya.length)]
zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `RangelChan`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://instagram/iamkizakixd`,}
}, text: '*Pertanyaan : '+edgar+'*\n\n*Jawaban :* '+ pret}, { quoted: m })
}
break
		case 'cekmemek':
			case 'cekmeki':
				 if (!isGroup) return onlyGroup()
if (!q) return m.reply('tag temanmu!')
				const persengayy = body.slice(0)
					const gay = ["*Udah Ga Perawan:v*\n• Warna Item🙈\n• Bulu Lebat\n• Katanya Polos Ko Lima Jari Lolos Chuackk","*Masih Perawan*\n• Warna Pink🤤\n• Tidak Berbulu\n• Wah Yang ini Buat Owner Ku Aja😋","*Bjir Bau 😵‍💫*\n\n• Kang Colmek\n• Sangat Lebat:v\n• Ishh Sarang Jin Itu😵","*Masih Perawan*\n• Warna Putih Mati\n• Masih Polos\n• Sepertinya Anda Butuh Kehangatan Dari Owner ku🥸 ","*Meki nya Semu Coklat*\n • Korban Pemerkosaan 😑\n• Lu Sih Main Ma Kumpulan Cowo Sengklek\n• Sebaiknya Jan Terlalu Gegabah 🤧","*Normal Seperti Biasanya*\n• Wuanjay Ko Bulu Nya Pada Kriput🙈\n• Ternyata Oh Ternyata Kamu Suka Lesby🫤","*Bahaya Noh Gan*\n• Udah Kena Virus\n• Kalo wik wik Ntar Ke Patil Cowoknya\n😶‍🌫️Takut BerNanah Kelamin Ku ntarr😬","*Lah Ireng Amat bjirr*\n• Hati² Sama Ni Orang Beneran Dah\n• Jangankan Pria Hewan Pun Dia Layani🫣","*74%*\n*Astagfirullah Kabur Gan🏃🌬️*"]
				const kl = gay[Math.floor(Math.random() * gay.length)]
		zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://instagram/iamkizakixd`,}
}, text :'Hasil Dari: *'+persengayy+'*\n\nJawaban : '+kl}, { quoted: fkontak })
				break  

			case 'cekkontol':
				if (!isGroup) return onlyGroup()
if (!q) return setReply('Mana Nama?')

	const persenbucin = body.slice (0)
		const bucin =
					["Hadehh🤦\n[ Dah Item Bauk Lagi ishh🤮 ]","9%\n\nMasih Kecil Ini Mah Ketutup Ama bulu komt nya🗿 Ae","Nakk Masih Kecil","28%\n\nYoalahh hmm","34%\n\nMayan Lah","48%\n\nGatau","59%\n\nBiasa Kang Coli Mah Tityd nya Item🗿","apacoba\nKasian Mana Masih Muda","itu tityd apa terong"," Ya Ampun"]
				const ehan = bucin[Math.floor(Math.random() * bucin.length)]
		zex.sendMessage(from, { contextInfo: { externalAdReply: { showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://instagram/iamkizakixd`,}
}, 
text : 'cekkomtlo🗿: *'+persenbucin+'*\n\nJawaban : '+ ehan}, { quoted: fkontak })
				break 

	case 'cekme':{
if (!isGroup) return setReply(mess.only.group)
let ppimg = await zex.profilePictureUrl(sender, 'image').catch(_ => 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg')
const sifat =['Baek','Jutek','Ngeselin','Bobrok','Pemarah','Sopan','Beban','Sangean','Cringe','Pembohong']
const hoby =['Memasak','Membantu Atok','Mabar','Nobar','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']
const bukcin =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const arp =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cakep =['Iyaa cakep','Maaf Kak, Banyak² Perawatan Ya','Jelek ajg','Cakep banget😍','❌','✔️']
const wetak=['Penyayang','Pemurah','Pemarah','Pemaaf','Penurut','Baik','Baperan','Baik Hati','penyabar','UwU','top deh, pokoknya','Suka Membantu']
const baikk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const bhuruk =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const cerdhas =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const berhani =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const mengheikan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
const suka = ['Makan','Tidur','Main Game','Sesama Jenis','Binatang',`Seseorang Yang ${pushname} Sukai`,'Belajar','Ibadah','Diri Sendiri']
const sipat = sifat[Math.floor(Math.random() * sifat.length)]
const biho = hoby[Math.floor(Math.random() * hoby.length)]
const bhucin = bukcin[Math.floor(Math.random() * bukcin.length)]
const senga = arp[Math.floor(Math.random() * arp.length)]
const chakep = cakep[Math.floor(Math.random() * cakep.length)]
const watak = wetak[Math.floor(Math.random() * wetak.length)]
const baik = baikk[Math.floor(Math.random() * baikk.length)]
const burug = bhuruk[Math.floor(Math.random() * bhuruk.length)]
const cerdas = cerdhas[Math.floor(Math.random() * cerdhas.length)]
const berani = berhani[Math.floor(Math.random() * berhani.length)]
const takut = mengheikan[Math.floor(Math.random() * mengheikan.length)]
const gai = suka[Math.floor(Math.random() * suka.length)]

let its = await getBuffer (ppimg)
let teks = `─────〈〈 *PRIVATE CHECK* 〉〉─────

∘ *Nama :*  ${pushname}
∘ *Sifat :*  ${sipat}
∘ *Bucin :*  ${bhucin}%
∘ *Cakep :*  ${chakep}
∘ *Watak :*  ${watak}
∘ *Hobby :*  ${biho}
∘ *Ketakutan :*  ${takut}%
∘ *Keberanian :*  ${berani}%
∘ *Kecerdasan :*  ${cerdas}%
∘ *Akhlak Baik :*  ${baik}%
∘ *Akhlak Buruk :*  ${burug}%
∘ *Menyukai :* ${gai} `
zex.sendMessage(from, { contextInfo: { externalAdReply: {showAdAttribution: true,
title: `${week} , ${calender}ㅤㅤㅤㅤㅤㅤㅤㅤㅤ`,body:`⌜ ${ucapanWaktu} ⌟`,previewType:"PHOTO",thumbnail: its,sourceUrl: `https://tinyurl.com/2p7fks3c`,}
}, image: its, caption: teks}, { quoted: m })
}

break
	case 'artinama': {
if (!q) return setReply( `Example : ${prefix + command} Zakk`)
let anu = await primbon.arti_nama(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Nama :* ${anu.message.nama}
∘ *Arti :* ${anu.message.arti}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break	 

 // ===================================== //
case 'artimimpi': case 'tafsirmimpi': {
if (!q) return setReply( `Example : ${prefix + command} belanja`)
let anu = await primbon.tafsir_mimpi(q)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Mimpi :* ${anu.message.mimpi}
• *Arti :* ${anu.message.arti}
• *Solusi :* ${anu.message.solusi}`
setReply(teks)
}
break
 case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Zakk|Chitanda`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break   
case 'ramalancinta': case 'ramalcinta': {
if (!q) return setReply( `Example : ${prefix + command} Zakk, 28, 6, 2004, angel, 16, 11, 2004`)
let [nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2] = q.split`,`
let anu = await primbon.ramalan_cinta(nama1, tgl1, bln1, thn1, nama2, tgl2, bln2, thn2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda.nama}
• *Lahir Anda :* ${anu.message.nama_anda.tgl_lahir}
• *Nama Pasangan :* ${anu.message.nama_pasangan.nama}
• *Lahir Pasangan :* ${anu.message.nama_pasangan.tgl_lahir}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}
• *Catatan :*
${anu.message.catatan}`
setReply(teks)
}
break   
case 'kecocokannama': 
case 'cocoknama': {
if (!q) return setReply( `Example : ${prefix + command} Zakk, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.kecocokan_nama(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Life Path :* ${anu.message.life_path}
• *Destiny :* ${anu.message.destiny}
• *Destiny Desire :* ${anu.message.destiny_desire}
• *Personality :* ${anu.message.personality}
• *Persentase :* ${anu.message.persentase_kecocokan}`
setReply(teks)
}
break 
		case 'kecocokanpasangan':
case 'cocokpasangan':
case 'pasangan': {
if (!q) return setReply( `Example : ${prefix + command} Dika|Novia`)
let [nama1, nama2] = q.split`|`
let anu = await primbon.kecocokan_nama_pasangan(nama1, nama2)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama Anda :* ${anu.message.nama_anda}
• *Nama Pasangan :* ${anu.message.nama_pasangan}
• *Sisi Positif :* ${anu.message.sisi_positif}
• *Sisi Negatif :* ${anu.message.sisi_negatif}`
setReply(teks)
}
break
case 'jadiannikah': {
if (!q) return setReply( `Example : ${prefix + command} 6, 12, 2020`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.tanggal_jadian_pernikahan(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal Pernikahan :* ${anu.message.tanggal}
• *karakteristik :* ${anu.message.karakteristik}`
setReply(teks)
}
break
case 'sifatusaha': {
if (!q) return setReply( `Example : ${prefix + command} 28, 12, 2021`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_usaha_bisnis(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Usaha :* ${anu.message.usaha}`
setReply(teks)
}
break
		case 'rejeki': 
case 'rezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rejeki_hoki_weton(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Rezeki :* ${anu.message.rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'pekerjaan':  {
if (!q) return setReply( `Example : ${prefix + command}  7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.pekerjaan_weton_lahir(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.hari_lahir}
• *Pekerjaan :* ${anu.message.pekerjaan}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'ramalnasib': 
case 'nasib': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.ramalan_nasib(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Angka Akar :* ${anu.message.angka_akar}
• *Sifat :* ${anu.message.sifat}
• *Elemen :* ${anu.message.elemen}
• *Angka Keberuntungan :* ${anu.message.angka_keberuntungan}`
setReply(teks)
}
break 
case 'penyakit': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.cek_potensi_penyakit(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Analisa :* ${anu.message.analisa}
• *Sektor :* ${anu.message.sektor}
• *Elemen :* ${anu.message.elemesektorn}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'artitarot': 
case 'tarot': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.arti_kartu_tarot(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Simbol Tarot :* ${anu.message.simbol_tarot}
• *Arti :* ${anu.message.arti}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'fengshui': {
if (!q) return setReply( `Example : ${prefix + command} Rangel, 1, 2005\n\nNote : ${prefix + command} Nama, gender, tahun lahir\nGender : 1 untuk laki-laki & 2 untuk perempuan`)
let [nama, gender, tahun] = q.split`,`
let anu = await primbon.perhitungan_feng_shui(nama, gender, tahun)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama} 
• *Lahir :* ${anu.message.tahun_lahir}
• *Gender :* ${anu.message.jenis_kelamin}
• *Angka Kua :* ${anu.message.angka_kua}
• *Kelompok :* ${anu.message.kelompok}
• *Karakter :* ${anu.message.karakter}
• *Sektor Baik :* ${anu.message.sektor_baik}
• *Sektor Buruk :* ${anu.message.sektor_buruk}`
setReply(teks)
}
break
case 'haribaik': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.petung_hari_baik(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
•™*Kala Tinantang :* ${anu.message.kala_tinantang}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisangar': 
case 'taliwangke': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.hari_sangar_taliwangke(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}
• *Info :* ${anu.message.info}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'harisial': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_hari_naas(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Hari Naas :* ${anu.message.hari_naas}
• *Info :* ${anu.message.catatan}
• *Catatan :* ${anu.message.info}`
setReply(teks)
}
break
case 'harinaga': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.rahasia_naga_hari(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *Tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Naga Hari :* ${anu.message.arah_naga_hari}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'arahrejeki': 
case 'arahrezeki': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.primbon_arah_rejeki(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Hari Lahir :* ${anu.message.hari_lahir}
• *tanggal Lahir :* ${anu.message.tgl_lahir}
• *Arah Rezeki :* ${anu.message.arah_rejeki}
• *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
case 'peruntungan': {
if (!q) return setReply( `Example : ${prefix + command} Zakk, 28, 6, 2004, 2022\n\nNote : ${prefix + command} Nama, tanggal lahir, bulan lahir, tahun lahir, untuk tahun`)
let [nama, tgl, bln, thn, untuk] = q.split`,`
let anu = await primbon.ramalan_peruntungan(nama, tgl, bln, thn, untuk)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Peruntungan Tahun :* ${anu.message.peruntungan_tahun}
• *Hasil :* ${anu.message.result}
• *Catatan :* ${anu.message.catatan}`
}
break
case 'weton': 
case 'wetonjawa': {
if (!q) return setReply( `Example : ${prefix + command} 7, 7, 2005`)
let [tgl, bln, thn] = q.split`,`
let anu = await primbon.weton_jawa(tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Tanggal :* ${anu.message.tanggal}
• *Jumlah Neptu :* ${anu.message.jumlah_neptu}
• *Watak Hari :* ${anu.message.watak_hari}
• *Naga Hari :* ${anu.message.naga_hari}
• *Jam Baik :* ${anu.message.jam_baik}
• *Watak Kelahiran :* ${anu.message.watak_kelahiran}`
setReply(teks)
}
break
case 'karakter': {
if (!q) return setReply( `Example : ${prefix + command} Zakk, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.sifat_karakter_tanggal_lahir(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Garis Hidup :* ${anu.message.garis_hidup}`
setReply(teks)
}
break
case 'keberuntungan': {
if (!q) return setReply( `Example : ${prefix + command} Zakk, 28, 6, 2004`)
let [nama, tgl, bln, thn] = q.split`,`
let anu = await primbon.potensi_keberuntungan(nama, tgl, bln, thn)
if (anu.status == false) return m.reply(anu.message)
let teks = `
• *Nama :* ${anu.message.nama}
• *Lahir :* ${anu.message.tgl_lahir}
• *Hasil :* ${anu.message.result}`
setReply(teks)
}
break
case 'masasubur': {
if (!q) return setReply( `Example : ${prefix + command} 12, 1, 2022, 28\n\nNote : ${prefix + command} hari pertama menstruasi, siklus`)
let [tgl, bln, thn, siklus] = q.split`,`
let anu = await primbon.masa_subur(tgl, bln, thn, siklus)
if (anu.status == false) return m.reply(anu.message)
let teks = `
•  *Hasil :* ${anu.message.result}
•  *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break
	case 'zodiak': 
case 'zodiac': {
if (!q) return setReply( `Example : ${prefix + command} 7 7 2005`)
let zodiak = [
										["capricorn", new Date(1970, 0, 1)],
										["aquarius", new Date(1970, 0, 20)],
										["pisces", new Date(1970, 1, 19)],
										["aries", new Date(1970, 2, 21)],
										["taurus", new Date(1970, 3, 21)],
										["gemini", new Date(1970, 4, 21)],
										["cancer", new Date(1970, 5, 22)],
										["leo", new Date(1970, 6, 23)],
										["virgo", new Date(1970, 7, 23)],
										["libra", new Date(1970, 8, 23)],
										["scorpio", new Date(1970, 9, 23)],
										["sagittarius", new Date(1970, 10, 22)],
										["capricorn", new Date(1970, 11, 22)]
].reverse()
function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
let date = new Date(q)
if (date == 'Invalid Date') throw date
let d = new Date()
let [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
let birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
let zodiac = await getZodiac(birth[1], birth[2])
let anu = await primbon.zodiak(zodiac)
if (anu.status == false) return m.reply(anu.message)
let teks = `
∘ *Zodiak :* ${anu.message.zodiak}
∘ *Nomor :* ${anu.message.nomor_keberuntungan}
∘ *Aroma :* ${anu.message.aroma_keberuntungan}
∘ *Planet :* ${anu.message.planet_yang_mengitari}
∘ *Bunga :* ${anu.message.bunga_keberuntungan}
∘ *Warna :* ${anu.message.warna_keberuntungan} 
∘ *Batu :* ${anu.message.batu_keberuntungan}
∘ *Elemen :* ${anu.message.elemen_keberuntungan}
∘ *Pasangan Zodiak :* ${anu.message.pasangan_zodiak}
∘ *Catatan :* ${anu.message.catatan}`
setReply(teks)
}
break


case 'wangy':
							if (!q) return setReply('query')
							let qq = q.toUpperCase()
							let awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
							setReply(awikwok)
							break
//========= MENU SKULL =========//
case 'kalkulator':{
	let text12 = `
╭─────────────────✧
│• tambah
│• kali
│• bagi
│• kurang
╰─────────────────✧`
zex.sendMessage(from, {text: text12}, {quoted: m})
}
break
case 'tambah':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`${nilai_one + nilai_two}`)
}
break
case 'kurang':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one - nilai_two}`)
}
break
case 'kali':{
if (!q) return setReply(`Gunakan dengan cara ${command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one * nilai_two}`)
}
break
case 'bagi':{
if (!q) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${command} 1 2`)
var num_one = q.split(' ')[0]
var num_two = q.split(' ')[1]
if (!num_one) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
if (!num_two) return setReply(`Gunakan dengan cara ${prefix+command} *angka* *angka*\n\n_Contoh_\n\n${prefix+command} 1 2`)
var nilai_one = Number(num_one)
var nilai_two = Number(num_two)
setReply(`yaitu ${nilai_one / nilai_two}`)
}
break
//========== INFO BOT ============//
 case 'premium': case 'buyprem': {
let anu = `𝗨𝗦𝗘𝗥 𝗣𝗥𝗘𝗠𝗜𝗨𝗠

╭───❒「  *𝘉𝘶𝘺 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.pengguna baru 10k
│ │•⟢.masa aktif 500 Hari 
│ │•⟢.pengguna bru 25k
│ │•⟢.masa aktip 1500 Hari
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙
`+readmore+`
╭───❒「  *𝘍𝘪𝘵𝘶𝘳 𝘗𝘳𝘦𝘮* 」
│ ╭୧⍤⃝───────────┈◦•◦❥•◦
│ │•⟢.limit tanpa batas
│ │•⟢.Fitur premium Terbuka
│ │•⟢.Nsfw Terbuka 🙆
│ │•⟢.Dll
│ ꒰⚘݄꒱₊___________________˓˓ ⍥⃝⃝ ˒˒
╰─────────────────────⁛⸙

𝗡𝗢𝗧𝗘 : 

Kegunaannya untuk Fitur Premium
Limit tanpa batas (Unlimited) .

jika minat chat owner ini ${nomerOwner}
`
zex.relayMessage(m.chat,  {
		requestPaymentMessage: {
			currencyCodeIso4217: 'INR',
			amount1000: 1234567,
			requestFrom: m.sender,
			noteMessage: {
			extendedTextMessage: {
			text: anu,
			contextInfo: {
			externalAdReply: {
			showAdAttribution: true
			}}}}}}, {})
			}
			break
 case 'ping':
						case 'botstatus':
						case 'statusbot': {
								const used = process.memoryUsage()
								const cpus = os.cpus().map(cpu => {
										cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
										return cpu
								})
								const cpu = cpus.reduce((last, cpu, _, {
										length
								}) => {
										last.total += cpu.total
										last.speed += cpu.speed / length
										last.times.user += cpu.times.user
										last.times.nice += cpu.times.nice
										last.times.sys += cpu.times.sys
										last.times.idle += cpu.times.idle
										last.times.irq += cpu.times.irq
										return last
								}, {
										speed: 0,
										total: 0,
										times: {
												user: 0,
												nice: 0,
												sys: 0,
												idle: 0,
												irq: 0
										}
								})
								let timestamp = speed()
								let latensi = speed() - timestamp
								neww = performance.now()
								oldd = performance.now()
								respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
								await zex.sendMessage(m.chat, {
										text: respon,
										contextInfo: {
												externalAdReply: {
														showAdAttribution: true,
														title: 'STATUS SERVER',
														body: `${latensi.toFixed(4)} Second`,
														thumbnailUrl: 'https://telegra.ph/file/726d9c4068efaa72af0cd.jpg',
														sourceUrl: '-',
														mediaType: 1,
														renderLargerThumbnail: true
												}
										}
								}, {
										quoted: m
								})
						}
						break
case 'totalfitur':{ 
setReply(`_TOTAL FITUR BOT CASE SAAT INI ${totalFitur()} FITUR_`)
}
break
case 'runtime':{
setReply(`*Rangel Aktif* ${runtime(process.uptime())}`)
}
break
case 'owner': {
const repf = await zex.sendMessage(from, { 
contacts: { 
displayName: `${list.length} Kontak`, 
contacts: list }, contextInfo: {
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid: [sender]
}}, { quoted: m })
zex.sendMessage(from, { text : `Hai Kak @${sender.split("@")[0]}, Hii itu nomor owner ku jan spam yak:)`, contextInfo:{
forwardingScore: 9999999, 
isForwarded: true,
mentionedJid:[sender]
}}, { quoted: repf })
}
break
//========= SETTINGS ==========//

case 'setnamebot':
	if (!isOwner) return onlyOwner()
	setReply(`Berhasil mengubah nama bot ke ${q}`)
	fake = `${q}`
	break
case 'setbio':
{
if (!isOwner && !itsMe) return setReply("Khusus Owner")
if (!q) return setReply(`Kirim perintah ${prefix+command} nama\n\nContoh : ${command} sedang berak`)
await zex.updateProfileStatus(q)
await setReply(`Berhasil mengganti status bio ke *${q}*`)
}
break
/*case 'setppbot':
								if (!isOwner) return setReply(mess.owner)
								if (!quoted) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
								if (!/image/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
								if (/webp/.test(mime)) return setReply(`Kirim/newReply Image Dengan Caption ${prefix + command}`)
								var medis = await zex.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
								if (args[0] == 'full') {
										var {
												img
										} = await generateProfilePicture(medis)
										await zex.query({
												tag: 'iq',
												attrs: {
														to: botNumber,
														type: 'set',
														xmlns: 'w:profile:picture'
												},
												content: [{
														tag: 'picture',
														attrs: {
																type: 'image'
														},
														content: img
												}]
										})
										fs.unlinkSync(medis)
										setReply(mess.succes)
								} else {
										var memeg = await zex.updateProfilePicture(botNumber, {
												url: medis
										})
										fs.unlinkSync(medis)
										setReply(mess.succes)
								}
								break*/

//======= MENU RANDOM =======
case 'bucinsertifikat':
				case 'sertifikatbucin':
			case 'bucinserti':
				if (args.length == 0) return setReply(`Example: ${prefix + command} zakk & chican\n bjir lah love you`)
				setReply(mess.wait)
				let kueri = args.join(" ")
								zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/bucinserti?apikey=${api.Lol}&name=${kueri}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
						break
case 'tololserti':
			case 'tololcert':
			case 'tololsertifikat':
			if (args.length == 0) return setReply(`Contoh: ${prefix + command} izmi Kontol`)
			setReply(mess.wait)
			let ytta = args.join(" ")
						zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/toloserti?apikey=${api.Lol}&name=${ytta}`}, caption: 'Sertifikatnya kack'}, {quoted: m})
						break
case 'pacarsertifikat':
			case 'pacarserti':
						if (args.length == 0) return setReply(`Usage: ${prefix + command} nama1|nama2`)
						setReply(mess.wait)
							let  get_args = args.join(" ").split("|")
							let  nik = get_args[0]
							let  prov = get_args[1]
				let  titidnya = `Selamat yaa ${nik} ❤️ ${prov}`
						zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/pacarserti?apikey=${api.Lol}&name1=${nik}&name2=${prov}`}, caption: titidnya}, {quoted: m})
						break
case 'pornhub':
		case 'glitch':
		case 'avenger':
		case 'space':
		case 'ninjalogo':
		case 'marvelstudio':
		case 'lionlogo':
		case 'wolflogo':
		case 'steel3d':
		case 'wallgravity':
			if (args.length == 0) return setReply(`Example: ${prefix + command} Zakk`)
						db.data.users[m.sender].limit -= 4 // -1 limit
			setReply(mess.wait)
			zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome2/${command}?apikey=${api.Lol}&text1=${args[0]}&text2=${args[1]}`}, caption: `© Hoshino Botz\n\n Type: ${command}`})
			break
case 'blackpink':
		case 'neon':
		case 'greenneon':
		case 'advanceglow':
		case 'futureneon':
		case 'sandwriting':
		case 'sandsummer':
		case 'sandengraved':
		case 'metaldark':
		case 'neonlight':
		case 'holographic':
		case 'text1917':
		case 'minion':
		case 'deluxesilver':
		case 'newyearcard':
		case 'bloodfrosted':
		case 'halloween':
		case 'jokerlogo':
		case 'fireworksparkle':
		case 'natureleaves':
		case 'bokeh':
		case 'toxic':
		case 'strawberry':
		case 'box3d':
		case 'roadwarning':
		case 'breakwall':
		case 'icecold':
		case 'luxury':
		case 'cloud':
		case 'summersand':
		case 'horrorblood':
		case 'thunder':
			if (args.length == 0) return setReply(`Example: ${prefix + command} HoshinoBotz`)
						db.data.users[m.sender].limit -= 2 // -1 limit
			setReply(mess.wait)
			zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/textprome/${command}?apikey=${api.Lol}&text=${args}` }, caption: `© Hoshino Botz\n\n Type: ${command}\n\nText: ${args}`})
			break
case 'cyberspace':
						case 'mountain':
						case 'programming':
						case 'technology': {
						setReply(mess.wait)
								let anu = await fetchJson(`https://raw.githubusercontent.com/Abuzzpoet/Databasee/main/Wallpaper/${command}.json`)
								result = anu[Math.floor(Math.random() * anu.length)]               
								zex.sendMessage(m.chat, { image: { url: result}, caption: mess.succes }, { quoted: m })
						}
						break
case 'cecan': case 'cogan': case 'hacker': case 'pubg': case 'boneka':
if (!isGroup) return onlyGroup()
setReply(mess.wait)
zex.sendMessage(from, { image: { url: `https://api.zahwazein.xyz/randomimage/${command}?apikey=${api.angel}` } })
break
case 'jam':
	const currentTime = new Date();
	const hours = currentTime.getHours();
	const minutes = currentTime.getMinutes();
	const formattedTime = `${hours}:${minutes < 10 ? '0' + minutes : minutes}`;
	zex.sendText(sender, `Sekarang pukul ${formattedTime} WIB.`);
	break;
case 'wattpad': {
if (!isGroup) return onlyGroup()
if (!q) return setReply(`Example : ${prefix + command} selingkuh`)
setReply(mess.wait)
let res = await fetch(`https://api.betabotz.org/api/webzone/wattpad?query=${q}&apikey=2fbgCgOB`)
let data = await res.json()
						let teks = `Wattpad\n\n`
						for (let i of data.result){
teks += `*Judul* : ${i.judul}\n`
teks += `*Dibaca* : ${i.dibaca}×\n`
teks += `*Divote* : ${i.divote}×\n`
teks += `*Thumb* : ${i.thumb}\n`
teks += `*Link* : ${i.link}\n\n`
						}
setReply(teks)
						}
						break
case 'playstore':{
if (!isGroup) return onlyGroup()
						if (!q) return setReply(`Example : ${prefix + command} clash of clans`)
						setReply(mess.wait)
						let res = await fetch(`https://api.betabotz.org/api/search/playstore?app=${q}&apikey=2fbgCgOB`)
						let data = await res.json()
						let teks = `⭔ Playstore Search From : ${q}\n\n`
						for (let i of data.result) {
						teks += `⭔ Name : ${i.nama}\n`
						teks += `⭔ Link : ${i.link}\n`
						teks += `⭔ Developer : ${i.developer}\n`
						teks += `⭔ Link Developer : ${i.link_dev}\n\n──────────────────────\n`
						}
						setReply(teks)
						}
						break

case 'brainly':{
			if (!q) return m.reply(`Example: ${prefix + command} siapakah sukarno`)
			m.reply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/brainly?apikey=${api.Lol}&query=${q}`)
			var ti  = 'Beberapa Pembahasan Dari Brainly :\n\n'
			for (var x of data.result) {
				ti  += `==============================\n`
				ti  += `\`\`\`Pertanyaan :\`\`\`\n${x.question.content}\n\n`
				ti  += `\`\`\`Jawaban :\`\`\`\n${x.answer.content}\n`
				ti  += `==============================\n\n`
			}
			setReply(ti )
			}
			break
				case 'ppcp': case 'couple': case ' ppcouople': {
if (!isGroup) return onlyGroup()
								setReply(mess.wait)
								let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
								let random = anu[Math.floor(Math.random() * anu.length)]
								zex.sendMessage(m.chat, { image: { url: random.male }, caption: `Couple Male` }, { quoted: m })
								zex.sendMessage(m.chat, { image: { url: random.female }, caption: `Couple Female` }, { quoted: m })
						}
			break	    
				case 'pantun': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/pantun?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
 case 'dilanquote': {
if (!isGroup) return onlyGroup()
let ewe = await fetch(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${api.Lol}`)
let hasil = await ewe.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'motivasi': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'katabijak': {
if (!isGroup) return onlyGroup()
let zeltoria = await fetch(`https://api.lolhuman.xyz/api/random/katabijak?apikey=${api.Lol}`)
let hasil = await zeltoria.json()
setReply(`${hasil.result}`.trim())
 }
 break
case 'truth': case 'dare': {
if (!isGroup) return onlyGroup()
let rangel = await fetch(`https://api.betabotz.org/api/random/${command}?apikey=2fbgCgOB`)
let hasil = await rangel.json()
 setReply(`${hasil.result}`.trim())
 }
 break
case 'infocuaca':{
			if (!q) return m.reply(`Example: ${prefix + command} Tasikmalaya`)
			setReply(mess.wait)
			var { data } = await axios.get(`https://api.lolhuman.xyz/api/cuaca/${q}?apikey=${api.Lol}`)
			var titttttttttt = `Tempat : ${data.result.tempat}\n`
			titttttttttt += `Cuaca : ${data.result.cuaca}\n`
			titttttttttt += `Angin : ${data.result.angin}\n`
			titttttttttt += `Description : ${data.result.description}\n`
			titttttttttt += `Kelembapan : ${data.result.kelembapan}\n`
			titttttttttt += `Suhu : ${data.result.suhu}\n`
			titttttttttt += `Udara : ${data.result.udara}\n`
			titttttttttt += `Permukaan laut : ${data.result.permukaan_laut}\n`
			zex.sendMessage(m.chat, { location: { degreesLatitude: data.result.latitude, degreesLongitude: data.result.longitude } })
		 setReply(titttttttttt)
			}
			break
				case 'cekmember': {
	if (!m.isGroup) return setReply(mess.group)

	const participants = await zex.groupMetadata(m.chat).then(metadata => metadata.participants);

	let countIndonesia = 0;
	let countMalaysia = 0;
	let countUSA = 0;
	let countOther = 0;

	participants.forEach(participant => {
		const phoneNumber = participant.id.split('@')[0];
		if (phoneNumber.startsWith("62")) {
			countIndonesia++;
		} else if (phoneNumber.startsWith("60")) {
			countMalaysia++;
		} else if (phoneNumber.startsWith("1")) {
			countUSA++;
		} else if (phoneNumber.startsWith("+1")) {
			countOther++;
		} else {
			countOther++;
		}
	});

	const replyMessage = `Jumlah Anggota Grup Berdasarkan Negara:\n\nAnggota Indonesia: ${countIndonesia} 🇮🇩\nAnggota Malaysia: ${countMalaysia} 🇲🇾\nAnggota USA + OTHER : ${countUSA} 🇺🇲\nAnggota Negara Lain: ${countOther} 🏳️`;
	setReply(replyMessage);
	break;
}



 case 'memeindo':
								setReply(mess.wait)
								zex.sendMessage(m.chat, { image: { url: `https://api.lolhuman.xyz/api/meme/memeindo?apikey=${api.Lol}`}, caption: `sangad Cringe Kaya idup Lo🗿`}, {quoted: m})
						break
case 'tiktokghea':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/gheayubi.json'))
var hasil = pickRandom(gheayubi)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'cosplayangel':
setReply(mess.wait)
var gheayubi = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/cosplayangel.json'))
var hasil = pickRandom(gheayubi)
zex.sendMessage(m.chat, { caption: 'nih bang Zakk\ningat jangan Gamon yak\nAng3l udah pergi;)', video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokbocil':
setReply(mess.wait)
var bocil = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/bocil.json'))
var hasil = pickRandom(bocil)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videosad':
setReply(mess.wait)
var ukhty = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/videosad.json'))
var hasil = pickRandom(ukhty)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'wibuvid':
setReply(mess.wait)
var santuy = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/wibuvid.json'))
var hasil = pickRandom(santuy)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokkayes':
setReply(mess.wait)
var kayes = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/kayes.json'))
var hasil = pickRandom(kayes)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'tiktokpanrika':
setReply(mess.wait)
var rikagusriani = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/panrika.json'))
var hasil = pickRandom(rikagusriani)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break
case 'videogalau':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokvids/galau.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, video: { url: hasil.url }}, { quoted: m })
break   
 // ============================ //
case 'chinese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/china.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'hijab':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/hijab.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'indo':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/indonesia.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'japanese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/japan.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'korean':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/korea.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'malay':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/malaysia.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomgirl':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'randomboy':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/random2.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'thai':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/thailand.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break
case 'vietnamese':
setReply(mess.wait)
var notnot = JSON.parse(fs.readFileSync('./HostMedia/tiktokpics/vietnam.json'))
var hasil = pickRandom(notnot)
zex.sendMessage(m.chat, { caption: mess.success, image: { url: hasil.url } }, { quoted: m })
break       
case 'openai':{
if (!isOwner && !isAdmins) return setReply(mess.only.admin)
 try {
if (global.keyopenai === '') return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return setReply(`Chat dengan AI.\n\nContoh:\n${command} Apa itu coding`)
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
setReply(`${response.data.choices[0].text}`);
} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
setReply("Maaf, sepertinya ada yang error :"+ error.message);
}
}
}
break


case 'sendkontak': case 'kontak':{
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (!isGroup) return m.reply(mess.only.group)
if (!m.mentionedJid[0]) return m.reply('Ex; .kontak @tag|nama')
let snTak = text.split(' ')[1] ? text.split(' ')[1] : 'Contact'
let snContact = {
	displayName: "Contact", contacts: [{displayName: snTak, vcard: "BEGIN:VCARD\nVERSION:3.0\nN:;"+snTak+";;;\nFN:"+snTak+"\nitem1.TEL;waid="+m.mentionedJid[0].split('@')[0]+":"+m.mentionedJid[0].split('@')[0]+"\nitem1.X-ABLabel:Ponsel\nEND:VCARD"}]
} // (?); send kontak
zex.sendMessage(m.chat, {contacts: snContact}, {ephemeralExpiration: 86400})
}
break
case "savecontactid": {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (isGroup) return m.reply(mess.only.private)
if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup\nUntuk Liat Id Group Silahkan Ketik listgc`)
await m.reply(mess.wait)
const groupMetadataa = !isGroup? await zex.groupMetadata(`${text}`).catch(e => {}) : ""
const participants = !isGroup? await groupMetadataa.participants : ""
const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (isContacts) return
contacts.push(mem)
fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
}
try {
const uniqueContacts = [...new Set(contacts)];
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:WA[${createSerial(2)}] ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n");
return vcard; }).join("");
fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
} catch (err) {
(util.format(err))
} finally {
await zex.sendMessage(from, { document: fs.readFileSync("./database/contacts.vcf"), fileName: "contacts.vcf", caption: "Sukses Tinggal Save Ya Kakak", mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
}
}
break

case 'unbanwa': {
if (!isOwner && !isAdmins) return m.reply(mess.only.admin)
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return m.reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Kepada team WhatsApp
Akun whatsapp teman saya terkena blokir dan terdeteksi spam,mohon pulihkan akun WhatsApp ini [${targetnya}]`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19572.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007965968")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
m.reply(`Harap Bersabar Dan Tunggu 1-24 Jam Proses unbanned Menggunakan Bot \nDilarang Spam Unbanned Agar Akun WhatsApp Anda Tidak Terkena Banned Permanent!`)
m.reply(mess.wait)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
m.reply(`##- WhatsApp Support -##

Halo,

Terima kasih telah menghubungi kami.

Sistem kami menandai aktivitas akun Anda sebagai pelanggaran terhadap Ketentuan Layanan kami dan memblokir nomor telepon Anda. Kami sangat menghargai Anda sebagai pengguna. Mohon maaf atas kebingungan atau ketidaknyamanan yang disebabkan oleh masalah ini.

Kami telah menghapus pemblokiran setelah meninjau aktivitas akun Anda. Sekarang seharusnya Anda sudah memiliki akses ke WhatsApp.

Sebagai langkah selanjutnya, kami sarankan untuk mendaftarkan ulang nomor telepon Anda di WhatsApp untuk memastikan Anda memiliki akses.
Anda dapat mengunjungi situs web kami untuk mengunduh WhatsApp atau aplikasi WhatsApp Business.
Anda dapat mempelajari selengkapnya mengenai cara menggunakan WhatsApp secara bertanggung jawab di artikel Pusat Bantuan ini.

Catatan: Kami tidak menyediakan dukungan untuk aplikasi, perangkat, atau versi WhatsApp yang tidak didukung, atau perangkat yang di-jailbreak atau di-root. Pelajari selengkapnya mengenai sistem operasi yang didukung di artikel ini. Untuk informasi selengkapnya mengenai aplikasi tidak resmi dan alasan kami tidak mendukung aplikasi tersebut, silakan baca artikel ini.

--
Tim Dukungan WhatsApp

Silakan kunjungi Pusat Bantuan kami.`)
} else m.reply(util.format(res.data))
} catch (err) {m.reply(`${err}`)}
} else m.reply('Masukkan nomor target!')
}
break


default:
//==============BATAS NYA==========//
//ketika ada yang invite/kirim link grup di chat pribadi
//Di kasih ama Alyul
if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isOwner) {
let teks = ('ngapain Ksk Kirim Ljnk Group,Jika Ingin Masukin Bot Ke Group Kaka Chat Owner Ku Terlebih Dahulu Ya Kak')      
m.reply (teks)
}
//Jika ada yg kirim pesan "Asalamualaikun" botz akan respon✓
if (budy.includes(`ualaikum`) || budy.includes(`u'alaikum`) ) { 
if (cekSpam("NotCase",senderNumber, AntiSpam)) return 
addSpam("NotCase",senderNumber, "10s", AntiSpam)
setReply("Walaikumsalam kak")
}
//Auto Download Video IG
if(budy.startsWith("https://www.instagram.com/reel/") || budy.startsWith('https://www.instagram.com/p/')){
try{
								let ag = await fetchJson(`https://api.lolhuman.xyz/api/instagram?apikey=${api.Lol}&url=${budy}`)
zex.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})                
								for (var i = 0; i < ag.result.length; i++) {
										let pap = ag.result[i].includes('.jpg') ? 'image' : 'video'
										await zex.sendMessage(m.chat, {
												[pap]: {
														url: ag.result[i]
												},
												caption: 'Auto Downloader Instagram'
										}, {
												quoted: m
										})
								}
} catch (err){ 
let res = await instagram3 (budy)
		for (let i of res) {
await sleep (2000)
zex.sendMedia(from, i, m)
//conn.sendFile(from, i, dev)
		}
}
}
//Auto Download Video Tiktok
if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
try{
 let e = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${api.Lol}&url=${budy}`)
 zex.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})
 let ee = `Auto Downloader Tiktok`
 await zex.sendMessage(m.chat, {video: { url: e.result.link }, caption: ee }, { quoted: m })


} catch (err){ return
}
}
if (budy.startsWith('=>')) {
if (!isOwner) return m.reply('*khusus Premium*')
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isOwner) return m.reply('*khusus Premium*')
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
if (!isOwner) return m.reply('*khusus Premium*')
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
zex.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
	}
 }
		} catch (err) {
				console.log("Eror Di Bagian zex.js "+util.format(err))
		}
}

//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
delete require.cache[file]
require(file)
	})
/*HANYA BOT YANG SUKA ERROR*/