const {
  default: makeWASocket,
  makeWALegacySocket,
  extractMessageContent,
  makeInMemoryStore,
  proto,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  getBinaryNodeChild,
  jidDecode,
  areJidsSameUser,
  generateWAMessage,
  generateForwardMessageContent,
  generateWAMessageFromContent,
  WAMessageStubType,
  getContentType,
  relayMessage,
  WA_DEFAULT_EPHEMERAL
} = require('@whiskeysockets/baileys')
//const chalk = require('chalk')
const { color} = require("./color");
const fetch = require('node-fetch')
const FileType = require ('file-type')
const { Boom } = require('@hapi/boom')
const PhoneNumber = require('awesome-phonenumber')
const fs = require('fs')
const pino = require('pino') 
const path = require('path')
const { getBuffer,sleep, smsg} = require("./myfunc");
const store = makeInMemoryStore({ logger: pino().child({ level: 'fatal', stream: 'store' }) })
const delay = ms => (ms) && new Promise(resolve => setTimeout(resolve, ms))

exports.makeWASocket = (connectionOptions, options = {}) => {
const ehz = (baileysMd ? makeWASocket : makeWALegacySocket)(connectionOptions)


const buffer = async (path) => {
let result = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? {url: path} : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return result
}




//LOAD MESSAGES
ehz.loadMessage = (messageID) => {
return Object.entries(ehz.chats)
.filter(([_, { messages }]) => typeof messages === 'object')
.find(([_, { messages }]) => Object.entries(messages)
.find(([k, v]) => (k === messageID || v.key?.id === messageID)))
?.[1].messages?.[messageID]
}

// ANTI CALL + AUTO BLOCK
  //
  /*
conn.ws.on('CB:call', async (json) => {
require('../message/anticall')(json,conn)
})
*/  

//SETTING
ehz.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
if (ehz.user && ehz.user.id) ehz.user.jid = ehz.decodeJid(ehz.user.id)
ehz.chats = {}
ehz.contacts = {}


  
 ehz.sendPoll = async (chatId, name, values, options = {}) => {
        let selectableCount = options?.selectableCount ? options.selectableCount : 1
        let messageSecret = options?.messageSecret ? options.messageSecret : ''
        return await ehz.sendMessage(chatId, {
           poll: {
                name,
                values,
                selectableCount,
                messageSecret
            },
            ...options
        }, { ...options })
 } 

/**
 * sendMessage v2
 * @param {String} chatId
 * @param {import('@adiwajshing/baileys').AnyMessageContent} message
 * @param {import('@adiwajshing/baileys').MiscMessageGenerationOptions} options
 * @returns
 */


ehz.sendMessageV2 = async (chatId, message, options = {}) => {
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await ehz.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

  /**
   * getBuffer hehe
   * @param {String|Buffer} path
   * @param {Boolean} returnFilename
   */
ehz.getFile = async (PATH, returnAsFilename) => {
let res, filename
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
if (data && returnAsFilename && !filename) (filename = path.join(__dirname, new Date * 1 + '.' + type.ext), await fs.promises.writeFile(filename, data))
return {
res,
filename,
...type,
data
}
}



  /**
   * waitEvent
   * @param {*} eventName 
   * @param {Boolean} is 
   * @param {Number} maxTries 
   * @returns 
   */
  ehz.waitEvent = (eventName, is = () => true, maxTries = 25) => {
      return new Promise((resolve, reject) => {
          let tries = 0
          let on = (...args) => {
              if (++tries > maxTries) reject('Max tries reached')
              else if (is()) {
                  ehz.ev.off(eventName, on)
                  resolve(...args)
              }
          }
          ehz.ev.on(eventName, on)
      })
  }

  /**
  * Send Media All Type 
  * @param {String} jid
  * @param {String|Buffer} path
  * @param {Object} quoted
  * @param {Object} options 
  */
  ehz.sendMedia = async (jid, path, quoted, options = {}) => {
      let { ext, mime, data } = await ehz.getFile(path)
      messageType = mime.split("/")[0]
      pase = messageType.replace('application', 'document') || messageType
      return await ehz.sendMessage(jid, { [`${pase}`]: data, mimetype: mime, ...options }, { quoted })
  }






 
  /**
 * Send Contact
 * @param {String} jid 
 * @param {String} number 
 * @param {String} name 
 * @param {Object} quoted 
 * @param {Object} options 
 */

  ehz.sendContactV2 = async (jid, kon, quoted = '', opts = {}) => {
	let list = []
	for (let i of kon) {
	    list.push({
	    	displayName: await ehz.getName(i + '@s.whatsapp.net'),
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await ehz.getName(i + '@s.whatsapp.net')}\nFN:${await ehz.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:${global.email}\nitem2.X-ABLabel:📧 Email\nitem3.URL:${global.instagram}\nitem3.X-ABLabel:📍 Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	ehz.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })
  }

  
  ehz.sendContact = async (jid, number, name, quoted, options) => {
      let njid = number.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` 
      let vcard = `
BEGIN:VCARD
VERSION:3.0
FN:${name.replace(/\n/g, '\\n')}
TEL;type=CELL;type=VOICE;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
END:VCARD
  `
      return await ehz.sendMessage(jid, {
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

  /**
   * Send Contact Array
   * @param {String} jid 
   * @param {String} number 
   * @param {String} name 
   * @param {Object} quoted 
   * @param {Object} options 
   */
  ehz.sendContactArray = async (jid, data, quoted, options) => {
      let contacts = []
      for (let [number, name, isi, isi1, isi2, isi3, isi4, isi5] of data) {
          number = number.replace(/[^0-9]/g, '')
          let vcard = `
BEGIN:VCARD
VERSION:3.0
N:Sy;Bot;;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${isi}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${isi1}
item2.EMAIL;type=INTERNET:${isi2}
item2.X-ABLabel:📧 Email
item3.ADR:;;${isi3};;;;
item3.X-ABADR:ac
item3.X-ABLabel:📍 Region
item4.URL:${isi4}
item4.X-ABLabel:Website
item5.X-ABLabel:${isi5}
END:VCARD`.trim()
          contacts.push({ vcard, displayName: name })

      }
      return await ehz.sendMessage(jid, {
          contacts: {
              displayName: (contacts.length > 1 ? `2013 kontak` : contacts[0].displayName) || null,
              contacts,
          }
      },
      {
           quoted,
           ...options
      })
  }

  

/**
         * 
         * @param {*} jid 
         * @param {*} text 
         * @param {*} quoted 
         * @param {*} options 
         * @returns 
         */
ehz.sendText = (jid, text, quoted = '', options) => ehz.sendMessage(jid, { text: text, ...options }, { quoted })


  /**
   * Reply to a message
   * @param {String} jid
   * @param {String|Object} text
   * @param {Object} quoted
   * @param {Object} mentions [m.sender]
   */
  ehz.reply = (jid, text = '', quoted, options) => {
      return Buffer.isBuffer(text) ? this.sendFile(jid, text, 'file', '', quoted, false, options) : ehz.sendMessage(jid, { ...options, text }, { quoted, ...options })
  }
  
  
  
  
  /**
  * Send a list message
  * @param jid the id to send to
  * @param button the optional button text, title and description button
  * @param rows the rows of sections list message
  */
  ehz.sendListM = (jid, button, rows, quoted, options = {}) => {
      const sections = [
          {
              title: button.title,
              rows: [...rows]
          }
      ]
      const listMessage = {
          text: button.description,
          footer: button.footerText,
          mentions: ehz.parseMention(button.description, button.footerText),
          title: '',
          buttonText: button.buttonText,
          sections
      }
      ehz.sendMessage(jid, listMessage, {
          quoted,
          ...options 
      })
  }

 
  

 
 
  
 
   
 
  /**
  * sendGroupV4Invite
  * @param {String} jid 
  * @param {*} participant 
  * @param {String} inviteCode 
  * @param {Number} inviteExpiration 
  * @param {String} groupName 
  * @param {String} caption 
  * @param {*} options 
  * @returns 
  */
  ehz.sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', caption = 'Invitation to join my WhatsApp group', options = {}) => {
      let msg = proto.Message.fromObject({
          groupInviteMessage: proto.GroupInviteMessage.fromObject({
              inviteCode,
              inviteExpiration: parseInt(inviteExpiration) || + new Date(new Date + (3 * 86400000)),
              groupJid: jid,
              groupName: groupName ? groupName : this.getName(jid),
              caption
          })
      })
      let message = await this.prepareMessageFromContent(participant, msg, options)
      await this.relayWAMessage(message)
      return message
  }

  /**
  *Message
  */
ehz.relayWAMessage = async (pesanfull) => {
var mekirim = await eh.relayMessage(pesanfull.key.remoteJid, pesanfull.message, { messageId: pesanfull.key.id })
ehz.ev.emit('messages.upsert', { messages: [pesanfull], type: 'append' });
return mekirim
}

  /**
  * cMod
  * @param {String} jid 
  * @param {*} message 
  * @param {String} text 
  * @param {String} sender 
  * @param {*} options 
  * @returns 
  */
  ehz.cMod = async (jid, message, text = '', sender = ehz.user.jid, options = {}) => {
      if (options.mentions && !Array.isArray(options.mentions)) options.mentions = [options.mentions]
      let copy = message.toJSON()
      delete copy.message.messageContextInfo
      delete copy.message.senderKeyDistributionMessage
      let mtype = Object.keys(copy.message)[0]
      let msg = copy.message
      let content = msg[mtype]
      if (typeof content === 'string') msg[mtype] = text || content
      else if (content.caption) content.caption = text || content.caption
      else if (content.text) content.text = text || content.text
      if (typeof content !== 'string') {
          msg[mtype] = { ...content, ...options }
          msg[mtype].contextInfo = {
              ...(content.contextInfo || {}),
              mentionedJid: options.mentions || content.contextInfo?.mentionedJid || []
          }
      }
      if (copy.participant) sender = copy.participant = sender || copy.participant
      else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
      if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
      else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
      copy.key.remoteJid = jid
      copy.key.fromMe = areJidsSameUser(sender, ehz.user.id) || false
      return proto.WebMessageInfo.fromObject(copy)
  }
  
  
  
  
  
  
  
  /**
   * Exact Copy Forward
   * @param {String} jid
   * @param {Object} message
   * @param {Boolean|Number} forwardingScore
   * @param {Object} options
   */
ehz.copyNForward = async (jid, message, forwardingScore = true, options = {}) => {
let m = generateForwardMessageContent(message, !!forwardingScore)
let mtype = Object.keys(m)[0]
if (forwardingScore && typeof forwardingScore == 'number' && forwardingScore > 1) m[mtype].contextInfo.forwardingScore += forwardingScore
m = generateWAMessageFromContent(jid, m, { ...options, userJid: ehz.user.id })
await ehz.relayMessage(jid, m.message, { messageId: m.key.id, additionalAttributes: { ...options }})
return m
}
  
  
     
  
  
  /**
   * Download media message
   * @param {Object} m
   * @param {String} type 
   * @param {fs.PathLike|fs.promises.FileHandle} filename
   * @returns {Promise<fs.PathLike|fs.promises.FileHandle|Buffer>}
   */
  ehz.downloadM = async (m, type, filename = '') => {
      if (!m || !(m.url || m.directPath)) return Buffer.alloc(0)
      const stream = await downloadContentFromMessage(m, type)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
      }
      if (filename) await fs.promises.writeFile(filename, buffer)
      return filename && fs.existsSync(filename) ? filename : buffer
  }
  
  ehz.downloadMed = async (message, filename, attachExtension = true) => {
      let mime = (message.msg || message).mimetype || ''
      let messageType = mime.split('/')[0].replace('application', 'document') ? mime.split('/')[0].replace('application', 'document') : mime.split('/')[0]
      const stream = await downloadContentFromMessage(message, messageType)
      let buffer = Buffer.from([])
      for await (const chunk of stream) {
          buffer = Buffer.concat([buffer, chunk])
      }
      let type = await FileType.fromBuffer(buffer)
      trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
      //trueFileName = attachExtension ? filename : filename
      // save to file
      await fs.writeFileSync(trueFileName, buffer)
      return trueFileName
  }
 

  /**
   * Parses string into mentionedJid(s)
   * @param {String} text
   */
  ehz.parseMention = (text = '') => {
      return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
  }
  
  
  ehz.saveName = async (id, name = '') => {
      if (!id) return
      id = ehz.decodeJid(id)
      let isGroup = id.endsWith('@g.us')
      if (id in ehz.contacts && ehz.contacts[id][isGroup ? 'subject' : 'name'] && id in ehz.chats) return
      let metadata = {}
      if (isGroup) metadata = await ehz.groupMetadata(id)
      let chat = { ...(ehz.contacts[id] || {}), id, ...(isGroup ? { subject: metadata.subject, desc: metadata.desc } : { name }) }
      ehz.contacts[id] = chat
      ehz.chats[id] = chat
  }

/**
* Get name from jid
* @param {String} jid
* @param {Boolean} withoutContact
*/
ehz.getName = async (jid = '', withoutContact = false) => {
jid = ehz.decodeJid(jid)
withoutContact = ehz.withoutContact || withoutContact
let v
if (jid.endsWith('@g.us')) return new Promise(async (resolve) => {
v = ehz.chats[jid] || {}
if (!(v.name || v.subject)) v = await ehz.groupMetadata(jid) || {}
resolve(v.name || v.subject || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = jid === '0@s.whatsapp.net' ? {
jid,
vname: 'WhatsApp'
} : areJidsSameUser(jid, ehz.user.id) ?
ehz.user :
(ehz.chats[jid] || {})
return (withoutContact ? '' : v.name) || v.subject || v.vname || v.notify || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international').replace(new RegExp("[()+-/ +/]", "gi"), "")
}


  
  
  
  
  
  
  ehz.processMessageStubType = async(m) => {
  /**
   * to process MessageStubType
   * @param {import('@adiwajshing/baileys').proto.WebMessageInfo} m 
   */
  if (!m.messageStubType) return
      const chat = ehz.decodeJid(m.key.remoteJid || m.message?.senderKeyDistributionMessage?.groupId || '')
  if (!chat || chat === 'status@broadcast') return
      const emitGroupUpdate = (update) => {
          ev.emit('groups.update', [{ id: chat, ...update }])
      }
      switch (m.messageStubType) {
          case WAMessageStubType.REVOKE:
          case WAMessageStubType.GROUP_CHANGE_INVITE_LINK:
          emitGroupUpdate({ revoke: m.messageStubParameters[0] })
          break
          case WAMessageStubType.GROUP_CHANGE_ICON:
          emitGroupUpdate({ icon: m.messageStubParameters[0] })
          break
          default: {
              console.log({
                  messageStubType: m.messageStubType,
                  messageStubParameters: m.messageStubParameters,
                  type: WAMessageStubType[m.messageStubType]
              })
              break
          }
      }
      const isGroup = chat.endsWith('@g.us')
      if (!isGroup) return
      let chats = ehz.chats[chat]
      if (!chats) chats = ehz.chats[chat] = { id: chat }
      chats.isChats = true
      const metadata = await ehz.groupMetadata(chat).catch(_ => null)
      if (!metadata) return
      chats.subject = metadata.subject
      chats.metadata = metadata
  }
  ehz.insertAllGroup = async() => {
      const groups = await ehz.groupFetchAllParticipating().catch(_ => null) || {}
      for (const group in groups) ehz.chats[group] = { ...(ehz.chats[group] || {}), id: group, subject: groups[group].subject, isChats: true, metadata: groups[group] }
          return ehz.chats
  }
  
 
  
  ehz.pushMessage = async(m) => {
  /**
   * pushMessage
   * @param {import('@adiwajshing/baileys').proto.WebMessageInfo[]} m 
   */
  if (!m) return
      if (!Array.isArray(m)) m = [m]
          for (const message of m) {
              try {
              // if (!(message instanceof proto.WebMessageInfo)) continue // https://github.com/adiwajshing/Baileys/pull/696/commits/6a2cb5a4139d8eb0a75c4c4ea7ed52adc0aec20f
              if (!message) continue
                  if (message.messageStubType && message.messageStubType != WAMessageStubType.CIPHERTEXT) ehz.processMessageStubType(message).catch(console.error)
                      const _mtype = Object.keys(message.message || {})
                  const mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(_mtype[0]) && _mtype[0]) ||
                  (_mtype.length >= 3 && _mtype[1] !== 'messageContextInfo' && _mtype[1]) ||
                  _mtype[_mtype.length - 1]
                  const chat = ehz.decodeJid(message.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
                  if (message.message?.[mtype]?.contextInfo?.quotedMessage) {
                  /**
                   * @type {import('@adiwajshing/baileys').proto.IContextInfo}
                   */
                  let context = message.message[mtype].contextInfo
                  let participant = ehz.decodeJid(context.participant)
                  const remoteJid = ehz.decodeJid(context.remoteJid || participant)
                  /**
                   * @type {import('@adiwajshing/baileys').proto.IMessage}
                   * 
                   */
                  let quoted = message.message[mtype].contextInfo.quotedMessage
                  if ((remoteJid && remoteJid !== 'status@broadcast') && quoted) {
                      let qMtype = Object.keys(quoted)[0]
                      if (qMtype == 'conversation') {
                          quoted.extendedTextMessage = { text: quoted[qMtype] }
                          delete quoted.conversation
                          qMtype = 'extendedTextMessage'
                      }

                      if (!quoted[qMtype].contextInfo) quoted[qMtype].contextInfo = {}
                      quoted[qMtype].contextInfo.mentionedJid = context.mentionedJid || quoted[qMtype].contextInfo.mentionedJid || []
                      const isGroup = remoteJid.endsWith('g.us')
                      if (isGroup && !participant) participant = remoteJid
                          const qM = {
                              key: {
                                  remoteJid,
                                  fromMe: areJidsSameUser(ehz.user.jid, remoteJid),
                                  id: context.stanzaId,
                                  participant,
                              },
                              message: JSON.parse(JSON.stringify(quoted)),
                              ...(isGroup ? { participant } : {})
                          }
                          let qChats = ehz.chats[participant]
                          if (!qChats) qChats = ehz.chats[participant] = { id: participant, isChats: !isGroup }
                              if (!qChats.messages) qChats.messages = {}
                                  if (!qChats.messages[context.stanzaId] && !qM.key.fromMe) qChats.messages[context.stanzaId] = qM
                                      let qChatsMessages
                                      if ((qChatsMessages = Object.entries(qChats.messages)).length > 40) qChats.messages = Object.fromEntries(qChatsMessages.slice(30, qChatsMessages.length)) // maybe avoid memory leak
                                  }
                          }
                          if (!chat || chat === 'status@broadcast') continue
                              const isGroup = chat.endsWith('@g.us')
                          let chats = ehz.chats[chat]
                          if (!chats) {
                              if (isGroup) await ehz.insertAllGroup().catch(console.error)
                                  chats = ehz.chats[chat] = { id: chat, isChats: true, ...(ehz.chats[chat] || {}) }
                          }
                          let metadata, sender
                          if (isGroup) {
                              if (!chats.subject || !chats.metadata) {
                                  metadata = await ehz.groupMetadata(chat).catch(_ => ({})) || {}
                                  if (!chats.subject) chats.subject = metadata.subject || ''
                                  if (!chats.metadata) chats.metadata = metadata
                              }
                          sender = ehz.decodeJid(message.key?.fromMe && ehz.user.id || message.participant || message.key?.participant || chat || '')
                          if (sender !== chat) {
                              let chats = ehz.chats[sender]
                              if (!chats) chats = ehz.chats[sender] = { id: sender }
                              if (!chats.name) chats.name = message.pushName || chats.name || ''
                          }
                  } else if (!chats.name) chats.name = message.pushName || chats.name || ''
                  if (['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype)) continue
                      chats.isChats = true
                  if (!chats.messages) chats.messages = {}
                      const fromMe = message.key.fromMe || areJidsSameUser(sender || chat, ehz.user.id)
                  if (!['protocolMessage'].includes(mtype) && !fromMe && message.messageStubType != WAMessageStubType.CIPHERTEXT && message.message) {
                      delete message.message.messageContextInfo
                      delete message.message.senderKeyDistributionMessage
                      chats.messages[message.key.id] = JSON.parse(JSON.stringify(message, null, 2))
                      let chatsMessages
                      if ((chatsMessages = Object.entries(chats.messages)).length > 40) chats.messages = Object.fromEntries(chatsMessages.slice(30, chatsMessages.length))
                  }
          } catch (e) {
              console.error(e)
          }
      }
  }
  
  ehz.getBusinessProfile = async (jid) => {
      const results = await ehz.query({
          tag: 'iq',
          attrs: {
              to: 's.whatsapp.net',
              xmlns: 'w:biz',
              type: 'get'
          },
          content: [{
              tag: 'business_profile',
              attrs: { v: '244' },
              content: [{
                  tag: 'profile',
                  attrs: { jid }
              }]
          }]
      })
      const profiles = getBinaryNodeChild(getBinaryNodeChild(results, 'business_profile'), 'profile')
      if (!profiles) return {} // if not bussines
      const address = getBinaryNodeChild(profiles, 'address')
      const description = getBinaryNodeChild(profiles, 'description')
      const website = getBinaryNodeChild(profiles, 'website')
      const email = getBinaryNodeChild(profiles, 'email')
      const category = getBinaryNodeChild(getBinaryNodeChild(profiles, 'categories'), 'category')
      return {
          jid: profiles.attrs?.jid,
          address: address?.content.toString(),
          description: description?.content.toString(),
          website: website?.content.toString(),
          email: email?.content.toString(),
          category: category?.content.toString(),
      }
  }
  
  /**
* ms to date
* @param {String} ms
*/
ehz.msToDate = (ms) => {
let days = Math.floor(ms / (24 * 60 * 60 * 1000))
let daysms = ms % (24 * 60 * 60 * 1000)
let hours = Math.floor((daysms) / (60 * 60 * 1000))
let hoursms = ms % (60 * 60 * 1000)
let minutes = Math.floor((hoursms) / (60 * 1000))
let minutesms = ms % (60 * 1000)
let sec = Math.floor((minutesms) / (1000))
return days + " Hari " + hours + " Jam " + minutes + " Menit"
}

/**
*
* @param {Number} ms
* @returns
*/
ehz.msToTime = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h + ' Jam ', m + ' Menit ', s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
}

/**
*
* @param {Number} ms
* @returns
*/
ehz.msToHour = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
return [h + ' Jam '].map(v => v.toString().padStart(2, 0)).join(' ')
}
ehz.msToMinute = (ms) => {
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
return [m + ' Menit '].map(v => v.toString().padStart(2, 0)).join(' ')
}
ehz.msToSecond = (ms) => {
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
}

/**
*
* @param {Number} ms
* @returns
*/
ehz.clockString = (ms) => {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h + ' Jam ', m + ' Menit ', s + ' Detik'].map(v => v.toString().padStart(2, 0)).join(' ')
}



  /**
   * 
   * @param {String} text 
   * @returns 
   */
ehz.filter = (text) => {
let mati = ["q", "w", "r", "t", "y", "p", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m"]
if (/[aiueo][aiueo]([qwrtypsdfghjklzxcvbnm])?$/i.test(text)) return text.substring(text.length - 1)
else {
let res = Array.from(text).filter(v => mati.includes(v))
let resu = res[res.length - 1]
for (let huruf of mati) {
if (text.endsWith(huruf)) {
resu = res[res.length - 2]
}
}
let misah = text.split(resu)
return resu + misah[misah.length - 1]
}
}

  
  
  /**
   * Serialize Message, so it easier to manipulate
   * @param {Object} m
   */
ehz.serializeM = (m) => {
return exports.smsg(ehz, m)
}

   /**
    * 
    * @param {*} jid 
    * @param {*} path 
    * @param {*} caption 
    * @param {*} quoted 
    * @param {*} options 
    * @returns 
    */
ehz.sendImage = async (jid, path, caption = '', setquoted, options) => {
let buffer = Buffer.isBuffer(path) ? path : await getBuffer(path)
return await ehz.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted: setquoted})
}
  
   /**
    * 
    * @param {*} jid 
    * @param {*} path 
    * @param {*} caption 
    * @param {*} quoted 
    * @param {*} options 
    * @returns 
    */
ehz.sendVideo = async (jid, yo, caption = '', quoted = '', gif = false, options) => {
//let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await ehz.sendMessage(jid, { video: yo, caption: caption, gifPlayback: gif, ...options }, {quoted })
}
  
  
  /**
       * 
       * @param {*} jid 
       * @param {*} path 
       * @param {*} quoted 
       * @param {*} mime 
       * @param {*} options 
       * @returns 
       */
ehz.sendAudio = async (jid, path, quoted = '', ptt = false, options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
  return await ehz.sendMessage(jid, { audio: buffer, ptt: ptt, ...options }, { quoted })
  }
  
  /**
   * 
   * @param {*} jid 
   * @param {*} text 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
ehz.sendTextWithMentions = async (jid, text, quoted, options = {}) => ehz.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
  
      
  /**
   * 
   * @param {*} jid 
   * @param {*} path 
   * @param {*} quoted 
   * @param {*} options 
   * @returns 
   */
ehz.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)
}
await ehz.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer
}
  
  
  
  
  
  
  
  /**
   * send group invitation via message
   * @param {string} jid gorupJid 
   * @param {string} participant this message sent to?
   * @param {string} inviteCode group invite code
   * @param {Number} inviteExpiration invite expiration
   * @param {string} groupName group name
   * @param {string} jpegThumbnail file path or url
   * @param {string} caption message caption
   * @param {any} options message options
   */
ehz.sendGroupV4Invite = async(jid, participant, inviteCode, inviteExpiration, groupName = 'unknown subject', jpegThumbnail, caption = 'Invitation to join my WhatsApp group', options = {}) => {
let msg = WAProto.Message.fromObject({
groupInviteMessage: WAProto.GroupInviteMessage.fromObject({
inviteCode,
inviteExpiration: inviteExpiration ? parseInt(inviteExpiration) : + new Date(new Date + (3 * 86400000)),
groupJid: jid,
groupName: groupName ? groupName : (await ehz.groupMetadata(jid)).subject,
jpegThumbnail: jpegThumbnail ? (await getBuffer(jpegThumbnail)).buffer : '',
caption
})
})
const m = generateWAMessageFromContent(participant, msg, options)
return await ehz.relayMessage(participant, m.message, { messageId: m.key.id })
}


ehz.sendKatalog = async (jid , title = '' , desc = '', gam , options = {}) =>{
 let message = await prepareWAMessageMedia({ image: gam    }, { upload: ehz.waUploadToServer })
const tod = generateWAMessageFromContent(jid,
{"productMessage": {
"product": {
"productImage": message.imageMessage,
"productId": "9999",
"title": title,
"description": desc,
"currencyCode": "IDR",
"priceAmount1000": "100000",
"url": `https://www.youtube.com/watch?v=TOmXzkWuCWk`,
"productImageCount": 1,
"salePriceAmount1000": "0"
},
"businessOwnerJid": `${nomerOwner}@s.whatsapp.net`
}
}, options)
return ehz.relayMessage(jid, tod.message, {messageId: tod.key.id})
} 


