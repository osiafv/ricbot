const moment = require("moment-timezone");
const fs = require("fs");
const chalk = require('chalk')
const timeWib = moment().tz('Asia/Jakarta').format('HH:mm:ss')
const timeWit= moment().tz('Asia/Makassar').format('HH:mm:ss')
const timeWita = moment().tz('Asia/Jayapura').format('HH:mm:ss')
const { color, bgcolor } = require('../lib/color')
const {kyun} = require("../lib/myfunc");
moment.tz.setDefault("Asia/Jakarta").locale("id");

const more = String.fromCharCode(8206)
const readmore = more.repeat(4001) 


let dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)

let dot = new Date(new Date + 3600000)
const dateIslamic = Intl.DateTimeFormat("id" + '-TN-u-ca-islamic', {day: 'numeric',month: 'long',year: 'numeric'}).format(dot)

const feat = (q) => {
    let status = false
    Object.keys(db.data.listerror).forEach((i) => {
        if (db.data.listerror[i].cmd === q) {
            status = true
        }
    })
    return status
}
const { runtime } = require('../lib/myfunc')

exports.allmenu =  ( isPremium,thisHit, sender, prefix, pushname) => {

return `Hi @${sender.replace(/@.+/g, '')}
I am an automated system (WhatsApp Bot) that can help to do something, search and get data / information only through WhatsApp.

 ◦  *Library:* Baileys
 ◦  *Uptime:* ${runtime(process.uptime())}
 ◦  *Instagram:* https://instagram.com/iamkizakixd
 
┌  ◦ *Name* : ${pushname}
│  ◦ *Status* : ${isPremium ? 'Premium':'Free'}
│  ◦ *Limit* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].limit}`}
└  ◦ *Limit game* : ${isPremium ? 'Unlimited' : `${db.data.users[sender].glimit}`}`}

exports.fitur = (prefix) => {
return`

