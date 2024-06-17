process.on('uncaughtException', console.error) //Safe Log Error
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

//========== Via Database =========//
let afk = require("./lib/afk");
const { userXp, userLeveling, } = require("./lib/user");
const { addblockcmd, deleteblockcmd, checkblockcmd } = require ("./lib/blockcmd");
const { addError,clearAllError, deleteError, checkError } = require("./lib/totalerror")
const { msgFilter, addSpam, SpamExpired, cekSpam} = require('./lib/antispam')
const { Nothing,Failed,Succes,addAutoClear,autoClearChat, checkDataName, createDataId, addDataId, removeDataId, checkDataId, getHit, cmdAdd, expiredCmd } = require("./lib/totalcmd");
const _sewa = require('./lib/sewa')
const _prem = require("./lib/premium");
const { facebook, facebook2 } = require('./lib/scrapedl.js')
const { TiktokDownloader } = require('./lib/tiktokdl') 
//const { clearAllBan, addBanned, unBanned, cekBannedUser } = require("./lib/banned")
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

//rpg function\\
const { addInventoriDarah, cekDuluJoinAdaApaKagaDiJson, addDarah, kurangDarah, getDarah } = require('./storage/user/darah.js')
const { cekInventoryAdaAtauGak, addInventori, addBesi, addEmas, addEmerald, addUmpan, addPotion, kurangBesi, kurangEmas, kurangEmerald, kurangUmpan, kurangPotion, getBesi, getEmas, getEmerald, getUmpan, getPotion } = require('./storage/user/alat_tukar.js')
const { addInventoriMonay, cekDuluJoinAdaApaKagaMonaynyaDiJson, addMonay, kurangMonay, getMonay } = require('./storage/user/monay.js')
const { addInventoriLimit, cekDuluJoinAdaApaKagaLimitnyaDiJson, addLimit, kurangLimit, getLimit } = require('./storage/user/limit.js')
const { cekDuluHasilBuruanNya, addInventoriBuruan, addIkan, addAyam, addKelinci, addDomba, addSapi, addGajah, kurangIkan, kurangAyam, kurangKelinci, kurangDomba, kurangSapi, kurangGajah, getIkan, getAyam, getKelinci, getDomba, getSapi, getGajah } = require('./storage/user/buruan.js')
const { addInventoriBan, cekBannedUser, unBanned, getbanned } = require('./storage/listhitam/banned.js')

const { addSewaGroup, getSewaExpired, getSewaPosition, expiredCheck, checkSewaGroup } = require("./lib/sewa");
let sewa = JSON.parse(fs.readFileSync('./storage/group/sewa.json'));

let _cmd = JSON.parse(fs.readFileSync('./database/command.json'));
let _cmdUser = JSON.parse(fs.readFileSync('./database/commandUser.json'));
let register = JSON.parse(fs.readFileSync('./storage/user/register.json'))
let _registered = JSON.parse(fs.readFileSync('./storage/user/register.json'))
let captcha = fs.readFileSync('./storage/user/captcha.json');
let _banUser = JSON.parse(fs.readFileSync('./storage/listhitam/banUser.json'));
//=================================================//

//====================== Waktu Setempat =============//
moment.tz.setDefault("Asia/Makassar").locale("id")