//SEND 1 KONTAK
ehz.sendKontak = (jid, nomor, nama, org = "", quoted = '', opts = {} ) => {
const vcard ="BEGIN:VCARD\n" 
+"VERSION:3.0\n" 
+ "FN:" +nama +"\n"
+"ORG:" + org + "\n" 
+"TEL;type=CELL;type=VOICE;waid=" +nomor + ":+" +nomor +"\n" 
+"item1.X-ABLabel:Ponsel\n"
+"item2.EMAIL;type=INTERNET:takimtod@gmail.com\n"
+"item2.X-ABLabel:Email\nitem3.URL:https://instagram.com/zyee_ez\n"
+"item3.X-ABLabel:Instagram\n"
+"item4.ADR:;;Indonesia;;;;\n"
+"item4.X-ABLabel:Region\n"
+"END:VCARD"
ehz.sendMessage(jid,{contacts: {displayName: nama, contacts: [{ vcard }] }, ...opts},{quoted})
};
  
  
/**
* 
* @param {*} message 
* @param {*} filename 
* @param {*} attachExtension 
* @returns 
*/
ehz.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
let type = await FileType.fromBuffer(buffer)

let trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName
}
  
ehz.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.type ? message.type.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])
}
return buffer
} 
  
  
  //Button Image ✓
  ehz.sendButImage = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  image: await buffer(gam1),
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: 4
  }
  return await ehz.sendMessage(id, buttonMessage, options1)
  }