❍┈┈「 *MENU GROUP* 」
╎
╎• setnamegc
╎• setdesc
╎• setppgc 
╎• infogc
╎• getppgc
╎• cekmember
╎• closegroup
╎• opengroup
╎• hidetag
╎• tagall
╎• promote
╎• demote
╎• kick
╎• add
╎• resetlinkgc
╎• linkgc
╎• ban
╎• unban
╎• listgc
╎• afk
╎• delete
╎• profil
╎• intro
╎• topbalance
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU DOWNLOAD* 」
╎
╎• play
╎• playmp4
╎• ytmp3
╎• instagram
╎• ttpoto
╎• tiktok
╎• ttaudio
╎• song
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TOOLS* 」
╎
╎• translate
╎• kalkulator
╎• nobg
╎• pinterest
╎• gimage
╎• remini
╎• jarak 
╎• get
╎• flaming1 - 6
╎• wattpad
╎• playstore
╎• brainly
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU PRIMBON* 」
╎
╎• artinama
╎• artimimpi
╎• kecocokanpasangan
╎• ramalancinta
╎• kecocokannama
╎• jadiannikah
╎• sifatusaha
╎• rezeki
╎• pekerjaan
╎• nasib
╎• penyakit
╎• artitarot
╎• fengshui
╎• haribaik
╎• harisangar
╎• harisial
╎• harinaga
╎• peruntungan
╎• weton
╎• karakter
╎• masasubur
╎• zodiak
╎• wangy
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STICKER* 」
╎
╎• s
╎• smeme
╎• swm
╎• qc
╎• ttp
╎• attp
╎• mukelu
╎• gurastick
╎• lovestick
╎• dogestick
╎• paimon
╎• tele
╎• cry
╎• kill
╎• hug
╎• pat
╎• lick
╎• kiss
╎• bite
╎• yeet
╎• bully
╎• bonk
╎• wink
╎• poke
╎• nom
╎• slap
╎• smile
╎• wave
╎• awoo
╎• blush
╎• smug
╎• glomp
╎• happy
╎• dance
╎• cringe
╎• cuddle
╎• highfive
╎• handhold
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU FUN* 」
╎
╎• bucinserti
╎• pacarsertifikat
╎• tololsertifikat
╎• bisakah
╎• bagaimanakah
╎• apakah
╎• kapankah
╎• cekwatak
╎• cekhobby
╎• cekmenek
╎• cekkontol
╎• cebelapaimutciaku
╎• tiktokghea
╎• tiktokpanrika
╎• tiktokbocil
╎• tiktokkayes
╎• cosplayangel
╎• videogalau
╎• wibuvid
╎• chinese
╎• hijab
╎• indo
╎• japanese
╎• korean
╎• malay
╎• randomgirl
╎• randomboy
╎• thai
╎• vietnamese
╎• cecan
╎• cogan
╎• hacker
╎• pubg
╎• boneka
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU GAME* 」
╎
╎• tebakkata
╎• matematika
╎• tekateki
╎• susunkata
╎• tebakkimia
╎• tebakgambar
╎• tebaklirik
╎• caklontong
╎• family100
╎• tebaklirik
╎• shop
╎• claim
╎• transfer
╎• limit
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *ANONYMOUS* 」
╎
╎• confes
╎• menfes
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU CONVERT* 」
╎
╎• kodebahasa
╎• tts
╎• toimg
╎• tovn
╎• tovideo
╎• tomp3
╎• togif
╎• tourl
╎• terbalik
╎• bass
╎• deep
╎• earrape
╎• fast
╎• fat
╎• nightcore
╎• reverse
╎• robot
╎• slow
╎• smooth
╎• tupai
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ISLAMIC* 」
╎
╎• kisahnabi
╎• alquran 
╎• islamic
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU ANIME* 」
╎
╎• anime
╎• randomanime
╎• naotomori
╎• loli
╎• cosplay
╎• husbu
╎• milf
╎• wallml
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU TEXT PRO* 」
╎
╎• pornhub
╎• glitch
╎• avenger
╎• space
╎• ninjalogo
╎• marvelstudio
╎• lionlogo
╎• wolflogo
╎• steel3d
╎• wallgravity
╎• blackpink
╎• neon
╎• greenneon
╎• advanceglow
╎• futureneon
╎• sandwriting
╎• sandsummer
╎• sandengraved
╎• metaldark
╎• neonlight
╎• holographic
╎• text1917
╎• minion
╎• deluxesilver
╎• newyearcard
╎• bloodfrosted
╎• halloween
╎• jokerlogo
╎• fireworksparkle
╎• natureleaves
╎• bokeh
╎• toxic
╎• strawberry
╎• bok3d
╎• breakwall
╎• icecold
╎• luxury
╎• cloud
╎• summersand
╎• horrorblood
╎• thunder
╎
❍┈┈「 *MENU RANDOM* 」
╎
╎• nsfw
╎• walpaper
╎• memeindo
╎• ppcp
╎• pantun
╎• motivasi
╎• katabijak
╎• dilanquote
╎• truth
╎• dare
╎• infocuaca
╎• mountain
╎• programing
╎• technology
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU SETTINGS* 」
╎
╎• setbio
╎• setppbot 
╎• setnamebot
╎• clearsesi
╎• delsampah
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU STORAGE* 」
╎
╎• addvn
╎• delvn
╎• listvn
╎• addimage
╎• delimage
╎• listimage
╎• addvideo
╎• delvideo
╎• listvideo
╎• addsticker
╎• delsticker
╎• liststicker
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
❍┈┈「 *MENU OWER* 」
╎
╎• getcase
╎• addprem
╎• delprem
╎• public
╎• self
╎• addsewa
╎• listsewa
╎• ceksewa
╎• bcgc
╎• join
╎• joincall
╎• adderror
╎• delerror
╎• clearerror
╎• listerror
╎• addcmdowner
╎• delcmdowner
╎• listcmdowner
╎• addcmdprem
╎• delcmdprem
╎• listcmdprem
╎• addcmdlimit
╎• delcmdlimit
╎• listcmdlimit
╎
❍┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈◙
`
}
  



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
console.log(chalk.bgGreen(color("[  UPDATE ]", "black")),chalk.white(`${__filename}`) )
	delete require.cache[file]
	require(file)
})