const hariini = moment.tz('Asia/Makassar').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Makassar').format('HH:mm:ss')
const waktu = moment().tz('Asia/Makassar').format('HH:mm:ss')
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
// TANGGAL By Zack Mans 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
  thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwuk = (waktu + ' ' + thisDaye + ', ' + hri + '' + buln[bulnh] + '' + syear)
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)
const emo = ['❤', '😍', '😘', '💕', '😻', '💑', '👩‍❤‍👩', '👨‍❤‍👨', '💏', '👩‍❤‍💋‍👩', '👨‍❤‍💋‍👨', '🧡', '💛', '💚', '💙', '💜', '🖤', '💔', '❣', '💞', '💓', '💗', '💖', '💘', '💝', '💟', '♥', '💌', '💋', '👩‍❤️‍💋‍👩', '👨‍❤️‍💋‍👨', '👩‍❤️‍👨', '👩‍❤️‍👩', '👨‍❤️‍👨', '👩‍❤️‍💋‍👨', '👬', '👭', '👫', '🥰', '😚', '😙', '👄', '🌹', '😽', '❣️', '❤️', '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '🙂', '😛', '😝', '😜', '🤪', '🤗', '😺', '😸', '😹', '☺', '😌', '😉', '🤗', '😊', '🎊', '🎉', '🎁', '🎈', '👯‍♂️', '👯', '👯‍♀️', '💃', '🕺', '🔥', '⭐️', '✨', '💫', '🎇', '🎆', '🍻', '🥂', '🍾', '🎂', '🍰', '☹', '😣', '😖', '😫', '😩', '😢', '😭', '😞', '😔', '😟', '😕', '😤', '😠', '😥', '😰', '😨', '😿', '😾', '😓', '🙍‍♂', '🙍‍♀', '💔', '🙁', '🥺', '🤕', '☔️', '⛈', '🌩', '🌧,😯', '😦', '😧', '😮', '😲', '🙀', '😱', '🤯', '😳', '❗', '❕', '🤬', '😡', '😠', '🙄', '👿', '😾', '😤', '💢', '👺', '🗯️', '😒', '🥵', '👋']
const emojis = emo[Math.floor(Math.random() * (emo.length))]

//=======================================================//

//========= Database ===========//
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
const spammer = []
//===============================//

module.exports = zex = async (zex, m, chatUpdate, store) => {
    const Tnow = (new Date()/1000).toFixed(0)
    const { type, now, args, sender, fromMe,from,botNumber,senderNumber,groupName,groupId,groupMembers,groupDesc,groupOwner,pushname,itsMe,isGroup,mentionByTag,mentionByReply,users,budy,content,body,} = m
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectnewReply.selectedRowId : (m.mtype == 'templateButtonnewReplyMessage') ? m.message.templateButtonnewReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectnewReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        //const prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const prefix = /^[°zZ#$@+,.?=''():√%!¢£¥€π¤ΠΦ&><`™©®Δ^βα¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$@+,.?=''():√%¢£¥€π¤ΠΦ&><!`™©®Δ^βα¦|/\\©^]/gi) : '.'
        const isCmd = body.startsWith(prefix)
        const args = body.trim().split(/ +/).slice(1)
        //const pushname = m.pushName || "No Name"
        const pushname = m.pushName || `${senderNumber}`
        const botNumber = await zex.decodeJid(zex.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        //const quoted = (fatkuns.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m.quoted ? m.quoted : m
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const cooldownhari = 86400000
        const cooldownjam = 3600000
        const cooldownmenit = 60000
        const cooldowndetik = 1000
        const from = m.key.remoteJid
        const fatkuns = (m.quoted || m)
        const qmsg = (quoted.msg || quoted)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() //kalau mau pasang prefix ganti jadi ini : const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '' 
        const more = String.fromCharCode(8206)
        const readmore = more.repeat(4001) 
        const replyCommand = isCmd? isCmd : allcommand.includes(toFirstCase(command))
        const reply = m.reply
        const timestampp = speed();
        const latensi = speed() - timestampp
        //const numberQuery = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
        //const Input = mentionByTag[0]? mentionByTag[0] : mentionByReply ? mentionByReply : q? numberQuery : false 
        

        // Group
        const groupMetadata = m.isGroup ? await zex.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

        const isGroup = from.endsWith('@g.us')
        const sender = m.key.fromMe ? (zex.user.id.split(':')[0]+'@s.whatsapp.net' || zex.user.id) : (m.key.participant || m.key.remoteJid)
        const senderNumber = sender.split('@')[0]
        const isBot = botNumber.includes(senderNumber)
        const groupMembers = isGroup ? groupMetadata.participants : ''
        const isBotGroupAdmins = isGroup ? groupAdmins.includes(botNumber) : false
        const isGroupAdmins = isGroup ? groupAdmins.includes(sender) : false
        const isAfkOn = afk.checkAfkUser(m.sender, _afk)
        const pler = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
        //bot respon jika button nya di tekan 
        const user = global.db.data.users[m.sender]
        const chat = isGroup? global.db.data.chats[m.chat] : false 
        const kickon = global.db.data.kickon[m.chat]

        // Database
        const contacts = JSON.parse(fs.readFileSync("./database/contacts.json"))
        const hitnya = db.data.hittoday

        // Contact Database
        const isContacts = contacts.includes(sender)
        //const isPremium = prem.includes(sender)
        const gcount = isPremium ? gcounti.prem : gcounti.user

        //=====================================================//
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

        //itung mundor fax
        const hariRaya = new Date('6 1, 2022 00:00:00')
        const sekarang = new Date().getTime();
        const Selisih = hariRaya - sekarang;
        const jhari = Math.floor(Selisih / (1000 * 60 * 60 * 24));
        const jjam = Math.floor(Selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const mmmenit = Math.floor(Selisih % (1000 * 60 * 60) / (1000 * 60));
        const ddetik = Math.floor(Selisih % (1000 * 60) / 1000);
        const ultah = `${jhari}Hari ${jjam}Jam ${mmmenit}Menit ${ddetik}Detik`

        async function hitungmundur(bulan, tanggal) { //By Fax Ngk Usah Di Ubah
            let from = new Date(`${bulan} ${tanggal}, 2022 00:00:00`).getTime();
            let now = Date.now();
            let distance = from - now;
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);
            return days + "Hari " + hours + "Jam " + minutes + "Menit " + seconds + "Detik"
        }

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
        
        // Public & Self
        if (!zex.public) {
        if (!m.key.fromMe && !isCreator && !isPremium) return
        }

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
        // Detect Group Invite
        if (type === 'groupInviteMessage') {
        reply(`Ketik join untuk bergabung ke group whatsapp anda`)
        }
        /*if(type == "groupInviteMessage" && m.message.groupInviteMessage.caption.length > 8000||  type == "contactMessage" && m.message.contactMessage.displayName.length > 8000 || type == "imageMessage" && m.message.imageMessage.caption.length > 8000 || budy.length > 8000 && !itsMe  || type == "extendedTextMessage" && virus > 8000 && !itsMe ||  type == "productMessage" && m.message.productMessage.product.description.length > 8000 && !itsMe ||  type == "listMessage" && !itsMe) {
        if(isGroup && isBotGroupAdmins) zex.sendMessage(from, { delete: m.key})
        if(!isGroup) zex.chatModify({ clear: { messages: [{ id: m.id, fromMe: sender == botNumber? true : false, timestamp: m.messageTimestamp }] } }, sender, [])
        console.log(chalk.bgRedBright(color("[ VIRTEXT ]", "black")),`Length: ${budy.length} from ${senderNumber} ${isGroup? `Group ${groupName}`: ""}`)
        }*/
        if (!isGroup && !isCmd ) console.log(color("[PRIVATE]", "greenyellow"), color(moment.tz('Asia/Makassar').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'))
        if (isGroup && !isCmd ) console.log(color("[GRUP]", "gold"), color(moment.tz('Asia/Makassar').format('HH:mm'), "green"), color(budy, "cyan"), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
        if (!isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Makassar').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'))
        if (isGroup && isCmd ) console.log(color("[CMD]", "blue"), color(moment.tz('Asia/Makassar').format('HH:mm'), "green"), color(`${command} [${args.length}]`, 'cyan'), color('dari', 'gold'), color(`${pushname}`, 'orange'), color('di gc', 'purple'), color(groupName, "deeppink"))
        // console log command 
        /*if (!m.isGroup && isCmd) {
        if (isAspam) return reply(`jangan Spam Uy, Kasih waktu 3 detik`)
        zex.readMessages([m.key])
        console.log("‣", bgcolor('Command On PRIVATE CHAT', 'magenta'));
        console.log(" From :", color(pushname, "yellow"), "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
        console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
      }
      if (m.isGroup && isCmd) {
        msgFilter.addFilter(m.sender, 3000)
        if (isAspam) return reply(`jangan Spam Uy, Kasih waktu 3 detik`)
        zex.readMessages([m.key])
        console.log("‣", bgcolor('Command On', 'magenta'), "GROUP", color(groupName, "orange"), "ID GROUP", color(groupMetadata.id, "green"));
        console.log(" From :", color(pushname, "yellow"), "Number :", color(m.sender, "green"), "Tanggal :", bgcolor(jangwuk, 'blue'));
        console.log(" Command :", color(command.toLowerCase(), "orange"), "MessageType :", bgcolor(m.mtype, "orange"));
      }*/
        
        //registered
        const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
        const addRegisteredUser = (userid, sender, serials) => {
            const obj = { id: userid, name: sender, serial: serials }
            _registered.push(obj)
            fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
        }

        const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
        }
  
        const serialUser = createSerial(18)
        let isRegistered = checkRegisteredUser(m.sender)
    
        let isBan = cekBannedUser(m.sender)
        reban = `Maaf Kamu Telah Di Banned Karena ${getbanned(m.sender)}`

        const reSize = async (buffer, ukur1, ukur2) => {
            return new Promise(async (resolve, reject) => {
                var baper = await Jimp.read(buffer);
                var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
                resolve(ab)
            })
        }

        let DarahAwal = global.rpg.darahawal
        const isDarah = cekDuluJoinAdaApaKagaDiJson(m.sender)
        const isCekDarah = getDarah(m.sender)
        const isUmpan = getUmpan(m.sender)
        const isPotion = getPotion(m.sender)
        const isIkan = getIkan(m.sender)
        const isAyam = getAyam(m.sender)
        const isKelinci = getKelinci(m.sender)
        const isDomba = getDomba(m.sender)
        const isSapi = getSapi(m.sender)
        const isGajah = getGajah(m.sender)
        const isMonay = getMonay(m.sender)
        const isLimit = getLimit(m.sender)
        const isBesi = getBesi(m.sender)
        const isEmas = getEmas(m.sender)
        const isEmerald = getEmerald(m.sender)
        const isInventory = cekInventoryAdaAtauGak(m.sender)
        const isInventoriBuruan = cekDuluHasilBuruanNya(m.sender)
        const isInventoryLimit = cekDuluJoinAdaApaKagaLimitnyaDiJson(m.sender)
        const isInventoryMonay = cekDuluJoinAdaApaKagaMonaynyaDiJson(m.sender)
        const ikan = ['🐟', '🐠', '🐡']

        const jumlahlimit = isPremium ? global.limitawal.premium : global.limitawal.free
        const jumlahuang = isPremium ? global.uangawal.premium : global.uangawal.free
        if (command.toLowerCase() === 'daftar') {
            if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
            fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
            addRegisteredUser(m.sender, m.pushName, serialUser)
            addInventoriDarah(m.sender, DarahAwal)
            addInventori(m.sender)
            addInventoriMonay(m.sender, jumlahuang)
            addInventoriBuruan(m.sender)
            addInventoriLimit(m.sender, jumlahlimit)
      var anuu = `*Terimakasih Sudah Mendaftarkan Diri Dalam Database AKA Bot WhatsApp*
Ketik .my Untuk Informasi Lainnya

┌─❑ _*「 PENDAFTARAN USER 」*_
│ 
├❏ _*Nama : ${pushname}*_
├❏ _*API : @${m.sender.split('@')[0]}*_
├❏ _*Serial:* ${serialUser}*_
├❏ _*Total:* ${_registered.length} Pengguna*_
└─❑ _*「 Aka Botz 」*_`
            console.log(anuu)
            zex.sendMessage(m.sender, { text: anuu, mentions: [m.sender] }, { quoted: m })
            zex.sendMessage(from, { text: `Tq Udah Daftar`, mentions: [m.sender] }, { quoted: m })
            zex.sendMessage("62895704151428@s.whatsapp.net", { text: anuu, mentions: [m.sender] }, { quoted: m })
        }
        if (command.toLowerCase() === 'verify') {
            if (isRegistered) return reply('Akun Kamu Sudah Terverify! Jangan Daftar Lagi!')
            fs.writeFileSync('./storage/user/register.json', JSON.stringify(_registered))
            addRegisteredUser(m.sender, m.pushName, serialUser)
            addInventoriDarah(m.sender, DarahAwal)
            addInventori(m.sender)
            addInventoriMonay(m.sender, jumlahuang)
            addInventoriBuruan(m.sender)
            addInventoriLimit(m.sender, jumlahlimit)
      var anuu = `*Terimakasih Sudah Mendaftarkan Diri Dalam Database AKA Bot WhatsApp*
Ketik .my Untuk Informasi Lainnya

┌─❑ _*「 PENDAFTARAN USER 」*_
│ 
├❏ _*Nama : ${pushname}*_
├❏ _*API : @${m.sender.split('@')[0]}*_
├❏ _*Serial:* ${serialUser}*_
├❏ _*Total:* ${_registered.length} Pengguna*_
└─❑ _*「 Aka Botz 」*_`
            console.log(anuu)
            zex.sendMessage(from, { text: `Tq Udah Daftar`, mentions: [m.sender] }, { quoted: m })
            zex.sendMessage(m.sender, { text: anuu, mentions: [m.sender] }, { quoted: m })
            zex.sendMessage("62895704151428@s.whatsapp.net", { text: anuu, mentions: [m.sender] }, { quoted: m })
        }
        var veriymage = getBuffer(global.flaming + `Resgister`)

    if (!isRegistered && isCmd) {
      if (!isRegistered) return reply(`Maaf Kamu Belum Regis Ketik daftar untuk regis`)
    }

    if (isBan && isCmd) {
        if (isBan) return reply(reban)
    }
    
    async function addCountCmd(nama, sender, _db) {
        addCountCmdUser(nama, sender, _cmdUser)
        var posi = null
        Object.keys(_db).forEach((i) => {
          if (_db[i].nama === nama) {
            posi = i
          }
        })
        if (posi === null) {
          _db.push({ nama: nama, count: 1 })
          fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
        } else {
          _db[posi].count += 1
          fs.writeFileSync('./database/command.json', JSON.stringify(_db, null, 2));
        }
      }
  
      async function addCountCmdUser(nama, sender, u) {
        var posi = null
        var pos = null
        Object.keys(u).forEach((i) => {
          if (u[i].jid === sender) {
            posi = i
          }
        })
        if (posi === null) {
          u.push({ jid: sender, db: [{ nama: nama, count: 0 }] })
          fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          Object.keys(u).forEach((i) => {
            if (u[i].jid === sender) {
              posi = i
            }
          })
        }
        if (posi !== null) {
          Object.keys(u[posi].db).forEach((i) => {
            if (u[posi].db[i].nama === nama) {
              pos = i
            }
          })
          if (pos === null) {
            u[posi].db.push({ nama: nama, count: 1 })
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          } else {
            u[posi].db[pos].count += 1
            fs.writeFileSync('./database/commandUser.json', JSON.stringify(u, null, 2));
          }
        }
      }
  
      async function getPosiCmdUser(sender, _db) {
        var posi = null
        Object.keys(_db).forEach((i) => {
          if (_db[i].jid === sender) {
            posi = i
          }
        })
        return posi
      }
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
                    }}},
                    { quoted: m,ephemeralExpiration: 86400});
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
                        title: '© SKY',
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
            welcome: false,
            sWelcome: false,
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
        _prem.expiredCheck(premium) 

        //-------------------- 》SECURITY《 ------------------\\
        // Anti promosi HAPUS
        const Promosi2 = isGroup ?

        db.data.chats[from].promosi2 : false
        if (isGroup && Promosi2) {
            if (budy.match(`adminpanel5kpm|open jasa push member grup|yangmaubuypanelpm|admin panel 10k pm|Hanya menyediakan Jasa Push Member Grup|admin panel 5k pm|yang mau beli panel murah pm|list harga panel by|list harga vps|LIST HARGA VPS|OPEN JASA PUSH MEMBER GRUP|READY|Redy|LIST HARGA PANEL BY|DANA|menyediakan|MENYEDIAKAN|OPEN MURBUG|open|OPEN|PANEL READY|PANEL|PANNEL READY|panel|panel ready|pannel ready minat pm|mau panel pm|MAU PANNEL PM|Admin panel ready|ADMIN PANEL READY|Chat aja om ready selalu|OPEN JASA INSTALL|open jasa installMENYEDIAKAN JASA INSTALL|menyediakan jasa install`)) {
                if (!isBotGroupAdmins) {return} setReply(` lagi promosi awokawok`)
                if (isGroupAdmins) return setReply(`Admin Mah Bebas Yakan?`)
                if (isCreator) return setReply(`Gw Mah Bebas Yakan?`)
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
            if(owner.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
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
                if(owner.includes(sender)) return setReply('Alah sia owner bot mah bebas yekan :v')
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
                if(isCreator) {return}
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
        for (let i of owner) {
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
            if(command == i && !isCreator) return onlyOwner()
        } 

        // Auto Blocked Nomor +212
        if (m.sender.startsWith('212')) return zex.updateBlockStatus(m.sender, 'block')


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
            case 'speed':
            setReply(`Speed: ${latensi.toFixed(4)} Second`)
            break

            //─────────────[ JUAL BELINYA OM ]──────────────
 
        case  'beli': case  'buy': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!args[0]) return reply(`Mau Beli Apa?\n\n1. potion, 1 Potion = 10000 Uang\n2. umpan, 1 umpan = 2500 Uang\n3. limit, 1 Limit = 25000 Uang\n\nExample: ${command} limit 2`)
        let anu = args[1]
        if (args[0] === 'potion') {
          let noh = 10000 * anu
          if (!args[1]) return reply(`Example : ${command} potion 2\n 1 Potion = 10000 Money`)
          if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
          !isPremium && kurangMonay(m.sender, noh)
          var apalu = anu * 1
          addPotion(m.sender, apalu)
          setTimeout(() => {
            reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Potion Kamu* : ${getPotion(m.sender)}`)
          }, 2000)
        } else
          if (args[0] === 'umpan') {
            let noh = 2500 * anu
            if (!args[1]) return reply(`Example : ${command} umpan 2\n 1 umpan = 2500 Money`)
            if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
            !isPremium && kurangMonay(m.sender, noh)
            var apalu = anu * 1
            addUmpan(m.sender, apalu)
            setTimeout(() => {
              reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*umpan kamu* : ${getUmpan(m.sender)}`)
            }, 2000)
          } else
            if (args[0] === 'limit') {
              let noh = 25000 * anu
              if (!args[1]) return reply(`Example : ${command} limit 2\n 1 Limit = 25000 Money`)
              if (isMonay < noh) return reply('Sisa Uang kamu tidak mencukupi untuk pembelian ini')
              !isPremium && kurangMonay(m.sender, noh)
              var apalu = anu * 1
              !isPremium && addLimit(m.sender, apalu)
              setTimeout(() => {
                reply(`Transaksi berhasil ✔️\n*Sisa Uang kamu* : ${getMonay(m.sender)}\n*Limit kamu* : ${getLimit(m.sender)}`)
              }, 2000)
            } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'sell': case  'jual': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!args[0]) return reply(`Mau Jual Apa??\n1. ikan, 1 ikan = 1500 Uang\n2. ayam, 1 ayam = 2500 Uang\n3. kelinci, 1 kelinci = 3000 Uang\n4. domba, 1 domba = 5000 Uang\n5. sapi, 1 sapi = 10000 Uang\n6. gajah, 1 gajah = 15000 Uang\n7. besi, 1 besi = 15000 Uang\n8. emas, 1 emas = 50000 Uang\n9. emerald, 1 Emerald = 100000 Uang\nExample : ${command} ikan 2`)
        let anu = args[1]
        if (args[0] === 'ikan') {
          if (isIkan < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
          if (!args[1]) return reply(`Example : ${ command} ikan 2\n 1 ikan = 1500 Money`)
          kurangIkan(m.sender, anu)
          let monaynya = 1500 * anu
          !isPremium && addMonay(m.sender, monaynya)
          setTimeout(() => {
            reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ikan Kamu* : ${getIkan(m.sender)}`)
          }, 2000)
        } else
          if (args[0] === 'ayam') {
            if (isAyam < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
            if (!args[1]) return reply(`Example : ${ command} ayam 2\n 1 ayam = 2500 Money`)
            kurangAyam(m.sender, anu)
            let monaynya = 2500 * anu
            !isPremium && addMonay(m.sender, monaynya)
            setTimeout(() => {
              reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Ayam Kamu* : ${getAyam(m.sender)}`)
            }, 2000)
          } else
            if (args[0] === 'kelinci') {
              if (isKelinci < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
              if (!args[1]) return reply(`Example : ${ command} kelinci 2\n 1 kelinci = 3000 Money`)
              kurangKelinci(m.sender, anu)
              let monaynya = 3000 * anu
              !isPremium && addMonay(m.sender, monaynya)
              setTimeout(() => {
                reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa kelinci Kamu* : ${getKelinci(m.sender)}`)
              }, 2000)
            } else
              if (args[0] === 'domba') {
                if (isDomba < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                if (!args[1]) return reply(`Example : ${ command} domba 2\n 1 domba = 5000 money`)
                kurangDomba(m.sender, anu)
                let monaynya = 5000 * anu
                !isPremium && addMonay(m.sender, monaynya)
                setTimeout(() => {
                  reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa domba Kamu* : ${getDomba(m.sender)}`)
                }, 2000)
              } else
                if (args[0] === 'sapi') {
                  if (isSapi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                  if (!args[1]) return reply(`Example : ${ command} sapi 2\n 1 sapi = 10000 Money`)
                  kurangSapi(m.sender, anu)
                  let monaynya = 10000 * anu
                  !isPremium && addMonay(m.sender, monaynya)
                  setTimeout(() => {
                    reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Sapi Kamu* : ${getSapi(m.sender)}`)
                  }, 2000)
                } else
                  if (args[0] === 'gajah') {
                    if (isGajah < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                    if (!args[1]) return reply(`Example : ${ command} gajag 2\n 1 gajah = 15000 Money`)
                    kurangGajah(m.sender, anu)
                    let monaynya = 15000 * anu
                    !isPremium && addMonay(m.sender, monaynya)
                    setTimeout(() => {
                      reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Gajah Kamu* : ${getGajah(m.sender)}`)
                    }, 2000)
                  } else
                    if (args[0] === 'besi') {
                      if (isBesi < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                      if (!args[1]) return reply(`Example : ${ command} besi 2\n 1 besi = 15000 Money`)
                      kurangBesi(m.sender, anu)
                      let monaynya = 16000 * anu
                      !isPremium && addMonay(m.sender, monaynya)
                      setTimeout(() => {
                        reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Besi Kamu* : ${getBesi(m.sender)}`)
                      }, 2000)
                    } else
                      if (args[0] === 'emas') {
                        if (isEmas < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                        if (!args[1]) return reply(`Example : ${ command} emas 2\n 1 emas = 50000 Money`)
                        kurangEmas(m.sender, anu)
                        let monaynya = 50000 * anu
                        !isPremium && addMonay(m.sender, monaynya)
                        setTimeout(() => {
                          reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emas Kamu* : ${getEmas(m.sender)}`)
                        }, 2000)
                      } else
                        if (args[0] === 'emerald') {
                          if (isEmerald < anu) return reply(`Kamu Tidak Mempunyai Cukup ${args[0]} Untuk Transaksi Ini`)
                          if (!args[1]) return reply(`Example : ${ command} emerald 2\n 1 Emerald = 100000 Money`)
                          kurangEmerald(m.sender, anu)
                          let monaynya = 100000 * anu
                          !isPremium && addMonay(m.sender, monaynya)
                          setTimeout(() => {
                            reply(`Transaksi berhasil ✔️\n*Uang Kamu Bertambah Jadi* : ${getMonay(m.sender)}\n*Sisa Emerald Kamu* : ${getEmerald(m.sender)}`)
                          }, 2000)
                        } else { reply(`Format Salah!\nContoh ${command}jual ikan 1`) }

      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'mycre':
        if (!isCreator) return reply('Khusus Owner')
        if (!m.quoted && !Number(args[0])) return reply('Reply pesannya/nomornya')
        var num = m.quoted ? m.quoted.sender : args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Inventory`)
        let teksehmazeh = `_[ 👩🏻‍💼INFO USER @${num.split("@")[0]}👨🏻‍💼 ]_\n\n*❤️Your Blood* : ${getDarah(num)}\n*◻️️Your besi* : ${getBesi(num)}\n*🌟Your emas* : ${getEmas(num)}\n*💎Your Emerald* : ${getEmerald(num)}\n*⏺️Your Limit* : ${getLimit(num)}\n*💰Your Money* : ${getMonay(num)}\n*🧪Your Potion* : ${getPotion(num)}\n\n_[ 🐺HUNT RESULT🐺 ]_\n*🐟ikan* : ${getIkan(num)}\n*🐔ayam* : ${getAyam(num)}\n*🐇kelinci* : ${getKelinci(num)}\n*🐑domba* : ${getDomba(num)}\n*🐄sapi* : ${getSapi(num)}\n*🐘gajaht* : ${getGajah(num)}\n\n_*${pushname}*_`
        zex.sendMessage(from, { image: XeonBotInc1, caption: teksehmazeh, mentions: [num], contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'transfer': case  'tf': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        if (!isCreator) return reply(mess.owner)
        if (!q) return reply(`Mau Tf Kemana? \nExample : ${ command} uang atau limit nonya/jumlah`)
        swn = args.join(" ")
        apanya = swn.split("/")[0];
        nomor = swn.split("/")[1];
        jumlah = swn.split("/")[2];
        if (!q.includes('/')) return reply(`Wajib Menggunakan /`)
        if (nomor.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
        if (nomor.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
        var num = m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
        var numss = `${nomor}@s.whatsapp.net`
        var anuu = jumlah
        if (apanya === 'uang') {
          if (isMonay < anuu) return reply(`Kau Tidak Mempunyai Uang Lagi Untuk Transksi Ini`)
          if (!nomor) return reply(`Example : ${ command} uang 6281248249833/1000`)
          !isPremium && kurangMonay(m.sender, anuu)
          let monaynya = 1 * anuu
          addMonay(num, monaynya)
          setTimeout(() => {
            reply(`Transfer Uang sebanyak ${anuu} berhasil\n\nSisa Uang Kamu : ${getMonay(m.sender)}\nSisa Uang Tujuan : ${getMonay(num)}`)
          }, 2000)
        } else
          if (apanya === 'limit') {
            if (isLimit < anuu) return reply(`Kau Tidak Mempunyai Limit Lagi Untuk Transksi Ini`)
            if (!nomor) return reply(`Example : ${ command} limit 6281248249833/1000`)
            !isPremium && kurangLimit(m.sender, anuu)
            let monaynya = 1 * anuu
            addLimit(num, monaynya)
            setTimeout(() => {
              reply(`Transfer Limit sebanyak ${jumlah} berhasil\n\nSisa Limit Kamu : ${getLimit(m.sender)}\nSisa Limit Tujuan : ${getLimit(num)}`)
            }, 2000)
          }
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'limit': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Limit`)
        teks = `Limit kamu ${getLimit(m.sender)} Dan Uang Kamu ${getMonay(m.sender)}`
        zex.sendMessage(from, { image: XeonBotInc1, caption: teks, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'inventori': case  'inventory': case  'my': case  'profile': {
        if (!isDarah) return reply(mess.register)
        if (!isInventory) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryLimit) return reply(mess.register)
        if (!isInventoryMonay) return reply(mess.register)
        if (!isInventoriBuruan) return reply(mess.register)
        var XeonBotInc1 = await getBuffer(global.flaming + `User's Inventory`)
        let teksehmazeh = `_[ 👩🏻‍💼INFO USER👨🏻‍💼 ]_\n\n*❤️Your Blood* : ${getDarah(m.sender)}\n*◻️️Your besi* : ${getBesi(m.sender)}\n*🌟Your emas* : ${getEmas(m.sender)}\n*💎Your Emerald* : ${getEmerald(m.sender)}\n*⏺️Your Limit* : ${getLimit(m.sender)}\n*💰Your Money* : ${getMonay(m.sender)}\n*🧪Your Potion* : ${getPotion(m.sender)}\n\n_[ 🐺HUNT RESULT🐺 ]_\n*🐟ikan* : ${getIkan(m.sender)}\n*🐔ayam* : ${getAyam(m.sender)}\n*🐇kelinci* : ${getKelinci(m.sender)}\n*🐑domba* : ${getDomba(m.sender)}\n*🐄sapi* : ${getSapi(m.sender)}\n*🐘gajaht* : ${getGajah(m.sender)}\n\n_*${pushname}*_`
        zex.sendMessage(from, { image: XeonBotInc1, caption: teksehmazeh, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'heal': {
        if (!isCekDarah < 1) return reply('Kamu hanya bisa heal ketika darah kamu 0')
        if (isCekDarah > 100) return reply('Darah kamu sudah penuh')
        if (isPotion < 1) return reply('Kamu tidak punya potion, cobalah beli dengan cara #buypotion _jumlah_')
        addDarah(m.sender, 100)
        kurangPotion(m.sender, 1)
        reply('Berhasil, darah kamu sudah full')
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'mining': case  'mine': {
        if (isCekDarah < 1) return reply(`You're Tired!, Try To Heal Using Potions`)
        let besi = [1, 1, 3, 0, 2, 1, 1, 1, 3, 1, 4, 1, 1]
        let emas = [0, 1, 1, 2, 0, 0, 1, 0, 1, 0, 1, 2]
        let emerald = [1, 0, 2, 0, 0, 1, 0, 1, 0, 0, 0, 1]
        var darahmu = Math.ceil(Math.random() * 10)
        var besinya = besi[Math.floor(Math.random() * besi.length)]
        var emasnya = emas[Math.floor(Math.random() * emas.length)]
        var emeraldnya = emerald[Math.floor(Math.random() * emerald.length)]
        setTimeout(() => {
          zex.sendMessage(from, { image: { url: './storage/image/tambang.jpg' }, caption: `[ MINING RESULT ]\n*Darah Berkurang 10*\n*besi* : ${besinya}\n*emas* : ${emasnya}\n*Emerald* : ${emeraldnya}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}`, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } } } }, { quoted: m })
        }, 7000)
        setTimeout(() => {
          zex.sendMessage(from, { text: `@${m.sender.split("@")[0]} Started Mining🎣`, mentions: [m.sender] }, { quoted: m })
        }, 1500)
        kurangDarah(m.sender, darahmu)
        addBesi(m.sender, besinya)
        addEmas(m.sended, emasnya)
        addEmerald(m.sender, emeraldnya)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
      case  'berburu': {
        //Peringatan!!!!, ini buatan rifza. jangan claim punya lu:)
        if (isCekDarah < 1) return reply('Darah kamu habis, cobalah heal menggunakan potion')
        let luka = ["Tertusuk duri saat berburu", "Terpeleset ke jurang saat berburu", "Tercakar hewan buas", "Tidak berhati-hati", "Terjerat akar", "Terjatuh saat berburu"]
        let location = ["Hutan rimba", "Hutan Amazon", "Hutan tropis", "Padang rumput", "Hutan afrika", "Pegunungan"]
        var darahmu = Math.ceil(Math.random() * 15)
        var ikanmu = Math.ceil(Math.random() * 10)
        var ayam = Math.ceil(Math.random() * 8)
        var kelinci = Math.ceil(Math.random() * 7)
        var dombanya = [3, 0, 4, 0, 5, 4, 6, 0, 1, 0, 2, 3, 0, 3, 0, 1]
        var sapinya = [2, 0, 3, 0, 4, 0, 5, 0, 1, 0, 2, 0, 3, 0, 1]
        var gajahnya = [1, 0, 4, 0, 2, 0, 1, 0, 2, 1, 3, 0, 1]
        var domba = dombanya[Math.floor(Math.random() * dombanya.length)]
        var sapi = sapinya[Math.floor(Math.random() * sapinya.length)]
        var gajah = gajahnya[Math.floor(Math.random() * gajahnya.length)]
        var lukanya = luka[Math.floor(Math.random() * luka.length)]
        var lokasinya = location[Math.floor(Math.random() * location.length)]
        if (lokasinya === 'Hutan rimba') {
          var image = './storage/image/rimba.jpg'
        } else
          if (lokasinya === 'Hutan Amazon') {
            var image = './storage/image/amazon.jpg'
          } else
            if (lokasinya === 'Hutan tropis') {
              var image = './storage/image/tropis.jpg'
            } else
              if (lokasinya === 'Padang rumput') {
                var image = './storage/image/padang_rumput.jpg'
              } else
                if (lokasinya === 'Hutan afrika') {
                  var image = './storage/image/afrika.jpg'
                } else
                  if (lokasinya === 'Pegunungan') {
                    var image = './storage/image/pegunungan.jpg'
                  }
        setTimeout(() => {
          let teksehmazeh = `_[ HASIL BURUAN ]_\n*🐟Ikan* : ${ikanmu}\n*🐔Ayam* : ${ayam}\n*🐇Kelinci* : ${kelinci}\n*🐑Domba* : ${domba}\n*🐄Sapi* : ${sapi}\n*🐘Gajah* : ${gajah}\n\n_[ INFO ]_\n*Lokasi* : ${lokasinya}\n*Terluka* : ${lukanya}, darah ${darahmu}\n*Sisa darah* : ${getDarah(m.sender)}\n`
          zex.sendMessage(from, { image: { url: image }, caption: teksehmazeh, contextInfo: { "externalAdReply": { "title": ` ${global.botname}`, "body": `${global.ownername}`, "previewType": "PHOTO", "thumbnailUrl": ``, "thumbnail": fs.readFileSync(`./media/pepe.jpg`), "sourceUrl": `${global.linkz}` } } }, { quoted: m })
        }, 5000)
        setTimeout(() => {
          zex.sendMessage(from, { text: `@${m.sender.split("@")[0]} Mulai berburu di ${lokasinya}`, mentions: [m.sender] }, { quoted: m })
        }, 1000)
        addIkan(m.sender, ikanmu)
        addAyam(m.sender, ayam)
        addKelinci(m.sender, kelinci)
        addDomba(m.sender, domba)
        addSapi(m.sender, sapi)
        addGajah(m.sender, gajah)
        kurangDarah(m.sender, darahmu)
      }
        addCountCmd(`#${command.slice(1)}`, sender, _cmd)
        break
            //============ Download ===============//

            //============ Search Menu ============//
            case 'pinterest': {
                if (!q) return reply('Mana Teksnya')
                m.reply(mess.wait)
            let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                zex.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
            
            //============ KEAMANAN ===========//
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
                    setReply(`Mode ${command}\n\n\nKetik ${ command}on/off`)
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
                    db.data.chats[from].antivirtex = true
                    setReply("Sukses mematikan antivirtex!");
                } else if (!q) {
                    setReply ( `*MODE ANTI VIRTEX*\n ${prefix+command} on/off`)
                }
            }
            break;

            //=========== Menu Sticker ==========//   
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
                //if (!isGroup) return onlyGroup()
                if (!quoted) return setReply(` reply Video/Image Dengan Caption ${ command}`)
                if (/image/.test(mime)) {
                    let media = await quoted.download()
                    let encmedia = await zex.sendImageAsSticker(from, media, m, { packname: global.packName, author: global.authorName })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return setReply('Maksimal 10 detik!')
                    let media = await quoted.download()
                    let encmedia = await zex.sendVideoAsSticker(from, media, m, { packname: global.packName, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    setReply(`Kirim Gambar/Video Dengan Caption ${ command}\nDurasi Video 1-9 Detik`)
                }
            }
            break
            case 'qc':{
                if (!isGroup) return onlyGroup()
                let teks = m.quoted && m.quoted.q ? m.quoted.text : q ? q : "";
                if (!teks) return setReply (`Cara Penggunaan ${prefix}qc teks`)
                const text = `${teks}`
                const username = await zex.getName(m.quoted ? m.quoted.sender : m.sender)
                const avatar = await zex.profilePictureUrl( m.quoted ? m.quoted.sender : m.sender,"image").catch(() =>`https://i0.wp.com/telegra.ph/file/134ccbbd0dfc434a910ab.png`)
                const json = {
                    type: "quote",
                    format: "png",
                    backgroundColor: "#FFFFFF",
                    width: 700,
                    height: 580,
                    scale: 2,
                    "messages": [
                        {
                            "entities": [],
                            "avatar": true,
                            "from": {
                                "id": 1,
                                "name": username,
                                "photo": {
                                    "url": avatar
                                }
                            },
                            "text": text,
                            "m.replyMessage": {}
                        }
                    ],
                };
                axios
                .post(
                    "https://bot.lyo.su/quote/generate",
                    json,
                    {
                        headers: { "Content-Type": "application/json" },
                    })
                    .then(async (res) => {
                        const buffer = Buffer.from(res.data.result.image, "base64");
                        let encmedia = await zex.sendImageAsSticker(m.chat, buffer, m, { packname: global.packName, 
                            author: global.author, 
                            categories: ['🤩', '🎉'],
                            id: '12345',
                            quality: 100,
                            background: 'transparent'})
                            await fs.unlinkSync(encmedia)
                        })
                    }
                    break

            //=========== Owner ==============//
            case "public": {
                if (!isCreator) return setReply(mess.only.owner)
                zex.public = true
                setReply(`SUKSES MODE PUBLIC`)
            }
            break
            case "self": {
                if (!isCreator) return setReply(mess.only.owner)
                zex.public = false
                setReply(`SUKSES MODE SELF✅`)
            }
            break     
            case 'dashboard':{
                const getFolderSize = (await import("get-folder-size")).default;
                let storage = await getFolderSize.loose('.');
                let moduls = await getFolderSize.loose('./node_modules');
                let session = await getFolderSize.loose('./session')
                let databse = await getFolderSize.strict('./database/database.json');
                for (let i of hitnya){
                    let cekvipp = ms(i.expired - Date.now())
                    var resetnye = `${cekvipp.hours} jam ${cekvipp.minutes} menit`
                }    
                let teks =`
––––––『 *Dashboard* 』––––––
⭔ *Runtime* : ${runtime(process.uptime())}
⭔ *Reset* : ${resetnye}
⭔ *Total Hit* : ${getHit("run", hitnya)}
⭔ *Storage* : ${FileSize(storage)}
⭔ *Modules* : ${FileSize(moduls)}
⭔ *Session* : ${FileSize(session)}
⭔ *Database* : ${FileSize(databse)}
`
                let fall ="––––––『 *Commands Today* 』––––––\n"
                let totalFail =[]
                let totalSuc = []
                let total = 0
                let tot = 0
                await dash.map(async function(e, i){
                    fall += " ⭔ "+` *${e.cmd}* : ${e.succes+e.failed} \n`
                    await totalFail.push(e.failed)
                    await totalSuc.push(e.succes)
                });

                for(let i = 0; i < totalFail.length; i++){
                    total += totalFail[i]
                }    
                for(let a = 0; a < totalSuc.length; a++){
                    tot += totalSuc[a]
                }    

                let akoh = `Total : ${dash.length} used`
                let tod ="––––––『 *Commands Failed* 』––––––\n"
                let filteredArray = await dash.filter(item => item.failed > 0 )
                await filteredArray.map(async function(e, i){
                    tod += " ⭔ "+` *${e.cmd}* : ${e.failed} \n`
                });
                let aw = `Total : ${filteredArray.length} failed`
                let tekz = teks+"\n\n"+fall+"\n"+akoh+"\n\n"+"––––––『 *Commands Status* 』––––––\n"+" ⭔ *Succes* : "+tot+"\n"+" ⭔ *Failed* : "+total+"\n\n"+tod+"\n\n"    
                let link = 'https://telegra.ph/file/b659d66189445cab43a25.jpg'
                //conn.sendAdReply(from,tekz,copyright,baileysVersion,link,{quoted:m})
                setReply(tekz)
            }
            break
            case 'join':{
                if(!isCreator) return setReply(mess.only.owner)
                let link = q.startsWith("http")
                if(!link) return setReply(`Kirim perintah ${command} _linkgrup_`)
                var url = args[1]
                let ano = q.split('https://chat.whatsapp.com/')[1]
                await zex.groupAcceptInvite(ano)
                setReply("Sukses join group")
            }
            break
            case "pushmemek":{
                if (!isCreator && !isAdmins) return m.reply(mess.only.admin)
                if (isGroup) return m.reply(mess.only.private)
                if (!text) return m.reply(`Penggunaan Salah Silahkan Gunakan Command Seperti Ini\n${prefix+command} idgroup|tekspushkontak\nUntuk Liat Id Group Silahkan Ketik listgc`)
                m.reply(mess.wait)
                const groupMetadataa = !isGroup? await zex.groupMetadata(`${text.split("|")[0]}`).catch(e => {}) : ""
                const participants = !isGroup? await groupMetadataa.participants : ""
                const halls = await participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
                global.tekspushkon = text.split("|")[1]
                if (isContacts) return
                for (let mem of halls) {
                    if (isContacts) return
                    contacts.push(mem)
                    fs.writeFileSync('./database/contacts.json', JSON.stringify(contacts))
                    if (/image/.test(mime)) {
                        media = await zex.downloadAndSaveMediaMessage(quoted)
                        memk = await uptotelegra(media)
                        await zex.sendMessage(mem, { image: { url: memk }, caption: global.tekspushkon })
                        await sleep(3000)
                    } else {
                        await zex.sendMessage(mem, { text: global.tekspushkon })
                        await sleep(3000)
                    }
                }
                try {
                    const uniqueContacts = [...new Set(contacts)];
                    const vcardContent = uniqueContacts.map((contact, index) => {
                        const vcard = [
                            "BEGIN:VCARD",
                            "VERSION:3.0",
                            `FN:WA[${createSerial(1)}] ${contact.split("@")[0]}`,
                            `TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
                            "END:VCARD",
                            "", ].join("\n");
                            return vcard; }).join("");
                            fs.writeFileSync("./database/contacts.vcf", vcardContent, "utf8");
                        } catch (err) {
                            m.reply(util.format(err))
                        } finally {
                            await zex.sendMessage(from, { document: fs.readFileSync("./all/database/contacts.vcf"), fileName: "contacts.vcf", caption: "Nih Kak Tinggal Pencet File Di Atas Terus Save", mimetype: "text/vcard", }, { quoted: m })
                            contacts.splice(0, contacts.length)
                            fs.writeFileSync("./database/contacts.json", JSON.stringify(contacts))
                        }
                    }
            break
            case 'ban': {
                if (!isCreator) return replay(mess.owner)
                if (!q) return reply(`Pilih add or del, Example : ${ command} add/(Reply pesan atau nomor)/reasonnya or del (Reply pesan atau nomor)`)
                swn = args.join(" ")
                jenisnya = swn.split("/")[0];
                nomor = swn.split("/")[1];
                reason = swn.split("/")[2];
                num = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : nomor.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
                if (num.includes('+')) return reply(`Jangan Menggunakan Ini '+' `)
                if (num.includes('-')) return reply(`Jangan Menggunakan Ini '-' `)
                if (jenisnya === "add") {
                  if (!reason) return replay(`alasannya apa`)
                  if (isBan) return reply(`Dia Sudah Ada Di Database DaftarHitam`)
                  addInventoriBan(num, reason)
                  replay(`Successfully banned the user`)
                } else if (jenisnya === "del") {
                  unBanned(num)
                  replay(`Successfully unbanned the user`)
                } else {
                  replay("Error")
                }
              }
                addCountCmd(`#${command.slice(1)}`, sender, _cmd)
                break
            case 'clearuser':
            if (!isCreator) return onlyOwner()
            setReply("Sukses clear all User")
            db.data.users = {}           
            break 
            case 'restart':
            if (!isCreator && !itsMe) return setReply(mess.only.owner)
            await setReply(`_Restarting ${botName}_`)
            await zex.sendMessage(from, {text: "_Succes_"})
            await sleep(3000)
            process.send('reset') 
            break
            case 'clearsesi':{
                if (!itsMe && !isCreator) return setReply(mess.only.owner)
                fs.readdir("./session", async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return setReply('Unable to scan directory: ' + err);
                    } 
                    let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
                    item.startsWith("sender-key") || item.startsWith("session-")
                )
                console.log(filteredArray.length); 
                let teks =`Terdeteksi ${filteredArray.length} file kenangan\n\n`
                if(filteredArray.length == 0) return setReply(teks)     
                setReply(teks) 
                await sleep(2000)
                setReply("Menghapus file kenangan...")
                await filteredArray.forEach(function (file) {
                    fs.unlinkSync(`./session/${file}`)
                });
                await sleep(2000)
                setReply("Berhasil menghapus semua kenangan di folder session")     
            });   
        }
        break
        case 'getcase': case 'ambilcase':{
            if (!isCreator) return setReply(mess.only.owner)
            if (!q) return setReply('nama case?')
            const getCase = (q) => {
                return "case " + `'${q}'` + require('fs').readFileSync("zex.js").toString().split('case \''+ q +'\'')[1].split("break")[0]+"break"
            } // (?); ngambil case
            setReply(getCase(q))
        }
        break
        case 'bcgc':{
            if (!isCreator && !itsMe) return setReply('husus owner')
            if (!q) return setReply('Teksnya?')
            let getGroups = await zex.groupFetchAllParticipating()
            let groupss = Object.entries(getGroups).slice(0).map(entry => entry[1])
            let anus = groupss.map(v => v.id)
            if(isQuotedImage || isImage || isQuotedAudio || isVideo || isQuotedVideo) {
                var alala = await zex.downloadAndSaveMediaMessage(quoted,makeid(5))
            }
            setReply(`Mengirim Broadcast Ke ${anus.length} Chat, Waktu Selesai ${anus.length * 0.5 } detik`)
            for (let i of anus) {

                let text = `

                *_Broadcast Group_*
           
           ––––––『 *MESSAGE* 』––––––
           
           ${q}
           
           `
           await sleep(1000)
           let contextInfo = {
            forwardingScore: 50,
            isForwarded: true,
            externalAdReply:{
                showAdAttribution: true,
                title: `tes`,
                body:`bjkr`,
                previewType:"PHOTO",
                thumbnailUrl: 'https://telegra.ph/file/33d58a3a7b931d3902642.jpg'
            }
        }
        if(isQuotedImage || isImage){
            zex.sendMessage(i,{contextInfo,image:fs.readFileSync(alala),caption:text})
        } else if(isQuotedVideo || isVideo){
            zex.sendMessage(i,{contextInfo,video:fs.readFileSync(alala),caption:text})
        } else if(isQuotedAudio){
            zex.sendMessage(i,{contextInfo,Audio:fs.readFileSync(alala)})
        } else zex.sendMessage(i,{contextInfo,text})
    }
    setReply(`Sukses Mengirim Broadcast Ke ${anus.length} Group`)
}
break


            //================ Database ===========//
            //============== Data Sampah =========//
            case 'delsampah':{
                let path = require('path');
                let directoryPath = path.join();
                fs.readdir(directoryPath, async function (err, files) {
                    if (err) {
                        console.log('Unable to scan directory: ' + err);
                        return setReply('Unable to scan directory: ' + err);
                    } 
                    let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3")  || item.endsWith("mp4") || item.endsWith("jpg") ||item.endsWith("webp") ||item.endsWith("webm") ||item.endsWith("opus")   )
                    console.log(filteredArray.length); 
                    let teks =`Terdeteksi ${filteredArray.length} file sampah\n\n`
                    if(filteredArray.length == 0) return setReply(teks)
                    filteredArray.map(function(e, i){
                        teks += (i+1)+`. ${e}\n`
                    })
                    setReply(teks) 
                    //	await sleep(2000)
                    setReply("Menghapus file sampah...")
                    await filteredArray.forEach(function (file) {
                        fs.unlinkSync(file)
                    });
                    //await sleep(2000)
                    setReply("Berhasil menghapus semua sampah")
                });
            }
            break
            //============== Data Eror ===========//
            case 'adderror':
            {
                if (!q) return setReply(`Yang error apa bro ?\nContoh: ${prefix}adderror nosinya|menu`)
                if (!m.key.fromMe && !isCreator) return m.reply (mess.only.ownerB)
                let oke = q.split("|")[0]
                let oka = q.split("|")[1]
                addError(oke, oka, listerror)
                await setReply(`Sukses Menambahkan ${q} ke daftar error`)
            }
            break
            case 'clearerror':
            if (!isCreator) return onlyOwner()
            setReply("SukseS clear all error")
            clearAllError(listerror)
            break 
            case 'delerror':{
                if (!itsMe && !isCreator) return m.reply (mess.only.ownerB)
                listerror.splice(q, 1)
                fs.writeFileSync('./database/listerror.json', JSON.stringify(listerror))
                setReply( `Sukses menghapus ${q} di daftar error`)
            }
            break
            case 'listerror': {
                let errornye = `*List Error*\nJumlah : ${db.data.listerror.length}\n\n`
                for (let i of db.data.listerror){          
                    errornye += `_*Command*_ : ${i.cmd}\n_*System Error*_ : ${i.error}\n\n*]─────────────────[*\n\n`             
                } 
                errornye += `© ${botName}`
                setReply(errornye)
            }
            break
            //=============== Data Sticker =============//
            case 'addsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya?')
                if (StickerExec.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await zex.downloadAndSaveMediaMessage(quoted)
                StickerExec.push(q)
                await fsx.copy(delb, `./media/sticker/${q}.webp`)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerExec))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Sticker\nUntuk Mengecek Ketik ${prefix}liststicker`)
            }
            break
            case 'delsticker': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Stickernya')
                if (!StickerExec.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = StickerExec.indexOf(q)
                StickerExec.splice(wanu, 1)
                fs.writeFileSync('./src/media/sticker.json', JSON.stringify(StickerExec))
                fs.unlinkSync(`./media/sticker/${q}.webp`)
                setReply(`Sukses Menghapus Sticker ${q}`)
            }
            break
            case 'liststicker': {
                let text = '┌──⭓「 *List Sticker* 」\n│\n'
                for (let x of StickerExec) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${StickerExec.length}*`
                setReply(text)
            }
            break
            //================ Data Video ===============//
            case 'addvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Videonya?')
                if (VideoExec.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Ada")
                let delb = await zex.downloadAndSaveMediaMessage(quoted)
                VideoExec.push(q)
                await fsx.copy(delb, `./media/video/${q}.mp4`)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoExec))
                fs.unlinkSync(delb)
                setReply(`Success Menambahkan Video\nUntuk Melihat Ketik ${prefix}listvideo`)
            }
            break
            case 'delvideo': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Video')
                if (!VideoExec.includes(q)) return setReply("Nama Tidak Ada Di Dalam Database")
                let wanu = VideoExec.indexOf(q)
                VideoExec.splice(wanu, 1)
                fs.writeFileSync('./src/media/video.json', JSON.stringify(VideoExec))
                fs.unlinkSync(`./media/video/${q}.mp4`)
                setReply(`Success Sukses Menghapus Video ${q}`)
            }
            break
            case 'listvideo': {
                let teks = '┌──⭓「 *List Video* 」\n│\n'
                for (let x of VideoExec) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VideoExec.length}*`
                setReply(teks)
            }
            break
            //================== Data Image ===================//
            case 'addimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Nama Imagenya?')
                if (ImageExec.includes(q)) return setReply("Nama Yang Kamu Masukan Sudah Terdaftar Di Dalam Database")
                let delb = await zex.downloadAndSaveMediaMessage(quoted)
                ImageExec.push(q)
                await fsx.copy(delb, `./media/image/${q}.jpg`)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageExec))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Image\nUntuk Cek Ketik ${prefix}listimage`)
            }
            break
            case 'delimage': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Nama Imagenya')
                if (!ImageExec.includes(q)) return setReply("Nama Image Yang Kamu Masukan Tidak Terdaftar")
                let wanu = ImageExec.indexOf(q)
                ImageExec.splice(wanu, 1)
                fs.writeFileSync('./src/media/image.json', JSON.stringify(ImageExec))
                fs.unlinkSync(`./media/image/${q}.jpg`)
                setReply(`Suksed Menghapus Image ${q}`)
            }
            break
            case 'listimage': {
                let teks = '┌──⭓「 *List Image* 」\n│\n'
                for (let x of ImageExec) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${ImageExec.length}*`
                setReply(teks)
            }
            break
            //================== Data VN ==============//
            case 'addvn': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya?')
                if (VnExec.includes(q)) return setReply("Nama Telah Di Pakai")
                let delb = await zex.downloadAndSaveMediaMessage(quoted)
                VnExec.push(q)
                await fsx.copy(delb, `./media/audio/${q}.mp3`)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnExec))
                fs.unlinkSync(delb)
                setReply(`Sukses Menambahkan Audio\nUntuk Mengecek Ketik ${prefix}listvn`)
            }
            break
            case 'delvn': {
                if (!isPremium) return setReply(mess.prem)
                if (args.length < 1) return setReply('Masukan Namanya')
                if (!VnExec.includes(q)) return setReply("Nama Tidak Terdaftar Di Database")
                let wanu = VnExec.indexOf(q)
                VnExec.splice(wanu, 1)
                fs.writeFileSync('./src/media/vn.json', JSON.stringify(VnExec))
                fs.unlinkSync(`./media/audio/${q}.mp3`)
                setReply(`Sukses Menghapus Audio ${q}`)
            }
            break
            case 'listvn': {
                let teks = '┌──⭓「 *List Vn* 」\n│\n'
                for (let x of VnExec) {
                    teks += `│⭔ ${x}\n`
                }
                teks += `│\n└────────────⭓\n\n*Total : ${VnExec.length}*`
                setReply(teks)
            }
            break
            //================ Data Sewa ================//  
            //===================== Data Prem ================//    
            case 'addprem':
            if (!isCreator) return setReply('husus owner:v')
            if (mentionByReply && isGroup) {
                if(!q) return setReply(`Penggunaan :\n${prefix}addprem\n\nPilih waktu\ns = detik\nh = jam\nd =hari`)      
                //if(_prem.checkPremiumUser (mentionByReply, premium)) return setReply("User tersebut sudah di premium")   
                _prem.addPremiumUser (mentionByReply, q, premium)         
                setReply(`Succes add premium ${mentionByReply.split("@")[0]}`)
                zex.sendText(mentionByReply, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
            } else if(mentionByTag && isGroup) { 
                let waktu = q.split(" ")[1]
                //if(_prem.checkPremiumUser (mentionByTag, premium)) return setReply("User tersebut sudah di premium kak")   
                _prem.addPremiumUser (mentionByTag, waktu, premium)         
                await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
                zex.sendText(mentionByTag, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
            } else if(!isGroup){
                let usernya = q.split("|")[0].replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
                let waktunya = q.split("|")[1]
                // if(_prem.checkPremiumUser (usernya, premium)) return setReply("User tersebut sudah di premium kak")   
                _prem.addPremiumUser (usernya, waktunya, premium)         
                await setReply(`Succses, silakan ketik ${prefix}listprem untuk melihat list premium`)
                zex.sendText(usernya, `Halo kak aku *${fake}*\nkamu telah terdaftar sabagai user premium\nterimakasih sudah menggunakan ${fake}\n\nSilahkan ketik .cekprem untuk melihat expired premium kamu`)
            } else setReply("Tag atau Reply usernya")
            break
            case 'cekprem': case 'cekpremium':
            if (!isPremium && !isCreator) return setReply(`Kamu bukan user premium`)
            let cekvip = ms(_prem.getPremiumExpired(sender, premium) - Date.now())
            let premiumnya = `${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s) ${cekvip.seconds} second(s)`
            setReply(premiumnya)
            break
            //==================== Data CMD Owner ===================//      
            case  'addcmdowner':{
                if (!isCreator) return onlyOwner()
                if(!q) return setReply(mess.query)
                if(checkDataId("commands", q,  DataId)) return setReply("User sudah menjadi owner")
                if(!checkDataName("commands", q, DataId)) { await createDataId("commands", DataId) }
                addDataId(q, "commands", DataId)
                setReply(`Berhasil menambahkan ${q} ke daftar fitur owner`)
            }
            break
            case  'delcmdowner':
            if(!q) return setReply(mess.query)
            if (!isCreator) return onlyOwner() 
            try {
                if(!checkDataId("commands", q, DataId)) return setReply(`User bukan owner`)
                removeDataId ("commands", q, DataId)
                setReply(`Berhasil menghapus ${q} ke daftar fitur owner`)
            } catch (err){
                console.log(err)
                setReply(`${err}`)
            }
            break
            case 'listcmdowner':{
                let nana = await DataId.filter(item => item.name == "commands" )
                let teks ="List Commands For Owner\n"
                let nunu = nana[0].id
                for(let i of nunu){
                    teks +=`. ${i}\n`   
                }    
                setReply(teks)
            }
            break
            //=============== Data CMD LImit =============//
            case  'addcmdlimit':{
                if (!isCreator) return onlyOwner()
                if(!q) return setReply(mess.query)
                if(checkDataId("limit", q,  DataId)) return setReply("Command sudah ada di database")
                if(!checkDataName("limit", q, DataId)) { await createDataId("limit", DataId) }
                addDataId(q, "limit", DataId)
                setReply(`Berhasil menambahkan ${q} ke daftar fitur limit`)
            }
            break
            case  'delcmdlimit':
            if(!q) return setReply(mess.query)
            if (!isCreator) return onlyOwner() 
            try {
                if(!checkDataId("limit", q, DataId)) return setReply("Command tidak ada di database")
                removeDataId ("limit", q, DataId)
                setReply(`Berhasil menghapus ${q} ke daftar fitur limit`)
            } catch (err){
                console.log(err)
                setReply(`${err}`)
            }
            break
            case 'listcmdlimit':{
                let nina = await DataId.filter(item => item.name == "limit" )
                let teks ="List Commands For limit\n"
                let nunu = nina[0].id
                for(let i of nunu){
                    teks +=`. ${i}\n`   
                }    
                setReply(teks)
            }
            break
            //================== Data CMD Prem ==============//
            case  'addcmdprem':{
                if (!isCreator) return onlyOwner()
                if(!q) return setReply(mess.query)
                if(checkDataId("premium", q,  DataId)) return setReply("Command sudah ada di database")
                if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
                addDataId(q, "premium", DataId)
                setReply(`Berhasil menambahkan ${q} ke daftar fitur premium`)
            }
            break
            case  'delcmdprem':
            if(!q) return setReply(mess.query)
            if (!isCreator) return onlyOwner() 
            try {
                if(!checkDataId("premium", q, DataId)) return setReply("Command tidak ada di database")
                removeDataId ("premium", q, DataId)
                setReply(`Berhasil menghapus ${q} ke daftar fitur premium`)
            } catch (err){
                console.log(err)
                setReply(`${err}`)
            }
            break
            case 'listcmdprem':{
                if(!checkDataName("premium", q, DataId)) { await createDataId("premium", DataId) }
                let nana = await DataId.filter(item => item.name == "premium" )
                let teks ="List Command For Premium User\n\n"
                let nunu = nana[0].id
                for(let i of nunu){
                    teks +=`• ${toFirstCase(i)}\n`   
                }    
                teks +=`\n• Total: ${nunu.length}\n` 
                setReply(teks)
            }
            break  

            default:
            //==============BATAS NYA==========//
            //ketika ada yang invite/kirim link grup di chat pribadi
            //Di kasih ama Alyul
            if ((type === 'groupInviteMessage' || budy.includes('https://chat') || budy.includes('Buka tautan ini')) && !m.isBaileys && !isGroup && !itsMe && !isCreator) {
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
            const options = {
                method: 'GET',
                url: 'https://instagram-api32.p.rapidapi.com/',
                params: {
                  url: `${budy}`
                },
                headers: {
                  'X-RapidAPI-Key': api.rapidkey,
                  'X-RapidAPI-Host': 'instagram-api32.p.rapidapi.com'
                }
              };
              
              try {
                  const response = await axios.request(options);
                  console.log(response.data); 
                  zex.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }}) 
                  let no = 1
                  for (let i = 0; i < response.data.medias.length; i++) {
                    let pap = response.data.medias[i].url.includes('.jpg') ? 'image' : 'video'
                    await zex.sendMessage(m.chat, {[pap]: { url: response.data.medias[i].url }, caption: `No : ${no++}\n\nAuto Download Instagram ` + [pap]}, { quoted: m })
            }

              } catch (error) {
                  console.error(error);
              }              
        }
    //Auto Download Video Tiktok
    if (budy.includes('https://vt.tiktok.com/') || budy.includes('https://www.tiktok.com/') || budy.includes('https://vm.tiktok.com/') ) {
        const options = {
            method: 'GET',
            url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/vid/index',
            params: {
              url: `${budy}`
            },
            headers: {
              'X-RapidAPI-Key': api.rapidkey,
              'X-RapidAPI-Host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
            }
          };
          
          try {
            zex.sendMessage(m.chat, { react: { text: "⏳", key: m.key, }})
              const response = await axios.request(options);
              console.log(response.data);
              vid = response.data.video
              desc = response.data.description
              await zex.sendMessage(m.chat, {video: { url: vid }, caption: `Auto Download Tiktok Video\n\nDesc : ${desc}` }, { quoted: m })
          } catch (error) {
              console.error(error);
          }
}
if (budy.startsWith('=>')) {
    if (!isCreator) return m.reply('*khusus Premium*')
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
                    if (!isCreator) return m.reply('*khusus Premium*')
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        await m.reply(String(err))}}
                        if (budy.startsWith('$')) {
                            if (!isCreator) return m.reply('*khusus Premium*')
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