//Template Button Image 2 ✓
  ehz.send5ButImg = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  image: await buffer(gam1),
  caption: text1,
  footer: desc1,
  templateButtons: but,
  headerType: 4
  }
  
  return await ehz.sendMessage(id, buttonMessage, options1)               
  }


  //Button 5 Loc ✓
  ehz.send5ButLoc = async(id, text1, desc1, gam1, but = [],options1 = {}) => {
  let buttonMessage = {
  location: { jpegThumbnail: await buffer(gam1) } ,
  caption: text1,
  footer: desc1,
  viewOnce: true,
  templateButtons: but,
  headerType: "LOCATION"
  }
  return await ehz.sendMessage(id, buttonMessage, options1)
    }
  
  //Button Loc ✓
  ehz.sendButLoc = async(id, text1, desc1, gam1, but = [], options1 = {}) => {
  let buttonMessage = {
  location: { jpegThumbnail: await buffer(gam1) } ,
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: "LOCATION"
  }
  return await ehz.sendMessage(id, buttonMessage, options1)
  }
  

  
  //Button Text ✓
  ehz.sendButMessage = async (id, text1, desc1, but = [], options  ) => {
  let buttonMessage = {
  text: text1,
  footer: desc1,
  buttons: but,
  headerType: 1
  }
  return ehz.sendMessage(id, buttonMessage,{quoted: options})
  }


  //Template Button 5 Text ✓
  ehz.send5ButMessage = async (id, text1, desc1, but = [], options  ) => {
  let buttonMessage = {
  text: text1,
  footer: desc1,
  templateButtons: but,
  headerType: 1
  }
  return ehz.sendMessage(id, buttonMessage,{quoted: options})
  }
  
  //Button Gif ✓
  ehz.send5ButGif = async (id, text1, desc1, gam1, but = [],gam, options = {}) => {
   let buff = /^https?:\/\//.test(gam) ? await getBuffer(gam) : gam
  let buttonMessage = {
  video: await buffer(gam1),
  caption: text1,
  footer: desc1,
  templateButtons: but,
  gifPlayback: true,
  jpegThumbnail: buff, 
  fileLength : 99, 
  headerType: 'VIDEO'
  }
  return await ehz.sendMessage(id, buttonMessage, options)
  }
  
  //Button Image ✓
  ehz.sendButGif = async(id, text1, desc1, gam1, but = [], gam,options1 = {}) => {
  let buff = /^https?:\/\//.test(gam) ? await getBuffer(gam) : gam
  let buttonMessage = {
  video: await buffer(gam1),
  caption: text1,
  footer: desc1,
  buttons: but,
  gifPlayback: true,
  jpegThumbnail: buff, 
  fileLength : 99, 
  headerType: 'VIDEO'
  }
  return await ehz.sendMessage(id, buttonMessage, options1)
  }
  
  
 
  //Button document ✓
  ehz.sendButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
  let buff = /^https?:\/\//.test(gam1) ? await getBuffer(gam1) : gam1
  if(docType === "pptx"){
  var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  } else if(docType === "xlsx"){
  var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  } else if(docType === "zip"){
  var AppType = "application/zip"
  } else if(docType === "pdf"){
  var AppType = "application/pdf"
  } else if(docType === "docx"){
  var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  } 
  const buttonMessage = {
  contextInfo: options,
  document:{ url: "https://wa.me/628388024064" },
  mimetype: AppType, 
  title : "Footer text", 
  fileLength : 99999, 
  pageCount: 1, 
  fileName : "Bot WhatsApp", 
  caption: text1,
  footer: desc1,
  buttons: but,
  headerType: "DOCUMENT",
  jpegThumbnail: buff
  }
  
  return ehz.sendMessage(id, buttonMessage,options1)
  } 


  ehz.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
 let type = await ehz.getFile(path, true)
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
 await ehz.sendMessage(jid, {
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

  
  //Button document ✓
  ehz.send5ButDoc = async(id, text1, desc1, gam1, but = [], options,  options1 = {}) => {	
   let buff = /^https?:\/\//.test(gam1) ? await getBuffer(gam1) : gam1
  if(docType === "pptx"){
  var AppType = "application/vnd.openxmlformats-officedocument.presentationml.presentation"
  } else if(docType === "xlsx"){
  var AppType = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  } else if(docType === "zip"){
  var AppType = "application/zip"
  } else if(docType === "pdf"){
  var AppType = "application/pdf"
  } else if(docType === "docx"){
  var AppType = "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  } 
  const buttonMessage = {
  contextInfo: options,
 document:{ url: "https://wa.me/6281320170984" },
  mimetype: AppType, 
  title : "Footer text", 
  fileLength : 999999999999, 
  pageCount: 100, 
  fileName : "Extream", 
  caption: text1,
  footer: desc1,
  templateButtons: but,
  headerType: "DOCUMENT",
  jpegThumbnail: buff
  }
  
  return ehz.sendMessage(id, buttonMessage,options1)
  } 
  
  


  
ehz.sendPayment = async (jid, amount, currency, text = '', from, image, options) => {
const requestPaymentMessage = { amount: {
currencyCode: currency || 'USD',
offset: 0,
value: amount || 9.99
},
expiryTimestamp: 0,
amount1000: (amount || 9.99) * 1000,
currencyCodeIso4217: currency || 'USD',
requestFrom: from || '0@s.whatsapp.net',
noteMessage: {
extendedTextMessage: {
text: text || 'Example Payment Message'
}
},
background: !!image ? (await makeBackgroundRequestPayment(image, {
upload: ehz.waUploadToServer
})) : undefined
};
return await ehz.relayMessage(jid, { requestPaymentMessage }, { ...options });
}
      
/**
* Send a list message
* @param jid the id to send to
* @param button the optional button text, title and description button
* @param rows the rows of sections list message
*/
ehz.sendListM = async (jid, button, rows, quoted, options = {}) => {
const sections = [
{
title: button.title,
rows: [...rows]
}
]
const listMessage = {
text: button.description,
footer: button.footerText,
mentions: await ehz.parseMention(button.description),
ephemeralExpiration: global.ephemeral,
title: '',
buttonText:button.buttonText,
sections
}
ehz.sendMessage(jid, listMessage, {
quoted,
contextInfo: {
forwardingScore: 999999,
isForwarded: true,
...options
}
})
} 
  
































  Object.defineProperty(ehz, 'name', {
      value: { ...(options.chats || {}) },
      configurable: true,
  })
  if (ehz.user?.id) ehz.user.jid = ehz.decodeJid(ehz.user.id)
  //bind(ehz)
  store.bind(ehz.ev)
  return ehz









//------------------------------[ BATAS KATULISTIWA ]----------------------------\\
}

/**
* Serialize Message
* @param {WAConnection} conn 
* @param {Object} m 
* @param {Boolean} hasParent 
*/ 
exports.smsg = (ehz, m, store) => {
    if (!m) return m
    let M = proto.WebMessageInfo
    if (m.key) {
        m.id = m.key.id
        m.isBaileys = m.id.startsWith('BAE5') && m.id.length === 16
        m.chat = m.key.remoteJid
        m.fromMe = m.key.fromMe
        m.isGroup = m.chat.endsWith('@g.us')
        m.sender = ehz.decodeJid(m.fromMe && ehz.user.id || m.participant || m.key.participant || m.chat || '')
        if (m.isGroup) m.participant = ehz.decodeJid(m.key.participant) || ''
    }
    if (m.message) {
        m.mtype = getContentType(m.message)
        m.msg = (m.mtype == 'viewOnceMessage' ? m.message[m.mtype].message[getContentType(m.message[m.mtype].message)] : m.message[m.mtype])
        m.body = m.message.conversation || m.msg.caption || m.msg.text || (m.mtype == 'listResponseMessage') && m.msg.singleSelectReply.selectedRowId || (m.mtype == 'buttonsResponseMessage') && m.msg.selectedButtonId || (m.mtype == 'viewOnceMessage') && m.msg.caption || m.text
        let quoted = m.quoted = m.msg.contextInfo ? m.msg.contextInfo.quotedMessage : null
        m.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
        if (m.quoted) {
            let type = getContentType(quoted)
			m.quoted = m.quoted[type]
            if (['productMessage'].includes(type)) {
				type = getContentType(m.quoted)
				m.quoted = m.quoted[type]
			}
            if (typeof m.quoted === 'string') m.quoted = {
				text: m.quoted
			}
            m.quoted.mtype = type
            m.quoted.id = m.msg.contextInfo.stanzaId
			m.quoted.chat = m.msg.contextInfo.remoteJid || m.chat
            m.quoted.isBaileys = m.quoted.id ? m.quoted.id.startsWith('BAE5') && m.quoted.id.length === 16 : false
			m.quoted.sender = ehz.decodeJid(m.msg.contextInfo.participant)
			m.quoted.fromMe = m.quoted.sender === (ehz.user && ehz.user.id)
            m.quoted.text = m.quoted.text || m.quoted.caption || m.quoted.conversation || m.quoted.contentText || m.quoted.selectedDisplayText || m.quoted.title || ''
			m.quoted.mentionedJid = m.msg.contextInfo ? m.msg.contextInfo.mentionedJid : []
            m.getQuotedObj = m.getQuotedMessage = async () => {
			if (!m.quoted.id) return false
			let q = await store.loadMessage(m.chat, m.quoted.id, ehz)
 			return exports.smsg(ehz, q, store)
            }
            let vM = m.quoted.fakeObj = M.fromObject({
                key: {
                    remoteJid: m.quoted.chat,
                    fromMe: m.quoted.fromMe,
                    id: m.quoted.id
                },
                message: quoted,
                ...(m.isGroup ? { participant: m.quoted.sender } : {})
            })

            /**
             * 
             * @returns 
             */
            m.quoted.delete = () => ehz.sendMessage(m.quoted.chat, { delete: vM.key })

	   /**
		* 
		* @param {*} jid 
		* @param {*} forceForward 
		* @param {*} options 
		* @returns 
	   */
            m.quoted.copyNForward = (jid, forceForward = false, options = {}) => ehz.copyNForward(jid, vM, forceForward, options)

            /**
              *
              * @returns
            */
            m.quoted.download = () => ehz.downloadMediaMessage(m.quoted)
        }
    }
    if (m.msg.url) m.download = () => ehz.downloadMediaMessage(m.msg)
    m.text = m.msg.text || m.msg.caption || m.message.conversation || m.msg.contentText || m.msg.selectedDisplayText || m.msg.title || ''
    /**
	* Reply to this message
	* @param {String|Object} text 
	* @param {String|false} chatId 
	* @param {Object} options 
	*/
    m.reply = (text, chatId = m.chat, options = {}) => Buffer.isBuffer(text) ? ehz.sendMedia(chatId, text, 'file', '', m, { ...options }) : ehz.sendText(chatId, text, m, { ...options })
    /**
	* Copy this message
	*/
	m.copy = () => exports.smsg(ehz, M.fromObject(M.toObject(m)))

	/**
	 * 
	 * @param {*} jid 
	 * @param {*} forceForward 
	 * @param {*} options 
	 * @returns 
	 */
	m.copyNForward = (jid = m.chat, forceForward = false, options = {}) => ehz.copyNForward(jid, m, forceForward, options)

    return m
}

exports.logic = (check, inp, out) => {
    if (inp.length !== out.length) throw new Error('Input and Output must have same length')
    for (let i in inp) if (util.isDeepStrictEqual(check, inp[i])) return out[i]
    return null
}

exports.protoType = () => {
  Buffer.prototype.toArrayBuffer = function toArrayBufferV2() {
    const ab = new ArrayBuffer(this.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < this.length; ++i) {
        view[i] = this[i];
    }
    return ab;
  }
  /**
   * @returns {ArrayBuffer}
   */
  Buffer.prototype.toArrayBufferV2 = function toArrayBuffer() {
    return this.buffer.slice(this.byteOffset, this.byteOffset + this.byteLength)
  }
  /**
   * @returns {Buffer}
   */
  ArrayBuffer.prototype.toBuffer = function toBuffer() {
    return Buffer.from(new Uint8Array(this))
  }
  // /**
  //  * @returns {String}
  //  */
  // Buffer.prototype.toUtilFormat = ArrayBuffer.prototype.toUtilFormat = Object.prototype.toUtilFormat = Array.prototype.toUtilFormat = function toUtilFormat() {
  //     return util.format(this)
  // }
  Uint8Array.prototype.getFileType = ArrayBuffer.prototype.getFileType = Buffer.prototype.getFileType = async function getFileType() {
    return await fileTypeFromBuffer(this)
  }
  /**
   * @returns {Boolean}
   */
  String.prototype.isNumber = Number.prototype.isNumber = isNumber
  /**
   *
   * @returns {String}
   */
  String.prototype.capitalize = function capitalize() {
    return this.charAt(0).toUpperCase() + this.slice(1, this.length)
  }
  /**
   * @returns {String}
   */
  String.prototype.capitalizeV2 = function capitalizeV2() {
    const str = this.split(' ')
    return str.map(v => v.capitalize()).join(' ')
  }
  String.prototype.decodeJid = function decodeJid() {
    if (/:\d+@/gi.test(this)) {
      const decode = jidDecode(this) || {}
      return (decode.user && decode.server && decode.user + '@' + decode.server || this).trim()
    } else return this.trim()
  }
  /**
   * number must be milliseconds
   * @returns {string}
   */
  Number.prototype.toTimeString = function toTimeString() {
    // const milliseconds = this % 1000
    const seconds = Math.floor((this / 1000) % 60)
    const minutes = Math.floor((this / (60 * 1000)) % 60)
    const hours = Math.floor((this / (60 * 60 * 1000)) % 24)
    const days = Math.floor((this / (24 * 60 * 60 * 1000)))
    return (
      (days ? `${days} day(s) ` : '') +
      (hours ? `${hours} hour(s) ` : '') +
      (minutes ? `${minutes} minute(s) ` : '') +
      (seconds ? `${seconds} second(s)` : '')
    ).trim()
  }
  Number.prototype.getRandom = String.prototype.getRandom = Array.prototype.getRandom = getRandom
}

function isNumber() {
  const int = parseInt(this)
  return typeof int === 'number' && !isNaN(int)
}

function getRandom() {
  if (Array.isArray(this) || this instanceof String) return this[Math.floor(Math.random() * this.length)]
  return Math.floor(Math.random() * this)
}

/**
 * ??
 * @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
 * @returns {boolean}
 */
function nullish(args) {
  return !(args !== null && args !== undefined)
}



