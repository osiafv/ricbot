const util = require('util')
const moment = require("moment-timezone");
const time = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const fs = require("fs");
const { color } = require("../lib/color");
const { getBuffer, getRandom, getGroupAdmins,sleep} = require("../lib/myfunc");
const {TelegraPh} = require('../lib/uploader')
const fetch = require('node-fetch');
const chalk = require('chalk')
const bg = "https://tinyurl.com/y23xrfhu"
//require("../settings.js")


module.exports = async(client, anu) => {
try{
//
let jeda = false
if(jeda) return Log('anti spam welcome aktif')
jeda = true
  
if(anu.action == "remove" && anu.participants[0].split("@")[0].includes(client.user.id.split(":")[0]) ) return

const from = anu.id
const botNumber = client.user.id 
const groupMet = await client.groupMetadata(from)
const groupName = groupMet.subject  
const allmem = groupMet.participants.length
const mem = anu.participants[0];
const memNumber = mem.split("@")[0];
const timeWib = moment.tz("Asia/Jakarta").format("HH:mm");
const groupMembers = groupMet.participants;
const groupAdmins = getGroupAdmins(groupMembers);                
const pushname =  await client.getName(mem)
const memb = groupMet.participants.length
const isWelcome = from ? db.data.chats[from].welcome : true
  
const Add = anu.action == "add" 
const Remove = anu.action == "remove"
const OneMem = anu.participants.length === 1
const NotMe = !mem.includes(botNumber) 

const intro = `[]=========WELCOME=======[]\n\nHalo @${mem.split('@')[0]}\n\n Selamat Datang Di ${groupName} \n\nperkenalkan dirimu
• Nama :
• Alamat :
• Umur :
*Jangan Lupa Baca Deskripsi📝*
Total Mem sata sini Adalah ${memb}
`;

  
 



const outro = `[]========[]GOODBYEl[]=========[]

 @${mem.split('@')[0]}\n\nSisa Peserta Grub ${memb}`


 
  


try {
if(mem.includes(botNumber)) { return }
var pp_user = await client.profilePictureUrl(mem, 'image')
} catch (e) {
var pp_user = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
};    
try {
var pp_grup = await client.profilePictureUrl(from, 'image')
} catch (e) {
var pp_grup = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60";
}



                       
 
 
const WelcomeType1 = async(id, text1, desc1, gam1, gam2, but = [], options = {}) => {	
try{
const canvacord = require("canvacord");
  
if(Add){
var image3 = new canvacord.Welcomer()
        .setUsername(pushname)
        .setDiscriminator(`${allmem}`)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setAvatar(gam1)
        .setBackground(bg)  
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `+ ${allmem} member!`)
        .setText("title", "welcome")
        .setText("message", `welcome in ${groupName}`)
} else if(Remove){
var image3 = new canvacord.Leaver()
        .setUsername(pushname)
        .setDiscriminator(`${allmem}`)
        .setMemberCount(allmem)
        .setGuildName(groupName)
        .setBackground(bg)  
        .setAvatar(gam1)
        .setColor("border", "#000000")
        .setColor("username-box", "#000000d")
        .setColor("discriminator-box", "#000000")
        .setColor("message-box", "#000000")
        .setColor("title", "#eb26dd")
        .setColor("avatar", "#000000")
        .setColor("background", "#000000")
        .setText("member-count", `- ${allmem} member!`)
        .setText("title", "good bye")
        .setText("message", `we will mis you`)
}

let foto = await getRandom(".png")
image3.build()
        .then(async data => {
      
           await canvacord.write(data,foto);
          let gambar = await fs.readFileSync(foto)

          
let buttonMessage = {
    contextInfo:options,
    image:gambar,
    caption: text1,
    footer: desc1,
    buttons: but,
    headerType: 4
}

await client.sendMessage(id, buttonMessage, options)
await fs.unlinkSync(foto)
        });
  
} catch(err){err

/*let autoButton = Remove? butOut : butIn
await client.sendButImage(id, text1, desc1, gam1, autoButton, options)*/
}
}

        
             /*
//Group Update Console
if (Remove&& OneMem){
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah keluar dari gc`,`green`), color(`${groupName}`,`magenta`))
} else  if (Add && OneMem){ 
console.log(color("[GRUP UPDATE]", "magenta"), color(`${pushname} telah bergabung di gc`,`green`), color(`${groupName}`,`magenta`))
}
*/

//Welcome Type1
if(Add && OneMem && NotMe && isWelcome){ 
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
WelcomeType1(from, intro, `${groupMet.desc}`, ppUser, ppGc,null,{ "mentionedJid": [mem]})

  
} else if(Remove && NotMe && isWelcome){      
let ppUser = await getBuffer(pp_user)
let ppGc = await getBuffer(pp_grup)
WelcomeType1(from, outro, ppUser, ppGc, null,{ "mentionedJid": [mem]})
}

jeda = false

  
} catch (err) {
jeda = false
console.log(err)
let e = String(err) 
if (e.includes("this.isZero")) {return}
if (e.includes("rate-overlimit")) {return}
if (e.includes('Connection Closed')){ return }
if (e.includes('Timed Out')){ return }
console.log(color('GROUP : %s', 'white'), color(e, 'green'))
}   
}



let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})


 















