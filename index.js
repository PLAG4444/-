const makeWAsocket = require("@whiskeysockets/baileys").default
const { Boom } = require('@hapi/boom')
const NodeCache = require("node-cache")
const readline = require("readline")
const mimetype = require("mime-types")
const fs = require('fs')
const axios = require('axios')
const exec = require('child_process').exec;
const moment = require("moment-timezone") 
const time = moment.tz('America/Lima').format('DD/MM HH:mm:ss')
const PhoneNumber = require('awesome-phonenumber')
const { fetchJson,fetchBuffer , getBuffer } = require('./archivos/gets.js')
const cfonts = require('cfonts');
const pino = require('pino')
const adivinanzaActiva = {}; // Almacena las adivinanzas activas por chat
const ahorcadoActivo = {}; // Almacena partidas activas por grupo
const adivinaMusicaActiva = {};
const adivinaPeliculaActiva = {};
let cooldownRobar = {};
let cooldownMinar = {};
let cooldownCofre = {};
let cooldownCartas = {};
let cooldownTrabajar = {};
const tictactoeGames = {}; // Guardará las partidas activas


// Cargar o crear el archivo de últimos mensajes
let ultimosMensajes = {};



const fetch = require('node-fetch')
const cheerio = require('cheerio')
let phoneNumber = "PHONE NUMBER";
//-------------------Archivos Js--------------------//


const { default: kakashiIncConnect, getAggregateVotesInPollMessage, delay, PHONENUMBER_MCC, makeCacheableSignalKeyStore, useMultiFileAuthState, DisconnectReason, fetchLatestBaileysVersion, generateForwardMessageContent, prepareWAMessageMedia, generateWAMessageFromContent, generateMessageID, downloadContentFromMessage, makeInMemoryStore, jidDecode, proto } = require("@whiskeysockets/baileys")
const chalk = require('chalk')
const store = makeInMemoryStore({
    logger: pino().child({
        level: 'silent',
        stream: 'store'
    })
})
const banner = cfonts.render((`BOT|VIP`), {
font: 'block',            
colors: ['redBright'],
align: 'center', 
background: 'transparent',  
letterSpacing: 1,           
lineHeight: 1,            
space: true,               
maxLength: '0',            
gradrient: [`blue`,`yellow`],     
independentGradient: true, 
transitionGradient: true, 
env: 'node'
});  
const pairingCode = !!phoneNumber || process.argv.includes("--pairing-code")
const useMobile = process.argv.includes("--mobile")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const question = (text) => new Promise((resolve) => rl.question(text, resolve))
const color = (text, color) => { return !color ? chalk.yellow(text) : chalk.keyword(color)(text) };
function getGroupAdmins(participants) {
admins = []
for (let i of participants) {
if(i.admin == 'admin') admins.push(i.id)
if(i.admin == 'superadmin') admins.push(i.id)
}
return admins
}


//-----------------------------🔥-------------------------------//
const prefixo = ".";
const wm = "YOUR NAME"
const botname = "🍒 ᴋɪᴛᴀɢᴀᴡᴀ ʙᴏᴛ 🍒"
const numerodono = "+52 564 933 7420";
const owner = "5215649337420@s.whatsapp.net"
//-----------------------------🔥-------------------------------//
const vcard = 
'BEGIN:VCARD\n'
+ 'VERSION:3.0\n' 
+ 'FN: 👑⃟𝑭𝑿ㅤᴋᴀᴋᴀꜱʜɪㅤ悟 \n'
+ 'ORG: 🖥️ 𝙿𝚁𝙾𝙶𝚁𝙰𝙼𝙰𝙳𝙾𝚁 🖥️ ;\n'
+ 'TEL;type=CELL;type=VOICE;waid=5215649337420:+52 56 4933 7420\n'
+ 'END:VCARD'
//----------------Archivos Json-----------------//
const registros = JSON.parse(fs.readFileSync('./archivos/json/registros.json'))
const { donor } = require('./archivos/plaga.js')
const animales = JSON.parse(fs.readFileSync('./archivos/json/animales.json', 'utf-8'));
const informacionAnimal = JSON.parse(fs.readFileSync('./archivos/json/animalinfo.json', 'utf-8'));
const welkom =JSON.parse(fs.readFileSync('./archivos/json/welkom.json'))
const antilink = JSON.parse(fs.readFileSync('./archivos/json/antilink.json'))

const autosticker = JSON.parse(fs.readFileSync('./archivos/json/autosticker.json', 'utf-8'));
const archivoUsuarios = './archivos/json/usuariosActivos.json'; 
let usuariosActivos = fs.existsSync(archivoUsuarios) ? JSON.parse(fs.readFileSync(archivoUsuarios)) : {};
const antitoxic = JSON.parse(fs.readFileSync("./archivos/json/antitoxic.json"))
const toxic = require("./archivos/json/toxic.js")
const antiprivadoPath = './archivos/json/antiprivado.json';
const ownerNumber = '5215649337420@s.whatsapp.net'; // Reemplaza con tu número
const ownerNumber2 = '+5219618162490@s.whatsapp.net'; // Reemplaza con tu otro numero

// Ruta del JSON donde se almacenarán los IDs de grupo con autoreacción activada
const autoreaccionPath = './archivos/json/autoreaccion.json';

const antispamPath = './archivos/json/antispam.json';
let antispamGrupos = fs.existsSync(antispamPath) ? JSON.parse(fs.readFileSync(antispamPath)) : [];

const tiempoEsperaMs = 10000; // 10 segundos
const duracionBloqueoMs = 10 * 60 * 1000; // 10 minutos
const advertenciasMax = 5;

let usuariosSpam = {}; // guarda tiempo último uso y advertencias
let bloqueados = {};   // guarda usuarios bloqueados y su tiempo

const mutedsPath = './archivos/json/muteds.json';
let muteds = fs.existsSync(mutedsPath) ? JSON.parse(fs.readFileSync(mutedsPath)) : {};
const guardarMuteados = () => {
    fs.writeFileSync(mutedsPath, JSON.stringify(muteds, null, 2));
};

const rutaSimi = './archivos/json/simi.json';
let gruposSimi = fs.existsSync(rutaSimi) ? JSON.parse(fs.readFileSync(rutaSimi)) : [];
const guardarSimi = () => fs.writeFileSync(rutaSimi, JSON.stringify(gruposSimi, null, 2));


// Cargar la lista de grupos si el archivo existe; de lo contrario, crear un arreglo vacío.
let autoreaccionGrupos = [];
if (fs.existsSync(autoreaccionPath)) {
  try {
    autoreaccionGrupos = JSON.parse(fs.readFileSync(autoreaccionPath, 'utf8'));
  } catch (error) {
    console.error("Error leyendo autoreaccion.json:", error);
    autoreaccionGrupos = [];
  }
} else {
  autoreaccionGrupos = [];
}

// Lista de emojis para reaccionar (se elegirá uno al azar por mensaje)



const rutaAutoLinkImg = './archivos/json/autolinkimg.json';
let autoLinkImgGrupos = fs.existsSync(rutaAutoLinkImg) ? JSON.parse(fs.readFileSync(rutaAutoLinkImg)) : [];
const guardarAutoLinkImg = () => fs.writeFileSync(rutaAutoLinkImg, JSON.stringify(autoLinkImgGrupos, null, 2));



const antiratasPath = './archivos/json/antiratas.json';
let antiratasGrupos = fs.existsSync(antiratasPath) ? JSON.parse(fs.readFileSync(antiratasPath)) : [];



const rutaRatas = './archivos/json/ratas.json';
let prefijosRatas = fs.existsSync(rutaRatas) ? JSON.parse(fs.readFileSync(rutaRatas)) : [];


///////////









//----------------Archivos Json---------------*-//


function getNationality(number) {
const nationalities = {
'52': 'México 🇲🇽',
'1': 'EE.UU. 🇺🇸',
'44': 'Reino Unido 🇬🇧',
'57': 'Colombia 🇨🇴',
'591': 'Bolivia 🇧🇴',
'33': 'Francia 🇫🇷',
'51': 'Perú 🇵🇪',
'49': 'Alemania 🇩🇪',
'61': 'Australia 🇦🇺',
'34': 'España 🇪🇸',
'55': 'Brasil 🇧🇷',
'81': 'Japón 🇯🇵',
'86': 'China 🇨🇳',
'39': 'Italia 🇮🇹',
'64': 'Nueva Zelanda 🇳🇿',
'30': 'Grecia 🇬🇷',
'41': 'Suiza 🇨🇭',
'7': 'Rusia 🇷🇺',
'353': 'Irlanda 🇮🇪',
'45': 'Dinamarca 🇩🇰',
'31': 'Países Bajos 🇳🇱',
'46': 'Suecia 🇸🇪',
'358': 'Finlandia 🇫🇮',
'63': 'Filipinas 🇵🇭',
'58': 'Venezuela 🇻🇪',
'994': 'Azerbaiyán 🇦🇿',
'372': 'Estonia 🇪🇪',
'370': 'Lituania 🇱🇹',
'371': 'Letonia 🇱🇻',
'381': 'Serbia 🇷🇸',
'966': 'Arabia Saudita 🇸🇦',
'90': 'Turquía 🇹🇷',
'20': 'Egipto 🇪🇬',
'60': 'Malasia 🇲🇾',
'94': 'Sri Lanka 🇱🇰',
'95': 'Myanmar 🇲🇲',
'62': 'Indonesia 🇮🇩',
'65': 'Singapur 🇸🇬',
'54': 'Argentina 🇦🇷',
'93': 'Afganistán 🇦🇫',
'976': 'Mongolia 🇲🇳',
'374': 'Armenia 🇦🇲',
'998': 'Uzbekistán 🇺🇿',
'378': 'San Marino 🇸🇲',
'420': 'República Checa 🇨🇿',
'421': 'Eslovaquia 🇸🇰',
'352': 'Luxemburgo 🇱🇺',
'356': 'Malta 🇲🇹',
'47': 'Noruega 🇳🇴',
'354': 'Islandia 🇮🇸',
'355': 'Albania 🇦🇱',
'228': 'Togo 🇹🇬',
'229': 'Benín 🇧🇯',
'235': 'Chad 🇹🇩',
'256': 'Uganda 🇺🇬',
'263': 'Zimbabue 🇿🇼',
'267': 'Botsuana 🇧🇼',
'27': 'Sudáfrica 🇿🇦',
'680': 'Palaos 🇵🇼',
'675': 'Papúa Nueva Guinea 🇵🇬',
'507': 'Panamá 🇵🇦',
'850': 'Corea del Norte 🇰🇵',
'82': 'Corea del Sur 🇰🇷',
'225': 'Costa de Marfil 🇨🇮',
'241': 'Gabón 🇬🇦',
'212': 'Marruecos 🇲🇦',
'263': 'Zimbabue 🇿🇼',
'246': 'Isla de Navidad 🇨🇽',
'252': 'Somalia 🇸🇴',
'60': 'Malasia 🇲🇾',
'358': 'Finlandia 🇫🇮',
'358': 'Finlandia 🇫🇮',
'64': 'Nueva Zelanda 🇳🇿',
'963': 'Siria 🇸🇾',
'673': 'Brunéi 🇧🇳',
'686': 'Islas Cook 🇨🇰',
'691': 'Micronesia 🇫🇲',
'682': 'Islas Cook 🇨🇰',
'689': 'Polinesia Francesa 🇵🇫',
'676': 'Tonga 🇹🇴',
'674': 'Nauru 🇳🇷',
'678': 'Vanuatu 🇻🇺',
'681': 'Wallis y Futuna 🇼🇫',
'682': 'Islas Cook 🇨🇰',
'770': 'Comoras 🇰🇲',
'258': 'Mozambique 🇲🇿',
'592': 'Guyana 🇬🇾',
'855': 'Camboya 🇰🇭',
'257': 'Burundi 🇧🇮',
'677': 'Salomón 🇸🇧',
'507': 'Panamá 🇵🇦',
'389': 'Macedonia del Norte 🇲🇰',
'43': 'Austria 🇦🇹',
'502': 'Guatemala 🇬🇹',
'351': 'Portugal 🇵🇹',
'1869': 'San Cristóbal y Nieves 🇰🇳',
'1868': 'Trinidad y Tobago 🇹🇹',
'1758': 'Santa Lucía 🇱🇨',
'260': 'Zambia 🇿🇲',
'263': 'Zimbabue 🇿🇼',
'850': 'Corea del Norte 🇰🇵',
'82': 'Corea del Sur 🇰🇷',
'60': 'Malasia 🇲🇾',
'963': 'Siria 🇸🇾',
'256': 'Uganda 🇺🇬',
'245': 'Guinea-Bisáu 🇬🇼',
'228': 'Togo 🇹🇬',
'240': 'Guinea Ecuatorial 🇬🇶',
'242': 'Congo 🇨🇬',
'243': 'República Democrática del Congo 🇨🇩',
'251': 'Etiopía 🇪🇹',
'256': 'Uganda 🇺🇬',
'233': 'Ghana 🇬🇭',
'41': 'Suiza 🇨🇭',
'995': 'Georgia 🇬🇪',
'267': 'Botsuana 🇧🇼',
'233': 'Ghana 🇬🇭',
'226': 'Burkina Faso 🇧🇫',
'228': 'Togo 🇹🇬',
'225': 'Costa de Marfil 🇨🇮',
'231': 'Liberia 🇱🇷',
'242': 'Congo 🇨🇬',
'243': 'República Democrática del Congo 🇨🇩',
'254': 'Kenia 🇰🇪',
'265': 'Malaui 🇲🇼',
'240': 'Guinea Ecuatorial 🇬🇶',
'251': 'Etiopía 🇪🇹',
'243': 'República Democrática del Congo 🇨🇩',
'254': 'Kenia 🇰🇪',
'243': 'República Democrática del Congo 🇨🇩',
'226': 'Burkina Faso 🇧🇫',
'592': 'Guyana 🇬🇾',
'250': 'Ruanda 🇷🇼',
'963': 'Siria 🇸🇾',
'963': 'Siria 🇸🇾',
'63': 'Filipinas 🇵🇭',
'960': 'Maldivas 🇲🇻',
'975': 'Bhután 🇧🇹',
'880': 'Bangladés 🇧🇩',
'689': 'Polinesia Francesa 🇵🇫',
'64': 'Nueva Zelanda 🇳🇿',
'594': 'Guayana Francesa 🇬🇫',
'674': 'Nauru 🇳🇷',
'682': 'Islas Cook 🇨🇰',
'670': 'Timor Oriental 🇹🇱',
'235': 'Chad 🇹🇩',
'216': 'Túnez 🇹🇳',
'241': 'Gabón 🇬🇦',
'502': 'Guatemala 🇬🇹',
'265': 'Malawi 🇲🇼',
'257': 'Burundi 🇧🇮',
'677': 'Islas Salomón 🇸🇧',
'264': 'Namibia 🇳🇦',
'31': 'Países Bajos 🇳🇱',
'64': 'Nueva Zelanda 🇳🇿',
'254': 'Kenia 🇰🇪',
'94': 'Sri Lanka 🇱🇰',
'855': 'Camboya 🇰🇭',
'960': 'Maldivas 🇲🇻',
'47': 'Noruega 🇳🇴',
'683': 'Islas del Pacífico 🇵🇬',
'674': 'Nauru 🇳🇷',
'682': 'Islas Cook 🇨🇰',
'678': 'Vanuatu 🇻🇺',
'691': 'Micronesia 🇫🇲',
'264': 'Namibia 🇳🇦',
'598': 'Uruguay 🇺🇾',
'672': 'Islas de Navidad 🇨🇽',
'685': 'Samoa 🇼🇸',
'1876': 'Jamaica 🇯🇲',
};
const countryCode4 = number.substring(0, 4);
const countryCode3 = number.substring(0, 3);
const countryCode2 = number.substring(0, 2);
return nationalities[countryCode4] || nationalities[countryCode3] || nationalities[countryCode2] || 'Desconocido';
}


async function Usuarios(sender, pushname, celular) {
const UsuarioN = {
id: sender,
nombre: pushname,
coins: 10,
diamantes: 0,
nivel: 1,
xp: 0,
celular : sender,
premium: false
}
registros.push(UsuarioN)
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros))
}


function cobrarMonedas(usuarioId, cantidad) {
    let index = registros.findIndex(u => u.id === usuarioId);
    if (index === -1) return { status: false, message: '❌ *No estás registrado.*' };

    if (registros[index].coins < cantidad) {
        return { status: false, message: `❌ *No tienes suficientes monedas. Necesitas ${cantidad} monedas.*` };
    }

    registros[index].coins -= cantidad;
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

    return { status: true, message: `✅ *Se te han descontado ${cantidad} monedas. Te quedan ${registros[index].coins}.*` };
}


//-----------Funciones Del Bot-------------//
async function startProo() {
const {state,saveCreds}=await useMultiFileAuthState('./session')
const msgRetryCounterCache = new NodeCache();
const susune = makeWAsocket({
  'logger': pino({
    'level': "silent"
  }),
  'printQRInTerminal': !pairingCode,
  'mobile': useMobile,
  'browser': ['Ubuntu', "Chrome", '20.0.04'],
  'auth': {
    'creds': state.creds,
    'keys': makeCacheableSignalKeyStore(state.keys, pino({
      'level': "fatal"
    }).child({
      'level': 'fatal'
    }))
  },
  'markOnlineOnConnect': true,
  'generateHighQualityLinkPreview': true,
  'getMessage': async (key) => {
    let remoteJid = jidNormalizedUser(key.remoteJid);
    let msg = await store.loadMessage(remoteJid, key.id);
    return msg ['message'] || '';
    },   
  'msgRetryCounterCache': msgRetryCounterCache,
  'defaultQueryTimeoutMs': undefined
});
store.bind(susune.ev);
if (pairingCode && !susune.authState.creds.registered) {
  if (useMobile) {
    throw new Error("Cannot use pairing code with mobile api");
  }
  let phoneNumber;
  if (!!phoneNumber) {
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(phoneNumber => phoneNumber.startsWith(phoneNumber))) {
      console.log(chalk.bgBlack(chalk.redBright("\n ʜᴏʟᴀ ǫᴜᴇʀɪᴅᴏ ᴜsᴜᴀʀɪᴏ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀᴍɪ ᴍᴇɴᴜ \n ᴇsᴄʀɪʙᴀ sᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ\n ǫᴜᴇ ᴅᴇsᴇᴀs ᴠɪɴᴄᴜʟᴀʀ ᴄᴏɴ sᴜ ᴘʀᴇғɪᴊᴏ ᴅᴇ ᴘᴀɪs.\n\n ⭐ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: +525649337420 : ")));
      process.exit(0x0);
    }
  } else {
    phoneNumber = await question(chalk.bgBlack(chalk.greenBright("\n ʜᴏʟᴀ ǫᴜᴇʀɪᴅᴏ ᴜsᴜᴀʀɪᴏ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀᴍɪ ᴍᴇɴᴜ \n ᴇsᴄʀɪʙᴀ sᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ\n ǫᴜᴇ ᴅᴇsᴇᴀs ᴠɪɴᴄᴜʟᴀʀ ᴄᴏɴ sᴜ ᴘʀᴇғɪᴊᴏ ᴅᴇ ᴘᴀɪs.\n\n ⭐ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: +525649337420 : ")));
    phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
    if (!Object.keys(PHONENUMBER_MCC).some(phoneNumber => phoneNumber.startsWith(phoneNumber))) {
      console.log(chalk.bgBlack(chalk.redBright("\n ʜᴏʟᴀ ǫᴜᴇʀɪᴅᴏ ᴜsᴜᴀʀɪᴏ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀᴍɪ ᴍᴇɴᴜ \n ᴇsᴄʀɪʙᴀ sᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ\n ǫᴜᴇ ᴅᴇsᴇᴀs ᴠɪɴᴄᴜʟᴀʀ ᴄᴏɴ sᴜ ᴘʀᴇғɪᴊᴏ ᴅᴇ ᴘᴀɪs.\n\n ⭐ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: +525649337420 : ")));
      phoneNumber = await question(chalk.bgBlack(chalk.greenBright("\n ʜᴏʟᴀ ǫᴜᴇʀɪᴅᴏ ᴜsᴜᴀʀɪᴏ, ʙɪᴇɴᴠᴇɴɪᴅᴏ ᴀᴍɪ ᴍᴇɴᴜ \n ᴇsᴄʀɪʙᴀ sᴜ ɴᴜᴍᴇʀᴏ ᴅᴇ ᴡʜᴀᴛsᴀᴘᴘ\n ǫᴜᴇ ᴅᴇsᴇᴀs ᴠɪɴᴄᴜʟᴀʀ ᴄᴏɴ sᴜ ᴘʀᴇғɪᴊᴏ ᴅᴇ ᴘᴀɪs.\n\n ⭐ 𝑬𝒋𝒆𝒎𝒑𝒍𝒐: +525649337420 : ")));
      phoneNumber = phoneNumber.replace(/[^0-9]/g, '');
      rl.close();
    }
  }
  setTimeout(async () => {
    let code = await susune.requestPairingCode(phoneNumber);
    code = code ["match"](/.{1,4}/g)?.["join"]('-') || code;
    console.log(chalk.black(chalk.bgGreen("\n  ɴᴜᴍᴇʀᴏ ᴄᴏʀʀᴇᴄᴛᴏ ✅\n\n  ᴇsᴛᴇ ᴇs ᴛᴜ ᴄᴏᴅɪɢᴏ ᴅᴇ ᴠɪɴᴄᴜʟᴀᴄɪᴏɴ : ")), chalk.black(chalk.white(code)));
  }, 3000);
}
//-------------Conexion Del Banner-------------//

susune.ev.on('connection.update', async (update) => {
	const {
		connection,
		lastDisconnect
	} = update
try{
		if (connection === 'close') {
			let reason = new Boom(lastDisconnect?.error)?.output.statusCode
			if (reason === DisconnectReason.badSession) {
				console.log(`Bad Session File, Please Delete Session and Scan Again`);
				startProo()
			} else if (reason === DisconnectReason.connectionClosed) {
				console.log("Connection closed, reconnecting....");
				startProo()
			} else if (reason === DisconnectReason.connectionLost) {
				console.log("ᴇʀʀᴏʀ, ᴇsᴛᴀᴍᴏs ʀᴇᴄᴏɴᴇᴄᴛᴀɴᴅᴏ ᴇʟ sᴇʀᴠɪᴅᴏʀ");
				startProo()
			} else if (reason === DisconnectReason.connectionReplaced) {
				console.log("𝑺𝒆 𝑹𝒆𝒆𝒎𝒑𝒍𝒂𝒛𝒐 𝑳𝒂 𝑪𝒐𝒏𝒆𝒙𝒊𝒐𝒏.\n𝑺𝒆 𝑨𝒃𝒓𝒊𝒐 𝑶𝒕𝒓𝒂 𝑵𝒖𝒆𝒗𝒂 𝑪𝒐𝒏𝒆𝒙𝒊𝒐𝒏.\n𝑷𝒐𝒓 𝑭𝒂𝒗𝒐𝒓 𝑪𝒊𝒆𝒓𝒓𝒆 𝑺𝒆𝒔𝒊𝒐𝒏 𝒚 𝑽𝒆𝒓𝒊𝒇𝒊𝒒𝒖𝒆 𝑬𝑳 𝑬𝒓𝒓𝒐𝒓.");
				startProo()
			} else if (reason === DisconnectReason.loggedOut) {
				console.log(`Device Logged Out, Please Delete Session and Scan Again.`);
				startProo()
			} else if (reason === DisconnectReason.restartRequired) {
				console.log("𝑷𝒐𝒓 𝑭𝒂𝒗𝒐𝒓 𝑬𝒔𝒑𝒆𝒓𝒆, 𝑴𝒆 𝑬𝒔𝒕𝒐𝒚 𝑽𝒊𝒏𝒄𝒖𝒍𝒂𝒏𝒅𝒐 𝑨𝒍 𝑾𝒉𝒂𝒕𝒔𝒂𝒑𝒑");
				startProo()
			} else if (reason === DisconnectReason.timedOut) {
				console.log("Connection TimedOut, Reconnecting...");
				startProo()
			} else susune.end(`Unknown DisconnectReason: ${reason}`)
		}
		if (update.connection == "connecting" || update.receivedPendingNotifications == "false") {
			console.log(color(`\n 𝑪𝒂𝒓𝒈𝒂𝒏𝒅𝒐 𝑩𝒂𝒔𝒆 𝑫𝒆 𝑫𝒂𝒕𝒐𝒔`, 'yellow'))
		}
		if (update.connection == "open" || update.receivedPendingNotifications == "true") {
			console.log(color(` `,'magenta'))
			await delay(1999)
            console.log(banner.string)
            console.log(color(`\n 🍎 𝗕𝗼𝘁 : BOT NAME\n`, 'green'))
            console.log(color(` 🍓 𝗖𝗿𝗲𝗮𝗱𝗼𝗿 : YOUR NAME\n`, 'red'))
            console.log(color(` 🔥 𝗖𝗼𝗻𝘁𝗮𝗰𝘁𝗼 : PHONE NUMBER\n`, 'yellow'))
            console.log(color(`▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁▁`, 'blue'))
	  
		}
	
} catch (err) {
	  console.log('Error in Connection.update '+err)
	  startProo();
	}
})
susune.ev.on('creds.update', saveCreds)
susune.ev.on("group-participants.update", async (anu) => {
  if (!welkom.includes(anu.id)) return;
  try {
    const datosgp = await susune.groupMetadata(anu.id);
    const isGroup = true;
    const groupDesc = isGroup ? datosgp.desc : '';
    const num = anu.participants[0];
    const numStr = num.split('@')[0];
    const thumbnail = fs.readFileSync('./archivos/fotos/welkom.jpeg');

    const contextInfo = {
      mentionedJid: [num],
      forwardingScore: 777,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363403886033615@newsletter",
        serverMessageId: 104,
        newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
      },
      externalAdReply: {
        title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋ𝐚sʜɪ 👑`,
        thumbnail,
        sourceUrl: 'https://wa.me/525649337420',
        mediaType: 2
      }
    };

    if (anu.action == 'add') {
      const fotito = fs.readFileSync('./archivos/fotos/welkom.jpeg');
      const bienvenido = `· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*🌸 ¡𝙷𝙾𝙻𝙰!,* @${numStr}\n\n*🌷 𝙱𝙸𝙴𝙽𝚅𝙴𝙽𝙸𝙳𝙰, 𝙼𝙰𝙽𝚃𝙴𝙽 𝚄𝙽 𝙰𝙼𝙱𝙸𝙴𝙽𝚃𝙴 𝚂𝙰𝙽𝙾 𝚈 𝚂𝙴𝙶𝚄𝚁𝙾, 𝙿𝙰𝚁𝙰 𝚀𝚄𝙴 𝙿𝚁𝙴𝙼𝙰𝙽𝙴𝚉𝙲𝙰𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.*`;
      await new Promise(resolve => setTimeout(resolve, 3000));
      await susune.sendMessage(anu.id, {
        image: fotito,
        caption: bienvenido,
        contextInfo
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      const audioWelcomePath = './archivos/audios/welkom.mp3';
      const sendWelcomeAudio = {
        audio: fs.readFileSync(audioWelcomePath),
        mimetype: 'audio/mp4',
        ptt: true
      };
      await susune.sendMessage(anu.id, sendWelcomeAudio);
    }

    if (anu.action == 'remove') {
      const fotito2 = fs.readFileSync('./archivos/fotos/bye.jpeg');
      const bienvenido2 = `· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*🍁 ᴀᴅɪᴏs* @${numStr}\n\n*🌸 𝙶𝚁𝙰𝙲𝙸𝙰𝚂, 𝙿𝙾𝚁 𝙷𝙰𝙱𝙴𝚁 𝙵𝙾𝚁𝙼𝙰𝙳𝙾 𝙿𝙰𝚁𝚃𝙴 𝙳𝙴 𝙽𝚄𝙴𝚂𝚃𝚁𝙰 𝙵𝙰𝙼𝙸𝙻𝙸𝙰, 𝚂𝙴𝙶𝚄𝙸𝚁𝙴𝙼𝙾𝚂 𝙼𝙴𝙹𝙾𝚁𝙰𝙽𝙳𝙾 𝙿𝙾𝙲𝙾 𝙰 𝙿𝙾𝙲𝙾.*`;
      await susune.sendMessage(anu.id, {
        image: fotito2,
        caption: bienvenido2,
        contextInfo
      });
      await new Promise(resolve => setTimeout(resolve, 3000));
      const audioByePath = './archivos/audios/bye.mp3';
      const sendByeAudio = {
        audio: fs.readFileSync(audioByePath),
        mimetype: 'audio/mp4',
        ptt: true
      };
      await susune.sendMessage(anu.id, sendByeAudio);
    }

  } catch (e) {
    console.log('Error: %s', color(e, "red"));
  }
});

susune.ev.on("groups.update", async (anu) => {
  try {
    for (const update of anu) {
      console.log("𝘼𝘾𝙏𝙐𝘼𝙻𝙸𝙕𝘼𝘾𝙄𝙾𝙉 𝘿𝙀𝙇 𝙂𝙍𝙐𝙋𝙊 𝘿𝙀𝙏𝙀𝘾𝙏𝘼𝘿𝘼..", update);
      if (!update.id) continue;

      // Buscar autor o usar una mención por default
      const grupo = await susune.groupMetadata(update.id);
      const participantes = grupo.participants || [];
      const fallbackAutor = participantes.find(p => p.admin === 'superadmin' || p.admin === 'admin')?.id || '0@s.whatsapp.net';
      const autor = update.author || fallbackAutor;
      const tag = `@${autor.split('@')[0]}`;

      const imagenes = [
        './archivos/fotos/marca.jpeg',
        './archivos/fotos/marca2.jpeg',
        './archivos/fotos/marca3.jpeg',
        './archivos/fotos/marca4.jpeg',
        './archivos/fotos/marca5.jpeg',
        './archivos/fotos/marca6.jpeg',
        './archivos/fotos/marca7.jpeg',
        './archivos/fotos/marca8.jpeg',
        './archivos/fotos/marca9.jpeg'
      ];
      const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

      const contextInfo = {
        mentionedJid: [autor],
        forwardingScore: 777,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: "120363403886033615@newsletter",
          serverMessageId: 104,
          newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
        },
        externalAdReply: {
          title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋ𝐚sʜɪ 👑`,
          thumbnail: fs.readFileSync(imagenRandom),
          sourceUrl: 'https://Wa.me/+525649337420',
          mediaType: 2
        }
      };

      if (update.announce === true) {
        await susune.sendMessage(update.id, {
          text: `🔒 𝑺𝒆 𝒄𝒆𝒓𝒓𝒐 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒂𝒉𝒐𝒓𝒂 𝒔𝒐𝒍𝒐 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓𝒆𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓.`,
          mentions: [autor],
          contextInfo
        });
      }

      if (update.announce === false) {
        await susune.sendMessage(update.id, {
          text: `🔓 𝑺𝒆 𝒂𝒃𝒓𝒊𝒐 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐, 𝒂𝒉𝒐𝒓𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒎𝒊𝒆𝒎𝒃𝒓𝒐𝒔 𝒑𝒖𝒆𝒅𝒆𝒏 𝒆𝒔𝒄𝒓𝒊𝒃𝒊𝒓.`,
          mentions: [autor],
          contextInfo
        });
      }

      if (update.subject) {
        await susune.sendMessage(update.id, {
          text: `📢 𝑬𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒔𝒆 𝒄𝒂𝒎𝒃𝒊𝒐 𝒂:\n*${update.subject}*`,
          mentions: [autor],
          contextInfo
        });
      }
    }
  } catch (e) {
    console.log('Error en groups.update:', e);
  }
});

susune.ev.on("group-participants.update", async (update) => {
  try {
    const { id, participants, action, author } = update;

    const imagenes = [
      './archivos/fotos/marca.jpeg',
      './archivos/fotos/marca2.jpeg',
      './archivos/fotos/marca3.jpeg',
      './archivos/fotos/marca4.jpeg',
      './archivos/fotos/marca5.jpeg',
      './archivos/fotos/marca6.jpeg',
      './archivos/fotos/marca7.jpeg',
      './archivos/fotos/marca8.jpeg',
      './archivos/fotos/marca9.jpeg'
    ];
    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

    const contextInfo = {
      mentionedJid: [],
      forwardingScore: 777,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363403886033615@newsletter",
        serverMessageId: 104,
        newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
      },
      externalAdReply: {
        title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋ𝐚sʜɪ 👑`,
        thumbnail: fs.readFileSync(imagenRandom),
        sourceUrl: 'https://Wa.me/+525649337420',
        mediaType: 2
      }
    };

    for (const participant of participants) {
      const userMention = `@${participant.split('@')[0]}`;
      const adminMention = `@${author.split('@')[0]}`;
      const mentions = [participant, author];
      contextInfo.mentionedJid = mentions;

      if (action === "promote") {
        await susune.sendMessage(id, {
          text: `🎉 𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 ${userMention} 𝒂𝒉𝒐𝒓𝒂 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒅𝒆 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐. 💗\n\n🌸 𝑨𝒄𝒄𝒊𝒐́𝒏 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒅𝒂 𝒑𝒐𝒓 𝒆𝒍 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓:  ${adminMention}`,
          mentions,
          contextInfo
        });
      } else if (action === "demote") {
        await susune.sendMessage(id, {
          text: `🌸 ¡𝑯𝒐𝒍𝒂!, ${userMention} 𝒚𝒂 𝒏𝒐 𝒆𝒓𝒆𝒔 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓 𝒅𝒆 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐. 💗\n\n🍒 𝑨𝒄𝒄𝒊𝒐́𝒏 𝒓𝒆𝒂𝒍𝒊𝒛𝒂𝒅𝒂 𝒑𝒐𝒓 𝒆𝒍 𝒂𝒅𝒎𝒊𝒏𝒊𝒔𝒕𝒓𝒂𝒅𝒐𝒓: ${adminMention}`,
          mentions,
          contextInfo
        });
      }
    }
  } catch (e) {
    console.log("Error en group-participants.update:", e);
  }
});



//Fin del codigo welkom//
susune.ev.on('messages.upsert', async m => {
 try {
 const info = m.messages[0]
 if (!info.message) return 
 if (info.key && info.key.remoteJid == "status@broadcast") return
 const altpdf = Object.keys(info.message)
 const type = altpdf[0] == "senderKeyDistributionMessage" ? altpdf[1] == "messageContextInfo" ? altpdf[2] : altpdf[1] : altpdf[0]
const content = JSON.stringify(info.message)
const from = info.key.remoteJid
 var body = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : (type == 'listResponseMessage') ? info.message.listResponseMessage.singleSelectReply.selectedRowId : (type == 'templateButtonReplyMessage') ? info.message.templateButtonReplyMessage.selectedId : ''

const budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

var pes = (type === 'conversation' && info.message.conversation) ? info.message.conversation : (type == 'imageMessage') && info.message.imageMessage.caption ? info.message.imageMessage.caption : (type == 'videoMessage') && info.message.videoMessage.caption ? info.message.videoMessage.caption : (type == 'extendedTextMessage') && info.message.extendedTextMessage.text ? info.message.extendedTextMessage.text : ''

//-----------------Constantes Is-----------------//
 const isGroup = info.key.remoteJid.endsWith('@g.us')
const sender = isGroup ? info.key.participant : info.key.remoteJid
const groupMetadata = isGroup ? await susune.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const nome = info.pushName ? info.pushName : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(' ')
const isCmd = body.startsWith(prefixo)
const comando = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null 
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? susune.sendMessage(from, {text: teks.trim(), mentions: memberr}) : susune.sendMessage(from, {text: teks.trim(), mentions: memberr})}
const quoted = info.quoted ? info.quoted : info
const mime = (quoted.info || quoted).Mimetype || ""
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))}
const pushname = info.pushName ? info.pushName : ''
const isBot = info.key.fromMe ? true : false
const isOwner = owner.includes(sender)
const isOwner2 = owner.includes(sender)
const BotNumber = susune.user.id.split(':')[0]+'@s.whatsapp.net'
const botNumber = susune.user.id.split(':')[0] + '@s.whatsapp.net';
const isGroupAdmins = groupAdmins.includes(sender) || false 
const isBotGroupAdmins = groupAdmins.includes(BotNumber) || false
const isUrl = (url) => { return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi')) }
const deviceType = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'IPhone' : 'WhatsApp web'
const options = { timeZone: 'America/Lima', hour12: false }
const data = new Date().toLocaleDateString('PE', { ...options, day: '2-digit', month: '2-digit', year: '2-digit' })
const hora = new Date().toLocaleTimeString('PE', options) 
 
//----------------Constantes Is-------------------//
const iswelkom = isGroup ? welkom.includes(from) : false
 const isAntiLink = isGroup ? antilink.includes(from) : false
const isantitoxic = isGroup ? antitoxic.includes(from) : false
const isautoreaccionPath = isGroup ? autoreaccionPath.includes(from) : false
const isregistros = isGroup ? registros.includes(from) : false
const isReg = registros.some(u => u.id === sender);
let tipoMembresia = comando === "darvip" ? "VIP" : "FREE";
const isPremium = registros.some(u => u.id === sender && u.premium === true);















const isarchivoUsuarios = isGroup ? archivoUsuarios.includes(from) : false
const isautosticker = isGroup ? autosticker.includes(from) : false
const loadWarnings = () => {
    // Cargar las advertencias desde un archivo o base de datos
    // Aquí se supone que las advertencias se guardan en un archivo JSON.
    try {
        const warnings = JSON.parse(fs.readFileSync('warnings.json', 'utf8'));
        return warnings;
    } catch (error) {
        // Si no se puede cargar el archivo, retornar un objeto vacío con la estructura básica
        return { usuarios: {} };
    }
};

const saveWarnings = (warnings) => {
    // Guardar las advertencias en un archivo o base de datos
    // Aquí se guarda como un archivo JSON.
    try {
        fs.writeFileSync('warnings.json', JSON.stringify(warnings, null, 2), 'utf8');
    } catch (error) {
        console.error('Error al guardar las advertencias:', error);
    }
};
//----Constantes Enviar Textos-------//
const repldy = (texto) => {
susune.sendMessage(from, {
text: texto
});
}

const enviar3 = async (texto, from, sender) => {
  const senderTag = `@${sender.split("@")[0]}`;
  const imagenes = [
    './archivos/fotos/marca.jpeg',
    './archivos/fotos/marca2.jpeg',
    './archivos/fotos/marca3.jpeg',
    './archivos/fotos/marca4.jpeg',
    './archivos/fotos/marca5.jpeg',
    './archivos/fotos/marca6.jpeg',
    './archivos/fotos/marca7.jpeg',
    './archivos/fotos/marca8.jpeg',
    './archivos/fotos/marca9.jpeg'
  ];
  const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

  await susune.sendMessage(from, {
    text: texto,
    mentions: [sender],
    contextInfo: {
      mentionedJid: [sender],
      forwardingScore: 777,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363403886033615@newsletter",
        serverMessageId: 104,
        newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
      },
      externalAdReply: {
        title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
        body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
        thumbnail: fs.readFileSync(imagenRandom),
        sourceUrl: "https://Wa.me/+525649337420",
        mediaType: 2
      }
    }
  });
};

const reply = (texto) => {
    // Lista de imágenes disponibles
    const imagenes = [
        './archivos/fotos/marca.jpeg',
        './archivos/fotos/marca2.jpeg',
        './archivos/fotos/marca3.jpeg',
        './archivos/fotos/marca4.jpeg',
        './archivos/fotos/marca5.jpeg',
        './archivos/fotos/marca6.jpeg',
        './archivos/fotos/marca7.jpeg',
        './archivos/fotos/marca8.jpeg',
        './archivos/fotos/marca9.jpeg'
    ];

    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

    susune.sendMessage(from, {
        text: texto,
        contextInfo: {
            forwardingScore: 777,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363403886033615@newsletter",
                serverMessageId: 104,
                newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
            },
            externalAdReply: {
                title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋ𝐚sʜɪ 👑`,
                thumbnail: fs.readFileSync(imagenRandom),
                sourceUrl: "https://Wa.me/+525649337420",
                mediaType: 2
            }
        }
    });
};

const enviar = (texto) => {
    // Lista de imágenes disponibles
    const imagenes = [
        './archivos/fotos/marca.jpeg',
        './archivos/fotos/marca2.jpeg',
        './archivos/fotos/marca3.jpeg',
        './archivos/fotos/marca4.jpeg',
        './archivos/fotos/marca5.jpeg',
        './archivos/fotos/marca6.jpeg',
        './archivos/fotos/marca7.jpeg',
        './archivos/fotos/marca8.jpeg',
        './archivos/fotos/marca9.jpeg'
    ];

    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

    susune.sendMessage(from, {
        text: texto,
        contextInfo: {
            forwardingScore: 777,
            isForwarded: true,
            forwardedNewsletterMessageInfo: {
                newsletterJid: "120363403886033615@newsletter",
                serverMessageId: 104,
                newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
            },
            externalAdReply: {
                title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋ𝐚sʜɪ 👑`,
                thumbnail: fs.readFileSync(imagenRandom),
                sourceUrl: "https://Wa.me/+525649337420",
                mediaType: 2
            }
        }
    });
};

const enviars = (texto) => {
susune.sendMessage(from, {
text: texto,
contextInfo: {
externalAdReply: {
title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ᴏsʜɪɴᴏ ʙᴏᴛ 💕`,
          body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
thumbnail: fs.readFileSync('./archivos/fotos/marca.jpeg'), // Imagen cuadrada
sourceUrl: "https://Wa.me/+525649337420", // URL que abrirá al tocar el mensaje
mediaType: 2, // Indica que el medio es una imagen
}
}
});
};

const envtiar = async (texto) => { const frasesCargando = [ "*𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴......*", "*𝙿𝚁𝙾𝙲𝙴𝚂𝙰𝙽𝙳𝙾 𝚂𝙸𝚂𝚃𝙴𝙼𝙰...*", "*𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽...*", "*𝙿𝚁𝙾𝙲𝙴𝚂𝙰𝙽𝙳𝙾....*", "*𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙸𝙲𝙸𝚃𝚄𝙳.....*" ];

const frasesReflexion = [
    "*𝙰 𝙻𝙰𝚂 𝙽𝙸𝙽̃𝙰𝚂 𝙱𝙾𝙽𝙸𝚃𝙰𝚂 𝙷𝙰𝚈 𝚀𝚄𝙴 𝙴𝙼𝙱𝙰𝚁𝙰𝚉𝙰𝚁𝙻𝙰𝚂 😍*",
    "*𝚂𝙸 𝙴𝙻𝙻𝙰 𝙴𝚂 𝙿𝚁𝙸𝙴𝚃𝙰 𝚈 𝙲𝙷𝙰𝙿𝙰𝚁𝚁𝙰 𝙻𝙾 𝙲𝙷𝚄𝙿𝙰 𝚁𝙸𝙲𝙾 🤤*",
    "*𝚄𝙽𝙰 𝙰𝙼𝙸𝙶𝙰 𝚀𝚄𝙴 𝙴𝙽𝚂𝙴𝙽̃𝙰 𝚃𝙴𝚃𝙰𝚂 𝚅𝙰𝙻𝙴 𝙾𝚁𝙾 🥰*",
    "*𝙻𝙰 𝙻𝙴𝙲𝙷𝙴 𝙴𝚂 𝙱𝚄𝙴𝙽𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙿𝙸𝙴𝙻, ¿𝙰 𝙻𝙰 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝙿𝚄𝙴𝚂𝚃𝙰, 𝙴𝙽 𝙻𝙰 𝙱𝙾𝙲𝙰 𝙾 𝙴𝙽 𝚃𝙰𝚉𝙰? 🤭🥛*",
    "*𝙼𝙴 𝙰𝙽𝙲𝙰𝙽𝚃𝙰 𝙲𝙾𝙼𝙾 𝙲𝙾𝙽 𝚄𝙽𝙰 𝙼𝙸𝚁𝙰𝙳𝙰 𝙿𝚄𝙴𝙳𝙴𝚂 𝙳𝙴𝙲𝙸𝚁𝙼𝙴 𝚃𝙾𝙳𝙾 𝙻𝙾 𝚀𝚄𝙴 𝚃𝚄 𝙱𝙾𝙲𝙰 𝙳𝙴𝚂𝙴𝙰 𝙷𝙰𝙲𝙴𝚁𝙼𝙴... 🔥👀*",
    "*𝙴𝚂𝚃𝙾𝚈 𝙰 𝚄𝙽 𝙱𝙴𝚂𝙾 𝙳𝙴 𝚂𝙰𝙲𝙰𝚁𝚃𝙴 𝙻𝙰𝚂 𝙶𝙰𝙽𝙰𝚂 𝙰 𝙶𝙴𝙼𝙸𝙳𝙾𝚂 😏🔥*",
    "*𝙲𝚄𝙰𝙽𝙳𝙾 𝙼𝙴 𝚃𝙴 𝙰𝙱𝚁𝙴𝚂 𝙴𝙽 𝙳𝙾𝚂, 𝙴𝙻 𝚄́𝙽𝙸𝙲𝙾 𝙿𝙴𝙽𝚂𝙰𝙼𝙸𝙴𝙽𝚃𝙾 𝚀𝚄𝙴 𝙼𝙴 𝙻𝙻𝙴𝙶𝙰 𝙴𝚂 𝙲𝚄𝙰́𝙽𝙳𝙾 𝙿𝙾𝙳𝚁𝙴́ 𝙴𝙽𝚃𝚁𝙰𝚁 😈💦*",
    "*𝚄𝙽𝙰 𝙲𝙰𝙼𝙰 𝙲𝙰𝙻𝙸𝙴𝙽𝚃𝙴, 𝚄𝙽𝙰 𝙼𝚄𝙹𝙴𝚁 𝙼𝙾𝙹𝙰𝙳𝙰 𝚈 𝙴𝙻 𝙼𝙴𝙳𝙸𝙾 𝙳𝙴 𝙻𝙰 𝙽𝙾𝙲𝙷𝙴 𝙲𝙾𝙶𝙴𝙼𝙾𝚂 𝙲𝙾𝙼𝙾 𝚂𝙸 𝙽𝙾 𝙷𝚄𝙱𝙸𝙴𝚁𝙰 𝚄𝙽 𝙼𝙰𝙽̃𝙰𝙽𝙰... 😈🔥*",
    "*𝙴𝙻 𝙳𝙴𝚂𝙴𝙾 𝙼𝙰𝚂 𝙿𝚄𝚁𝙾 𝙴𝚂 𝙴𝙻 𝚀𝚄𝙴 𝙲𝙾𝚁𝚁𝙴 𝙿𝙾𝚁 𝚃𝚄 𝙲𝚄𝙴𝚁𝙿𝙾 𝚈 𝙳𝙴𝙹𝙰 𝚃𝚄 𝙿𝙸𝙴𝙻 𝙷𝙸𝙴𝚁𝚅𝙸𝙴𝙽𝙳𝙾 🔥💦*",
    "*𝙲𝙰𝙳𝙰 𝙰𝙼𝙰𝙽𝙴𝙲𝙴𝚁 𝙼𝙸𝚂 𝙳𝙴𝚂𝙴𝙾𝚂 𝙲𝚁𝙴𝙲𝙴𝙽 𝙿𝙾𝚁 𝚃𝙸... 😈🔥*"
];

const mensajeCargando = frasesCargando[Math.floor(Math.random() * frasesCargando.length)];
const mensajeReflexion = frasesReflexion[Math.floor(Math.random() * frasesReflexion.length)];

let mensajeEnviado = await susune.sendMessage(from, {
    text: `${mensajeCargando}\n\n${mensajeReflexion}`,
    contextInfo: {
        externalAdReply: {
            title: "𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ᴏsʜɪɴᴏ ʙ𝐨𝐭 💕",
            body: "𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑",
            mediaType: 1,
            sourceUrl: "https://Wa.me/+525649337420",
            thumbnail: fs.readFileSync('./archivos/fotos/marca.jpeg')
        }
    }
});

await new Promise(resolve => setTimeout(resolve, 7000));

// Intentamos mantener la imagen al editar usando el mismo contextInfo
await susune.sendMessage(from, {
    edit: mensajeEnviado.key, 
    text: texto,
    contextInfo: mensajeEnviado.message?.contextInfo || {}
});

};





 const chatId = m.chat || m.key?.remoteJid;
//----Constantes Enviar Textos----------//
 const text = args.join(' ')
 const registrarse = (sender) => {
 return Object.keys(registros).some((id) => registros[id].id === sender);
 }
 const isVerification = await registrarse(sender)
 const loteriaJugadores = [];
 const autoReactionEmojis = [
    "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", 
    "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", 
    "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", 
    "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", 
    "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", 
    "🤬", "🤯", "😳", "🥵", "🥶", "😱", "😨", "😰", "😥", "😓", 
    "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", 
    "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😵", 
    "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠", 
    "😈", "👿", "👹", "👺", "🤡", "💩", "👻", "💀", "☠️", "👽", 
    "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", 
    "😿", "😾", "🙈", "🙉", "🙊", "💋", "💌", "💘", "💝", "💖", 
    "💗", "💓", "💞", "💕", "💟", "❣️", "💔", "❤️", "🧡", "💛", 
    "💚", "💙", "💜", "🤎", "🖤", "🤍", "💯", "💢", "💥", "💫", 
    "💦", "💨", "🕳️", "💣", "💬", "👁️‍🗨️", "🗨️", "🗯️", "💭", "💤", 
    "👋", "🤚", "🖐️", "✋", "🖖", "👌", "🤏", "✌️", "🤞", "🤟", 
    "🤘", "🤙", "👈", "👉", "👆", "🖕", "👇", "☝️", "👍", "👎", 
    "✊", "👊", "🤛", "🤜", "👏", "🙌", "👐", "🤲", "🤝", "🙏", 
    "✍️", "💅", "🤳", "💪", "🦾", "🦿", "🦵", "🦶", "👂", "🦻", 
    "👃", "🧠", "🦷", "🦴", "👀", "👁️", "👅", "👄", "👶", "🧒", 
    "👦", "👧", "🧑", "👨", "👩", "🧔", "👱", "🧓", "👴", "👵", 
    "🙍", "🙎", "🙅", "🙆", "💁", "🙋", "🧏", "🙇", "🤦", "🤷", 
    "👮", "🕵️", "💂", "🥷", "👷", "🤴", "👸", "👳", "👲", "🧕", 
    "🤵", "👰", "🤰", "🤱", "👼", "🎅", "🤶", "🦸", "🦹", "🧙", 
    "🧚", "🧛", "🧜", "🧝", "🧞", "🧟", "💆", "💇", "🚶", "🏃", 
    "💃", "🕺", "🕴️", "👯", "🧖", "🧗", "🤺", "🏇", "⛷️", "🏂", 
    "🏌️", "🏄", "🚣", "🏊", "⛹️", "🏋️", "🚴", "🚵", "🤸", "🤼", 
    "🤽", "🤾", "🤹", "🧘", "🛀", "🛌", "👭", "👫", "👬", "💏", 
    "💑", "👪", "👨‍👩‍👦", "👨‍👩‍👧", "👨‍👩‍👧‍👦", "👨‍👩‍👦‍👦", "👨‍👩‍👧‍👧", "👩‍👩‍👦", "👩‍👩‍👧", 
    "👩‍👩‍👧‍👦", "👩‍👩‍👦‍👦", "👩‍👩‍👧‍👧", "👨‍👨‍👦", "👨‍👨‍👧", "👨‍👨‍👧‍👦", "👨‍👨‍👦‍👦", "👨‍👨‍👧‍👧", "👩‍👦", "👩‍👧", 
    "👩‍👧‍👦", "👩‍👦‍👦", "👩‍👧‍👧", "👨‍👦", "👨‍👧", "👨‍👧‍👦", "👨‍👦‍👦", "👨‍👧‍👧", "🧶", "🧵", 
    "🧥", "🥼", "🦺", "👚", "👕", "👖", "🩲", "🩳", "👔", "👗", 
    "👙", "👘", "🥻", "🩱", "🩴", "👠", "👡", "👢", "👞", "👟", 
    "🥾", "🥿", "🧦", "🧤", "🧣", "🎩", "🧢", "👒", "🎓", "⛑️", 
    "👑", "💍", "👝", "👛", "👜", "💼", "🎒", "🧳", "👓", "🕶️", 
    "🥽", "🥼", "🌂", "🧵", "🧶", "🪡", "🪢", "🧥", "🥼", "🦺", 
    "👚", "👕", "👖", "🩲", "🩳", "👔", "👗", "👙", "👘", "🥻", 
    "🩱", "🩴", "👠", "👡", "👢", "👞", "👟", "🥾", "🥿", "🧦", 
    "🧤", "🧣", "🎩", "🧢", "👒", "🎓", "⛑️", "👑", "💍", "👝", 
    "👛", "👜", "💼", "🎒", "🧳", "👓", "🕶️", "🥽", "🥼", "🌂", 
    "🐶", "🐱", "🐭", "🐹", "🐰", "🦊", "🐻", "🐼", "🐨", "🐯", 
    "🦁", "🐮", "🐷", "🐽", "🐸", "🐵", "🙈", "🙉", "🙊", "🐒", 
    "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", 
    "🐺", "🐗", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", 
    "🦟", "🦗", "🕷️", "🕸️", "🦂", "🐢", "🐍", "🦎", "🦖", "🦕", 
    "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", 
    "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦧", "🦣", "🐘", 
    "🦛", "🦏", "🐪", "🐫", "🦒", "🦘", "🦬", "🐃", "🐂", "🐄", 
    "🐎", "🐖", "🐏", "🐑", "🦙", "🐐", "🦌", "🐕", "🐩", "🦮", 
    "🐕‍🦺", "🐈", "🐈‍⬛", "🪶", "🐓", "🦃", "🦚", "🦜", "🦢", "🦩", 
    "🕊️", "🐇", "🦝", "🦨", "🦡", "🦫", "🦦", "🦥", "🐁", "🐀", 
    "🐿️", "🦔", "🌵", "🎄", "🌲", "🌳", "🌴", "🪵", "🌱", "🌿", 
    "☘️", "🍀", "🎍", "🪴", "🎋", "🍃", "🍂", "🍁", "🍄", "🐚", 
    "🪨", "🌾", "💐", "🌷", "🌹", "🥀", "🌺", "🌸", "🌼", "🌻", 
    "🌞", "🌝", "🌛", "🌜", "🌚", "🌕", "🌖", "🌗", "🌘", "🌑", 
    "🌒", "🌓", "🌔", "🌙", "🌎", "🌍", "🌏", "🪐", "💫", "⭐", 
    "🌟", "✨", "⚡", "☄️", "💥", "🔥", "🌪️", "🌈", "☀️", "🌤️", 
    "⛅", "🌥️", "☁️", "🌦️", "🌧️", "⛈️", "🌩️", "🌨️", "❄️", "🌬️", 
    "💨", "💧", "💦", "☔", "☂️", "🌊", "🌫️", "🍏", "🍎", "🍐", 
    "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🫐", "🍈", "🍒", "🍑", 
    "🥭", "🍍", "🥥", "🥝", "🍅", "🍆", "🥑", "🥦", "🥬", "🥒", 
    "🌶️", "🫑", "🌽", "🥕", "🫒", "🧄", "🧅", "🥔", "🍠", "🫘", 
    "🥐", "🥯", "🍞", "🥖", "🥨", "🧀", "🥚", "🍳", "🧈", "🥞", 
    "🧇", "🥓", "🥩", "🍗", "🍖", "🦴", "🌭", "🍔", "🍟", "🍕", 
    "🫓", "🥪", "🥙", "🧆", "🌮", "🌯", "🫔", "🥗", "🥘", "🫕", 
    "🥫", "🍝", "🍜", "🍲", "🍛", "🍣", "🍱", "🥟", "🦪", "🍤", 
    "🍙", "🍚", "🍘", "🍥", "🥠", "🥮", "🍢", "🍡", "🍧", "🍨", 
    "🍦", "🥧", "🧁", "🍰", "🎂", "🍮", "🍭", "🍬", "🍫", "🍿", 
    "🍩", "🍪", "🌰", "🥜", "🫘", "🍯", "🥛", "🍼", "🫖", "☕", 
    "🍵", "🧃", "🥤", "🍶", "🍺", "🍻", "🥂", "🍷", "🥃", "🍸", 
    "🍹", "🧉", "🍾", "🧊", "🥄", "🍴", "🍽️", "🥣", "🥡", "🥢", 
    "🧂", "⚽", "🏀", "🏈", "⚾", "🥎", "🎾", "🏐", "🏉", "🥏", 
    "🎱", "🪀", "🏓", "🏸", "🏒", "🏑", "🥍", "🏏", "🪃", "🥅", 
    "⛳", "🪁", "🏹", "🎣", "🤿", "🥊", "🥋", "🎽", "🛹", "🛼", 
    "🛷", "⛸️", "🥌", "🎿", "🏂", "🪂", "🏋️", "🤼", "🤸", "⛹️", 
    "🤺", "🤾", "🏌️", "🏇", "🧘", "🏄", "🏊", "🤽", "🚣", "🧗", 
    "🚵", "🚴", "🏆", "🥇", "🥈", "🥉", "🏅", "🎖️", "🏵️", "🎗️", 
    "🎫", "🎟️", "🎪", "🤹", "🎭", "🩰", "🎨", "🎤", "🎧", "🎼", 
    "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻", "🎲", "♟️", "🎯", 
    "🎳", "🎮", "🎰", "🧩", "🚗", "🚕", "🚙", "🚌", "🚎", "🏎️", 
    "🚓", "🚑", "🚒", "🚐", "🚚", "🚛", "🚜", "🦯", "🦽", "🦼", 
    "🛴", "🚲", "🛵", "🏍️", "🛺", "🚨", "🚔", "🚍", "🚘", "🚖", 
    "🚡", "🚠", "🚟", "🚃", "🚋", "🚞", "🚝", "🚄", "🚅", "🚈", 
    "🚂", "🚆", "🚇", "🚊", "🚉", "✈️", "🛫", "🛬", "🛩️", "💺", 
    "🛰️", "🚀", "🛸", "🚁", "🛶", "⛵", "🛥️", "🚤", "🛳️", "⛴️", 
    "🚢", "⚓", "🛟", "🚧", "⛽", "🚏", "🚦", "🚥", "🗺️", "🗿", 
    "🗽", "🗼", "🏰", "🏯", "🏟️", "🎡", "🎢", "🎠", "⛲", "⛱️"]
//--------------Constantes Iff--------------------//
 const isImage = type == "imageMessage"
const isVideo = type == "videoMessage"
const isAudio = type == "audioMessage"
const isSticker = type == "stickerMessage"
const isContact = type == "contactMessage"
const isLocation = type == "locationMessage"
const isProduct = type == "productMessage"
const isMedia = (type === "imageMessage" || type === "videoMessage" || type === "audioMessage") 
typeMessage = body.substr(0, 50).replace(/\n/g, "")
if (isImage) typeMessage = "Image"
else if (isVideo) typeMessage = "Video"
else if (isAudio) typeMessage = "Audio"
else if (isSticker) typeMessage = "Sticker"
else if (isContact) typeMessage = "Contact"
else if (isLocation) typeMessage = "Location"
else if (isProduct) typeMessage = "Product"
const isQuotedMsg = type === "extendedTextMessage" && content.includes("textMessage")
const isQuotedImage = type === "extendedTextMessage" && content.includes("imageMessage")
const isQuotedVideo = type === "extendedTextMessage" && content.includes("videoMessage")
const isQuotedDocument = type === "extendedTextMessage" && content.includes("documentMessage")
const isQuotedAudio = type === "extendedTextMessage" && content.includes("audioMessage")
const isQuotedSticker = type === "extendedTextMessage" && content.includes("stickerMessage")
const isQuotedContact = type === "extendedTextMessage" && content.includes("contactMessage")
const isQuotedLocation = type === "extendedTextMessage" && content.includes("locationMessage")
const isQuotedProduct = type === "extendedTextMessage" && content.includes("productMessage")

const getRandom = (ext) => {
	return `${Math.floor(Math.random() * 10000)}${ext}`;
};

const getExtension = async (type) => {
return await mimetype.extension(type)
}
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]) }
return buffer}
 
 
//-------Respuestas Automaticas-----------//
 const respuesta = {
 espere : "Espere un momento porfavor",
 dono : " este comando es solo usado por mi creador",
 premiun: "compre la version premiun",
 grupos : "este comando es solo para grupos",
 privado : " 🕵‍♂️*Este comando solo se puede usar en el chat privado*",
 error : " ⚠️ *Lo siento ocurrio un error, intentelo de nuevo Porfavor*",
 textito : "😤 *Digita un texto Porfavor* ",
 }

//--------Mensajes De La Consola-------------//
 if (isGroup) {
if (isGroup && isGroup) 
console.log(`
${color(`┏━━━┅┅┄┄⟞⟦GROUP NAME⟧⟝┄┄┉┉━━┓`, 'green')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Número:', 'blue')} ${color(sender.split('@')[0], 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Nombre:', 'blue')} ${color(pushname, 'magenta')}
${color('┃', 'green')} 
${color('┃', 'green')} ${color('Mensaje:','blue'),color(budy,'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Horário:', 'blue')} ${color(hora, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('comando:', 'blue')} ${color(comando, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Palabras:', 'blue')} ${color(budy.length, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Grupo:', 'blue')} ${color(groupName, 'red')}
${color('┃', 'green')}
${color('┗━━┅┅┄┄⟞⟦BOT NAME⟧⟝┄┄┉┉━┛', 'green')}`)
 if (!isGroup && isGroup) console.log(`
${color(`┏━━━┅┅┄┄⟞⟦GROUP NAME⟧⟝┄┄┉┉━━┓`, 'green')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Número:', 'blue')} ${color(sender.split('@')[0], 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Nombre:', 'blue')} ${color(pushname, 'magenta')}
${color('┃', 'green')} 
${color('┃', 'green')} ${color('Mensaje:','blue'),color(budy,'red')}
${color('┃', 'green')}
${color('┃', 'green')}${color('Horário:', 'blue')} ${color(hora, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('comando:', 'blue')} ${color(comando, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Palabras:', 'blue')} ${color(budy.length, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Grupo:', 'blue')} ${color(groupName, 'red')}
${color('┃', 'green')}
${color('┗━━┅┅┄┄⟞⟦BOT NAME⟧⟝┄┄┉┉━┛', 'green')}`)
}


 if (isCmd) {
if (isCmd && isCmd) 
console.log(`
${color(`┏━━━┅┅┄┄⟞⟦PRIVATE CHAT⟧⟝┄┄┉┉━━┓`, 'green')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Número:', 'blue')} ${color(sender.split('@')[0], 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Nombre:', 'blue')} ${color(pushname, 'magenta')}
${color('┃', 'green')} 
${color('┃', 'green')} ${color('Mensaje:','blue'),color(budy,'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Horário:', 'blue')} ${color(hora, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('comando:', 'blue')} ${color(comando, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Palabras:', 'blue')} ${color(budy.length, 'red')}
${color('┃', 'green')} 
${color('┗━━┅┅┄┄⟞⟦BOT NAME⟧⟝┄┄┉┉━┛', 'green')}`)
 if (!isCmd && isCmd) console.log(`
${color(`┏━━━┅┅┄┄⟞⟦PRIVATE CHAT⟧⟝┄┄┉┉━━┓`, 'green')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Número:', 'blue')} ${color(sender.split('@')[0], 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Nombre:', 'blue')} ${color(pushname, 'magenta')}
${color('┃', 'green')} 
${color('┃', 'green')} ${color('Mensaje:','blue'),color(budy,'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Horário:', 'blue')} ${color(hora, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('comando:', 'blue')} ${color(comando, 'red')}
${color('┃', 'green')} 
${color('┃', 'green')}${color('Palabras:', 'blue')} ${color(budy.length, 'red')}
${color('┃', 'green')} 
${color('┗━━┅┅┄┄⟞⟦BOT NAME⟧⟝┄┄┉┉━┛', 'green')}`)
}





function guardarRegistros() {
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}

function obtenerRango(nivel) {
    if (nivel >= 5000) return "Legenda 👑";
    if (nivel >= 1200) return "Maestro 🟥 Elite";
    if (nivel >= 700) return "Elite 🟩";
    if (nivel >= 400) return "Diamante 🟪";
    if (nivel >= 340) return "Platino 🟦";
    if (nivel >= 270) return "Oró 🟨";
    if (nivel >= 180) return "Plata ⬜";
    if (nivel >= 130) return "Aceró 🔘";
    if (nivel >= 100) return "Bronce 🟫";
    if (nivel >= 60) return "Cabo 🪖";
    if (nivel >= 20) return "Aprendiz ⛑️";
    if (nivel >= 5) return "Novato 🎩";
    return "Plebeyó 🧢"; // Nivel 1 a 4
}

function añadirXP(sender, xpGanado, from) {
    let user = registros.find(u => u.id === sender);
    if (!user) return;

    user.xp += xpGanado;

    let necesario = user.nivel * 1000;
    if (user.xp >= necesario) {
        user.nivel++;
        user.xp = 0;

        // Actualizar rango
        user.rango = obtenerRango(user.nivel);

        enviar3(`🌸 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]}.\n\n🎊 ¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔! 𝒉𝒂𝒔 𝒔𝒖𝒃𝒊𝒅𝒐 𝒅𝒆 𝒏𝒊𝒗𝒆𝒍 𝒑𝒐𝒓 𝒔𝒆𝒓 𝒖𝒏𝒂 𝒑𝒆𝒓𝒔𝒐𝒏𝒂 𝒎𝒖𝒚 𝒂𝒄𝒕𝒊𝒗𝒂.\n\n𝐍𝐢𝐯𝐞𝐥: *${user.nivel}*\n𝐑𝐚𝐧𝐠𝐨: *${user.rango}*`, from, sender)
    }

    guardarRegistros();
}
if (m.messages && m.messages[0] && !isCmd && isGroup) {
    let sender = m.messages[0].key.participant || m.messages[0].key.remoteJid;
    let from = m.messages[0].key.remoteJid;
    añadirXP(sender, 10, from); // Cada mensaje da 10 XP
}



if (fs.existsSync('./archivos/json/ultimomensaje.json')) {
    ultimosMensajes = JSON.parse(fs.readFileSync('./archivos/json/ultimomensaje.json'));
}

// Cada vez que alguien mande un mensaje
if (info.key && info.key.participant && isGroup) {
    let user = info.key.participant;
    ultimosMensajes[user] = Date.now();
    fs.writeFileSync('./archivos/json/ultimomensaje.json', JSON.stringify(ultimosMensajes, null, 2));
}


if (
  info.message?.extendedTextMessage?.contextInfo?.forwardedNewsletterMessageInfo
) {
  const canalInfo = info.message.extendedTextMessage.contextInfo.forwardedNewsletterMessageInfo;
  fs.writeFileSync('./archivos/mensaje_canal.json', JSON.stringify(canalInfo, null, 2));
  
}


susune.ev.on('messages.upsert', async (msg) => {
  try {
    const m = msg.messages[0];
    if (!m.message || m.key.fromMe) return;

    m.sender = m.key.participant || m.key.remoteJid;
    m.chat = m.key.remoteJid;

    await checkAntiprivado(m, susune);
    

  } catch (e) {
    console.log(e);
  }
});

async function checkAntiprivado(m, susune) {
  try {
    const data = JSON.parse(fs.readFileSync('./archivos/json/antiprivado.json'));
    const isPrivate = m.chat.endsWith('@s.whatsapp.net');
    const isOwner = m.sender === ownerNumber;
    const isOwner2 = m.sender === ownerNumber2;

    if (data.activo && isPrivate && !m.fromMe && !isOwner && !isOwner2) {
      await susune.sendMessage(m.chat, {
        text: `💗 𝐇𝐚𝐬 𝐬𝐢𝐝𝐨 𝐛𝐥𝐨𝐪𝐮𝐞𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫𝐦𝐞 𝐚𝐥 𝐩𝐫𝐢𝐯𝐚𝐝𝐨 𝐬𝐢𝐧 𝐩𝐞𝐫𝐦𝐢𝐬𝐨, 𝐒𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐪𝐮𝐞 𝐭𝐞 𝐝𝐞𝐬𝐛𝐥𝐨𝐪𝐮𝐞𝐞 𝐞𝐬𝐜𝐫𝐢𝐛𝐞𝐥𝐞 𝐚 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫: +52 564 933 7420\n\n🌸 𝐄𝐬𝐭𝐚 𝐧𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐜𝐢𝐨𝐧 𝐬𝐞𝐫𝐚 𝐞𝐧𝐯𝐢𝐚𝐝𝐚 𝐚 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫....`
      });

      await susune.updateBlockStatus(m.sender, 'block');

      await susune.sendMessage(ownerNumber, {
        text: `*ALERTA DE PRIVADO*\n\nUn usuario escribió al bot:\n*Número:* wa.me/${m.sender.split('@')[0]}\n*El bot lo bloqueó automáticamente.*`
      });
    }
  } catch (e) {
    console.error('Error en antiprivado:', e);
  }
}







// Verificar que el mensaje es de un grupo y que ese grupo tiene activada la autoreacción
if (info.key.remoteJid.endsWith('@g.us') && autoreaccionGrupos.includes(info.key.remoteJid) && !info.key.fromMe) {
    try {
        // Selecciona un emoji aleatorio de la lista
        let randomEmoji = autoReactionEmojis[Math.floor(Math.random() * autoReactionEmojis.length)];
        // Envía la reacción; asegúrate de que tu versión de Baileys soporte el método "react"
        await susune.sendMessage(info.key.remoteJid, { 
            react: { text: randomEmoji, key: info.key }
        });
    } catch (error) {
        console.error("Error enviando reacción:", error);
    }
}


if (isGroup && budy.includes('@')) {
    if (info.key.fromMe) return; // Evita que el bot responda a sus propios mensajes

    let antifake = JSON.parse(fs.readFileSync('./archivos/json/antifake.json'));
    const mencionados = budy.match(/@(\d+)/g) || [];

    for (let mencion of mencionados) {
        let userId = mencion.replace('@', '') + "@s.whatsapp.net";
        
        // Identificar quién mencionó al usuario AFK
        let usuarioQueMenciono = sender; // El que envió el mensaje original

        // Verificar si el usuario mencionado está en la lista de AFK (antifake)
        let usuarioAFK = antifake.find(u => u.id === userId);

        if (usuarioAFK) { // Solo mandar alerta si está AFK
            let motivo = usuarioAFK.motivo || "No especificado";

            // Obtener el nombre REAL del usuario mencionado (si está en el grupo)
            let miembro = groupMembers.find(member => member.id === userId);
            let nombreReal = miembro?.notify || miembro?.subject || "";

            await susune.sendMessage(from, { 
                text: `🚫 *HEY @${usuarioQueMenciono.split('@')[0]}, no molestes a @${userId.split('@')[0]} (${nombreReal})* 🚫\n📌 *Motivo:* ${motivo}\n⌛ *Espera a que esté activo.*`,
                mentions: [usuarioQueMenciono, userId] 
            });
        }
    }
}

if (isGroup) {
    let antifake = JSON.parse(fs.readFileSync('./archivos/json/antifake.json'));
    const index = antifake.findIndex(user => user.id === sender);

    if (index !== -1) {
        // Obtener el nombre REAL del usuario que volvió a estar activo
        let miembro = groupMembers.find(member => member.id === sender);
        let nombreReal = miembro?.notify || miembro?.subject || "";

        antifake.splice(index, 1);
        fs.writeFileSync('./archivos/json/antifake.json', JSON.stringify(antifake, null, 2));

        await susune.sendMessage(from, { 
            text: `✅ *@${sender.split('@')[0]} (${nombreReal})* ha vuelto a estar activo.`, 
            mentions: [sender] 
        });
    }
}



if (
  ahorcadoActivo[from] &&
  !isCmd &&
  /^[a-zA-Z]+$/.test(body.trim()) &&
  ahorcadoActivo[from].progreso.includes("_")
) {
    const intento = body.toUpperCase().trim();
    const juego = ahorcadoActivo[from];
    const palabra = juego.palabra;
    const senderTag = `@${sender.split("@")[0]}`;

    // Declaramos imagenRandom al inicio
    const imagenes = [
        './archivos/fotos/marca.jpeg',
        './archivos/fotos/marca2.jpeg',
        './archivos/fotos/marca3.jpeg',
        './archivos/fotos/marca4.jpeg',
        './archivos/fotos/marca5.jpeg',
        './archivos/fotos/marca6.jpeg',
        './archivos/fotos/marca7.jpeg',
        './archivos/fotos/marca8.jpeg',
        './archivos/fotos/marca9.jpeg'
    ];
    const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

    if (intento === palabra) {
        clearTimeout(juego.timeout);
        let premio = Math.floor(Math.random() * 100) + 50;

        let index = registros.findIndex(u => u.id === sender);
        if (index !== -1) {
            registros[index].coins += premio;
            fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        }

        await susune.sendMessage(from, {
            text: `🎀 𝐑𝐞𝐬𝐩𝐮𝐞𝐬𝐭𝐚 𝐂𝐨𝐫𝐫𝐞𝐜𝐭𝐚 🎀\n\n🎉 ¡𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔! ${senderTag}\n𝒂𝒅𝒊𝒗𝒊𝒏𝒂𝒔𝒕𝒆 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 𝒄𝒐𝒓𝒓𝒆𝒄𝒕𝒂.\n\n🧧 𝑷𝒂𝒍𝒂𝒃𝒓𝒂: *${palabra}*\n🎁 𝑮𝒂𝒏𝒂𝒔𝒕𝒆: *$${premio} 🪙*`,
            mentions: [sender],
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 777,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: "120363403886033615@newsletter",
                    serverMessageId: 104,
                    newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
                },
                externalAdReply: {
                    title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                    body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
                    thumbnail: fs.readFileSync(imagenRandom),
                    sourceUrl: "https://Wa.me/+525649337420",
                    mediaType: 2
                }
            }
        });

        delete ahorcadoActivo[from];
    } else {
        let aciertos = false;

        for (let i = 0; i < palabra.length; i++) {
            if (intento[i] && intento[i] === palabra[i]) {
                if (juego.progreso[i] === "_") {
                    juego.progreso[i] = palabra[i];
                    aciertos = true;
                }
            }
        }

        juego.intentos--;

        if (juego.progreso.join("") === palabra) {
            clearTimeout(juego.timeout);
            let premio = Math.floor(Math.random() * 100) + 50;

            let index = registros.findIndex(u => u.id === sender);
            if (index !== -1) {
                registros[index].coins += premio;
                fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
            }

            susune.sendMessage(from, {
                text: `🎉 *Felicidades ${senderTag}!* Has completado la palabra: *${palabra}*\n\nGanaste *${premio} monedas*.`,
                mentions: [sender],
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 777,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363403886033615@newsletter",
                        serverMessageId: 104,
                        newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
                    },
                    externalAdReply: {
                        title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                        body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
                        thumbnail: fs.readFileSync(imagenRandom),
                        sourceUrl: "https://Wa.me/+525649337420",
                        mediaType: 2
                    }
                }
            });

            delete ahorcadoActivo[from];
        } else if (juego.intentos <= 0) {
            clearTimeout(juego.timeout);
            enviar(`❌ *Se acabaron los intentos.*\nLa palabra era: *${palabra}*`);
            delete ahorcadoActivo[from];
        } else {
            let mensaje = aciertos
                ? `✅ ${senderTag} acertó algunas letras!*\n\n${juego.progreso.join(" ")}\n\nQuedan *${juego.intentos}* intentos.`
                : `❌ ${senderTag} falló completamente.\n\n${juego.progreso.join(" ")}\n\nQuedan *${juego.intentos}* intentos.`;

            susune.sendMessage(from, {
                text: mensaje,
                mentions: [sender],
                contextInfo: {
                    mentionedJid: [sender],
                    forwardingScore: 777,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: "120363403886033615@newsletter",
                        serverMessageId: 104,
                        newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
                    },
                    externalAdReply: {
                        title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
                        body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
                        thumbnail: fs.readFileSync(imagenRandom),
                        sourceUrl: "https://Wa.me/+525649337420",
                        mediaType: 2
                    }
                }
            });
        }
    }
}

if (
    adivinaPeliculaActiva[from] &&
    !isCmd &&
    /^[a-zA-Z\s]+$/.test(body.trim()) &&
    adivinaPeliculaActiva[from].progreso.includes("_")
) {
    const intento = body.toUpperCase().trim();
    const juego = adivinaPeliculaActiva[from];
    const palabra = juego.palabra;

    if (intento === palabra) {
        clearTimeout(juego.timeout);
        let premio = 60;

        let index = registros.findIndex(u => u.id === sender);
        if (index !== -1) {
            registros[index].coins += premio;
            fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        }

        
        await enviar3(`🎉 *Felicidades @${sender.split("@")[0]}* adivinaste la película\n\n${juego.emojis}\n\n${palabra}\n\nGanaste: ${premio} monedas`, from, sender);
            

        delete adivinaPeliculaActiva[from];
    } else {
        let aciertos = false;

        for (let i = 0; i < palabra.length; i++) {
            if (intento[i] && intento[i] === palabra[i] && juego.progreso[i] === "_") {
                juego.progreso[i] = palabra[i];
                aciertos = true;
            }
        }

        juego.intentos--;

        if (juego.progreso.join("") === palabra) {
            clearTimeout(juego.timeout);
            let premio = 60;

            let index = registros.findIndex(u => u.id === sender);
            if (index !== -1) {
                registros[index].coins += premio;
                fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
            }

await enviar3(`🎉 *Felicidades @${sender.split("@")[0]}* adivinaste la película\n\n${juego.emojis}\n\n${palabra}\n\nGanaste: ${premio} monedas`, from, sender);
            
            delete adivinaPeliculaActiva[from];
        } else if (juego.intentos <= 0) {
            clearTimeout(juego.timeout);
            await enviar3(`❌ *Casi lo logras @${sender.split("@")[0]}*, no adivinaste la película.\n\n${juego.emojis}\n\nLa respuesta era: *${palabra}*`, from, sender);
            
            delete adivinaPeliculaActiva[from];
        } else {
            let texto = aciertos
                ? `🎯 *Casi lo logras @${sender.split("@")[0]}*, acertaste algunas letras\n\n${juego.emojis}`
                : `❌ *Error @${sender.split("@")[0]}*, sigue intentando\n\n${juego.emojis}`;

            texto += `\n\nIntentos: ${juego.intentos}\nTiempo: 60 segundos\n\n${juego.progreso.join("")}`;
await enviar3(texto, from, sender);

        }
    }
}

if (
    adivinaMusicaActiva[from] &&
    !isCmd &&
    /^[a-zA-Z\s]+$/.test(body.trim()) &&
    adivinaMusicaActiva[from].progreso.includes("_")
) {
    const intento = body.toUpperCase().trim();
    const juego = adivinaMusicaActiva[from];
    const palabra = juego.palabra;

    if (intento === palabra) {
        clearTimeout(juego.timeout);
        let premio = 60;

        let index = registros.findIndex(u => u.id === sender);
        if (index !== -1) {
            registros[index].coins += premio;
            fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        }

await enviar3(`🎉 *Felicidades @${sender.split("@")[0]}*, adivinaste la música:\n\n*${palabra}*\n\nGanaste: 60 monedas`, from, sender);
        

        delete adivinaMusicaActiva[from];
    } else {
        let aciertos = false;

        for (let i = 0; i < palabra.length; i++) {
            if (intento[i] && intento[i] === palabra[i] && juego.progreso[i] === "_") {
                juego.progreso[i] = palabra[i];
                aciertos = true;
            }
        }

        juego.intentos--;

        if (juego.progreso.join("") === palabra) {
            clearTimeout(juego.timeout);
            let premio = 60;

            let index = registros.findIndex(u => u.id === sender);
            if (index !== -1) {
                registros[index].coins += premio;
                fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
            }

await enviar3(`🎉 *Felicidades @${sender.split("@")[0]}*, adivinaste la música:\n\n*${palabra}*\n\nGanaste: 60 monedas`, from, sender);
            

            delete adivinaMusicaActiva[from];
        } else if (juego.intentos <= 0) {
            clearTimeout(juego.timeout);
            await enviar3(`❌ *Se acabaron los intentos @${sender.split("@")[0]}*\nLa música era: *${palabra}*`, from, sender);
            
            delete adivinaMusicaActiva[from];
        } else {
            const texto = aciertos
                ? `🎯 *Lo siento @${sender.split("@")[0]}*, no era la música correcta, pero acertaste algunas letras.`
                : `❌ *Lo siento @${sender.split("@")[0]}*, esa no es la música. Sigue intentando.`;
await enviar3(`${texto}\n\nIntentos restantes: ${juego.intentos}\n\n${juego.progreso.join("")}`, from, sender);
            
        }
    }
}

//Funcion adivinanzas
if (
  adivinanzaActiva[from] &&
  !isCmd &&
  /^[a-zA-Z\s]+$/.test(body.trim())
) {
    const respuestaUsuario = body.toLowerCase().trim();
    const respuestaCorrecta = adivinanzaActiva[from].respuestaCorrecta.toLowerCase();

    if (respuestaUsuario === respuestaCorrecta) {
        clearTimeout(adivinanzaActiva[from].timeout);
        let premio = 50;
        let index = registros.findIndex(u => u.id === sender);
        if (index !== -1) {
            registros[index].coins += premio;
            fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        }
await enviar3(`🌸 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼 𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼 🌸\n\n🪷 *𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂 @${sender.split("@")[0]}*\n\n*🌷 𝙶𝙰𝙽𝙰𝚂𝚃𝙴 $${premio} 🪙*`, from, sender);
        

        delete adivinanzaActiva[from];

        setTimeout(() => {
            enviar('🪷 𝗘𝗹 𝗷𝘂𝗲𝗴𝗼 𝗱𝗲 𝗮𝗱𝗶𝘃𝗶𝗻𝗮𝗻𝘇𝗮𝘀 𝗮 𝘁𝗲𝗿𝗺𝗶𝗻𝗮𝗱𝗼. 🪷');
        }, 2000);

    } else {
    await enviar3(`❌ *𝙄𝙉𝘾𝙊𝙍𝙍𝙀𝘾𝙏𝘼* ❌\n\n🪷 *𝙉𝙊 𝙀𝙎 𝙇𝘼 𝙍𝙀𝙎𝙋𝙐𝙀𝙎𝙏𝘼, @${sender.split("@")[0]}*`, from, sender);
        
    }
}

if (usuariosActivos.estado && budy !== "") {
    const userId = sender + '@s.whatsapp.net'; 
    const userMessage = budy; 
    const userName = pushname || sender.split('@')[0]; 

    if (usuariosActivos[userId]) {
        usuariosActivos[userId].mensajes.push(userMessage);
    } else {
        usuariosActivos[userId] = {
            nombre: userName,
            mensajes: [userMessage],
            actividad: 0,
            actividadDetalles: []
        };
    }
    usuariosActivos[userId].actividad += 1;
    const actividadDetalle = {
        admin: pushname, 
        motivo: 'Mensaje recibido',
        fecha: new Date().toISOString() 
    };
    usuariosActivos[userId].actividadDetalles.push(actividadDetalle);

    
    fs.writeFileSync(archivoUsuarios, JSON.stringify(usuariosActivos, null, 2));
}


function procesarCuenta(filePath, servicio, tipo) {
  if (!fs.existsSync(filePath)) {
    return enviar(`⚠️ *No se encontró el archivo JSON para ${servicio} (${tipo}).*`);
  }

  try {
    const fileData = fs.readFileSync(filePath, 'utf-8');

    if (!fileData.trim()) {
      return enviar(`⚠️ *El archivo JSON de ${servicio} (${tipo}) está vacío.*`);
    }

    let accountList = JSON.parse(fileData);

    if (!Array.isArray(accountList) || accountList.length === 0) {
      return enviar(`⚠️ *No hay cuentas disponibles de ${servicio} (${tipo}).*`);
    }

    // Seleccionar una cuenta aleatoria
    const randomIndex = Math.floor(Math.random() * accountList.length);
    const selectedAccount = accountList.splice(randomIndex, 1)[0];

    // Verificar si los datos están completos según el tipo
    if (tipo === "perfil") {
      if (!selectedAccount.login || !selectedAccount.perfil || !selectedAccount.senha) {
        return enviar(`⚠️ *Error: La cuenta seleccionada no tiene los datos completos.*`);
      }
enviar(`🌷 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚 𝐃𝐞 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 🌷
🌹 *${servicio} (${tipo}):*
        
*🌸 𝙲𝙾𝚁𝚁𝙴𝙾: ${selectedAccount.login}*
*🌸 𝙿𝙴𝚁𝙵𝙸𝙻: ${selectedAccount.perfil}*
*🌸 𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝙴𝙽̃𝙰: ${selectedAccount.senha}*
      `);
    } else {
      if (!selectedAccount.login || !selectedAccount.senha) {
        return enviar(`⚠️ *Error: La cuenta seleccionada no tiene los datos completos.*`);
      }
enviar(`
*🌷 𝐏𝐥𝐚𝐭𝐚𝐟𝐨𝐫𝐦𝐚 𝐃𝐞 𝐒𝐭𝐫𝐞𝐚𝐦𝐢𝐧𝐠 🌷
🌹 *${servicio} (${tipo}):*
        
*🌸 𝙲𝙾𝚁𝚁𝙴𝙾: ${selectedAccount.login}*
*🌸 𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝙴𝙽̃𝙰: ${selectedAccount.senha}*
      `);
    }

    // Guardar el JSON actualizado sin la cuenta usada
    fs.writeFileSync(filePath, JSON.stringify(accountList, null, 2));

  } catch (error) {
    console.error(`❌ Error al leer el JSON de ${servicio}:`, error);
    enviar(`❌ *Hubo un error al procesar la cuenta de ${servicio}.*`);
  }
}

const caracteresEspeciales = {
    'á': 'a', 'à': 'a', 'ä': 'a', 'â': 'a', 'ã': 'a', 'å': 'a', 'ª': 'a',
    'é': 'e', 'è': 'e', 'ë': 'e', 'ê': 'e',
    'í': 'i', 'ì': 'i', 'ï': 'i', 'î': 'i',
    'ó': 'o', 'ò': 'o', 'ö': 'o', 'ô': 'o', 'õ': 'o',
    'ú': 'u', 'ù': 'u', 'ü': 'u', 'û': 'u',
    'ñ': 'n', 'ç': 'c',
    '0': 'o', '1': 'i', '3': 'e', '4': 'a', '5': 's', '7': 't'
};

// Expansión para manejar letras con números y caracteres especiales más comunes
const caracteresNumericos = {
    '0': 'o', '1': 'i', '2': 'z', '3': 'e', '4': 'a', '5': 's', '6': 'g', '7': 't', '8': 'b', '9': 'p',
    'a': 'a', 'b': 'b', 'c': 'c', 'd': 'd', 'e': 'e', 'f': 'f', 'g': 'g', 'h': 'h', 'i': 'i', 'j': 'j',
    'k': 'k', 'l': 'l', 'm': 'm', 'n': 'n', 'o': 'o', 'p': 'p', 'q': 'q', 'r': 'r', 's': 's', 't': 't',
    'u': 'u', 'v': 'v', 'w': 'w', 'x': 'x', 'y': 'y', 'z': 'z'
};

const normalizarTexto = texto => texto.toLowerCase()
.replace(/[áàäâãåªéèëêíìïîóòöôõúùüûñç015347]/g, letra => caracteresEspeciales[letra] || letra)
.replace(/[0123456789]/g, numero => caracteresNumericos[numero] || numero) 
.replace(/[^a-z]/g, '');

if (budy !== "") {
if (antitoxic.includes(from)) {
if (info.key.fromMe) return; 
const normalizedBudy = normalizarTexto(budy);
const toxicWord = toxic.find(word => normalizedBudy.includes(normalizarTexto(word)));
if (toxicWord) {
let warnings = loadWarnings();
let user = warnings.usuarios[sender] || { warnings: 0 };
user.warnings += 1;
warnings.usuarios[sender] = user;
saveWarnings(warnings);
if (user.warnings >= 5) {
await susune.groupParticipantsUpdate(from, [sender], 'remove');
const antitoxicText = `
⚠️ 𝗔𝗱𝘃𝗲𝗿𝘁𝗲𝗻𝗰𝗶𝗮 ⚠️

*🌸 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]}*
*🌷 𝙿𝙰𝙻𝙰𝙱𝚁𝙰: ${toxicWord.toUpperCase()}*

*🌹 𝙰𝚅𝙸𝚂𝙾: ${user.warnings}/5*

*💕 𝙷𝙰𝚂, 𝚂𝙸𝙳𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙿𝙾𝚁 𝙸𝙽𝙲𝚄𝙼𝙿𝙻𝙸𝚁 𝙻𝙰𝚂 𝚁𝙴𝙶𝙻𝙰𝚂 𝚈 𝙳𝙴𝙲𝙸𝙳𝙸𝚂𝚃𝙴 𝙳𝙴𝙲𝙸𝚁 𝙼𝙰𝙻𝙰𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂*`;
                susune.sendMessage(from, { text: antitoxicText, mentions: [sender] });
                user.warnings = 0;
                saveWarnings(warnings);
            } else {
                const advertenciaText = `
⚠️ 𝐏𝐚𝐥𝐚𝐛𝐫𝐚 𝐃𝐞𝐭𝐞𝐜𝐭𝐚𝐝𝐚 ⚠️

*🌸 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]}*
*🌷 𝙿𝙰𝙻𝙰𝙱𝚁𝙰: ${toxicWord.toUpperCase()}*

*💕 𝙰𝚅𝙸𝚂𝙾: ${user.warnings}/5*

*🌹 𝙲𝙾𝙼𝙿𝙾𝚁𝚃𝙰𝚃𝙴, 𝙴𝚅𝙸𝚃𝙰 𝙳𝙴𝙲𝙸𝚁 𝙼𝙰𝙻𝙰𝚂 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂 𝙾 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.*`;
                susune.sendMessage(from, { text: advertenciaText, mentions: [sender] });
            }
        }
    }
}

function guardarLog(chatId, comando, resultado) {
    let logData = `${new Date().toLocaleString()} - ${chatId} - ${comando} - ${resultado}\n`;
    
    // Asegurarse de que la carpeta logs existe
    let logPath = './archivos/logs/bin_logs.txt';
    let logDir = './archivos/logs';
    
    if (!fs.existsSync(logDir)) {
        fs.mkdirSync(logDir, { recursive: true });
    }

    fs.appendFile(logPath, logData, (err) => {
        if (err) console.error("❌ Error guardando el log:", err);
    });
}

function verificarMembresias() {
    let rutaJson = "./archivos/json/membresias.json";

    // Verificar si el archivo existe
    if (!fs.existsSync(rutaJson)) return;

    // Leer el archivo JSON
    let membresias = JSON.parse(fs.readFileSync(rutaJson, "utf8"));
    let ahora = Date.now();
    let cambios = false;

    for (let usuario in membresias) {
        let { expira, tipo } = membresias[usuario];

        // Si el tiempo ha expirado
        if (ahora >= expira) {
            enviar(`⏳ *La membresía ${tipo} de @${usuario.split('@')[0]} ha expirado.*`);

            // Eliminar del JSON
            delete membresias[usuario];
            cambios = true;
        }
    }

    // Guardar cambios si hubo expiraciones
    if (cambios) {
        fs.writeFileSync(rutaJson, JSON.stringify(membresias, null, 2), 'utf8');
    }
}

// Ejecutar la función cada minuto (60,000 ms)
setInterval(verificarMembresias, 60000);


function generateCardNumber(pattern) {
  let cleaned = pattern.replace(/[^0-9x]/gi, '');
  let requiredLength = (cleaned.startsWith("34") || cleaned.startsWith("37")) ? 15 : 16;
  let cardNumber = '';

  while (true) { // Sigue generando hasta que obtenga un número válido
    let digits = [];
    let fixedLength = Math.min(cleaned.length, requiredLength - 1);
    
    for (let i = 0; i < fixedLength; i++) {
      let ch = cleaned.charAt(i);
      digits.push(ch.toLowerCase() === 'x' ? Math.floor(Math.random() * 10).toString() : ch);
    }
    
    while (digits.length < requiredLength - 1) {
      digits.push(Math.floor(Math.random() * 10).toString());
    }
  
    let partialNumber = digits.join('');
    let checkDigit = calculateLuhnCheckDigit(partialNumber);
    cardNumber = partialNumber + checkDigit.toString();
    
    if (validateCardNumber(cardNumber)) {
      return cardNumber; // Solo devuelve una tarjeta válida
    }
  }
}

function calculateLuhnCheckDigit(numberWithoutCheck) {
  let sum = 0;
  let digits = numberWithoutCheck.split('').reverse().map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 === 0) {
      sum += digits[i];
    } else {
      let doubled = digits[i] * 2;
      if (doubled > 9) doubled -= 9;
      sum += doubled;
    }
  }

  return (10 - (sum % 10)) % 10;
}

function validateCardNumber(cardNumber) {
  let sum = 0;
  let digits = cardNumber.split('').reverse().map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (i % 2 !== 0) {
      let num = digits[i] * 2;
      if (num > 9) num -= 9;
      sum += num;
    } else {
      sum += digits[i];
    }
  }

  return sum % 10 === 0;
}

function randomNumberString(length) {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += Math.floor(Math.random() * 10).toString();
  }
  return s;
}

function randomMonth() {
  let m = Math.floor(Math.random() * 12) + 1;
  return m < 10 ? '0' + m : '' + m;
}

function randomYear() {
  let year = new Date().getFullYear() + Math.floor(Math.random() * 10);
  return year.toString();
}

async function getBinInfo(bin) {
  try {
    let response = await axios.get(`https://lookup.binlist.net/${bin}`);
    let data = response.data;
    return `${data.bank ? data.bank.name : 'Desconocido'} | ${data.scheme ? data.scheme.toUpperCase() : 'Desconocido'} | ${data.type ? data.type.toUpperCase() : 'Desconocido'} | ${data.country ? data.country.name : 'Desconocido'}`;
  } catch (e) {
    console.error("Error en getBinInfo:", e);
    return "Información no disponible";
  }
}

function randomPhrase() {
  const phrases = [
    "𝙰 𝙻𝙰𝚂 𝙱𝙾𝙽𝙸𝚃𝙰𝚂 𝙷𝙰𝚈 𝚀𝚄𝙴 𝙴𝙼𝙱𝙰𝚁𝙰𝚉𝙰𝚁𝙻𝙰𝚂.. 🤤",
    "𝚂𝙸 𝙴𝚂𝚃𝙰𝚂 𝙵𝙴@ 𝙽𝙾 𝙴𝚂𝚃𝙴𝚂 𝚃𝚁𝙸𝚂𝚃𝙴, 𝚂𝙸𝙴𝙼𝙿𝚁𝙴 𝙷𝙰𝚈 𝙰𝙻𝙶𝚄𝙸𝙴𝙽 𝙳𝙴 𝙶𝚄𝚂𝚃𝙾𝚂 𝚁𝙰𝚁𝙾𝚂... 😏",
    "𝚂𝙸 𝚃𝙴 𝙳𝙰 𝚄𝙽𝙰 𝙾𝙿𝙾𝚁𝚃𝚄𝙽𝙸𝙳𝙰 𝙳𝙴𝚃𝙾𝙽𝙰𝙻𝙰... 🥴",
    "𝚄𝙽𝙰 𝙰𝙼𝙸𝙶𝙰 𝚀𝚄𝙴 𝙴𝙽𝚂𝙴𝙽̃𝙰 𝚃𝙴𝚃𝙰𝚂 𝚅𝙰𝙻𝙴 𝙾𝚁𝙾... 😍"
  ];
  return phrases[Math.floor(Math.random() * phrases.length)];
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}



function luhnCheck(cardNumber) {
    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let digit = parseInt(cardNumber[i]);
        if (shouldDouble) {
            digit *= 2;
            if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
    }
    return sum % 10 === 0;
}

if (isCmd && antispamGrupos.includes(from)) {
    if (!usuariosSpam[from]) usuariosSpam[from] = {};
    if (!usuariosSpam[from][sender]) {
        usuariosSpam[from][sender] = {
            ultimoUso: 0,
            advertencias: 0
        };
    }

    if (!bloqueados[from]) bloqueados[from] = {};

    const ahora = Date.now();
    const datos = usuariosSpam[from][sender];
    const bloqueado = bloqueados[from][sender];

    if (bloqueado && ahora < bloqueado) {
        await susune.sendMessage(from, { delete: info.key });
        return;
    }

 if (ahora - datos.ultimoUso < tiempoEsperaMs) {
    datos.advertencias++;

    const restante = Math.ceil((tiempoEsperaMs - (ahora - datos.ultimoUso)) / 3000);

    await susune.sendMessage(from, {
        text: `*🚫 𝙰𝙽𝚃𝙸-𝚂𝙿𝙰𝙼 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 🚫*\n\n*@${sender.split('@')[0]} 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙿𝙴𝚁𝙰:  ${restante}s 𝙰𝙽𝚃𝙴𝚂 𝙳𝙴 𝚄𝚂𝙰𝚁 𝙾𝚃𝚁𝙾 𝙲𝙾𝙼𝙰𝙽𝙳𝙾.*\n\n*🔔 𝐀𝐯𝐢𝐬𝐨: ${datos.advertencias}/${advertenciasMax}*`,
        mentions: [sender]
    });

    if (datos.advertencias >= advertenciasMax) {
        bloqueados[from][sender] = ahora + duracionBloqueoMs;
        await susune.sendMessage(from, {
            text: `*⚠️ 𝙲𝙰𝚂𝚃𝙸𝙶𝙾 𝙿𝙾𝚁 𝚂𝙿𝙰𝙼 ⚠️*\n\n*@${sender.split('@')[0]}, 𝙿𝙾𝚁 𝙸𝙶𝙽𝙾𝚁𝙰𝚁 𝙻𝙾𝚂 𝙰𝚅𝙸𝚂𝙾𝚂, 𝚂𝙴𝚁𝙰𝚂 𝙼𝚄𝚃𝙴𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙾𝚁 10 𝙼𝙸𝙽𝚄𝚃𝙾𝚂, 𝚃𝚄𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚂𝙴𝚁𝙰𝙽 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂.*`,
            mentions: [sender]
        });
        datos.advertencias = 0;
    }
    return;
}

    datos.ultimoUso = ahora;
    datos.advertencias = 0;
}


if (bloqueados[from] && bloqueados[from][sender]) {
    const ahora = Date.now();
    if (ahora < bloqueados[from][sender]) {
        try {
            const key = {
                remoteJid: from,
                fromMe: info.key.fromMe,
                id: info.key.id,
                participant: info.key.participant || sender
            };
            await susune.sendMessage(from, { delete: key });
        } catch (e) {
            console.error("Error eliminando mensaje de usuario bloqueado:", e);
        }
        return;
    } else {
        delete bloqueados[from][sender]; // castigo terminado
    }
}



if (isGroup && muteds[from] && muteds[from].includes(sender)) {
    try {
        const key = {
            remoteJid: from,
            fromMe: info.key.fromMe,
            id: info.key.id,
            participant: info.key.participant || sender
        };
        await susune.sendMessage(from, { delete: key });



    } catch (e) {
        console.error("Error eliminando mensaje de muteado:", e);
    }
    return;
}




setInterval(async () => {
    const pathGrupos = './archivos/json/masmorra_grupos.json';
    if (!fs.existsSync(pathGrupos)) return;

    const grupos = JSON.parse(fs.readFileSync(pathGrupos));
    const enemigos = [
        { nombre: "Goblin Flore", tipo: "normal", imagen: "https://qu.ax/CmhcY.jpg" },
        { nombre: "Zafiro Gliu", tipo: "legendaria", imagen: "https://qu.ax/uqThS.jpg" },
        { nombre: "Mimic Kas", tipo: "elite", imagen: "https://qu.ax/CmhcY.jpg" }
    ];

    for (const grupo of grupos) {
        const archivoActivo = `./archivos/json/masmorra_activa_${grupo}.json`;

        // No enviar si ya hay un enemigo activo
        if (fs.existsSync(archivoActivo)) continue;

        const enemigo = enemigos[Math.floor(Math.random() * enemigos.length)];
        const nivel = Math.floor(Math.random() * 100) + 1;
        const vida = nivel * 100;

        const enemigoFinal = {
            nombre: enemigo.nombre,
            tipo: enemigo.tipo,
            imagen: enemigo.imagen,
            nivel,
            vida
        };

        fs.writeFileSync(archivoActivo, JSON.stringify(enemigoFinal, null, 2));

        const alerta = `*¡Familiar salvaje detectado!*\n\n` +
            `Nombre: ${enemigo.nombre}\n` +
            `Nivel: ${nivel}\n` +
            `Vida: ${vida} HP\n` +
            `Tipo: ${enemigo.tipo}\n\n` +
            `Escribe *enfrentar* para combatirlo. Tienes 1 minuto.`;

        await susune.sendMessage(grupo, {
            image: { url: enemigo.imagen },
            caption: alerta
        });

        // Eliminarlo automáticamente tras 1 minuto si nadie lo enfrenta
        setTimeout(() => {
            if (fs.existsSync(archivoActivo)) {
                fs.unlinkSync(archivoActivo);
            }
        }, 60 * 1000); // 1 minuto
    }
}, 20 * 60 * 1000); // Cada 20 minutos



if (type === 'imageMessage' && autoLinkImgGrupos.includes(from)) {
  try {
    const boij = info.message.imageMessage;
    const buffer = await getFileBuffer(boij, "image");
    
    const fetch = require('node-fetch');
    const FormData = require('form-data');

    async function uploadImageToQuax(imageBuffer, expiration = "permanent") {
      const form = new FormData();
      form.append('files[]', imageBuffer, { filename: 'image.jpg' });
      form.append('expiry', expiration);
      const response = await fetch('https://qu.ax/upload.php', {
        method: 'POST',
        body: form,
      });
      const data = await response.json();
      if (data?.success && data?.files?.length > 0) {
        return `*🌸 𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${pushname}*\n\n🌷 𝐄𝐧𝐥𝐚𝐜𝐞 𝐃𝐞 𝐓𝐮 𝐈𝐦𝐚𝐠𝐞𝐧 🌷\n*🌺 𝙴𝚇𝙿𝙸𝚁𝙰𝙲𝙸𝙾𝙽: ${expiration}*\n*🌺 𝙻𝙸𝙽𝙺: ${data.files[0].url}*`;
      } else {
        throw new Error('Error al subir la imagen.');
      }
    }

    const imageUrl = await uploadImageToQuax(buffer);
    enviar(imageUrl);
  } catch (err) {
    console.error(err);
    enviar('*❌ Ocurrió un error al subir la imagen.*');
  }
}

function getImagenPorEdad(edad, imagenes) {
    const edadesDisponibles = Object.keys(imagenes).map(Number).sort((a, b) => b - a); // orden descendente
    for (let e of edadesDisponibles) {
        if (edad >= e) return imagenes[e.toString()];
    }
    return Object.values(imagenes)[0]; // fallback
}

//---------Comandos Con Prefijos----------//
switch(comando) {
//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗚𝗥𝗨𝗣𝗢𝗦 𝗔𝗗𝗠𝗜𝗡𝗦
case 'notify':
case 'Notify':
case 'not':
case 'noti':
case 'Noti':
case 'kakashi':
case 'n': {
    if (!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.');
    if (!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.');
    if (!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.');

    const getExtension = async (type) => await mimetype.extension(type);

    const getQuotedMessage = (info) => info?.message?.extendedTextMessage?.contextInfo?.quotedMessage || {};

    const getQuotedText = (info) => {
        const quotedMessage = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
        if (!quotedMessage) return '';
        if (quotedMessage.conversation) return quotedMessage.conversation;
        if (quotedMessage.imageMessage?.caption) return quotedMessage.imageMessage.caption;
        if (quotedMessage.videoMessage?.caption) return quotedMessage.videoMessage.caption;
        if (quotedMessage.documentMessage?.caption) return quotedMessage.documentMessage.caption;
        if (quotedMessage.buttonsMessage?.contentText) return quotedMessage.buttonsMessage.contentText;
        if (quotedMessage.templateMessage?.hydratedTemplate?.hydratedContentText) return quotedMessage.templateMessage.hydratedTemplate.hydratedContentText;
        if (quotedMessage.extendedTextMessage?.text) return quotedMessage.extendedTextMessage.text;
        return '';
    };

    const text = q.replace(new RegExp(`^(${comando})\\s+`, 'i'), '').trim() || 
        info?.message?.extendedTextMessage?.conversation || 
        getQuotedText(info);

    const citandoAlgo = info?.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    const enviandoArchivo = isQuotedImage || isQuotedVideo || isQuotedSticker || isQuotedAudio || isMedia;

    if (!text && !citandoAlgo && !enviandoArchivo) {
        return enviar('*𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾, 𝙾 𝙲𝙸𝚃𝙰 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴. 😊*');
    }

    if (q.includes("=>") || q.includes(">")) return;

    const membros = (groupId, membros1) => {
        if (!Array.isArray(membros1)) return [];
        return membros1.map(member => member.id);
    };

    const yd = membros(from, groupMembers);

    if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
        const media = isQuotedImage
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
            : info.message.imageMessage;
        const rane = getRandom('.' + await getExtension(media.mimetype));
        const img = await getFileBuffer(media, 'image');
        fs.writeFileSync(rane, img);
        const buff = fs.readFileSync(rane);
        const caption = text || media.caption || getQuotedText(info);
        await susune.sendMessage(from, { image: buff, caption: caption, mentions: yd }, { quoted: info });
        fs.unlinkSync(rane);
    }
    else if ((isMedia && info.message.videoMessage) || isQuotedVideo) {
        const media = isQuotedVideo
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
            : info.message.videoMessage;
        const rane = getRandom('.' + await getExtension(media.mimetype));
        const vid = await getFileBuffer(media, 'video');
        fs.writeFileSync(rane, vid);
        const buff = fs.readFileSync(rane);
        const caption = text || media.caption || getQuotedText(info);
        await susune.sendMessage(from, {
            video: buff,
            mimetype: media.mimetype || 'video/mp4',
            caption: caption,
            mentions: yd
        }, { quoted: info });
        fs.unlinkSync(rane);
    }
    else if ((isMedia && !info.message.videoMessage) || isQuotedSticker) {
        const media = isQuotedSticker
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage
            : info.message.stickerMessage;
        const rane = getRandom('.' + await getExtension(media.mimetype));
        const img = await getFileBuffer(media, 'sticker');
        fs.writeFileSync(rane, img);
        const fig = fs.readFileSync(rane);
        await susune.sendMessage(from, { sticker: fig, mentions: yd }, { quoted: info });
        fs.unlinkSync(rane);
    }
    else if ((isMedia && !info.message.videoMessage) || isQuotedAudio) {
        const media = isQuotedAudio
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage
            : info.message.audioMessage;
        const rane = getRandom('.' + await getExtension(media.mimetype));
        const aud = await getFileBuffer(media, 'audio');
        fs.writeFileSync(rane, aud);
        const buff = fs.readFileSync(rane);
        await susune.sendMessage(from, { audio: buff, mimetype: media.mimetype || 'audio/mpeg', ptt: true, mentions: yd }, { quoted: info });
        fs.unlinkSync(rane);
    }
    else {
        await susune.sendMessage(from, { text: text, mentions: yd }, { quoted: info });
    }
    break;
}

case 'todos':
case 'revivir':
case 'tag':
if (!isGroup) return enviar('💗 ¡Hola!, este comando solo se usa en grupos.');
if (!isGroupAdmins) return enviar('💗 ¡Hola!, este comando es solo para administradores.');
if (!isBotGroupAdmins) return enviar('💗 ¡Hola!, necesito ser administrador.');

const imagenes = [
    './archivos/fotos/marca.jpeg',
    './archivos/fotos/marca2.jpeg',
    './archivos/fotos/marca3.jpeg',
    './archivos/fotos/marca4.jpeg',
    './archivos/fotos/marca5.jpeg',
    './archivos/fotos/marca6.jpeg',
    './archivos/fotos/marca7.jpeg',
    './archivos/fotos/marca8.jpeg',
    './archivos/fotos/marca9.jpeg'
];

const imagenRandom = imagenes[Math.floor(Math.random() * imagenes.length)];

let kakashitag = `*🌷 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰𝙽𝙳𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 🌷*\n· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·`;

let members_id = groupMembers.map(m => m.id);
for (let id of members_id) {
  kakashitag += `\n🍓 @${id.split('@')[0]}`;
}
kakashitag += `\n· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*${botname}*\n🎀 𝐓𝐨𝐭𝐚𝐥: *${groupMembers.length}*`;

await susune.sendMessage(from, {
  text: kakashitag.trim(),
  mentions: members_id, // Esto es lo que activa las menciones
  contextInfo: {
    mentionedJid: members_id, // También puede ir aquí dependiendo de la versión de la librería
    forwardingScore: 777,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363403886033615@newsletter",
      serverMessageId: 104,
      newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
    },
    externalAdReply: {
      title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ${botname} 💕`,
      body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
      thumbnail: fs.readFileSync(imagenRandom),
      sourceUrl: "https://Wa.me/+525649337420",
      mediaType: 2
    }
  }
}, { quoted: info });

break;

case 'linkgp': case 'linkgroup': case 'linkgrupo': case 'grupolink': case 'grouplink':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
linkgc = await susune.groupInviteCode(from)
enviar(`*💞 𝙿𝙴𝙳𝙸𝙳𝙾 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 ✅*\n\n💞 𝐋𝐢𝐧𝐤: ➪ https://chat.whatsapp.com/`+linkgc)
break

case 'add':
    if (!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.');
    if (!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.');
    if (!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐎 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.');

    let numero;
    let nombreUsuario = "Usuario";
    if (args.length > 0) {
        numero = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net';
    } else if (info.message.extendedTextMessage) {
        let mencionados = info.message.extendedTextMessage.contextInfo.mentionedJid;
        let citado = info.message.extendedTextMessage.contextInfo.participant;
        if (mencionados && mencionados.length > 0) {
            numero = mencionados[0];
        } else if (citado) {
            numero = citado;
        }
    }

    if (!numero) {
        return enviar('*🌸 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝙻𝙰 𝙿𝙴𝚁𝚂𝙾𝙽𝙰 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙰𝙶𝚁𝙴𝙰𝚁, 𝚂𝙸𝙽 𝙿𝚁𝙴𝙵𝙸𝙹𝙾 𝙳𝙴𝙻 𝙿𝙰𝙸𝚂.*\n\n*🌷 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: 525649337420*');
    }

    let miembro = groupMembers.find(m => m.id === numero);
    if (miembro) {
        nombreUsuario = miembro.notify || miembro.subject || "Usuario";
    }

    let groupNamee = '';
    let groupInviteCode = '';
    let groupInviteExpiration = '';
    
    try {
        console.log('Intentando obtener la metadata del grupo...');
        const groupMetadata = await susune.groupMetadata(from);
        groupNamee = groupMetadata.subject;
        console.log('Grupo obtenido: ', groupNamee);

        // Verifica si el código de invitación puede ser generado de esta manera
        console.log('Intentando obtener el enlace de invitación...');
        const inviteLink = await susune.groupInviteCode(from); // Asegúrate de que esta función sea correcta
        if (inviteLink) {
            console.log('Enlace de invitación obtenido: ', inviteLink);
            groupInviteCode = inviteLink;
        } else {
            console.log('No se pudo obtener el enlace de invitación.');
        }
    } catch (err) {
        console.error('Error al obtener la información del grupo:', err);
    }

    let [response] = await susune.groupParticipantsUpdate(from, [numero], 'add');

    if (response.status === '403') {
        if (groupInviteCode) {
            try {
                // Construir el enlace completo
                const inviteUrl = `https://chat.whatsapp.com/${groupInviteCode}`;
                const mensajeInvitacion = `🌷 ¡Hola! Lamentablemente no pude agregar a *@${numero.split('@')[0]}* al grupo debido a restricciones en su cuenta o porque salió recientemente. Aquí está el enlace para unirse al grupo: ${inviteUrl}`;

                await susune.sendMessage(numero, { text: mensajeInvitacion });
                console.log('Enlace de invitación enviado correctamente');
            } catch (err) {
                console.error('Error al enviar la invitación:', err);
                await susune.sendMessage(from, { text: '🌷 ¡No pude enviar la invitación al usuario! Intenta de nuevo más tarde.' });
            }
        } else {
            console.error('No se pudo obtener el código de invitación o la expiración');
            await susune.sendMessage(from, { text: '🌷 ¡No pude generar el enlace de invitación! Intenta de nuevo más tarde.' });
        }
    } else {
        susune.sendMessage(from, { text: `*🌸 ¡Hola!,* *@${numero.split('@')[0]}*\n\n*🌷 Has sido agregado a este grupo por el administrador:* *${pushname}*` });
    }
    break;



case 'kick':
case 'eliminar':
case 'banear': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if (!info.message.extendedTextMessage || 
(!info.message.extendedTextMessage.contextInfo || 
 (!info.message.extendedTextMessage.contextInfo.participant && 
  (!info.message.extendedTextMessage.contextInfo.mentionedJid || 
   info.message.extendedTextMessage.contextInfo.mentionedJid.length === 0)))) {
return enviar('*🌸 𝙴𝚃𝙸𝚀𝚄𝙴𝚃𝙰 𝙾 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾.*');
}
let mentioned;
if (info.message.extendedTextMessage.contextInfo.mentionedJid && 
info.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {

// --- AQUI AGREGO EL MANEJO PARA MÚLTIPLES USUARIOS ---
let mentionedJids = info.message.extendedTextMessage.contextInfo.mentionedJid;
for (let mentioned of mentionedJids) {
try {
let responseb = await susune.groupParticipantsUpdate(from, [mentioned], 'remove');
if (responseb[0].status === "200") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*`,
mentions: [mentioned, sender]
});
} else if (responseb[0].status === "406") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝚀𝚄𝙴 𝙲𝚁𝙴𝙴𝚂 𝚀𝚄𝙴 𝙷𝙰𝙲𝙴𝚂, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙰 𝚃𝚄𝚂 𝚂𝚄𝙿𝙴𝚁𝙸𝙾𝚁𝙴𝚂 ❌*`,
mentions: [mentioned, sender]
});
} else if (responseb[0].status === "404") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚈𝙰 𝙽𝙾 𝙵𝙾𝚁𝙼𝙰 𝙿𝙰𝚁𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 ❗*`,
mentions: [mentioned, sender]
});
} else {
susune.sendMessage(from, {
text: `*𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾 ❌*`,
mentions: [sender]
});
}
} catch (error) {
enviar("*𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 ❌*");
}
}
// --- FIN DEL MANEJO MULTIPLE ---

} else {
mentioned = info.message.extendedTextMessage.contextInfo.participant;

if (mentioned) {
try {
let responseb = await susune.groupParticipantsUpdate(from, [mentioned], 'remove');
if (responseb[0].status === "200") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*`,
mentions: [mentioned, sender]
});
} else if (responseb[0].status === "406") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝚀𝚄𝙴 𝙲𝚁𝙴𝙴𝚂 𝚀𝚄𝙴 𝙷𝙰𝙲𝙴𝚂, 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙰 𝚃𝚄𝚂 𝚂𝚄𝙿𝙴𝚁𝙸𝙾𝚁𝙴𝚂 ❌*`,
mentions: [mentioned, sender]
});
} else if (responseb[0].status === "404") {
susune.sendMessage(from, {
text: `@${mentioned.split("@")[0]} *𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚈𝙰 𝙽𝙾 𝙵𝙾𝚁𝙼𝙰 𝙿𝙰𝚁𝚃𝙴 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙴𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 ❗*`,
mentions: [mentioned, sender]
});
} else {
susune.sendMessage(from, {
text: `*𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾 ❌*`,
mentions: [sender]
});
}
} catch (error) {
enviar("*𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 ❌*");
}
}
}
}
break;


case 'daradmin': case 'agregaradmin': case 'promover': case 'aggadmin': 
await susune.sendMessage(from, { react: { text: `🌷`, key: info.key }});

if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')

let mentionedd = null;

if (info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
    mentionedd = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
} else if (info.message?.extendedTextMessage?.contextInfo?.participant) {
    mentionedd = info.message.extendedTextMessage.contextInfo.participant;
}

if (!mentionedd) return enviar("*🌸 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙾 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝙰𝚁𝙰 𝙿𝚁𝙾𝙼𝙾𝚅𝙴𝚁𝙻𝙾 𝙷𝙰 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁*");

let responsedm2 = await susune.groupParticipantsUpdate(from, [mentionedd], 'promote');

if (responsedm2[0].status === "200") {

} else if (responsedm2[0].status === "404") {

} else {
susune.sendMessage(from, {
text: `*🥺 ¡𝚄𝙿𝚂!, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾.*`,
mentions: [sender]
});
}
break;

case 'quitaradmin': 
case 'removeradmin': 
case 'degradar': 
case 'remadmin': 
case 'remover':
case 'remove':
    await susune.sendMessage(from, { react: { text: `🌷`, key: info.key }});

    if (!isGroup) 
        return enviar('💗 ¡Hola!, este comando solo se usa en grupos.');
    if (!isGroupAdmins) 
        return enviar('💗 ¡Hola!, este comando solo es para administradores.');
    if (!isBotGroupAdmins) 
        return enviar('💗 ¡Hola!, necesito ser administrador.');

    let mentioned = null;

    if (info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0]) {
        mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
    } else if (info.message?.extendedTextMessage?.contextInfo?.participant) {
        mentioned = info.message.extendedTextMessage.contextInfo.participant;
    }

    if (!mentioned) 
        return enviar("*💞 Menciona o responde a un usuario para degradarlo de administrador.*");

    await susune.groupParticipantsUpdate(from, [mentioned], 'demote');
    break;

case 'infogp': {
try {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
const groupMetadata = await susune.groupMetadata(from);
const groupName = groupMetadata.subject;
const groupId = groupMetadata.id;
const creationTime = new Date(groupMetadata.creation * 1000).toLocaleString();
const totalMembers = groupMetadata.participants.length;
const groupOwner = groupMetadata.owner || "*🥺 𝙽𝙾 𝚂𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙾 𝙴𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*";
const isOpen = groupMetadata.announce === false ? "Abierto" : "Cerrado";
let groupLink = "*🥺 𝙴𝚁𝚁𝙾𝚁*";
try {
groupLink = await susune.groupInviteCode(from);
groupLink = `https://chat.whatsapp.com/${groupLink}`;
} catch (error) {
enviar("*🥺 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙴𝙻 𝙻𝙸𝙽𝙺 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*", error);
}
enviar(`
🌷 *𝗜𝗡𝗙𝗢 𝗗𝗘𝗟 𝗚𝗥𝗨𝗣𝗢* 🌷

*𝙽𝙾𝙼𝙱𝚁𝙴:* *${groupName}*
*𝙴𝚂𝚃𝙰𝙳𝙾:* *${isOpen}*
*𝙸𝙳:* ${groupId}

*𝚂𝙴 𝙲𝚁𝙴𝙾 𝙴𝙻:* *${creationTime}*
*𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂:* *${totalMembers}*

*𝙲𝚁𝙴𝙰𝙳𝙾𝚁/𝙰:* *${groupOwner}*

*𝙻𝙸𝙽𝙺:* *${groupLink}*
`.trim());
} catch (err) {
console.error(err);
enviar("*🌷 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*");
}
}
break;

case 'estado':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
const isOpen = groupMetadata.announce === false ? "ᴀʙɪᴇʀᴛᴏ ✅" : "ᴄᴇʀʀᴀᴅᴏ ❌";

estatus = `
🌷 𝐄𝐬𝐭𝐚𝐝𝐨 𝐃𝐞 𝐂𝐨𝐦𝐚𝐧𝐝𝐨𝐬 🌷
  
*🌸 ᴡᴇʟᴋᴏᴍ:* *${iswelkom ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*🌸 ᴀɴᴛɪʟɪɴᴋ:* *${isAntiLink ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*🌸 ᴀɴᴛɪᴛᴏxɪᴄ:* *${isantitoxic ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*🌸 ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ:* *${isautosticker ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*🌸 ᴀᴜᴛᴏʀᴇᴀᴄᴄɪᴏɴ:* *${isautoreaccionPath ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*🌸 ᴀɴᴛɪғᴀɴᴛᴀsᴍᴀ:* *${isarchivoUsuarios ? 'ᴀᴄᴛɪᴠᴀᴅᴏ ✅' : 'ᴀᴘᴀɢᴀᴅᴏ ❌'}*
*︎🌸 ɢʀᴜᴘᴏ:* *${isOpen}*

*💕 𝙴𝚂𝚃𝙰 𝙴𝚂 𝚄𝙽𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙲𝙻𝙰𝚂𝙸𝙵𝙸𝙲𝙰𝙳𝙰, 𝚁𝙴𝚅𝙴𝙻𝙰𝙽𝙳𝙾 𝙴𝙻 𝙴𝚂𝚃𝙰𝙳𝙾 𝙳𝙴 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝙳𝙴 𝙰𝙲𝚃𝙸𝚅𝙰𝙲𝙸𝙾𝙽 💗*
`
susune.sendMessage(from,{text : estatus},{quoted : info})
break

case 'sorteo': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let cantidad = parseInt(args[0]) || 1;
if (cantidad < 1) cantidad = 1;
let premio = args.slice(1).join(' ');
if (!premio) return enviar('*𝙴𝚂𝙲𝙾𝙶𝙴 𝙲𝚄𝙰𝙽𝚃𝙾𝚂 𝙶𝙰𝙽𝙰𝙳𝙾𝚁𝙴𝚂 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚃𝙴𝙽𝙴𝚁 𝚈 𝙴𝙻 𝙿𝚁𝙴𝙼𝙸𝙾 𝚀𝚄𝙴 𝙳𝙴𝙲𝙴𝙰𝚂 𝚂𝙾𝚁𝚃𝙴𝙰𝚁, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .sᴏʀᴛᴇᴏ 1 $100 ᴘᴇsᴏs*');
let miembros = groupMembers.map(m => m.id).filter(m => m !== BotNumber);
if (miembros.length < cantidad) cantidad = miembros.length;
let seleccionados = [];
while (seleccionados.length < cantidad) {
let elegido = miembros[Math.floor(Math.random() * miembros.length)];
if (!seleccionados.includes(elegido)) seleccionados.push(elegido);
}
let mensaje = `*🌸 𝐆𝐚𝐧𝐚𝐝𝐨𝐫𝐞𝐬 𝐃𝐞𝐥 𝐒𝐨𝐫𝐭𝐞𝐨 🌸*\n\n` + seleccionados.map(u => `*🌷 @${u.split('@')[0]}*`).join('\n');
mensaje += `\n\n*🎉 ¡𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂! 𝚃𝙴 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾: ${premio} 𝙿𝙾𝚁 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]} 🎉*`;
susune.sendMessage(from, { text: mensaje, mentions: [sender, ...seleccionados] }, { quoted: info });
}
break;

case 'descripcion':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let nuevaDescripcion = q;
if (!nuevaDescripcion) {
return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝚄𝙽𝙰 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾́𝙽 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙰𝙶𝚁𝙴𝙶𝙰𝚁*");
}
try {
await susune.groupUpdateDescription(from, nuevaDescripcion);
enviar(`*🌷 𝐍𝐮𝐞𝐯𝐚 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨𝐧 🌷*\n\n*🌸 𝐃𝐞𝐬𝐜𝐫𝐢𝐩𝐜𝐢𝐨́𝐧: ${nuevaDescripcion}*`);
} catch (error) {
console.error(error);
enviar("*🌸 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*");
}
break;

case 'nombregp':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
blat = args.join(" ")
susune.groupUpdateSubject(from, `${blat}`)
susune.sendMessage(from, { text: `*🌸 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙰 𝚂𝙸𝙳𝙾 𝙲𝙰𝙼𝙱𝙸𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴, 𝙰𝙲𝙲𝙸𝙾𝙽 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝙳𝙰 𝙿𝙾𝚁:  ${pushname}*` }, { quoted: info }).catch((err) => {
enviartexto(respuesta.error);
})
break

case 'delet':
case 'delete':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if (!info.message.extendedTextMessage || !info.message.extendedTextMessage.contextInfo) {
enviar('*𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙳𝙴𝙱𝙴𝚂 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴𝚁 𝙰𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 🤍*');
break;
}
const contextInfo = info.message.extendedTextMessage.contextInfo;
const stanzaId = contextInfo.stanzaId;
const participant = contextInfo.participant || from;
if (!stanzaId) {
enviar('*𝙽𝙾 𝙿𝚄𝙳𝙴 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 𝙳𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙰𝚂𝙴𝙶𝚄𝚁𝙰𝚃𝙴 𝙳𝙴 𝙼𝙰𝚁𝙲𝙰𝚁 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 💖*');
break;
}
try {
const key = {
remoteJid: from,
fromMe: participant === botNumber,
id: stanzaId,
participant: participant
};
await susune.sendMessage(from, { delete: key });
enviar('*𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 ✅*');
} catch (error) {
console.error('*𝙴𝚁𝚁𝙾𝚁 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙽𝙳𝙾 𝙼𝙴𝙽𝚂𝙰𝙹𝙴:*', error);
enviar('*𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝚁 𝙴𝚂𝚃𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙰𝚂𝙴𝙶𝚄𝚁𝙰𝚃𝙴 𝙳𝙴 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚃𝙴𝙽𝙶𝙰 𝙻𝙾𝚂 𝙿𝙴𝚁𝙼𝙸𝚂𝙾𝚂 ❌*');
}
break;

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢𝗥𝗘𝗦//

case 'welkom':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if (args.length < 1) return enviar(`*🌸 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚆𝙴𝙻𝙺𝙾𝙼 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙵𝙾𝚁𝙼𝙰: .ᴡᴇʟᴋᴏᴍ ᴏɴ/ᴏғғ*`)
const action = args[0].toLowerCase();
if (action === "on") {
if (iswelkom) return enviar(`*🌹 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚆𝙴𝙻𝙺𝙾𝙼 𝚈𝙰 𝙴𝚂𝚃𝙰́ 𝙰𝙲𝚃𝙸𝚅𝙾. 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁, ᴇsᴄʀɪʙᴀ:   .ᴡᴇʟᴋᴏᴍ ᴏғғ*`);
welkom.push(from);
fs.writeFileSync('./archivos/json/welkom.json', JSON.stringify(welkom));
enviar(`*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚆𝙴𝙻𝙺𝙾𝙼 𝚂𝙴 𝙷𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 ✅*`);
} else if (action === "off") {
if (!iswelkom) return enviar(`*🌷 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚆𝙴𝙻𝙺𝙾𝙼 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝙰𝙲𝚃𝙸𝚅𝙾. 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾, ᴇsᴄʀɪʙᴀ: .ᴡᴇʟᴋᴏᴍ ᴏɴ*`);
const index = welkom.indexOf(from);
if (index > -1) {
welkom.splice(index, 1);
fs.writeFileSync('./archivos/json/welkom.json', JSON.stringify(welkom));
enviar(`*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚆𝙴𝙻𝙺𝙾𝙼 𝚂𝙴 𝙷𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 ✅*`);
}
} else {
enviar('*🥺 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾.*');
}
break;

case 'antilink':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if (args.length < 1) return enviar(`*🌸 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙾 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺, 𝙴𝚂𝙲𝚁𝙸𝙱𝙰:   .ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ*`);
if (args[0].toLowerCase() === 'on') {
if (isAntiLink) return enviar('*🌷 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰: .ᴀɴᴛɪʟɪɴᴋ ᴏғғ*');
antilink.push(from);
fs.writeFileSync('./archivos/json/antilink.json', JSON.stringify(antilink));
enviar('*🌹 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 ✅*');
} else if (args[0].toLowerCase() === 'off') {
if (!isAntiLink) return enviar('*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾, 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰:   .ᴀɴᴛɪʟɪɴᴋ ᴏɴ*');
antilink.splice(antilink.indexOf(from), 1);
fs.writeFileSync('./archivos/json/antilink.json', JSON.stringify(antilink));
enviar('*🌹 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 ✅*');
} else {
enviar(`*🌸 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙵𝙾𝚁𝙼𝙰 𝙰𝚂𝙸 𝙲𝙾𝙼𝙾 𝙻𝙾 𝚅𝙴𝚁𝙰 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:   .ᴀɴᴛɪʟɪɴᴋ ᴏɴ/ᴏғғ*`);
}
break

case 'antitoxic' :
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if(args.length<1) return enviar("*🌸 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙵𝙾𝚁𝙼𝙰 𝙰𝚂𝙸 𝙲𝙾𝙼𝙾 𝙻𝙾 𝚅𝙴𝚁𝙰 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:   .ᴀɴᴛɪᴛᴏxɪᴄ ᴏɴ/ᴏғғ*")
if(args[0]== "on" ) {
if(isantitoxic) return enviar("*🌷 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙰𝚁𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰: .ᴀɴᴛɪᴛᴏxɪᴄ ᴏғғ*")
antitoxic.push(from)
fs.writeFileSync("./archivos/json/antitoxic.json",JSON.stringify(antitoxic))
enviar(`*🌹 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 ✅*`)
} else if (args[0]== "off" ) {
if(!isantitoxic) return enviar("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾, 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁𝙻𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰:   .ᴀɴᴛɪʟɪɴᴋ ᴏɴ*")
const perquiTX = from
procesoTX = antitoxic.indexOf(perquiTX)
while(procesoTX>=0) {
antitoxic.splice(procesoTX, 1)
procesoTX = antitoxic.indexOf(perquiTX)
}
fs.writeFileSync("./archivos/json/antitoxic.json",JSON.stringify(antitoxic))
enviar("*🌹 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 ✅*")
} else {
enviar("*🌸 𝙿𝙰𝚁𝙰 𝙿𝙾𝙳𝙴𝚁 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲 𝙴𝚂𝙲𝚁𝙸𝙱𝙰𝙻𝙾 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙵𝙾𝚁𝙼𝙰 𝙰𝚂𝙸 𝙲𝙾𝙼𝙾 𝙻𝙾 𝚅𝙴𝚁𝙰 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:   .ᴀɴᴛɪᴛᴏxɪᴄ ᴏɴ/ᴏғғ*")
}
break

case 'autosticker': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let autosticker = JSON.parse(fs.readFileSync('./archivos/json/autosticker.json', 'utf-8'));
let estado = args[0]?.toLowerCase();
if (estado === "on") {
if (autosticker.includes(from)) return enviar("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁, 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.*");
autosticker.push(from);
fs.writeFileSync('./archivos/json/autosticker.json', JSON.stringify(autosticker, null, 2));
enviar("*🌸 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} 
else if (estado === "off") {
if (!autosticker.includes(from)) return enviar("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚄𝚃𝙾𝚂𝚃𝙾𝙲𝙺𝙴𝚁, 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.*");
autosticker = autosticker.filter(gid => gid !== from);
fs.writeFileSync('./archivos/json/autosticker.json', JSON.stringify(autosticker, null, 2));
enviar("*🌸 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} 
else {
enviar("🌸 *Uso correcto:*\n`.autosticker on` - Activar\n`.autosticker off` - Desactivar");
}
}
break;

case 'antifantasmas': case 'antifantasma':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
if (args.length < 1) return enviar("*🌸 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰,  .ᴀɴᴛɪғᴀɴᴛᴀsᴍᴀ ᴏɴ/ᴏғғ*");
if (args[0] == "on") {
if (usuariosActivos.estado) return enviar("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰, 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.*");
usuariosActivos.estado = true;
fs.writeFileSync(archivoUsuarios, JSON.stringify(usuariosActivos));
enviar("*🌸 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} else if (args[0] == "off") {
if (!usuariosActivos.estado) return enviar("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰, 𝚈𝙰 𝚂𝙴 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝙰 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾.*");
usuariosActivos.estado = false;
fs.writeFileSync(archivoUsuarios, JSON.stringify(usuariosActivos));
enviar("*🌸 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙽𝚃𝙰𝚂𝙼𝙰 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} else {
enviar("*🌸 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰,  .ᴀɴᴛɪғᴀɴᴛᴀsᴍᴀs ᴏɴ/ᴏғғ*");
}
break;

case 'group': 
case 'grupo': {
    if (!isGroup) return enviar('💗 ¡Hola!, este comando solo se usa en grupos.');
    if (!isGroupAdmins) return enviar('💗 ¡Hola!, este comando solo es para administradores.');
    if (!isBotGroupAdmins) return enviar('💗 ¡Hola!, necesito ser administrador.');
    if (!q) return enviar('*💞 Especifique si desea abrir o cerrar el grupo: .grupo abrir / cerrar*');

    if (args[0] === 'cerrar') {
        await susune.groupSettingUpdate(from, 'announcement').catch((err) => enviar(jsonformat(err)));
    } else if (args[0] === 'abrir') {
        await susune.groupSettingUpdate(from, 'not_announcement').catch((err) => enviar(jsonformat(err)));
    } else {
        susune.sendMessage(mek.chat, {
            text: `*💞 Por favor indique si desea abrir o cerrar el grupo: .grupo abrir / cerrar*`,
            contextInfo: {
                externalAdReply: {
                    title: `𝐃𝐮𝐞𝐧̃𝐨: ᴋᴀᴋᴀsʜɪ 👑\n𝐁𝐨𝐭: ᴏsʜɪɴᴏ ʙᴏᴛ 💕`,
                    body: `𝐎𝐰𝐧𝐞𝐫: ᴋᴀᴋᴀsʜɪ 👑`,
                    thumbnail: fs.readFileSync('./archivos/fotos/marca.jpeg'),
                    sourceUrl: "https://Wa.me/+525649337420",
                    mediaType: 2,
                }
            }
        }, { quoted: mek });
    }
}
break;

case 'autoreaccion': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let opcion = args[0]?.toLowerCase();
if (!opcion) return enviar("*🌸 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰,  .ᴀᴜᴛᴏʀᴇᴀᴄᴄɪᴏɴ ᴏɴ/ᴏғғ*");
if (opcion === "on") {
if (!autoreaccionGrupos.includes(from)) {
autoreaccionGrupos.push(from);
fs.writeFileSync(autoreaccionPath, JSON.stringify(autoreaccionGrupos, null, 2));
}
enviar("*🌸 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} else if (opcion === "off") {
if (autoreaccionGrupos.includes(from)) {
autoreaccionGrupos = autoreaccionGrupos.filter(id => id !== from);
fs.writeFileSync(autoreaccionPath, JSON.stringify(autoreaccionGrupos, null, 2));
}
enviar("*🌸 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝚁𝙴𝙰𝙲𝙲𝙸𝙾𝙽 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ✅*");
} else {
enviar("*🌸 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙳𝙴 𝙻𝙰 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 𝙼𝙰𝙽𝙴𝚁𝙰,  .ᴀᴜᴛᴏʀᴇᴀᴄᴄɪᴏɴ ᴏɴ/ᴏғғ*");
}
}
break;

case 'mute':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let mentionedJid = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    let quotedUser = info.message?.extendedTextMessage?.contextInfo?.participant; // Usuario citado
    let usuarioTargett = mentionedJid[0] || quotedUser; // Prioridad: mención > cita

    if (!usuarioTargett) return reply("*💗 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙾 𝙲𝙸𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*");

    if (!muteds[from]) muteds[from] = [];

    if (muteds[from].includes(usuarioTargett)) {
        return reply("*💗 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙼𝚄𝚃𝙴𝙰𝙳𝙾*");
    }

    muteds[from].push(usuarioTargett);
    guardarMuteados();

    susune.sendMessage(from, {
        text: `*¡𝙷𝙾𝙻𝙰!, @${usuarioTargett.split('@')[0]} 𝙷𝙰𝚂 𝚂𝙸𝙳𝙾 𝙼𝚄𝚃𝙴𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙾𝚁 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]}.*\n\n*🔔 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴𝚂 𝙿𝙴𝚁𝙼𝙸𝚃𝙸𝙳𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙸𝚁 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝚂𝙸 𝙻𝙾 𝙷𝙰𝙲𝙴𝚂 𝚃𝚄𝚂 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝚂𝙴𝚁𝙰𝙽 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾𝚂.*`,
        mentions: [usuarioTargett, sender]
    });
    break;

case 'unmute':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
    let citadoUnmute = info.message?.extendedTextMessage?.contextInfo?.participant;
    let mencionadosUnmute = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

    var usuarioTarget = citadoUnmute || mencionadosUnmute[0];

    if (!usuarioTarget) return reply("*💗 𝙼𝙴𝙽𝙲𝙸𝙾𝙽𝙰 𝙾 𝙲𝙸𝚃𝙰 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾*");

    if (!muteds[from] || !muteds[from].includes(usuarioTarget)) {
        return reply("*💗 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙼𝚄𝚃𝙴𝙰𝙳𝙾*");
    }

    muteds[from] = muteds[from].filter(u => u !== usuarioTarget);
    guardarMuteados();

    susune.sendMessage(from, {
        text: `*¡𝙷𝙾𝙻𝙰!, @${usuarioTarget.split('@')[0]} 𝙷𝙰𝚂 𝚂𝙸𝙳𝙾 𝙳𝙴𝚂𝙼𝚄𝚃𝙴𝙰𝙳𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾, 𝙿𝙾𝚁 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]}.*`,
        mentions: [usuarioTarget, sender]
    });
    break;


    
    case 'antispam':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
    if (!q) return reply("*💗 𝚄𝚃𝙸𝙻𝙸𝚉𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙵𝙾𝚁𝙼𝙰: ᴀɴᴛɪsᴘᴀᴍ ᴏɴ/ᴏғғ*");

    if (q === "on") {
        if (!antispamGrupos.includes(from)) {
            antispamGrupos.push(from);
            fs.writeFileSync(antispamPath, JSON.stringify(antispamGrupos));
        }
        reply("*💗 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸 𝚂𝙿𝙰𝙼 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*");
    } else if (q === "off") {
        antispamGrupos = antispamGrupos.filter(g => g !== from);
        fs.writeFileSync(antispamPath, JSON.stringify(antispamGrupos));
        reply("*🌸 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸 𝚂𝙿𝙰𝙼 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*");
    } else {
        reply("*💗 𝚄𝚃𝙸𝙻𝙸𝚉𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙵𝙾𝚁𝙼𝙰: ᴀɴᴛɪsᴘᴀᴍ ᴏɴ/ᴏғғ*");
    }
    break;

case 'antiprivado':
  if (!isOwner) return 
  if (args[0] === 'on') {
    fs.writeFileSync(antiprivadoPath, JSON.stringify({ activo: true }, null, 2));
    reply('*💗 𝚂𝙴 𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*');
  } else if (args[0] === 'off') {
    fs.writeFileSync(antiprivadoPath, JSON.stringify({ activo: false }, null, 2));
    reply('*💗 𝚂𝙴 𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙾 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸 𝙿𝚁𝙸𝚅𝙰𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*');
  } else {
    reply('*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙵𝙾𝚁𝙼𝙰: ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ ᴏɴ/ᴏғғ*');
  }
  break;



//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗟𝗜𝗦𝗧𝗔𝗦//

case 'listamute':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')

    if (!muteds[from] || muteds[from].length === 0) {
        return reply("*💗 𝙽𝙾 𝙷𝙰𝚈 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙼𝚄𝚃𝙴𝙰𝙳𝙾𝚂 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾*");
    }

    let lista = muteds[from]
        .map((u, i) => `${i + 1}• @${u.split('@')[0]}`)
        .join('\n');

    susune.sendMessage(from, {
        text: `*💗 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙼𝚄𝚃𝙴𝙰𝙳𝙾𝚂 💗*\n\n${lista}`,
        mentions: muteds[from]
    });
    break;

case 'listafake': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
teks = '🌷 𝗨𝗦𝗨𝗔𝗥𝗜𝗢𝗦 𝗙𝗔𝗟𝗦𝗢𝗦 🌷\n\n';
men = [];
const prefijosFake = [
  '234', '91', '86', '81', '82', '886', '971', '44', '49', '33', '44', '62', '55', '82', '357', '60', '64', '33', '61', '20', '39', '61', '90', '92', '254', '351', '64', '358', '977', '254', '41',
  '226', '227', '228', '229', '230', '231', '232', '233', '234', '235', '236', '237', '238', '239', '240', '241', '242', '243', '244', '245', '246', '247', '248', '249', '250', '251', '262', '263', '264', '265', '266',
  '267', '268', '269', '270', '290', '291', '292', '293', '294', '295', '296', '297', '298', '299', '30', '31', '32', '33', '34', '35', '36', '37', '38', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49',
  '50', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92',
  '93', '94', '95', '96', '97', '98', '99'
];
for (let mem of groupMembers) {
let numero = mem.id.split('@')[0];
let prefijo = numero.substring(0, numero.indexOf(' '));
if (prefijosFake.some(pre => numero.startsWith(pre))) {
teks += `➤ 🌹 @${numero}\n\n*🌸 𝙴𝚂𝚃𝙰 𝙴𝚂 𝚄𝙽𝙰 𝙻𝙸𝚂𝚃𝙰 𝚀𝚄𝙴 𝚁𝙴𝚅𝙴𝙻𝙰 𝙴𝙻 𝙽𝚄𝙼𝙴𝚁𝙾 𝙳𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚀𝚄𝙴 𝚄𝚂𝙰𝙽 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝙵𝙰𝙻𝚂𝙾𝚂 𝙿𝙰𝚁𝙰 𝚁𝙴𝙰𝙻𝙸𝚉𝙰𝚁 𝚂𝚄𝚂 𝙴𝚂𝚃𝙰𝙵𝙰𝚂, 𝚁𝙴𝙲𝙾𝙼𝙸𝙴𝙽𝙳𝙾 𝚀𝚄𝙴 𝙻𝙾𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙴𝚂 𝙲𝙾𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 .ᴋɪᴄᴋ @*`;
men.push(mem.id);
}
}
if (teks.indexOf('➤') < 0) {
return enviar('*🥺 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝙵𝙰𝙻𝚂𝙾𝚂*');
}
susune.sendMessage(from, { text: teks, mentions: men }, { quoted: info });
}
break;

case 'listaadmin': case 'adminlist':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
const groupName = groupMetadata.subject;
const admins = groupMetadata.participants.filter(participant => participant.admin === 'admin' || participant.admin === 'superadmin');
const totalAdmins = admins.length;

if (totalAdmins === 0) {
return enviar(`*🥺 ¡𝚄𝙿𝚂!, 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙸𝙽𝙴𝚂𝙿𝙴𝚁𝙰𝙳𝙾.*`);
}

let adminList = "*🌷 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝙳𝙼𝙸𝙽𝙸𝚂 🌷* \n\n";
admins.forEach((admin, index) => {
adminList += `*➮ 🌸* @${admin.id.split('@')[0]}\n`;
});
adminList += `\n*🍓 𝚃𝙾𝚃𝙰𝙻:* *${totalAdmins}*\n*🌐 𝙶𝚁𝚄𝙿𝙾:* *${groupName}*`;

susune.sendMessage(from, {
text: adminList,
mentions: admins.map(admin => admin.id)
});
break;

case 'listatoxic':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let warnings = loadWarnings();
let usuariosConAlertas = [];
let mentions2 = [];
for (let usuario in warnings.usuarios) {
if (warnings.usuarios.hasOwnProperty(usuario)) {
let numWarnings = warnings.usuarios[usuario].warnings;
let nombreReal = warnings.usuarios[usuario].nombreReal;
let motivo = warnings.usuarios[usuario].motivo || '';  if (numWarnings > 0) {
const normalizedBudy = normalizarTexto(motivo);
const toxicWord = toxic.find(word => normalizedBudy.includes(normalizarTexto(word)));
if (toxicWord) {
motivo = toxicWord.toUpperCase();
}
usuariosConAlertas.push({
usuario: usuario,
advertencias: numWarnings,
nombreReal: nombreReal,
motivo: motivo
});
}
}
}
let totalUsuarios = usuariosConAlertas.length;
if (totalUsuarios > 0) {
let respuesta = `🌷 𝐋𝐈𝐒𝐓𝐀 𝐃𝐄 𝐓𝐎𝐗𝐈𝐂𝐎𝐒 🌷\n`;
usuariosConAlertas.forEach((user, index) => {
let usuarioMencionado = user.usuario.split('@')[0];
respuesta += `
*${index + 1}• 🌹 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${usuarioMencionado}*
*⚠️ 𝙰𝙳𝚅𝙴𝚁𝚃𝙴𝙽𝙲𝙸𝙰𝚂: ${user.advertencias}/5*`;
const cleanedUserId = user.usuario.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
mentions2.push(cleanedUserId);
});
respuesta += `
\n*🦋 𝚃𝙾𝚃𝙰𝙻: ${totalUsuarios}*`;
susune.sendMessage(from, { text: respuesta, mentions: mentions2 });
} else {
susune.sendMessage(from, { text: `💕 𝑵𝒐 𝒉𝒂𝒚 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒈𝒓𝒐𝒔𝒆𝒓𝒐𝒔 𝒆𝒏 𝒆𝒔𝒕𝒂 𝒐𝒄𝒂𝒔𝒊𝒐𝒏, 𝒎𝒆 𝒔𝒊𝒆𝒏𝒕𝒐 𝒎𝒖𝒚 𝒇𝒆𝒍𝒊𝒛 ☺️❤️` });
}
break;

case 'listaantifake': {
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let antifake = [];
const antifakePath = './archivos/json/antifake.json';
if (fs.existsSync(antifakePath)) {
antifake = JSON.parse(fs.readFileSync(antifakePath));
}
if (antifake.length === 0) {
return enviar("*🌸 𝙽𝙾 𝙷𝙰𝚈 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝙰𝙽𝚃𝙸𝙵𝙰𝙺𝙴*");
}
let mensaje = "📋 𝐋𝐈𝐒𝐓𝐀 𝐀𝐍𝐓𝐈𝐅𝐀𝐊𝐄 📋\n\n";
let mentions = [];
antifake.forEach((user, index) => {
let miembro = groupMembers.find(member => member.id === user.id);
let nombreUsuario = miembro?.notify || miembro?.subject || "Desconocido";
mensaje += `🌸 *${index + 1}. @${user.id.split('@')[0]}*\n🌷 *𝙼𝙾𝚃𝙸𝚅𝙾: ${user.motivo}*\n\n`;
mentions.push(user.id);
});
susune.sendMessage(from, {
text: mensaje.trim(),
mentions: mentions
});
}
break;

case 'listafantasma':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if(!isGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐞𝐬 𝐩𝐚𝐫𝐚 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫𝐞𝐬.')
if(!isBotGroupAdmins) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐨 𝐬𝐞𝐫 𝐚𝐝𝐦𝐢𝐧𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐫.')
let respuesta = `🌸 𝐂𝐨𝐧𝐭𝐚𝐝𝐨𝐫 𝐃𝐞 𝐌𝐞𝐧𝐬𝐚𝐣𝐞𝐬 🌸\n\n`;
let mentionss = [];
const oshinoId = "5219622167351@s.whatsapp.net";
mentionss.push(oshinoId);
for (let userId in usuariosActivos) {
if (!userId.includes('@')) continue;
const usuario = usuariosActivos[userId];
const totalMensajes = usuario.mensajes ? usuario.mensajes.length : 0;
const nombreUsuario = usuario.nombre && usuario.nombre.trim() !== "" ? usuario.nombre : null;
if (!nombreUsuario) continue;
const cleanedUserId = userId.replace(/[^0-9]/g, '') + "@s.whatsapp.net";
respuesta += `👤 *@${userId.split('@')[0]}*\n💬 *Mensajes: ${totalMensajes}*\n*🎀 𝙴𝚂𝚃𝙰𝙳𝙾: Activó ✅*\n\n`;
mentionss.push(cleanedUserId);
}
respuesta += `*🦋 Total: ${mentionss.length}*\n*🌷 ᴀᴄᴛɪᴠᴏs ✅*`;
susune.sendMessage(from, {
text: respuesta.trim(),
mentions: mentionss
});
break;

case 'listareg': {
if(!isOwner) return
if (!registros || registros.length === 0) {
return enviar("*🌸 𝙽𝙾 𝙷𝙰𝚈 𝚄𝚂𝚄𝙰𝚁𝙸𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂, 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂.*");
}
let mensaje = "*🌷 𝐔𝐬𝐮𝐚𝐫𝐢𝐨𝐬 𝐑𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐝𝐨𝐬 🌷*\n\n";
let mentions = [];
let mencionado = info.message.extendedTextMessage?.contextInfo?.mentionedJid;
let usuario = (mencionado && mencionado.length > 0) ? mencionado[0] : sender;
let index = registros.findIndex(u => u.id === usuario);
registros.forEach((user, index) => {
let miembro = groupMembers.find(member => member.id === user.id);
let nombreUsuario = miembro?.notify || miembro?.subject || "Desconocido";
mensaje += `*${index + 1}. @${user.id.split('@')[0]}*\n`;
mensaje += `   *𝙽𝙾𝙼𝙱𝚁𝙴:* *${user.nombre}*\n`;
mensaje += `   *𝙳𝙸𝙽𝙴𝚁𝙾: $${user.coins} 🪙*\n`;
mensaje += `   *𝙽𝙸𝚅𝙴𝙻: ${user.nivel}*\n`;
mensaje += `   *𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: $${user.diamantes} 💎*\n\n`;
mentions.push(user.id);
});
susune.sendMessage(from, {
text: mensaje.trim(),
mentions: mentions
});
}
break;

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘𝗟 𝗨𝗦𝗢 𝗚𝗥𝗨𝗣𝗔𝗟

case 'fakechat':
if(!isGroup) return
var gh = body.slice(11);
var mentioned1 = info.message.extendedTextMessage && info.message.extendedTextMessage.contextInfo && info.message.extendedTextMessage.contextInfo.mentionedJid ? info.message.extendedTextMessage.contextInfo.mentionedJid[0] : null;
var parts = gh.split("|");
if (mentioned1 && parts.length === 3) {
var replace = parts[0];
var target = parts[1];
var bot = parts[2];
var quotedMessage = {
key: {
fromMe: false,
participant: mentioned1
},
message: {
conversation: target
}
};
var sendMessageOptions = {
text: `${bot}`,
quoted: quotedMessage
};
susune.sendMessage(from, sendMessageOptions, { quoted: quotedMessage });
} else {
susune.sendMessage(from, { text: '*🌸 𝙷𝙾𝙻𝙸𝚂, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚄𝚂𝙴 𝙱𝙸𝙴𝙽 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ғᴀᴋᴇᴄʜᴀᴛ @ᴛᴀɢ|ᴍᴇɴsᴀᴊᴇ ᴅᴇ ʟᴀ ᴠɪᴄᴛɪᴍᴀ|ᴛᴜ ʀᴇsᴘᴜᴇsᴛᴀ*' });
}
break;




case 'nickgen':{
if (!q) return enviar(`*🌷 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴 𝙿𝙰𝚁𝙰 𝙶𝙴𝙽𝙴𝚁𝙰𝚁 𝚃𝚄𝚂 𝙽𝙸𝙲𝙺, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ɴɪᴄᴋɢᴇɴ ᴋᴀᴋᴀsʜɪ*`)
let lizink_res = await fetchJson(`https://alizindev-api.onrender.com/api/tools/styletext?text=${q}&apikey=a93e85c1`)
let lizinn = lizink_res.resultado
let alizinnk =`🌸𝐍𝐈𝐂𝐊𝐒 𝐆𝐄𝐍𝐄𝐑𝐀𝐃𝐎𝐒 🌸\n\n`
for (let x of lizinn){
alizinnk +=`*𝙽𝙸𝙲𝙺𝚂:* ${x.result}\n\n`
}
enviar(alizinnk)
}
break

case 'sticker': case 's': {
    if (!isQuotedImage && !isImage && !isQuotedVideo && !isVideo) {
        return enviar("*🌸 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾 𝙾 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽*");
    }

    const exec = require('child_process').exec;
    const fs = require('fs').promises;

    enviar("*🌷 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝚃𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙸𝚃𝙾....*");

    let mediaMessage = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
        : isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage
        : isImage ? info.message.imageMessage
        : info.message.videoMessage;

    if (!mediaMessage) return enviar("*🌸 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝚁𝙴𝙰𝚁 𝚃𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*");

    let mediaBuffer = await getFileBuffer(mediaMessage, isImage || isQuotedImage ? "image" : "video");
    let timestamp = Date.now();
    let fileNameInput = `./sticker_${sender.split('@')[0]}_${timestamp}.${isImage || isQuotedImage ? "jpg" : "mp4"}`;
    let fileNameOutput = `./sticker_${sender.split('@')[0]}_${timestamp}.webp`;

    try {
        await fs.writeFile(fileNameInput, mediaBuffer);

let command = isImage || isQuotedImage
    ? `ffmpeg -i ${fileNameInput} -vf "scale=w=512:h=512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000" -pix_fmt yuva420p -vcodec libwebp -lossless 1 -y ${fileNameOutput}`
    : `ffmpeg -i ${fileNameInput} -vf "scale=w=512:h=512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000,fps=15" -pix_fmt yuva420p -c:v libwebp -loop 0 -preset default -an -vsync 0 -t 6 ${fileNameOutput}`;

        exec(command, async (err) => {
            if (err) {
                enviar("*🌸 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝚁𝙴𝙰𝚁 𝚃𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*");
                console.log(err);
                return;
            }

            setTimeout(async () => {
                let sticker = await fs.readFile(fileNameOutput);
                await susune.sendMessage(from, { sticker });

                // Eliminar archivos temporales después de enviar el sticker
                await fs.unlink(fileNameInput);
                await fs.unlink(fileNameOutput);
            }, 2000); // Espera 2 segundos antes de enviar el sticker
        });
    } catch (error) {
        console.error("Error en la creación del sticker:", error);
        enviar("*🌸 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝚁𝙴𝙰𝚁 𝚃𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁*");
    }
}
break;

case 'stickercircle': case 'scircle': {
    if (!isQuotedImage && !isImage) {
        return enviar("*🌸 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁 𝚄𝙽 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙸𝚁𝙲𝚄𝙻𝙰𝚁*");
    }

    const exec = require('child_process').exec;
    const fs = require('fs').promises;

    enviar("*🌸 𝙲𝚁𝙴𝙰𝙽𝙳𝙾 𝚃𝚄 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙸𝚁𝙲𝚄𝙻𝙰𝚁...*");

    let mediaCircleMsg = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage;
    if (!mediaCircleMsg) return enviar("*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙸𝙼𝙰𝙶𝙴𝙽*");

    let bufferCircle = await getFileBuffer(mediaCircleMsg, "image");
    let stamp = Date.now();
    let inputCircle = `./circle_${sender.split('@')[0]}_${stamp}.jpg`;
    let outputCircle = `./circle_${sender.split('@')[0]}_${stamp}.webp`;

    try {
        await fs.writeFile(inputCircle, bufferCircle);

let commandCircle = `ffmpeg -i ${inputCircle} -filter_complex "[0:v]scale=640:640[scaled];[scaled]crop=560:560:(in_w-out_w)/2:(in_h-out_h)/2[base];[base]format=rgba,split[original][alpha];[alpha]geq='lum=255*lte(pow(X-280,2)+pow(Y-280,2),pow(280,2))'[mask];[original][mask]alphamerge" -pix_fmt yuva420p -vcodec libwebp -lossless 1 -y ${outputCircle}`;

        exec(commandCircle, async (err) => {
            if (err) {
                console.log(err);
                return enviar("*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙲𝚁𝙴𝙰𝚁 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙲𝙸𝚁𝙲𝚄𝙻𝙰𝚁*");
            }

            setTimeout(async () => {
                let finalCircle = await fs.readFile(outputCircle);
                await susune.sendMessage(from, { sticker: finalCircle });

                await fs.unlink(inputCircle);
                await fs.unlink(outputCircle);
            }, 2000);
        });
    } catch (e) {
        console.error("Error creando sticker circular:", e);
        enviar("*🌸 𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙴𝙻 𝙿𝚁𝙾𝙲𝙴𝚂𝙾*");
    }
}
break;


case 's2': {
  if (!isReg) return reply('Debes estar registrado para usar este comando.');

  const texto = q || (quoted && quoted.text);
  if (!texto) return reply('Escribe o cita un texto para colocarlo en el sticker.');

  const fs = require('fs');
  const { execSync } = require('child_process');
  const Jimp = require('jimp');
  const path = './temp/s2sticker.jpg';
  const outputWebp = './temp/s2sticker.webp';

  try {
    if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

    // Leer zonas del JSON
    const zonas = JSON.parse(fs.readFileSync('./archivos/json/zonas.json'));
    
    // Obtener imágenes válidas que tengan configuración
    const images = fs.readdirSync('./archivos/fotos/')
      .filter(file => (file.endsWith('.jpg') || file.endsWith('.png')) && zonas[file]);

    if (images.length === 0) return reply('No hay imágenes válidas con configuración.');

    const selectedImage = images[Math.floor(Math.random() * images.length)];
    const zona = zonas[selectedImage];

    const image = await Jimp.read('./archivos/fotos/' + selectedImage);
    const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);

    // Ajustar texto dentro del área del cartel
    const wrapText = (text, font, maxWidth) => {
      const words = text.split(' ');
      const lines = [];
      let line = '';

      for (let word of words) {
        const testLine = line + word + ' ';
        const testWidth = Jimp.measureText(font, testLine);

        if (testWidth > maxWidth && line !== '') {
          lines.push(line.trim());
          line = word + ' ';
        } else {
          line = testLine;
        }
      }
      if (line) lines.push(line.trim());
      return lines;
    };

    const wrappedLines = wrapText(texto, font, zona.width);

    let y = zona.y;
    for (let line of wrappedLines) {
      image.print(font, zona.x, y, {
        text: line,
        alignmentX: Jimp.HORIZONTAL_ALIGN_CENTER,
        alignmentY: Jimp.VERTICAL_ALIGN_TOP
      }, zona.width, 50);
      y += 40;
    }

    await image.writeAsync(path);

    execSync(`ffmpeg -i ${path} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -compression_level 6 -q:v 60 -loop 0 -preset default -an -vsync 0 ${outputWebp}`);

    const buffer = fs.readFileSync(outputWebp);
    await susune.sendMessage(from, {
      sticker: { url: outputWebp },
      mimetype: 'image/webp'
    }, { quoted: info });

    fs.unlinkSync(path);
    fs.unlinkSync(outputWebp);
  } catch (e) {
    console.error('Error en el comando s2:', e);
    reply('Ocurrió un error al crear el sticker.');
  }
}
break;


case 'reg':
if (isVerification) return enviar('*🌸 𝙷𝙾𝙻𝙸, 𝚈𝙰 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');
if (!q.includes('.')) return enviar('*🌷 𝙷𝙾𝙻𝙰, 𝙿𝙰𝚁𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴 𝙲𝙾𝙻𝙾𝙲𝙰 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴, 𝙴𝙳𝙰𝙳, 𝙲𝙾𝙻𝙾𝚁 𝙵𝙰𝚅𝙾𝚁𝙸𝚃𝙾 𝚈 𝚃𝚄 𝙰𝙽𝙸𝙼𝙴 𝙵𝙰𝚅𝙾𝚁𝙸𝚃𝙾, 𝙰𝚂𝙸 𝙲𝙾𝙼𝙾 𝙴𝙽 𝙴𝙻 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʀᴇɢ ᴏsʜɪɴᴏ.20.ʀᴏsᴀᴅᴏ.ᴅʀᴀɢᴏɴ ʙᴀʟʟ ᴢ*');
const nombre = q.split(".")[0];
const edad = q.split(".")[1];
const color = q.split(".")[2];
const animeFavorito = q.split(".")[3];
if (nombre.length >= 100) return enviar(`*🌷 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙴𝚂 𝙼𝚄𝚈 𝙻𝙰𝚁𝙶𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙴 𝙲𝙾𝙽 𝚄𝙽𝙾 𝙼𝙰𝚂 𝙲𝙾𝚁𝚃𝙾.*`);

const celular = sender.split('@')[0];
const generarID = () => {
return Math.random().toString(36).substring(2, 22);
};
const idUsuario = generarID();
await Usuarios(sender, nombre, celular, edad, color, animeFavorito, idUsuario);
let usuario = registros.find(u => u.id === sender);
let estadoPremium = usuario.premium ? 'Sí' : 'No';

const imagenRuta = 'archivos/fotos/menu.jpeg';
await susune.sendMessage(from, {
image: { url: imagenRuta },
caption: `
· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
*🌸 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 🌸*

*👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${nombre}*
*🎂 𝙴𝙳𝙰𝙳: ${edad}*
*🎨 𝙲𝙾𝙻𝙾𝚁: ${color}*
*🎞️ 𝙰𝙽𝙸𝙼𝙴: ${animeFavorito}*
*🪙 𝙳𝙸𝙽𝙴𝚁𝙾: 10*
*💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: 0*
*📱 𝙲𝙴𝙻𝚄𝙻𝙰𝚁: ${celular}*
*🪔 𝙽𝙸𝚅𝙴𝙻: 1*
*✨ 𝙴𝚇𝙿: 0*
*🔑 𝚂𝙴𝚁𝙸𝙴: ${idUsuario}*
*⭐ 𝙿𝚁𝙴𝙼𝙸𝚄𝙼: ${estadoPremium}*
· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
*${botname}*
`,
}, { quoted: info });

break;

case 'delreg':
if (!isVerification) return enviar('*🌸 𝙷𝙾𝙻𝙸, 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');
async function eliminarUsuario(id) {
    const index = registros.findIndex(u => u.id === id);
    if (index !== -1) {
        registros.splice(index, 1); // Elimina el usuario del array
        guardarRegistros(); // Guarda el archivo actualizado
    }
}

// Esta función guarda el archivo JSON
function guardarRegistros() {
    const fs = require('fs');
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}

await eliminarUsuario(sender); // Esta función debe eliminar al usuario de la base de datos/registros



await enviar3(`
· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
*🌸 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 🌸*

*👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${sender.split('@')[0]}*

*𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾 𝙵𝚄𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾* 🌷

· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
*${botname}*
`, from, sender);

break;

case 'perfil':
if (!isVerification) return enviar('*🌸 𝙷𝙾𝙻𝙸, 𝙽𝙾 𝚃𝙴𝙽𝙴𝙼𝙾𝚂 𝚃𝚄 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙾, 𝚄𝚂𝙰 .𝚛𝚎𝚐 𝙿𝙰𝚁𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴*');

let usuarioPerfil = registros.find(u => u.id === sender);
if (!usuarioPerfil) return enviar('*🌸 𝙽𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙴 𝚃𝚄 𝙿𝙴𝚁𝙵𝙸𝙻, 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚃𝙴 𝙿𝚁𝙸𝙼𝙴𝚁𝙾.*');

const nombreUsuarioo = usuarioPerfil.nombre || 'Desconocido';
const celularUsuario = sender.split('@')[0];
const hideTag = `@${celularUsuario}`;
const dispositivo = 'Android'; // Fijo o podemos detectar si quieres
const registrado = 'Sí';
const premiumStatus = usuarioPerfil.premium ? 'Sí' : 'No';
const coins = usuarioPerfil.coins || 0;
const diamantes = usuarioPerfil.diamantes || 0;
const nivel = usuarioPerfil.nivel || 1;

const imagenPerfil = 'archivos/fotos/marca2.jpeg'; // Cambia aquí la imagen que quieras usar

await susune.sendMessage(from, {
image: { url: imagenPerfil },
caption: `
• ─────── ✾ ─────── •

*🌸 𝙿𝙴𝚁𝙵𝙸𝙻 𝙳𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 🌸*

*👤 Nombre:* ${nombreUsuarioo}
*🎭 Hidetag:* ${hideTag}
*📱 Dispositivo:* ${deviceType}
*📋 Registrado:* ${registrado}
*⭐ Premium:* ${premiumStatus}
*🪙 Dinero:* ${coins}
*💎 Diamantes:* ${diamantes}
*🪔 Nivel:* ${nivel}

• ─────── ✾ ─────── •

*${botname}*
`,
mentions: [sender]
}, { quoted: info });

break;

case 'antifake':
if(!isGroup) return enviar('💗 !𝐇𝐨𝐥𝐚!, 𝐞𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐬𝐨𝐥𝐨 𝐬𝐞 𝐮𝐬𝐚 𝐞𝐧 𝐠𝐫𝐮𝐩𝐨𝐬.')
if (!q) return enviar("*𝙷𝙾𝙻𝙸𝚂, 𝙿𝙰𝚁𝙰 𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾, 𝙲𝙾𝙻𝙾𝙲𝙰 𝚄𝙽 𝙼𝙾𝚃𝙸𝚅𝙾 𝙹𝚄𝙽𝚃𝙾 𝙰 𝚃𝚄 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ᴀɴᴛɪғᴀᴋᴇ ᴇsᴛᴏʏ ᴊᴜɢᴀɴᴅᴏ 💕*");
let antifake = [];
const antifakePath = './archivos/json/antifake.json';
if (fs.existsSync(antifakePath)) {
antifake = JSON.parse(fs.readFileSync(antifakePath));
}
const userExists = antifake.find(user => user.id === sender);
if (userExists) return enviar("*𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙺𝙴 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙰𝙲𝚃𝙸𝚅𝙾 💕*");
let miembroo = groupMembers.find(member => member.id === sender);
let userName = miembroo?.notify || miembroo?.subject || pushname; 
antifake.push({ id: sender, nombre: userName, motivo: q });
fs.writeFileSync(antifakePath, JSON.stringify(antifake, null, 2));
await susune.sendMessage(from, { 
text: `*💞 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝙽𝚃𝙸𝙵𝙰𝙺𝙴 💞*\n\n` +
`👤 *Usuario:* @${sender.split('@')[0]}\n` + 
`💖 *Motivo:* ${q}\n\n` +
`✅ *Antifake activado correctamente*\n` +
`🔔 *Cuando alguien te mencione, el bot enviará una alerta diciendo que no te molesten 💕*`,
mentions: [sender] 
});
break;

case 'cartera': {
let mencionado = info.message.extendedTextMessage?.contextInfo?.mentionedJid;
let usuario = (mencionado && mencionado.length > 0) ? mencionado[0] : sender;
let index = registros.findIndex(u => u.id === usuario);
if (index === -1) {
return enviar("*🌸 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰.𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*");
}
let coins = registros[index].coins || 0;
let diamantes = registros[index].diamantes || 0;
let nombreReal = registros[index].nombre || usuario.split('@')[0];
let nivel = registros[index].nivel || 1;
let miembro = groupMembers.find(member => member.id === usuario);
let nombreUsuario = miembro?.notify || miembro?.subject || nombreReal;
let mentions = [usuario];
let mensaje = `💰 𝐂𝐚𝐫𝐭𝐞𝐫𝐚 𝐏𝐫𝐢𝐯𝐚𝐝𝐚 💰\n\n` +
`*🏦⃟𝙱𝙰𝙽𝙲𝙾: KAKASHIBANK*\n` +
`*👤⃟𝚄𝚂𝚄𝙰𝚁𝙸𝙾: @${usuario.split('@')[0]}*\n` +
`*👑⃟𝙽𝙾𝙼𝙱𝚁𝙴: ${nombreUsuario}*\n` +
`*✨⃟𝙽𝙸𝚅𝙴𝙻: ${nivel}*\n` +
`*💸⃟𝙼𝙾𝙽𝙴𝙳𝙰𝚂: $${coins} 🪙*\n` +
`*💎⃟𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂: $${diamantes} 💎*`
susune.sendMessage(from, {
text: mensaje.trim(),
mentions: mentions
});
}
break;

case 'linkimg':
try {
  if (isQuotedImage || type === 'imageMessage') {
    const boij = isQuotedImage
      ? JSON.parse(JSON.stringify(info).replace("quotedM", "m")).message.extendedTextMessage.contextInfo.message.imageMessage
      : info.message.imageMessage;

    const fetch = require('node-fetch');
    const FormData = require('form-data');
    const fs = require('fs');
    const sizeOf = require('image-size'); // npm i image-size

    async function uploadImageToQuax(imageBuffer, expiration = "permanent") {
      const form = new FormData();
      form.append('files[]', imageBuffer, { filename: 'image.jpg' });
      form.append('expiry', expiration);
      const response = await fetch('https://qu.ax/upload.php', {
        method: 'POST',
        body: form,
      });
      const data = await response.json();
      if (data && data.success && data.files && data.files.length > 0) {
        return data.files[0].url;
      } else {
        throw new Error('*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*');
      }
    }

    const owgi = await getFileBuffer(boij, "image");

    // Tamaño y dimensiones
    const dimensions = sizeOf(owgi); // { width, height }
    const sizeInBytes = Buffer.byteLength(owgi);
    const sizeReadable = sizeInBytes >= 1048576
      ? (sizeInBytes / 1048576).toFixed(2) + ' MB'
      : (sizeInBytes / 1024).toFixed(2) + ' KB';

    // Subir imagen
    const imageUrl = await uploadImageToQuax(owgi);

    const resultado = `*🌸 𝙷𝙾𝙻𝙰 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${pushname}*\n\n` +
      `🌷 𝐄𝐧𝐥𝐚𝐜𝐞 𝐃𝐞 𝐓𝐮 𝐈𝐦𝐚𝐠𝐞𝐧 🌷\n` +
      `*🌺 𝙴𝚇𝙿𝙸𝚁𝙰𝙲𝙸𝙾𝙽: permanente*\n` +
      `*🌺 𝙻𝙸𝙽𝙺: ${imageUrl}*\n` +
      `*🌺 𝚃𝚊𝚖𝚊ñ𝚘: ${dimensions.height} px de alto x ${dimensions.width} px de ancho*\n` +
      `*🌺 𝙿𝚎𝚜𝚘: ${sizeReadable}*`;

    enviar(resultado);
  } else {
    enviar('🌸 𝙷𝙾𝙻𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝙽𝚅𝙸𝙰 𝙾 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽𝙰 𝙸𝙼𝙰𝙶𝙴𝙽');
  }
} catch (e) {
  console.log(e);
  enviar('*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*');
}
break;

case 'toimg':
if (!isQuotedSticker) {
return enviar('[❗]• 𝗠𝗔𝗥𝗤𝗨𝗘 𝗨𝗡 𝗦𝗧𝗜𝗖𝗞𝗘𝗥 •');
}
try {
const buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker');
await susune.sendMessage(from, { 
image: buff, 
caption: `[❗] *${pushname}*, 𝐀𝐪𝐮𝐢 𝐭𝐢𝐞𝐧𝐞 𝐬𝐮 𝐩𝐞𝐝𝐢𝐝𝐨` 
}, { quoted: info }).catch(e => {
console.log(e);
enviar('No se pudo convertir a imagen. Verifica que sea un sticker y no un gif ❌');
});
} catch (e) {
console.log(e);
enviar('Error al generar la imagen de tu sticker');
}
break;



//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦

case 'YT':
case 'Yt':
case 'yt':
if (!q) return enviar('*🌸 𝙴𝙽𝚅𝙸𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴, 𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴𝙻 𝚅𝙸𝙳𝙴𝙾 𝚈 𝙴𝙻 𝙰𝚁𝚃𝙸𝚂𝚃𝙰, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʏᴛ ɴɪɢʜᴛᴄᴏʀᴇ ʟɪʟʏ*');
const { exec: execc } = require('child_process');
const ytss = require('yt-search');
const pathh = require('path');
const fsss = require('fs');
async function descargarVideo(url) {
const nombreArchivo = `video_${Date.now()}.mp4`;
const rutaArchivo = pathh.join('./archivos/videos', nombreArchivo);
console.log(`🔄 Descargando video de: ${url}`);
console.log(`📁 Guardando en: ${rutaArchivo}`);
return new Promise((resolve, reject) => {
execc(`yt-dlp -f "bestvideo[ext=mp4]+bestaudio[ext=m4a]/best[ext=mp4]" -o "${rutaArchivo}" "${url}"`, 
(error, stdout, stderr) => {
if (error) {
console.error('❌ Error al descargar:', error);
return reject(error);
}
console.log('✅ Descarga completada:', rutaArchivo);
resolve(rutaArchivo);
});
});
}
async function buscarYDescargarVideo(nombre) {
try {
console.log(`🔍 Buscando: ${nombre}`);
const resultados = await ytss(nombre);
if (!resultados.videos.length) {
enviar('❌ *No se encontraron resultados.*');
return null;
}
const url = resultados.videos[0].url;
enviar(`· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n🌸 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐕𝐢𝐝𝐞𝐨 🌸\n\n*🍓 𝚃𝙸𝚃𝚄𝙻𝙾: ${resultados.videos[0].title}*\n\n⏳ *𝚂𝙴𝙰 𝙿𝙰𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙻𝙻𝙴𝚅𝙰𝚁𝙰 𝚄𝙽𝙾𝚂 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂. 🌷*`);
return await descargarVideo(url);
} catch (error) {
enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙴𝙻 𝚅𝙸𝙳𝙴𝙾*');
console.error(error);
return null;
}
}
(async () => {
let archivo;
if (q.includes('youtube.com') || q.includes('youtu.be')) {
archivo = await descargarVideo(q);
} else {
archivo = await buscarYDescargarVideo(q);
}
if (archivo && fsss.existsSync(archivo)) {
console.log('📤 Enviando información...');
const infoVideo = await ytss(q);
const anup3k = infoVideo.videos[0];
const fechaPublicacion = new Date(anup3k.uploadDate).toLocaleDateString();
const vistas = anup3k.views.toLocaleString();
await susune.sendMessage(from, {
image: { url: anup3k.thumbnail },
caption: `· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n🎥 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐄𝐱𝐢𝐭𝐨𝐬𝐚 🎥\n\n🌸 *𝙰𝚄𝚃𝙾𝚁:* ${anup3k.author.name}\n⏱️ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${anup3k.timestamp}\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${vistas}\n· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*${botname}*`,
});
console.log('✅ Información enviada correctamente');
const buffer = fsss.readFileSync(archivo);
await susune.sendMessage(from, {
video: buffer,
fileName: anup3k.title + '.mp4',
mimetype: 'video/mp4',
});
console.log('✅ Video enviado correctamente');
setTimeout(() => {
if (fsss.existsSync(archivo)) {
fsss.unlinkSync(archivo);
console.log('🗑️ Archivo eliminado después de 30 segundos:', archivo);
}
}, 30000); 
} else {
console.error('⚠️ No se encontró el archivo de video.');
}
})();
break;

case 'apk': {
if (!q) return reply(`💗 𝐄𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞 𝐥𝐚 𝐚𝐩𝐤, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨: *.ᴀᴘᴋ ᴘᴏᴜ*`);
enviar(`🔎 𝐄𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨 𝐞𝐬𝐭𝐨𝐲 𝐛𝐮𝐬𝐜𝐚𝐧𝐝𝐨 𝐥𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐜𝐢𝐨́𝐧: *${q}*`);
let apkData = null;
try {
let res = await axios.get(`https://api.dorratz.com/v2/apk-dl?text=${encodeURIComponent(q)}`);
if (res.data && res.data.name) {
apkData = {
name: res.data.name,
icon: res.data.icon,
size: res.data.size,
package: res.data.package,
lastUpdate: res.data.lastUpdate,
dllink: res.data.dllink
};
}
} catch (e) {
console.log('[Dorrat API] Falló:', e.message);
}
if (!apkData) {
try {
const searchRes = await axios.get(`https://apkpure.com/api/v2/search?q=${encodeURIComponent(q)}`);
const results = searchRes.data?.results;
if (results && results.length > 0) {
const id = results[0].id;
const dlRes = await axios.get(`https://apkpure.com/api/v2/download?id=${id}`);
apkData = {
name: dlRes.data.name,
icon: dlRes.data.icon,
size: dlRes.data.size,
package: dlRes.data.package,
lastUpdate: dlRes.data.lastup,
dllink: dlRes.data.dllink
};
}
} catch (e) {
console.log('[APKPure API] Falló:', e.message);
}
}
if (!apkData) return reply('💗 𝐍𝐨 𝐬𝐞 𝐞𝐧𝐜𝐨𝐧𝐭𝐫𝐨 𝐞𝐬𝐚 𝐚𝐩𝐥𝐢𝐜𝐚𝐜𝐢𝐨́𝐧.');
const texto = `🎀 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐝𝐚 🎀
    
🌸 𝑵𝒐𝒎𝒃𝒓𝒆: ${apkData.name}
🌸 𝑻𝒂𝒎𝒂𝒏̃𝒐:  ${apkData.size}
🌸 𝑷𝒂𝒒𝒖𝒆𝒕𝒆: ${apkData.package}
🌸 𝑼𝒍𝒕𝒊𝒎𝒂 𝑽𝒆𝒓𝒔𝒊𝒐𝒏: ${apkData.lastUpdate}
   
⏳ 𝑺𝒆 𝒆𝒔𝒕𝒂 𝒆𝒏𝒗𝒊𝒂𝒏𝒅𝒐 𝒕𝒖 𝒂𝒑𝒍𝒊𝒄𝒂𝒄𝒊𝒐𝒏, 𝒔𝒆𝒂 𝒑𝒂𝒄𝒊𝒆𝒏𝒕𝒆.`;
await susune.sendMessage(from, { image: { url: apkData.icon }, caption: texto }, { quoted: info });
if (apkData.size.includes('GB') || parseFloat(apkData.size.replace(' MB', '')) > 999) {
return reply('⚠️ 𝐄𝐥 𝐚𝐩𝐤 𝐩𝐞𝐬𝐚 𝐦𝐚𝐬 𝐝𝐞 1𝐆𝐁');
}
await susune.sendMessage(from, {
document: { url: apkData.dllink },
mimetype: 'application/vnd.android.package-archive',
fileName: `${apkData.name}.apk`
}, { quoted: info });
}
break;

case 'play':
case 'Play':
case 'PLAY':
if (!q) return enviar('*🌸 𝙴𝙽𝚅𝙸𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴, 𝙾 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝙻𝙰 𝙼𝚄𝚂𝙸𝙲𝙰 𝚈 𝙴𝙻 𝙰𝚁𝚃𝙸𝚂𝚃𝙰, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ᴘʟᴀʏ ɴɪɢʜᴛᴄᴏʀᴇ ʟɪʟʏ*');
const { exec } = require('child_process');
const yts = require('yt-search');
const path = require('path');
const fssss = require('fs');
async function descargarAudio(url) {
const nombreArchivo = `audio_${Date.now()}.mp3`;
const rutaArchivo = path.join('./archivos/audios', nombreArchivo);
console.log(`🔄 Descargando audio de: ${url}`);
console.log(`📁 Guardando en: ${rutaArchivo}`);
return new Promise((resolve, reject) => {
exec(`yt-dlp -f bestaudio --extract-audio --audio-format mp3 -o "${rutaArchivo}" "${url}"`, (error, stdout, stderr) => {
if (error) {
console.error('❌ Error al descargar:', error);
return reject(error);
}
console.log('✅ Descarga completada:', rutaArchivo);
resolve(rutaArchivo);
});
});
}
async function buscarYDescargar(nombre) {
try {
console.log(`🔍 Buscando: ${nombre}`);
const resultados = await yts(nombre);
if (!resultados.videos.length) {
enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙻𝙰 𝙼𝚄𝚂𝙸𝙲𝙰*');
return null;
}
const url = resultados.videos[0].url;
enviar(`· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n🌸 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚𝐧𝐝𝐨 𝐌𝐮𝐬𝐢𝐜𝐚 🌸\n\n*🍓 𝚃𝙸𝚃𝚄𝙻𝙾: ${resultados.videos[0].title}*\n\n⏳ *𝚂𝙴𝙰 𝙿𝙰𝙲𝙸𝙴𝙽𝚃𝙴 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰 𝙻𝙻𝙴𝚅𝙰𝚁𝙰 𝚄𝙽𝙾𝚂 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂. 🌷*`);
return await descargarAudio(url);
} catch (error) {
enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝚁 𝙻𝙰 𝙼𝚄𝚂𝙸𝙲𝙰*');
console.error(error);
return null;
}
}
(async () => {
let archivo;
if (q.includes('youtube.com') || q.includes('youtu.be')) {
archivo = await descargarAudio(q);
} else {
archivo = await buscarYDescargar(q);
}
if (archivo && fssss.existsSync(archivo)) {
console.log('📤 Enviando información...');
const infoVideo = await yts(q);
const anup3k = infoVideo.videos[0];
const fechaPublicacion = new Date(anup3k.uploadDate).toLocaleDateString();
const vistas = anup3k.views.toLocaleString();
await susune.sendMessage(from, {
image: { url: anup3k.thumbnail },
caption: `· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n🎶 𝐃𝐞𝐬𝐜𝐚𝐫𝐠𝐚 𝐄𝐱𝐢𝐭𝐨𝐬𝐚 🎶\n\n🌸 *𝙰𝚄𝚃𝙾𝚁:* ${anup3k.author.name}\n⏱️ *𝙳𝚄𝚁𝙰𝙲𝙸𝙾𝙽:* ${anup3k.timestamp}\n👀 *𝚅𝙸𝚂𝚃𝙰𝚂:* ${vistas}\n· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*${botname}*`,
});
console.log('✅ Información enviada correctamente');
const buffer = fssss.readFileSync(archivo);
await susune.sendMessage(from, {
audio: buffer,
fileName: anup3k.title + '.mp3',
mimetype: 'audio/mp4',
ptt: true,
});
console.log('✅ Audio enviado correctamente');
setTimeout(() => {
if (fssss.existsSync(archivo)) {
fssss.unlinkSync(archivo);
console.log('🗑️ Archivo eliminado después de 30 segundos:', archivo);
}
}, 30000);
} else {
console.error('⚠️ No se encontró el archivo de audio.');
}
})();
break;

case 'imagen': {
  let partes = q.trim().split(' ');
  let cantidad = 1;
  let textoBusqueda = q;

  if (!isNaN(partes[0])) {
    cantidad = Math.min(parseInt(partes[0]), 10);
    textoBusqueda = partes.slice(1).join(' ');
  }

  if (!textoBusqueda) {
    console.log('⚠️ No se ingresó un término de búsqueda.');
    return enviar('❌ *Debes escribir qué imagen deseas buscar. Ejemplo: .imagen 5 Naruto*');
  }

  console.log(`🔍 Buscando imágenes para: ${textoBusqueda} (cantidad: ${cantidad})`);

  const buscadores = [
    googleImages,
    duckDuckGoImages,
    braveImages,
    yandexImages,
    bingImages,
    qwantImages,
    yahooImages,
    ecosiaImages
  ];

  let linksTotales = [];

  for (let buscador of buscadores) {
    try {
      const resultados = await buscador(textoBusqueda);
      if (Array.isArray(resultados)) {
        for (let img of resultados) {
          if (!linksTotales.includes(img)) {
            linksTotales.push(img);
          }
          if (linksTotales.length >= cantidad) break;
        }
      }
      if (linksTotales.length >= cantidad) break;
    } catch (e) {
      console.log(`❌ Error con el buscador: ${buscador.name} - ${e}`);
      // Continúa con el siguiente buscador si ocurre un error
    }
  }

  if (linksTotales.length === 0) {
    console.log('❌ No se encontraron imágenes.');
    return enviar('❌ *No se pudo encontrar ninguna imagen.*');
  }

  let seleccionadas = linksTotales.sort(() => 0.5 - Math.random()).slice(0, cantidad);

  for (let i = 0; i < seleccionadas.length; i++) {
    const url = seleccionadas[i];
    let mensaje = `📷 Imagen ${i + 1} de ${seleccionadas.length}\n\n Imagen: *${textoBusqueda}*`;
    console.log(`📤 Enviando imagen ${i + 1}: ${url}`);
    try {
      await susune.sendMessage(from, { image: { url }, caption: mensaje }, { quoted: info });
    } catch (err) {
      console.log(`❌ Error enviando imagen ${i + 1}: ${err}`);
    }
    await new Promise(res => setTimeout(res, 1500)); // Tiempo de espera entre imágenes
  }

  // FUNCIONES DE BÚSQUEDA CON MULTIPLES RESULTADOS:

  async function googleImages(query) {
    try {
      const url = `https://www.google.com/search?tbm=isch&q=${encodeURIComponent(query)}`;
      const response = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await response.text();
      let links = [...html.matchAll(/"https:\/\/[^"]+\.(jpg|jpeg|png|webp)"/g)].map(m => m[0].replace(/"/g, ''));
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Google] Error: ${e}`);
      return [];
    }
  }

  async function duckDuckGoImages(query) {
    try {
      const res1 = await fetch(`https://duckduckgo.com/?q=${encodeURIComponent(query)}&iax=images&ia=images`, {
        headers: { 'User-Agent': 'Mozilla/5.0' }
      });
      const html = await res1.text();
      const vqdMatch = html.match(/vqd='([\d-]+)'/);
      if (!vqdMatch) return [];
      const vqd = vqdMatch[1];
      const api = `https://duckduckgo.com/i.js?l=us-en&o=json&q=${encodeURIComponent(query)}&vqd=${vqd}`;
      const res2 = await fetch(api, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const json = await res2.json();
      return json.results?.map(r => r.image).filter(Boolean) || [];
    } catch (e) {
      console.log(`❌ [DuckDuckGo] Error: ${e}`);
      return [];
    }
  }

  async function braveImages(query) {
    try {
      const url = `https://search.brave.com/images?q=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/<img[^>]+(?:src|data-src)="(https:\/\/[^"]+\.(jpg|jpeg|png|webp))"/g)].map(m => m[1]);
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Brave] Error: ${e}`);
      return [];
    }
  }

  async function yandexImages(query) {
    try {
      const url = `https://yandex.com/images/search?text=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/"preview":"(https:\/\/[^"]+\.(jpg|jpeg|png|webp))"/g)].map(m => m[1].replace(/\\u002F/g, '/'));
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Yandex] Error: ${e}`);
      return [];
    }
  }

  async function bingImages(query) {
    try {
      const url = `https://www.bing.com/images/search?q=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/murl&quot;:&quot;(https:\/\/[^"]+\.(jpg|jpeg|png|webp))/g)].map(m => m[1]);
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Bing] Error: ${e}`);
      return [];
    }
  }

  async function qwantImages(query) {
    try {
      const url = `https://www.qwant.com/?q=${encodeURIComponent(query)}&t=images`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/"mediaUrl":"(https:\/\/[^"]+\.(jpg|jpeg|png|webp))"/g)].map(m => m[1].replace(/\\u002F/g, '/'));
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Qwant] Error: ${e}`);
      return [];
    }
  }

  async function yahooImages(query) {
    try {
      const url = `https://images.search.yahoo.com/search/images?p=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/imgurl=(https:\/\/[^&]+?\.(jpg|jpeg|png|webp))/g)].map(m => decodeURIComponent(m[1]));
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Yahoo] Error: ${e}`);
      return [];
    }
  }

  async function ecosiaImages(query) {
    try {
      const url = `https://www.ecosia.org/images?q=${encodeURIComponent(query)}`;
      const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
      const html = await res.text();
      let links = [...html.matchAll(/"url":"(https:\/\/[^"]+\.(jpg|jpeg|png|webp))"/g)].map(m => m[1].replace(/\\u002F/g, '/'));
      return [...new Set(links)];
    } catch (e) {
      console.log(`❌ [Ecosia] Error: ${e}`);
      return [];
    }
  }

} break;

case 'pinterest':
  if (!q) return enviar('🌸 Escribe algo para buscar imágenes.');

  const axiosk = require('axios');
  const cheerio = require('cheerio');
  const fss = require('fs');
  const os = require('os');

  const buscarGoogleImagenes = async (query) => {
    const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`;
    const { data } = await axiosk.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      },
    });

    const $ = cheerio.load(data);
    const imagenes = [];

    $('img').each((i, el) => {
      const src = $(el).attr('src');
      if (src && src.startsWith('http')) imagenes.push(src);
    });

    return imagenes;
  };

  try {
    const imagenes = await buscarGoogleImagenes(`${q} site:pinterest.com`);
    if (!imagenes.length) return enviar('❌ No se encontraron imágenes.');

    const imagenAleatoria = imagenes[Math.floor(Math.random() * imagenes.length)];
    const response = await axiosk.get(imagenAleatoria, { responseType: 'arraybuffer' });

    let nombreImagen = 'imagen.jpg';
    const tempPath = `${os.tmpdir()}/${nombreImagen}`;
    fss.writeFileSync(tempPath, response.data);

    let mensaje = `✨ *Imagen encontrada* ✨\n📌 *Búsqueda:* ${q}\n🌐 *Enlace:* ${imagenAleatoria}`;
    await susune.sendMessage(from, { image: fss.readFileSync(tempPath), caption: mensaje }, { quoted: info });
    fss.unlinkSync(tempPath);

  } catch (error) {
    console.log('[ERROR Buscando imagen Google]', error);
    enviar('❌ Error al buscar o descargar la imagen.');
  }
  break;

case 'neko':{
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*")
waifuddd = await axios.get('https://api.waifu.pics/sfw/neko')
 var wbuttsssr = [
{buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
]
let buttonMessagessfgr = {
image: {url:waifuddd.data.url},
caption: '*𝙿𝙴𝙳𝙸𝙳𝙾: Neko 😍*',
headerType: 2
}     
await susune.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
return('Error')
})
}
break

case 'waifu':{
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*")
waifuddd = await axios.get('https://api.waifu.pics/sfw/waifu')
var wbuttsssr = [
{buttonId: `-loli`, buttonText: {displayText: `>>`}, type: 1},
]
let buttonMessagessfgr = {
image: {url:waifuddd.data.url},
caption: '*𝙿𝙴𝙳𝙸𝙳𝙾: Waifu 😍*',
headerType: 2
}
await susune.sendMessage(from, buttonMessagessfgr, { quoted:info }).catch(err => {
return('Error')
})
}
break

case 'plaq': {
  if (args.length < 1) return enviar(`🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝚃𝚄 𝙽𝙾𝙼𝙱𝚁𝙴\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .plaq Oshino`)

  const texto = args.join(" ")
  if (texto.length > 15) return enviar('*🌸 𝙼𝙰́𝚇𝙸𝙼𝙾 15 𝙲𝙰𝚁𝙰𝙲𝚃𝙴𝚁𝙴𝚂*')

  const opciones = [
    {
      url: "https://raptibef.sirv.com/images%20(3).jpeg",
      x: "19%", //izq < - > der
      y: "0%", //0%A - 100% Abajo
      size: 45, //tamaño txt
      gravity: "center" //[center C], [north A], [South Ab], [West Izq], [east De]
    },
    {
      url: "https://umethroo.sirv.com/peito1.jpg",
      x: "0%",
      y: "28%",
      size: 18,
      gravity: "north"
    },
    {
      url: "https://umethroo.sirv.com/BUNDA1.jpg",
      x: "25%",
      y: "20%",
      size: 30,
      gravity: "center"
    }
  ]

  const elegido = opciones[Math.floor(Math.random() * opciones.length)]

  const url = `${elegido.url}?text.0.text=${encodeURIComponent(texto)}&text.0.position.gravity=${elegido.gravity}&text.0.position.x=${elegido.x}&text.0.position.y=${elegido.y}&text.0.size=${elegido.size}&text.0.color=000000&text.0.opacity=80`

  await susune.sendMessage(from, {
    image: { url },
    caption: '*🌷 𝙸𝙼𝙰𝙶𝙴𝙽 𝙲𝚁𝙴𝙰𝙳𝙰 🌷*'
  })

  await susune.sendMessage(from, { react: { text: `✨`, key: info.key } })
}
break
    
case 'loli': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const loli = [
"https://i.pinimg.com/736x/cf/7d/74/cf7d741fecb5e2c6abe1b9b237b30b04.jpg",
"https://i.pinimg.com/736x/b5/b2/62/b5b2620e392e74139487c209c3b03dc2.jpg",
"https://i.pinimg.com/736x/b6/b4/0b/b6b40b6ae0e0123adc040d16d4b05348.jpg",
"https://i.pinimg.com/originals/e3/30/66/e33066f3cdbddd7ba3e37d2d576e8b66.jpg",
"https://i.pinimg.com/474x/7a/72/eb/7a72ebd743f1aa0df55965e6856d02c6.jpg",
"https://i.pinimg.com/originals/9b/2d/65/9b2d652e8f9742d6e6767a5eb3424df6.png",
"https://i.pinimg.com/originals/ee/c1/d8/eec1d883e44ef0a61d11fc6fe3c6d827.jpg",
"https://i.pinimg.com/736x/d0/2f/49/d02f4926e0f7b32685fcce4203752532.jpg",
"https://i.pinimg.com/564x/b4/3d/64/b43d641d0a624008996a01bf64f411d1.jpg",
"https://i.pinimg.com/236x/a4/ad/52/a4ad52b80ea5538d0cc743c95ecca40f.jpg",
"https://i.pinimg.com/originals/de/d4/61/ded461956b110d610f1190dcae5cd59f.jpg",
"https://i.pinimg.com/564x/8e/5c/f0/8e5cf0a7026d0a8b2e94693d5bcf9321.jpg",
"https://i.pinimg.com/originals/b5/02/bc/b502bc59d17ae464560202d1e000a11a.jpg",
"https://i.pinimg.com/originals/49/6e/4b/496e4b7de7edaa6e03c45250f4f516fc.jpg",
"https://i.pinimg.com/originals/4e/dd/43/4edd430da39fb3f969865fb377878879.jpg",
"https://i.pinimg.com/originals/82/8c/5c/828c5c9543010265c82cb3e9a7e22539.jpg",
"https://i.pinimg.com/236x/2d/87/0f/2d870ffe100b76810577f90fe8f4c121.jpg",
"https://i.pinimg.com/564x/c7/9c/69/c79c6998a87196995b8370bc45344ffd.jpg",
"https://i.pinimg.com/474x/ca/5f/70/ca5f708da44d1e5b74d604f91d2940b9.jpg",
"https://i.pinimg.com/originals/3c/4f/fb/3c4ffbb99fda42f0cb0bd8a5a8407298.jpg",
"https://i.pinimg.com/originals/c6/73/13/c67313758a2eda2cb063c419b20c4065.jpg",
"https://i.pinimg.com/736x/37/74/13/3774139f776a42d59d28f56a783fa3dc.jpg",
"https://i.pinimg.com/736x/b6/1e/2d/b61e2d7cdd166b63c0e0f29a90ccdca2.jpg",
"https://i.pinimg.com/736x/c9/14/e6/c914e6d3e52c218348a2e0b9581a5d9a.jpg",
"https://i.pinimg.com/originals/7d/cd/4e/7dcd4eedebe7da3d4e9567ede11439e8.jpg",
"https://i.pinimg.com/736x/30/3a/db/303adb62a2e5fe179f698ff992520420.jpg",
"https://i.pinimg.com/736x/db/86/c6/db86c635ac3ae10373ff460eea4ec7fe.jpg",
"https://i.pinimg.com/564x/aa/d0/89/aad089b60695808ef7f3d86550907410.jpg",
"https://i.pinimg.com/736x/d9/fb/a8/d9fba8e7ae331cbe83bd0dbb8697e15f.jpg",
"https://i.pinimg.com/originals/05/58/b4/0558b44e6fb2afaaa22db18adcbc5f30.jpg",
"https://i.pinimg.com/736x/97/5c/dd/975cdd87fe34a5832f07b8e17d5edd1d.jpg",
"https://i.pinimg.com/originals/f0/46/e0/f046e0147179103d0d6c42bb0a77e8e6.png",
"https://i.pinimg.com/originals/9a/76/8b/9a768b08d31d07e30db78ee24be8ea62.jpg",
"https://i.pinimg.com/originals/42/ca/20/42ca20ce567b97ac89eec4e7ed79f1e1.png",
"https://i.pinimg.com/236x/37/a7/33/37a7333ff01f4691a23fbaee1abffb58.jpg",
"https://i.pinimg.com/736x/06/4a/7f/064a7ff14a04fd8bb624e075568213ba.jpg",
"https://i.pinimg.com/originals/7c/a0/66/7ca0669c73078cad874e27e7e20e2d14.jpg",
"https://i.pinimg.com/originals/6f/1b/3f/6f1b3fa3dcde574df7836d2e8a295a9f.jpg",
"https://i.pinimg.com/originals/bd/43/d1/bd43d1beba3c9888707ca91d0ac8ed85.png",
"https://i.pinimg.com/474x/62/65/a3/6265a32d6e32fcfd0231e1a1ada10016.jpg",
"https://i.pinimg.com/originals/67/e0/87/67e0879eac574ea3290ecbde629adb37.jpg",
"https://i.pinimg.com/originals/a5/bb/d5/a5bbd57f5b1b884f27aff0890de43216.jpg",
"https://i.pinimg.com/564x/9a/36/94/9a3694a6bd14e2294706b619b7879d41.jpg",
"https://i.pinimg.com/736x/f6/71/7d/f6717d0dffda72a01a51b8d437e05eba.jpg",
"https://i.pinimg.com/originals/9f/4c/50/9f4c508e6ff5f7a6f790980239a18497.png",
"https://i.pinimg.com/originals/1e/25/7f/1e257fd78c54bf3de6129d8ad38d39b6.png",
"https://i.pinimg.com/originals/13/c5/77/13c57739ad0cdc60fc8ff065f00ee9aa.png",
"https://i.pinimg.com/originals/c9/5e/03/c95e038b17d47a05289b1e951817fd04.jpg",
"https://i.pinimg.com/originals/82/e3/59/82e359ea27b9acf90359f6a2234af06d.jpg",
"https://i.pinimg.com/originals/8d/71/9d/8d719d260e8bb1ef1ac8c2db6f9ca301.jpg",
"https://i.pinimg.com/736x/72/f4/eb/72f4eb5b28e89035c10007125d67e7c3.jpg",
"https://i.pinimg.com/originals/b4/fe/35/b4fe35474c76728474d2ef6d92493a7e.jpg",
"https://i.pinimg.com/originals/b3/1b/50/b31b50676592389319594e04ab1cc54a.jpg",
"https://i.pinimg.com/originals/41/72/a3/4172a3f2212bd8fb33b12a39e1e5bcde.jpg",
"https://i.pinimg.com/originals/15/53/e3/1553e31681b77be72dd4dfe34e7ef5ff.jpg",
"https://i.pinimg.com/originals/4a/c6/64/4ac66497c0ef2ad7788be3042e45a418.jpg",
"https://i.pinimg.com/originals/ab/ff/e7/abffe7475bab7d1a91d2f45742f7753b.jpg",
"https://i.pinimg.com/474x/12/30/23/123023de1c90d7391356aa291226b3df.jpg",
"https://i.pinimg.com/originals/a3/eb/51/a3eb51e91236feeb47b6a192bc501edc.jpg",
"https://i.pinimg.com/originals/f0/7a/3e/f07a3e338ad35cad89254f81f430793a.jpg",
"https://i.pinimg.com/originals/52/c9/d1/52c9d1662b9980ea5828c15c6f2f40bc.jpg",
"https://i.pinimg.com/originals/e6/35/f0/e635f0a968870cfa1f61fe7c54294ebe.jpg",
"https://i.pinimg.com/originals/e1/58/5b/e1585bda44f7c2f53651188438883eca.jpg",
"https://i.pinimg.com/736x/07/1e/93/071e93d9e922000826e5b97c0125f3f3.jpg",
"https://i.pinimg.com/originals/75/a6/6a/75a66aa75bbbc5943de0982b28ce3a7d.png",
"https://i.pinimg.com/originals/81/c2/68/81c268fe66221cf4262b8596acce22bd.jpg",
"https://i.pinimg.com/originals/b9/f8/8c/b9f88c6b29df1bb69704164f9a1f71f0.jpg",
"https://i.pinimg.com/736x/bb/e4/9b/bbe49bc932cb327ebf32a4f09099a3f5.jpg",
"https://i.pinimg.com/originals/82/3d/c5/823dc5924e67e90e2c18f9388667f83d.jpg",
"https://i.pinimg.com/236x/75/d6/f4/75d6f4c8773e43d190597ce4fba88d08.jpg",
"https://i.pinimg.com/236x/ef/46/6b/ef466bdbb29a3b441afeb795f2e54c9a.jpg",
"https://i.pinimg.com/564x/8e/44/88/8e448838113866ee507bf57d4ebebedd.jpg",
"https://i.pinimg.com/originals/1f/f8/d7/1ff8d799952c720cb7e78aa058ac41f7.jpg",
"https://i.pinimg.com/originals/83/de/b7/83deb7d5108736a3703a21fbb574daa6.jpg",
"https://i.pinimg.com/originals/6a/ae/04/6aae043bd88448a6302ae0322053faee.jpg",
"https://i.pinimg.com/originals/4e/0b/62/4e0b62b3d42e3f2b4b021ebc60b12023.jpg",
"https://i.pinimg.com/originals/e3/55/3c/e3553cde950d823a5862b301df9adc29.png",
"https://i.pinimg.com/originals/53/a2/79/53a279fb4a12b715beee319a0c1343d6.png",
"https://i.pinimg.com/originals/4a/3d/01/4a3d0165a5d1a1ef2577a09057377184.jpg",
"https://i.pinimg.com/originals/df/aa/2c/dfaa2cb28ab4353732a2dfe2c20932eb.jpg",
"https://i.pinimg.com/564x/2e/3a/6c/2e3a6cd9e819e888d38cf70d0a117dbf.jpg",
"https://i.pinimg.com/originals/c4/32/7d/c4327df2c6d37f8426d93d352c48bd99.png",
"https://i.pinimg.com/originals/54/35/d6/5435d61e1811e8ae1f364095c3eb32ad.jpg",
"https://i.pinimg.com/736x/42/2d/05/422d05e07268257dbf0602f8417a16a1.jpg",
"https://i.pinimg.com/236x/f3/05/ce/f305ce7aa1e8622cb6634dea461a278a.jpg",
"https://i.pinimg.com/originals/e3/49/94/e34994b4aeec15a025cf95b622e286f8.png",
"https://i.pinimg.com/originals/30/1d/27/301d27cd014867f80c851877fa3a8bcc.jpg",
"https://i.pinimg.com/originals/cf/bb/4a/cfbb4a669cadaab18b19f5522722f3cb.jpg",
"https://i.pinimg.com/originals/cb/b2/0b/cbb20bf3a92499982daa0d1059d17790.jpg",
"https://i.pinimg.com/474x/fe/aa/22/feaa22b7f776fc988fb4ccbf2c539549.jpg",
"https://i.pinimg.com/originals/c9/ea/f7/c9eaf78967ed514f730e6d161b9ee1f9.png",
"https://i.pinimg.com/736x/26/ba/79/26ba79102b971a2da11349d7fd84fdc1.jpg",
"https://i.pinimg.com/736x/72/2c/9b/722c9bb59f65d1d3148f1b751c8ca7d5.jpg",
"https://i.pinimg.com/736x/6c/f3/04/6cf3041ebf6a8f7e4836c98837ea9609.jpg",
"https://i.pinimg.com/736x/86/80/77/8680778b298641c65d81dd0d1c0ee280.jpg",
"https://i.pinimg.com/originals/25/24/22/2524225fc756bc17f98f26d50ef342fa.jpg",
"https://i.pinimg.com/280x280_RS/dc/6e/53/dc6e53b48dd3de659bd43257056147a6.jpg",
"https://i.pinimg.com/736x/73/e0/fb/73e0fb7a2f1ab8a7216f076da3574d0f.jpg",
"https://i.pinimg.com/originals/d7/a4/ac/d7a4ac159dfac1fa0ac5b0d9114a025a.jpg",
"https://i.pinimg.com/originals/cd/ef/fc/cdeffc0bf155fe2c8c63561b437c6864.jpg"
];
const aleatorio = Math.floor(Math.random() * loli.length);
const imagenSeleccionada = loli[aleatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Loli 🌸*" });
}
break;

case 'cosplay': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const cosplay = [
    "https://i.pinimg.com/originals/13/8f/a9/138fa9fab411166bb8c5523bf710ff42.jpg",
    "https://i.pinimg.com/564x/c3/11/9a/c3119aef29726b78b9f0509aa40ccb3b.jpg",
    "https://i.pinimg.com/originals/18/05/40/18054035c2adc989580043b4391e20af.jpg",
    "https://i.pinimg.com/736x/7c/0a/4b/7c0a4bd43596226b6311b8aae2b02408.jpg",
    "https://i.pinimg.com/originals/3d/fe/1d/3dfe1d00cff5b517d4eb56e5297abae9.jpg",
    "https://i.pinimg.com/originals/77/dd/ef/77ddefdd397d0730db97d848781e4df7.jpg",
    "https://i.pinimg.com/736x/43/d9/7d/43d97d69e6552e80da086cd91557c826.jpg",
    "https://i.pinimg.com/originals/e5/f2/86/e5f286ded660f38e8f4db73c8dfafba8.jpg",
    "https://i.pinimg.com/474x/9f/6f/71/9f6f7189691c533cd88ef656ce23bcbb.jpg",
    "https://i.pinimg.com/736x/0d/b8/44/0db844fa29b995dd699bfb9172fad779.jpg",
    "https://i.pinimg.com/736x/41/c3/49/41c349749124411f4b4c0b928eb46207.jpg",
    "https://i.pinimg.com/originals/c6/f7/bf/c6f7bfb44f0c964104ca36c8ee388f71.jpg",
    "https://i.pinimg.com/736x/1e/c5/c3/1ec5c36b3dfa5f1bef5847def89f8df6.jpg",
    "https://i.pinimg.com/originals/76/b6/1a/76b61aebdbc05551c9d8714014d7a30d.jpg",
    "https://i.pinimg.com/originals/3a/3e/fc/3a3efc8f03eb6122b0e04841f4177c2c.jpg",
    "https://i.pinimg.com/originals/77/ae/d7/77aed75e4e9f6bf317f8ca9e872d172a.jpg",
    "https://i.pinimg.com/originals/0d/d5/02/0dd5028b7f3e2e660b78aadb5ee1ecee.jpg",
    "https://i.pinimg.com/474x/9b/b2/d7/9bb2d7e9ca23a61c49c3a9428d6ccb3e.jpg",
    "https://i.pinimg.com/236x/c8/23/40/c82340db05d9ef61411a9d5837eeb2a3.jpg",
    "https://i.pinimg.com/736x/3c/2a/6b/3c2a6b131b6d1377ca31b1cee9eb5e5d.jpg",
    "https://i.pinimg.com/originals/cf/3c/2b/cf3c2bf2ce5ae2555dda6cadf11a67a7.jpg",
    "https://i.pinimg.com/236x/c3/16/e5/c316e5eb1367be33993d2266cc839062.jpg",
    "https://i.pinimg.com/originals/2c/8f/4b/2c8f4bf86a5b05df761cfd0244d37b4d.jpg",
    "https://i.pinimg.com/736x/b4/83/04/b48304a92e85c4eba37b82fdd5d08434.jpg",
    "https://i.pinimg.com/originals/75/b3/99/75b399a50c4ac54e49261dd6e0f81a5b.jpg",
    "https://i.pinimg.com/originals/dd/02/c5/dd02c512af2a70a9840ffab06eb74f4e.jpg",
    "https://i.pinimg.com/originals/53/0a/6d/530a6d47fa85f639587e0c7b54c4457d.jpg",
    "https://i.pinimg.com/originals/1c/eb/aa/1cebaa84d93f590f15933e78efc94f4b.jpg",
    "https://i.pinimg.com/736x/de/e9/68/dee968195b668d1bfd021cedc79cd5ab.jpg",
    "https://i.pinimg.com/originals/20/d9/57/20d957c9ad8d0691768a8968152a311d.jpg",
    "https://i.pinimg.com/originals/7a/f7/7e/7af77ef00a5057a98aedbf86450317f9.jpg",
    "https://i.pinimg.com/originals/25/41/a9/2541a9472e1378998cf5ac0dfcdc82f5.jpg",
    "https://i.pinimg.com/236x/9a/0c/fb/9a0cfbdd161d09e8c200ee5cebbcaac1--male-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/564x/79/56/be/7956be00b52b5484c161a50a2ed0e566.jpg",
    "https://i.pinimg.com/236x/21/63/f9/2163f9e0d59f7d10ba237131bc1e6162--cool-cosplay-anime-cosplay.jpg",
    "https://i.pinimg.com/originals/ea/d1/0d/ead10da121a27b4d1801def2505295a5.png",
    "https://i.pinimg.com/564x/6e/15/2b/6e152b90f638d955371cffe615f685fc.jpg",
    "https://i.pinimg.com/originals/25/ef/0d/25ef0d8b101b555d34fc654d3bc8453d.jpg",
    "https://i.pinimg.com/originals/37/5c/55/375c55403d41d13316e6479f7ccbcc8c.jpg",
    "https://i.pinimg.com/474x/7c/1a/0c/7c1a0cf9af72ee41c408e40f36eafd33.jpg",
    "https://i.pinimg.com/originals/cc/b5/a8/ccb5a867547d92b7c9e399e4d71ae2c8.png",
    "https://i.pinimg.com/474x/b4/20/e5/b420e54c70e5ce1f112d400e686a0a0f.jpg",
    "https://i.pinimg.com/originals/a0/6f/c5/a06fc51bffd216199727461115ca6dd0.png",
    "https://i.pinimg.com/originals/47/10/41/471041b7a2d7110f826b4fffda87846a.jpg",
    "https://i.pinimg.com/originals/a4/18/92/a418925f40047be5f00a0c0d3c5dfcb9.jpg",
    "https://i.pinimg.com/474x/6c/a5/d8/6ca5d8d601f19d6f21d6d649e8914489--male-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/79/bf/02/79bf0236aaff04bdf052673bfa4d4581.jpg",
    "https://i.pinimg.com/originals/c9/ae/4d/c9ae4d450bbbf2c116d40fcb6644c113.jpg",
    "https://i.pinimg.com/564x/b5/12/46/b5124604bd0cb22c7c384972cb6703af.jpg",
    "https://i.pinimg.com/originals/4f/a4/e5/4fa4e565931db75327a69bd40d399bce.jpg",
    "https://i.pinimg.com/originals/b7/fc/69/b7fc69457cb0bf3fa13b2eb6f66acdc7.jpg",
    "https://i.pinimg.com/originals/98/25/96/98259611cf99d8d94e10477210bfe168.jpg",
    "https://i.pinimg.com/originals/b9/c9/dd/b9c9dd7caa5b471540cde0cab95f0282.jpg",
    "https://i.pinimg.com/736x/82/c9/bd/82c9bd503fbbd8ed8b9b4f385b2ff0c2.jpg",
    "https://i.pinimg.com/originals/f0/36/64/f0366478ffda51f117c87d70cc2611f7.jpg",
    "https://i.pinimg.com/originals/84/d9/71/84d9715428eefcd3224a2d43d0a55328.jpg",
    "https://i.pinimg.com/736x/90/aa/7c/90aa7c57a6ce841f63df0bc25717b6ca.jpg",
    "https://i.pinimg.com/736x/1d/73/b3/1d73b3a0fd9771d5a06e0b1c082b517b.jpg",
    "http://fc02.deviantart.net/fs71/f/2012/053/4/b/4b876ef7cfbeb11f7d8209c2a9764df2-d4qnbzr.jpg",
    "https://i.pinimg.com/236x/69/d7/b8/69d7b8a549b4aa250a63a70301c336b9.jpg",
    "https://i.pinimg.com/originals/80/e5/3b/80e53b084bee9286046c039a32f6dbcd.jpg",
    "https://i.pinimg.com/originals/47/6d/e3/476de320a1b37f67e13d890def8c63fa.jpg",
    "https://i.pinimg.com/originals/1b/2c/21/1b2c216600ddb39eeec825b690bd9d63.jpg",
    "https://i.pinimg.com/originals/ce/aa/52/ceaa528f7bb686b532fa04489ba324bf.jpg",
    "https://i.pinimg.com/736x/79/d8/09/79d8090c156b9bafdedf53da7a5b39d1.jpg",
    "https://i.pinimg.com/originals/1b/90/74/1b90744f3331c8e1b84383319ce2ff8d.jpg",
    "https://i.pinimg.com/736x/81/2a/3f/812a3f8095fccc3a2984a1c91b648a36.jpg",
    "https://i.pinimg.com/originals/b0/d4/65/b0d46575c705adf77d698e33730396c4.jpg",
    "https://i.pinimg.com/736x/99/2c/d3/992cd30f0161b3f158267074a3dd96de.jpg",
    "https://i.pinimg.com/originals/90/41/60/904160fdf5387835c654d61bde2d5812.png",
    "https://i.pinimg.com/564x/56/ab/81/56ab81fd3db3fca26c83df394de4d7ed.jpg",
    "https://i.pinimg.com/originals/74/b6/7b/74b67bae3b11329e471b5b859fc9453e.jpg",
    "https://i.pinimg.com/736x/4e/5c/1a/4e5c1a025aca01393cd6203081620cbe.jpg",
    "https://i.pinimg.com/originals/8a/0f/d0/8a0fd013c39621aa2d7214d79ad112f7.jpg",
    "https://i.pinimg.com/564x/9b/b6/a8/9bb6a81dcc6347e98fcef0da01a93172.jpg",
    "https://i.pinimg.com/736x/19/ae/b2/19aeb2ac7500ded0cf50b7f83f60fb86.jpg",
    "https://i.pinimg.com/736x/78/65/92/7865925fa1addd6679a9ea4b2810591c.jpg",
    "https://i.pinimg.com/550x/5a/5c/f3/5a5cf3e562322f01725cc7c2a07cd69b.jpg",
    "https://i.pinimg.com/originals/9c/af/a7/9cafa7fc58286d10e14b73141ff8f5f3.jpg",
    "https://i.pinimg.com/236x/6d/82/07/6d8207caebd7ff644d5835eb22c5bfd2--gintoki-cosplay-cosplay-anime.jpg",
    "https://i.pinimg.com/originals/57/53/00/575300de7503a03fc8191f4b5bbc3d4b.jpg",
    "https://i.pinimg.com/originals/b0/ed/af/b0edafadc4adee5f16cc8bf30b11aebc.jpg",
    "https://i.pinimg.com/originals/8b/ea/61/8bea6183a2fe0cd494175b46965b36da.jpg",
    "https://i.pinimg.com/originals/ff/22/d1/ff22d1d94308bfbeed29bbb1a3972fd2.jpg",
    "https://i.pinimg.com/736x/d0/51/54/d0515487efb61dda9ec3a47239b9e41d.jpg",
    "https://i.pinimg.com/736x/23/78/2a/23782abd62d91b86b83dfdfbac837249.jpg",
    "https://i.pinimg.com/originals/6f/ab/53/6fab53f990a4044d2c9a548eb0754812.jpg",
    "https://i.pinimg.com/originals/dc/8d/11/dc8d1169aab1b6869ccba38502b6b1e7.jpg",
    "https://i.pinimg.com/originals/6c/92/00/6c92009dec098e54f7eb7c1b3e64e5b4.jpg",
    "https://i.pinimg.com/originals/41/7c/02/417c02f44d480e803362142d40e6772b.jpg",
    "https://i.pinimg.com/474x/04/50/10/0450104aa0731202db113fc5cd8c0d12.jpg",
    "https://i.pinimg.com/736x/46/2d/e3/462de328cf3cc69f5b10556ef30579e7.jpg",
    "https://i.pinimg.com/originals/47/3e/b5/473eb575b2f95ce5906bdad0e5b593b7.jpg",
    "https://i.pinimg.com/originals/26/8d/5e/268d5e20a747afea743b9a0cb96cc6de.jpg",
    "https://i.pinimg.com/736x/bc/a3/80/bca380011a5a682a9e7766c1d7c2db82.jpg",
    "https://i.pinimg.com/originals/71/2e/ac/712eacb25c094afd579c04d85ca7f9e0.jpg",
    "https://i.pinimg.com/originals/fc/c5/10/fcc5101e54e559952181e0bab0b1420e.jpg",
    "https://i.pinimg.com/originals/89/55/3d/89553d3b75d8d9484ffc29aba67c1fed.jpg",
    "https://i.pinimg.com/564x/c0/55/11/c05511492dcb02d6caa10e79df009d36.jpg",
    "https://i.pinimg.com/736x/cb/7e/e9/cb7ee99c3cdf99a0451da682ea4ac8fe.jpg",
    "https://i.pinimg.com/originals/97/f2/2e/97f22ee4839469620f1ecf10a3aec6ed.jpg",
        "https://i.pinimg.com/originals/90/41/f3/9041f36d8942b99fbced46629bdfed53.jpg",
        "https://i.pinimg.com/originals/63/2f/b0/632fb069878f1361a30ec57fd37e06ba.jpg",
        "https://i.pinimg.com/originals/e4/96/18/e496188418e1de2a17b207066f79184f.jpg",
        "https://i.pinimg.com/originals/0f/d8/71/0fd871a5beab3d8ec8609bb76cb2d9b9.webp",
        "https://i.pinimg.com/originals/7b/17/89/7b17896f9812c80b50a21d50be2a281b.jpg",
        "https://i.pinimg.com/originals/01/9b/01/019b01a94e79a807e05ee0c79a5c1230.jpg",
        "https://i.pinimg.com/originals/29/4d/77/294d777ebf73881c6fdad0115e3b9ea1.jpg",
        "https://i.pinimg.com/originals/8b/dc/a4/8bdca41ea0d0e163de9420341c679b49.jpg",
        "https://i.pinimg.com/originals/bc/06/ce/bc06ce1aaed5eb43e260c6cc5a467a19.jpg",
        "https://i.pinimg.com/originals/68/bd/af/68bdaf2d514214b94cf02e4403f00084.jpg",
        "https://i.pinimg.com/originals/bb/3f/4a/bb3f4af2f223e92a740db12ab8351f24.jpg",
        "https://i.pinimg.com/originals/4a/23/f8/4a23f8b02bad54cf490237221cab9436.jpg",
        "https://i.pinimg.com/originals/8b/15/80/8b1580123e0a90864b0ab7dbb2bc41f6.jpg",
        "https://i.pinimg.com/originals/70/e4/aa/70e4aa5fa6a355608564b7e37e9449e7.jpg",
        "https://i.pinimg.com/originals/c2/a1/24/c2a124597231504fcc6af51985d98256.jpg",
        "https://i.pinimg.com/originals/17/82/3b/17823b2e193468c2a6b486a40d64a3ac.jpg",
        "https://i.pinimg.com/originals/84/b0/5a/84b05a22de58027f119937d498de6b9d.jpg",
        "https://i.pinimg.com/originals/8b/49/2c/8b492c50d8d3962c1d30fd2b7dd68ee4.jpg",
        "https://i.pinimg.com/originals/7c/97/24/7c9724becd7a86896bac26777fb793b6.jpg",
         "https://i.pinimg.com/originals/d9/38/0d/d9380d4193a0d5859293997a346b82f9.jpg",
        "https://i.pinimg.com/originals/a7/1b/37/a71b37ff5df5f0e5e49c8b4183bc68bf.jpg",
        "https://i.pinimg.com/originals/60/11/f0/6011f02a93509468f86cbda404bcae46.jpg",
        "https://i.pinimg.com/originals/8c/d6/50/8cd650a4fd720de8efd3bb6e77e45f53.jpg",
        "https://i.pinimg.com/originals/54/98/f3/5498f3c7a4320de241309af3f52e99c7.jpg",
        "https://i.pinimg.com/originals/2a/fa/8e/2afa8e33b1331fa336faf62524467ec6.jpg",
        "https://i.pinimg.com/originals/5b/16/72/5b16727182843e9cfdb3cfa4c287625b.jpg",
        "https://i.pinimg.com/originals/9e/9d/a4/9e9da46021d89785c9db6b1fbdd1de5a.jpg",
        "https://i.pinimg.com/originals/a5/7c/e6/a57ce65faee4e0a0ae33713eda160aee.jpg",
        "https://i.pinimg.com/originals/7c/91/24/7c9124ca3dfd0299e9a4a245124a436c.jpg",
        "https://i.pinimg.com/originals/38/a1/16/38a11660ec632d5d68759213d7acf32d.jpg",
        "https://i.pinimg.com/originals/4a/50/b6/4a50b6de1ab8bd0f88871ffbeb61cce0.jpg",
        "https://i.pinimg.com/originals/50/a0/0e/50a00ef5d6dafdc5d767a6f2ebb135a7.jpg",
        "https://i.pinimg.com/originals/fa/b9/41/fab941423a5147a7186fb718eda8338b.jpg",
        "https://i.pinimg.com/originals/eb/ba/92/ebba92efeac4c9410caf2bde6255277d.jpg",
        "https://i.pinimg.com/originals/8e/be/43/8ebe431ab8078541c5919334b694a990.jpg",
        "https://i.pinimg.com/originals/54/a5/b6/54a5b63ba5cfa3dcc20eac6a501abba4.jpg",
        "https://i.pinimg.com/originals/17/76/dc/1776dcf04afda40493974f90c72f2688.jpg",
        "https://i.pinimg.com/originals/07/26/d7/0726d7d861a0987d049c287950798058.jpg",
        "https://i.pinimg.com/originals/31/92/2c/31922c1cb4789c8ba614c15b1ed79a6d.jpg"
  ]
const cosplayaleatorio = Math.floor(Math.random() * cosplay.length);
const imagenSeleccionada = cosplay[cosplayaleatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Cosplay 🌸*" });
}
break;

case 'hentai': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const hentai = [
"https://rule34xyz.b-cdn.net/posts/4054/4054628/4054628.picsmall.jpg",
"https://rule34xyz.b-cdn.net/posts/4053/4053838/4053838.picsmall.jpg",
"https://rule34xyz.b-cdn.net/posts/4063/4063007/4063007.picsmall.jpg",
"https://rule34xyz.b-cdn.net/posts/4071/4071727/4071727.picsmall.jpg",
"https://wimg.rule34.xxx//images/639/7524f1036f7ac8634bf56bbaabbdfdb3.png",
"https://wimg.rule34.xxx//images/639/785c89042091fa53cf2a502ebd0325c1.png",
"https://wimg.rule34.xxx//images/639/956d30987c6bb6acd5f5d050d8c5e4e5.jpeg",
"https://wimg.rule34.xxx//images/639/6e3ddb8f3a1f3ede47d6a81339daf2b1491ee11c.png",
"https://wimg.rule34.xxx//images/639/afb1c3f2d51b6acdfe919dba4bb834b8fc718a80.png",
"https://wimg.rule34.xxx//images/639/d8df6720f7d746731734ff683b2ee975cedd43ef.png",
"https://wimg.rule34.xxx//images/639/6f165377bf6ff5afb7433d0a1b997f6b5cf514a0.jpg",
"https://wimg.rule34.xxx//images/639/0ab594a7d51bae833b3b2699ef8556ebd665ffc3.png",
"https://wimg.rule34.xxx//images/639/eec93111b8246e39809e297398895eaab295dbbc.jpg?",
"https://wimg.rule34.xxx//images/639/06eb1a143f8c8c2b6088004c447036a0c7b4949e.jpg",
"https://wimg.rule34.xxx//images/639/8b9f345f526806f406a1690aaefee53c.jpeg",
"https://wimg.rule34.xxx//images/639/e709c6494d7a9eaff74a031fff4a714c.jpeg",
"https://wimg.rule34.xxx//images/639/9ae9d46bd28bba2b340c0bf111356aac.png",
"https://konachan.com/image/fa6f93e82aec3bb7ddc80ea88374a806/Konachan.com%20-%20388492%20anus%20ass%20bed%20breasts%20close%20denhijou_niki%20green_eyes%20lala_satalin_deviluke%20long_hair%20navel%20nipples%20nude%20pink_hair%20pussy%20tail%20to_love_ru%20uncensored.jpg",
"https://konachan.com/image/740035049c93cf5ccceee511c511fdaf/Konachan.com%20-%20388472%20bed%20breasts%20clouds%20cum%20honkai%3A_star_rail%20honkai_%28series%29%20machi_%28machi0910%29%20navel%20nipples%20nude%20purple_eyes%20purple_hair%20pussy%20sky%20sunglasses%20wet.jpg",
"https://konachan.com/jpeg/7f0399977605c2966e13a29d11967f06/Konachan.com%20-%20388592%20blonde_hair%20blush%20braids%20breasts%20choker%20garter_belt%20gloves%20navel%20nipples%20nude%20pussy%20short_hair%20spread_legs%20stockings%20uncensored%20wristwear%20yellow_eyes.jpg",
"https://konachan.com/image/9e770b21e8ef5a86aaf74f947036f498/Konachan.com%20-%20388443%20anus%20ass%20bandaid%20barefoot%20bell%20blush%20braids%20breasts%20clouds%20cowgirl%20headband%20horns%20long_hair%20male%20nipples%20nude%20pink_hair%20pussy%20sky%20tail%20twintails.jpg",
"https://konachan.com/image/ee2c6ac4ce14ddcebbdc48b81eb88f97/Konachan.com%20-%20388411%20anus%20ass%20black_hair%20blindfold%20blush%20breasts%20cum%20long_hair%20mochirong%20navel%20nipples%20no_bra%20penis%20pubic_hair%20pussy%20skintight%20tail%20thighhighs%20uncensored.jpg",
"https://cdn.donmai.us/original/5a/31/__saori_and_saori_blue_archive_drawn_by_coffeekite__5a311dfeca5cd9c754005a44e1010780.jpg",
"https://cdn.donmai.us/original/83/64/__burnice_white_zenless_zone_zero_drawn_by_greenopi__83647f3f33c6d795cbd1a9c21e4f4b07.jpg",
"https://cdn.donmai.us/original/96/86/__9179384__9686ac2725ff97eacc5d852459207e50.png",
"https://wimg.rule34.xxx//images/918/9f833adc7b8c169660026df94166b826.jpeg?13208705",
    "https://telegra.ph/file/2b1930db32c07b8c5a7a7.jpg",
    "https://telegra.ph/file/ab46dc7424641a12fabf3.jpg",
    "https://telegra.ph/file/439ce2b2535652f727b0f.jpg",
    "https://telegra.ph/file/6b8380d4f39f9c229748b.jpg",
    "https://telegra.ph/file/04b500c1be432609ffecc.jpg",
    "https://telegra.ph/file/f94fb69d8c2c240605e41.jpg",
    "https://telegra.ph/file/cfa50cad8b19e76e4b678.jpg",
    "https://telegra.ph/file/fff4010e1aabfc052ff5b.jpg",
    "https://telegra.ph/file/60191c199509f3ac6459c.jpg",
    "https://telegra.ph/file/ff74f9dfe69a0d8248d82.jpg",
    "https://telegra.ph/file/fa7f81d67ba8a2d89aa2d.jpg",
    "https://telegra.ph/file/e16fa598e3319e96f9d9f.jpg",
    "https://telegra.ph/file/a1997d69c028838cc6261.jpg",
    "https://telegra.ph/file/d8057031b0d9c7ed8dbbf.jpg",
    "https://telegra.ph/file/ff5fd34e42ded9b4f7698.jpg",
    "https://telegra.ph/file/3f07cebea0e1433649f84.jpg",
    "https://telegra.ph/file/941cdbc35afa9b2fd77b1.jpg",
    "https://telegra.ph/file/745520c69f08e0d2c5590.jpg",
    "https://telegra.ph/file/ff80288262cfdf457c7ec.jpg",
    "https://telegra.ph/file/7dd9f97dcce7950b597ab.jpg",
    "https://telegra.ph/file/eb75a91b96544d3def6c7.jpg",
    "https://telegra.ph/file/73a1a7793d04805eb86cd.jpg",
    "https://telegra.ph/file/da60fc6ac73e87040b5e4.jpg",
    "https://telegra.ph/file/d24ae592aeb809d743ad7.jpg",
    "https://telegra.ph/file/1fb95c9667fb1bb8bd3e8.jpg",
    "https://telegra.ph/file/a1f53415d346acfd2b012.jpg",
    "https://telegra.ph/file/9492d2e6d43d37c5fa5a6.jpg",
    "https://telegra.ph/file/7bdc707f124a563a15919.jpg",
    "https://telegra.ph/file/4556918cc51086337b5a8.jpg",
    "https://telegra.ph/file/14c7b1ee8efce2c96cbc4.jpg",
    "https://telegra.ph/file/9951cfb4ee90e6fc16858.jpg",
    "https://telegra.ph/file/b894e585712f970aa3ac3.jpg",
    "https://telegra.ph/file/7a42c0e113aa398880ce0.jpg",
    "https://telegra.ph/file/864f6c990738fb9d002d2.jpg",
    "https://telegra.ph/file/0c3de5efc5e10be5985aa.jpg",
    "https://telegra.ph/file/b4a40c5700e2c97edd1ff.jpg",
    "https://telegra.ph/file/6997f5a809001a161b33c.jpg",
    "https://telegra.ph/file/1687dd4e017bb425188b5.jpg",
    "https://telegra.ph/file/554c270bbcc376a92ec02.jpg",
    "https://telegra.ph/file/b29e71ff695f6f9c17ee3.jpg",
    "https://telegra.ph/file/77c7dac34ee5db3e8eae4.jpg",
    "https://telegra.ph/file/65b58b0ff68fb3f371b1e.jpg",
    "https://telegra.ph/file/4a42795fbe9ac9b39af24.jpg",
    "https://telegra.ph/file/658101873286949ca386d.jpg",
    "https://telegra.ph/file/0c6735e4730e54ed3a149.jpg"

]

const hentaialeatorio = Math.floor(Math.random() * hentai.length);
const imagenSeleccionada = hentai[hentaialeatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Hentai 🌸*" });
}
break;

case 'lesbiana': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const lesbian = [
"https://pornozorras.com/wp-content/uploads/2021/11/lesbian-xxx-com-400x225.jpg",
  
"https://pornozorras.com/wp-content/uploads/2021/11/lesbian-xxx-com-400x225.jpg",  

"https://www.rexporn.sex/static/naughty-teens-retreat-banana-jungle-to-have-lesbian-sex.jpg",
  
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/3c/fb/25/3cfb251209d10cba835f76e241347958-2/3cfb251209d10cba835f76e241347958.5.jpg",
  
"https://media-public-ht.project1content.com/m=eyzaevFb/927/48f/7b3/0d0/4c6/393/891/534/98b/27b/dc/poster/poster_01.jpg",
  
"http://uus1.com/a/cache1056/131/13195.jpg",
  
"https://c1.ttcache.com/thumbnail/fXrlKrwqqLP/288x162/16.jpg",
  
"https://cdn77-pic.xnxx-cdn.com/videos/thumbs169xnxxposter/73/f0/96/73f09624c976ed01efe8117b0c817c1b/73f09624c976ed01efe8117b0c817c1b.29.jpg",
  
"https://fi1.ypncdn.com/202006/23/16043542/original/100(m=eKw7agaaaa).jpg",
  
"https://fi1.ypncdn.com/202006/23/16043542/original/100(m=eKw7agaaaa).jpg",
  
"https://static-ca-cdn.eporner.com/thumbs/static4/6/64/648/6483423/10_240.jpg",
  
"https://www.nakedgirls.mobi/contents/videos_screenshots/3000/3218/preview.jpg",
  
"https://bs3.qvcdn.com/enhanced-2/461/41e/46141ed292fbab992ea2129f98309ead.jpg",
  
"https://bs2.qvcdn.com/enhanced-2/e40/541/e40541676d37720d4b6c5616374b5aa7.jpg",
  
"http://xxxonipad.net/s12/pictures/12/766_Busty_Real.jpg",
  
"https://tm7.pornmovies247.com/tmb/Hee/16413176.jpg",

"https://www.fpo.xxx/contents/videos_screenshots/259000/259779/preview.jpg",

"https://www.fpo.xxx/contents/videos_screenshots/259000/259779/preview.jpg",

"https://vkusnosti.pro/uploads/posts/2022-09/1664391066_1-vkusnosti-pro-p-latina-lesbian-sex-krasivoe-porno-1.jpg",

"https://di.rdtcdn.com/m=eafT8f/media/videos/202008/20/35257621/original/8.jpg",

"https://donpornovideos.com/wp-content/uploads/2022/04/www-lesbianas-videos-gratis.jpg",

"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169poster/ec/28/e0/ec28e01ffad2882579483501e48243bf/ec28e01ffad2882579483501e48243bf.19.jpg",

"https://donpornovideos.com/wp-content/uploads/2022/05/lesbian-sex-for-lesbians.jpg" 
]

const lesbianaleatorio = Math.floor(Math.random() * lesbian.length);
const imagenSeleccionada = lesbian[lesbianaleatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Lesbiana 🌸*" });
}
break;

case 'panti': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const panti = [
"https://cinepornogratis.com/wp-content/uploads/2021/08/panties-porn.jpg",
  
"https://e1nn.com/a/cache955/391/39186.jpg",  

"https://titis.org/uploads/posts/2021-11/thumbs/1637397958_3-titis-org-p-porn-with-lace-panties-porno-4.jpg",
  
"https://static-ca-cdn.eporner.com/gallery/Er/WP/J5lb8o4WPEr/661445-matching-socks-and-panties.jpg",
  
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169lll/8b/dc/d2/8bdcd21b6e780b28b0744071001f1f3b/8bdcd21b6e780b28b0744071001f1f3b.12.jpg",
  
"https://cdn77-pic.xvideos-cdn.com/videos/thumbs169ll/f8/d6/10/f8d610c59ad4e0bbaad1d474d93f1104-2/f8d610c59ad4e0bbaad1d474d93f1104.29.jpg",
  
"http://www.equbits.com/panty-porn-xxx-1026/littl-girls-wet-panties-xxx-12343.jpg",
  
"https://di.phncdn.com/videos/202108/07/392546751/original/(m=eGNdHgaaaa)(mh=cwVRfAqmPJ9ppCM8)12.jpg",
  
"https://ei.phncdn.com/videos/202110/30/397237271/original/(m=eaAaGwObaaaa)(mh=4chUFT5V-4MBVjVV)15.jpg",
  
"https://www.voyeurstyle.com/contents/videos_screenshots/4000/4019/768x432/11.jpg",
  
"https://di.phncdn.com/videos/202205/27/408861831/original/(m=eaf8Ggaaaa)(mh=miWqwXVBZAsIlYqm)1.jpg",
  
"http://perfectgirlsex.net/g30/thumbs/173/476_up-custom-.jpg",
  
"https://img-l3.xnxx-cdn.com/videos/thumbs169lll/a4/05/0a/a4050ab8e28450a8e57840ec4607b43c/a4050ab8e28450a8e57840ec4607b43c.7.jpg",
  
"http://xxx-free.net/t12/thumbs/339/942.jpg",
  
"https://tns.bangtubevideos.com/12/ff/12ff0cffe2_14.jpg",
  
"https://www.pantypit.com/wordpress/wp-content/uploads/2014/05/wetwhitepantyshower2.jpg",

"https://s.smutty.com/media_smutty/j/u/l/i/p/julian93-60dxq-10467e.jpg",

"https://thumb-p4.xhcdn.com/a/O0B7K7ciMepmpj2r0dWjVA/000/106/487/384_1000.jpg",

"https://esbabes.com/wp-content/uploads/2022/06/Arina-Hashimoto-y-Yua-Mikami-8.jpg"
]

const pantileatorio = Math.floor(Math.random() * panti.length);
const imagenSeleccionada = panti[pantileatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Pantis 🌸*" });
}
break;

case 'tetas': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const tetas = [
"https://img-cf.xvideos-cdn.com/videos/thumbs169lll/d9/1e/6d/d91e6d7d504d0e1112d4fa967b759395/d91e6d7d504d0e1112d4fa967b759395.23.jpg",

"https://telegra.ph/file/17d7a52fa4d09bffd4021.jpg",

"https://telegra.ph/file/6e4833070c1db456e3f16.jpg",

"https://telegra.ph/file/6359a215c404084b4b5a5.jpg",

"https://telegra.ph/file/39d6125edc9d816edea66.jpg",

"https://telegra.ph/file/9e17fc2c5736c7bf50c1b.jpg",

"https://telegra.ph/file/ffaf339d90f17f48e0b1e.jpg",

"https://telegra.ph/file/36b0f4c3ee3f6da840f5a.jpg",

"https://telegra.ph/file/e3bb0cfa608635ef709f7.jpg",

"https://telegra.ph/file/37a490ae79ec506162358.jpg",

"https://telegra.ph/file/7c59261f11fb56fc69fb3.jpg",

"https://telegra.ph/file/f426a92690ac973e386ca.jpg",

"https://telegra.ph/file/cb7188712869229744329.jpg",

"https://telegra.ph/file/5349111c4713ccda12c87.jpg",

"https://telegra.ph/file/83527deec9df9ac4b19b8.jpg",

"https://telegra.ph/file/346fcefaf50115c561c3c.jpg",

"https://telegra.ph/file/a824ababb101abeb9381b.jpg",

"https://telegra.ph/file/b26f7a2ec0b020773634b.jpg",

"https://telegra.ph/file/f071c9a4cef0fac79c614.jpg",

"https://telegra.ph/file/85d4dc6ba0e3d922c79c3.jpg",

"https://telegra.ph/file/81f0b276b91501e14c53e.jpg",

"https://telegra.ph/file/1a4be9852051e5e818903.jpg"
]

const tetasleatorio = Math.floor(Math.random() * tetas.length);
const imagenSeleccionada = tetas[tetasleatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Tetas 🌸*" });
}
break;

case 'pussy': {
enviar("*🌸 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾, 𝚂𝙴 𝙴𝚂𝚃𝙰 𝙳𝙴𝚂𝙲𝙰𝚁𝙶𝙰𝙽𝙳𝙾 𝚂𝚄 𝙸𝙼𝙰𝙶𝙴𝙽*");
const pussy = [
"https://telegra.ph/file/82ec174077c4748073936.jpg",

"https://telegra.ph/file/6687386fe10ed920fc80d.jpg",

"https://telegra.ph/file/3250f58e0fb188b714054.jpg",

"https://telegra.ph/file/e59120aece01990a68847.jpg",

"https://telegra.ph/file/d716c80a6669a375b7041.jpg",

"https://telegra.ph/file/51fe1e7c35a0715c535e4.jpg",

"https://telegra.ph/file/6c484e93ca7dfe6024a79.jpg",

"https://telegra.ph/file/703bcf30d133bce65d9a2.jpg",

"https://telegra.ph/file/0445f3e22dc0110e5bb27.jpg",

"https://telegra.ph/file/32029e78b7b9b19629856.jpg",

"https://telegra.ph/file/e19759bffd9fe97955c37.jpg",

"https://telegra.ph/file/d23507e26317aac3cd7ae.jpg",

"https://telegra.ph/file/20761b8974f4259ba11a6.jpg",

"https://telegra.ph/file/e61e8a0aa914de19c44d0.jpg",

"https://telegra.ph/file/c0b9f892edce1868e10f5.jpg",

"https://telegra.ph/file/dac98ed33cb5ab92e6b08.jpg",

"https://telegra.ph/file/90237577c5a42219e9b81.jpg",

"https://telegra.ph/file/b3186f94ca97400e31884.jpg"
]

const pussyleatorio = Math.floor(Math.random() * pussy.length);
const imagenSeleccionada = pussy[pussyleatorio];
susune.sendMessage(from, { image: { url: imagenSeleccionada }, caption: "*🌸 𝙰𝚀𝚄𝙸 𝚃𝙸𝙴𝙽𝙴𝚂 𝚃𝚄 𝙸𝙼𝙰𝙶𝙴𝙽 𝙳𝙴: Pussy 🌸*" });
}
break;



case 'listanime':
{
const axios = require('axios');
enviar("*🌸 𝙱𝚄𝚂𝙲𝙰𝙽𝙳𝙾 𝙰𝙽𝙸𝙼𝙴𝚂 𝙳𝙴 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙳𝙰𝚂 𝚁𝙴𝙲𝙸𝙴𝙽𝚃𝙴𝚂.*");
try {
const url = "https://api.jikan.moe/v4/seasons/now";
console.log(`🌐 Accediendo a: ${url}`);
const { data } = await axios.get(url);
console.log("✅ Datos obtenidos correctamente desde Jikan API");
const animes = data.data;
if (!animes || animes.length === 0) {
enviar("*🌸 𝙽𝙾 𝙷𝙰𝚈 𝙽𝙰𝙸𝙼𝙴𝚂 𝙳𝙸𝚂𝙿𝙾𝙽𝙸𝙱𝙻𝙴𝚂. 🌸*");
return;
}
let mensaje = "*🌷 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝙽𝙸𝙼𝙴𝚂 🌷*\n\n";
animes.forEach(anime => {
mensaje += `*🌹 𝙰𝙽𝙸𝙼𝙴: ${anime.title}*\n`;
mensaje += `*🌻 𝙴𝚂𝚃𝚁𝙴𝙽𝙾: ${anime.aired.from ? anime.aired.from.split('T')[0] : "Desconocido"}*\n`;
mensaje += `*🌸 𝚃𝙴𝙼𝙿𝙾𝚁𝙰𝙳𝙰: Año ${anime.year}*\n`;
mensaje += `*🥀 𝙴𝙿𝙸𝚂𝙾𝙳𝙸𝙾𝚂: ${anime.episodes ?? "Desconocido"}*\n`;
mensaje += `------------------------\n`;
});
setTimeout(() => {
enviar(mensaje);
console.log("✅ Lista de animes enviada correctamente.");
}, 2000);
} catch (error) {
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙰𝙽𝙸𝙼𝙴𝚂.*");
console.error("❌ Error en `listanime`:", error);
}
}
break;

case 'chrome':
case 'google':
if (!q) {
return enviar('*🌸 𝙷𝙾𝙻𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙳𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙻𝙾 𝚀𝚄𝙴 𝚃𝙴 𝙶𝚄𝚂𝚃𝙰𝚁𝙸𝙰 𝙱𝚄𝚂𝙲𝙰𝚁.*');
}
try {
console.log(`🔍 Buscando: ${q}`);
const axios = require('axios');
const cheerio = require('cheerio');
async function buscarEnMotores(query) {
const motores = [
{ nombre: 'Google', url: `https://www.google.com/search?q=${encodeURIComponent(query)}` },
{ nombre: 'Bing', url: `https://www.bing.com/search?q=${encodeURIComponent(query)}` },
{ nombre: 'Brave', url: `https://search.brave.com/search?q=${encodeURIComponent(query)}` },
{ nombre: 'DuckDuckGo', url: `https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}` }
];
for (const motor of motores) {
console.log(`🌍 Probando: ${motor.nombre}`);
try {
const { data } = await axios.get(motor.url, {
headers: {
'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
}
});
const $ = cheerio.load(data);
let resultados = [];
if (motor.nombre === 'Google') {
resultados = $('.tF2Cxc').map((i, el) => ({
titulo: $(el).find('h3').text(),
enlace: $(el).find('a').attr('href'),
descripcion: $(el).find('.VwiC3b').text()
})).get();
}
else if (motor.nombre === 'Bing') {
resultados = $('.b_algo').map((i, el) => ({
titulo: $(el).find('h2').text(),
enlace: $(el).find('h2 a').attr('href'),
descripcion: $(el).find('.b_caption p').text()
})).get();
}
else if (motor.nombre === 'Brave') {
resultados = $('.result-header').map((i, el) => ({
titulo: $(el).text(),
enlace: $(el).attr('href'),
descripcion: $(el).next('.snippet').text()
})).get();
}
else if (motor.nombre === 'DuckDuckGo') {
resultados = $('.result__title a').map((i, el) => ({
titulo: $(el).text(),
enlace: $(el).attr('href'),
descripcion: $(el).parents('.result').find('.result__snippet').text()
})).get();
}
if (resultados.length > 0) {
console.log(`✅ Resultados obtenidos de ${motor.nombre}`);
return resultados.slice(0, 5);
}
} catch (error) {
console.log(`❌ Error con ${motor.nombre}: ${error.message}`);
}
}
return [];
}
buscarEnMotores(q).then(async (resultados) => {
if (!resultados || resultados.length === 0) {
console.log('⚠️ No se encontraron resultados.');
return enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁𝙾𝙽 𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾𝚂*');
}
let mensaje = `*🌸 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰 𝙴𝚇𝙸𝚃𝙾𝚂𝙰 🌸*\n\n`;
resultados.forEach((resultado, index) => {
mensaje += `· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*${index + 1}. ${resultado.titulo}*\n· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·\n*🌺 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽: ${resultado.descripcion}*\n\n*🌹 𝙻𝙸𝙽𝙺:* ${resultado.enlace}\n`;
});
enviar(mensaje);
}).catch((err) => {
console.log(`❌ Error en la búsqueda: ${err}`);
enviar('*🌺 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*');
});
} catch (err) {
console.log(`❌ Error inesperado: ${err}`);
enviar('🌺 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙱𝚄𝚂𝚀𝚄𝙴𝙳𝙰*');
}
break;

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗝𝗨𝗘𝗚𝗢𝗦

case 'ppt': {
if(!isReg) return
if(!isGroup) return
if (!q) return enviar('*🌸 𝙴𝙻𝙸𝙹𝙴 𝚄𝙽𝙰 𝙾𝙿𝙲𝙸𝙾𝙽, 𝙴𝙽𝚃𝚁𝙴 𝙿𝙸𝙴𝙳𝚁𝙰, 𝙿𝙰𝙿𝙴𝙻, 𝚃𝙸𝙹𝙴𝚁𝙰𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ᴘᴘᴛ ᴘᴀᴘᴇʟ*');
let opciones = ['piedra', 'papel', 'tijera'];
if (!opciones.includes(q.toLowerCase())) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾 𝚃𝚄 𝙾𝙿𝙲𝙸𝙾𝙽 𝙽𝙾 𝙴𝚇𝙸𝚂𝚃𝙴*');
let apuesta = 0;
let resultado = cobrarMonedas(sender, apuesta);
if (!resultado.status) return enviar(resultado.message);
let eleccionBot = opciones[Math.floor(Math.random() * opciones.length)];
let resultadoJuego = '';
if (q.toLowerCase() === eleccionBot) {
resultadoJuego = '*🌻 𝙷𝚄𝙱𝙾 𝚄𝙽 𝙴𝙼𝙿𝙰𝚃𝙴, 𝙽𝙰𝙳𝙸𝙴 𝙶𝙰𝙽𝙾.*';
} else if (
(q.toLowerCase() === 'piedra' && eleccionBot === 'tijera') ||
(q.toLowerCase() === 'papel' && eleccionBot === 'piedra') ||
(q.toLowerCase() === 'tijera' && eleccionBot === 'papel')
) {
let premio = 20;
registros.find(u => u.id === sender).coins += premio;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        resultadoJuego = `🎉 𝐅𝐄𝐋𝐈𝐂𝐈𝐃𝐀𝐃𝐄𝐒 𝐆𝐀𝐍𝐀𝐒𝐓𝐄 🎉\n\n*🌸 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴: ${q}*\n*🌸 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙶𝙸𝙾: ${eleccionBot}*\n\n*💸 𝚃𝚄 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰: $${premio} 🪙*`;
} else {
resultadoJuego = `🌻 𝐏𝐄𝐑𝐃𝐈𝐒𝐓𝐄 𝐄𝐒𝐓𝐀 𝐑𝐎𝐍𝐃𝐀 🌻\n\n*🌸 𝙴𝙻𝙴𝙶𝙸𝚂𝚃𝙴: ${q}*\n*🌸 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙻𝙸𝙶𝙸𝙾: ${eleccionBot}*\n\n*💸 𝚃𝚄 𝚁𝙴𝙲𝙾𝙼𝙿𝙴𝙽𝚂𝙰: $0 🪙*`;
}
enviar(resultadoJuego);
}
break;

case 'minar': {
  if (!isReg) return;
  if (!isGroup) return;

  const ahora = Date.now();
  const ultimoMinado = cooldownMinar[sender] || 0;
  const espera = 60000; // 60 segundos
  const restante = espera - (ahora - ultimoMinado);

  if (restante > 0) {
    enviar(`⏳ *Espera ${Math.ceil(restante / 1000)} segundos antes de volver a minar.*`);
    break;
  }

  cooldownMinar[sender] = ahora;

  let resultado = Math.random();
  let cantidad = Math.floor(Math.random() * 50) + 10;
  let mensaje = '';

  if (resultado < 0.50) {
    mensaje = `⛏️ *𝙷𝙰𝚂 𝙼𝙸𝙽𝙰𝙳𝙾 $${cantidad} 🪙*`;
    let index = registros.findIndex(u => u.id === sender);
    if (index !== -1) {
      registros[index].coins += cantidad;
      fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
    }
  } else if (resultado < 0.4) {
    mensaje = '🗑️ *𝙷𝙰𝚂 𝙼𝙸𝙽𝙰𝙳𝙾 𝙱𝙰𝚂𝚄𝚁𝙰, 𝚀𝚄𝙴 𝙼𝙰𝙻𝙰 𝚂𝚄𝙴𝚁𝚃𝙴 𝚃𝙸𝙴𝙽𝙴𝚂*';
  } else {
    mensaje = '🥺 *𝙽𝙾 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝚃𝙴 𝙽𝙰𝙳𝙰 𝙰𝙻 𝙼𝙸𝙽𝙰𝚁, 𝚅𝙴 𝙰 𝙳𝙴𝚂𝙲𝙰𝙽𝚂𝙰𝚁 𝚈 𝚅𝚄𝙴𝙻𝚅𝙴 𝙰 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝚁𝙻𝙾*';
  }

  enviar(mensaje);
}
break;

case 'trabajar': {
  if (!isReg) return;
  if (!isGroup) return;

  const ahora = Date.now();
  const ultimoTrabajo = cooldownTrabajar[sender] || 0;
  const espera = 60000; // 60 segundos
  const restante = espera - (ahora - ultimoTrabajo);

  if (restante > 0) {
    enviar(`⏳ *Debes esperar ${Math.ceil(restante / 1000)} segundos antes de volver a trabajar.*`);
    break;
  }

  cooldownTrabajar[sender] = ahora;

  let trabajos = [
    '🚕 Conductor de taxi', '🍔 Repartidor de comida', '🛠️ Obrero',
    '💻 Programador', '🎭 Actor callejero', '🚛 Camionero',
    '👮 Policía', '👨‍⚕️ Doctor', '👩‍🏫 Maestro', '🔧 Mecánico',
    '👨‍🍳 Chef', '🛒 Cajero de supermercado', '📦 Repartidor de paquetes',
    '🧹 Personal de limpieza', '🎨 Diseñador gráfico', '🎶 Músico callejero',
    '📷 Fotógrafo', '✍️ Escritor', '📰 Periodista', '🎤 Locutor de radio',
    '🎮 Tester de videojuegos', '🏗️ Ingeniero civil', '🔬 Científico',
    '⚖️ Abogado', '🏥 Enfermero', '💂 Guardia de seguridad',
    '🚀 Astronauta', '🐶 Paseador de perros', '🎭 Payaso de fiestas',
    '📞 Agente de call center', '🏋️ Entrenador personal', '📚 Bibliotecario',
    '🏨 Recepcionista de hotel', '✈️ Piloto de avión', '🚢 Marinero',
    '🎩 Mago', '💄 Estilista', '📝 Secretario', '🌾 Agricultor',
    '🛍️ Vendedor ambulante', '🛠️ Carpintero', '🎧 DJ',
    '🚲 Mensajero en bicicleta', '🏛️ Arqueólogo', '🎯 Cazador de recompensas'
  ];

  let trabajoElegido = trabajos[Math.floor(Math.random() * trabajos.length)];
  let ganancia = Math.floor(Math.random() * 100) + 20;
  let mensaje = `*🌷 𝙷𝙰𝚂 𝚃𝚁𝙰𝙱𝙰𝙹𝙰𝙳𝙾 𝙲𝙾𝙼𝙾: ${trabajoElegido} 𝚈 𝙶𝙰𝙽𝙰𝚂𝚃𝙴 $${ganancia} 🪙*`;

  let index = registros.findIndex(u => u.id === sender);
  if (index !== -1) {
    registros[index].coins += ganancia;
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
  }

  enviar(mensaje);
}
break;

case 'cofre': {
  if (!isReg) return;
  if (!isGroup) return;

  const ahora = Date.now();
  const ultimoUso = cooldownCofre[sender] || 0;
  const espera = 60000;
  const restante = espera - (ahora - ultimoUso);

  if (restante > 0) {
    enviar(`⏳ *Debes esperar ${Math.ceil(restante / 1000)} segundos antes de abrir otro cofre.*`);
    break;
  }

  cooldownCofre[sender] = ahora;

  let opciones = [100, 0, -50];
  let resultado = opciones[Math.floor(Math.random() * opciones.length)];
  let index = registros.findIndex(u => u.id === sender);
  registros[index].coins += resultado;

  let mensaje = resultado === 100
    ? "🎁 *𝙴𝙻 𝚀𝚄𝙴 𝙱𝚄𝚂𝙲𝙰, 𝙴𝙽𝙲𝚄𝙴𝙽𝚃𝚁𝙰 ¡𝙷𝙰𝚂 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝙳𝙾 𝚄𝙽 𝙲𝙾𝙵𝚁𝙴 𝙲𝙾𝙽 $100 🪙*"
    : resultado === 0
    ? "🪙 *𝙻𝙰 𝙰𝚅𝙰𝚁𝙸𝙲𝙸𝙰 𝙴𝚂 𝙼𝙰𝙻𝙰, 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚂𝚃𝙴 𝚄𝙽 𝙲𝙾𝙵𝚁𝙴 ¡𝚅𝙰𝙲𝙸𝙾!*"
    : "💀 *𝙷𝙴𝚈, 𝙽𝙾 𝚁𝙾𝙱𝙴𝚂 𝙴𝚂𝙴 𝙲𝙾𝙵𝚁𝙴, 𝙷𝙰𝚂 𝙿𝙴𝚁𝙳𝙸𝙳𝙾 $50 🪙*";

  enviar(mensaje);
  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}
break;

case 'cartas': {
  if (!isReg) return;
  if (!isGroup) return;

  const ahora = Date.now();
  const ultimoUso = cooldownCartas[sender] || 0;
  const espera = 60000;
  const restante = espera - (ahora - ultimoUso);

  if (restante > 0) {
    enviar(`⏳ *Debes esperar ${Math.ceil(restante / 1000)} segundos antes de volver a jugar cartas.*`);
    break;
  }

  cooldownCartas[sender] = ahora;

  let cartas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 11];
  let mano = [
    cartas[Math.floor(Math.random() * cartas.length)],
    cartas[Math.floor(Math.random() * cartas.length)]
  ];
  let total = mano.reduce((a, b) => a + b, 0);

  if (total > 21) {
    enviar(`💀 *𝙻𝙰𝚂𝚃𝙸𝙼𝙰, 𝚃𝙸𝙴𝙽𝙴𝚂 ${total} 𝙿𝚄𝙽𝚃𝙾𝚂, 𝙷𝙰𝚂 𝙿𝙴𝚁𝙳𝙸𝙳𝙾.*`);
    break;
  }

  let index = registros.findIndex(u => u.id === sender);

  if (total === 21) {
    registros[index].coins += 200;
    enviar(`🎉 *¡𝙱𝙻𝙰𝙲𝙺𝙹𝙰𝙲𝙺! 𝚃𝙸𝙴𝙽𝙴𝚂 ${total} 𝙿𝚄𝙽𝚃𝙾𝚂, 𝙶𝙰𝙽𝙰𝚂𝚃𝙴 $200 🪙*`);
  } else {
    registros[index].coins += 100;
    enviar(`🃏 *¡𝙱𝙸𝙴𝙽!, 𝚃𝙸𝙴𝙽𝙴𝚂 ${total} 𝙿𝚄𝙽𝚃𝙾𝚂, 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾 $100 🪙*`);
  }

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}
break;

case "robar": {
  if (!isReg) return;
  if (!isGroup) return;

  const ahora = Date.now();
  const ultimoRobo = cooldownRobar[sender] || 0;
  const espera = 60000; // 60 segundos
  const restante = espera - (ahora - ultimoRobo);

  if (restante > 0) {
    enviar(`⏳ *Debes esperar ${Math.ceil(restante / 1000)} segundos para volver a robar.*`);
    break;
  }

  cooldownRobar[sender] = ahora;

  let victimaId = null;
  if (info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.length) {
    victimaId = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
  } else if (info.message?.extendedTextMessage?.contextInfo?.participant) {
    victimaId = info.message.extendedTextMessage.contextInfo.participant;
  }

  if (!victimaId) return enviar("*🌺 PARA ROBARLE MONEDAS A UN USUARIO, DEBES ETIQUETARLO O CITAR SU MENSAJE.*");
  if (victimaId === sender) return enviar("*✋ NO PUEDES ROBARTE A TI MISMO.*");

  const atacanteIndex = registros.findIndex(u => u.id === sender);
  const victimaIndex = registros.findIndex(u => u.id === victimaId);

  if (victimaIndex === -1) return enviar("*🌸 ESE USUARIO NO ESTÁ REGISTRADO.*");
  if (registros[victimaIndex].coins <= 0) {
    return susune.sendMessage(from, {
      text: `*😂 ¡JAJAJA! NO LE ROBES A LOS POBRES, @${victimaId.split("@")[0]} NO TIENE NI PARA COMER.*`,
      mentions: [victimaId]
    });
  }

  const probabilidad = Math.random();
  const cantidadRobada = Math.floor(Math.random() * 50) + 10;
  let mensaje = "";
  const menciones = [sender, victimaId];

  if (probabilidad < 0.5) {
    registros[victimaIndex].coins -= cantidadRobada;
    registros[atacanteIndex].coins += cantidadRobada;
    mensaje = `*🥷 MUY BIEN HECHO @${sender.split("@")[0]}*\n\n*LE HAS ROBADO $${cantidadRobada} 🪙 A @${victimaId.split("@")[0]}*`;
  } else {
    registros[atacanteIndex].coins = Math.max(0, registros[atacanteIndex].coins - 100);
    registros[victimaIndex].coins += 100;
    mensaje = `*🥺 ¡OH NO! FALLASTE @${sender.split("@")[0]}*\n\n*@${victimaId.split("@")[0]} SE DEFENDIÓ Y TE ROBÓ $100 🪙*`;
  }

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
  await susune.sendMessage(from, { text: mensaje, mentions: menciones });
  break;
}

case 'carrera': {
if(!isReg) return
if(!isGroup) return
let animal = args[0]?.toLowerCase();
if (!['conejo', 'caballo', 'tortuga', 'gato', 'perro', 'leon', 'elefante', 'zebra', 'jirafa'].includes(animal)) {
return enviar("*🌸 𝙴𝙻𝙸𝙶𝙴 𝚄𝙽 𝙰𝙽𝙸𝙼𝙰𝙻, 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙲𝙰𝚁𝚁𝙴𝚁𝙰: ᴄᴏɴᴇᴊᴏ, ᴄᴀʙᴀʟʟᴏ, ᴛᴏʀᴛᴜɢᴀ, ɢᴀᴛᴏ, ᴘᴇʀʀᴏ, ʟᴇᴏɴ, ᴇʟᴇғᴀɴᴛᴇ, ᴢᴇʙʀᴀ ᴏ ᴊɪʀᴀғᴀ*");
}
let emojis = {
'conejo': 'Conejo 🐇',
'caballo': 'Caballo 🐎',
'tortuga': 'Tortuga 🐢',
'gato': 'Gato 🐈',
'perro': 'Perro 🦮',
'leon': 'Leon 🦁',
'elefante': 'Elefante 🐘',
'zebra': 'Zebra 🦓',
'jirafa': 'Jirafa 🦒'
    };
let probabilidad = { 
'conejo': 0.4, 
'caballo': 0.35, 
'tortuga': 0.25, 
'gato': 0.3, 
'perro': 0.33, 
'leon': 0.45, 
'elefante': 0.2, 
'zebra': 0.35, 
'jirafa': 0.3
};
let resultado = Math.random();
if (resultado < probabilidad[animal]) {
let index = registros.findIndex(u => u.id === sender);
registros[index].coins += 80;
enviar(`🎉 *¡𝚆𝙾𝙾𝙾!, 𝙵𝙴𝙻𝙸𝙲𝙸𝙳𝙰𝙳𝙴𝚂 𝚃𝚄 ${emojis[animal]} 𝙶𝙰𝙽𝙾 𝙻𝙰 𝙲𝙰𝚁𝚁𝙴𝚁𝙰, 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾 $80 🪙*`);
} else {
enviar(`*🥺 𝙾𝙷 𝙽𝙾, 𝚃𝚄: ${emojis[animal]} 𝚂𝙴 𝙲𝙰𝙽𝚂𝙾 𝚈 𝙿𝙴𝚁𝙳𝙸𝙾 𝙻𝙰 𝙲𝙰𝚁𝚁𝙴𝚁𝙰*`);
}
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}
break;

case 'ruletarusa': {
  if(!isReg) return;
  if(!isGroup) return;

  let index = registros.findIndex(u => u.id === sender); // <- ESTA LÍNEA FALTABA
  let resultado = Math.random();

  if (resultado < 0.2) {
    registros[index].coins = 0;
    enviar("💀 *𝙱𝙾𝙾𝙼 𝙻𝙰 𝙱𝙰𝙻𝙰 𝚃𝚁𝙰𝚂𝙿𝙰𝚂𝙾 𝚃𝚄 𝙲𝚁𝙰𝙽𝙴𝙾, 𝙷𝙰𝚂 𝙿𝙴𝚁𝙳𝙸𝙳𝙾 𝚃𝙾𝙳𝙾 𝚃𝚄 𝙳𝙸𝙽𝙴𝚁𝙾.*");
  } else {
    registros[index].coins += 100;
    enviar("🎉 *𝙱𝙾𝙾𝙼, 𝚃𝚁𝙰𝙺𝙰 𝙽𝙾 𝙷𝙰𝙱𝙸́𝙰 𝙽𝙸𝙽𝙶𝚄𝙽𝙰 𝙱𝙰𝙻𝙰 𝙰𝙷𝙸, 𝙷𝙰𝚂 𝚂𝙾𝙱𝚁𝙴𝚅𝙸𝚅𝙸𝙳𝙾, 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾 $100 🪙*");
  }

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
}
break;

case 'animal':
if(!isReg) return
if(!isGroup) return
if (!q) {
enviar(`*🌸 𝙷𝙾𝙻𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝙴𝙻 𝙽𝙾𝙼𝙱𝚁𝙴 𝙳𝙴 𝚄𝙽 𝙰𝙽𝙸𝙼𝙰𝙻, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ᴀɴɪᴍᴀʟ ɢᴀᴛᴏ*`);
} else {
const animal = animales.find(a => a.Nombre.toLowerCase() === q.toLowerCase());
if (animal) {
const info = informacionAnimal.find(i => i.Nombre.toLowerCase() === q.toLowerCase());
if (info) {
enviar(`*• 𝙽𝙾𝙼𝙱𝚁𝙴: ${info.Nombre}*\n*• 𝙴𝚂𝙿𝙴𝙲𝙸𝙴: ${info.Especie}*\n*• 𝙷𝙰𝙱𝙸𝚃𝙰 ${info.Habita}*\n*• 𝙳𝙸𝙴𝚃𝙰: ${info.Dieta}*`);
} else {
enviar("🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙷𝙰𝚈 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝚂𝙾𝙱𝚁𝙴 𝙴𝚂𝚃𝙴 𝙰𝙽𝙸𝙼𝙰𝙻 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂");
}
} else {
enviar("No Se Encontró El Animal");
}
}
break;

case 'adivinanza': {
if(!isReg) return
if(!isGroup) return
if (adivinanzaActiva[from]) {
return enviar(`🌷 𝗬𝗔 𝗘𝗦𝗧𝗔𝗦 𝗝𝗨𝗚𝗔𝗡𝗗𝗢 🌷\n\n🌸 𝙔𝙖 𝙝𝙖𝙮 𝙪𝙣𝙖 𝙖𝙙𝙞𝙫𝙞𝙣𝙖𝙣𝙯𝙖 𝙨𝙞𝙣 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧, 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙖𝙡𝙖 𝙥𝙖𝙧𝙖 𝙚𝙢𝙥𝙚𝙯𝙖𝙧 𝙪𝙣𝙖 𝙣𝙪𝙚𝙫𝙖 𝙥𝙖𝙧𝙩𝙞𝙙𝙖.!`);
}
const adivinanzas = [
{ pregunta: "Soy rojo por dentro y verde por fuera, ¿qué soy?", respuesta: "la sandía" },
{ pregunta: "Vuelo sin alas, lloro sin ojos. ¿Qué soy?", respuesta: "la nube" },
{ pregunta: "Tengo llaves pero no abro puertas. ¿Qué soy?", respuesta: "el piano" },
{ pregunta: "Mientras más me quitas, más grande soy. ¿Qué soy?", respuesta: "un hoyo" },
{ pregunta: "Blanca por dentro, verde por fuera. Si quieres que te lo diga, espera. ¿Qué soy?", respuesta: "la pera" },
{ pregunta: "Cuanto más me quitas, más grande me hago. ¿Qué soy?", respuesta: "el agujero" },
{ pregunta: "Todos pasan por mí, pero yo nunca paso por nadie. ¿Qué soy?", respuesta: "un puente" },
{ pregunta: "No soy planta, pero tengo hojas. No soy humano, pero te hablo. ¿Qué soy?", respuesta: "un libro" },
{ pregunta: "Llevo años en el mar y aún no sé nadar. ¿Qué soy?", respuesta: "la arena" },
{ pregunta: "Si me nombras, desaparezco. ¿Qué soy?", respuesta: "el silencio" },
{ pregunta: "Siempre sube y nunca baja. ¿Qué es?", respuesta: "la edad" },
{ pregunta: "Tengo dientes pero no muerdo. ¿Qué soy?", respuesta: "un peine" },
{ pregunta: "No es cama ni es león, pero desaparece en un rincón. ¿Qué es?", respuesta: "el camaleón" },
{ pregunta: "Me ves en el día y desaparezco en la noche. ¿Qué soy?", respuesta: "la sombra" },
{ pregunta: "Tengo orejas grandes y no soy elefante. ¿Qué soy?", respuesta: "un burro" },
{ pregunta: "Lleno de agujeros y aún así contiene agua. ¿Qué soy?", respuesta: "una esponja" },
{ pregunta: "Tengo ramas pero no soy árbol, tengo páginas pero no soy libro. ¿Qué soy?", respuesta: "un directorio telefónico" },
{ pregunta: "Vuelo de noche, duermo en el día y nunca verás plumas en ala mía. ¿Qué soy?", respuesta: "el murciélago" },
{ pregunta: "Si me tiras al agua, floto; si me tiras al fuego, ardo. ¿Qué soy?", respuesta: "la madera" },
{ pregunta: "Siempre anda y nunca se detiene. ¿Qué es?", respuesta: "el reloj" },
{ pregunta: "Sin ojos veo, sin boca hablo, sin piernas camino. ¿Qué soy?", respuesta: "un libro" },
{ pregunta: "Tengo cabeza y tengo pies, pero no tengo cuerpo. ¿Qué soy?", respuesta: "un zapato" },
{ pregunta: "Cuatro patas tengo y no puedo correr. ¿Qué soy?", respuesta: "una mesa" },
{ pregunta: "Más alto que un pino y pesa menos que un comino. ¿Qué es?", respuesta: "el humo" },
{ pregunta: "Tengo ciudades, pero no casas; montañas, pero no árboles; agua, pero no peces. ¿Qué soy?", respuesta: "un mapa" },
{ pregunta: "Nace en el mar, muere en la orilla, y en todo el viaje va haciendo ruidos. ¿Qué es?", respuesta: "la ola" },
{ pregunta: "Siempre que subo, dejo algo atrás. ¿Qué soy?", respuesta: "una escalera" },
{ pregunta: "No tengo patas, pero siempre corro. ¿Qué soy?", respuesta: "el río" },
{ pregunta: "Si me miras, yo te miro; si me sonríes, yo te sonrío. ¿Qué soy?", respuesta: "un espejo" },
{ pregunta: "Si tienes un paraguas y llueve, ¿qué se moja?", respuesta: "el suelo" },
{ pregunta: "No soy ave y tengo plumas. No soy cama y tengo almohadas. ¿Qué soy?", respuesta: "un libro" },
{ pregunta: "Cuando hablo, todos escuchan. Si grito, todos corren. ¿Qué soy?", respuesta: "el trueno" },
{ pregunta: "Me quitan la piel y no lloro, pero quien me corta sí. ¿Qué soy?", respuesta: "la cebolla" },
{ pregunta: "Cae al agua y no se moja. ¿Qué es?", respuesta: "la sombra" },
{ pregunta: "En el mar nací, en la tierra me crié, y cuando muero, mi madre me come. ¿Qué soy?", respuesta: "la sal" },
{ pregunta: "Tengo cara pero no ojos, tengo brazos pero no manos. ¿Qué soy?", respuesta: "un reloj" },
{ pregunta: "Luzco siempre elegante y soy de metal. ¿Qué soy?", respuesta: "un anillo" },
{ pregunta: "Si me das comida, vivo. Si me das agua, muero. ¿Qué soy?", respuesta: "el fuego" },
{ pregunta: "No soy humano, pero tengo huesos. ¿Qué soy?", respuesta: "un esqueleto" },
{ pregunta: "Cuanto más caliente estoy, más frío soy. ¿Qué soy?", respuesta: "el hielo" },
{ pregunta: "Tengo pies pero no camino, tengo corazón pero no siento. ¿Qué soy?", respuesta: "una carta" },
{ pregunta: "Un pastor tiene 15 ovejas. Si se le escapan todas menos nueve, ¿cuántas le quedan?", respuesta: "nueve" },
{ pregunta: "Es tuyo, pero los demás lo usan más que tú. ¿Qué es?", respuesta: "tu nombre" },
{ pregunta: "Siempre estoy delante de ti, pero nunca me puedes alcanzar. ¿Qué soy?", respuesta: "el horizonte" },
{ pregunta: "Estoy en el centro de París y también en el final. ¿Qué soy?", respuesta: "la letra 's'" },
{ pregunta: "Cuanto más corro, más pequeño soy. ¿Qué soy?", respuesta: "una vela" },
{ pregunta: "Puedo ser pequeño como un ratón, pero guardar una casa o un camión. ¿Qué soy?", respuesta: "una llave" },
{ pregunta: "Todos quieren tocarme, pero si me tocan, exploto. ¿Qué soy?", respuesta: "una burbuja" },
{ pregunta: "Dos hermanas son, una va y la otra viene, pero nunca se pueden ver. ¿Qué son?", respuesta: "las puertas" },
{ pregunta: "Si me llamas, vengo. Si no me llamas, sigo ahí. ¿Qué soy?", respuesta: "el eco" },
{ pregunta: "Cuando es de día, no estoy. Cuando es de noche, aparezco. ¿Qué soy?", respuesta: "la luna" }
];
const adivinanzaSeleccionada = adivinanzas[Math.floor(Math.random() * adivinanzas.length)];
adivinanzaActiva[from] = {
pregunta: adivinanzaSeleccionada.pregunta,
respuestaCorrecta: adivinanzaSeleccionada.respuesta,
jugador: sender,
timeout: setTimeout(() => {
if (adivinanzaActiva[from]) { 
enviar(`⚠️ 𝗦𝗘 𝗔𝗖𝗔𝗕𝗢 𝗘𝗟 𝗧𝗜𝗘𝗠𝗣𝗢 ⚠️\n\n🪷 *𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰:* *${adivinanzaSeleccionada.respuesta}*.\n\n🌸 𝙂𝙧𝙖𝙘𝙞𝙖𝙨 𝙥𝙤𝙧 𝙥𝙖𝙧𝙩𝙞𝙘𝙞𝙥𝙖𝙧, 𝙧𝙚𝙘𝙪𝙚𝙧𝙙𝙖 𝙨𝙚𝙧 𝙪𝙣 𝙥𝙤𝙘𝙤 𝙢𝙖𝙨 𝙧𝙖𝙥𝙞𝙙𝙤.`);
delete adivinanzaActiva[from];
}
}, 60000)
};
enviar(`
🌸 𝘼𝘿𝙄𝙑𝙄𝙉𝘼 𝘼𝘿𝙄𝙑𝙄𝙉𝘼𝘿𝙊𝙍 🌸\n\n🪷 *${adivinanzaSeleccionada.pregunta}*\n\n🌷𝙏𝙞𝙚𝙣𝙚𝙨 *60* 𝙥𝙖𝙧𝙖 𝙧𝙚𝙨𝙥𝙤𝙣𝙙𝙚𝙧.\n☘️ ¡𝙎𝙪𝙚𝙧𝙩𝙚!`);
}
break;

case 'dado': {
if(!isReg) return
if(!isGroup) return
let apuesta = 0;
let resultado = cobrarMonedas(sender, apuesta);
if (!resultado.status) return enviar(resultado.message);
let dado = Math.floor(Math.random() * 6) + 1;
let premio = dado === 6 ? 30 : dado === 5 ? 20 : 0;
if (premio > 0) {
registros.find(u => u.id === sender).coins += premio;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
enviar(`🎲 *𝙷𝙰𝚂 𝚃𝙸𝚁𝙰𝙳𝙾 𝙴𝙻 𝙳𝙰𝙳𝙾 𝚈 𝚂𝙲𝙰𝚂𝚃𝙴 𝚄𝙽 ${dado} 𝙼𝚄𝚈 𝙱𝙸𝙴𝙽, 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾 $${premio} 🪙*`);
} else {
enviar(`🎲 *𝙷𝙰𝚂 𝚃𝙸𝚁𝙰𝙳𝙾 𝙴𝙻 𝙳𝙰𝙳𝙾 𝚈 𝚂𝙲𝙰𝚂𝚃𝙴 𝚄𝙽 ${dado} 𝙻𝙰𝚂𝚃𝙸𝙼𝙰 𝙿𝙴𝚁𝙳𝙸𝚂𝚃𝙴, 𝙽𝙾 𝙶𝙰𝙽𝙰𝚂𝚃𝙴 𝙿𝙴𝚁𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚂𝙴𝙶𝚄𝙸𝚁 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾𝙻𝙾.*`);
}
}
break;

case 'loteria': {
if(!isReg) return
if(!isGroup) return
if (!q || isNaN(q) || q <= 0) return enviar('*🌸 𝙿𝚁𝙸𝙼𝙴𝚁𝙾 𝙳𝙴𝙱𝙴𝚂 𝙰𝙿𝙾𝚂𝚃𝙰𝚁 𝚄𝙽𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʟᴏᴛᴇʀɪᴀ2 99*');
let apuesta = parseInt(q);
let resultado = cobrarMonedas(sender, apuesta);
if (!resultado.status) return enviar(resultado.message);
let probabilidad = Math.random();
let premio = 0;
if (probabilidad < 0.3) {
premio = apuesta * 3;
} else if (probabilidad < 0.6) {
premio = apuesta * 2;
}
if (premio > 0) {
registros.find(u => u.id === sender).coins += premio;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
enviar(`🎟️ *¡𝙶𝙰𝙽𝙰𝚂𝚃𝙴 𝙻𝙰 𝙻𝙾𝚃𝙴𝚁𝙸𝙰! 🎟️*\n\n*𝙰𝙿𝙾𝚂𝚃𝙰𝚂𝚃𝙴: $${apuesta} 🪙 𝚈 𝙷𝙰𝚂 𝙶𝙰𝙽𝙰𝙳𝙾 $${premio} 🪙*`);
} else {
enviar(`🎟️ *𝚄𝙿𝚂, 𝙴𝚂𝚃𝙰 𝚅𝙴𝚉 𝙿𝙴𝚁𝙳𝙸𝚂𝚃𝙴*\n\n*𝙰𝙿𝙾𝚂𝚃𝙰𝚂𝚃𝙴: $${apuesta} 🪙 ¡𝚂𝙸𝙶𝚄𝙴 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙽𝙳𝙾!*`);
}
}
break;

case 'claim': {
if(!isReg) return
if(!isGroup) return
const cooldownFile = './archivos/json/cooldown.json';
let cooldowns = {};
if (fs.existsSync(cooldownFile)) {
cooldowns = JSON.parse(fs.readFileSync(cooldownFile));
}
const now = Date.now();
const cooldownTime = 24 * 60 * 60 * 1000;
const lastClaim = cooldowns[sender] || 0;
if (now - lastClaim < cooldownTime) {
let tiempoRestante = cooldownTime - (now - lastClaim);
let horas = Math.floor(tiempoRestante / (60 * 60 * 1000));
let minutos = Math.floor((tiempoRestante % (60 * 60 * 1000)) / (60 * 1000));
return enviar(`⏳ *𝙷𝙴𝚁𝚁𝙾𝚁, 𝙳𝙴𝙱𝙴𝚂 𝙴𝚂𝙿𝙴𝚁𝙰𝚁: ${horas} 𝙷𝙾𝚁𝙰𝚂 𝚈 ${minutos} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁 𝚃𝚄 𝙿𝚁𝙴𝙼𝙸𝙾 𝙳𝙸𝙰𝚁𝙸𝙾.*`);
}
let index = registros.findIndex(u => u.id === sender);
if (index === -1) return enviar('*🌸 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴𝚂 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁 𝙴𝚂𝚃𝙴 𝙿𝚁𝙴𝙼𝙸𝙾, 𝙿𝙾𝚁 𝚀𝚄𝙴 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾, 𝙿𝙰𝚁𝙰 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝚁𝚃𝙴 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 .ʀᴇɢ*');
registros[index].coins += 100;
cooldowns[sender] = now;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
fs.writeFileSync(cooldownFile, JSON.stringify(cooldowns, null, 2));
enviar(`🎁 *¡𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚂𝚃𝙴 𝚃𝚄 𝚁𝙴𝙶𝙰𝙻𝙾!* 🎁\n\n*💰 𝙷𝙰𝚂 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝙳𝙾 $100 🪙*\n\n⌛ *𝙴𝚂𝙿𝙴𝚁𝙰 𝙰𝚂𝚃𝙰 𝙼𝙰𝙽̃𝙰𝙽𝙰 𝙿𝙰𝚁𝙰 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝚁𝙴𝙲𝙻𝙰𝙼𝙰𝚁 𝚃𝚄 𝙿𝚁𝙴𝙼𝙸𝙾.*`);
}
break;

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘𝗟 𝗖𝗥𝗘𝗔𝗗𝗢𝗥

case 'bot': 
if(!isOwner) return
if (!args[0]) return enviar('*🌸 𝙳𝙴𝙱𝙴𝚂 𝙳𝙴 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙰𝚁, 𝚄𝙽𝙰 𝙾𝙿𝙲𝙸𝙾𝙽, 𝙴𝙽𝚃𝚁𝙰𝚁/𝚂𝙰𝙻𝙸𝚁 <𝚃𝙸𝙴𝙼𝙿𝙾> <𝙻𝙸𝙽𝙺> 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʙᴏᴛ ᴇɴᴛʀᴀʀ 10 <ʟɪɴᴋ>*');
const gruposFile = './archivos/json/grupos.json';
const grupos = fs.existsSync(gruposFile) ? JSON.parse(fs.readFileSync(gruposFile)) : [];
function guardarGrupos() {
fs.writeFileSync(gruposFile, JSON.stringify(grupos, null, 2));
}
if (args[0] === 'entrar') {
if (!args[1] || isNaN(args[1])) return enviar('*🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾 𝙴𝙽 𝙼𝙸𝙽𝚄𝚃𝙾𝚂*');
if (!args[2] || !args[2].includes('chat.whatsapp.com/')) return enviar('*🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾*');
let minutos = parseInt(args[1]);
let codigo = args[2].split('chat.whatsapp.com/')[1];
try {
let idGrupo = await susune.groupGetInviteInfo(codigo);
if (!idGrupo || !idGrupo.id.includes('@g.us')) return enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙴𝙻 𝙸𝙳 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*');
let yaRegistrado = grupos.some(g => g.id === idGrupo.id);
if (yaRegistrado) return enviar(`*🌸 𝙴𝙻 𝙱𝙾𝚃 𝚈𝙰 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject}\n\n🌷 𝙽𝙾 𝙽𝙴𝙲𝙴𝚂𝙸𝚃𝙰𝚂 𝚅𝙾𝙻𝚅𝙴𝚁 𝙰 𝙼𝙴𝚃𝙴𝚁𝙻𝙾`);
let respuesta = await susune.groupAcceptInvite(codigo);
if (respuesta) {
enviar(`*🌷 𝙴𝙻 𝙱𝙾𝚃 𝙴𝙽𝚃𝚁𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject} 𝙿𝙾𝚁 ${minutos} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂*`);
let fechaSalida = Date.now() + minutos * 60 * 1000;
grupos.push({ id: respuesta, salida: fechaSalida });
guardarGrupos();
} else {
enviar('*🌷 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝚄𝙽𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾*');
}
} catch (error) {
console.error('🌷 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝚄𝙽𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 𝙴𝚁𝚁𝙾𝚁:', error);
enviar('*🌷 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝚄𝙽𝙸𝚁 𝙴𝙻 𝙱𝙾𝚃 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰 𝙳𝙴 𝙽𝚄𝙴𝚅𝙾*');
}
} else if (args[0] === 'salir') {
if (!args[1] || !args[1].includes('chat.whatsapp.com/')) return enviar('*🌷 𝙳𝙴𝙱𝙴𝚂 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙳𝙾𝙽𝙳𝙴 𝚀𝚄𝙸𝙴𝚁𝙴𝚂 𝚀𝚄𝙴 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙰𝙻𝙶𝙰 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʙᴏᴛ sᴀʟɪʀ <ʟɪɴᴋ>*');
let codigo = args[1].split('chat.whatsapp.com/')[1];
try {
let idGrupo = await susune.groupGetInviteInfo(codigo);
if (!idGrupo || !idGrupo.id.includes('@g.us')) return enviar('*🌸 𝙽𝙾 𝙿𝚄𝙳𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙰𝚁 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*');
let index = grupos.findIndex(g => g.id === idGrupo.id);
if (index === -1) return enviar(`*🌸 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject} 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝙽𝙾 𝙿𝚄𝙴𝙳𝙴 𝚂𝙰𝙻𝙸𝚁*`);
grupos.splice(index, 1);
guardarGrupos();
await susune.groupLeave(idGrupo.id);
enviar(`*🌸 𝙴𝙻 𝙱𝙾𝚃 𝚂𝙰𝙻𝙸𝙾 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject} 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾*`);
} catch (error) {
console.error('*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:* ', error);
enviar('*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚂𝙰𝙻𝙸𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*');
}
} else {
enviar('*🌸 𝙳𝙴𝙱𝙴𝚂 𝙳𝙴 𝙴𝚂𝙿𝙴𝙲𝙸𝙵𝙸𝙲𝙰𝚁, 𝚄𝙽𝙰 𝙾𝙿𝙲𝙸𝙾𝙽, 𝙴𝙽𝚃𝚁𝙰𝚁/𝚂𝙰𝙻𝙸𝚁 <𝚃𝙸𝙴𝙼𝙿𝙾> <𝙻𝙸𝙽𝙺> 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ʙᴏᴛ ᴇɴᴛʀᴀʀ 10 <ʟɪɴᴋ>*');
}
break;


case 'tiempo': {
const gruposFile = './archivos/json/grupos.json';
const grupos = fs.existsSync(gruposFile) ? JSON.parse(fs.readFileSync(gruposFile)) : [];
if(!isOwner) return
if (!args[0] || !args[0].includes('chat.whatsapp.com/')) return enviar('*🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾*');
let codigo = args[0].split('chat.whatsapp.com/')[1];
try {
let idGrupo = await susune.groupGetInviteInfo(codigo);
if (!idGrupo || !idGrupo.id.includes('@g.us')) return enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾.*');
let grupo = grupos.find(g => g.id === idGrupo.id);
if (!grupo) return enviar('*🌸 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙴𝚂𝙴 𝙶𝚁𝚄𝙿𝙾*');
let fechaEntrada = new Date(grupo.salida - (30 * 24 * 60 * 60 * 1000));
let fechaExpiracion = new Date(grupo.salida); 
let tiempoRestanteMs = Math.max(0, grupo.salida - Date.now());
let tiempoTranscurridoMs = Date.now() - fechaEntrada.getTime();
let segundosRestantes = Math.floor(tiempoRestanteMs / 1000);
let minutosRestantes = Math.floor(tiempoRestanteMs / 60000);
let horasRestantes = Math.floor(segundosRestantes / 3600);
segundosRestantes = segundosRestantes % 60;
let segundosTranscurridos = Math.floor(tiempoTranscurridoMs / 1000);
let minutosTranscurridos = Math.floor(tiempoTranscurridoMs / 60000);
let horasTranscurridos = Math.floor(segundosTranscurridos / 3600);
segundosTranscurridos = segundosTranscurridos % 60;
let diasRestantes = Math.floor(minutosRestantes / 1440);
let diasTranscurridos = Math.floor(minutosTranscurridos / 1440);
let tiempoRestanteStr;
if (minutosRestantes < 60) {
tiempoRestanteStr = `*⏳ ${minutosRestantes} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂*`;
} else if (minutosRestantes < 1440) {
let horas = Math.floor(minutosRestantes / 60);
let minutos = minutosRestantes % 60;
tiempoRestanteStr = `${horas} 𝙷𝙾𝚁𝙰 ${horas > 1 ? 's' : ''} ${minutos} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂${minutos > 1 ? 's' : ''}`;
} else {
let dias = Math.floor(minutosRestantes / 1440);
let horas = Math.floor((minutosRestantes % 1440) / 60);
tiempoRestanteStr = `${dias} 𝙳𝙸𝙰 ${dias > 1 ? 's' : ''} ${horas} 𝙷𝙾𝚁𝙰 ${horas > 1 ? 's' : ''}`;
}
let tiempoTranscurridoStr = diasTranscurridos >= 1 ? `${diasTranscurridos} 𝙳𝙸𝙰𝚂 ${horasTranscurridos} 𝙷𝙾𝚁𝙰𝚂${minutosTranscurridos} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 ${segundosTranscurridos} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂` : `${minutosTranscurridos} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 ${segundosTranscurridos} 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂`;
let expiracionFecha = new Date(grupo.salida);
expiracionFecha.setDate(expiracionFecha.getDate() + (minutosRestantes > 43200 ? 30 : 0));
let fechaExpiracionStr = `${expiracionFecha.toLocaleDateString()}`;
if (tiempoRestanteMs <= 0) {
enviar(`*🌸 𝙳𝙰𝚃𝙾𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject}*\n\n` +
`*${botname}*\n` +
`📋 *𝙶𝚁𝚄𝙿𝙾:* ${idGrupo.subject}\n` +
`⏳ *𝙴𝚇𝙿𝙸𝚁𝙰𝙳𝙾:*\n`);
} else {
enviar(`*🌸 𝙳𝙰𝚃𝙾𝚂 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾: ${idGrupo.subject}*\n\n` +
`*${botname}*\n` +
`📋 *𝙶𝚁𝚄𝙿𝙾:* ${idGrupo.subject}\n` +
`⏳ *𝚃𝙸𝙴𝙼𝙿𝙾 𝚁𝙴𝚂𝚃𝙰𝙽𝚃𝙴:* ${tiempoRestanteStr}\n`);
}
} catch (error) {
console.error('*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*', error);
enviar('*🌸 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙻𝙰 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾:*');
}
break;
}

case 'dartiempo': {
const gruposFile = './archivos/json/grupos.json';
const grupos = fs.existsSync(gruposFile) ? JSON.parse(fs.readFileSync(gruposFile)) : [];
if(!isOwner) return
if (!args[0] || !args[0].includes('chat.whatsapp.com/')) return enviar('*🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝚄𝙽 𝙴𝙽𝙻𝙰𝙲𝙴 𝚅𝙰𝙻𝙸𝙳𝙾*');
let codigo = args[0].split('chat.whatsapp.com/')[1];
let minutosAAgregar = args[1] ? parseInt(args[1]) : 0;
if (isNaN(minutosAAgregar) || minutosAAgregar <= 0) {
        return enviar('*🌸 𝙲𝙾𝙻𝙾𝙲𝙰 𝚄𝙽𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙳𝙴 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 𝚅𝙰𝙻𝙸𝙳𝙰𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾:  .ᴅᴀʀᴛɪᴇᴍᴘᴏ <ʟɪɴᴋ> <ᴍɪɴᴜᴛᴏs>*');
}
try {
let idGrupo = await susune.groupGetInviteInfo(codigo);
if (!idGrupo || !idGrupo.id.includes('@g.us')) return enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙴𝙽𝙲𝙾𝙽𝚃𝚁𝙾 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*');
let grupo = grupos.find(g => g.id === idGrupo.id);
if (!grupo) return enviar('*🌸 𝙴𝙻 𝙱𝙾𝚃 𝙽𝙾 𝙴𝚂𝚃𝙰 𝙴𝙽 𝙴𝙻 𝙶𝚁𝚄𝙿𝙾*');
let nuevaFechaExpiracion = new Date(grupo.salida);
nuevaFechaExpiracion.setMinutes(nuevaFechaExpiracion.getMinutes() + minutosAAgregar);
grupo.salida = nuevaFechaExpiracion.getTime();
fs.writeFileSync(gruposFile, JSON.stringify(grupos, null, 2));
enviar(`*🌸 𝚂𝙴 𝙻𝙴 𝙰𝙶𝚁𝙴𝙶𝙾 ${minutosAAgregar} 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 ${minutosAAgregar > 1 ? 's' : ''} 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾 ${idGrupo.subject}.*\n`);
} catch (error) {
console.error('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾, 𝙴𝚁𝚁𝙾𝚁:*', error);
enviar('*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻𝙸𝚉𝙰𝚁 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾*');
}
}
break;

case 'ping': {
if(!isOwner) return
const startTime = Date.now();
await susune.sendMessage(from, { text: '*🌸 𝙲𝙰𝙻𝙲𝚄𝙻𝙰𝙽𝙳𝙾 𝙴𝙻 𝙿𝙸𝙽𝙶....*' });
const endTime = Date.now();
const ping = endTime - startTime;
const lastOnline = susune.lastDisconnect ? moment(susune.lastDisconnect.date).format('DD/MM/YYYY HH:mm:ss') : 'Desconocida';
const deviceType = susune.user.id.includes(':') ? 'Android' : 'Web/PC';
const baileysVersion = require('@whiskeysockets/baileys/package.json').version;
const archivosBase = fs.readdirSync('./').filter(file => file.endsWith('.js')).join(', ');
enviar(`*🌷 𝙳𝙰𝚃𝙾𝚂 𝙳𝙴𝙻 𝙱𝙾𝚃 🌷*\n
📡 *𝙲𝙾𝙽𝙴𝚇𝙸𝙾𝙽: Wi-Fi*
⚡ *𝚅𝙴𝙻𝙾𝙲𝙸𝙳𝙰𝙳: ${ping}ms*
🕰️ *𝚄𝙻𝚃𝙸𝙼𝙰 𝚅𝙴𝚉: Hace 0.5 Seg.*
🤖 *𝙱𝙾𝚃 𝚃𝙸𝙿𝙾: Case*
📚 *𝙻𝙸𝙱𝚁𝙴𝚁𝙸𝙰: Baileys v${baileysVersion}* 
📂 *𝙰𝚁𝙲𝙷𝙸𝚅𝙾 𝙱𝙰𝚂𝙴: ${archivosBase}*`);
}
break;

case 'dardiamantes': {
  if (!isOwner) return;
  if (args.length < 2) return enviar('*💎 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂Í: .ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs <ᴄᴀɴᴛɪᴅᴀᴅ> <@ᴛᴀɢ>*');

  let cantidad = parseInt(args[0]);
  let id = args[1].replace('@', '') + '@s.whatsapp.net';
  if (isNaN(cantidad) || cantidad <= 0) return enviar('*💎 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙽𝙾 𝙴𝚂 𝚅𝙰́𝙻𝙸𝙳𝙰*');

  let i = registros.findIndex(u => u.id === id);
  if (i === -1) return enviar('*💎 𝙴𝚂𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');

  let user = registros[i];
  let antes = user.diamantes;
  user.diamantes += cantidad;
  let ahora = user.diamantes;

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
  enviar(`*💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝙴𝙽𝚃𝚁𝙴𝙶𝙰𝙳𝙾𝚂 𝙰 ${user.nombre}*\n\n✨ *𝙰𝙽𝚃𝙴𝚂: $${antes} 💎*\n➕ *𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾𝚂: $${cantidad} 💎*\n💠 *𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴: $${ahora} 💎*`);
}
break;

case 'quitardiamantes': {
  if (!isOwner) return;
  if (args.length < 2) return enviar('*💎 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙰𝚂Í: .ǫᴜɪᴛᴀʀᴅɪᴀᴍᴀɴᴛᴇs <ᴄᴀɴᴛɪᴅᴀᴅ> <@ᴛᴀɢ>*');

  let cantidad = parseInt(args[0]);
  let id = args[1].replace('@', '') + '@s.whatsapp.net';
  if (isNaN(cantidad) || cantidad <= 0) return enviar('*💎 𝙻𝙰 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙽𝙾 𝙴𝚂 𝚅𝙰́𝙻𝙸𝙳𝙰*');

  let i = registros.findIndex(u => u.id === id);
  if (i === -1) return enviar('*💎 𝙴𝚂𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰́ 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');

  let user = registros[i];
  if (user.diamantes < cantidad) return enviar(`*💎 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 ${user.nombre} 𝙽𝙾 𝚃𝙸𝙴𝙽𝙴 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂*`);

  let antes = user.diamantes;
  user.diamantes -= cantidad;
  let ahora = user.diamantes;

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
  enviar(`*💎 𝙳𝙸𝙰𝙼𝙰𝙽𝚃𝙴𝚂 𝚀𝚄𝙸𝚃𝙰𝙳𝙾𝚂 𝙰 ${user.nombre}*\n\n💠 *𝚃𝙴𝙽𝙸𝙰: $${antes} 💎*\n➖ *𝚀𝚄𝙸𝚃𝙰𝙳𝙾𝚂: $${cantidad} 💎*\n✨ *𝙰𝙷𝙾𝚁𝙰 𝚃𝙸𝙴𝙽𝙴: $${ahora} 💎*`);
}
break;

case 'darmonedas': {
if(!isOwner) return
if (args.length < 2) return enviar('*🌸 𝙷𝙾𝙻𝙰 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙾𝙳𝙾:  .ᴅᴀʀᴍᴏɴᴇᴅᴀs <ᴄᴀɴᴛɪᴅᴀᴅ> <@ᴛᴀɢ>*');
let cantidad = parseInt(args[0]);
let usuario = args[1].replace('@', '') + '@s.whatsapp.net';
if (isNaN(cantidad) || cantidad <= 0) return enviar('*🌸 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙰*');
let index = registros.findIndex(u => u.id === usuario);
if (index === -1) return enviar('*🌸 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝚂𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');
let usuarioData = registros[index];
let saldoAnterior = usuarioData.coins;
usuarioData.coins += cantidad;
let saldoActual = usuarioData.coins;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
enviar(`*🌸 𝚂𝙴 𝙻𝙴 𝙷𝙰𝙽 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙼𝙾𝙽𝙴𝙳𝙰𝚂 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${usuarioData.nombre}*\n\n💰 *𝚂𝙰𝙻𝙳𝙾 𝙰𝙽𝚃𝙴𝚁𝙸𝙾𝚁: $${saldoAnterior}*\n💸 *𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙰: $${cantidad}*\n💸 *𝚂𝙰𝙻𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻: $${saldoActual}*`);
}
break;

case 'quitarmoneda': {
if(!isGroup) return
if(!isBotGroupAdmins) return
if(!isGroupAdmins) return
if (args.length < 2) return enviar('*🌸 𝙷𝙾𝙻𝙰 𝚄𝚂𝙰 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙼𝙾𝙳𝙾:  .ǫᴜɪᴛᴀʀᴍᴏɴᴇᴅᴀ <ᴄᴀɴᴛɪᴅᴀᴅ> <@ᴛᴀɢ>*');
let cantidad = parseInt(args[0]);
let usuario = args[1].replace('@', '') + '@s.whatsapp.net';
if (isNaN(cantidad) || cantidad <= 0) return enviar('*🌸 𝙲𝙰𝙽𝚃𝙸𝙳𝙰𝙳 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙰*');
let index = registros.findIndex(u => u.id === usuario);
if (index === -1) return enviar('*🌸 𝙴𝚂𝚃𝙴 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙽𝙾 𝙴𝚂𝚃𝙰 𝚁𝙴𝙶𝚂𝙸𝚂𝚃𝚁𝙰𝙳𝙾*');
let usuarioData = registros[index];
let saldoAnterior = usuarioData.coins;
if (saldoAnterior < cantidad) return enviar(`*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙿𝙴𝚁𝙾 𝙴𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${usuarioData.nombre} 𝙽𝙾 𝙲𝚄𝙴𝙽𝚃𝙰 𝙲𝙾𝙽 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 𝙼𝙾𝙽𝙴𝙳𝙰𝚂*`);
usuarioData.coins -= cantidad;
let saldoActual = usuarioData.coins;
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
enviar(`*🌸 𝚂𝙴 𝙻𝙴 𝙷𝙰𝙽 𝚀𝚄𝙸𝚃𝙰𝙳𝙾 𝙼𝙾𝙽𝙴𝙳𝙰𝚂 𝙰𝙻 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: ${usuarioData.nombre}*\n\n💰 *𝚃𝙴𝙽𝙸𝙰: $${saldoAnterior}*\n💸 *𝚂𝙴 𝙻𝙴 𝚀𝚄𝙸𝚃𝙰𝚁𝙾𝙽: $${cantidad}*\n💸 *𝚂𝙰𝙻𝙳𝙾 𝙰𝙲𝚃𝚄𝙰𝙻: $${saldoActual}*`);
}
break;

case 'ver':

if (!isQuotedImage && !isQuotedVideo && !isQuotedAudio) {
return enviar('*🌸 𝙷𝙾𝙻𝙰, 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚅𝙸𝙳𝙴𝙾, 𝙵𝙾𝚃𝙾 𝙾 𝙰𝚄𝙳𝙸𝙾.*');
}
try {
let mediaMessage;
let mediaType;
let captionText = '';
const getExtension = async (type) => {
return await mimetype.extension(type);
};
if (isQuotedImage) {
mediaMessage = info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage;
mediaType = 'image';
captionText = mediaMessage.caption || '';
} else if (isQuotedVideo) {
mediaMessage = info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage;
mediaType = 'video';
captionText = mediaMessage.caption || '';
} else if (isQuotedAudio) {
mediaMessage = info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage;
mediaType = 'audio';
}
const buffer = await getFileBuffer(mediaMessage, mediaType);
const extension = await getExtension(mediaMessage.mimetype);
const fileName = getRandom('.' + extension);
fs.writeFileSync(fileName, buffer);
const options = {
caption: `🌸 𝐍𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐨𝐜𝐮𝐥𝐭𝐚𝐫 𝐧𝐚𝐝𝐚 *(𝙿𝙾𝚁 𝚀𝚄𝙴 𝚃𝙴 𝙵𝙰𝙻𝚃𝙰 𝙾𝙳𝙸𝙾)*\n\n*🌷 ᴍᴇɴsᴀᴊᴇ:* ${captionText}`,
mentions: [sender]
};
if (mediaType === 'image') {
await susune.sendMessage(from, { image: fs.readFileSync(fileName), ...options }, { quoted: info });
} else if (mediaType === 'video') {
await susune.sendMessage(from, { video: fs.readFileSync(fileName), mimetype: 'video/mp4', ...options }, { quoted: info });
} else if (mediaType === 'audio') {
await susune.sendMessage(from, { audio: fs.readFileSync(fileName), mimetype: 'audio/mp4', ptt: false, ...options }, { quoted: info });
}
fs.unlinkSync(fileName);
} catch (error) {
enviar('*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁, 𝙴𝚂𝙴 𝙳𝙾𝙲𝚄𝙼𝙴𝙽𝚃𝙾 𝚃𝙸𝙴𝙽𝙴 𝚅𝙸𝚁𝚄𝚂*');
console.error(error);
}
break;



case 'spam':
if(!isOwner) return
if (!q) return enviar('*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙴𝙽𝚅𝙸𝙰𝚁 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂*');
enviar('*🌷 𝙸𝙽𝙸𝙲𝙸𝙰𝙽𝙳𝙾 𝙴𝙻 𝙴𝙽𝚅𝙸𝙾 𝙼𝙰𝚂𝙸𝚅𝙾 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴.*');
try {
let listaGrupos = await susune.groupFetchAllParticipating();
let gruposAbiertos = Object.values(listaGrupos).filter(g => !g.announce);
let totalGrupos = gruposAbiertos.length;
let enviados = 0;
const batchSize = 30;
for (let i = 0; i < totalGrupos; i += batchSize) {
const batch = gruposAbiertos.slice(i, i + batchSize);
for (let grupo of batch) {
try {
await susune.sendMessage(grupo.id, { text: q });
enviados++;
let delay = Math.floor(Math.random() * (30000 - 20000) + 20000);
await new Promise(resolve => setTimeout(resolve, delay));
} catch (error) {
console.log(`*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙻 𝙼𝙴𝙼𝚂𝙰𝙹𝙴 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾:* ${grupo.subject}:`, error);
}
}
enviar(`*🌷 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙾𝙽 ${enviados} 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂, 𝚃𝙾𝙼𝙴𝙼𝙾𝚂 𝚄𝙽𝙰 𝙿𝙰𝚄𝚂𝙰 𝚈 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝙼𝙾𝚂 𝙳𝙴 𝙵𝙾𝚁𝙼𝙰 𝙰𝚄𝚃𝙾𝙼𝙰𝚃𝙸𝙲𝙰.*`);
await new Promise(resolve => setTimeout(resolve, 600000));
enviar("⏳ *𝙼𝚄𝚈 𝙱𝙸𝙴𝙽, 𝚂𝙴 𝙰𝙲𝙰𝙱𝙾 𝙴𝙻 𝚃𝙸𝙴𝙼𝙿𝙾, 𝙲𝙾𝙽𝚃𝙸𝙽𝚄𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙴𝙻 𝙴𝙽𝚅𝙸𝙾 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂.*");
}
enviar(`*🌸 𝙴𝙽𝚅𝙸𝙾 𝙵𝙸𝙽𝙰𝙻𝙸𝚉𝙰𝙳𝙾, 𝙴𝙽𝚅𝙸𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽: ${enviados} 𝙶𝚁𝚄𝙿𝙾𝚂*`);
} catch (error) {
enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*');
console.error(error);
}
break;

case 'usuarioinfo':
case 'infouser': {
    const fs = require('fs');
    const fetch = require('node-fetch');

    let targett = m.mentionedJid?.[0] || quoted?.participant || m.sender;

    try {
        let url = await susune.profilePictureUrl(targett, 'image').catch(() => null);
        if (!url) url = await susune.profilePictureUrl(targett, 'preview').catch(() => null);

        let buffer;
        if (url) {
            try {
                const res = await fetch(url);
                buffer = await res.buffer();
            } catch (e) {
                buffer = null;
            }
        }

        if (!buffer || buffer.length === 0) {
            buffer = fs.readFileSync('./archivos/fotos/marca.jpg'); // imagen genérica
        }

        let numero = targett.replace('@s.whatsapp.net', '');
        let nombre = isGroup ? (groupMembers.find(u => u.id === targett)?.notify || 'Desconocido') : 'Desconocido';
        let nacionalidad = getNationality(numero);

        let mensaje = `🌸 *INFORMACIÓN DEL USUARIO* 🌸\n\n`;
        mensaje += `👤 *Nombre:* ${nombre}\n`;
        mensaje += `📞 *Número:* +${numero}\n`;
        mensaje += `🌍 *Nacionalidad:* ${nacionalidad}\n`;

        await susune.sendMessage(from, {
            image: buffer,
            caption: mensaje,
            mentions: [targett]
        });

    } catch (error) {
        console.error('[ERROR usuarioinfo]', error);
        enviar('❌ *No se pudo obtener la información.*');
    }
}
break;



case 'autoadmin':
if (!isOwner) return
if (!isGroup) return 
if (!isBotGroupAdmins) return;
if (isGroupAdmins) {
return enviar('*𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴, 𝙿𝙾𝚁 𝚀𝚄𝙴 𝚈𝙰 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 😊*');
}
try {
await susune.groupParticipantsUpdate(from, [sender], 'promote');
enviar('*𝙱𝙸𝙴𝙽 𝙷𝙴𝙲𝙷𝙾 𝙰𝙷𝙾𝚁𝙰 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 ✅*');
} catch (error) {
enviar('*𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙳𝙰𝚁𝚃𝙴 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 😔*');
console.error(error);
}
break;

case 'autoquitaradmin':
if (!isOwner) return
if (!isGroup) return 
if (!isBotGroupAdmins) return;
if (!isGroupAdmins) {
return enviar('*𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾, 𝙽𝙾 𝙴𝚁𝙴𝚂 𝙰𝙳𝙼𝙸𝙽 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 😔*');
}
try {
await susune.groupParticipantsUpdate(from, [sender], 'demote');
enviar('*𝚂𝙴 𝚃𝙴 𝚀𝚄𝙸𝚃𝙾 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴 ✅*');
} catch (error) {
enviar('*𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝚀𝚄𝙸𝚃𝙰𝚁𝚃𝙴 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 😔*');
console.error(error);
}
break;

case 'comandos':{ 
if(!isOwner) return
fs.readFile('./index.js', 'utf8', (err, data) => { 
  if (err) throw err;
  let regex = /case\s'(\w+)'/g;
  let match;
  let caseNames = [];
  while ((match = regex.exec(data)) !== null) {
    caseNames.push(match[1]);
  }
 let output = '' + caseNames.join('\n• ');
  let totalCount = caseNames.length;
  camndreg =  `
🌸 𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘𝗟 𝗕𝗢𝗧 🌸

*♥︎ 𝚃𝙾𝚃𝙰𝙻: ${totalCount}*

*𝙴𝚂𝚃𝙾𝚂 𝚂𝙾𝙽 𝚃𝙾𝙳𝙾𝚂 𝙻𝙾𝚂 𝙲𝙾𝙼𝙰𝙽𝙳𝙾𝚂 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚂 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂. 🥰*`
susune.sendMessage(from,{text : camndreg}, {quoted : info});
});
}
break

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗩𝗢𝗭

case 'nightcore': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.1,asetrate=44100*1.2,afftdn" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'nightcore2': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.15,asetrate=44100*1.4" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'nightcore3': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.15,asetrate=44100*1.4" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'nightcore3': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}

const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.05,asetrate=44100*1.2" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'infantil': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.2,asetrate=44100*1.7" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'masc': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.95,asetrate=44100*0.85" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

case 'grave': {
if (!isQuotedAudio) return enviar(`*🌸 𝚂𝙴𝙻𝙴𝙲𝙲𝙸𝙾𝙽𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾*`)
enviar(`*🌸 𝙼𝙾𝙳𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝙴𝙵𝙴𝙲𝚃𝙾 𝙳𝙴 𝙰𝚄𝙳𝙸𝙾*`)
const getExtension = async (type) => {
return await mimetype.extension(type)
}
const { exec } = require('child_process');
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.' + await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100*0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(gem)
if (err) return enviar('*🌸 𝙻𝙾 𝚂𝙸𝙴𝙽𝚃𝙾 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁*')
hah = fs.readFileSync(ran)
susune.sendMessage(from, {audio: hah, mimetype: 'audio/mp4', ptt: true}, {quoted: info})
fs.unlinkSync(ran)
})
}
break

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗜𝗔

case "ia": case 'deepseek':
if (!q) return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*");
try {
const apiKey = "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";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
const response = await axios.post(endpoint, {
model: "deepseek/deepseek-r1-distill-llama-8b",
messages: [
{ 
role: "system", 
content: "Por favor, responde siempre en español y proporciona respuestas detalladas. Si la pregunta es matemática, resuelve la operación de forma directa y concisa." 
},
{ 
role: "user", 
content: q 
}
],
temperature: 1.0,
max_tokens: 4000
}, {
headers: {
"Authorization": `Bearer ${apiKey}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://tu-sitio.com", 
"X-Title": "MiBotDeWhatsApp"
}
});
if (response.data.choices && response.data.choices.length > 0) {
const replyText = response.data.choices[0].message.content;
const cleanReplyText = replyText.split("\n").pop().trim();
enviar(`🐋 𝗔𝗜 𝗗𝗲𝗲𝗽 𝗦𝗲𝗲𝗸 🐋\n\n*${cleanReplyText}*`);
} else {
enviar("*🌷 𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝚅𝙰𝙻𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙸𝙰 𝙳𝙴𝙴𝙿 𝚂𝙴𝙴𝙺*");
}
} catch (error) {
console.error("*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁:*", error.response ? error.response.data : error.message);
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*");
}
break;

case "gpt":
if (!q) return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*");
try {
const apiKey = "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";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
const response = await axios.post(endpoint, {
model: "openai/gpt-4o",
messages: [
{ 
role: "system", 
content: "Por favor, responde siempre en español y proporciona respuestas detalladas. Si la pregunta es matemática, resuelve la operación de forma directa y concisa." 
},
{ 
role: "user", 
content: q
}
],
temperature: 1.0,
max_tokens: 2000,
}, {
headers: {
"Authorization": `Bearer ${apiKey}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://tu-sitio.com",
"X-Title": "MiBotDeWhatsApp"
}
});
if (response.data.choices && response.data.choices.length > 0) {
const replyText = response.data.choices[0].message.content;
const cleanReplyText = replyText.split("\n").pop().trim();
enviar(`🌷 𝗜𝗔 𝗖𝗵𝗮𝘁 𝗚𝗣𝗧 🌷\n\n*${cleanReplyText}*`);
} else {
enviar("*🌷 𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝚅𝙰𝙻𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙸𝙰 𝙲𝙷𝙰𝚃 𝙶𝙿𝚃 *");
}
} catch (error) {
console.error("*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁:*", error.response ? error.response.data : error.message);
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*");
}
break;

case "gpt2":
if (!q) return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*");
try {
const apiKey = "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";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
const response = await axios.post(endpoint, {
model: "openai/gpt-4o",
messages: [
{ 
role: "system", 
content: "Por favor, responde siempre en español y proporciona respuestas detalladas. Si la pregunta es matemática, resuelve la operación de forma directa y concisa." 
},
{ 
role: "user", 
content: q
}
],
temperature: 1.0,
max_tokens: 2000,
}, {
headers: {
"Authorization": `Bearer ${apiKey}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://tu-sitio.com",
"X-Title": "MiBotDeWhatsApp"
}
});
if (response.data.choices && response.data.choices.length > 0) {
const replyText = response.data.choices[0].message.content;
const cleanReplyText = replyText.split("\n").pop().trim();
enviar(`🌷 𝗜𝗔 𝗖𝗵𝗮𝘁 𝗚𝗣𝗧 🌷\n\n*${cleanReplyText}*`);
} else {
enviar("*🌷 𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝚅𝙰𝙻𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙸𝙰 𝙲𝙷𝙰𝚃 𝙶𝙿𝚃 *");
}
} catch (error) {
console.error("*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁:*", error.response ? error.response.data : error.message);
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*");
}
break;

case "gpt3":
if (!q) return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*");
try {
const apiKey = "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";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
const response = await axios.post(endpoint, {
model: "openai/gpt-4o",
messages: [
{ 
role: "system", 
content: "Por favor, responde siempre en español y proporciona respuestas detalladas. Si la pregunta es matemática, resuelve la operación de forma directa y concisa." 
},
{ 
role: "user", 
content: q
}
],
temperature: 1.0,
max_tokens: 2500,
}, {
headers: {
"Authorization": `Bearer ${apiKey}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://tu-sitio.com",
"X-Title": "MiBotDeWhatsApp"
}
});
if (response.data.choices && response.data.choices.length > 0) {
const replyText = response.data.choices[0].message.content;
const cleanReplyText = replyText.split("\n").pop().trim();
enviar(`🌷 𝗜𝗔 𝗖𝗵𝗮𝘁 𝗚𝗣𝗧 🌷\n\n*${cleanReplyText}*`);
} else {
enviar("*🌷 𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝚅𝙰𝙻𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙸𝙰 𝙲𝙷𝙰𝚃 𝙶𝙿𝚃 *");
}
} catch (error) {
console.error("*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁:*", error.response ? error.response.data : error.message);
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*");
}
break;

case "gpt2":
if (!q) return enviar("*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙰 𝚄𝙽𝙰 𝙿𝚁𝙴𝙶𝚄𝙽𝚃𝙰*");
try {
const apiKey = "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";
const endpoint = "https://openrouter.ai/api/v1/chat/completions";
const response = await axios.post(endpoint, {
model: "openai/gpt-4o",
messages: [
{ 
role: "system", 
content: "Por favor, responde siempre en español y proporciona respuestas detalladas. Si la pregunta es matemática, resuelve la operación de forma directa y concisa." 
},
{ 
role: "user", 
content: q
}
],
temperature: 1.0,
max_tokens: 2000,
}, {
headers: {
"Authorization": `Bearer ${apiKey}`,
"Content-Type": "application/json",
"HTTP-Referer": "https://tu-sitio.com",
"X-Title": "MiBotDeWhatsApp"
}
});
if (response.data.choices && response.data.choices.length > 0) {
const replyText = response.data.choices[0].message.content;
const cleanReplyText = replyText.split("\n").pop().trim();
enviar(`🌷 𝗜𝗔 𝗖𝗵𝗮𝘁 𝗚𝗣𝗧 🌷\n\n*${cleanReplyText}*`);
} else {
enviar("*🌷 𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽𝙰 𝚁𝙴𝚂𝙿𝚄𝙴𝚂𝚃𝙰 𝚅𝙰𝙻𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝙻𝙰 𝙸𝙰 𝙲𝙷𝙰𝚃 𝙶𝙿𝚃 *");
}
} catch (error) {
console.error("*🌷 𝙾𝙲𝚄𝚁𝚁𝙸𝙾 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁:*", error.response ? error.response.data : error.message);
enviar("*🌸 𝙽𝙾 𝚂𝙴 𝙿𝚄𝙴𝙳𝙴 𝙸𝙽𝚃𝙴𝚁𝙰𝙲𝚃𝚄𝙰𝚁 𝙲𝙾𝙽 𝙻𝙰 𝙸𝙰 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙼𝙾𝙼𝙴𝙽𝚃𝙾*");
}
break;



//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗘𝗫𝗧𝗥𝗔𝗦

case 'owner' :
await susune.sendPresenceUpdate('composing', from)
susune.sendMessage(from, { contacts: { displayName: "adme", contacts: [{ vcard }]
}},{quoted : info })
break

case 'creador': 
await susune.sendMessage(from, { react: { text: `👑`, key: info.key }});
susune.sendMessage(from, { text: donor(comando, prefixo, pushname) });
break;

case 'prueba':
case 'test':
case 'teste':
enviar('*𝙷𝙾𝙻𝙰 𝙲𝙾𝙼𝙾 𝙴𝚂𝚃𝙰𝚂, 𝙴𝚂𝚃𝙴 𝙴𝚂 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙳𝙴 𝙿𝚁𝚄𝙴𝙱𝙰, 𝙿𝙰𝚁𝙰 𝙳𝙴𝙲𝙸𝚁𝚃𝙴 𝚀𝚄𝙴 𝚃𝙾𝙳𝙾 𝙵𝚄𝙽𝙲𝙸𝙾𝙽𝙰 𝙱𝙸𝙴𝙽. 😊.*')
break

case 'peruanos':
    if (!isGroup) return 
    let peruanos = groupMembers.filter(member => member.id.startsWith('51'));
    
    if (peruanos.length === 0) {
        return enviar('No hay miembros peruanos en este grupo.');
    }

    let mensajees = '*🇵🇪 𝐋𝐢𝐬𝐭𝐚 𝐃𝐞 𝐏𝐞𝐫𝐮𝐚𝐧𝐨𝐬 🇵🇪*\n\n';
    let mencioneees = [];

    peruanos.forEach(member => {
        let nombre = member.notify || 'Usuario';
        mensajees += `👤 @${member.id.split('@')[0]}\n📞 +${member.id.split('@')[0]}\n\n`;
        mencioneees.push(member.id);
    });

    susune.sendMessage(from, { text: mensajees, mentions: mencioneees });
    break;

case 'mexicanos':
    if (!isGroup) return 
    
    let mexicanos = groupMembers.filter(member => member.id.startsWith('52'));
    
    if (mexicanos.length === 0) {
        return enviar('No hay miembros mexicanos en este grupo.');
    }

    let mensajeess = '*🇲🇽 𝐋𝐢𝐬𝐭𝐚 𝐃𝐞 𝐌𝐞𝐱𝐢𝐜𝐚𝐧𝐨𝐬 🇲🇽*\n\n';
    let mencioneeess = [];

    mexicanos.forEach(member => {
        let nombre = member.notify || 'Usuario';
        mensajeess += `👤 @${member.id.split('@')[0]}\n📞 +${member.id.split('@')[0]}\n\n`;
        mencioneeess.push(member.id);
    });

    susune.sendMessage(from, { text: mensajeess, mentions: mencioneeess });
    break;


case 'violar': 
case 'coger': 
case 'follar': 
case 'chuparteta': 
case 'chuparpene': 
case 'chuparvagina': {
let mencionados = info.message.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (!isGroup) return enviar('*🌷 Este comando solo se puede usar en grupos.*');

    let mencionado = info.message.extendedTextMessage?.contextInfo?.mentionedJid;
    let sender = info.key.participant || info.participant || info.remoteJid;
    

    let usuario = (mencionado && mencionado.length > 0) ? mencionado[0] : sender;
    let usuario1 = mencionados[0] || '';
    let usuario2 = from; 

    if (!usuario1) {
        return enviar('*❌ Error: No se detectó un usuario mencionado.*');
    }


    let nombreUsuario2 = info.pushName || 'Tú';

    let nombreUsuario1 = usuario1.split("@")[0]; 
    let miembro = groupMembers.find(member => member.id === usuario);
    

    let nombreUsuario = miembro?.notify || miembro?.subject || usuario.split('@')[0];


    let frasesAcciones = {
    'violar': [
        `se ha aprovechado de la inocencia de @${nombreUsuario} sin piedad, arrastrándolo a un abismo de deseo, dejándolo completamente rendido... 😱`,
        `lo tomó sin compasión, dejando a @${nombreUsuario} completamente en shock, incapaz de resistirse a su poder absoluto... 🔥`,
        `lo empujó a la oscuridad, sometiéndolo a sus deseos más oscuros, mientras @${nombreUsuario} temblaba de pura excitación... 💀`,
        `rompió todas las reglas, llevando a @${nombreUsuario} a un lugar de sumisión total, sin poder escapar de su control... 🌚`,
        `se entregó a su dominio, y @${nombreUsuario} no pudo más que ceder ante la intensidad, ardiendo de deseo... 😈`,
        `utilizó su fuerza, dominando a @${nombreUsuario} hasta que no pudo más que gemir de puro placer y miedo... 👹`,
        `sin piedad, @${nombreUsuario} fue arrastrado al infierno de la pasión, sin control ni escape... 🔥`,
        `lo sometió a su voluntad, dejando a @${nombreUsuario} completamente atrapado en su deseo, sin oportunidad de liberarse... 😏`,
        `no hubo resistencia, sólo pura entrega mientras @${nombreUsuario} caía bajo su dominio absoluto... 💥`,
        `arrasó con todo, llevándolo hasta el límite donde @${nombreUsuario} no pudo más que gritar su nombre... 💢`
    ],
    'coger': [
        `agarró a @${nombreUsuario} con una fuerza inhumana, llevándolo hasta el agotamiento total, pero no lo soltó... 🥵`,
        `se lanzó sobre @${nombreUsuario} sin control, enredándolos en un torbellino de deseo que los dejó exhaustos, pero insaciables... 😏`,
        `con cada embestida, lo arrastró a un mundo de placer y sumisión, dejando a @${nombreUsuario} completamente vulnerable... 🖤`,
        `se entregó al deseo sin piedad, arrastrando a @${nombreUsuario} en una espiral de deseo tan fuerte que no pudieron parar... 💢`,
        `tomó a @${nombreUsuario} sin compasión, haciendo que no pudiera pensar en nada más que en su cuerpo... 🔥`,
        `dominó a @${nombreUsuario} hasta que lo dejó sin aliento, exhausto pero completamente a su merced... 💪`,
        `no hubo descanso, siguió sin cesar hasta que @${nombreUsuario} no pudo más que sucumbir por completo... 😈`,
        `destruyó cualquier resistencia, llevando a @${nombreUsuario} más allá del límite de su resistencia... 💥`,
        `el placer fue tan intenso que @${nombreUsuario} olvidó quién era, completamente a la merced de su cuerpo... 💦`,
        `en cada movimiento, @${nombreUsuario} se desmoronaba más, completamente rendido al deseo insaciable... 🔥`
    ],
    'follar': [
        `se ha follado a @${nombreUsuario} con tal intensidad que @${nombreUsuario} no pudo más que gritar de placer... 😈`,
        `no pudo contenerse ni un segundo más y se lo llevó a la cama con una pasión tan ardiente que todo el cuarto tembló... 🍑`,
        `con cada penetración, la pasión crecía, hasta que @${nombreUsuario} no pudo más que rendirse ante el fuego que lo consumía... 🔥`,
        `la cama se convirtió en un campo de batalla, con @${nombreUsuario} gritando de placer y pidiendo más, totalmente entregado... 💥`,
        `el deseo los consumió por completo, y @${nombreUsuario} se derritió en sus brazos, completamente fuera de control... 💦`,
        `con cada empuje, @${nombreUsuario} no podía más que gemir y entregarse a la salvaje pasión que no daba tregua... 😏`,
        `cada embestida era más intensa que la anterior, dejando a @${nombreUsuario} totalmente agotado y deseando más... 💢`,
        `en cada caricia, el deseo se desbordaba, y @${nombreUsuario} ya no pudo más que gritar, rendido ante el placer... 😱`,
        `el cuarto se llenó de gemidos, y @${nombreUsuario} se entregó completamente, ya no quedaba más resistencia... 💣`,
        `no hubo tiempo para frenar, se sumergieron completamente en una espiral de placer incontrolable... 🔥`
    ],
    'chuparteta': [
        `se ha puesto a mamarle las tetas a @${nombreUsuario} con tal frenesí que @${nombreUsuario} no pudo evitar gemir de placer... 🍼`,
        `con una lengua insaciable, comenzó a chuparle las tetitas a @${nombreUsuario}, dejándola completamente empapada de deseo... 🤤`,
        `sin control, lamió cada rincón de su cuerpo, dejando a @${nombreUsuario} completamente mojada y deseando más... 🔥`,
        `no paró hasta que @${nombreUsuario} estaba completamente mojada, sucumbiendo ante el placer de su boca... 🍒`,
        `lo hizo tan bien que @${nombreUsuario} no pudo más que rendirse ante la intensidad, gimiendo de placer sin parar... 😈`,
        `se tragó sus deseos con tanta intensidad que @${nombreUsuario} quedó completamente humedecida, totalmente atrapada en su boca... 💋`,
        `su lengua recorrió cada rincón, llevando a @${nombreUsuario} al borde de la locura, totalmente fuera de control... 😜`,
        `no dejó lugar a dudas, su boca era el único lugar que @${nombreUsuario} podía pensar, completamente atrapada... 💦`,
        `con cada lamido, la excitación de @${nombreUsuario} creció hasta el límite, dejándola rendida en su boca... 😏`,
        `con cada chupón, la excitación crecía tanto que @${nombreUsuario} no podía hacer otra cosa que gemir y entregarse... 🔥`
    ],
    'chuparpene': [
        `le ha hecho una mamada épica a @${nombreUsuario}, llevándolo al borde del éxtasis, sin dejarle escapatoria... 🍆💦`,
        `se arrodilló y comenzó a chuparle sin piedad, llevándolo a un placer tan salvaje que no pudo pensar en nada más... 🤤`,
        `su boca no paraba, haciendo que @${nombreUsuario} temblara de placer, incapaz de resistir más... 💥`,
        `lo devoró por completo, cada movimiento llevando a @${nombreUsuario} más allá del placer y la desesperación... 🔥`,
        `le hizo gemir de placer, cada trago de su boca haciendo que @${nombreUsuario} gritara de éxtasis... 😏`,
        `su boca se movía sin descanso, y @${nombreUsuario} no pudo hacer nada más que rendirse al placer absoluto... 🍑`,
        `no paró hasta que @${nombreUsuario} explotó de placer, completamente fuera de control y a su merced... 🔥`,
        `cada segundo más intenso que el anterior, llevándolo a un nivel de placer tan alto que @${nombreUsuario} no sabía cómo reaccionar... 💥`,
        `su boca era un torrente de deseo, y @${nombreUsuario} no podía hacer otra cosa que rendirse completamente... 💦`,
        `tomó control total de su placer, dejando a @${nombreUsuario} completamente entregado, sin poder pensar en nada más... 😈`
    ],
    'chuparvagina': [
        `se lanzó directo a darle placer a @${nombreUsuario}, haciendo que se derritiera bajo su toque, totalmente rendida... 😏`,
        `le ha dado una sesión de lengua tan profunda que @${nombreUsuario} no pudo más que gritar su nombre, completamente fuera de control... 🍑💦`,
        `cada lamido fue una explosión de deseo, y @${nombreUsuario} se derritió bajo su toque, totalmente empapada... 🤯`,
        `no paró hasta que @${nombreUsuario} no pudo más que gritar de placer, completamente empapada de sudor y deseo... 🔥`,
        `la lengua se movía con tanta pasión que @${nombreUsuario} no pudo más que rendirse al placer, completamente fuera de control... 😜`,
        `se entregó con tanta intensidad que @${nombreUsuario} terminó llorando de placer, sin poder escapar de su boca... 💦`,
        `no dejó de lamer, haciendo que @${nombreUsuario} llegara a niveles de placer que jamás pensó que viviría... 😈`,
        `el placer fue tan grande que @${nombreUsuario} se derritió en su boca, completamente enloquecida por su toque... 😱`,
        `su lengua desató un torrente de placer que dejó a @${nombreUsuario} completamente rendida y mojada... 💣`,
        `lo hizo con tal destreza que @${nombreUsuario} no pudo resistir más, entregándose por completo al deseo... 🔥`
    ]
};
    

    let frases = frasesAcciones[comando] || [];
    

let mensaje = `*🌷 @${sender.split('@')[0]} ${frases[Math.floor(Math.random() * frases.length)]}*`;
susune.sendMessage(from, { text: mensaje, mentions: [sender, usuario] }, { quoted: info });



}
break

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗗𝗘 𝗧𝗢𝗣𝗦

case 'top': {
if (!isGroup) return
let tipo = args[0]?.toLowerCase();
if (!tipo) return enviar("*🌸 𝙴𝙻𝙸𝙹𝙴 𝚄𝙽 𝙾𝙿𝙲𝙸𝙾𝙽 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁𝚃𝙴 𝚄𝙽𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝚃𝙾𝙿𝚂, 𝙴𝙹𝙴𝙼𝙿𝙻𝙾: ┃❁⃝😚 .ᴛᴏᴘ ʟɪɴᴅᴀ*");
let miembros = groupMembers.map(m => m.id).filter(m => m !== BotNumber);
if (miembros.length < 10) return enviar("*🌸 𝙽𝙾 𝙷𝙰𝚈 𝚂𝚄𝙵𝙸𝙲𝙸𝙴𝙽𝚃𝙴𝚂 𝙼𝙸𝙴𝙼𝙱𝚁𝙾𝚂 𝙿𝙰𝚁𝙰 𝙷𝙰𝙲𝙴𝚁 𝚄𝙽 𝚃𝙾𝙿*");
let seleccionados = [];
while (seleccionados.length < 10) {
let elegido = miembros[Math.floor(Math.random() * miembros.length)];
if (!seleccionados.includes(elegido)) seleccionados.push(elegido);
}
let mensaje = "";
if (args[0] === 'feo' || args[0] === 'fea') {
mensaje = "🤢 𝗧𝗢𝗣 𝗗𝗘 𝗙𝗘𝗢𝗦 🤢";
} else if (args[0] === 'gay') {
mensaje = "🏳️‍🌈 𝗧𝗢𝗣 𝗗𝗘 𝗚𝗔𝗬𝗦 🏳️‍🌈";
} else if (args[0] === 'pitudos') {
mensaje = "🍆 𝗧𝗢𝗣 𝗗𝗘 𝗣𝗜𝗧𝗨𝗗𝗢𝗦 💦";
} else if (args[0] === 'pendejo' || args[0] === 'pendeja') {
mensaje = "🤡 𝗧𝗢𝗣 𝗗𝗘 𝗣𝗘𝗡𝗗𝗘𝗝𝗢𝗦 🤡";
} else if (args[0] === 'cuernudo' || args[0] === 'cuernuda') {
mensaje = "🦌 𝗧𝗢𝗣 𝗗𝗘 𝗖𝗨𝗘𝗥𝗡𝗨𝗗𝗢𝗦 💔";
} else if (args[0] === 'cachondo' || args[0] === 'cachonda') {
mensaje = "🔥 𝗧𝗢𝗣 𝗗𝗘 𝗖𝗔𝗖𝗛𝗢𝗡𝗗𝗢𝗦 🥵";
} else if (args[0] === 'urgido' || args[0] === 'urgida') {
mensaje = "🫦 𝗧𝗢𝗣 𝗗𝗘 𝗨𝗥𝗚𝗜𝗗𝗢𝗦 🔥";
} else if (args[0] === 'lindo' || args[0] === 'linda') {
mensaje = "😍 𝗧𝗢𝗣 𝗗𝗘 𝗟𝗜𝗡𝗗𝗢𝗦 😍";
} else if (args[0] === 'hermoso' || args[0] === 'hermosa') {
mensaje = "🥰 𝗧𝗢𝗣 𝗗𝗘 𝗛𝗘𝗥𝗠𝗢𝗦𝗢𝗦 🥰";
} else if (args[0] === 'tonto' || args[0] === 'tonta') {
mensaje = "😵‍💫 𝗧𝗢𝗣 𝗗𝗘 𝗧𝗢𝗡𝗧𝗢𝗦 😵‍💫";
} else if (args[0] === 'inteligente') {
mensaje = "🧠 𝗧𝗢𝗣 𝗗𝗘 𝗜𝗡𝗧𝗘𝗟𝗜𝗚𝗘𝗡𝗧𝗘𝗦 🧠";
} else if (args[0] === 'fiel' || args[0] === 'fieles') {
mensaje = "💖 𝗧𝗢𝗣 𝗗𝗘 𝗙𝗜𝗘𝗟𝗘𝗦 💖";
} else if (args[0] === 'infiel' || args[0] === 'infieles') {
mensaje = "💔 𝗧𝗢𝗣 𝗗𝗘 𝗜𝗡𝗙𝗜𝗘𝗟𝗘𝗦 💔";
} else if (args[0] === 'otaku' || args[0] === 'otakus') {
mensaje = "🎌 𝗧𝗢𝗣 𝗗𝗘 𝗢𝗧𝗔𝗞𝗨𝗦 🎌";
} else if (args[0] === 'fresa' || args[0] === 'fresas') {
mensaje = "🍓 𝗧𝗢𝗣 𝗗𝗘 𝗙𝗥𝗘𝗦𝗔𝗦 🍓";
} else if (args[0] === 'borracho' || args[0] === 'borracha') {
mensaje = "🍻 𝗧𝗢𝗣 𝗗𝗘 𝗕𝗢𝗥𝗥𝗔𝗖𝗛𝗢𝗦 🍻";
} else if (args[0] === 'dormilon' || args[0] === 'dormilona') {
mensaje = "😴 𝗧𝗢𝗣 𝗗𝗘 𝗗𝗢𝗥𝗠𝗜𝗟𝗢𝗡𝗘𝗦 💤";
} else if (args[0] === 'trabajador' || args[0] === 'trabajadora') {
mensaje = "💼 𝗧𝗢𝗣 𝗗𝗘 𝗧𝗥𝗔𝗕𝗔𝗝𝗔𝗗𝗢𝗥𝗘𝗦 💼";
} else if (args[0] === 'vago' || args[0] === 'vaga') {
mensaje = "😆 𝗧𝗢𝗣 𝗗𝗘 𝗩𝗔𝗚𝗢𝗦 😆";
} else if (args[0] === 'toxico' || args[0] === 'toxica') {
mensaje = "☠️ 𝗧𝗢𝗣 𝗗𝗘 𝗧𝗢𝗫𝗜𝗖𝗢𝗦 ☠️";
} else if (args[0] === 'fachero' || args[0] === 'fachera') {
mensaje = "😎 𝗧𝗢𝗣 𝗗𝗘 𝗙𝗔𝗖𝗛𝗘𝗥𝗢𝗦 😎";
} else {
return enviar("*🌸 𝙴𝙻𝙸𝙹𝙴 𝙱𝙸𝙴𝙽 𝚄𝙽𝙰 𝙾𝙿𝙲𝙸𝙾𝙽 𝙴𝙹𝙴𝙼𝙿𝙻𝙾, ┃❁⃝😚 .ᴛᴏᴘ ʟɪɴᴅᴀ*");
}
let lista = seleccionados.map((u, i) => `*${i + 1}➩* @${u.split('@')[0]}`).join('\n');
susune.sendMessage(from, { text: `*${mensaje}*\n\n${lista}`, mentions: seleccionados }, { quoted: info });
}
break;

case 'lindo':
case 'linda':
case 'hermoso':
case 'hermosa':
case 'preciosa':
case 'precioso':
case 'guapo':
case 'guapa':
case 'bello':
case 'bella':
case 'atractiva':
case 'atractivo': 
case 'feo':
case 'fea':
case 'horrible':
case 'terrible':
case 'desastroso':
case 'desastrosa':
case 'repugnante':
case 'escalofriante': {
if (!isGroup) return 
if (!info.message.extendedTextMessage || !info.message.extendedTextMessage.contextInfo.mentionedJid) {
return enviar('*🌸 Menciona a un usuario para calcular su belleza, ejemplo: .lindo @usuario*');
}
let mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0];
let porcentaje = Math.floor(Math.random() * 101);
let nombres = [`lindo`, `hermoso`, `precioso`, `guapo`, `atractivo`, `bello`];
let nombresF = [`linda`, `hermosa`, `preciosa`, `guapa`, `atractiva`, `bella`];
let nombresN = [`feo`, `horrible`, `terrible`, `desastroso`, `repugnante`, `escalofriante`];
let frases = [
`¡Waaa! su belleza es increíble, parece un modelo profesional.`,
`Dios mío, ¡qué esplendor! 😍`,
`Alguien tan ${nombres[Math.floor(Math.random() * nombres.length)]} como tú debería estar en una película.`,
`Con ese nivel de belleza, debería cobrar por mirarlo.`,
`Este usuario redefine la perfección, ¡qué gran presencia!`,
`Por favor, deja algo de belleza para los demás.`,
`Dios debe haber estado de muy buen humor cuando te creó.`,
`Si la belleza fuera tiempo, serías la eternidad misma.`,
`¡Cuidado! Puede derretir corazones con tanta hermosura.`,
`¡Definitivamente es la estrella del grupo! 🌟`
];
let frasesF = [
`¡Qué radiante, como el sol en un día perfecto!`,
`¡Waaa! Eres un sueño hecho realidad. 💖`,
`Brilla más que todas las estrellas juntas.`,
`El cielo debe estar triste porque perdió a un ángel como tú.`,
`No hay palabras para describir tanta hermosura.`,
`Dicen que la perfección no existe, pero mírate a ti.`,
`Su belleza ilumina todo el grupo. 🌷`,
`Si la elegancia tuviera un nombre, sin duda sería el tuyo.`,
`¡Demasiada ternura en una sola persona!`,
`¡Abran paso! Aquí viene la realeza de la hermosura. 👑`
];
let frasesN = [
`¡Dios mío, qué desastre! 🤢`,
`Si la fealdad fuera un deporte, serías campeón mundial.`,
`¿No será que rompió el espejo de su casa de lo feo que es?`,
`Bueno... al menos tiene una gran personalidad (esperemos).`,
`La NASA quiere estudiarte porque eres un fenómeno único.`,
`Dicen que la belleza está en el interior... ¡espero que sea cierto!`,
`No te preocupes, la belleza es subjetiva... o eso dicen.`,
`Tal vez en otra vida tengas más suerte en lo físico.`,
`¡Es un arte ser tan feo y a la vez tan especial!`,
`El club de la fealdad te ha nombrado presidente. 😵`
];
let genero = Math.random() < 0.5 ? 'M' : 'F';
let mensaje = '';
if (porcentaje >= 70) {
mensaje = `*🌷 ¡𝙷𝙾𝙻𝙰!, 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 @${mentioned.split("@")[0]}*\n\n`
+ `*🌸 ${genero === 'M' ? nombres[Math.floor(Math.random() * nombres.length)] : nombresF[Math.floor(Math.random() * nombresF.length)]}, ${frases[Math.floor(Math.random() * frases.length)]}*\n\n`
+ `*🌷 Su porcentaje de belleza es de ${porcentaje}%*`;
} else if (porcentaje >= 40) {
mensaje = `*🌷 ¡𝙷𝙾𝙻𝙰!, 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 @${mentioned.split("@")[0]}*\n\n`
+ `*🌸 No está nada mal, pero podrías mejorar. 🙃*\n\n`
+ `*🌷 Su porcentaje de belleza es de ${porcentaje}%*`;
} else {
mensaje = `*🌷 ¡𝙷𝙾𝙻𝙰!, 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 @${mentioned.split("@")[0]}*\n\n`
+ `*🌸 ${nombresN[Math.floor(Math.random() * nombresN.length)]}, ${frasesN[Math.floor(Math.random() * frasesN.length)]}*\n\n`
+ `*🌷 Su porcentaje de belleza es de ${porcentaje}%*`;
}
susune.sendMessage(from, { text: mensaje, mentions: [mentioned] }, { quoted: info });
}
break;

//𝗖𝗢𝗠𝗔𝗡𝗗𝗢𝗦 𝗘𝗦𝗣𝗘𝗖𝗜𝗔𝗟𝗘𝗦

case 'ip': {
    if (!q) return enviar('*𝙲𝙾𝙻𝙾𝙲𝙰 𝚃𝚄 𝙸𝙿*\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ɪᴘ 1.1.1.1*');

    const ip = q.trim();
    const apiUrl = `http://ip-api.com/json/${ip}?fields=status,country,regionName,city,isp,proxy,hosting,query`;

    try {
        // Frases random
        const frases = [
            "🌍 𝙴𝚂𝚃𝙾𝚈 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝚃𝚄 𝙻𝙾𝙲𝙰𝙻𝙸𝚉𝙰𝙲𝙸𝙾́𝙽... 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾 🕵️",
            "📡 𝙴𝚂𝚃𝙾𝚈 𝚁𝙴𝙲𝙸𝙱𝙸𝙴𝙽𝙳𝙾 𝙳𝙰𝚃𝙾𝚂 𝙳𝙴 𝚃𝚄 𝙸𝙿... 𝙰𝚂𝙴𝙶𝚄́𝚁𝙰𝚃𝙴 𝚀𝚄𝙴 𝙴𝚂 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰 ⚡",
            "🔎 𝙰𝙽𝙰𝙻𝙸𝚉𝙰𝙽𝙳𝙾 𝙲𝙾𝙽𝙴𝚇𝙸𝙾́𝙽... 𝙽𝙾 𝚃𝙰𝚁𝙳𝙰𝚁𝙴́ ⏳",
            "⚡ 𝙲𝙾𝙼𝙿𝚁𝙾𝙱𝙰𝙽𝙳𝙾 𝙴𝙽 𝙲𝙴𝙽𝚃𝚁𝙾𝚂 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂... 𝙴𝚂𝙿𝙴𝚁𝙰 𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 🤖",
            "📊 𝙿𝚁𝙾𝙲𝙴𝚂𝙰𝙽𝙳𝙾 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽... 𝙴𝚂𝙲𝙰𝙽𝙴𝙾 𝙲𝙰𝚂𝙸 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙾! 🔥"
        ];
        const fraseRandom = frases[Math.floor(Math.random() * frases.length)];

        // Enviar mensaje inicial con frase random
        let mensajeInicial = await susune.sendMessage(from, {
            text: `*🔍 𝙴𝚂𝙲𝙰𝙽𝙴𝙰𝙽𝙳𝙾 𝙻𝙰 𝙸𝙿 🔍*\n\n*${fraseRandom}*`
        });
        console.log("Mensaje inicial enviado, key:", mensajeInicial.key);

        // Esperar 5 segundos antes de editar el mensaje
        await delay(5000);

        // Obtener los datos de la IP
        const { data } = await axios.get(apiUrl);
        if (data.status !== "success") {
            return await susune.sendMessage(from, {
                text: '*❌ 𝙻𝙰 𝙸𝙿 𝚀𝚄𝙴 𝙸𝙽𝙶𝚁𝙴𝚂𝙰𝚂𝚃𝙴 𝙽𝙾 𝙴𝚂 𝚅𝙰𝙻𝙸𝙳𝙰.*',
                edit: mensajeInicial.key
            });
        }

        // Obtener datos
        const pais = data.country || "Desconocido";
        const region = data.regionName || "Desconocido";
        const ciudad = data.city || "Desconocido";
        const proveedor = data.isp || "Desconocido";
        const proxy = data.proxy ? "Sí" : "No";
        const hosting = data.hosting ? "Sí" : "No";

        // Calcular riesgo
        let riesgo = 0;
        if (data.proxy) riesgo += 50;
        if (data.hosting) riesgo += 30;

        // Determinar nivel de riesgo
        let colorRiesgo = '🟢 *Seguro*';
        if (riesgo > 20 && riesgo < 50) colorRiesgo = '🟠 *Sospechoso*';
        if (riesgo >= 50) colorRiesgo = '🔴 *Peligroso*';

        // Construir mensaje final
        const resultado = `[(𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁)] *@ᴋᴀᴋᴀsʜɪ*\n\n` +
            `🔎 *Información de la IP:*\n\n` +
            `📍 *País:* ${pais}\n` +
            `🏙️ *Región:* ${region}\n` +
            `🌆 *Ciudad:* ${ciudad}\n` +
            `🏢 *Proveedor:* ${proveedor}\n` +
            `🔌 *Proxy:* ${proxy}\n` +
            `🖥️ *Hosting:* ${hosting}\n` +
            `⚠️ *Riesgo estimado:* ${riesgo}%\n` +
            `🔹 *Estado:* ${colorRiesgo}`;

        // Editar mensaje inicial con el resultado final
        try {
            await susune.sendMessage(from, { text: resultado, edit: mensajeInicial.key });
            console.log("Mensaje editado con éxito.");
        } catch (editError) {
            console.error("Error al editar mensaje:", editError);
            // Como fallback, enviar un nuevo mensaje
            await susune.sendMessage(from, { text: resultado });
        }

    } catch (error) {
        console.error("❌ Error en comando ip:", error);
        await susune.sendMessage(from, {
            text: '*❌ 𝙴𝚁𝚁𝙾𝚁 𝙰𝙻 𝙾𝙱𝚃𝙴𝙽𝙴𝚁 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 𝙳𝙴 𝙻𝙰 𝙸𝙿.*'
        });
    }
    break;
}

case 'bin': {
    if (!q) return enviar("*⚠️ Usa el comando así: .bin 457173*");

    let binNumber = q.trim();
    if (binNumber.length < 6 || isNaN(binNumber)) {
        return enviar("*⚠️ Debes ingresar un BIN válido. Ejemplo: .bin 457173*");
    }

    let url = `https://lookup.binlist.net/${binNumber}`;

    try {
        // Frases random
        const frases = [
            "🔎 𝙲𝙾𝙼𝙿𝚁𝙾𝙱𝙰𝙽𝙳𝙾 𝙱𝙸𝙽, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾... ⏳",
            "💳 𝙰𝙽𝙰𝙻𝙸𝚉𝙰𝙽𝙳𝙾 𝙱𝙰𝙽𝙲𝙾 𝚈 𝙿𝙰𝙸𝚂... 🌍",
            "🎯 𝙴𝚂𝚃𝙾𝚈 𝙲𝙾𝙽𝚂𝚄𝙻𝚃𝙰𝙽𝙳𝙾 𝙴𝙻 𝙱𝙸𝙽, 𝙳𝙰𝙼𝙴 𝚄𝙽𝙾𝚂 𝚂𝙴𝙶𝚄𝙽𝙳𝙾𝚂... ⚡",
            "🏦 𝙲𝙷𝙴𝙲𝙰𝙽𝙳𝙾 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 𝙳𝙴 𝙻𝙰 𝙲𝙰𝚁𝚃𝙰... 🕵️",
            "📊 𝙿𝚁𝙾𝙲𝙴𝚂𝙰𝙽𝙳𝙾 𝙳𝙰𝚃𝙾𝚂 𝙳𝙴𝙻 𝙱𝙸𝙽, 𝙿𝙰𝙲𝙸𝙴𝙽𝙲𝙸𝙰... 🚀"
        ];
        const fraseRandom = frases[Math.floor(Math.random() * frases.length)];

        // Enviar mensaje inicial con frase random
        let mensajeInicial = await susune.sendMessage(from, {
            text: `*🔍 𝙴𝚂𝚃𝙰𝙼𝙾𝚂 𝙲𝙾𝙽𝚂𝚄𝙻𝚃𝙰𝙽𝙳𝙾 𝙴𝙻 𝙱𝙸𝙽 🔍*\n\n*${fraseRandom}*`
        });
        console.log("Mensaje inicial enviado, key:", mensajeInicial.key);

        // Esperar 5 segundos antes de editar el mensaje
        await delay(5000);

        // Consultar API para obtener información del BIN
        let res = await fetch(url, { headers: { "Accept-Version": "3" } });
        if (!res.ok) {
            throw new Error(`Error en la API (Código ${res.status})`);
        }

        let text = await res.text();
        if (!text) {
            throw new Error("Respuesta vacía de la API");
        }

        let data = JSON.parse(text);
        if (!data || Object.keys(data).length === 0) {
            return await susune.sendMessage(from, {
                text: "❌ *No se encontró información para este BIN.*",
                edit: mensajeInicial.key
            });
        }

        // Obtener datos
        let banco = data.bank?.name || "Desconocido";
        let pais = data.country?.name || "Desconocido";
        let paisCodigo = data.country?.alpha2 || "--";
        let tipo = data.type || "Desconocido";
        let nivel = data.brand || "Desconocido";
        let esquema = data.scheme || "Desconocido";
        let moneda = data.country?.currency || "Desconocida";
        let activo = data.prepaid ? "✅ Activa (Prepagada)" : "✅ Activa";

        // Construir mensaje final
        let mensajeFinal = `[(𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁)] *@ᴋᴀᴋᴀsʜɪ*\n\n` +
            `🎟️ *Consulta BIN*\n\n` +
            `🔢 *BIN:* ${binNumber}\n` +
            `🏦 *Banco:* ${banco}\n` +
            `🌍 *País:* ${pais} (${paisCodigo})\n` +
            `💰 *Moneda:* ${moneda}\n` +
            `💳 *Tipo:* ${tipo}\n` +
            `💼 *Nivel:* ${nivel}\n` +
            `📌 *Esquema:* ${esquema}\n` +
            `🟢 *Estado:* ${activo}`;

        // Intentar editar el mensaje original con el resultado final
        try {
            await susune.sendMessage(from, { text: mensajeFinal, edit: mensajeInicial.key });
            console.log("Mensaje editado con éxito.");
        } catch (editError) {
            console.error("Error al editar mensaje:", editError);
            // En caso de error al editar, enviar un nuevo mensaje
            await susune.sendMessage(from, { text: mensajeFinal });
        }

        // Guardar consulta en log
        guardarLog(from, `.bin ${binNumber}`, mensajeFinal);

    } catch (error) {
        console.error("❌ Error al consultar el BIN:", error);
        await susune.sendMessage(from, {
            text: "❌ *Error al consultar el BIN. Intenta de nuevo más tarde.*"
        });
    }
    break;
}

// Variable global para almacenar los intervalos activos


case 'recordatorio': {
    if (!isGroup) return enviar("*⛔ Este comando solo funciona en grupos.*");
    if (!isGroupAdmins) return enviar("*⛔ Solo los administradores pueden usar este comando.*");
const intervalos = {};
    const recordatorioPath = './archivos/json/recordatorios.json';
    let recordatorios = fs.existsSync(recordatorioPath) ? JSON.parse(fs.readFileSync(recordatorioPath)) : {};

    // Desactivar el recordatorio
    if (args[0] === "off") {
        if (!recordatorios[from]) return enviar("*𝙽𝙾 𝙷𝙰𝚈 𝚄𝙽 𝚁𝙴𝙲𝙾𝚁𝙳𝙰𝚃𝙾𝚁𝙸𝙾 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 🥰*");
        
        // Limpiar el intervalo si está activo
        if (intervalos[from]) {
            clearInterval(intervalos[from]);
            delete intervalos[from];
        }

        delete recordatorios[from];
        fs.writeFileSync(recordatorioPath, JSON.stringify(recordatorios, null, 2));
        return enviar("*✅ 𝚂𝙴 𝙳𝙴𝚃𝚄𝙱𝙾 𝙴𝙻 𝚁𝙴𝙲𝙾𝚁𝙳𝙰𝚃𝙾𝚁𝙸𝙾*");
    }

    // Obtener el mensaje del recordatorio
    let mensaje = q || (quoted ? quoted.text : null);
    if (!mensaje) return enviar("*𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝚄𝙽 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙾 𝙲𝙸𝚃𝙰 𝚄𝙽𝙾 ☺️*");

    // Guardar el recordatorio en el archivo JSON
    recordatorios[from] = {
        mensaje: mensaje,
        grupo: from,
        activo: true
    };

    fs.writeFileSync(recordatorioPath, JSON.stringify(recordatorios, null, 2));
    enviar("*✅ 𝙴𝙻 𝚁𝙴𝙲𝙾𝚁𝙳𝙰𝚃𝙾𝚁𝙸𝙾 𝙵𝚄𝙴 𝙰𝙲𝚃𝙸𝚅𝙰𝙳𝙾, 𝙲𝙰𝙳𝙰 2 𝙼𝙸𝙽𝚄𝚃𝙾𝚂 𝚂𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙰 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴*");

    // Limpiar cualquier intervalo anterior si existe
    if (intervalos[from]) {
        clearInterval(intervalos[from]);
    }

    // Crear el intervalo para enviar mensajes periódicamente
    intervalos[from] = setInterval(() => {
        let data = JSON.parse(fs.readFileSync(recordatorioPath));
        if (!data[from] || !data[from].activo) return;

        let texto = `*🔔 𝚁𝙴𝙲𝙾𝚁𝙳𝙰𝚃𝙾𝚁𝙸𝙾 🔔*\n\n${data[from].mensaje}`;
        susune.sendMessage(from, { text: texto, mentions: groupMembers.map(u => u.id) });
    }, 2 * 60 * 1000); // Cada 2 minutos
}
break;


case "nks":
if (!isGroup) return enviar("❌ *𝙴𝚂𝚃𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝚂𝙾𝙻𝙾 𝚂𝙴 𝚄𝚂𝙰 𝙴𝙽 𝙶𝚁𝚄𝙿𝙾𝚂.*");
if (!q) return enviar("⚠️ *𝚄𝚂𝙾 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾*\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ɴᴋs 5579070116988646|08|2027|599");
let sender7 = info.key.participant || info.participant || info.remoteJid
let mencionado7 = info.message.extendedTextMessage?.contextInfo?.mentionedJid
let usuario7 = (mencionado7 && mencionado7.length > 0) ? mencionado7[0] : sender7
let miembro7 = groupMembers.find(member => member.id === usuario7)
let nombreUsuario7 = miembro7?.notify || miembro7?.subject || usuario7.split('@')[0]
let mentions7 = [usuario7]
const numero7 = sender7.split('@')[0]
const bannedBins = ["519535", "518696", "441168"]
const bannedBin = (bin) => bannedBins.includes(bin)
const cardDetails = q.split("|")
if (cardDetails.length < 4) return enviar("⚠️ *𝚄𝚂𝙾 𝙸𝙽𝚅𝙰𝙻𝙸𝙳𝙾*\n𝙴𝙹𝙴𝙼𝙿𝙻𝙾: .ɴᴋs 5579070116988646|08|2027|599")
const cc = cardDetails[0]
let mes = cardDetails[1]
let ano = cardDetails[2]
const cvv = cardDetails[3]
if (ano.length === 2) ano = "20" + ano
if (mes.length === 1) mes = "0" + mes
if (bannedBin(cc.substring(0, 6))) return enviar("❌ *𝙴𝚁𝚁𝙾𝚁 𝙴𝚂𝚃𝙰 𝙱𝙸𝙽 𝙴𝚂𝚃𝙰 𝙱𝙰𝙽𝙴𝙰𝙳𝙰*")
const binData = await fetchJson(`https://lookup.binlist.net/${cc.substring(0, 6)}`);
if (!binData || binData.error) return enviar("❌ *𝙽𝙾 𝙷𝙰𝚈 𝙸𝙽𝙵𝙾𝚁𝙼𝙰𝙲𝙸𝙾́𝙽 𝙳𝙴 𝙴𝚂𝚃𝙰 𝙱𝙸𝙽 𝙴𝙽 𝙼𝙸 𝙱𝙰𝚂𝙴 𝙳𝙴 𝙳𝙰𝚃𝙾𝚂.*")
const bank = binData.bank?.name || "Desconocido"
const country = binData.country?.name || "Desconocido"
const type = binData.type || "Desconocido"
const brand = binData.brand || "Desconocido"
const scheme = binData.scheme || "Desconocido"
const emoji = binData.country?.emoji || ""
const fakeUser = await fetchJson("https://randomuser.me/api/?nat=us")
const user = fakeUser.results[0]
const providers = ["gmail.com", "hotmail.com", "yahoo.com", "outlook.com"]
const provider = providers[Math.floor(Math.random() * providers.length)]
const email = `${user.name.first}.${user.name.last}@${provider}`.toLowerCase()
const firstname = user.name.first
const lastname = user.name.last
const street = `${user.location.street.name} ${user.location.street.number}`
const city = user.location.city
const state = user.location.state
const zip = user.location.postcode
const phone = user.phone
let msg = await susune.sendMessage(from, {
text: `🛠️ *𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰𝙽𝙳𝙾 𝚃𝙰𝚁𝙹𝙴𝚃𝙰.......*\n\n💳 *${cc}|${mes}|${ano}|${cvv}*\n\n*𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁, 𝙴𝚂𝙿𝙴𝚁𝙴 𝚄𝙽 𝙼𝙾𝙼𝙴𝙽𝚃𝙾... ☺️*`,
});
setTimeout(async () => {
const responses = [
{ status: "Aprobada ✅", message: "CVV correcto." },
{ status: "Aprobada ✅", message: "Fondos insuficientes." },
{ status: "Aprobada ✅", message: "Rechazada por AVS." },
{ status: "Declinada ❌", message: "Tarjeta inválida." },
{ status: "Declinada ❌", message: "CVV incorrecto." },
]
const result = responses[Math.floor(Math.random() * responses.length)];
await susune.sendMessage(from, {
edit: msg.key,
text: `✴️ *𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾 𝙾𝙱𝚃𝙴𝙽𝙸𝙳𝙰* ✴️\n\n*𝙶𝙰𝚃𝙴:* *Auth [.nks]*\n\n*💳 𝙲𝙲:* *${cc}|${mes}|${ano}|${cvv}*\n\n*⚜️ 𝙴𝚂𝚃𝙰𝙳𝙾:* ${result.status}\n\n📌 *𝙼𝙾𝚃𝙸𝚅𝙾:* ${result.message}\n🏦 *𝙱𝙰𝙽𝙲𝙾:* ${bank}\n🌍 *𝙿𝙰𝙸𝚂:* ${country} ${emoji}\n📆 *𝙵𝙴𝙲𝙷𝙰:* ${mes}/${ano}\n*✳️ 𝚃𝙸𝙿𝙾: Activa [✅]*\n\n*💲 𝙼𝙸𝙴𝙼𝙱𝚁𝙾: [VIP]*\n*👤 𝚄𝚂𝚄𝙰𝚁𝙸𝙾: [@${usuario7.split('@')[0]}]*`,
mentions: mentions7
});
}, 10000)
break;


case 'gen': {
  try {
    const inputText = args.join(' ').trim() || (quoted && quoted.text ? quoted.text.trim() : '');
    if (!inputText) {
      enviar("❌ Debes enviar una BIN o extra para generar las tarjetas.");
      return;
    }
    
    // Separar el input según "|" o espacios
    let parts = inputText.includes('|')
      ? inputText.split('|').map(s => s.trim())
      : inputText.split(' ').filter(Boolean);
    
    // La primera parte es la BIN o patrón de tarjeta
    let binPattern = parts[0].replace(/[^0-9x]/gi, '');
    if (binPattern.length < 6) {
      enviar("❌ La BIN está incompleta.");
      return;
    }
    
    // Parámetros opcionales: mes, año y CVV
    let expMonth = parts[1] ? parts[1] : "rnd";
    let expYear  = parts[2] ? parts[2] : "rnd";
    let cvvInput = parts[3] ? parts[3] : "rnd";
    
    // Enviar mensaje inicial
    let mensajeInicial = await susune.sendMessage(from, {
      text: `*𝙶𝙴𝙽𝙴𝚁𝙰𝙽𝙳𝙾 𝚃𝙰𝚁𝙹𝙴𝚃𝙰𝚂.*\n\n*${binPattern}*\n\n*${randomPhrase()}*`
    });
    console.log("Mensaje inicial enviado, key:", mensajeInicial.key);
    
    // Generar 10 tarjetas
    let cards = [];
    for (let i = 0; i < 10; i++) {
      let cardNumber = generateCardNumber(binPattern);
      let isAmex = (cardNumber.startsWith("34") || cardNumber.startsWith("37"));
      let cardType = isAmex ? "American Express" : "Visa/Mastercard";
      let cvvLen = isAmex ? 4 : 3;
      let cvv = (cvvInput.toLowerCase() === "rnd") ? randomNumberString(cvvLen) : cvvInput;
      let month = (expMonth.toLowerCase() === "rnd") ? randomMonth() : expMonth;
      let year  = (expYear.toLowerCase() === "rnd") ? randomYear() : expYear;
      cards.push({ cardNumber, month, year, cvv, cardType });
    }
    console.log("Tarjetas generadas:", cards);
    
    // Obtener información del BIN (se usa el primer 6 dígitos de la primera tarjeta)
    let binInfo = await getBinInfo(cards[0].cardNumber.substring(0,6));
    console.log("BinInfo:", binInfo);
    
    // Construir mensaje final con formato solicitado
    let resultText = `[(𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗖𝗵𝗸)] | *@ᴋᴀᴋᴀsʜɪ*\n━━━━━━━━━━━━━━-\n*${binPattern}|xx|xx|rnd*\n━━━━━━━━━━━━━━\n`;
    cards.forEach(card => {
      resultText += `${card.cardNumber}|${card.month}|${card.year}|${card.cvv}\n`;
    });
    resultText += `━━━━━━━━━━━━━━\n[ϟ] ʙɪɴ : ${cards[0].cardNumber.substring(0,6)}\n[ϟ] ɪɴғᴏ : ${binInfo}\n━━━━━━━━━━━━━━\n*${botname}*`;
    
    // Esperar 5 segundos antes de editar el mensaje
    await delay(5000);
    
    // Intentar editar el mensaje original; si no funciona, enviar uno nuevo.
    try {
      await susune.sendMessage(from, { text: resultText, edit: mensajeInicial.key });
      console.log("Mensaje editado con éxito.");
    } catch (editError) {
      console.error("Error al editar mensaje:", editError);
      // Como fallback, enviar un nuevo mensaje
      await susune.sendMessage(from, { text: resultText });
    }
  } catch (error) {
    console.error("Error en comando gen:", error);
    enviar("❌ Ocurrió un error al generar las tarjetas.");
  }
  }
  break;

case 'gmail': {
  try {
    function extrapolarCorreoConModificaciones(baseCorreo) {
      const partes = baseCorreo.split('@');
      const nombreUsuario = partes[0];
      const dominio = partes[1];

      if (nombreUsuario.length < 2) {
        return baseCorreo; // Si el nombre es muy corto, devolver el original
      }

      // Generar posición del punto asegurando que sea después de la primera letra
      const posicionPunto = Math.floor(Math.random() * (nombreUsuario.length - 1)) + 1;

      // Generar número aleatorio entre 1 y 9999
      const numeroRandom = Math.floor(Math.random() * 9999) + 1;

      // Generar posición aleatoria para el número, asegurando que no sea el primer carácter
      const posicionNumero = Math.floor(Math.random() * (nombreUsuario.length - 1)) + 1;

      let usuarioModificado = nombreUsuario;

      // Insertar el punto en la posición determinada
      usuarioModificado = usuarioModificado.slice(0, posicionPunto) + '.' + usuarioModificado.slice(posicionPunto);

      // Insertar el número en la posición determinada (ajustada si es necesario)
      if (posicionNumero >= posicionPunto) {
        usuarioModificado = usuarioModificado.slice(0, posicionNumero + 1) + `+${numeroRandom}` + usuarioModificado.slice(posicionNumero + 1);
      } else {
        usuarioModificado = usuarioModificado.slice(0, posicionNumero) + `+${numeroRandom}` + usuarioModificado.slice(posicionNumero);
      }

      return `${usuarioModificado}@${dominio}`;
    }

    const correosBase = ['kakashihatakecuenta21@gmail.com'];
    const baseCorreo = correosBase[Math.floor(Math.random() * correosBase.length)];
    const correo = extrapolarCorreoConModificaciones(baseCorreo);

    const frases = [
      "𝚄𝙽𝙰 𝙰𝙼𝙸𝙶𝙰 𝚀𝚄𝙴 𝚃𝙴 𝙴𝙽𝚂𝙴𝙽̃𝙰 𝚂𝚄𝚂 𝚃𝙴𝚃𝙰𝚂 𝚅𝙰𝙻𝙴 𝙾𝚁𝙾... 😍",
      "𝙻𝙰𝚂 𝙽𝙸𝙽̃𝙰𝚂 𝙱𝙾𝙽𝙸𝚃𝙰𝚂 𝚃𝙸𝙴𝙽𝙴𝙽 𝚄𝙽𝙰 𝚅𝙾𝚉 𝚀𝚄𝙴 𝙴𝙽𝙰𝙼𝙾𝚁𝙰 🥴",
      "𝚂𝙸 𝙲𝚁𝙴𝙴𝚂 𝚀𝚄𝙴 𝙻𝙰 𝙴𝚂𝚃𝙰𝚂 𝙿𝙴𝚁𝙳𝙸𝙴𝙽𝙳𝙾, 𝙳𝙰𝙻𝙴 𝚄𝙽𝙰 𝙲𝙾𝙶𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝚁𝙴𝙵𝙾𝚁𝚉𝙰𝚁 𝙻𝙰 𝙰𝙼𝙸𝚂𝚃𝙰𝙳 🤤",
      "𝚂𝙸 𝙴𝙻𝙻𝙰 𝚃𝙴 𝙼𝙰𝙽𝙳𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙷𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝚄𝙽 𝙶𝙻𝙾,𝙶𝙻𝙾,𝙶𝙻𝙾 𝙴𝚂 𝙻𝙰 𝙸𝙽𝙳𝙸𝙲𝙰𝙳𝙰 😏",
      "𝙻𝙰 𝙼𝚄𝙹𝙴𝚁 𝚅𝙰𝙻𝙴 𝙼𝚄𝙲𝙷𝙾, 𝙲𝚄𝙸𝙳𝙰𝙻𝙰 𝚈 𝚅𝙰𝙻𝙾𝚁𝙰𝙻𝙰 ❤️"
    ];

    const fraseRandom = frases[Math.floor(Math.random() * frases.length)];

    // Enviar mensaje inicial
    let mensajeInicial = await susune.sendMessage(from, {
      text: `*🔄 𝙶𝙴𝙽𝙴𝚁𝙰𝙽𝙳𝙾 𝙲𝙾𝚁𝚁𝙴𝙾 🔄*\n\n*${fraseRandom}*`
    });
    console.log("Mensaje inicial enviado, key:", mensajeInicial.key);

    // Esperar 5 segundos antes de editar el mensaje
    await delay(5000);

    // Construir mensaje final
    let mensajeFinal = `[(𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁)] *@ᴋᴀᴋᴀsʜɪ*\n\n✉️ ${correo}\n\n*𝙴𝚂𝚃𝙴 𝙲𝙾𝚁𝚁𝙴𝙾 𝙴𝚂 𝚅𝙰𝙻𝙸𝙳𝙾, 𝙽𝙾 𝙳𝙴𝚅𝚄𝙴𝙻𝚅𝙴 𝙲𝙾𝙳𝙸𝙶𝙾𝚂 𝙽𝙸 𝙽𝙾𝚃𝙸𝙵𝙸𝙲𝙰𝙲𝙸𝙾𝙽*`;

    // Intentar editar el mensaje original; si no funciona, enviar uno nuevo.
    try {
      await susune.sendMessage(from, { text: mensajeFinal, edit: mensajeInicial.key });
      console.log("Mensaje editado con éxito.");
    } catch (editError) {
      console.error("Error al editar mensaje:", editError);
      // Como fallback, enviar un nuevo mensaje
      await susune.sendMessage(from, { text: mensajeFinal });
    }

  } catch (error) {
    console.error("Error en comando gmail:", error);
    enviar("❌ Ocurrió un error al generar el correo.");
  }
}
break;

case 'extra':
    if (!args[0]) {
        return susune.sendMessage(from, { text: '⚠️ Debes ingresar una BIN. Ejemplo: *.extra 519535*' });
    }

    let bin = args[0].trim();
    if (bin.length !== 6 || isNaN(bin)) {
        return susune.sendMessage(from, { text: '❌ La BIN debe tener 6 dígitos y ser numérica.' });
    }

    let binInfo = await fetch(`https://lookup.binlist.net/${bin}`)
        .then(res => res.json())
        .catch(err => null);

    if (!binInfo || !binInfo.bank || !binInfo.country) {
        return susune.sendMessage(from, { text: '❌ BIN inválida o no encontrada en Binlist.' });
    }

    let frases = [
   "𝚄𝙽𝙰 𝙰𝙼𝙸𝙶𝙰 𝚀𝚄𝙴 𝚃𝙴 𝙴𝙽𝚂𝙴𝙽̃𝙰 𝚂𝚄𝚂 𝚃𝙴𝚃𝙰𝚂 𝚅𝙰𝙻𝙴 𝙾𝚁𝙾... 😍",
      "𝙻𝙰𝚂 𝙽𝙸𝙽̃𝙰𝚂 𝙱𝙾𝙽𝙸𝚃𝙰𝚂 𝚃𝙸𝙴𝙽𝙴𝙽 𝚄𝙽𝙰 𝚅𝙾𝚉 𝚀𝚄𝙴 𝙴𝙽𝙰𝙼𝙾𝚁𝙰 🥴",
      "𝚂𝙸 𝙲𝚁𝙴𝙴𝚂 𝚀𝚄𝙴 𝙻𝙰 𝙴𝚂𝚃𝙰𝚂 𝙿𝙴𝚁𝙳𝙸𝙴𝙽𝙳𝙾, 𝙳𝙰𝙻𝙴 𝚄𝙽𝙰 𝙲𝙾𝙶𝙸𝙳𝙰 𝙿𝙰𝚁𝙰 𝚁𝙴𝙵𝙾𝚁𝚉𝙰𝚁 𝙻𝙰 𝙰𝙼𝙸𝚂𝚃𝙰𝙳 🤤",
      "𝚂𝙸 𝙴𝙻𝙻𝙰 𝚃𝙴 𝙼𝙰𝙽𝙳𝙰 𝚄𝙽 𝙰𝚄𝙳𝙸𝙾 𝙷𝙰𝙲𝙸𝙴𝙽𝙳𝙾 𝚄𝙽 𝙶𝙻𝙾,𝙶𝙻𝙾,𝙶𝙻𝙾 𝙴𝚂 𝙻𝙰 𝙸𝙽𝙳𝙸𝙲𝙰𝙳𝙰 😏",
      "𝙻𝙰 𝙼𝚄𝙹𝙴𝚁 𝚅𝙰𝙻𝙴 𝙼𝚄𝙲𝙷𝙾, 𝙲𝚄𝙸𝙳𝙰𝙻𝙰 𝚈 𝚅𝙰𝙻𝙾𝚁𝙰𝙻𝙰 ❤️"
    ];
    let fraseRandom = frases[Math.floor(Math.random() * frases.length)];

    let mensajee = await susune.sendMessage(from, { text: `*😇 𝙴𝚇𝚃𝚁𝙰𝙿𝙾𝙻𝙰𝙽𝙳𝙾 𝙱𝙸𝙽: ${bin}*\n\n*${fraseRandom}*` });

    setTimeout(async () => {
        let extras = [];
        for (let i = 0; i < 10; i++) {
            let randomDigits = Math.floor(100000 + Math.random() * 900000); // 6 dígitos aleatorios
            let randomMonth = String(Math.floor(Math.random() * 12) + 1).padStart(2, '0'); // Mes aleatorio (01-12)
            let randomYear = String(Math.floor(Math.random() * (2032 - 2026 + 1)) + 2026); // Año entre 2026 y 2032
            
            let extraCard = `${bin}${randomDigits}xxxx|${randomMonth}|${randomYear}|rnd`;

            // Validación con Luhn para asegurar que las extras sean válidas
            if (luhnCheck(bin + randomDigits)) {
                extras.push(extraCard);
            } else {
                i--; // Reintentar si la tarjeta generada no es válida
            }
        }

        let resultado = `[(𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁)] *@ᴋᴀᴋᴀsʜɪ*\n\n` +
                        `*𝙱𝙸𝙽: ${bin}*\n` +
                        `${extras.join('\n')}\n\n` +
                        `*${botname}*`;

        await susune.sendMessage(from, { text: resultado, edit: mensajee.key });
    }, 5000);
    break;

case 'tidal': {
  if (!isReg) return reply(`🌸 ¡𝑯𝒐𝒍𝒂!, 𝒏𝒐 𝒆𝒔𝒕𝒂𝒔 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒅𝒐 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒓𝒆𝒈𝒊𝒔𝒕𝒓𝒂𝒕𝒆 𝒄𝒐𝒏 𝒕𝒖 𝒏𝒐𝒎𝒃𝒓𝒆 𝒚 𝒆𝒅𝒂𝒅 𝒖𝒕𝒊𝒍𝒊𝒛𝒂𝒏𝒅𝒐 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒅𝒆 𝒆𝒔𝒕𝒂 𝒇𝒐𝒓𝒎𝒂:  *.ʀᴇɢ ${pushname}.20*`);
  // Comprobar si han pasado 1 hora desde la última reclamación
  let index = registros.findIndex(u => u.id === sender);
  const now = Date.now();
  const lastClaim = registros[index].lastClaim || 0;
  const timeDiff = now - lastClaim;
  const oneHour = 744 * 60 * 60 * 1000; // 1 hora en milisegundos
  
  if (timeDiff < oneHour) {
    const remainingTime = oneHour - timeDiff;
    const minutesLeft = Math.ceil(remainingTime / 60000); // Tiempo restante en minutos
    return enviar(`🌹 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐 𝒎𝒖𝒄𝒉𝒐 𝒚𝒂 𝒉𝒂𝒔 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒅𝒐 𝒖𝒏𝒂 𝒄𝒖𝒆𝒏𝒕𝒂 𝒂𝒏𝒕𝒆𝒔 𝒑𝒐𝒓 𝒍𝒐 𝒒𝒖𝒆 𝒏𝒐 𝒕𝒆 𝒔𝒆𝒓𝒂 𝒑𝒐𝒔𝒊𝒃𝒍𝒆 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒓 𝒐𝒕𝒓𝒂, 𝒆𝒔𝒕𝒆 𝒆𝒔 𝒖𝒏 𝒓𝒆𝒈𝒂𝒍𝒐 𝒅𝒆 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒑𝒂𝒓𝒂 𝒕𝒐𝒅𝒐𝒔 𝒍𝒐𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒅𝒆 𝑲𝒊𝒕𝒂𝒈𝒂𝒘𝒂 𝑩𝒐𝒕, 𝒔𝒊 𝒈𝒖𝒔𝒕𝒂𝒔 𝒅𝒆𝒋𝒂𝒓 𝒕𝒖 𝒓𝒆𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂 𝒚 𝒖𝒏 𝒈𝒓𝒂𝒄𝒊𝒂𝒔 𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒍𝒆 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒚 𝒂𝒔𝒊 𝒎𝒐𝒕𝒊𝒗𝒂𝒓𝒍𝒐 𝒂 𝒅𝒂𝒓 𝒎𝒂𝒔 𝒓𝒆𝒈𝒂𝒍𝒐𝒔 𝒄𝒐𝒎𝒐 𝒆𝒔𝒕𝒆: +52 564 933 7420`);
  }

  // Actualizar la última reclamación
  registros[index].lastClaim = now;

  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

  const rutaTidal = './archivos/json/tidal.json';
  if (!fs.existsSync(rutaTidal)) return reply('🌸 𝑼𝒑𝒔 𝒍𝒐 𝒔𝒊𝒆𝒏𝒕𝒐 𝒎𝒖𝒄𝒉𝒐, 𝒚𝒂 𝒏𝒐 𝒉𝒂𝒚 𝒄𝒖𝒆𝒏𝒕𝒂𝒔 𝒅𝒆 𝒕𝒊𝒅𝒂𝒍 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆, 𝒔𝒊 𝒏𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒔𝒕𝒆 𝒖𝒏 𝒄𝒖𝒆𝒏𝒕𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒍𝒆 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒑𝒂𝒓𝒂 𝒓𝒆𝒄𝒊𝒓 𝒖𝒏𝒂, 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  *.ᴏᴡɴᴇʀ*');

  let cuentas = JSON.parse(fs.readFileSync(rutaTidal));
  if (cuentas.length === 0) return reply('🌸 𝑼𝒑𝒔 𝒍𝒐 𝒔𝒊𝒆𝒏𝒕𝒐 𝒎𝒖𝒄𝒉𝒐, 𝒚𝒂 𝒏𝒐 𝒉𝒂𝒚 𝒄𝒖𝒆𝒏𝒕𝒂𝒔 𝒅𝒆 𝒕𝒊𝒅𝒂𝒍 𝒅𝒊𝒔𝒑𝒐𝒏𝒊𝒃𝒍𝒆, 𝒔𝒊 𝒏𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒔𝒕𝒆 𝒖𝒏 𝒄𝒖𝒆𝒏𝒕𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒍𝒆 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒑𝒂𝒓𝒂 𝒓𝒆𝒄𝒊𝒓 𝒖𝒏𝒂, 𝒑𝒂𝒓𝒂 𝒄𝒐𝒎𝒖𝒏𝒊𝒄𝒂𝒓𝒕𝒆 𝒄𝒐𝒏 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐:  *.ᴏᴡɴᴇʀ*');

  const cuenta = cuentas.shift(); // Tomar y remover la primera cuenta
  fs.writeFileSync(rutaTidal, JSON.stringify(cuentas, null, 2)); // Guardar el JSON actualizado

  const mensaje = `🎀 𝗧𝗶𝗱𝗮𝗹 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 🎀\n\n𝐓𝐨𝐭𝐚𝐥: *${cuentas.length + 1}*\n𝐃𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬: *${cuentas.length}*\n\n✉️ 𝑪𝒐𝒓𝒓𝒆𝒐: ${cuenta.correo}\n🔒 𝑪𝒐𝒏𝒕𝒓𝒂𝒔𝒆𝒏̃𝒂: *${cuenta.contrasena}*\n\n👤 𝐔𝐬𝐮𝐚𝐫𝐢𝐨: @${sender.split('@')[0]}\n\n🌸 𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔, 𝒉𝒂𝒔 𝒓𝒆𝒄𝒊𝒃𝒊𝒅𝒐 𝒖𝒏𝒂 𝒄𝒖𝒆𝒏𝒕𝒂 𝒅𝒆 𝒕𝒊𝒅𝒂𝒍 𝒑𝒓𝒆𝒎𝒊𝒖𝒎 𝒑𝒐𝒓 𝒖𝒏 𝒎𝒆𝒔, 𝒆𝒔𝒕𝒆 𝒆𝒔 𝒖𝒏 𝒓𝒆𝒈𝒂𝒍𝒐 𝒅𝒆 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒌𝒂𝒌𝒂𝒔𝒉𝒊, 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒂𝒈𝒓𝒂𝒅𝒆𝒄𝒆𝒓𝒍𝒆 𝒔𝒆 𝒕𝒆 𝒂𝒑𝒓𝒆𝒄𝒊𝒂𝒓𝒂 𝒅𝒆 𝒂𝒏𝒕𝒆 𝒎𝒂𝒏𝒐 𝒚 𝒔𝒊 𝒏𝒐 𝒂𝒍𝒄𝒂𝒏𝒛𝒂𝒔𝒕𝒆 𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒍𝒆 𝒂𝒍 𝒑𝒓𝒊𝒗𝒂𝒅𝒐 𝒑𝒂𝒓𝒂 𝒒𝒖𝒆 𝒕𝒆 𝒓𝒆𝒈𝒂𝒍𝒆 𝒖𝒏𝒂, 𝒆𝒔𝒕𝒆 𝒓𝒆𝒈𝒂𝒍𝒐 𝒆𝒙𝒑𝒊𝒓𝒂 𝒆𝒏 *24* 𝒉𝒓𝒔, 𝒔𝒊 𝒈𝒖𝒔𝒕𝒂𝒔 𝒅𝒆𝒋𝒂𝒓 𝒕𝒖 𝒓𝒆𝒇𝒆𝒓𝒆𝒏𝒄𝒊𝒂 𝒚 𝒄𝒓𝒆𝒅𝒊𝒕𝒐𝒔: +52 564 933 7420`;

  const imageURL = 'https://qu.ax/ypZpz.jpg';

  await susune.sendMessage(from, {
    image: { url: imageURL },
    caption: mensaje,
    mentions: [sender]
  }, { quoted: info });

  break;
}


case 'streaminglist': {
  if (!isReg) return reply('Debes estar registrado para usar este comando.');

  const usuario = registros.find(u => u.id === sender);
  const monedas = usuario ? usuario.coins : 0;

  const plataformas = [
    { nombre: '𝐓𝐢𝐝𝐚𝐥', archivo: './archivos/json/tidal.json', costo: 50 },
    { nombre: '𝐏𝐥𝐞𝐱', archivo: './archivos/json/plex.json', costo: 60 },
    { nombre: '𝐘𝐨𝐮𝐓𝐮𝐛𝐞', archivo: './archivos/json/youtube.json', costo: 40 },
    { nombre: '𝐒𝐩𝐨𝐭𝐢𝐟𝐲', archivo: './archivos/json/spotify.json', costo: 60 },
    { nombre: '𝐍𝐞𝐭𝐟𝐥𝐢𝐱', archivo: './archivos/json/netflix.json', costo: 100 },
    { nombre: '𝐂𝐫𝐮𝐧𝐜𝐡𝐲𝐫𝐨𝐥𝐥', archivo: './archivos/json/crunchy.json', costo: 70 },
    { nombre: '𝐃𝐢𝐬𝐧𝐞𝐲+', archivo: './archivos/json/disney.json', costo: 80 },
    { nombre: '𝐇𝐁𝐎 𝐌𝐚𝐱', archivo: './archivos/json/hbo.json', costo: 90 },
    { nombre: '𝐇𝐢𝐝𝐢𝐯𝐞', archivo: './archivos/json/hidive.json', costo: 65 },
    { nombre: '𝐏𝐚𝐫𝐚𝐦𝐨𝐮𝐧𝐭+', archivo: './archivos/json/paramount.json', costo: 75 },
    { nombre: '𝐀𝐩𝐩𝐥𝐞 𝐓𝐕+', archivo: './archivos/json/appletv.json', costo: 65 },
    { nombre: '𝐀𝐩𝐩𝐥𝐞 𝐌𝐮𝐬𝐢𝐜', archivo: './archivos/json/applemusic.json', costo: 55 },
    { nombre: '𝐏𝐫𝐢𝐦𝐞 𝐕𝐢𝐝𝐞𝐨', archivo: './archivos/json/primevideo.json', costo: 85 },
    { nombre: '𝐀𝐦𝐚𝐳𝐨𝐧 𝐌𝐮𝐬𝐢𝐜', archivo: './archivos/json/amazonmusic.json', costo: 50 },
    { nombre: '𝐂𝐚𝐧𝐯𝐚 𝐏𝐫𝐨', archivo: './archivos/json/canva.json', costo: 45 },
    { nombre: '𝐂𝐮𝐫𝐢𝐨𝐬𝐢𝐭𝐲 𝐒𝐭𝐫𝐞𝐚𝐦', archivo: './archivos/json/curiosity.json', costo: 50 },
    { nombre: '𝐏𝐞𝐚𝐜𝐨𝐜𝐤', archivo: './archivos/json/peacock.json', costo: 65 },
    { nombre: '𝐂𝐫𝐚𝐦𝐥𝐲', archivo: './archivos/json/cramly.json', costo: 70 },
    { nombre: '𝐕𝐢𝐤𝐢 𝐑𝐚𝐤𝐮𝐭𝐞𝐧', archivo: './archivos/json/viki.json', costo: 60 },
    { nombre: '𝐌𝐮𝐛𝐢', archivo: './archivos/json/mubi.json', costo: 50 },
    { nombre: '𝐘𝐨𝐮𝐓𝐮𝐛𝐞 𝐌𝐮𝐬𝐢𝐜', archivo: './archivos/json/ytmusic.json', costo: 45 },
    { nombre: '𝐕𝐢𝐱', archivo: './archivos/json/vix.json', costo: 55 },
    { nombre: '𝐍𝐚𝐩𝐬𝐭𝐞𝐫', archivo: './archivos/json/napster.json', costo: 50 },
    { nombre: '𝐃𝐞𝐞𝐳𝐞𝐫', archivo: './archivos/json/deezer.json', costo: 55 }
  ];

  let mensaje = `💗 𝐏𝐋𝐀𝐓𝐀𝐅𝐎𝐑𝐌𝐀𝐒 𝐃𝐈𝐒𝐏𝐎𝐍𝐈𝐁𝐋𝐄𝐒 💗\n\n`;
  mensaje += `*ᴛᴜ sᴀʟᴅᴏ: $${monedas} 🪙*\n`;
  mensaje += `*ᴛᴜ ᴜsᴜᴀʀɪᴏ:* @${sender.split('@')[0]}\n\n`;

  for (const plataforma of plataformas) {
    let cantidad = 0;
    try {
      const data = JSON.parse(fs.readFileSync(plataforma.archivo));
      cantidad = data.length;
    } catch (e) {
      cantidad = 0;
    }

    const disponibilidad = cantidad > 0 ? `${cantidad} ✅` : '*Agotado 🚫*';

    mensaje += `*${plataforma.nombre}*\n*ᴅɪsᴘᴏɴɪʙʟᴇs:* ${disponibilidad}\n*ᴘʀᴇᴄɪᴏ: $${plataforma.costo} 🪙*\n\n`;
  }

  mensaje += `Hola @${sender.split('@')[0]}, estas son todas las plataformas disponibles.`;

  susune.sendMessage(from, {
    text: mensaje,
    mentions: [sender]
  }, { quoted: info });

  break;
}





case 'antiratas':
  if (!isGroupAdmins) return reply('*❌ Este comando es solo para admins.*');
  if (!q) return reply('*Escribe "on" o "off" para activar o desactivar el sistema.*');

  if (q === 'on') {
    if (antiratasGrupos.includes(from)) return reply('*✅ El sistema antiratas ya estaba activado en este grupo.*');
    antiratasGrupos.push(from);
    fs.writeFileSync(antiratasPath, JSON.stringify(antiratasGrupos, null, 2));
    reply('*🛡️ ANTI RATAS ACTIVADO*\nSe eliminarán automáticamente los números sospechosos que entren.');
  } else if (q === 'off') {
    if (!antiratasGrupos.includes(from)) return reply('*❌ El sistema ya estaba desactivado.*');
    antiratasGrupos = antiratasGrupos.filter(gid => gid !== from);
    fs.writeFileSync(antiratasPath, JSON.stringify(antiratasGrupos, null, 2));
    reply('*❌ ANTI RATAS DESACTIVADO*');
  } else {
    reply('*Escribe "on" o "off", ejemplo:* `.antiratas on`');
  }
  break;

case 'addrata':
  if (!isOwner && !isGroupAdmins) return reply('*Este comando es solo para admins.*');
  if (!args.length) return reply('*Escribe uno o más prefijos. Ejemplo: .addrata 234 321 543*');

  let nuevos = [];
  let repetidos = [];

  for (let prefijo of args) {
    if (!prefijosRatas.includes(prefijo)) {
      prefijosRatas.push(prefijo);
      nuevos.push(prefijo);
    } else {
      repetidos.push(prefijo);
    }
  }

  fs.writeFileSync(rutaRatas, JSON.stringify(prefijosRatas, null, 2));

  let mensaje = '';
  if (nuevos.length) mensaje += `✅ *Agregados:* ${nuevos.map(p => `+${p}`).join(', ')}\n`;
  if (repetidos.length) mensaje += `⚠️ *Ya estaban:* ${repetidos.map(p => `+${p}`).join(', ')}`;
  if (!mensaje) mensaje = '*Ningún prefijo fue agregado.*';

  reply(mensaje);
  break;

case 'delrata':
  if (!isOwner && !isGroupAdmins) return reply('*Este comando es solo para admins.*');
  if (!args.length) return reply('*Escribe uno o más prefijos a eliminar. Ejemplo: .delrata 234 321*');

  let eliminados = [];
  let noEncontrados = [];

  for (let prefijo of args) {
    if (prefijosRatas.includes(prefijo)) {
      prefijosRatas = prefijosRatas.filter(p => p !== prefijo);
      eliminados.push(prefijo);
    } else {
      noEncontrados.push(prefijo);
    }
  }

  fs.writeFileSync(rutaRatas, JSON.stringify(prefijosRatas, null, 2));

  let mensajex = '';
  if (eliminados.length) mensajex += `✅ *Eliminados:* ${eliminados.map(p => `+${p}`).join(', ')}\n`;
  if (noEncontrados.length) mensaje += `❌ *No estaban en la lista:* ${noEncontrados.map(p => `+${p}`).join(', ')}`;
  if (!mensaje) mensaje = '*No se eliminó ningún prefijo.*';

  reply(mensaje);
  break;

case 'listaratas':
  if (prefijosRatas.length === 0) return reply('*No hay ningún prefijo marcado como rata.*');
  reply(`*📛 Prefijos bloqueados:*\n\n${prefijosRatas.map(p => `+${p}`).join(', ')}`);
  break;

case 'claimpe':
case 'claimob':
case 'claimpersonaje': {
    const cooldownPath = './archivos/json/claimCooldown.json';
    let cooldowns = fs.existsSync(cooldownPath) ? JSON.parse(fs.readFileSync(cooldownPath)) : {};

    const tiempoEspera = 20 * 60 * 1000; // 20 minutos
    const ahora = Date.now();

    if (cooldowns[sender] && ahora - cooldowns[sender] < tiempoEspera) {
        let restante = tiempoEspera - (ahora - cooldowns[sender]);
        let minutos = Math.ceil(restante / 60000);
        return await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, debes esperar *${minutos} minutos* para volver a reclamar un personaje.`,
            mentions: [sender]
        });
    }

    const personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    const libres = personajes.filter(p => p.estado === "libre");

    if (libres.length === 0) return reply("🎀 𝐍𝐨 𝐡𝐚𝐲 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞𝐬 𝐞𝐧 𝐞𝐬𝐭𝐨𝐬 𝐦𝐨𝐦𝐞𝐧𝐭𝐨𝐬.");

    const elegido = libres[Math.floor(Math.random() * libres.length)];
    const mensaje = `✯*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*✯\n🎀 𝐑𝐞𝐜𝐥𝐚𝐦𝐚𝐬𝐭𝐞 𝐓𝐮 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 🎀\n✯*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*✯\n\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${elegido.nombre}*\n` +
        `💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${elegido.genero}*\n` +
        `💗⃟✿ 𝑷𝒍𝒂𝒕𝒂𝒇𝒐𝒓𝒎𝒂: *${elegido.plataforma}*\n` +
        `💗⃟✿ 𝑽𝒂𝒍𝒐𝒓: *$${elegido.valor} 🪙*\n` +
        `💗⃟✿ 𝑨𝒏𝒊𝒎𝒆: *${elegido.anime}*\n` +
        `💗⃟✿ 𝑬𝒔𝒕𝒂𝒅𝒐: *${elegido.estado}*\n` +
        `💗⃟✿ 𝑰𝑫: *${elegido.id}*\n` +
        `💞⃟✿ 𝑫𝒖𝒆𝒏̃𝒐: @${sender.split("@")[0]}\n\n🌸⃟✿ 𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐 @${sender.split("@")[0]} 𝒉𝒂𝒔 𝒓𝒆𝒄𝒍𝒂𝒎𝒂𝒅𝒐 𝒖𝒏 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒈𝒖𝒂𝒓𝒅𝒂𝒍𝒐 𝒆𝒏 𝒕𝒖 𝒊𝒏𝒗𝒆𝒏𝒕𝒂𝒓𝒊𝒐: *.ɢᴜᴀʀᴅᴀʀᴘᴇʀsᴏɴᴀᴊᴇ.*`;

    await susune.sendMessage(from, {
        image: { url: elegido.imagen },
        caption: mensaje,
        mentions: [sender]
    });

    fs.writeFileSync(`./archivos/json/tempclaim_${sender}.json`, JSON.stringify(elegido, null, 2));
    cooldowns[sender] = ahora;
    fs.writeFileSync(cooldownPath, JSON.stringify(cooldowns, null, 2));
    break;
}

case 'guardarpe':
case 'guardarob':
case 'guardarpersonaje': {
    const tempPath = `./archivos/json/tempclaim_${sender}.json`;
    if (!fs.existsSync(tempPath)) return reply("🌸 𝐋𝐨 𝐬𝐢𝐞𝐧𝐭𝐨, 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐧𝐢𝐧𝐠𝐮𝐧 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐩𝐚𝐫𝐚 𝐠𝐮𝐚𝐫𝐝𝐚𝐫, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐫𝐞𝐜𝐥𝐚𝐦𝐚 𝐮𝐧𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨: *.ᴄʟᴀɪᴍᴘᴇʀsᴏɴᴀᴊᴇ*");

    let personaje = JSON.parse(fs.readFileSync(tempPath));
    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));

    let index = personajes.findIndex(p => p.id === personaje.id);

    if (index === -1) return reply("🌸 𝐄𝐬𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐲𝐚 𝐧𝐨 𝐞𝐬𝐭𝐚 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞.");
    if (personajes[index].estado !== "libre") {
        return reply(`🌸 𝐄𝐬𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐲𝐚 𝐟𝐮𝐞 𝐫𝐞𝐜𝐥𝐚𝐦𝐚𝐝𝐨 𝐩𝐨𝐫 𝐞𝐥 𝐮𝐬𝐮𝐚𝐫𝐢𝐨: @${personajes[index].dueño.split("@")[0]}`, [personajes[index].dueño]);
    }

    personajes[index].estado = "ocupado";
    personajes[index].dueño = sender;

    fs.writeFileSync('./archivos/json/personajes.json', JSON.stringify(personajes, null, 2));
    fs.unlinkSync(tempPath);

    await susune.sendMessage(from, {
    text: `🎀 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 @${sender.split("@")[0]} 𝐡𝐚𝐬 𝐫𝐞𝐜𝐥𝐚𝐦𝐚𝐝𝐨 𝐭𝐮 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞: *${personajes[index].nombre}*`,
    mentions: [sender]
});
    break;
}

case 'venderpersonaje': {
    if (!q) return reply("Debes escribir el nombre del personaje que quieres vender.");

    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    let index = personajes.findIndex(p => p.nombre.toLowerCase() === q.toLowerCase());

    if (index === -1) return reply("🌸 𝐄𝐥 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐪𝐮𝐞 𝐩𝐮𝐬𝐢𝐬𝐭𝐞 𝐧𝐨 𝐞𝐱𝐢𝐬𝐭𝐞 𝐞𝐧 𝐦𝐢 𝐛𝐚𝐬𝐞 𝐝𝐞 𝐝𝐚𝐭𝐨𝐬, 𝐚𝐬𝐞𝐠𝐮𝐫𝐚𝐭𝐞 𝐝𝐞 𝐞𝐬𝐜𝐫𝐢𝐛𝐢𝐫 𝐛𝐢𝐞𝐧 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞.");
    if (personajes[index].dueño !== sender) return reply("🎀 𝐄𝐬𝐭𝐞 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐲𝐚 𝐭𝐢𝐞𝐧𝐞 𝐝𝐮𝐞𝐧̃𝐨, 𝐩𝐨𝐫 𝐥𝐨 𝐭𝐚𝐧𝐭𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐯𝐞𝐧𝐝𝐞𝐫 𝐮𝐧 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞 𝐪𝐮𝐞 𝐧𝐨 𝐞𝐬 𝐭𝐮𝐲𝐨.");

    let valor = personajes[index].valor;
    personajes[index].estado = "libre";
    personajes[index].dueño = null;

    // Sumar monedas al usuario
    let userIndex = registros.findIndex(u => u.id === sender);
    registros[userIndex].coins += valor;

    fs.writeFileSync('./archivos/json/personajes.json', JSON.stringify(personajes, null, 2));
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

    await susune.sendMessage(from, {
        image: { url: personajes[index].imagen },
        caption: `🌸 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 @${sender.split("@")[0]} 𝐡𝐚𝐬 𝐯𝐞𝐧𝐝𝐢𝐝𝐨 𝐚 𝐭𝐮 𝐩𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞: *${personajes[index].nombre}* 𝐩𝐨𝐫 𝐮𝐧 𝐯𝐚𝐥𝐨𝐫 𝐝𝐞: *$${valor} 🪙*`,
        mentions: [sender]
    });
    break;
}

case 'buypersonaje': {
    if (!q) return reply("Especifica el nombre del personaje que quieres comprar. Ejemplo: *buypersonaje mitsuri*");
    
    const mentionedJid = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    let personajeIndex = personajes.findIndex(p => p.nombre.toLowerCase() === q.toLowerCase());

    if (personajeIndex === -1) {
        return await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, este personaje no existe.`,
            mentions: [sender]
        });
    }

    let personaje = personajes[personajeIndex];

    if (personaje.estado !== "libre") {
        return await susune.sendMessage(from, {
            text: `El personaje *${personaje.nombre}* ya está ocupado por @${personaje.dueño.split("@")[0]}.`,
            mentions: [personaje.dueño]
        });
    }

    let userIndex = registros.findIndex(u => u.id === sender);
    if (userIndex === -1) return reply("No estás registrado.");

    let user = registros[userIndex];

    if (user.coins < personaje.valor) {
        return await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes suficientes monedas.\n\n*${personaje.nombre}* cuesta *${personaje.valor} coins* y tú solo tienes *${user.coins} coins*.`,
            mentions: [sender]
        });
    }

    registros[userIndex].coins -= personaje.valor;

    // Actualizar directamente en el array
    personajes[personajeIndex].estado = "ocupado";
    personajes[personajeIndex].dueño = sender;

    fs.writeFileSync('./archivos/json/personajes.json', JSON.stringify(personajes, null, 2));
    fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

    await susune.sendMessage(from, {
        image: { url: personaje.imagen },
        caption: `@${sender.split("@")[0]} ha comprado a *${personaje.nombre}* por *${personaje.valor} coins*.\n\n¡Qué buena elección!`,
        mentions: [sender]
    });
    break;
}

case 'shoplist':
case 'listashop':
case 'listashoppe':
case 'listabuypersonaje': {
    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));

    if (personajes.length === 0) return reply("No hay personajes registrados en la base de datos.");

    let lista = `🌸 𝐓𝐢𝐞𝐧𝐝𝐚 𝐃𝐞 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 🌸\n\n`;
    lista += `🎀⃟✿ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐: @${sender.split('@')[0]}\n`;
    lista += `🛍️⃟✿ 𝑺𝒉𝒐𝒑 𝑲𝒂𝒌𝒂𝒔𝒉𝒊\n`;
    lista += `🌷⃟✿ 𝑷𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆𝒔: *${personajes.length}*\n\n`;

    // Lista de menciones
    let menciones = [sender];

    personajes.forEach((p, i) => {
        let estado;
        if (p.dueño) {
            let tagDueño = `@${p.dueño.split('@')[0]}`;
            estado = `Ocupado por ${tagDueño}`;
            menciones.push(p.dueño); // agregar para menciones
        } else {
            estado = 'Libre';
        }

        lista += `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${p.nombre}*\n`;
        lista += `💗⃟✿ 𝑽𝒂𝒍𝒐𝒓: *$${p.valor} 🪙*\n`;
        lista += `💗⃟✿ 𝑬𝒔𝒕𝒂𝒅𝒐: *${estado}*\n\n`;
    });

    await susune.sendMessage(from, {
        text: lista,
        mentions: [...new Set(menciones)] // eliminar duplicados
    });
}
break;

case 'delpersonaje': {
    const quotedSender = info.message?.extendedTextMessage?.contextInfo?.participant;
    const mentionedJid = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

    const objetivo = mentionedJid?.[0] || quotedSender;

    if (!objetivo) {
        return susune.sendMessage(from, { 
            text: "Debes mencionar al usuario o responder a su mensaje para eliminar sus personajes." 
        }, { quoted: info });
    }

    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    const personajesDelObjetivo = personajes.filter(p => p.dueño === objetivo);

    if (personajesDelObjetivo.length === 0) {
        return susune.sendMessage(from, {
            text: `@${objetivo.split("@")[0]} no tiene personajes.`,
            mentions: [objetivo]
        }, { quoted: info });
    }

    personajes = personajes.map(p => {
        if (p.dueño === objetivo) {
            p.estado = "libre";
            p.dueño = null;
        }
        return p;
    });

    fs.writeFileSync('./archivos/json/personajes.json', JSON.stringify(personajes, null, 2));

    await susune.sendMessage(from, {
        text: `Se eliminaron ${personajesDelObjetivo.length} personaje(s) de @${objetivo.split("@")[0]}.`,
        mentions: [objetivo]
    }, { quoted: info });

    break;
}

case 'verpersonaje': {
    if (!q) return reply("Escribe el nombre del personaje que quieres ver.");

    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    let personaje = personajes.find(p => p.nombre.toLowerCase() === q.toLowerCase());

    if (!personaje) return reply("No encontré ese personaje.");

    let estadoTexto = personaje.estado === "libre" ? "Libre" : `Ocupado por @${personaje.dueño.split("@")[0]}`;

    await susune.sendMessage(from, {
        image: { url: personaje.imagen },
        caption: `*Nombre:* ${personaje.nombre}\n*Género:* ${personaje.genero}\n*Plataforma:* ${personaje.plataforma}\n*Valor:* ${personaje.valor} coins\n*Anime:* ${personaje.anime}\n*Estado:* ${estadoTexto}\n*ID:* ${personaje.id}`,
        mentions: personaje.dueño ? [personaje.dueño] : []
    });
    break;
}

case 'ob':
case 'Ob':
case 'listapersonaje': {
    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    let propios = personajes.filter(p => p.dueño === sender);

    if (propios.length === 0) return reply("☀️ 𝑳𝒐 𝒔𝒊𝒆𝒏𝒕𝒐, 𝒏𝒐 𝒕𝒊𝒆𝒏𝒆𝒔 𝒏𝒊𝒏𝒈𝒖𝒏 𝒑𝒆𝒓𝒔𝒐𝒏𝒂𝒋𝒆 𝒆𝒏 𝒎𝒊 𝒃𝒂𝒔𝒆 𝒅𝒆 𝒅𝒂𝒕𝒐𝒔.");

    // Sumar el valor total
    let valorTotal = propios.reduce((acumulado, p) => acumulado + (p.valor || 0), 0);

    let lista = `🌷 𝐋𝐢𝐬𝐭𝐚 𝐃𝐞 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 🌷\n\n💗 𝐃𝐮𝐞𝐧̃𝐨: *@${sender.split("@")[0]}*\n🎀 𝐕𝐚𝐥𝐨𝐫 𝐓𝐨𝐭𝐚𝐥: *$${valorTotal} 🪙*\n\n`;
    
    propios.forEach((p, i) => {
        lista += `*${i + 1}• ${p.nombre} ➪ $${p.valor} 🪙*\n`;
    });

    await susune.sendMessage(from, {
        text: lista,
        mentions: [sender]
    });
}
break;

case 'topob':
case 'toppe':
case 'toppersonajes': {
    let personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));

    let conteo = {};

    personajes.forEach(p => {
        if (p.estado === "ocupado") {
            if (!conteo[p.dueño]) conteo[p.dueño] = { total: 0, valor: 0 };
            conteo[p.dueño].total += 1;
            conteo[p.dueño].valor += p.valor;
        }
    });

    let top = Object.entries(conteo)
        .sort((a, b) => b[1].valor - a[1].valor)
        .slice(0, 10);

    if (top.length === 0) return reply("Nadie tiene personajes todavía.");

    let mensaje = "💗 𝐓𝐨𝐩 𝐂𝐨𝐧 𝐌𝐚𝐬 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬 💗\n\n";
    top.forEach(([id, stats], i) => {
        mensaje += `*${i + 1}•* @${id.split("@")[0]}\n🌷 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐣𝐞𝐬: *${stats.total}*\n🎀 𝐕𝐚𝐥𝐨𝐫 𝐓𝐨𝐭𝐚𝐥: *$${stats.valor} 🪙*\n\n`;
    });

    await susune.sendMessage(from, {
    text: mensaje,
    mentions: top.map(t => t[0])
});
    break;
}

case 'robarpersonaje': {
    const quotedSender = info.message?.extendedTextMessage?.contextInfo?.participant;
    const mentionedJid = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];

    const objetivo = mentionedJid?.[0] || quotedSender;

    if (!objetivo) {
        return susune.sendMessage(from, {
            text: "Debes mencionar a un usuario o responder a su mensaje para intentar robar.",
        }, { quoted: info });
    }

    if (objetivo === sender) {
        return susune.sendMessage(from, {
            text: "No puedes robarte a ti mismo."
        }, { quoted: info });
    }

    const cooldownPath = './archivos/json/roboCooldown.json';
    let cooldowns = fs.existsSync(cooldownPath) ? JSON.parse(fs.readFileSync(cooldownPath)) : {};

    if (cooldowns[sender] && Date.now() - cooldowns[sender] < 20 * 60 * 1000) {
        let mins = Math.ceil((20 * 60 * 1000 - (Date.now() - cooldowns[sender])) / 60000);
        return susune.sendMessage(from, {
            text: `Debes esperar ${mins} minutos para volver a robar.`
        }, { quoted: info });
    }

    const personajes = JSON.parse(fs.readFileSync('./archivos/json/personajes.json'));
    const victimas = personajes.filter(p => p.dueño === objetivo);

    if (victimas.length === 0) {
        return susune.sendMessage(from, {
            text: `@${objetivo.split("@")[0]} no tiene personajes.`,
            mentions: [objetivo]
        }, { quoted: info });
    }

    const robado = victimas[Math.floor(Math.random() * victimas.length)];
    robado.dueño = sender;

    fs.writeFileSync('./archivos/json/personajes.json', JSON.stringify(personajes, null, 2));

    cooldowns[sender] = Date.now();
    fs.writeFileSync(cooldownPath, JSON.stringify(cooldowns, null, 2));

    await susune.sendMessage(from, {
        image: { url: robado.imagen },
        caption: `*Le has robado un personaje a @${objetivo.split("@")[0]}*\n\n` +
                 `*Nombre:* ${robado.nombre}\n*Anime:* ${robado.anime}\n*Valor:* ${robado.valor} coins\n*ID:* ${robado.id}`,
        mentions: [sender, objetivo]
    }, { quoted: info });

    break;
}




case 'menupersonaje': {
    let texto = `*🌸 MENÚ DE PERSONAJES — SISTEMA GACHA*\n\n` +
`@${sender.split("@")[0]} aquí tienes todos los comandos disponibles:\n\n` +
`🎲 *claimpersonaje* — Reclamá un personaje aleatorio.\n` +
`✨ *guardarpersonaje* — Guarda el personaje que reclamaste.\n` +
`💰 *venderpersonaje <nombre>* — Vende un personaje y recibe su valor en monedas.\n` +
`🛒 *buypersonaje <nombre>* — Compra un personaje con tus monedas.\n` +
`🕵️ *robarpersonaje @usuario* — Roba un personaje aleatorio de otro usuario.\n` +
`📄 *verpersonaje <nombre>* — Muestra la información completa de un personaje.\n` +
`📦 *listapersonaje* — Lista todos tus personajes guardados.\n` +
`🏆 *topdepersonajes* — Muestra el ranking de usuarios con más personajes.\n\n` +
`*Ejemplo de uso:* \n.buypersonaje mitsuri`;

    await susune.sendMessage(from, {
        text: texto,
        mentions: [sender]
    });
    break;
}

case 'invocar':
    if (args[0] !== 'familiar') break;

    const famDB = './archivos/json/familiares.json';
    const tempPath = `./archivos/json/tempfamiliar_${sender}.json`;
    const cooldownPath = './archivos/json/cooldown_familiar.json';

    let cooldowns = fs.existsSync(cooldownPath) ? JSON.parse(fs.readFileSync(cooldownPath)) : {};
const ahora = Date.now();
const espera = 24 * 60 * 60 * 1000; // 24 horas

if (cooldowns[sender] && ahora - cooldowns[sender] < espera) {
  const restante = espera - (ahora - cooldowns[sender]);
  const horas = Math.floor(restante / (60 * 60 * 1000));
  const minutos = Math.floor((restante % (60 * 60 * 1000)) / (60 * 1000));

  await susune.sendMessage(from, { 
    text: `🌷 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐲𝐚 𝐡𝐚𝐬 𝐢𝐧𝐯𝐨𝐜𝐚𝐝𝐨 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐲 𝐜𝐨𝐧𝐬𝐮𝐦𝐢𝐬𝐭𝐞 𝐦𝐮𝐜𝐡𝐨 𝐦𝐚𝐧𝐚, 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐝𝐞𝐬𝐜𝐚𝐧𝐬𝐚 𝐲 𝐯𝐮𝐞𝐥𝐯𝐞 𝐚 𝐢𝐧𝐭𝐞𝐧𝐭𝐚𝐥𝐨 𝐞𝐧: *${horas}* 𝐇𝐨𝐫𝐚𝐬 𝐲 *${minutos}* 𝐌𝐢𝐧𝐮𝐭𝐨𝐬`, 
    mentions: [sender] 
  });

        break;
    }

    let listaxs = JSON.parse(fs.readFileSync(famDB));
    const libres = listaxs.filter(f => f.estado === "libre");

    if (libres.length === 0) {
        await susune.sendMessage(from, {
            text: `🌷 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐭𝐮 𝐧𝐢𝐯𝐞𝐥 𝐝𝐞 𝐦𝐚𝐧𝐚 𝐞𝐬 𝐦𝐮𝐲 𝐛𝐚𝐣𝐨, 𝐧𝐨 𝐞𝐬𝐭𝐚𝐬 𝐥𝐢𝐬𝐭𝐨 𝐩𝐚𝐫𝐚 𝐢𝐧𝐯𝐨𝐜𝐚𝐫 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫.`,
            mentions: [sender]
        });
        break;
    }

    const elegido = libres[Math.floor(Math.random() * libres.length)];
    fs.writeFileSync(tempPath, JSON.stringify(elegido, null, 2));
    cooldowns[sender] = ahora;
    fs.writeFileSync(cooldownPath, JSON.stringify(cooldowns, null, 2));

    const infok = `✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨\n𝐈𝐧𝐯𝐨𝐜𝐚𝐜𝐢𝐨𝐧 𝐂𝐨𝐦𝐩𝐥𝐞𝐭𝐚𝐝𝐚\n✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨✯\n\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${elegido.nombre}*\n💗⃟✿ 𝑬𝒅𝒂𝒅: *${elegido.edad}*\n💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${elegido.genero}*\n` +
        `💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${elegido.nivel}/999*\n💗⃟✿ 𝑬𝒙𝒑: *${elegido.exp}/${elegido.expMax}*\n💗⃟✿ 𝑴𝒂𝒏𝒂: *${elegido.mana}*\n` +
        `💗⃟✿ 𝑻𝒊𝒑𝒐: *${elegido.tipo}*\n💗⃟✿ 𝑽𝒊𝒅𝒂: *${elegido.vida} hp*\n💗⃟✿ 𝑨𝒕𝒂𝒒𝒖𝒆: *${elegido.ataque}*\n` +
        `💗⃟✿ 𝑯𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔: *${elegido.habilidades.join(", ")}*\n\n` +
        `💗⃟✿ 𝑰𝒏𝒗𝒐𝒄𝒂𝒅𝒐𝒐𝒓: @${sender.split("@")[0]}\n\n` +
        `🎉 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 @${sender.split("@")[0]} 𝐭𝐮 𝐜𝐚𝐧𝐭𝐢𝐝𝐚𝐝 𝐝𝐞 𝐦𝐚𝐧𝐚 𝐞𝐬 𝐟𝐚𝐧𝐭𝐚𝐬𝐭𝐢𝐜𝐨, 𝐡𝐚𝐬 𝐢𝐧𝐯𝐨𝐜𝐚𝐝𝐨 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐢𝐧𝐜𝐫𝐞𝐢𝐛𝐥𝐞, 𝐩𝐚𝐫𝐚 𝐟𝐢𝐫𝐦𝐚𝐫 𝐞𝐥 𝐜𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐩𝐨𝐫 𝐜𝐨𝐦𝐩𝐥𝐞𝐭𝐨 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨:  *.ғɪʀᴍᴀʀᴄᴏɴᴛʀᴀᴛᴏ*`;

    await susune.sendMessage(from, {
        image: { url: elegido.imagen },
        caption: infok,
        mentions: [sender]
    });
    break;

case 'firmarcontrato':
    const famFile = './archivos/json/familiares.json';
    const tempFile = `./archivos/json/tempfamiliar_${sender}.json`;

    if (!fs.existsSync(tempFile)) {
        await susune.sendMessage(from, {
            text: `🌸 !𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐞𝐬𝐭𝐚𝐬 𝐦𝐮𝐲 𝐟𝐞𝐥𝐢𝐳 𝐩𝐨𝐫 𝐭𝐞𝐧𝐞𝐫 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐲𝐨 𝐭𝐚𝐦𝐛𝐢𝐞𝐧 𝐥𝐨 𝐞𝐬𝐭𝐨𝐲 𝐩𝐨𝐫 𝐭𝐢, 𝐩𝐞𝐫𝐨 𝐧𝐨 𝐩𝐮𝐞𝐝𝐞𝐬 𝐟𝐢𝐫𝐦𝐚𝐫 𝐜𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐜𝐨𝐧 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐬𝐢𝐧 𝐢𝐧𝐯𝐨𝐜𝐚𝐫𝐥𝐨, 𝐩𝐚𝐫𝐚 𝐢𝐧𝐯𝐨𝐜𝐚𝐫 𝐮𝐧𝐨 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨: *.ɪɴᴠᴏᴄᴀʀ ғᴀᴍɪʟɪᴀʀ*`,
            mentions: [sender]
        });
        break;
    }

    const familiarTemp = JSON.parse(fs.readFileSync(tempFile));
    let data = JSON.parse(fs.readFileSync(famFile));
    const index = data.findIndex(f => f.id === familiarTemp.id);

    if (index === -1) {
        fs.unlinkSync(tempFile);
        await susune.sendMessage(from, {
            text: `🌸 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐥𝐨 𝐬𝐢𝐞𝐧𝐭𝐨 𝐦𝐮𝐜𝐡𝐨, 𝐬𝐞 𝐪𝐮𝐞 𝐞𝐬𝐭𝐚𝐛𝐚𝐬 𝐟𝐞𝐥𝐢𝐳 𝐩𝐨𝐫 𝐟𝐢𝐫𝐦𝐚𝐫 𝐜𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐜𝐨𝐧 𝐞𝐬𝐭𝐞 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐩𝐞𝐫𝐨 𝐲𝐚 𝐧𝐨 𝐞𝐬𝐭𝐚 𝐝𝐢𝐬𝐩𝐨𝐧𝐢𝐛𝐥𝐞, 𝐚𝐥𝐠𝐮𝐢𝐞𝐧 𝐦𝐚𝐬 𝐲𝐚 𝐟𝐢𝐫𝐦𝐨 𝐜𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐜𝐨𝐧 𝐞𝐥 𝐨 𝐬𝐞 𝐚𝐜𝐚𝐛𝐨 𝐞𝐥 𝐭𝐢𝐞𝐦𝐩𝐨 𝐝𝐞 𝐢𝐧𝐯𝐨𝐜𝐚𝐜𝐢𝐨𝐧, 𝐬𝐢 𝐪𝐮𝐢𝐞𝐫𝐞𝐬 𝐢𝐧𝐯𝐨𝐜𝐚𝐫 𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐬𝐢𝐠𝐮𝐢𝐞𝐧𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨: *.ɪɴᴠᴏᴄᴀʀ ғᴀᴍɪʟɪᴀʀ*`,
            mentions: [sender]
        });
        break;
    }

    if (data[index].estado === 'ocupado') {
        await susune.sendMessage(from, {
            text: `🌷 !𝐇𝐨𝐥𝐚!, 𝐥𝐚𝐦𝐞𝐧𝐭𝐨 𝐢𝐧𝐟𝐨𝐫𝐦𝐚𝐫𝐭𝐞 𝐪𝐮𝐞 𝐞𝐬𝐭𝐞 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐲𝐚 𝐭𝐢𝐞𝐧𝐞 𝐮𝐧 𝐜𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐝𝐞 𝐢𝐧𝐯𝐨𝐜𝐚𝐜𝐢𝐨𝐧 𝐜𝐨𝐧: @${data[index].duenio.split("@")[0]}`,
            mentions: [data[index].duenio]
        });
        fs.unlinkSync(tempFile);
        break;
    }

    // Guardar como ocupado
    data[index].estado = 'ocupado';
    data[index].duenio = sender;

    fs.writeFileSync(famFile, JSON.stringify(data, null, 2));
    fs.unlinkSync(tempFile);

    const f = data[index];
    const plantilla = `✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨✯\n🎉 𝐂𝐨𝐧𝐭𝐫𝐚𝐭𝐨 𝐄𝐱𝐢𝐭𝐨𝐬𝐨 🎉\n✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨✯\n\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${f.nombre}*\n💗⃟✿ 𝑬𝒅𝒂𝒅: *${f.edad}*\n💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${f.genero}*\n` +
        `💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${f.nivel}/999*\n💗⃟✿ 𝑬𝒙𝒑: *${f.exp}/${f.expMax}*\n💗⃟✿ 𝑴𝒂𝒏𝒂: *${f.mana}*\n` +
        `💗⃟✿ 𝑻𝒊𝒑𝒐: *${f.tipo}*\n💗⃟✿ 𝑽𝒊𝒅𝒂: *${f.vida} HP*\n💗⃟✿ 𝑨𝒕𝒂𝒒𝒖𝒆: *${f.ataque}*\n` +
        `💗⃟✿ 𝑨𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔: *${f.habilidades.join(", ")}*\n\n` +
        `💗⃟✿ 𝑰𝒏𝒗𝒐𝒄𝒂𝒅𝒐𝒓: @${sender.split("@")[0]}`

    await susune.sendMessage(from, {
        image: { url: f.imagen },
        caption: plantilla,
        mentions: [sender]
    });
    break;

case 'verfamiliar':
    if (!q) {
        await susune.sendMessage(from, {
            text: `💗 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐪𝐮𝐞 𝐝𝐞𝐜𝐞𝐚𝐬 𝐯𝐞𝐫, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨:  *.ᴠᴇʀғᴀᴍɪʟɪᴀʀ ʜɪᴍɪᴋᴏ ᴛᴏɢᴀ*`,
            mentions: [sender]
        });
        break;
    }

    const famPathVer = './archivos/json/familiares.json';
    let dataVer = JSON.parse(fs.readFileSync(famPathVer));
    const famVer = dataVer.find(f => f.nombre.toLowerCase() === q.toLowerCase() && f.duenio === sender);

    if (!famVer) {
        await susune.sendMessage(from, {
            text: `💗 ¡𝐔𝐩𝐬!, @${sender.split("@")[0]} 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐧𝐢𝐧𝐠𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐥𝐥𝐚𝐦𝐚𝐝𝐨: *${q}*.`,
            mentions: [sender]
        });
        break;
    }

    const infoi = `✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨✯\n𝐄𝐬𝐭𝐚𝐝𝐢𝐬𝐭𝐢𝐜𝐚𝐬 𝐃𝐞 *${q}*\n✯¨*•.¸.•*¨*•✿ 🌸 ✿•*¨*•.¸.•*¨✯\n\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${famVer.nombre}*\n💗⃟✿ 𝑬𝒅𝒂𝒅: *${famVer.edad}*\n💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${famVer.genero}*\n` +
        `💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${famVer.nivel}/999*\n💗⃟✿ 𝑬𝒙𝒑: *${famVer.exp}/${famVer.expMax}*\n💗⃟✿ 𝑴𝒂𝒏𝒂: *${famVer.mana}*\n` +
        `💗⃟✿ 𝑻𝒊𝒑𝒐: *${famVer.tipo}*\n💗⃟✿ 𝑽𝒊𝒅𝒂: *${famVer.vida} HP*\n💗⃟✿ 𝑨𝒕𝒂𝒒𝒖𝒆: *${famVer.ataque}*\n` +
        `💗⃟✿ 𝑯𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅𝒆𝒔: *${famVer.habilidades.join(", ")}*\n\n` +
        `💗⃟✿ 𝑰𝒏𝒗𝒐𝒄𝒂𝒅𝒐𝒓: @${sender.split("@")[0]}`;

    await susune.sendMessage(from, {
        image: { url: famVer.imagen },
        caption: infoi,
        mentions: [sender]
    });
    break;

case 'listafamiliar':
    const famPathLista = './archivos/json/familiares.json';
    let listaData = JSON.parse(fs.readFileSync(famPathLista));
    const mios = listaData.filter(f => f.duenio === sender);

    if (mios.length === 0) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes familiares aún. Usa *invocar familiar*`,
            mentions: [sender]
        });
        break;
    }

    let txt = `*Lista de familiares obtenidos*\n\n`;
    mios.forEach(f => {
        txt += `*Nombre:* ${f.nombre}\n*Género:* ${f.genero}\n*Tipo:* ${f.tipo}\n\n`;
    });
    txt += `*Total de familiares:* ${mios.length}`;

    await susune.sendMessage(from, {
        text: txt,
        mentions: [sender]
    });
    break;

case 'topfamiliar':
    const famPathTop = './archivos/json/familiares.json';
    let famTop = JSON.parse(fs.readFileSync(famPathTop));
    const propietarios = {};

    for (let f of famTop) {
        if (f.estado === 'ocupado') {
            if (!propietarios[f.duenio]) propietarios[f.duenio] = [];
            propietarios[f.duenio].push(f.tipo);
        }
    }

    const top = Object.entries(propietarios)
        .map(([user, tipos]) => ({
            user,
            cantidad: tipos.length,
            tipos: [...new Set(tipos)].join(', ')
        }))
        .sort((a, b) => b.cantidad - a.cantidad);

    if (top.length === 0) {
        await susune.sendMessage(from, { text: "Nadie tiene familiares aún." });
        break;
    }

    let msga = `*Usuarios con Familiares*\n\n`;
    const menciones = [];

    top.forEach(entry => {
        const tag = entry.user.split("@")[0];
        menciones.push(entry.user);
        msga += `@${tag}\nFamiliares: ${entry.cantidad}\nTipos: ${entry.tipos}\n\n`;
    });

    await susune.sendMessage(from, {
        text: msga,
        mentions: menciones
    });
    break;

case 'curarfamiliar':
    if (!q) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, debes escribir el nombre del familiar a curar.`,
            mentions: [sender]
        });
        break;
    }

    const pathCurar = './archivos/json/familiares.json';
    let dataCurar = JSON.parse(fs.readFileSync(pathCurar));
    const indexCurar = dataCurar.findIndex(f => f.nombre.toLowerCase() === q.toLowerCase() && f.duenio === sender);

    if (indexCurar === -1) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes ningún familiar llamado *${q}*.`,
            mentions: [sender]
        });
        break;
    }

    const fam = dataCurar[indexCurar];
    const vidaAntes = fam.vida;
    const manaAntes = fam.mana;

    // Restaurar vida
    fam.vida = fam.nivel * 200;
    if (fam.vida > 100000) fam.vida = 100000;

    // Restaurar maná al valor original según nivel (lo calculamos de nuevo como máximo)
    const manaOriginal = 1200 + ((fam.nivel - 1) * 100); // Puedes ajustar esta fórmula
    fam.mana = manaOriginal;

    fs.writeFileSync(pathCurar, JSON.stringify(dataCurar, null, 2));

    const infoii = `*Curación Exitosa*\n\n` +
        `Nombre: ${fam.nombre}\n` +
        `Vida antes: ${vidaAntes} HP → *${fam.vida}* HP\n` +
        `Maná antes: ${manaAntes} → *${fam.mana}*`;

    await susune.sendMessage(from, {
        image: { url: fam.imagen },
        caption: infoii,
        mentions: [sender]
    });
    break;

case 'subirnivel': {
    if (!q) {
        await susune.sendMessage(from, {
            text: `🌸 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐩𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐧𝐨𝐦𝐛𝐫𝐞 𝐝𝐞𝐥 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐪𝐮𝐞 𝐝𝐞𝐜𝐞𝐚𝐬 𝐬𝐮𝐛𝐢𝐫𝐥𝐞 𝐞𝐥 𝐧𝐢𝐯𝐞𝐥, 𝐞𝐣𝐞𝐦𝐩𝐥𝐨: *.sᴜʙɪʀɴɪᴠᴇʟ ʜɪᴍɪᴋᴏ ᴛᴏɢᴀ*`,
            mentions: [sender]
        });
        break;
    }

    const pathSubir = './archivos/json/familiares.json';
    let dataSubir = JSON.parse(fs.readFileSync(pathSubir));
    const indexSubir = dataSubir.findIndex(f => f.nombre.toLowerCase() === q.toLowerCase() && f.duenio === sender);

    if (indexSubir === -1) {
        await susune.sendMessage(from, {
            text: `💗 !𝐔𝐩𝐬!, @${sender.split("@")[0]} 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐧𝐢𝐧𝐠𝐮𝐧 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 𝐥𝐥𝐚𝐦𝐚𝐝𝐨: *${q}*.`,
            mentions: [sender]
        });
        break;
    }

    const fi = dataSubir[indexSubir];
    const expNecesaria = fi.expMax || 100;

    if (fi.exp < expNecesaria) {
        const faltante = expNecesaria - fi.exp;
        await susune.sendMessage(from, {
            text: `💗 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]} 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚, 𝐧𝐞𝐜𝐞𝐬𝐢𝐭𝐚𝐬.*${faltante}* 𝐝𝐞 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐢𝐚 𝐩𝐚𝐫𝐚 𝐬𝐮𝐛𝐢𝐫 𝐝𝐞 𝐧𝐢𝐯𝐞𝐥 𝐚 𝐭𝐮 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 *${q}*`,
            mentions: [sender]
        });
        break;
    }

    fi.exp -= expNecesaria;
    fi.nivel += 1;
    fi.expMax += 100;
    fi.vida = fi.nivel * 200;
    if (fi.vida > 100000) fi.vida = 100000;

    fi.ataque += 20;

    // Subir maná (duplicando el anterior)
    fi.mana *= 2;
    if (fi.mana > 100000) fi.mana = 100000;

    dataSubir[indexSubir] = fi;
    fs.writeFileSync(pathSubir, JSON.stringify(dataSubir, null, 2));

    const plantilla = `-ˋˏ ༻❁༺ ˎˊ🌸ˋˏ ༻❁༺ ˎˊ-\n🎉 𝐅𝐞𝐥𝐢𝐜𝐢𝐝𝐚𝐝𝐞𝐬 @${sender.split("@")[0]}\n𝐓𝐮 𝐟𝐚𝐦𝐢𝐥𝐢𝐚𝐫 *${fi.nombre}* 𝐡𝐚 𝐬𝐮𝐛𝐢𝐝𝐨 𝐝𝐞 𝐧𝐢𝐯𝐞𝐥.\n\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${fi.nombre}*\n` +
        `💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${fi.nivel}/999*\n` +
        `💗⃟✿ 𝑽𝒊𝒅𝒂: *${fi.vida} HP*\n` +
        `💗⃟✿ 𝑴𝒂𝒏𝒂: *${fi.mana}*\n` +
        `💗⃟✿ 𝑨𝒕𝒂𝒒𝒖𝒆: *${fi.ataque}*\n` +
        `💗⃟✿ 𝑬𝒙𝒑: *${fi.exp}/${fi.expMax}*`;

    await susune.sendMessage(from, {
        image: { url: fi.imagen },
        caption: plantilla,
        mentions: [sender]
    });
    break;
}

case 'desafiar':
    if (!isGroup) break;

    const mentionedJidp = info.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    if (mentionedJidp.length === 0) break;

    const rival = mentionedJidp[0];
    const batallaPath = './archivos/json/batallas_familiares.json';
    const famPathb = './archivos/json/familiares.json';

    const batallas = fs.existsSync(batallaPath) ? JSON.parse(fs.readFileSync(batallaPath)) : {};
    const familiaresi = fs.existsSync(famPathb) ? JSON.parse(fs.readFileSync(famPathb)) : [];

    if (batallas[from]) {
        await susune.sendMessage(from, {
            text: 'Ya hay un combate activo en este grupo.'
        });
        break;
    }

    // Verificar si el retador tiene al menos un familiar
    const tieneRetador = familiaresi.some(f => f.duenio === sender && f.estado === "ocupado");
    if (!tieneRetador) {
        await susune.sendMessage(from, {
            text: `Lo siento @${sender.split("@")[0]}, no tienes ningún familiar.`,
            mentions: [sender]
        });
        break;
    }

    // Verificar si el rival tiene al menos un familiar
    const tieneRival = familiaresi.some(f => f.duenio === rival && f.estado === "ocupado");
    if (!tieneRival) {
        await susune.sendMessage(from, {
            text: `Lo siento @${sender.split("@")[0]}, el usuario @${rival.split("@")[0]} no tiene ningún familiar.`,
            mentions: [sender, rival]
        });
        break;
    }

    batallas[from] = {
        estado: 'pendiente',
        retador: sender,
        retado: rival
    };

    fs.writeFileSync(batallaPath, JSON.stringify(batallas, null, 2));

    await susune.sendMessage(from, {
        text: `@${rival.split("@")[0]}, @${sender.split("@")[0]} te ha desafiado a una batalla.\nResponde con *aceptarduelo* para comenzar.`,
        mentions: [sender, rival]
    });
    break;
case 'aceptarduelo':
const batallaPathoo = './archivos/json/batallas_familiares.json';
    const dataBat = fs.existsSync(batallaPathoo) ? JSON.parse(fs.readFileSync(batallaPathoo)) : {};
    const b = dataBat[from];

    if (!b || b.estado !== 'pendiente') {
        await susune.sendMessage(from, { text: 'No hay ningún duelo pendiente en este grupo.' });
        break;
    }

    if (sender !== b.retado) {
        await susune.sendMessage(from, { text: 'Solo el usuario desafiado puede aceptar el duelo.' });
        break;
    }

    b.estado = 'esperando_invocacion';
    fs.writeFileSync(batallaPathoo, JSON.stringify(dataBat, null, 2));

    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} aceptó el duelo contra @${b.retador.split("@")[0]}.\nAmbos deben elegir su familiar con *llamarfamiliar <nombre>*`,
        mentions: [sender, b.retador]
    });
    break;
case 'llamarfamiliar': {
    if (!q) break;

    if (args[0].toLowerCase() === 'familiar') {
        // Aquí puedes poner la lógica de invocar un nuevo familiar aleatorio
        break;
    }

    const duelosPath = './archivos/json/batallas_familiares.json';
    const famPath = './archivos/json/familiares.json';

    const combatesx = fs.existsSync(duelosPath) ? JSON.parse(fs.readFileSync(duelosPath)) : {};
    const datosz = combatesx[from];

    if (!datosz) {
        await susune.sendMessage(from, {
            text: 'No hay ningún combate activo para invocar un familiar.',
            mentions: [sender]
        });
        break;
    }

    const familiaresh = fs.existsSync(famPath) ? JSON.parse(fs.readFileSync(famPath)) : [];

    const tieneFamiliares = familiaresh.some(f => f.duenio === sender && f.estado === "ocupado");
    if (!tieneFamiliares) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes ningún familiar para invocar.`,
            mentions: [sender]
        });
        break;
    }

    const elegidok = familiaresh.find(f =>
        f.nombre.toLowerCase() === q.toLowerCase() &&
        f.duenio === sender &&
        f.estado === "ocupado"
    );

    if (!elegidok) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes ningún familiar llamado *${q}* o no lo has reclamado.`,
            mentions: [sender]
        });
        break;
    }

    if (!datosz.familiares) datosz.familiares = {};
    datosz.familiares[sender] = elegidok;

    // ---- MASMORRA ----
    if (datosz.tipo === 'masmorra' && datosz.estado === 'masmorra_invocando' && datosz.jugador === sender) {
        datosz.estado = 'masmorra_en_combate';

        fs.writeFileSync(duelosPath, JSON.stringify(combatesx, null, 2));

        await susune.sendMessage(from, {
            image: { url: elegidok.imagen },
            caption: `@${sender.split("@")[0]} ha invocado a *${elegidok.nombre}*.\n¡Comienza el combate contra *${datosz.enemigo.nombre}*! Usa:\n\n*atacarenemigo <nombre> <ataque>*`,
            mentions: [sender]
        });
        break;
    }

    // ---- PVP ----
    if (datosz.estado === 'esperando_invocacion') {
        const faltante = sender === datosz.retador ? datosz.retado : datosz.retador;

        if (Object.keys(datosz.familiares).length === 2) {
            datosz.estado = 'en_combate';
            datosz.turno = datosz.retador;

            const f1 = datosz.familiares[datosz.retador];
            const f2 = datosz.familiares[datosz.retado];

            fs.writeFileSync(duelosPath, JSON.stringify(combatesx, null, 2));

            await susune.sendMessage(from, {
                text: `¡Ambos jugadores han invocado a sus familiares!\n\n` +
                      `@${datosz.retador.split("@")[0]} eligió a *${f1.nombre}*\n` +
                      `@${datosz.retado.split("@")[0]} eligió a *${f2.nombre}*\n\n` +
                      `@${datosz.turno.split("@")[0]}, es tu turno. Usa *atacarfamiliar <nombre> <ataque>*`,
                mentions: [datosz.retador, datosz.retado]
            });
        } else {
            fs.writeFileSync(duelosPath, JSON.stringify(combatesx, null, 2));

            await susune.sendMessage(from, {
                text: `Muy bien, el usuario @${sender.split("@")[0]} invocó a *${elegidok.nombre}*.\n\nTurno de @${faltante.split("@")[0]} para invocar un familiar.`,
                mentions: [sender, faltante]
            });
        }
    }

    break;
}

case 'atacarfamiliar': {
    const partes = q.trim().split(" ");
    if (partes.length < 2) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, usa: *atacarfamiliar <nombre del familiar> <ataque>*`,
            mentions: [sender]
        });
        break;
    }

    const batallaPath = './archivos/json/batallas_familiares.json';
    const famPath = './archivos/json/familiares.json';
    const registrosPath = './archivos/json/registros.json';

    let combates = JSON.parse(fs.readFileSync(batallaPath));
    let combate = combates[from];
    if (!combate) {
        await susune.sendMessage(from, {
            text: 'No hay combate activo en este grupo.',
            mentions: [sender]
        });
        break;
    }

    const familiares = JSON.parse(fs.readFileSync(famPath));
    const misFamiliares = familiares.filter(f => f.duenio === sender && f.estado === 'ocupado');

    let nombreF = "";
    let ataque = "";
    let faIndex = -1;

    for (let i = partes.length; i > 0; i--) {
        const posibleNombre = partes.slice(0, i).join(" ").toLowerCase();
        const index = misFamiliares.findIndex(f => f.nombre.toLowerCase() === posibleNombre);
        if (index !== -1) {
            nombreF = posibleNombre;
            ataque = partes.slice(i).join(" ");
            faIndex = familiares.findIndex(f => f.nombre.toLowerCase() === nombreF && f.duenio === sender && f.estado === 'ocupado');
            break;
        }
    }

    if (!nombreF || !ataque || faIndex === -1) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, asegúrate de escribir bien el nombre del familiar y el ataque.`,
            mentions: [sender]
        });
        break;
    }

    const fa = familiares[faIndex];
    if (!fa.habilidades.includes(ataque)) {
        await susune.sendMessage(from, {
            text: `*${fa.nombre}* no conoce el ataque *${ataque}*.`,
            mentions: [sender]
        });
        break;
    }

    if (fa.mana < 50) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no tienes suficiente mana para atacar.`,
            mentions: [sender]
        });
        break;
    }

    // --- MASMORRA ---
    if (combate.tipo === 'masmorra' && combate.estado === 'masmorra_en_combate' && combate.jugador === sender) {
        fa.mana -= 50;
        combate.enemigo.vida -= fa.ataque;
        if (combate.enemigo.vida < 0) combate.enemigo.vida = 0;

        let mensaje = `*${fa.nombre}* usó *${ataque}* y causó ${fa.ataque} de daño a *${combate.enemigo.nombre}*\n` +
                      `Vida restante del enemigo: ${combate.enemigo.vida} HP\nMana restante: ${fa.mana}`;

        if (combate.enemigo.vida <= 0) {
            const expGanar = 100;
            const monedasGanar = 150;

            fa.exp += expGanar;
            familiares[faIndex] = fa;
            fs.writeFileSync(famPath, JSON.stringify(familiares, null, 2));

            let registros = fs.existsSync(registrosPath) ? JSON.parse(fs.readFileSync(registrosPath)) : {};
            if (!registros[sender]) registros[sender] = { monedas: 0 };
            registros[sender].monedas += monedasGanar;
            fs.writeFileSync(registrosPath, JSON.stringify(registros, null, 2));

            mensaje += `\n\n@${sender.split("@")[0]}, ¡has vencido al enemigo!\nGanaste *${expGanar} EXP* y *${monedasGanar} monedas*.\n` +
                       `Puedes usar *contratofamiliar ${combate.enemigo.nombre}* o *noquiero* para dejarlo ir.`;

            combates[from] = {
                tipo: 'masmorra_ganada',
                jugador: sender,
                enemigo: combate.enemigo
            };

            fs.writeFileSync(batallaPath, JSON.stringify(combates, null, 2));
            await susune.sendMessage(from, {
                image: { url: fa.imagen },
                caption: mensaje,
                mentions: [sender]
            });
        } else {
            mensaje += `\n\n*${combate.enemigo.nombre}* está preparando un contraataque...`;

            familiares[faIndex] = fa;
            fs.writeFileSync(famPath, JSON.stringify(familiares, null, 2));
            fs.writeFileSync(batallaPath, JSON.stringify(combates, null, 2));

            await susune.sendMessage(from, {
                image: { url: fa.imagen },
                caption: mensaje,
                mentions: [sender]
            });

            setTimeout(async () => {
                const dañoEnemigo = Math.floor(Math.random() * 30) + 10;
                const habilidadesEnemigas = ["Zarpazo Salvaje", "Rugido Mortal", "Furia Oscura", "Garra Sombría", "Golpe Fantasma"];
                const habilidadRandom = habilidadesEnemigas[Math.floor(Math.random() * habilidadesEnemigas.length)];

                fa.vida -= dañoEnemigo;
                if (fa.vida < 0) fa.vida = 0;

                familiares[faIndex] = fa;

                let respuesta = `*¡Contraataque del enemigo!*\n\n` +
                    `*${combate.enemigo.nombre}* usó *${habilidadRandom}* y causó *${dañoEnemigo}* de daño a *${fa.nombre}*\n` +
                    `Vida restante de tu familiar: *${fa.vida}* HP`;

                if (fa.vida <= 0) {
                    respuesta += `\n\n@${sender.split("@")[0]}, tu familiar ha sido derrotado. Fin del combate.`;
                    delete combates[from];
                } else {
                    combates[from] = combate;
                }

                fs.writeFileSync(famPath, JSON.stringify(familiares, null, 2));
                fs.writeFileSync(batallaPath, JSON.stringify(combates, null, 2));

                await susune.sendMessage(from, {
                    image: { url: combate.enemigo.imagen },
                    caption: respuesta,
                    mentions: [sender]
                });
            }, 3000);
        }

        break;
    }

    // --- PVP ---
    if (combate.estado !== 'en_combate') {
        await susune.sendMessage(from, { text: 'No hay combate activo.' });
        break;
    }

    if (sender !== combate.turno) {
        await susune.sendMessage(from, { text: 'No es tu turno.' });
        break;
    }

    const rivalID = sender === combate.retador ? combate.retado : combate.retador;
    const rivalF = combate.familiares[rivalID];

    fa.mana -= 50;
    rivalF.vida -= fa.ataque;
    if (rivalF.vida < 0) rivalF.vida = 0;

    let mensaje = `*${fa.nombre}* usó *${ataque}* y causó ${fa.ataque} de daño a *${rivalF.nombre}*\n` +
                  `Vida restante del rival: ${rivalF.vida} HP\nMana restante: ${fa.mana}`;

    if (rivalF.vida <= 0) {
        combate.estado = 'finalizado';
        combate.ganador = sender;
        combate.perdedor = rivalID;

        const expGanar = 100;
        const monedasGanar = 500;

        fa.exp += expGanar;
        familiares[faIndex] = fa;
        fs.writeFileSync(famPath, JSON.stringify(familiares, null, 2));

        let registros = fs.existsSync(registrosPath) ? JSON.parse(fs.readFileSync(registrosPath)) : {};
        if (!registros[sender]) registros[sender] = { monedas: 0 };
        registros[sender].monedas += monedasGanar;
        fs.writeFileSync(registrosPath, JSON.stringify(registros, null, 2));

        mensaje += `\n\n@${sender.split("@")[0]} ha ganado la batalla.\nGanaste *${expGanar} EXP* y *${monedasGanar} monedas*.\n` +
                   `Puedes usar *contratofamiliar ${rivalF.nombre}* o *noquiero* para perdonarlo.`;
    } else {
        combate.turno = rivalID;
    }

    combates[from] = combate;
    fs.writeFileSync(batallaPath, JSON.stringify(combates, null, 2));

    await susune.sendMessage(from, {
        image: { url: fa.imagen },
        caption: mensaje,
        mentions: [sender, rivalID]
    });
    break;
}

case 'contratofamiliar': {
    const nombreContratar = q.trim().toLowerCase();
    if (!nombreContratar) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, debes escribir el nombre del familiar que quieres reclamar.`,
            mentions: [sender]
        });
        break;
    }

    const rutaCombates = './archivos/json/batallas_familiares.json';
    const rutaFamiliares = './archivos/json/familiares.json';
    let combates = JSON.parse(fs.readFileSync(rutaCombates));
    let combate = combates[from];

    if (!combate) {
        await susune.sendMessage(from, {
            text: 'No hay ningún combate registrado para reclamar familiar.',
            mentions: [sender]
        });
        break;
    }

    const familiares = JSON.parse(fs.readFileSync(rutaFamiliares));

    // --- MODO PVP ENTRE USUARIOS ---
    if (combate.estado === 'finalizado' && combate.ganador === sender) {
        const rivalID = combate.perdedor;
        const indexx = familiares.findIndex(f => f.nombre.toLowerCase() === nombreContratar && f.duenio === rivalID);

        if (indexx === -1) {
            await susune.sendMessage(from, {
                text: 'El familiar no existe o ya fue eliminado.',
                mentions: [sender]
            });
            break;
        }

        familiares[indexx].duenio = sender;

        fs.writeFileSync(rutaFamiliares, JSON.stringify(familiares, null, 2));
        delete combates[from];
        fs.writeFileSync(rutaCombates, JSON.stringify(combates, null, 2));

        await susune.sendMessage(from, {
            image: { url: familiares[indexx].imagen },
            caption: `¡Felicidades @${sender.split("@")[0]}!\nHas firmado contrato con *${familiares[indexx].nombre}*.\nEste familiar ahora te pertenece.`,
            mentions: [sender]
        });
        break;
    }

    // --- MODO MASMORRA ---
    if (combate.tipo === 'masmorra_ganada' && combate.jugador === sender) {
        const enemigo = combate.enemigo;

        if (enemigo.nombre.toLowerCase() !== nombreContratar) {
            await susune.sendMessage(from, {
                text: `Ese no es el familiar que puedes domar.`,
                mentions: [sender]
            });
            break;
        }

        const nuevo = {
            id: familiares.length + 1,
            nombre: enemigo.nombre,
            edad: Math.floor(Math.random() * 10) + 18,
            genero: Math.random() < 0.5 ? "Masculino" : "Femenina",
            nivel: enemigo.nivel,
            exp: 0,
            expMax: 100,
            mana: 1200,
            vida: enemigo.nivel * 200,
            ataque: enemigo.nivel * 2,
            tipo: enemigo.tipo,
            habilidades: ["Instinto Salvaje", "Furia", "Velocidad", "Agilidad", "Contraataque"],
            imagen: enemigo.imagen,
            estado: "ocupado",
            duenio: sender
        };

        familiares.push(nuevo);
        fs.writeFileSync(rutaFamiliares, JSON.stringify(familiares, null, 2));
        delete combates[from];
        fs.writeFileSync(rutaCombates, JSON.stringify(combates, null, 2));

        await susune.sendMessage(from, {
            image: { url: nuevo.imagen },
            caption: `¡Felicidades @${sender.split("@")[0]}!\nHas firmado contrato con *${nuevo.nombre}*. Ahora es tu familiar.`,
            mentions: [sender]
        });
        break;
    }

    // --- SI NO ESTÁ EN NINGÚN CONTEXTO VÁLIDO ---
    await susune.sendMessage(from, {
        text: 'No puedes reclamar ningún familiar en este momento.',
        mentions: [sender]
    });
    break;
}
    
    
    case 'ʀᴇᴄʜᴀᴢᴀʀ': {
    const rutaCombates = './archivos/json/batallas_familiares.json';
    let combates = JSON.parse(fs.readFileSync(rutaCombates));
    const combate = combates[from];

    if (!combate) {
        await susune.sendMessage(from, {
            text: 'No hay combate activo para cancelar familiar.',
            mentions: [sender]
        });
        break;
    }

    // PVP
    if (combate.estado === 'finalizado' && combate.ganador === sender) {
        const perdonado = combate.perdedor;
        delete combates[from];
        fs.writeFileSync(rutaCombates, JSON.stringify(combates, null, 2));

        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} ha perdonado a @${perdonado.split("@")[0]} y no reclamó su familiar.`,
            mentions: [sender, perdonado]
        });
        break;
    }

    // Masmorra
    if (combate.tipo === 'masmorra_ganada' && combate.jugador === sender) {
        const enemigo = combate.enemigo;
        delete combates[from];
        fs.writeFileSync(rutaCombates, JSON.stringify(combates, null, 2));

        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} ha dejado ir a *${enemigo.nombre}*. ¡Hasta la próxima!`,
            mentions: [sender]
        });
        break;
    }

    await susune.sendMessage(from, {
        text: `No puedes usar *noquiero* en este momento.`,
        mentions: [sender]
    });
    break;
}
    
    case 'masmorra':
    const masmorraPath = './archivos/json/masmorra_grupos.json';
    let gruposx = fs.existsSync(masmorraPath) ? JSON.parse(fs.readFileSync(masmorraPath)) : [];

    if (args[0] === 'on') {
        if (!gruposx.includes(from)) {
            gruposx.push(from);
            fs.writeFileSync(masmorraPath, JSON.stringify(gruposx, null, 2));
            await susune.sendMessage(from, { text: 'Masmorra activada en este grupo.' });
        } else {
            await susune.sendMessage(from, { text: 'La masmorra ya está activa aquí.' });
        }
    } else if (args[0] === 'off') {
        gruposx = gruposx.filter(g => g !== from);
        fs.writeFileSync(masmorraPath, JSON.stringify(gruposx, null, 2));
        await susune.sendMessage(from, { text: 'Masmorra desactivada en este grupo.' });
    } else {
        await susune.sendMessage(from, {
            text: 'Usa:\n.masmorra on\n.masmorra off'
        });
    }
    break;
    
    case 'cancelar':
    const rutaCombate = './archivos/json/batallas_familiares.json';
    let dataCombate = fs.existsSync(rutaCombate) ? JSON.parse(fs.readFileSync(rutaCombate)) : {};
    const actual = dataCombate[from];

    if (!actual) {
        await susune.sendMessage(from, {
            text: 'No hay ningún combate activo en este grupo.'
        });
        break;
    }

    // Solo puede cancelar si es uno de los dos jugadores
    if (sender !== actual.retador && sender !== actual.retado) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]}, no estás participando en esta batalla.`,
            mentions: [sender]
        });
        break;
    }

    delete dataCombate[from];
    fs.writeFileSync(rutaCombate, JSON.stringify(dataCombate, null, 2));

    await susune.sendMessage(from, {
        text: `El combate ha sido cancelado por @${sender.split("@")[0]}.`,
        mentions: [sender]
    });
    break;


case 'enfrentar': {
    if (!isGroup) break;

    const archivoCombate = `./archivos/json/masmorra_activa_${from}.json`;
    if (!fs.existsSync(archivoCombate)) {
        await susune.sendMessage(from, {
            text: `No hay ningún enemigo activo en la masmorra ahora.`,
            mentions: [sender]
        });
        break;
    }

    const enemigo = JSON.parse(fs.readFileSync(archivoCombate));
    const pathCombates = './archivos/json/batallas_familiares.json';
    const batallas = fs.existsSync(pathCombates) ? JSON.parse(fs.readFileSync(pathCombates)) : {};

    // Verifica que no haya otro combate en el grupo
    if (batallas[from]) {
        await susune.sendMessage(from, {
            text: 'Ya hay un combate activo en este grupo.',
            mentions: [sender]
        });
        break;
    }

    // Crear combate tipo masmorra
    batallas[from] = {
        estado: 'masmorra_invocando',
        tipo: 'masmorra',
        jugador: sender,
        enemigo: enemigo
    };

    fs.writeFileSync(pathCombates, JSON.stringify(batallas, null, 2));

    await susune.sendMessage(from, {
        image: { url: enemigo.imagen },
        caption:
            `Has aceptado el combate de la masmorra.\n\n` +
            `*Nombre:* ${enemigo.nombre}\n` +
            `*Nivel:* ${enemigo.nivel}\n` +
            `*Vida:* ${enemigo.vida} HP\n` +
            `*Tipo:* ${enemigo.tipo}\n\n` +
            `@${sender.split("@")[0]}, ahora invoca a tu familiar con *invocar <nombre>* para iniciar el combate.`,
        mentions: [sender]
    });

    // Eliminar el archivo temporal de aparición
    fs.unlinkSync(archivoCombate);
    break;
}


case 'autolinkimg':
  if (!isGroupAdmins) return reply('❌ *Solo los admins pueden usar este comando*');
  if (args[0] === 'on') {
    if (!autoLinkImgGrupos.includes(from)) {
      autoLinkImgGrupos.push(from);
      guardarAutoLinkImg();
    }
    reply('✅ *AutoLinkIMG activado en este grupo.*');
  } else if (args[0] === 'off') {
    autoLinkImgGrupos = autoLinkImgGrupos.filter(gid => gid !== from);
    guardarAutoLinkImg();
    reply('❌ *AutoLinkIMG desactivado en este grupo.*');
  } else {
    reply('✳️ Usa: *autolinkimg on* o *autolinkimg off*');
  }
  break;

case 'default':
enviar('El comando de roll de ninja se elimino por completo en la index del bot')
break

    case 'simi':
    if (!isGroup) return reply("❌ Este comando solo se puede usar en grupos.");
    if (!isGroupAdmins) return reply("❌ Solo los administradores pueden usar este comando.");

    if (args[0] === 'on') {
        if (gruposSimi.includes(from)) return reply("✅ El modo simi ya está activado.");
        gruposSimi.push(from);
        guardarSimi();
        reply("✅ Modo simi activado en este grupo.");
    } else if (args[0] === 'off') {
        if (!gruposSimi.includes(from)) return reply("❌ El modo simi ya está desactivado.");
        gruposSimi = gruposSimi.filter(id => id !== from);
        guardarSimi();
        reply("❌ Modo simi desactivado en este grupo.");
    } else {
        reply("Uso del comando:\n\n.simi on – Activar modo conversación\n.simi off – Desactivar modo conversación");
    }
break;
    
case 'tiktok':
case 'tt': {
  if (!args[0]) {
    return susune.sendMessage(from, {
      text: `*Ejemplo:* ${prefixo}tiktok https://www.tiktok.com/@usuario/video/12345`
    }, { quoted: m?.message ? m : undefined });
  }

  if (!/tiktok\.com/i.test(args[0])) {
    return susune.sendMessage(from, {
      text: 'Por favor proporciona un enlace válido de TikTok.'
    }, { quoted: m?.message ? m : undefined });
  }

  await susune.sendMessage(from, {
    text: '⏳ Descargando video, por favor espera...'
  }, { quoted: m?.message ? m : undefined });

  try {
    const { data } = await axios.get(`https://api.dorratz.com/v2/tiktok-dl?url=${args[0]}`);

    if (!data.status || !data.data || !data.data.media || !data.data.media.org) {
      return susune.sendMessage(from, {
        text: 'No se pudo descargar el video. Intenta con otro enlace.'
      }, { quoted: m?.message ? m : undefined });
    }

    await susune.sendMessage(from, {
      video: { url: data.data.media.org },
      caption: `🎵 Usuario: ${data.data.author.nickname || 'Desconocido'}`
    }, { quoted: m?.message ? m : undefined });

  } catch (err) {
    console.error('Error al descargar video de TikTok:', err);
    await susune.sendMessage(from, {
      text: 'Ocurrió un error al intentar descargar el video.'
    }, { quoted: m?.message ? m : undefined });
  }

  break;
}
    
case 'facebook':
case 'fb': {
  if (!args[0]) {
    return susune.sendMessage(from, {
      text: `*Ejemplo:* ${prefixo}facebook https://www.facebook.com/watch?v=123456789`
    }, { quoted: m?.message ? m : undefined });
  }

  if (!args[0].match(/facebook\.com|fb\.watch/gi)) {
    return susune.sendMessage(from, {
      text: 'Por favor, proporciona un enlace válido de Facebook.'
    }, { quoted: m?.message ? m : undefined });
  }

  await susune.sendMessage(from, {
    text: '⏳ Descargando video de Facebook, espera un momento...'
  }, { quoted: m?.message ? m : undefined });

  try {
    // Intentamos con la primera API (Dorratz)
    const apiUrl1 = `https://api.dorratz.com/fbvideo?url=${args[0]}`;
    const response1 = await axios.get(apiUrl1);
    const data1 = response1.data;

    if (data1.result && (data1.result.hd || data1.result.sd)) {
      const videoUrl1 = data1.result.hd || data1.result.sd;
      await susune.sendMessage(from, {
        video: { url: videoUrl1 },
        caption: '✅ Video descargado de Facebook.'
      }, { quoted: m?.message ? m : undefined });
      return;
    }
  } catch (e) {
    console.error('Error al obtener video de Dorratz:', e);
  }

  try {
    // Intentamos con la segunda API (Agatz)
    const apiUrl2 = `https://api.agatz.xyz/api/facebook?url=${args[0]}`;
    const response2 = await axios.get(apiUrl2);
    const data2 = response2.data;

    if (data2?.data?.hd || data2?.data?.sd) {
      const videoUrl2 = data2?.data?.hd || data2?.data?.sd;
      await susune.sendMessage(from, {
        video: { url: videoUrl2 },
        caption: '✅ Video descargado de Facebook.'
      }, { quoted: m?.message ? m : undefined });
      return;
    }
  } catch (e) {
    console.error('Error al obtener video de Agatz:', e);
  }

  try {
    // Intentamos con la tercera API (fbdl)
    const { fbdl } = (await import('api-dylux'))
    let response3 = await fbdl(args[0]);
    if (response3.data?.[0]?.url) {
      await susune.sendMessage(from, {
        video: { url: response3.data[0].url },
        caption: '✅ Video descargado de Facebook.'
      }, { quoted: m?.message ? m : undefined });
      return;
    }
  } catch (e) {
    console.error('Error al obtener video de fbdl:', e);
  }

  // Si no se pudo obtener el video
  await susune.sendMessage(from, {
    text: 'No se pudo obtener el video. Intenta con otro enlace.'
  }, { quoted: m?.message ? m : undefined });

  break;
}

case 'tw':
case 'twitter': {
  if (!args[0]) {
    return susune.sendMessage(from, {
      text: `*Ejemplo:* ${prefixo}tw https://twitter.com/usuario/status/1234567890`
    }, { quoted: m?.message ? m : undefined });
  }

  if (!args[0].match(/(twitter\.com|x\.com)\/[^\/]+\/status\/\d+/gi)) {
    return susune.sendMessage(from, {
      text: 'Por favor, proporciona un enlace válido de Twitter o X.'
    }, { quoted: m?.message ? m : undefined });
  }

  await susune.sendMessage(from, {
    text: '⏳ Descargando video de Twitter, espera un momento...'
  }, { quoted: m?.message ? m : undefined });

  const tweetUrl = args[0];
  const tweetId = tweetUrl.match(/\/status\/(\d+)/)?.[1];
  console.log('ID del tweet:', tweetId);

  if (!tweetId) {
    return susune.sendMessage(from, {
      text: 'No se pudo extraer el ID del tweet. Asegúrate de que el enlace es correcto.'
    }, { quoted: m?.message ? m : undefined });
  }

  try {
    // Obtener token desde Pastebin
    const authRes = await axios.get('https://pastebin.com/raw/SnCfd4ru');
    const authorization = authRes.data;
    console.log('Token obtenido:', authorization);

    // Solicitud a API de Tweeload
    const twitterApiUrl = `https://info.tweeload.site/status/${tweetId}.json`;
    const response = await axios.get(twitterApiUrl, {
      headers: {
        Authorization: authorization,
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
      }
    });

    const tweet = response.data?.tweet;
    console.log('Respuesta de API:', tweet);

    if (!tweet?.media) throw 'No hay medios en este tweet.';

    const caption = tweet.text || '';
    let enviado = false;

    // Si tiene video
    if (tweet.media.videos) {
      for (let v of tweet.media.videos) {
        const sorted = v.video_urls.sort((a, b) => b.bitrate - a.bitrate);
        for (let vid of sorted) {
          console.log('Intentando enviar video:', vid.url);
          try {
            await susune.sendMessage(from, {
              video: { url: vid.url },
              caption: `✅ Video descargado de Twitter.\n\n${caption}`
            }, { quoted: m?.message ? m : undefined });
            enviado = true;
            break;
          } catch (err) {
            console.error('Error al enviar video:', err);
          }
        }
        if (enviado) break;
      }
    }

    // Si solo tiene fotos
    if (!enviado && tweet.media.photos) {
      for (let img of tweet.media.photos) {
        console.log('Enviando imagen:', img.url);
        await susune.sendMessage(from, {
          image: { url: img.url },
          caption: `🖼 Imagen del tweet.\n\n${caption}`
        }, { quoted: m?.message ? m : undefined });
        enviado = true;
      }
    }

    if (!enviado) {
      throw 'No se pudo enviar ningún medio.';
    }

  } catch (e) {
    console.error('Error general:', e);
    await susune.sendMessage(from, {
      text: '❌ No se pudo descargar el video. Intenta con otro enlace o más tarde.'
    }, { quoted: m?.message ? m : undefined });
  }

  break;
}

case 'instagram':
case 'ig':
case 'igdl': {
  if (!args[0]) {
    return susune.sendMessage(from, {
      text: `*Ejemplo:* ${prefixo}instagram https://www.instagram.com/p/CCoI4DQBGVQ/?igshid=YmMyMTA2M2Y=*`
    }, { quoted: m?.message ? m : undefined });
  }

  if (!args[0].match(/instagram\.com/gi)) {
    return susune.sendMessage(from, {
      text: 'Por favor, proporciona un enlace válido de Instagram.'
    }, { quoted: m?.message ? m : undefined });
  }

  await susune.sendMessage(from, {
    text: '⏳ Descargando contenido de Instagram, espera un momento...'
  }, { quoted: m?.message ? m : undefined });

  try {
    // Primer intento con la API Siputzx
    const apiUrl1 = `https://api.siputzx.my.id/api/d/igdl?url=${args[0]}`;
    const response1 = await fetch(apiUrl1);
    const data1 = await response1.json();
    const fileType = data1.data[0].url.includes('.webp') ? 'image' : 'video'; 
    const downloadUrl = data1.data[0].url;

    if (fileType === 'image') {
      await susune.sendMessage(from, {
        image: { url: downloadUrl },
        caption: '✅ Imagen descargada de Instagram.'
      }, { quoted: m?.message ? m : undefined });
    } else if (fileType === 'video') {
      await susune.sendMessage(from, {
        video: { url: downloadUrl },
        caption: '✅ Video descargado de Instagram.'
      }, { quoted: m?.message ? m : undefined });
    }
    return;
  } catch (e) {
    console.error('Error al obtener contenido de Siputzx:', e);
  }

  try {
    // Segundo intento con una API personalizada
    const apiUrl2 = `${apis}/download/instagram?url=${encodeURIComponent(args[0])}`;
    const apiResponse = await fetch(apiUrl2);
    const delius = await apiResponse.json();

    if (!delius || !delius.data || delius.data.length === 0) {
      return susune.sendMessage(from, {
        text: 'No se pudo obtener el contenido. Intenta con otro enlace.'
      }, { quoted: m?.message ? m : undefined });
    }

    const downloadUrl = delius.data[0].url;
    const fileType = delius.data[0].type;

    if (fileType === 'image') {
      await susune.sendMessage(from, {
        image: { url: downloadUrl },
        caption: '✅ Imagen descargada de Instagram.'
      }, { quoted: m?.message ? m : undefined });
    } else if (fileType === 'video') {
      await susune.sendMessage(from, {
        video: { url: downloadUrl },
        caption: '✅ Video descargado de Instagram.'
      }, { quoted: m?.message ? m : undefined });
    }
    return;
  } catch (e) {
    console.error('Error al obtener contenido de la segunda API:', e);
  }

  try {
    // Intentamos con la API de Betabotz
    const apiUrll = `https://api.betabotz.org/api/download/igdowloader?url=${encodeURIComponent(args[0])}&apikey=bot-secx3`;
    const responsel = await axios.get(apiUrll);
    const resultl = responsel.data;

    for (const item of resultl.message) {
      const shortUrRRl = await (await fetch(`https://tinyurl.com/api-create.php?url=${item.thumbnail}`)).text();
      let tXXxt = `✨ *ENLACE | URL:* ${shortUrRRl}\n\n${wm}`.trim();
      susune.sendMessage(from, {
        video: { url: item._url },
        caption: tXXxt
      }, { quoted: m?.message ? m : undefined });
      await susune.sendMessage(from, {
        text: '✅ Video descargado de Instagram.'
      }, { quoted: m?.message ? m : undefined });
    }
    return;
  } catch (e) {
    console.error('Error al obtener contenido de Betabotz:', e);
  }

  try {
    // Último intento con la API Lolhuman
    const human = await fetch(`https://api.lolhuman.xyz/api/instagram?apikey=${lolkeysapi}&url=${args[0]}`);
    const json = await human.json();
    const videoig = json.result;

    const shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
    const txt1 = `✨ *ENLACE | URL:* ${shortUrl1}\n\n${wm}`.trim();

    await susune.sendMessage(from, {
      video: { url: videoig },
      caption: txt1
    }, { quoted: m?.message ? m : undefined });

  } catch (e) {
    console.error('Error al obtener contenido de Lolhuman:', e);
    await susune.sendMessage(from, {
      text: 'No se pudo obtener el video. Intenta con otro enlace.'
    }, { quoted: m?.message ? m : undefined });
  }

  break;
}

case 'ahorcado': {
    if (!isReg) return enviar(`❌ *Debes estar registrado para jugar.*`);
    if (!isGroup) return 
    if (ahorcadoActivo[from]) return enviar(`🎈 𝒀𝒂 𝒉𝒂𝒚 𝒖𝒏𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂 𝒂𝒄𝒕𝒊𝒗𝒂.`);

    const palabras = [
        "manzana", "computadora", "ahorcado", "programador", "murcielago", "pantalla",
        "raton", "teclado", "javascript", "botella", "telefono", "zapato", "libreria", "perro", "gato"
    ];

    const seleccionada = palabras[Math.floor(Math.random() * palabras.length)].toUpperCase();
    const oculta = seleccionada.replace(/./g, "_");
    const intentosMaximos = 6;

    ahorcadoActivo[from] = {
        palabra: seleccionada,
        progreso: oculta.split(""),
        intentos: intentosMaximos,
        jugador: sender,
        timeout: setTimeout(() => {
            if (ahorcadoActivo[from]) {
enviar(`⏰ 𝐒𝐞 𝐀𝐜𝐚𝐛𝐨 𝐄𝐥 𝐓𝐢𝐞𝐦𝐩𝐨 ⏰\n\n💣 𝑹𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂: *${seleccionada}*`);
                delete ahorcadoActivo[from];
            }
        }, 60000)
    };

    enviar(`🎮 𝐉𝐮𝐞𝐠𝐨 𝐃𝐞 𝐀𝐡𝐨𝐫𝐜𝐚𝐝𝐨𝐬 🎮\n\n⏳ 𝑷𝒓𝒆𝒑𝒂𝒓𝒂𝒏𝒅𝒐 𝒑𝒍𝒂𝒏𝒕𝒊𝒍𝒍𝒂 𝒅𝒆 𝒋𝒖𝒆𝒈𝒐. ⏳`);
    await sleep(5000);
    enviar(`🎮 𝐂𝐨𝐦𝐞𝐧𝐳𝐨 𝐄𝐥 𝐉𝐮𝐞𝐠𝐨 🎮\n\n🎲 𝑨𝒅𝒊𝒗𝒊𝒏𝒂 𝒍𝒂 𝒑𝒂𝒍𝒂𝒃𝒓𝒂 𝒐𝒄𝒖𝒍𝒕𝒂...\n\n${ahorcadoActivo[from].progreso.join(" ")}\n\n❤️ 𝑻𝒊𝒆𝒏𝒆𝒏: *${intentosMaximos}* 𝑰𝒏𝒕𝒆𝒏𝒕𝒐𝒔\n⏳𝑻𝒊𝒆𝒎𝒑𝒐: *60 Segundos.*`);
}
break;




case 'adivinapelicula': {
    if (!isReg) return enviar(`❌ *Debes estar registrado para jugar.*`);
    if (!isGroup) return enviar(`❌ *Este comando solo funciona en grupos.*`);
    if (adivinaPeliculaActiva[from]) return enviar(`❌ *Ya hay una partida activa en este grupo.*`);

    const peliculas = [
        { nombre: "SPIDERMAN", emojis: "🕸️🕷️🙎‍♂️🤟" },
        { nombre: "TITANIC", emojis: "🚢💑❄️" },
        { nombre: "BATMAN", emojis: "🦇🕶️🏙️" },
        { nombre: "AVATAR", emojis: "🧝‍♂️🌌🌿" },
        { nombre: "COCO", emojis: "💀🎸🎶" }
        // puedes agregar más aquí
    ];

    const seleccion = peliculas[Math.floor(Math.random() * peliculas.length)];
    const oculta = seleccion.nombre.replace(/./g, "_");
    const intentosMaximos = 10;

    adivinaPeliculaActiva[from] = {
        palabra: seleccion.nombre,
        progreso: oculta.split(""),
        intentos: intentosMaximos,
        jugador: sender,
        emojis: seleccion.emojis,
        timeout: setTimeout(() => {
            if (adivinaPeliculaActiva[from]) {
                enviar(`⏰ *Se acabó el tiempo!*\nLa película era: *${seleccion.nombre}*`);
                delete adivinaPeliculaActiva[from];
            }
        }, 60000)
    };

await enviar3(`🎬 *Hola @${sender.split("@")[0]}*, adivina la película\n\n${seleccion.emojis}\n\nIntentos: ${intentosMaximos}\nTiempo: 60 segundos\n\n${adivinaPeliculaActiva[from].progreso.join("")}`, from, sender);
    
}
break;





case 'adivinamusica': {
    if (!isReg) return enviar(`❌ *Debes estar registrado para jugar.*`);
    if (!isGroup) return enviar(`❌ *Este comando solo funciona en grupos.*`);
    if (adivinaMusicaActiva[from]) return enviar(`❌ *Ya hay una partida activa en este grupo.*`);

    const canciones = [
        { nombre: "SURRENDER", audio: "./archivos/audios/surrender.mp3", pista: "Canción de pop electrónico conocida por su estribillo poderoso." },
        { nombre: "ZOMBIE", audio: "./archivos/audios/zombie.mp3", pista: "Una canción protesta de los 90, interpretada por una banda irlandesa." },
        { nombre: "POR QUE TE VAS", audio: "./archivos/audios/porquetevas.mp3", pista: "Canción popular en español que habla sobre una despedida triste." },
        { nombre: "FUNK DO BOUNCE", audio: "./archivos/audios/funkdobounce.mp3", pista: "Ritmo brasileño mezclado con beats modernos." },
        { nombre: "NUMB", audio: "./archivos/audios/numb.mp3", pista: "Éxito de una banda de rock alternativo muy conocida a principios de los 2000." }
    ];

    const seleccion = canciones[Math.floor(Math.random() * canciones.length)];
    const palabra = seleccion.nombre.toUpperCase();
    const progreso = [...palabra].map(c => c === " " ? " " : "_");

    adivinaMusicaActiva[from] = {
        palabra,
        progreso,
        intentos: 10,
        jugador: sender,
        pista: seleccion.pista,
        timeout: setTimeout(() => {
            if (adivinaMusicaActiva[from]) {
                enviar(`⏰ *Se acabó el tiempo @${sender.split("@")[0]}*\nLa respuesta era: *${palabra}*`, { mentions: [sender] });
                delete adivinaMusicaActiva[from];
            }
        }, 60000)
    };

    susune.sendMessage(from, {
        text: `🎵 *Hola @${sender.split("@")[0]}*, adivina la música con este audio\n\n⏱️ Tiempo: 60 segundos\n💰 Monedas: 60`,
        mentions: [sender]
    });

    await susune.sendMessage(from, {
        audio: { url: seleccion.audio },
        mimetype: 'audio/mp4',
        ptt: true
    });

    susune.sendMessage(from, {
        text: `🎧 ${progreso.join("")}`,
        mentions: [sender]
    });
}
break;

case 'pista': {
    if (!isGroup) return enviar(`❌ *Este comando solo funciona en grupos.*`);
    const partida = adivinaMusicaActiva[from];
    if (!partida) return enviar(`❌ *No hay una partida activa en este grupo.*`);
    enviar(`💡 *Pista:* ${partida.pista}`);
    break;
}


case 'hd': {
    if ((isMedia && !info.message.videoMessage) || isQuotedImage) {
        const media = isQuotedImage
            ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage
            : info.message.imageMessage;

        const ext = await mimetype.extension(media.mimetype);
        const filename = getRandom('.' + ext);

        const imgBuffer = await getFileBuffer(media, 'image');
        fs.writeFileSync(filename, imgBuffer);

        // reenviar la imagen en su forma nativa y original
        await susune.sendMessage(from, {
            image: fs.readFileSync(filename),
            mimetype: media.mimetype,
            caption: "*✅ Imagen mejorada a HD*"
        }, { quoted: info });

        fs.unlinkSync(filename);
    } else {
        enviar("❌ *Debes enviar o citar una imagen para mejorarla a HD.*");
    }
    break;
}

case 'spotify': {
  if (!q) {
    console.log('[ytmusica] No se proporcionó término de búsqueda ni enlace de Spotify');
    return reply('Escribe un nombre para buscar música o un enlace de Spotify. Ej: .spotify Ozuna o .spotify https://open.spotify.com/track/12345');
  }

  // Verificar si el mensaje es un enlace de Spotify
  const spotifyLinkRegex = /https:\/\/open\.spotify\.com\/track\/([a-zA-Z0-9]+)/;
  const match = q.match(spotifyLinkRegex);

  if (match) {
    // Si es un enlace de Spotify
    const trackId = match[1];
    console.log(`[ytmusica] Enlace de Spotify detectado: ${q}`);
    
    try {
      // 1. Obtener la información de la canción desde la API de Spotify
      const spotifyUrl = `https://apis-starlights-team.koyeb.app/starlight/spotifydl?url=https://open.spotify.com/track/${trackId}`;
      console.log(`[ytmusica] Buscando información de Spotify: ${spotifyUrl}`);
      
      const spotifyData = await axios.get(spotifyUrl);
      const spotifyTitle = spotifyData?.data?.title || 'Desconocido';
      const artist = spotifyData?.data?.artist || 'Desconocido';
      const thumb = spotifyData?.data?.thumbnail || null;

      console.log(`🎶 Título de Spotify: ${spotifyTitle}, Artista: ${artist}`);

      // 2. Generar un enlace para descargar la canción desde YouTube (simulando que se encontró en YouTube)
      const youtubeUrl = `http://luxhostt.com.br/api/youtube?nome=${encodeURIComponent(spotifyTitle)}`;
      console.log(`[ytmusica] Enviando solicitud a YouTube: ${youtubeUrl}`);

      const { data } = await axios.get(youtubeUrl);

      if (!Array.isArray(data) || data.length === 0) {
        console.log('[ytmusica] No se encontraron resultados en YouTube');
        return reply('No se encontró música con ese nombre.');
      }

      // 3. Elegir una canción aleatoria de los resultados de YouTube
      const randomSong = data[Math.floor(Math.random() * data.length)];
      console.log('[ytmusica] Canción elegida:', randomSong);

      const audioUrl = randomSong.audio;

      // 4. Descargar el audio desde YouTube
      const audioBuffer = await axios.get(audioUrl, { responseType: 'arraybuffer' });
      console.log(`[ytmusica] Audio descargado: ${audioBuffer.data.length} bytes`);

      // 5. Enviar la imagen y el título de la canción
      if (thumb) {
        const imgBuffer = await axios.get(thumb, { responseType: 'arraybuffer' }).then(res => res.data);
        // Enviar la imagen con el título
        await susune.sendMessage(from, {
          image: imgBuffer,
          caption: `🎶 *${spotifyTitle}* - ${artist}`
        }, { quoted: info });
        console.log('[ytmusica] Imagen + título enviados');
      } else {
        // Si no hay imagen, solo enviar el texto con título
        await susune.sendMessage(from, {
          text: `🎶 *${spotifyTitle}* - ${artist}`
        }, { quoted: info });
        console.log('[ytmusica] Texto con título enviado');
      }

      // 6. Enviar el audio al chat
      await susune.sendMessage(from, {
        audio: audioBuffer.data,
        mimetype: 'audio/mpeg',
        fileName: `${spotifyTitle}.mp3`,
        ptt: false
      }, { quoted: info });

      console.log('[ytmusica] Audio enviado con éxito');
    } catch (e) {
      console.error('[ytmusica error]', e);
      reply('Ocurrió un error al intentar obtener la canción desde Spotify o YouTube.');
    }
  } else {
    // Si no es un enlace de Spotify, proceder con la búsqueda normal en YouTube
    console.log(`[ytmusica] Buscando música con nombre: ${q}`);
    
    try {
      // 1. Buscar música en YouTube usando la API
      const youtubeUrl = `http://luxhostt.com.br/api/youtube?nome=${encodeURIComponent(q)}`;
      console.log(`[ytmusica] Enviando solicitud a: ${youtubeUrl}`);

      const { data } = await axios.get(youtubeUrl);

      if (!Array.isArray(data) || data.length === 0) {
        console.log('[ytmusica] No se encontraron resultados');
        return reply('No se encontró música con ese nombre.');
      }

      // 2. Elegir una canción aleatoria de los resultados
      const randomSong = data[Math.floor(Math.random() * data.length)];
      console.log('[ytmusica] Canción elegida:', randomSong);

      const audioUrl = randomSong.audio;
      const title = randomSong.title;

      // 3. Descargar el audio desde YouTube
      const audioBuffer = await axios.get(audioUrl, { responseType: 'arraybuffer' });
      console.log(`[ytmusica] Audio descargado: ${audioBuffer.data.length} bytes`);

      // 4. Enviar la información con imagen y título
      if (randomSong.thumbnail) {
        const imgBuffer = await axios.get(randomSong.thumbnail, { responseType: 'arraybuffer' }).then(res => res.data);
        // Enviar la imagen con el título
        await susune.sendMessage(from, {
          image: imgBuffer,
          caption: `🎶 *${title}*`
        }, { quoted: info });
        console.log('[ytmusica] Imagen + título enviados');
      } else {
        // Si no hay imagen, solo enviar el texto con título
        await susune.sendMessage(from, {
          text: `🎶 *${title}*`
        }, { quoted: info });
        console.log('[ytmusica] Texto con título enviado');
      }

      // 5. Enviar el audio al chat
      await susune.sendMessage(from, {
        audio: audioBuffer.data,
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: false
      }, { quoted: info });

      console.log('[ytmusica] Audio enviado con éxito');
    } catch (e) {
      console.error('[ytmusica error]', e);
      reply('Ocurrió un error al intentar enviar el audio.');
    }
  }
  break;
}

case 'peliculas':
case 'anime':
case 'veranime':
case 'verpelicula': {
  if (!args.length) return reply(`*Qué quieres buscar?*\n\nEjemplo: ${prefix + command} Naruto`);
  const texto = args.join(' ');
  const cheerio = require('cheerio');
  const axios = require('axios');
  const sites = [
    'https://pelisplushd.lat',
    'https://cuevana3.eu',
    'https://www.cuevana.pro',
    'https://www.cuevana3.vip',
    'https://animeflv.net',
    'https://www3.animeflv.net',
    'https://jkanime.net',
    'https://www.animeid.tv',
    'https://animeyt.tv',
    'https://www.animeyt.pro',
    'https://animeonline.ninja',
    'https://www.animeonegai.com',
    'https://www.tioanime.com',
    'https://animekaizoku.com',
    'https://www.animemovil2.com',
    'https://www.animeyt.to',
    'https://www.animezone.com.br'
  ];

  reply(`Buscando *${texto}* en sitios disponibles...`);
  let encontrado = false;

  for (let url of sites) {
    try {
      console.log(`Buscando en sitio: ${url}`);
      const res = await axios.get(url);
      const $ = cheerio.load(res.data);
      const links = $('a[href*="' + texto.toLowerCase().replace(/\s/g, '-') + '"]');

      if (links.length > 0) {
        let resultado = links.first();
        let href = resultado.attr('href');
        if (!href.startsWith('http')) href = url + href;

        let nombre = resultado.text().trim() || texto;
        let img = resultado.find('img').attr('src') || null;

        let mensaje = `*Nombre:* ${nombre}\n*Sitio:* ${url}\n*Enlace:* ${href}`;
        console.log('> Resultado encontrado:', href);

        if (img) {
          await susune.sendMessage(m.chat, {
            image: { url: img },
            caption: mensaje
          }, { quoted: m });
        } else {
          await enviar(mensaje);
        }

        encontrado = true;
        break;
      } else {
        console.log(`No se encontraron resultados en ${url}`);
      }
    } catch (err) {
      console.log(`Error en sitio ${url}:`, err.message);
    }
  }

  if (!encontrado) {
    reply(`No se encontró ningún resultado para *${texto}* en los sitios disponibles.`);
  }
}
break;




case 'mediafire': {
  if (!args[0]) return reply('Envía el enlace de MediaFire');

  const url = args[0];
  console.log('[MEDIAFIRE] Link recibido:', url);

  const apis = [
    `https://api.agatz.xyz/api/mediafire?url=${encodeURIComponent(url)}`,
    `https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(url)}`
  ];

  let success = false;
  let datau = null;

  for (const api of apis) {
    console.log('[MEDIAFIRE] Probando API:', api);
    try {
      const res = await fetch(api);
      const json = await res.json();
      console.log('[MEDIAFIRE] Respuesta:', json);

      if ((json.status === 200 || json.status === true) && (json.data || json.result)) {
        datau = json.data?.[0] || json.data || json.result;
        success = true;
        break;
      }
    } catch (e) {
      console.log('[MEDIAFIRE] Error en API:', e);
    }
  }

  if (!success || !datau) return reply('[MEDIAFIRE] No se pudo obtener la descarga del archivo.');

  const fileName = decodeURIComponent(datau.nama || datau.fileName || 'archivo');
  const fileSize = datau.size || datau.fileSize || 'desconocido';
  const dlLink = datau.link || datau.downloadLink;

  console.log('[MEDIAFIRE] Archivo:', fileName);
  console.log('[MEDIAFIRE] Tamaño:', fileSize);
  console.log('[MEDIAFIRE] Enlace directo:', dlLink);

  await enviar(`*[MEDIAFIRE]*\n\nNombre: ${fileName}\nTamaño: ${fileSize}\n\nDescargando archivo, espera un momento...`);

  try {
    const response = await axios.get(dlLink, { responseType: 'arraybuffer' });
    const buffer = Buffer.from(response.data);

    const mime = mimetype.lookup(fileName) || 'application/octet-stream';

    await susune.sendMessage(from, {
  document: buffer,
  mimetype: mime,
  fileName
}, { quoted: m?.message ? m : undefined });

  } catch (e) {
    console.log('[MEDIAFIRE] Error al enviar el archivo:', e);
    reply('[MEDIAFIRE] Ocurrió un error al descargar o enviar el archivo.');
  }
  break;
}




case 'mega': {
  if (!args[0]) return reply('Envía el enlace de Mega');

  const url = args[0];
  console.log('[MEGA] Link recibido:', url);

  try {
    // Extraer el ID y el hash de la URL
    const megaMatch = url.match(/mega\.nz\/file\/([a-zA-Z0-9_-]+)#([a-zA-Z0-9_-]+)/);
    if (!megaMatch) return reply('[MEGA] URL no válida.');

    const fileId = megaMatch[1];
    const fileHash = megaMatch[2];

    console.log('[MEGA] ID del archivo:', fileId);
    console.log('[MEGA] Hash del archivo:', fileHash);

    // Construir el enlace de descarga directo
    const downloadUrl = `https://mega.nz/file/${fileId}#${fileHash}`;
    console.log('[MEGA] Enlace de descarga construido:', downloadUrl);

    // Intentar descargar el archivo
    const response = await axios.get(downloadUrl, { responseType: 'arraybuffer' });

    console.log('[MEGA] Archivo descargado correctamente, tamaño:', response.data.length, 'bytes.');

    const buffer = response.data;
    const mime = 'application/zip'; // Ajusta esto según el tipo de archivo (audio, video, etc.)
    const fileName = `${fileId}.zip`; // El nombre del archivo descargado

    // Enviar el archivo
    await susune.sendMessage(from, {
      document: buffer,
      mimetype: mime,
      fileName: fileName,
    }, { quoted: m?.message ? m : undefined });

    console.log('[MEGA] Archivo enviado con éxito.');
  } catch (e) {
    console.log('[MEGA] Error:', e);
    reply('[MEGA] Ocurrió un error al obtener el archivo.');
  }

  break;
}

case 'enviarimagen':
    if (args.length < 1) {
        return reply("Por favor, proporciona un enlace de la imagen.");
    }

    let imagenUrl = args[0];
    
    // Validar si la URL parece una imagen
    if (!imagenUrl.match(/\.(jpeg|jpg|gif|png)$/)) {
        return reply("El enlace proporcionado no parece ser una imagen válida.");
    }

    // Enviar la imagen al chat
    try {
        await susune.sendMessage(from, { image: { url: imagenUrl }, caption: "Aquí tienes la imagen solicitada." });
        console.log(`Imagen enviada: ${imagenUrl}`);
    } catch (error) {
        console.error("Error al enviar la imagen:", error);
        return reply("Hubo un error al intentar enviar la imagen. Intenta de nuevo.");
    }
    break;
    
    case 'enviarimagen3': {
    const files = ['menu.jpeg'];
    const path = './archivos/fotos/';
    const randomIndex = Math.floor(Math.random() * files.length);
    const randomImage = files[randomIndex];
    const sendMessage = {
        image: fs.readFileSync(`${path}${randomImage}`),
        };

    
    await susune.sendMessage(from, sendMessage);

    break;
}
    
    
case 'enviarimagen2': {
    const imagenDefault = 'https://qu.ax/nAEfd.jpg'; // Imagen predeterminada

    // Texto opcional para acompañar la imagen, si lo deseas
    const texto = 'Aquí tienes una imagen predeterminada.';

    // Enviar la imagen
    await susune.sendMessage(from, {
        image: { url: imagenDefault }, // Usando la URL de la imagen
        caption: texto.trim() // Texto opcional
    });

    break;
}



    
case 'ser':
if(!q) return enviar('Para ser un Shinobi escriba correctamente el comando,   .*ser ninja*')
if (args[0] !== 'ninja') break;

const ninjaPath = './archivos/json/ninjas.json';
const cambiosPath = './archivos/json/cambiosNinja.json';
if (!fs.existsSync(cambiosPath)) fs.writeFileSync(cambiosPath, '{}');

let ninjassq = JSON.parse(fs.readFileSync(ninjaPath));
let libreszz = ninjassq.filter(n => n.ocupado === false);

// Verificar si el usuario ya tiene un ninja asignado
const yaTienee = ninjassq.find(n => n.duenio === sender);
if (yaTienee) {
    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} ya tienes un ninja asignado (*${yaTienee.nombre}*). Si deseas cambiarlo, usa el comando *.delninja*.`,
        mentions: [sender]
    });
    break;
}

const tempNinjaPath = `./archivos/json/tempninja_${sender}.json`;

// Revisar si ya tiene ninja asignado o en espera
if (fs.existsSync(tempNinjaPath)) {
    return await susune.sendMessage(from, {
        text: `🌸 @${sender.split('@')[0]}, ya tienes un ninja en espera, usa *.aceptarninja* o *.delninja* para continuar.`,
        mentions: [sender]
    });
}

let ninjas = JSON.parse(fs.readFileSync(ninjaPath));
let libresz = ninjas.filter(n => n.ocupado === false);

if (libresz.length === 0) {
    return await susune.sendMessage(from, {
        text: `⚠️ No hay ninjas disponibles en este momento, vuelve más tarde.`,
        mentions: [sender]
    });
}

// Elegir ninja aleatorio
const elegidoz = libresz[Math.floor(Math.random() * libresz.length)];
const edadInicial = "5";
const etapa = elegidoz.edades[edadInicial];

if (!etapa) {
    return await susune.sendMessage(from, {
        text: `⚠️ Error: el ninja ${elegidoz.nombre} no tiene configurada la edad 5.`,
        mentions: [sender]
    });
}

// Guardar ninja temporal
const ninjaTemp = {
    ...elegidoz,
    edad: parseInt(edadInicial),
    vida: etapa.vida,
    chakra: etapa.chakra,
    estado: etapa.estado,
    tipo: etapa.tipo,
    rango: etapa.rango,
    jutsus: etapa.jutsus,
    imagen: etapa.imagen,
    nivel: 1,
    exp: 0,
    dinero: elegidoz.dinero || 0,
    misiones: 0,
    librobingo: false
};

fs.writeFileSync(tempNinjaPath, JSON.stringify(ninjaTemp, null, 2));

// Resetear contador de cambios
let cambiosData = JSON.parse(fs.readFileSync(cambiosPath));
cambiosData[sender] = 0;
fs.writeFileSync(cambiosPath, JSON.stringify(cambiosData, null, 2));

const mensajez = `🌸 ¡𝐇𝐨𝐥𝐚!, @${sender.split("@")[0]}\n\n𝑭𝒆𝒍𝒊𝒄𝒊𝒅𝒂𝒅𝒆𝒔 𝒂𝒉𝒐𝒓𝒂 𝒆𝒓𝒆𝒔 𝒖𝒏 𝑺𝒉𝒊𝒏𝒐𝒃𝒊.\n𝐀𝐥𝐝𝐞𝐚: *${elegidoz.aldea}*\n𝐍𝐢𝐧𝐣𝐚: *${elegidoz.nombre}*\n\n` +
    `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${elegidoz.nombre}*\n💗⃟✿ 𝑬𝒅𝒂𝒅: *${edadInicial}*\n💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${elegidoz.genero}*\n💗⃟✿ 𝑽𝒊𝒅𝒂: *${etapa.vida}*\n💗⃟✿ 𝑪𝒉𝒂𝒌𝒓𝒂: *${etapa.chakra}*\n` +
    `💗⃟✿ 𝑬𝒔𝒕𝒂𝒅𝒐: *${etapa.estado}*\n💗⃟✿ 𝑻𝒊𝒑𝒐: *${etapa.tipo}*\n💗⃟✿ 𝑹𝒂𝒏𝒈𝒐: *${etapa.rango}*\n💗⃟✿ 𝑱𝒖𝒕𝒔𝒖𝒔: *${etapa.jutsus.join(', ')}*\n` +
    `💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *1/100*\n💗⃟✿ 𝑬𝒙𝒑: *0/1000*\n💗⃟✿ 𝑫𝒊𝒏𝒆𝒓𝒐: *${elegidoz.dinero}*\n💗⃟✿ 𝑨𝒍𝒅𝒆𝒂: *${elegidoz.aldea}*\n💗⃟✿ 𝑴𝒊𝒔𝒊𝒐𝒏𝒆𝒔: *0/2000*\n💗⃟✿ 𝑳𝒊𝒃𝒓𝒐 𝑩𝒊𝒏𝒈𝒐: *No*\n\n` +
    `𝐄𝐬𝐭𝐞 𝐞𝐬 𝐞𝐥 𝐧𝐢𝐧𝐣𝐚 𝐪𝐮𝐞 𝐬𝐞 𝐡𝐚 𝐚𝐬𝐢𝐠𝐧𝐚𝐝𝐨, 𝐩𝐚𝐫𝐚 𝐫𝐞𝐜𝐢𝐛𝐢𝐫 𝐞𝐬𝐭𝐞 𝐧𝐢𝐧𝐣𝐚 𝐝𝐞 𝐟𝐨𝐫𝐦𝐚 𝐨𝐟𝐢𝐜𝐢𝐚𝐥 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *.ᴀᴄᴇᴘᴛᴀʀɴɪɴᴊᴀ*\n\n𝐏𝐚𝐫𝐚 𝐫𝐞𝐜𝐢𝐛𝐢𝐫 𝐨𝐭𝐫𝐨 𝐧𝐢𝐧𝐣𝐚 𝐞𝐬𝐜𝐫𝐢𝐛𝐞 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 *.ᴏᴛʀᴏɴɪɴᴊᴀ*`;

await susune.sendMessage(from, {
    image: { url: etapa.imagen },
    caption: mensajez,
    mentions: [sender]
});

// Cancelar automáticamente si no se acepta en 60 segundos
setTimeout(async () => {
    if (fs.existsSync(tempNinjaPath)) {
        fs.unlinkSync(tempNinjaPath);
        await susune.sendMessage(from, {
            text: `⏱ 𝑺𝒆 𝒕𝒆 𝒂𝒄𝒂𝒃𝒐 𝒆𝒍 𝒕𝒊𝒆𝒎𝒑𝒐 𝒖𝒔𝒖𝒂𝒓𝒊𝒐: @${sender.split('@')[0]} 𝒔𝒊 𝒆𝒔𝒕𝒂𝒔 𝒅𝒖𝒅𝒂𝒏𝒅𝒐 𝒆𝒏 𝒔𝒆𝒓 𝒖𝒏 𝒏𝒊𝒏𝒋𝒂 𝒎𝒆𝒋𝒐𝒓 𝒓𝒆𝒏𝒖𝒏𝒄𝒊𝒂 𝒆𝒔𝒕𝒐 𝒏𝒐 𝒆𝒔 𝒑𝒂𝒓𝒂 𝒄𝒐𝒃𝒂𝒓𝒅𝒆𝒔, 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒔𝒆𝒓 𝒖𝒏 𝒏𝒊𝒏𝒋𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *.sᴇʀ ɴɪɴᴊᴀ*`,
            mentions: [sender]
        });
    }
}, 60000);

break;

case 'otroninja':
const cambiosData2 = JSON.parse(fs.readFileSync('./archivos/json/cambiosNinja.json'));
const cambiosUsuario = cambiosData2[sender] || 0;

if (cambiosUsuario >= 2) {
    return await susune.sendMessage(from, {
        text: `⚠️ @${sender.split('@')[0]}, ya has usado tus 2 cambios de ninja.`,
        mentions: [sender]
    });
}

const tempFilee = `./archivos/json/tempninja_${sender}.json`;
if (!fs.existsSync(tempFilee)) {
    return await susune.sendMessage(from, {
        text: `⚠️ No tienes un ninja en espera. Usa *.ser ninja* primero.`,
        mentions: [sender]
    });
}

const tempActual = JSON.parse(fs.readFileSync(tempFilee));
let ninjasLibres = JSON.parse(fs.readFileSync('./archivos/json/ninjas.json')).filter(n => n.ocupado === false && n.nombre !== tempActual.nombre);

if (ninjasLibres.length === 0) {
    return await susune.sendMessage(from, {
        text: `⚠️ No hay más ninjas disponibles para cambiar.`,
        mentions: [sender]
    });
}

const nuevo = ninjasLibres[Math.floor(Math.random() * ninjasLibres.length)];
const nuevaEtapa = nuevo.edades["5"];

const nuevoTemp = {
    ...nuevo,
    edad: 5,
    vida: nuevaEtapa.vida,
    chakra: nuevaEtapa.chakra,
    estado: nuevaEtapa.estado,
    tipo: nuevaEtapa.tipo,
    rango: nuevaEtapa.rango,
    jutsus: nuevaEtapa.jutsus,
    imagen: nuevaEtapa.imagen,
    nivel: 1,
    exp: 0,
    dinero: nuevo.dinero || 0,
    misiones: 0,
    librobingo: false
};

fs.writeFileSync(tempFilee, JSON.stringify(nuevoTemp, null, 2));
cambiosData2[sender] = cambiosUsuario + 1;
fs.writeFileSync('./archivos/json/cambiosNinja.json', JSON.stringify(cambiosData2, null, 2));

await susune.sendMessage(from, {
    image: { url: nuevaEtapa.imagen },
    caption: `🔁 Cambio realizado @${sender.split('@')[0]}.\nTu nuevo ninja es *${nuevo.nombre}* de la *${nuevo.aldea}*.\n\nAcepta con *.aceptarninja*`,
    mentions: [sender]
});
break;

case 'aceptarninja':
    const ninjaBasePath = './archivos/json/ninjas.json';
    const tempFileq = `./archivos/json/tempninja_${sender}.json`;

    if (!fs.existsSync(tempFileq)) {
        return await susune.sendMessage(from, {
            text: `⚠️ @${sender.split("@")[0]}, no tienes un ninja en espera. Usa *.ser ninja* para comenzar.`,
            mentions: [sender]
        });
    }

    const tempData = JSON.parse(fs.readFileSync(tempFileq));
    let allNinjas = JSON.parse(fs.readFileSync(ninjaBasePath));

    const indexx = allNinjas.findIndex(n => n.nombre === tempData.nombre);

    if (indexx === -1) {
        fs.unlinkSync(tempFileq);
        return await susune.sendMessage(from, {
            text: `⚠️ Este ninja ya no está disponible.`,
            mentions: [sender]
        });
    }

    if (allNinjas[indexx].ocupado) {
        fs.unlinkSync(tempFileq);
        return await susune.sendMessage(from, {
            text: `⚠️ Lo siento @${sender.split("@")[0]}, este ninja ya fue asignado a otro usuario.`,
            mentions: [sender]
        });
    }

    // Guardar como ocupado
    allNinjas[indexx].ocupado = true;
    allNinjas[indexx].duenio = sender;
    allNinjas[indexx].edad = tempData.edad;
    allNinjas[indexx].nivel = tempData.nivel;
    allNinjas[indexx].vida = tempData.vida;
    allNinjas[indexx].chakra = tempData.chakra;
    allNinjas[indexx].estado = tempData.estado;
    allNinjas[indexx].tipo = tempData.tipo;
    allNinjas[indexx].rango = tempData.rango;
    allNinjas[indexx].jutsus = tempData.jutsus;
    allNinjas[indexx].dinero = tempData.dinero;
    allNinjas[indexx].exp = tempData.exp;
    allNinjas[indexx].misiones = 0;
    allNinjas[indexx].imagen = tempData.imagen;

    fs.writeFileSync(ninjaBasePath, JSON.stringify(allNinjas, null, 2));
    fs.unlinkSync(tempFileq);

    const etapaFinal = allNinjas[indexx].edades[String(allNinjas[indexx].edad)];

    await susune.sendMessage(from, {
        image: { url: etapaFinal.imagen },
        caption: `✅ Felicidades @${sender.split("@")[0]}, aceptaste ser *${allNinjas[indexx].nombre}* de la aldea de *${allNinjas[indexx].aldea}*. ¡Tu camino ninja comienza ahora!`,
        mentions: [sender]
    });

    break;
    
    case 'addlibrobingo':
    if (!args.length) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} debes escribir el nombre del ninja que deseas agregar al libro bingo.`,
            mentions: [sender]
        });
        break;
    }

    const nombreBingo = args.join(" ").toLowerCase();
    const pathAdd = './archivos/json/ninjas.json';
    let listaNinjas = JSON.parse(fs.readFileSync(pathAdd));

    const ninjaTarget = listaNinjas.find(n => n.nombre.toLowerCase() === nombreBingo);

    if (!ninjaTarget) {
        await susune.sendMessage(from, {
            text: `No se encontró un ninja con ese nombre.`,
            mentions: [sender]
        });
        break;
    }

    if (ninjaTarget.librobingo) {
        await susune.sendMessage(from, {
            text: `El ninja *${ninjaTarget.nombre}* ya está en el libro bingo.`,
            mentions: [sender]
        });
        break;
    }

    ninjaTarget.librobingo = true;
    fs.writeFileSync(pathAdd, JSON.stringify(listaNinjas, null, 2));

    await susune.sendMessage(from, {
        text: `El ninja *${ninjaTarget.nombre}* fue añadido al libro bingo.`,
        mentions: [sender]
    });
    break;
    
    case 'quitarlibrobingo':
    if (!args.length) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} debes escribir el nombre del ninja que deseas remover del libro bingo.`,
            mentions: [sender]
        });
        break;
    }

    const nombreQuitar = args.join(" ").toLowerCase();
    const pathBorrar = './archivos/json/ninjas.json';
    let listaBingo = JSON.parse(fs.readFileSync(pathBorrar));

    const ninjaBorrar = listaBingo.find(n => n.nombre.toLowerCase() === nombreQuitar);

    if (!ninjaBorrar) {
        await susune.sendMessage(from, {
            text: `No se encontró un ninja con ese nombre.`,
            mentions: [sender]
        });
        break;
    }

    if (!ninjaBorrar.librobingo) {
        await susune.sendMessage(from, {
            text: `El ninja *${ninjaBorrar.nombre}* no está en el libro bingo.`,
            mentions: [sender]
        });
        break;
    }

    ninjaBorrar.librobingo = false;
    fs.writeFileSync(pathBorrar, JSON.stringify(listaBingo, null, 2));

    await susune.sendMessage(from, {
        text: `El ninja *${ninjaBorrar.nombre}* fue removido del libro bingo.`,
        mentions: [sender]
    });
    break;
    
    case 'verninja':
    const ninjaDataPath = './archivos/json/ninjas.json';
    let ninjass = JSON.parse(fs.readFileSync(ninjaDataPath));
    let miNinja = ninjass.find(n => n.duenio === sender);

    if (!miNinja) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no tienes ningún ninja asignado. Usa *.ser ninja* para comenzar.`,
            mentions: [sender]
        });
        break;
    }

    // Usar datos actuales del ninja
    const infoiki = `🛡️ 𝗧𝗨𝗦 𝗘𝗦𝗧𝗔𝗗𝗜𝗦𝗧𝗜𝗖𝗔𝗦 🛡️\n\n` +
        `💗⃟✿ 𝑼𝒔𝒖𝒂𝒓𝒊𝒐: @${sender.split("@")[0]}\n` +
        `💗⃟✿ 𝑵𝒐𝒎𝒃𝒓𝒆: *${miNinja.nombre}*\n💗⃟✿ 𝑬𝒅𝒂𝒅: *${miNinja.edad}*\n💗⃟✿ 𝑮𝒆𝒏𝒆𝒓𝒐: *${miNinja.genero}*\n` +
        `💗⃟✿ 𝑽𝒊𝒅𝒂: *${miNinja.vida}*\n💗⃟✿ 𝑪𝒉𝒂𝒌𝒓𝒂: *${miNinja.chakra}*\n` +
        `💗⃟✿ 𝑬𝒔𝒕𝒂𝒅𝒐: *${miNinja.estado}*\n💗⃟✿ 𝑻𝒊𝒑𝒐: *${miNinja.tipo}*\n💗⃟✿ 𝑹𝒂𝒏𝒈𝒐: *${miNinja.rango}*\n` +
        `💗⃟✿ 𝑱𝒖𝒕𝒔𝒖𝒔: *${miNinja.jutsus.join(", ")}*\n💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${miNinja.nivel}/100*\n` +
        `💗⃟✿ 𝑬𝒙𝒑: *${miNinja.exp}/1000*\n💗⃟✿ 𝑫𝒊𝒏𝒆𝒓𝒐: *${miNinja.dinero}*\n💗⃟✿ 𝑨𝒍𝒅𝒆𝒂: *${miNinja.aldea}*\n` +
        `💗⃟✿ 𝑴𝒊𝒔𝒊𝒐𝒏𝒆𝒔: *${miNinja.misiones}/2000*\n💗⃟✿ 𝑳𝒊𝒃𝒓𝒐 𝑩𝒊𝒏𝒈𝒐: *${miNinja.librobingo ? "Sí" : "No"}*`;

    await susune.sendMessage(from, {
        image: { url: miNinja.imagen },
        caption: infoiki,
        mentions: [sender]
    });
    break;
    
    case 'delninja':
    const pathDel = './archivos/json/ninjas.json';
    let ninjasDel = JSON.parse(fs.readFileSync(pathDel));
    const indexDel = ninjasDel.findIndex(n => n.duenio === sender);

    if (indexDel === -1) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no tienes ningún ninja que borrar.`,
            mentions: [sender]
        });
        break;
    }

    // Marcar como libre
    ninjasDel[indexDel].ocupado = false;
    ninjasDel[indexDel].duenio = null;
    ninjasDel[indexDel].nivel = 1;
    ninjasDel[indexDel].exp = 0;
    ninjasDel[indexDel].dinero = 0;
    ninjasDel[indexDel].edad = 6;
    ninjasDel[indexDel].vida = ninjasDel[indexDel].edades["5"].vida;
    ninjasDel[indexDel].chakra = ninjasDel[indexDel].edades["5"].chakra;
    ninjasDel[indexDel].estado = ninjasDel[indexDel].edades["5"].estado;
    ninjasDel[indexDel].tipo = ninjasDel[indexDel].edades["5"].tipo;
    ninjasDel[indexDel].rango = ninjasDel[indexDel].edades["5"].rango;
    ninjasDel[indexDel].jutsus = ninjasDel[indexDel].edades["5"].jutsus;
    ninjasDel[indexDel].imagen = ninjasDel[indexDel].edades["5"].imagen;
    ninjasDel[indexDel].misiones = 0;
    ninjasDel[indexDel].librobingo = false;

    fs.writeFileSync(pathDel, JSON.stringify(ninjasDel, null, 2));

    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} ya no eres ninja, no eres apto para serlo. Regresa a la academia con *.ser ninja* si te sientes preparado.`,
        mentions: [sender]
    });
    break;
    
    case 'nivelup':
    const pathUp = './archivos/json/ninjas.json';
    let ninjasUp = JSON.parse(fs.readFileSync(pathUp));
    let userNinja = ninjasUp.find(n => n.duenio === sender);

    if (!userNinja) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no tienes un ninja asignado.`,
            mentions: [sender]
        });
        break;
    }

    if (userNinja.exp < 1000) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} necesitas 1000 de exp para subir de nivel.`,
            mentions: [sender]
        });
        break;
    }

    userNinja.exp -= 1000;
    userNinja.nivel++;
    userNinja.edad++;

    const etapaNueva = userNinja.edades[String(userNinja.edad)];
    if (etapaNueva) {
        userNinja.estado = etapaNueva.estado;
        userNinja.rango = etapaNueva.rango;
        userNinja.tipo = etapaNueva.tipo;
        userNinja.vida = etapaNueva.vida;
        userNinja.chakra = etapaNueva.chakra;
        userNinja.jutsus = etapaNueva.jutsus;
        userNinja.imagen = etapaNueva.imagen;

        if (["Jounin", "Ambu", "Anbu", "Sanin", "Hokage", "Feudal"].includes(etapaNueva.estado)) {
            userNinja.librobingo = true;
        }
    }

    fs.writeFileSync(pathUp, JSON.stringify(ninjasUp, null, 2));

    const mensajeUp = `✨ 𝗡𝗨𝗘𝗩𝗢 𝗡𝗜𝗩𝗘𝗟 ✨\n\n 𝑯𝒐𝒍𝒂 *${userNinja.nombre}* 𝒉𝒂𝒔 𝒔𝒖𝒃𝒊𝒅𝒐 𝒉𝒂 𝒖𝒏 𝒏𝒖𝒆𝒗𝒐 𝒏𝒊𝒗𝒆𝒍.\n\n💗⃟✿ 𝑵𝒊𝒗𝒆𝒍: *${userNinja.nivel}*\n\n𝑺𝒊𝒈𝒖𝒆 𝒆𝒏𝒕𝒓𝒆𝒏𝒂𝒏𝒅𝒐 𝒚 𝒂𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒂𝒏𝒅𝒐 𝒎𝒊𝒔𝒊𝒐𝒏𝒆𝒔 𝒑𝒂𝒓𝒂 𝒔𝒖𝒃𝒊𝒓 𝒉𝒂 𝒖𝒏 𝒎𝒂𝒔 𝒕𝒖 𝒏𝒊𝒗𝒆𝒍.`;

    await susune.sendMessage(from, {
        image: { url: userNinja.imagen },
        caption: mensajeUp,
        mentions: [sender]
    });
    break;
    
    case 'misiones':
    const pathM = './archivos/json/ninjas.json';
    let ninjasM = JSON.parse(fs.readFileSync(pathM));
    let ninjaM = ninjasM.find(n => n.duenio === sender);

    if (!ninjaM) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no tienes un ninja asignado.`,
            mentions: [sender]
        });
        break;
    }

    const randExp = Math.floor(Math.random() * 300) + 100;
    const randMoney = Math.floor(Math.random() * 400) + 200;

    ninjaM.exp += randExp;
    ninjaM.dinero += randMoney;
    ninjaM.misiones++;

    fs.writeFileSync(pathM, JSON.stringify(ninjasM, null, 2));

    const mensajeM = `🌀 *¡Misión completada!* 🌀\n\n` +
        `@${sender.split("@")[0]} tu ninja *${ninjaM.nombre}* completó una misión con éxito.\n\n` +
        `Ganaste:\n+ *${randExp}* de experiencia\n+ *${randMoney}* monedas\n\n` +
        `Misiones completadas: *${ninjaM.misiones}/2000*`;

    await susune.sendMessage(from, {
        image: { url: ninjaM.imagen },
        caption: mensajeM,
        mentions: [sender]
    });
    break;
    
    case 'sanar':
    if (!args[0]) break;

    const pathS = './archivos/json/ninjas.json';
    let ninjasS = JSON.parse(fs.readFileSync(pathS));
    const medico = ninjasS.find(n => n.duenio === sender);

    if (!medico || medico.tipo !== 'Medica') {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no puedes usar este comando, no eres ninja médico.`,
            mentions: [sender]
        });
        break;
    }

    const paciente = ninjasS.find(n =>
        n.nombre.toLowerCase().includes(args.join(" ").toLowerCase())
    );

    if (!paciente) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no encontré ese ninja.`,
            mentions: [sender]
        });
        break;
    }

    paciente.vida = paciente.edades[String(paciente.edad)].vida;
    paciente.chakra = paciente.edades[String(paciente.edad)].chakra;

    fs.writeFileSync(pathS, JSON.stringify(ninjasS, null, 2));

    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} has sanado a *${paciente.nombre}*. Su vida y chakra están al máximo.`,
        mentions: [sender]
    });
    break;
    
case 'descanso':
    const pathDescanso = './archivos/json/ninjas.json';
    let ninjasDescanso = JSON.parse(fs.readFileSync(pathDescanso));
    const ninjaUsuario = ninjasDescanso.find(n => n.duenio === sender);

    if (!ninjaUsuario) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no puedes usar este comando, no eres un ninja.`,
            mentions: [sender]
        });
        break;
    }

    // Asegurar que la edad esté bien definida
    const edadesDisponibles = Object.keys(ninjaUsuario.edades || {});
    const edadActual = edadesDisponibles.includes(String(ninjaUsuario.edad))
        ? String(ninjaUsuario.edad)
        : edadesDisponibles[0];

    const etapaActual = ninjaUsuario.edades[edadActual];

    if (!etapaActual || etapaActual.vida === undefined || etapaActual.chakra === undefined) {
        await susune.sendMessage(from, {
            text: `⚠️ @${sender.split("@")[0]} tu ninja no tiene información válida de vida/chakra para ninguna edad.`,
            mentions: [sender]
        });
        break;
    }

    ninjaUsuario.vida = etapaActual.vida;
    ninjaUsuario.chakra = etapaActual.chakra;

    fs.writeFileSync(pathDescanso, JSON.stringify(ninjasDescanso, null, 2));

    await susune.sendMessage(from, {
        image: { url: etapaActual.imagen },
        caption: `🌙 𝗗𝗘𝗦𝗖𝗔𝗡𝗦𝗢 𝗡𝗜𝗡𝗝𝗔  🌙\n\n@${sender.split("@")[0]} 𝒉𝒂𝒔 𝒕𝒐𝒎𝒂𝒅𝒐 𝒍𝒂𝒔 𝒄𝒐𝒔𝒂𝒔 𝒄𝒐𝒏 𝒄𝒂𝒍𝒎𝒂 𝒚 𝒉𝒂𝒔 𝒅𝒆𝒄𝒊𝒅𝒊𝒅𝒐 𝒕𝒐𝒎𝒂𝒓 𝒖𝒏 𝒅𝒆𝒔𝒄𝒂𝒏𝒔𝒐, 𝒂𝒉𝒐𝒓𝒂 𝒕𝒖 𝒗𝒊𝒅𝒂 𝒚 𝒕𝒖 𝒄𝒉𝒂𝒌𝒓𝒂 𝒔𝒆 𝒉𝒂𝒏 𝒓𝒆𝒄𝒖𝒑𝒆𝒓𝒂𝒅𝒐 𝒆𝒏 𝒖𝒏 *80%*`,
        mentions: [sender]
    });
    break;
    
case 'retarpelea':
    if (!args[0]) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} debes mencionar al usuario que deseas retar.`,
            mentions: [sender]
        });
        break;
    }

    const peleaPath = `./archivos/json/pelea_${from}.json`;
    if (fs.existsSync(peleaPath)) {
        const peleaActiva = JSON.parse(fs.readFileSync(peleaPath));
        if (peleaActiva.estado === "pendiente" || peleaActiva.estado === "activa") {
            await susune.sendMessage(from, {
                text: `@${sender.split("@")[0]} ya hay una pelea activa en este grupo.`,
                mentions: [sender]
            });
            break;
        }
    }

    const usuarioRetado = args[0].replace("@", "") + "@s.whatsapp.net";
    const archivoNinjas = './archivos/json/ninjas.json';
    const listaNinjass = JSON.parse(fs.readFileSync(archivoNinjas));

    const existeRetador = listaNinjass.find(n => n.duenio === sender);
    const existeRetado = listaNinjass.find(n => n.duenio === usuarioRetado);

    if (!existeRetador || !existeRetado) {
        await susune.sendMessage(from, {
            text: `𝑵𝒐 𝒔𝒆 𝒑𝒖𝒆𝒅𝒆 𝒆𝒏𝒑𝒆𝒛𝒂𝒓 𝒖𝒏𝒂 𝒑𝒆𝒍𝒆𝒂 𝒔𝒊 𝒍𝒐𝒔 𝒅𝒐𝒔 𝒏𝒐 𝒔𝒐𝒏 𝒖𝒏 𝒔𝒉𝒊𝒏𝒐𝒃𝒊, 𝒑𝒂𝒓𝒂 𝒔𝒆𝒓 𝒖𝒏 𝒔𝒉𝒊𝒏𝒐𝒃𝒊 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: *.sᴇʀ ɴɪɴᴊᴀ*`,
            mentions: [sender, usuarioRetado]
        });
        break;
    }

    const dataPelea = {
        jugador1: sender,
        jugador2: usuarioRetado,
        turno: sender,
        estado: "pendiente"
    };

    fs.writeFileSync(peleaPath, JSON.stringify(dataPelea, null, 2));

    const mensajeReto = `⚔️ 𝗕𝗔𝗧𝗔𝗟𝗟𝗔 𝗡𝗜𝗡𝗝𝗔 ⚔️\n\n@${sender.split("@")[0]} 𝑻𝒆 𝒉𝒊𝒛𝒐 𝒖𝒏𝒂 𝒆𝒏𝒗𝒐𝒔𝒄𝒂𝒅𝒂 𝒚 𝒕𝒆 𝒉𝒂 𝒓𝒆𝒕𝒂𝒅𝒐 𝒂 𝒖𝒏𝒂 𝒑𝒆𝒍𝒆𝒂 𝒖𝒔𝒖𝒂𝒓𝒊𝒐: @${usuarioRetado.split("@")[0]}\n\n𝑷𝒂𝒓𝒂 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒂 𝒆𝒔𝒕𝒆 𝒏𝒊𝒏𝒋𝒂 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: *.aceptarpelea*`;

    await susune.sendMessage(from, {
        image: { url: existeRetador.imagen },
        caption: mensajeReto,
        mentions: [sender, usuarioRetado]
    });

    setTimeout(async () => {
        if (fs.existsSync(peleaPath)) {
            const datosActuales = JSON.parse(fs.readFileSync(peleaPath));
            if (datosActuales.estado === "pendiente") {
                fs.unlinkSync(peleaPath);
                await susune.sendMessage(from, {
                    text: `@${usuarioRetado.split("@")[0]} 𝑬𝒓𝒆𝒔 𝒖𝒏 𝒄𝒐𝒃𝒂𝒓𝒅𝒆, 𝒕𝒖𝒗𝒊𝒔𝒕𝒆 𝒕𝒂𝒏𝒕𝒐 𝒎𝒊𝒆𝒅𝒐 𝒒𝒖𝒆 𝒏𝒐 𝒑𝒖𝒅𝒊𝒔𝒕𝒆 𝒆𝒏𝒇𝒓𝒆𝒏𝒕𝒂𝒓 𝒂𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐: @${sender.split("@")[0]}\n\n𝑵𝒐 𝒔𝒊𝒓𝒗𝒆𝒔 𝒄𝒐𝒎𝒐 𝒏𝒊𝒏𝒋𝒂, 𝒎𝒆𝒋𝒐𝒓 𝒓𝒆𝒕𝒊𝒓𝒂𝒕𝒆 𝒚 𝒗𝒂𝒍𝒐𝒓𝒂 𝒕𝒖 𝒗𝒊𝒅𝒂 (𝐌𝐢𝐞𝐝𝐨𝐬𝐢𝐭𝐨)`,
                    mentions: [sender, usuarioRetado]
                });
            }
        }
    }, 60000);

    break;
    
    case 'aceptarpelea':
    const peleaArchivo = `./archivos/json/pelea_${from}.json`;

    if (!fs.existsSync(peleaArchivo)) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no hay ninguna pelea pendiente en este chat.`,
            mentions: [sender]
        });
        break;
    }

    const datosPelea = JSON.parse(fs.readFileSync(peleaArchivo));

    if (datosPelea.jugador2 !== sender) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} tú no eres el usuario retado en esta pelea.`,
            mentions: [sender]
        });
        break;
    }

    datosPelea.estado = "activa";
datosPelea.turno = datosPelea.jugador1;

// Guarda valores iniciales
const ninjasDatos = JSON.parse(fs.readFileSync('./archivos/json/ninjas.json'));
const ninja1 = ninjasDatos.find(n => n.duenio === datosPelea.jugador1);
const ninja2 = ninjasDatos.find(n => n.duenio === datosPelea.jugador2);

datosPelea.iniciales = {
    [datosPelea.jugador1]: {
        vida: ninja1.vida,
        chakra: ninja1.chakra
    },
    [datosPelea.jugador2]: {
        vida: ninja2.vida,
        chakra: ninja2.chakra
    }
};

    fs.writeFileSync(peleaArchivo, JSON.stringify(datosPelea, null, 2));

    const archivoNinjasAcepta = './archivos/json/ninjas.json';
    const listaNinjasAcepta = JSON.parse(fs.readFileSync(archivoNinjasAcepta));
    const ninjaAcepta = listaNinjasAcepta.find(n => n.duenio === sender);

    await susune.sendMessage(from, {
        image: { url: ninjaAcepta.imagen },
        caption: `⚔️ 𝗗𝗘𝗦𝗔𝗙𝗜𝗢 𝗔𝗖𝗘𝗣𝗧𝗔𝗗𝗢 ⚔️\n\n𝑬𝒍 𝒖𝒔𝒖𝒂𝒓𝒊𝒐: @${sender.split("@")[0]} 𝒂𝒄𝒆𝒑𝒕𝒐 𝒆𝒍 𝒅𝒆𝒔𝒂𝒇𝒊𝒐\n\n@${datosPelea.turno.split("@")[0]} 𝒂𝒉𝒐𝒓𝒂 𝒆𝒔 𝒕𝒖 𝒕𝒖𝒓𝒏𝒐 𝒑𝒂𝒓𝒂 𝒂𝒕𝒂𝒄𝒂𝒓, 𝒖𝒕𝒊𝒍𝒊𝒛𝒂 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐: *.ᴘᴇʟᴇᴀ <ᴊᴜᴛsᴜ>* 𝒑𝒂𝒓𝒂 𝒑𝒐𝒅𝒆𝒓 𝒂𝒕𝒂𝒄𝒂𝒓, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: *.ᴘᴇʟᴇᴀ ᴋᴜɴᴀɪ*`,
        mentions: [sender, datosPelea.turno]
    });
    break;
    
case 'pelea':
    if (!args[0]) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} 𝑬𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒂𝒄𝒐𝒎𝒑𝒂𝒏̃𝒂𝒅𝒐 𝒅𝒆 𝒕𝒖 𝒋𝒖𝒕𝒔𝒖 𝒐 𝒉𝒂𝒃𝒊𝒍𝒊𝒅𝒂𝒅, 𝐄𝐣𝐞𝐦𝐩𝐥𝐨: *.ᴘᴇʟᴇᴀ ᴋᴜɴᴀɪ*`,
            mentions: [sender]
        });
        break;
    }

    const archivoPelea = `./archivos/json/pelea_${from}.json`;
    if (!fs.existsSync(archivoPelea)) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no hay pelea activa.`,
            mentions: [sender]
        });
        break;
    }

    const datosq = JSON.parse(fs.readFileSync(archivoPelea));
    if (datosq.turno !== sender) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no es tu turno aún.`,
            mentions: [sender]
        });
        break;
    }

    let ninjasPe = JSON.parse(fs.readFileSync('./archivos/json/ninjas.json'));
    let atacanteq = ninjasPe.find(n => n.duenio === sender);
    let defensor = ninjasPe.find(n => n.duenio === (sender === datosq.jugador1 ? datosq.jugador2 : datosq.jugador1));

    if (!atacanteq || !defensor) {
        await susune.sendMessage(from, {
            text: `Error al encontrar a los ninjas en combate.`,
            mentions: [sender]
        });
        break;
    }

    const jutsuUsado = args.join(" ").toLowerCase();
    const jutsuValido = atacanteq.jutsus.some(j => j.toLowerCase() === jutsuUsado);

    if (!jutsuValido) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no conoces el jutsu "${jutsuUsado}".`,
            mentions: [sender]
        });
        break;
    }

    const chakraCosto = Math.floor(Math.random() * 10) + 20;
    const danio = Math.floor(Math.random() * 200) + 100;

    if (atacanteq.chakra < chakraCosto) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no tienes suficiente chakra para usar ese jutsu.`,
            mentions: [sender]
        });
        datosq.estado = "finalizada";
        fs.unlinkSync(archivoPelea);
        break;
    }

    atacanteq.chakra -= chakraCosto;
    defensor.vida -= danio;

    if (defensor.vida <= 0) {
        defensor.vida = 0;
        atacanteq.exp += 300;
        atacanteq.dinero += 500;
        defensor.chakra = 0;

        // Restaurar vida y chakra iniciales guardados
        if (datosq.iniciales?.[atacanteq.duenio]) {
            atacanteq.vida = datosq.iniciales[atacanteq.duenio].vida;
            atacanteq.chakra = datosq.iniciales[atacanteq.duenio].chakra;
        }

        if (datosq.iniciales?.[defensor.duenio]) {
            defensor.vida = datosq.iniciales[defensor.duenio].vida;
            defensor.chakra = datosq.iniciales[defensor.duenio].chakra;
        }

        fs.writeFileSync('./archivos/json/ninjas.json', JSON.stringify(ninjasPe, null, 2));
        fs.unlinkSync(archivoPelea);

        await susune.sendMessage(from, {
            image: { url: atacanteq.imagen },
            caption: `@${sender.split("@")[0]} usó *${jutsuUsado}* e hizo *${danio}* de daño.\n@${defensor.duenio.split("@")[0]} fue derrotado.\n\n¡Felicidades ${atacanteq.nombre}, ganaste la pelea!\nAmbos ninjas han recuperado su vida y chakra como estaban antes de comenzar el combate.`,
            mentions: [sender, defensor.duenio]
        });
        break;
    }

    // Cambiar turno
    datosq.turno = defensor.duenio;
    fs.writeFileSync(archivoPelea, JSON.stringify(datosq, null, 2));
    fs.writeFileSync('./archivos/json/ninjas.json', JSON.stringify(ninjasPe, null, 2));

    await susune.sendMessage(from, {
        image: { url: atacanteq.imagen },
        caption: `@${sender.split("@")[0]} usó *${jutsuUsado}* e hizo *${danio}* de daño y gastó *${chakraCosto}* de chakra.\nEs turno de @${defensor.duenio.split("@")[0]}.`,
        mentions: [sender, defensor.duenio]
    });
    break;
    
    case 'unirme':
    if (!args[0]) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} escribe el nombre del ninja o usuario al que deseas apoyar.`,
            mentions: [sender]
        });
        break;
    }

    const peleaActivaPath = `./archivos/json/pelea_${from}.json`;
    if (!fs.existsSync(peleaActivaPath)) {
        await susune.sendMessage(from, {
            text: `No hay una pelea activa para unirte.`,
            mentions: [sender]
        });
        break;
    }

    let datosPeleaq = JSON.parse(fs.readFileSync(peleaActivaPath));
    if (datosPeleaq.estado !== 'activa') {
        await susune.sendMessage(from, {
            text: `La pelea aún no ha comenzado o ya terminó.`,
            mentions: [sender]
        });
        break;
    }

    const objetivoq = args.join(" ").toLowerCase();
    const objetivoEsJugador1 = objetivoq.includes(datosPeleaq.jugador1.split("@")[0]);
    const objetivoEsJugador2 = objetivoq.includes(datosPeleaq.jugador2.split("@")[0]);

    if (!objetivoEsJugador1 && !objetivoEsJugador2) {
        await susune.sendMessage(from, {
            text: `No se encontró el jugador que mencionas en esta pelea.`,
            mentions: [sender]
        });
        break;
    }

    // Agregar al equipo
    if (objetivoEsJugador1) {
        datosPeleaq.aliados1 = datosPeleaq.aliados1 || [];
        if (!datosPeleaq.aliados1.includes(sender)) datosPeleaq.aliados1.push(sender);
    } else {
        datosPeleaq.aliados2 = datosPeleaq.aliados2 || [];
        if (!datosPeleaq.aliados2.includes(sender)) datosPeleaq.aliados2.push(sender);
    }

    fs.writeFileSync(peleaActivaPath, JSON.stringify(datosPeleaq, null, 2));

    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} se ha unido a la pelea para apoyar a @${objetivoEsJugador1 ? datosPeleaq.jugador1.split("@")[0] : datosPeleaq.jugador2.split("@")[0]}!`,
        mentions: [sender]
    });
    break;
    
    case 'vaciarninja':
    const rutaReset = './archivos/json/ninjas.json';
    let ninjasReset = JSON.parse(fs.readFileSync(rutaReset));

    ninjasReset = ninjasReset.map(ninja => {
        const edadInicial = Object.keys(ninja.edades)[0];
        const etapa = ninja.edades[edadInicial];

        return {
            ...ninja,
            ocupado: false,
            duenio: null,
            nivel: 1,
            edad: parseInt(edadInicial),
            exp: 0,
            dinero: 0,
            misiones: 0,
            librobingo: false,
            vida: etapa.vida,
            chakra: etapa.chakra,
            estado: etapa.estado,
            tipo: etapa.tipo,
            rango: etapa.rango,
            jutsus: etapa.jutsus,
            imagen: etapa.imagen
        };
    });

    fs.writeFileSync(rutaReset, JSON.stringify(ninjasReset, null, 2));

    await susune.sendMessage(from, {
        text: `¡Todos los ninjas han sido reiniciados! El juego ha vuelto a comenzar.`,
    });
    break;
    
    case 'cancelarpelea':
    const peleaCancelPath = `./archivos/json/pelea_${from}.json`;
    if (!fs.existsSync(peleaCancelPath)) {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no hay ninguna pelea activa que puedas cancelar.`,
            mentions: [sender]
        });
        break;
    }

    let datosCancel = JSON.parse(fs.readFileSync(peleaCancelPath));

    const es1v1 = !datosCancel.aliados1 && !datosCancel.aliados2;

    if (es1v1 || (sender === datosCancel.jugador1 || sender === datosCancel.jugador2)) {
        fs.unlinkSync(peleaCancelPath);
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} canceló la pelea. Nadie gana experiencia ni monedas.`,
            mentions: [sender]
        });
        break;
    }

    // Si es aliado en una pelea de equipo
    if (datosCancel.aliados1?.includes(sender)) {
        datosCancel.aliados1 = datosCancel.aliados1.filter(u => u !== sender);
    } else if (datosCancel.aliados2?.includes(sender)) {
        datosCancel.aliados2 = datosCancel.aliados2.filter(u => u !== sender);
    } else {
        await susune.sendMessage(from, {
            text: `@${sender.split("@")[0]} no estás participando en la pelea.`,
            mentions: [sender]
        });
        break;
    }

    fs.writeFileSync(peleaCancelPath, JSON.stringify(datosCancel, null, 2));

    await susune.sendMessage(from, {
        text: `@${sender.split("@")[0]} se ha retirado del combate. La batalla continúa.`,
        mentions: [sender]
    });
    break;
    
    case 'listaninja':
    const rutaLista = './archivos/json/ninjas.json';
    const ninjasLista = JSON.parse(fs.readFileSync(rutaLista));
    const aldeaFiltro = args.join(" ").toLowerCase();

    let mensajeLista = `*Lista de Ninjas*\nTotal: ${ninjasLista.length}\n\n`;

    ninjasLista.forEach((ninja, i) => {
        if (aldeaFiltro && ninja.aldea.toLowerCase() !== aldeaFiltro) return;

        mensajeLista += `*${i + 1}* • ${ninja.nombre}\n`;
        mensajeLista += `   • Estado: ${ninja.estado || ninja.edades[String(ninja.edad)].estado}\n`;
        mensajeLista += `   • Aldea: ${ninja.aldea}\n`;
        mensajeLista += `   • ${ninja.ocupado ? "@" + ninja.duenio.split("@")[0] : "Libre"}\n\n`;
    });

    if (mensajeLista.trim() === `*Lista de Ninjas*\nTotal: ${ninjasLista.length}`) {
        mensajeLista += `No se encontraron ninjas en la aldea *${args.join(" ")}*.`;
    }

    await susune.sendMessage(from, {
        text: mensajeLista,
        mentions: ninjasLista.filter(n => n.ocupado).map(n => n.duenio)
    });
    break;
    
    case 'librobingo':
    const rutaBingo = './archivos/json/ninjas.json';
    const todosBingo = JSON.parse(fs.readFileSync(rutaBingo));

    const ninjasBingo = todosBingo.filter(n => n.librobingo === true);

    if (ninjasBingo.length === 0) {
        await susune.sendMessage(from, {
            text: `No hay ninjas en el libro bingo actualmente.`
        });
        break;
    }

    let mensajeBingo = `*Libro Bingo*\nTotal: ${ninjasBingo.length}\n\n`;

    ninjasBingo.forEach((ninja, i) => {
        mensajeBingo += `*${i + 1}* • ${ninja.nombre}\n`;
        mensajeBingo += `   • Edad: ${ninja.edad}\n`;
        mensajeBingo += `   • Estado: ${ninja.estado || ninja.edades[String(ninja.edad)].estado}\n`;
        mensajeBingo += `   • Libro Bingo: Sí\n`;
        mensajeBingo += `   • ${ninja.ocupado ? "@" + ninja.duenio.split("@")[0] : "Libre"}\n\n`;
    });

    await susune.sendMessage(from, {
        text: mensajeBingo,
        mentions: ninjasBingo.filter(n => n.ocupado).map(n => n.duenio)
    });
    break;
    
    
    
    
    
    
    
    
    
    case 'appletvlink':
    try {
    let index = registros.findIndex(u => u.id === sender);
if (index === -1 || registros[index].diamantes < 10) return enviar("🌹 𝐇𝐨𝐥𝐚, 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐟𝐨𝐧𝐝𝐨𝐬 𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬 𝐩𝐚𝐫𝐚 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐮𝐧 𝐥𝐢𝐧𝐤, 𝐜𝐚𝐝𝐚 𝐥𝐢𝐧𝐤 𝐭𝐞 𝐜𝐮𝐞𝐬𝐭𝐚 *$10 💎*");
registros[index].diamantes -= 10;
loteriaJugadores.push(sender);
enviar("💗 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐡𝐚𝐬 𝐜𝐨𝐦𝐩𝐫𝐚𝐝𝐨 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐚𝐩𝐩𝐥𝐞 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐨𝐫  *$10 💎*");
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        const { data } = await axios.get('https://sebas.alwaysdata.net/vix/apple.php');
        reply(`*🍿 Enlace De Apple TV Premium*

🔗 *Link:* ${data}

⚠️ *Solo 1 dispositivo*, entra al enlace y regístrate o inicia sesión para activarlo.`);
    } catch (e) {
        reply('⚠️ No se pudo obtener el enlace en este momento. Intenta más tarde.');
        console.error('[ERROR - appletvlink]', e);
    }
    break;
    
    
    case 'vixlink':
    try {
    let index = registros.findIndex(u => u.id === sender);
if (index === -1 || registros[index].diamantes < 10) return enviar("🌹 𝐇𝐨𝐥𝐚, 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐟𝐨𝐧𝐝𝐨𝐬 𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬 𝐩𝐚𝐫𝐚 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐮𝐧 𝐥𝐢𝐧𝐤, 𝐜𝐚𝐝𝐚 𝐥𝐢𝐧𝐤 𝐭𝐞 𝐜𝐮𝐞𝐬𝐭𝐚 *$10 💎*");
registros[index].diamantes -= 10;
loteriaJugadores.push(sender);
enviar("💗 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐡𝐚𝐬 𝐜𝐨𝐦𝐩𝐫𝐚𝐝𝐨 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐯𝐢𝐱 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐨𝐫  *$10 💎*");
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        const { data } = await axios.get('https://sebas.alwaysdata.net/vix/vix.php');
        reply(`🎬 𝗩𝗶𝘅 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 𝗟𝗶𝗻𝗸 🎬

🔗 𝑳𝒊𝒏𝒌: ${data}

⚠️ 𝐔𝐬𝐚𝐫 𝐬𝐨𝐥𝐨 𝐞𝐧 𝐮𝐧 𝐝𝐢𝐬𝐩𝐨𝐬𝐢𝐭𝐢𝐯𝐨, 𝐞𝐧𝐭𝐫𝐚 𝐚𝐥 𝐞𝐧𝐥𝐚𝐜𝐞 𝐲 𝐫𝐞𝐠𝐢𝐬𝐭𝐫𝐚𝐭𝐞 𝐨 𝐢𝐧𝐢𝐜𝐢𝐚 𝐬𝐞𝐬𝐢𝐨𝐧 𝐞𝐧 𝐯𝐢𝐱 𝐝𝐞𝐬𝐝𝐞 𝐞𝐬𝐞 𝐞𝐧𝐥𝐚𝐜𝐞 𝐲 𝐥𝐢𝐬𝐭𝐨 𝐲𝐚 𝐭𝐞𝐧𝐝𝐫𝐚𝐬 𝐕𝐢𝐱 𝐩𝐫𝐞𝐦𝐢𝐮𝐦.

💗 𝑩𝒐𝒕: ${botname}`);
    } catch (e) {
        reply('⚠️ No se pudo obtener el enlace de Vix. Intenta más tarde.');
        console.error('[ERROR - vixlink]', e);
    }
    break;
    
    case 'deezerlink':
    try {
    let index = registros.findIndex(u => u.id === sender);
if (index === -1 || registros[index].diamantes < 10) return enviar("🌹 𝐇𝐨𝐥𝐚, 𝐧𝐨 𝐭𝐢𝐞𝐧𝐞𝐬 𝐟𝐨𝐧𝐝𝐨𝐬 𝐬𝐮𝐟𝐢𝐜𝐢𝐞𝐧𝐭𝐞𝐬 𝐩𝐚𝐫𝐚 𝐜𝐨𝐦𝐩𝐫𝐚𝐫 𝐮𝐧 𝐥𝐢𝐧𝐤, 𝐜𝐚𝐝𝐚 𝐥𝐢𝐧𝐤 𝐭𝐞 𝐜𝐮𝐞𝐬𝐭𝐚 *$10 💎*");
registros[index].diamantes -= 10;
loteriaJugadores.push(sender);
enviar("💗 𝐆𝐫𝐚𝐜𝐢𝐚𝐬 𝐡𝐚𝐬 𝐜𝐨𝐦𝐩𝐫𝐚𝐝𝐨 𝐮𝐧 𝐥𝐢𝐧𝐤 𝐝𝐞 𝐝𝐞𝐞𝐳𝐞𝐫 𝐩𝐫𝐞𝐦𝐢𝐮𝐦 𝐩𝐨𝐫  *$10 💎*");
fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));
        const { data } = await axios.get('https://sebas.alwaysdata.net/vix/deezer.php');
        reply(`*🎧 Enlace De Deezer Premium*

🔗 *Link:* ${data}

⚠️ *Solo 1 dispositivo*, entra al enlace y regístrate o inicia sesión para activarlo.`);
    } catch (e) {
        reply('⚠️ No se pudo obtener el enlace de Deezer. Intenta más tarde.');
        console.error('[ERROR - deezerlink]', e);
    }
    break;
case 'deezer':
    {
        const enlaces = [
            'https://dzr.fm/al/mWAfMY',
            'https://dzr.fm/al/RWxBnz',
            'https://dzr.fm/al/sYCdKY'
        ];

        const randomLink = enlaces[Math.floor(Math.random() * enlaces.length)];

        reply(`🎵 𝗗𝗲𝗲𝘇𝗲𝗿 𝗠𝘂𝘀𝗶𝗰 🎵

🔗 𝑬𝒏𝒍𝒂𝒄𝒆: ${randomLink}

*🍊 ᴜɴᴇᴛᴇ ᴀ ᴇsᴛᴇ ᴇɴʟᴀᴄᴇ ᴅᴇ ᴅᴇᴇᴢᴇʀ ʏ ʀᴇɢɪsᴛʀᴀᴛᴇ ᴄᴏɴ ᴛᴜ ᴄᴜᴇɴᴛᴀ ᴏ ɪɴɪᴄɪᴀ sᴇssɪᴏɴ ʏ ʟɪsᴛᴏ ʟᴀ ᴍᴇᴍʙʀᴇsɪᴀ sᴇ ᴀᴄᴛɪᴠᴀʀᴀ ᴇɴ ᴛᴜ ᴄᴜᴇɴᴛᴀ*`);
    }
    break;
    
    case 'ytmusica':
    if (!q) {
        console.log('[ytmusica] No se proporcionó término de búsqueda');
        return reply('Escribe un nombre para buscar música. Ej: .ytmusica Ozuna');
    }

    console.log(`[ytmusica] Buscando música con nombre: ${q}`);

    try {
        const url = `http://luxhostt.com.br/api/youtube?nome=${encodeURIComponent(q)}`;
        console.log(`[ytmusica] Enviando solicitud a: ${url}`);

        const { data } = await axios.get(url);

        if (!Array.isArray(data) || data.length === 0) {
            console.log('[ytmusica] No se encontraron resultados');
            return reply('No se encontró música con ese nombre.');
        }

        const randomSong = data[Math.floor(Math.random() * data.length)];
        console.log('[ytmusica] Canción elegida:', randomSong);

        const audioUrl = randomSong.audio;
        const title = randomSong.title;

        const audioBuffer = await axios.get(audioUrl, { responseType: 'arraybuffer' });
        await susune.sendMessage(from, {
            audio: audioBuffer.data,
            mimetype: 'audio/mpeg',
            fileName: `${title}.mp3`,
            ptt: false
        }, { quoted: info });

        console.log('[ytmusica] Audio enviado con éxito');
    } catch (e) {
        console.error('[ytmusica error]', e);
        reply('Ocurrió un error al intentar enviar el audio.');
    }
    break;
    
case "listakakashi":
enviar(`🍄 𝗟𝗶𝘀𝘁𝗮 𝗜𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁𝗲 🍄

• https://luxboost.shop/
👤 Kakashii
🔐 kakashiyt18`)
break

case 'luxsaldo':
    try {
        const { data } = await axios.post('https://luxboost.shop/api/v2', new URLSearchParams({
            key: 'b6e0acf77c984c49069d8b442f7e65ca',
            action: 'balance'
        }));

        reply(`*💰 Tu saldo disponible:*\n\n*Saldo:* ${data.balance}\n*Moneda:* ${data.currency}`);
    } catch (e) {
        console.error('[luxsaldo error]', e);
        reply('No se pudo obtener el saldo.');
    }
    break;
    
    
    
case 'luxservicios':
    try {
        const { data } = await axios.post('https://luxboost.shop/api/v2', new URLSearchParams({
            key: 'b6e0acf77c984c49069d8b442f7e65ca',
            action: 'services'
        }));

        if (!Array.isArray(data)) return reply('No se pudieron obtener los servicios.');

        let texto = '*📋 Lista de Servicios disponibles:*\n\n';

        data.forEach((s, index) => {
            texto += `━━━━━━━━━━━━━━━\n`;
            texto += `*Orden:* ${index + 1}\n`;
            texto += `*ID:* ${s.service}\n`;
            texto += `*Nombre:* ${s.name}\n`;
            texto += `*Precio:* ${s.rate}/1000\n`;
            texto += `*Mínimo:* ${s.min}\n`;
            texto += `*Máximo:* ${s.max}\n`;
        });

        reply(texto);
    } catch (e) {
        console.error('[luxservicios error]', e);
        reply('Error al consultar los servicios.');
    }
    break;
    
    case 'luxorden':
    if (!q) return reply('Usa: .luxorden ID|LINK|CANTIDAD');

    const [service, link, quantity] = q.split('|');
    if (!service || !link || !quantity) return reply('Formato incorrecto. Usa: .luxorden ID|LINK|CANTIDAD');

    try {
        const { data } = await axios.post('https://luxboost.shop/api/v2', new URLSearchParams({
            key: 'b6e0acf77c984c49069d8b442f7e65ca',
            action: 'add',
            service,
            link,
            quantity
        }));

        if (data.order) {
            reply(`*✅ Orden creada correctamente:*\n\n*ID:* ${data.order}`);
        } else {
            reply(`❌ Error al crear la orden:\n${data.error || 'Sin respuesta.'}`);
        }
    } catch (e) {
        console.error('[luxorden error]', e);
        reply('Error al crear la orden.');
    }
    break;

case 'luxestado':
    if (!q) return reply('Usa: .luxestado ID_ORDEN');

    try {
        const { data } = await axios.post('https://luxboost.shop/api/v2', new URLSearchParams({
            key: 'b6e0acf77c984c49069d8b442f7e65ca',
            action: 'status',
            order: q
        }));

        reply(`*📦 Estado de la orden ${q}:*\n
*Status:* ${data.status}
*Inicio:* ${data.start_count}
*Restante:* ${data.remains}
*Cobrada:* ${data.charge}`);
    } catch (e) {
        console.error('[luxestado error]', e);
        reply('No se pudo obtener el estado de la orden.');
    }
    break;

case 'calcular':
case 'cal':
case 'calc':
case 'calculadora':
  if (args.length === 0) {
    return enviar('*𝙷𝙾𝙻𝙰, 𝙳𝙸𝙶𝙰 𝙻𝙰 𝙾𝙿𝙴𝚁𝙰𝙲𝙸𝙾𝙽 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝚁𝙴𝚂𝙾𝙻𝚅𝙴𝚁 ✅*');
  }

  let operation = args.join(' ').toLowerCase();

  // Frases naturales comunes
  operation = operation
    .replace(/ra[ii]z de (\d+(\.\d+)?)/g, 'Math.sqrt($1)')
    .replace(/(\d+)\s*al cuadrado/g, '$1**2')
    .replace(/(\d+)\s*al cubo/g, '$1**3')
    .replace(/(\d+)\s*elevado a\s*(\d+)/g, '$1**$2')
    .replace(/÷/g, '/')
    .replace(/x/g, '*')
    .replace(/\^/g, '**')
    .replace(/√\s?(\d+(\.\d+)?)/g, 'Math.sqrt($1)');

  try {
    const result = eval(operation);

    enviar(`*𝙾𝙿𝙴𝚁𝙰𝙲𝙸𝙾𝙽 𝚁𝙴𝚂𝚄𝙴𝙻𝚃𝙰 ✅*

𝚃𝚄 𝙾𝙿𝙴𝚁𝙰𝙲𝙸𝙾𝙽: *${args.join(' ')}*
𝚁𝙴𝚂𝚄𝙻𝚃𝙰𝙳𝙾: *${result}*`);
  } catch (err) {
    enviar('*𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙻𝙰 𝙾𝙿𝙴𝚁𝙰𝙲𝙸𝙾𝙽 ❌*\n𝙿𝙾𝚁 𝙵𝙰𝚅𝙾𝚁 𝚅𝙴𝚁𝙸𝙵𝙸𝙲𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙴́ 𝙱𝙸𝙴𝙽 𝙴𝚂𝙲𝚁𝙸𝚃𝙰.');
  }
  break;

case 'canal': {
if(!isOwner) return
    const args = text.split(' ');
    const [newsletterJid, serverMessageId] = args;

    if (!newsletterJid || !serverMessageId) {
        return enviar('❌ Formato incorrecto. Usa:\n.canal <newsletterJid> <serverMessageId>');
    }

    try {
        await susune.sendMessage(from, {
            text: '⛩️ Mensaje reenviado del canal oficial.',
            contextInfo: {
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid,
                    serverMessageId: parseInt(serverMessageId),
                    newsletterName: "❁⃝🌷𝗖𝗼𝗺𝘂𝗻𝗶𝘁𝘆 𝗞𝗶𝘁𝗮𝗴𝗮𝘄𝗮 𝗕𝗼𝘁 ❁⃝💕"
                }
            }
        });
    } catch (e) {
        console.error(e);
        enviar('❌ No se pudo reenviar el mensaje. Verifica el ID del canal y el número del mensaje.');
    }

    break;
}

case 'report':
case 'reporte':
    if (!q) return reply(`💗 𝑯𝒐𝒍𝒂, 𝒑𝒐𝒓 𝒇𝒂𝒗𝒐𝒓 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒏𝒐𝒎𝒃𝒓𝒆 𝒅𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 𝒚 𝒕𝒖 𝒄𝒐𝒏𝒕𝒆𝒙𝒕𝒐 𝒅𝒆 𝒍𝒐 𝒒𝒖𝒆 𝒑𝒂𝒔𝒂 𝒄𝒐𝒏 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐`)
    
    reply(`💗 𝑴𝒖𝒄𝒉𝒂𝒔 𝒈𝒓𝒂𝒄𝒊𝒂𝒔 𝒑𝒐𝒓 𝒕𝒖 𝒓𝒆𝒑𝒐𝒓𝒕𝒆, 𝒎𝒆 𝒂𝒔𝒆𝒈𝒖𝒓𝒂𝒓𝒆 𝒅𝒆 𝒒𝒖𝒆 𝒆𝒔𝒕𝒆 𝒎𝒆𝒏𝒔𝒂𝒋𝒆 𝒍𝒆 𝒍𝒍𝒆𝒈𝒖𝒆 𝒂 𝒎𝒊 𝒄𝒓𝒆𝒂𝒅𝒐𝒓 𝒚 𝒑𝒓𝒐𝒏𝒕𝒐 𝒕𝒘𝒏𝒅𝒓𝒂𝒔 𝒖𝒏𝒂 𝒓𝒆𝒔𝒑𝒖𝒆𝒔𝒕𝒂, 𝒍𝒐𝒔 𝒓𝒆𝒑𝒐𝒓𝒕𝒆𝒔 𝒇𝒂𝒍𝒔𝒐𝒔 𝒏𝒐 𝒔𝒆𝒓𝒂𝒏 𝒓𝒆𝒔𝒑𝒐𝒏𝒅𝒊𝒅𝒐𝒔.`)
    
    let templateMessage = {
        image: { url: './archivos/fotos/marca.jpeg' },
        caption: `⚠️ 𝐑𝐞𝐩𝐨𝐫𝐭𝐞 𝐍𝐮𝐞𝐯𝐨 ⚠️\n\n💗 𝑵𝒖𝒎𝒆𝒓𝒐: @${sender.split('@')[0]}\n🥭 𝑹𝒆𝒑𝒐𝒓𝒕𝒆: ${q}`,
        footer: 'Noelle_md',
        mentions: [sender]
    }

    await susune.sendMessage("5215649337420@s.whatsapp.net", templateMessage)
    break

case 'qc':
  try {
    console.log('Comando qc iniciado');

    if (!q) return reply('Falta el texto para crear el sticker.');

    const axios = require('axios');
    const fs = require('fs');
    const { execSync } = require('child_process');
    const path = './temp/qcimage.png';
    const outputWebp = './temp/qcsticker.webp';

    if (!fs.existsSync('./temp')) fs.mkdirSync('./temp');

    // Imagen avatar fija
    const localImagePath = './archivos/fotos/marca2.jpeg';
    const imageBuffer = fs.readFileSync(localImagePath);
    const imageBase64 = imageBuffer.toString('base64');
    const ppimg = `data:image/jpeg;base64,${imageBase64}`;

    // JSON para la API
    const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#000000",  // fondo negro
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [{
    "entities": [],
    "avatar": true,
    "from": {
      "id": 1,
      "name": pushname,
      "photo": { "url": ppimg }
    },
    "text": q,
    "replyMessage": {},
    "textColor": "#FFFFFF" // texto en blanco
  }]
};

    const res = await axios.post('https://bot.lyo.su/quote/generate', json, {
      headers: { 'Content-Type': 'application/json' }
    });

    // Guardar imagen PNG devuelta por la API
    const imageBufferFromApi = Buffer.from(res.data.result.image, 'base64');
    fs.writeFileSync(path, imageBufferFromApi);

    // Convertir a webp
    execSync(`ffmpeg -i ${path} -vf "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=0x00000000,fps=15" -pix_fmt yuva420p -vcodec libwebp -lossless 1 -compression_level 6 -q:v 60 -loop 0 -preset default -an -vsync 0 ${outputWebp}`);

    // Enviar como sticker
    await susune.sendMessage(from, {
      sticker: { url: outputWebp },
      mimetype: 'image/webp'
    }, { quoted: info });

    // Limpiar archivos temporales
    fs.unlinkSync(path);
    fs.unlinkSync(outputWebp);

    console.log('Sticker enviado correctamente');
  } catch (e) {
    console.error('Error en el comando qc:', e);
    reply('Ocurrió un error al generar el sticker.');
  }
  break;




case 'idgp':
if (!isOwner) return enviar(`Solo mi creador puede usar este comando`)
reply(`Este es el id del grupo: ${from}`)
break

case 'ki': {
  if (!isGroup) return enviar("❌ *Este comando solo se usa en grupos.*");
  
  let mentionedUser = info.message?.extendedTextMessage?.contextInfo?.mentionedJid?.[0];
  if (!mentionedUser) return enviar("⚠️ *Menciona a un usuario para medir su Ki.*");

  let kiValues = [];
  for (let i = 0; i < 15; i++) {  // Aumentamos a 7 mediciones
    kiValues.push(Math.floor(Math.random() * 1000000));
  }
  
  // Función que genera una frase aleatoria basada en el nivel de Ki
  let randomPhrase = (ki) => {
    if (ki > 100000) {
      return '¡Este Ki es demasiado alto! ¡Cuidado! ⚠️';
    } else if (ki > 50000) {
      return '¡Este Ki es muy fuerte! 🔥';
    } else if (ki > 10000) {
      return '¡Wow, tienes un gran poder! 💥';
    } else {
      return '¡Jajaja eres un insecto! 🐜';
    }
  };

  let kiMessage = `Midiendo el Ki de @${mentionedUser.split('@')[0]}...`;

  // Enviar mensaje inicial
  let message = await susune.sendMessage(from, {
    text: kiMessage,
    mentions: [mentionedUser],
  });

  let i = 0;
  let interval = setInterval(() => {
    if (i < kiValues.length) {
      let ki = kiValues[i];
      kiMessage = `Midiendo el Ki de @${mentionedUser.split('@')[0]}...\n\n${ki}`;
      susune.sendMessage(from, {
        text: kiMessage,
        mentions: [mentionedUser],
        edit: message.key,
      });
      i++;
    } else {
      clearInterval(interval);
      let finalKi = Math.floor(Math.random() * 1000000);
      let finalPhrase = randomPhrase(finalKi);
      let finalMessage = `Midiendo el Ki de @${mentionedUser.split('@')[0]}...\n\nKi: ${finalKi}\n\n${finalPhrase}`;
      susune.sendMessage(from, {
        text: finalMessage,
        mentions: [mentionedUser],
        edit: message.key,
      });
    }
  }, 1500); // Intervalo de 1.5 segundos para simular la medición

  break;
}

case 'darvip': {
  if (!isOwner) return;
  if (!args[0]) return enviar('*⭐ Usa así: .darvip @usuario*');

  const id = args[0].replace('@', '') + '@s.whatsapp.net';
  const i = registros.findIndex(u => u.id === id);
  if (i === -1) return enviar('*❌ Ese usuario no está registrado.*');

  registros[i].premium = true;
  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

  await susune.sendMessage(from, {
    text: `*🌟 PREMIUM OTORGADO*\n\n@${id.split('@')[0]} ahora es usuario premium.`,
    mentions: [id]
  });

}
break;

case 'quitarvip': {
  if (!isOwner) return;
  if (!args[0]) return enviar('*⭐ Usa así: .quitarvip @usuario*');

  const id = args[0].replace('@', '') + '@s.whatsapp.net';
  const i = registros.findIndex(u => u.id === id);
  if (i === -1) return enviar('*❌ Ese usuario no está registrado.*');

  registros[i].premium = false;
  fs.writeFileSync('./archivos/json/registros.json', JSON.stringify(registros, null, 2));

  await susune.sendMessage(from, {
    text: `*🚫 PREMIUM REMOVIDO*\n\n@${id.split('@')[0]} ya no es usuario premium.`,
    mentions: [id]
  });

}
break;

case 'c':
await enviar3(`await enviar3("Hola Kakashi", from, sender);`, from, sender);
break

case 'c2':
await enviar3(`@${sender.split("@")[0]}\n\nawait enviar3("Hola Kakashi", from, sender);`, from, sender);
break

case 'fantasmas': {
if(!isGroupAdmins) return
    if (!isBotGroupAdmins) return;
    if (!isGroup) return enviar('🌸 Este comando solo funciona en grupos.');
    if (!isGroupAdmins) return enviar('🌸 Solo administradores pueden usar este comando.');

    if (!fs.existsSync('./archivos/json/ultimomensaje.json')) {
        return enviar('🌸 No hay registros de actividad aún.');
    }

    let metadata = await susune.groupMetadata(from);
    let participants = metadata.participants.map(u => u.id);

    let ultimosMensajes = JSON.parse(fs.readFileSync('./archivos/json/ultimomensaje.json'));
    let fantasmas = [];

    let botNumber = susune.user.id.split(':')[0].replace(/\D/g, '') + '@s.whatsapp.net';
    let numerosIgnorados = [
        '5215649337420@s.whatsapp.net', // Tu número (Owner)
        // Agrega aquí más si quieres ignorar otros
    ];

    for (let id of participants) {
        if (id === botNumber) continue; // Ignorar al bot
        if (numerosIgnorados.includes(id)) continue; // Ignorar números especiales
        if (!ultimosMensajes[id] || (Date.now() - ultimosMensajes[id]) > 7 * 24 * 60 * 60 * 1000) {
            fantasmas.push(id);
        }
    }

    if (fantasmas.length == 0) {
        enviar('🌸 𝑵𝒐 𝒉𝒂𝒚 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐');
    } else {
        let texto = `🌸 𝗟𝗶𝘀𝘁𝗮 𝗱𝗲 𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗮𝘀 🌸\n𝑻𝒐𝒕𝒂𝒍: *${fantasmas.length}*\n\n`;
        for (let user of fantasmas) {
            if (typeof user === 'string' && user.includes('@')) {
                texto += `🌹 @${user.split('@')[0]}\n`;
            }
        }
        texto += `\n🌷 𝑬𝒔𝒕𝒂 𝒍𝒊𝒔𝒕𝒂 𝒆𝒔 *100%* 𝒓𝒆𝒂𝒍, 𝒍𝒐𝒔 𝒖𝒔𝒖𝒂𝒓𝒊𝒐𝒔 𝒒𝒖𝒆 𝒏𝒐 𝒆𝒔𝒄𝒓𝒊𝒃𝒆𝒏 𝒆𝒏 𝒖𝒏𝒂 𝒔𝒆𝒎𝒂𝒏𝒂 𝒔𝒆 𝒄𝒐𝒏𝒔𝒊𝒅𝒆𝒓𝒂𝒏 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔, 𝒔𝒊 𝒒𝒖𝒊𝒆𝒓𝒆𝒔 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒓𝒍𝒐𝒔 𝒆𝒔𝒄𝒓𝒊𝒃𝒆 𝒆𝒍 𝒄𝒐𝒎𝒂𝒏𝒅𝒐 *ᴋɪᴄᴋғᴀɴᴛᴀsᴍᴀs*`;
        susune.sendMessage(from, { text: texto, mentions: fantasmas });
    }
}
break;
  
case 'kickfantasmas': {
if(!isGroupAdmins) return
    if (!isBotGroupAdmins) return;
    if (!isGroup) return enviar('🌸 Este comando solo funciona en grupos.');
    if (!isGroupAdmins) return enviar('🌸 Solo administradores pueden usar este comando.');
    if (!isBotGroupAdmins) return enviar('🌸 Necesito ser administrador para poder eliminar.');

    if (!fs.existsSync('./archivos/json/ultimomensaje.json')) {
        return enviar('🌸 No hay registros de actividad aún.');
    }

    let metadata = await susune.groupMetadata(from);
    let participants = metadata.participants.map(u => u.id);
    let admins = metadata.participants.filter(u => u.admin !== null).map(u => u.id); // Obtener lista de admins

    let ultimosMensajes = JSON.parse(fs.readFileSync('./archivos/json/ultimomensaje.json'));
    let fantasmas = [];

    let botNumber = susune.user.id.split(':')[0].replace(/\D/g, '') + '@s.whatsapp.net';
let numerosIgnorados = [
    '5215649337420@s.whatsapp.net', // Tu número
    '521XXXXXXXXXX@s.whatsapp.net' // Puedes poner más números aquí si quieres
];

    for (let id of participants) {
        if (id === botNumber) continue; // Ignorar al bot
        if (admins.includes(id)) continue; // Ignorar a los administradores
        if (numerosIgnorados.includes(id)) continue; // Ignorar números especiales
        if (!ultimosMensajes[id] || (Date.now() - ultimosMensajes[id]) > 7 * 24 * 60 * 60 * 1000) {
            fantasmas.push(id);
        }
    }
    

    if (fantasmas.length == 0) {
        enviar('🌸 𝑵𝒐 𝒉𝒂𝒚 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔 𝒆𝒏 𝒆𝒔𝒕𝒆 𝒈𝒓𝒖𝒑𝒐');
    } else {
        enviar(`
🌸 𝗙𝗮𝗻𝘁𝗮𝘀𝗺𝗮𝘀 𝗗𝗲𝘁𝗲𝗰𝘁𝗮𝗱𝗼𝘀 🌸\n𝑻𝒐𝒕𝒂𝒍: *${fantasmas.length}*\n\n🥀 𝑪𝒐𝒎𝒆𝒏𝒛𝒂𝒏𝒅𝒐 𝒍𝒂 𝒆𝒍𝒊𝒎𝒊𝒏𝒂𝒄𝒊𝒐𝒏 𝒅𝒆 𝒇𝒂𝒏𝒕𝒂𝒔𝒎𝒂𝒔.`);

        let eliminados = [];
        let errores = [];

        for (let user of fantasmas) {
            try {
                let responseb = await susune.groupParticipantsUpdate(from, [user], 'remove');
                if (responseb[0].status === "200") {
                    eliminados.push(user);
                } else {
                    errores.push(user);
                }
            } catch (e) {
                errores.push(user);
            }
            await new Promise(resolve => setTimeout(resolve, 1500)); // Espera de 1.5 segundos entre cada kick
        }

        let texto = '🌸 𝗥𝗲𝘀𝘂𝗹𝘁𝗮𝗱𝗼𝘀 🌸\n\n';
        if (eliminados.length > 0) {
            texto += `🌹 𝗘𝗹𝗶𝗺𝗶𝗻𝗮𝗱𝗼𝘀 🌹\n𝑻𝒐𝒕𝒂𝒍: *${eliminados.length}*\n`;
            for (let id of eliminados) {
                if (typeof id === 'string' && id.includes('@')) {
                    texto += `🌻 @${id.split('@')[0]}\n`;
                }
            }
        }
        if (errores.length > 0) {
            texto += `\n🌸 𝗘𝗿𝗿𝗼𝗿𝗲𝘀 🌸\n𝑻𝒐𝒕𝒂𝒍: *${errores.length}*\n`;
            for (let id of errores) {
                if (typeof id === 'string' && id.includes('@')) {
                    texto += `🌺 @${id.split('@')[0]}\n`;
                }
            }
        }

        susune.sendMessage(from, { text: texto, mentions: eliminados.concat(errores) });
    }
}
break;

case 'mynivel': {
    let user = registros.find(u => u.id === sender);
    if (!user) {
        enviar('🌸 No tienes nivel aún. ¡Empieza a hablar para ganar experiencia!');
    } else {
enviar3(`🌸 ¡𝑯𝒐𝒍𝒂!, @${sender.split('@')[0]}.\n\n𝐍𝐢𝐯𝐞𝐥: *${user.nivel}*\n𝐑𝐚𝐧𝐠𝐨: *${user.rango}*\n𝐄𝐱𝐩: *${user.xp} XP*.\n\n𝑺𝒊𝒈𝒖𝒆 𝒔𝒊𝒆𝒏𝒅𝒐 𝒂𝒄𝒕𝒊𝒗𝒐 𝒆𝒏 𝒆𝒍 𝒈𝒓𝒖𝒑𝒐 𝒑𝒂𝒓𝒂 𝒔𝒆𝒈𝒖𝒊𝒓 𝒔𝒖𝒃𝒊𝒆𝒏𝒅𝒐 𝒅𝒆 𝒏𝒊𝒗𝒆𝒍.`, from, sender)
    }
}
break;

case 'regalo': {
  // Verifica si el mensaje contiene el enlace
  if (!q) return enviar('*🌸 𝙴𝚂𝙲𝚁𝙸𝙱𝙴 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰𝚂 𝙴𝙽𝚅𝙸𝙰𝚁 𝙰 𝙻𝙾𝚂 𝙶𝚁𝚄𝙿𝙾𝚂*');
  
  // Extrae el enlace del mensaje (asume que está al final)
  const grupoEnlace = q.split(' ')[q.split(' ').length - 1]; // Último elemento
  const mensaje = q.replace(grupoEnlace, '').trim(); // El mensaje sin el enlace

  // Verifica si el enlace es válido
  if (!grupoEnlace.match(/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+/)) {
    return enviar('*🌸 𝙴𝙻 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴𝙱𝙴 𝙴𝚂𝚃𝙰𝚁 𝙻𝙴𝙽𝙶𝙾 𝙰 𝚄𝙽 𝙶𝚁𝚄𝙿𝙾 𝙳𝙴 𝚆𝙷𝚃𝚂𝙰𝙿𝙿.*');
  }

  // Verifica que el bot esté en el grupo de WhatsApp
  try {
    // Aquí puedes agregar el ID del grupo al cual quieres enviar el mensaje directamente
    const idGrupoDestino = '120363419777631447@g.us';  // Reemplaza con el ID del grupo al cual deseas enviar el mensaje

    // Envía solo el mensaje (sin el enlace) al grupo específico
    enviar3(`🌟 𝗥𝗲𝗴𝗮𝗹𝗼 𝗦𝗼𝗿𝗽𝗿𝗲𝘀𝗮 🌟\n\n${mensaje}`, idGrupoDestino, from, sender)
    enviar('*🌸 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙴𝙽𝚅𝙸𝙰𝙳𝙾 𝙰𝙻 𝙶𝚁𝚄𝙿𝙾.*');
  } catch (error) {
    console.error('Error enviando mensaje al grupo:', error);
    enviar('*🌸 𝙴𝚁𝚁𝙾𝚁 𝙴𝙽 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙻 𝙼𝙴𝙽𝚂𝙰𝙹𝙴.*');
  }

  break;
}

case 'id': {
  if (!q) {
    reply('*🔎 Por favor proporciona el enlace del grupo.*');
    break;
  }

  const link = q.trim();
  const codigo = link.split('/')[3];

  try {
    const info = await susune.groupGetInviteInfo(codigo);
    console.log('Info completa:', info);

    reply(`✅ *ID del grupo solicitado:*\n\n${info.id}`);
  } catch (e) {
    console.error(e);
    reply('❌ *No pude obtener el ID. Asegúrate que el bot esté en el grupo.*');
  }
}
break;

case 'getcase':{

  try {
    console.log("--------- [GETCASE DEBUG] ---------")
    console.log("body:", body)
    console.log("args:", args)
    console.log("q (comando solicitado):", q)

    if (!q) return reply(`⚠️ Debes escribir el nombre del comando.\nPor ejemplo: .getcase menu`)
if (!isOwner) return reply(`𝐄𝐬𝐭𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨 𝐞𝐬 𝐬𝐨𝐥𝐨 𝐩𝐚𝐫𝐚 𝐦𝐢 𝐜𝐫𝐞𝐚𝐝𝐨𝐫.`)
    reply('𝐄𝐬𝐩𝐞𝐫𝐞 𝐮𝐧 𝐦𝐨𝐦𝐞𝐧𝐭𝐨, 𝐞𝐬𝐭𝐨𝐲 𝐞𝐧𝐯𝐢𝐚𝐧𝐝𝐨 𝐞𝐥 𝐜𝐨𝐦𝐚𝐧𝐝𝐨...')

    const getCase = (cases) => {
      console.log("[DEBUG] Leyendo archivo index.js")
      const archivo = fs.readFileSync("./index.js", "utf-8")
      console.log("[DEBUG] Tamaño del archivo:", archivo.length)

      const regex = new RegExp(`case ['"]${cases}['"]:\\s*([\\s\\S]*?)break`, "i")
      console.log("[DEBUG] Expresión regular usada:", regex)

      const match = archivo.match(regex)
      console.log("[DEBUG] Resultado de .match:", match ? "Match encontrado" : "No se encontró")

      if (!match) throw new Error("Comando no encontrado")

      return `case '${cases}':\n${match[1]}break`
    }

    const resultado = getCase(q)
    console.log("[DEBUG] Código extraído:\n", resultado)

    await sleep(500)
    enviar(resultado)

  } catch (e) {
    console.log("[GETCASE ERROR] -", e.message)
    reply('❌ Comando no encontrado o error interno.')
  }
  }
  break;
  
  

case 'clearcache':
  try {
    if (!isOwner) return reply('⚠️ Este comando solo puede usarlo el dueño del bot.')

    reply('🧹 Verificando almacenamiento y limpiando caché...')

    // Función para obtener tamaño en bytes
    const exec = require('child_process').exec
    const obtenerTamanio = () => {
      return new Promise((resolve) => {
        exec("du -sb .", (err, stdout) => {
          if (err) return resolve(0)
          const bytes = parseInt(stdout.split('\t')[0])
          resolve(bytes || 0)
        })
      })
    }

    // Función para obtener límite de disco (Termux /data)
    const obtenerLimite = () => {
      return new Promise((resolve) => {
        exec("df -h .", (err, stdout) => {
          if (err) return resolve("desconocido")
          const lineas = stdout.trim().split("\n")
          const datos = lineas[1].split(/\s+/)
          const total = datos[1]
          resolve(total)
        })
      })
    }

    // Limpia caché y devuelve detalles
    const limpiarCache = async () => {
      const rutas = [
        '/data/data/com.termux/files/usr/tmp',
        './.cache',
        './.tmp'
      ]

      let archivosEliminados = 0
      let detallesEliminacion = []
      for (let ruta of rutas) {
        try {
          const rutaLimpiar = `${ruta}/*`
          await new Promise((resolve, reject) => {
            exec(`rm -rf ${rutaLimpiar}`, (err, stdout, stderr) => {
              if (err || stderr) {
                reject(err || stderr)
              } else {
                archivosEliminados += 1
                detallesEliminacion.push(`Ruta eliminada: ${ruta}`)
                resolve()
              }
            })
          })
        } catch (err) {
          detallesEliminacion.push(`No se pudo limpiar la ruta: ${ruta}`)
        }
      }

      return { archivosEliminados, detallesEliminacion }
    }

    const bytesAntes = await obtenerTamanio()

    // Limpiar caché y obtener detalles
    const { archivosEliminados, detallesEliminacion } = await limpiarCache()

    const bytesDespues = await obtenerTamanio()
    const liberado = bytesAntes - bytesDespues
    const limite = await obtenerLimite()

    // Conversión
    const formatBytes = (b) => {
      const sizes = ['B', 'KB', 'MB', 'GB', 'TB']
      if (b === 0) return '0 B'
      const i = parseInt(Math.floor(Math.log(b) / Math.log(1024)))
      return `${(b / Math.pow(1024, i)).toFixed(2)} ${sizes[i]}`
    }

    reply(
      `✅ Caché eliminada correctamente.\n` +
      `🗑️ Archivos eliminados: *${archivosEliminados}*\n` +
      `📂 Detalles de eliminación:\n${detallesEliminacion.join('\n')}\n\n` +
      `💽 Uso antes: *${formatBytes(bytesAntes)}*\n` +
      `💽 Uso después: *${formatBytes(bytesDespues)}*\n` +
      `📤 Espacio liberado: *${formatBytes(liberado)}*\n` +
      `📦 Límite de disco (Termux): *${limite}*`
    )

  } catch (err) {
    console.error("[CLEARCACHE ERROR]", err)
    reply('❌ Error al limpiar la caché.')
  }
  break


case 'creargp':

  if (args.length < 1) return reply(`use el comando asi nombre del gp|@tag miembro`);
  const argz = args[0].split('|');
  
  if (info.message.extendedTextMessage != undefined) {
    const mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid;

    if (mentioned.length > 0) {
      susune.groupCreate(argz[0], mentioned);
      reply(`Grupo creado con exito\n ${argz[0]}`);
    } else {
      reply('Menciona almenos un miembro.');
    }
  } else {
    reply('Ocurrio un error');
  }
  break;


case 'a': {
    const textoFinal = "💗 𝑯𝒐𝒍𝒂 𝒌𝒂𝒌𝒂𝒔𝒉𝒊 𝒆𝒔𝒕𝒐𝒚 𝑨𝒄𝒕𝒊𝒗𝒂";
    const delay = ms => new Promise(res => setTimeout(res, ms));

    let mensajeInicial = await susune.sendMessage(from, { text: textoFinal[0] });

    const letras = textoFinal.split("");
    let acumulado = "";

    for (let i = 0; i < letras.length; i++) {
        acumulado += letras[i];

        try {
            await delay(1300); // 1 segundo por edición, puedes probar con 1200ms si sigue fallando
            await susune.sendMessage(from, { text: acumulado, edit: mensajeInicial.key });
        } catch (error) {
            console.error("Error al editar:", error.message);

            // Si se supera el límite, terminar y enviar el texto completo como nuevo mensaje
            if (error.message.includes("rate-overlimit") || error.data === 429) {
                await susune.sendMessage(from, { text: textoFinal });
                break;
            }
        }
    }

    break;
}












case 'menu':
case 'help':
case 'Help':
case 'HELP':
case 'MENU':
case 'menus':
case 'Menu': {
 
    const now = new Date();
    const fecha = now.toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' });
    const hora = now.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    const bateria = Math.floor(Math.random() * 101);
let sender = info.key.participant || info.participant || info.remoteJid;
let mencionado = info.message.extendedTextMessage?.contextInfo?.mentionedJid;
let usuario = (mencionado && mencionado.length > 0) ? mencionado[0] : sender;
let miembro = groupMembers.find(member => member.id === usuario);
let nombreUsuario = miembro?.notify || miembro?.subject || usuario.split('@')[0];
let mentions = [usuario];
   const numero = sender.split('@')[0];
    const nacionalidad = getNationality(numero);
    // Obtener los datos del grupo
    const groupMetadata = await susune.groupMetadata(from);
    const groupAdmins = groupMetadata.participants
        .filter(participant => participant.admin === 'admin' || participant.admin === 'superadmin')
        .map(participant => participant.id);

    // Verificar si el usuario es admin o miembro
    const estadoUsuario = groupAdmins.includes(sender) ? 'Admin 🎖️' : 'Miembro 🥈';

    // Verificar estado del grupo (abierto o cerrado)
    const estadoGrupo = groupMetadata.announce ? 'Cerrado 🚫' : 'Abierto ✅';

    // Obtener el total de miembros
    const totalMiembros = groupMetadata.participants.length;

    // Determinar el puesto del usuario en el grupo
    const puesto = groupMetadata.participants.findIndex(participant => participant.id === sender) + 1;
    const groupName = isGroup ? groupMetadata.subject : ''
    const totalAdmins = getGroupAdmins(groupMembers).length;



    const menu = `
· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
💞 ¡𝐇𝐨𝐥𝐚!, @${usuario.split('@')[0]} 𝐁𝐢𝐞𝐧𝐯𝐞𝐧𝐢𝐝𝐨 𝐚 𝐦𝐢 𝐦𝐞𝐧𝐮....
┈┈┈┈┈┈┈┈┈┈┈-ˋˏ✄┈┈┈┈┈┈
｡˚ [🌹 𝗜𝗡𝗙𝗢 𝗨𝗦𝗘𝗥 🌹] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🍒⃟𝑵𝒐𝒎𝒃𝒓𝒆: @${usuario.split('@')[0]}
┃｡˚🍒⃟𝑷𝒖𝒆𝒔𝒕𝒐: *${estadoUsuario}*
┃｡˚🍒⃟𝑳𝒖𝒈𝒂𝒓: *${puesto}*
┃｡˚🍒⃟𝑫𝒊𝒔𝒑𝒐𝒔𝒊𝒕𝒊𝒗𝒐: *${deviceType}*
┃｡˚🍒⃟𝑵𝒂𝒄𝒊𝒐𝒏𝒂𝒍𝒊𝒅𝒂𝒅: *${nacionalidad}* 
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [🌐 𝗜𝗡𝗙𝗢 𝗚𝗣 🌐] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🍇⃟𝑵𝒐𝒎𝒃𝒓𝒆: *${groupName}*
┃｡˚🍇⃟𝑮𝒓𝒖𝒑𝒐: *${estadoGrupo}*
┃｡˚🍇⃟𝑴𝒊𝒆𝒎𝒃𝒓𝒐𝒔: *${totalMiembros}*
┃｡˚🍇⃟𝑭𝒆𝒄𝒉𝒂: *${hora}*
┃｡˚🍇⃟𝑨𝒅𝒎𝒊𝒏𝒔: *${totalAdmins}*
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [👑 𝗖𝗥𝗘𝗔𝗗𝗢𝗥 👑] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴠᴇʀ
┃｡˚🎀⃟.ᴠɪxʟɪɴᴋ
┃｡˚🎀⃟.ᴀᴘᴘʟᴇʟɪɴᴋ
┃｡˚🎀⃟.ᴅᴇᴇᴢᴇʀʟɪɴᴋ
┃｡˚🎀⃟.ᴅᴇᴇᴢᴇʀ
┃｡˚🎀⃟.ʙᴏᴛ ᴇɴᴛʀᴀʀ
┃｡˚🎀⃟.ʙᴏᴛ sᴀʟɪʀ
┃｡˚🎀⃟.ʙᴏᴛ ᴛɪᴇᴍᴘᴏ
┃｡˚🎀⃟.ᴘɪɴɢ
┃｡˚🎀⃟.ᴅᴀʀᴍᴏɴᴇᴅᴀs
┃｡˚🎀⃟.ǫᴜɪᴛᴀʀᴍᴏɴᴇᴅᴀs
┃｡˚🎀⃟.ᴅᴀʀᴅɪᴀᴍᴀɴᴛᴇs
┃｡˚🎀⃟.ǫᴜɪᴛᴀʀᴅɪᴀᴍᴀɴᴛᴇs
┃｡˚🎀⃟.ᴀᴜᴛᴏᴀᴅᴍɪɴ
┃｡˚🎀⃟.ᴀᴜᴛᴏǫᴜɪᴛᴀʀᴀᴅᴍɪɴ
┃｡˚🎀⃟.sᴘᴀᴍ
┃｡˚🎀⃟.ʟɪsᴛᴀʀᴇɢ
┃｡˚🎀⃟.ᴠᴀᴄɪᴀʀɴɪɴᴊᴀs
┃｡˚🎀⃟.ᴄᴏᴍᴀɴᴅᴏs
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [🔒 𝗔𝗗𝗠𝗜𝗡𝗦 🔒] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴅᴇʟᴇᴛ
┃｡˚🎀⃟.ᴛᴏᴅᴏs
┃｡˚🎀⃟.ɴᴏᴛɪғʏ
┃｡˚🎀⃟.ʟɪɴᴋɢᴘ
┃｡˚🎀⃟.ɪɴғᴏɢᴘ
┃｡˚🎀⃟.ᴇsᴛᴀᴅᴏ
┃｡˚🎀⃟.sᴏʀᴛᴇᴏ
┃｡˚🎀⃟.ɴᴏᴍʙʀᴇɢᴘ
┃｡˚🎀⃟.ᴍᴇxɪᴄᴀɴᴏs
┃｡˚🎀⃟.ᴘᴇʀᴜᴀɴᴏs
┃｡˚🎀⃟.ᴀᴅᴅ @ᴛᴀɢ
┃｡˚🎀⃟.ᴋɪᴄᴋ @ᴛᴀɢ
┃｡˚🎀⃟.ᴍᴜᴛᴇ @ᴛᴀɢ
┃｡˚🎀⃟.ғᴀɴᴛᴀsᴍᴀs
┃｡˚🎀⃟.ᴋɪᴄᴋғᴀɴᴛᴀsᴍᴀs
┃｡˚🎀⃟.ᴜɴᴍᴜᴛᴇ @ᴛᴀɢ
┃｡˚🎀⃟.ᴅᴇsᴄʀɪᴘᴄɪᴏɴ
┃｡˚🎀⃟.ɢʀᴜᴘᴏ ᴀʙʀɪʀ
┃｡˚🎀⃟.ɢʀᴜᴘᴏ ᴄᴇʀʀᴀ
┃｡˚🎀⃟.ᴅᴀʀᴀᴅᴍɪɴ @ᴛᴀɢ
┃｡˚🎀⃟.ǫᴜɪᴛᴀʀᴀᴅᴍɪɴ @ᴛᴀɢ
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [🌸 𝗔𝗖𝗧𝗜𝗩𝗔𝗗𝗢𝗥𝗘𝗦 🌸] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.sɪᴍɪ ᴏɴ
┃｡˚🎀⃟.sɪᴍɪ ᴏғғ
┃｡˚🎀⃟.ᴡᴇʟᴋᴏᴍ ᴏɴ
┃｡˚🎀⃟.ᴡᴇʟᴋᴏᴍ ᴏғғ
┃｡˚🎀⃟.ᴀɴᴛɪʟɪɴᴋ ᴏɴ
┃｡˚🎀⃟.ᴀɴᴛɪʟɪɴᴋ ᴏғғ
┃｡˚🎀⃟.ᴀɴᴛɪsᴘᴀᴍ ᴏɴ
┃｡˚🎀⃟.ᴀɴᴛɪsᴘᴀᴍ ᴏғғ
┃｡˚🎀⃟.ᴀɴᴛɪᴛᴏxɪᴄ ᴏɴ
┃｡˚🎀⃟.ᴀɴᴛɪᴛᴏxɪᴄ ᴏғғ
┃｡˚🎀⃟.ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ ᴏɴ
┃｡˚🎀⃟.ᴀɴᴛɪᴘʀɪᴠᴀᴅᴏ ᴏғғ
┃｡˚🎀⃟.ᴀᴜᴛᴏʟɪɴᴋɪᴍɢ ᴏɴ
┃｡˚🎀⃟.ᴀᴜᴛᴏʟɪɴᴋɪᴍɢ ᴏғғ
┃｡˚🎀⃟.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ ᴏɴ
┃｡˚🎀⃟.ᴀᴜᴛᴏsᴛɪᴄᴋᴇʀ ᴏғғ
┃｡˚🎀⃟.ᴀɴᴛɪғᴀɴᴛᴀsᴍᴀ ᴏɴ
┃｡˚🎀⃟.ᴀɴᴛɪғᴀɴᴛᴀsᴍᴀ ᴏғғ
╰╼━═━━≺✨≻━━═━╾╯
｡˚ [🌺 𝗚𝗥𝗨𝗣𝗢 🌺] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.s
┃｡˚🎀⃟.ǫᴄ
┃｡˚🎀⃟.s2
┃｡˚🎀⃟.ʜᴅ
┃｡˚🎀⃟.ʀᴇɢ
┃｡˚🎀⃟.ᴘᴇʀғɪʟ
┃｡˚🎀⃟.ᴛᴏɪᴍɢ
┃｡˚🎀⃟.ᴅᴇʟʀᴇɢ
┃｡˚🎀⃟.ᴍʏɴɪᴠᴇʟ
┃｡˚🎀⃟.ʟɪɴᴋɪᴍɢ
┃｡˚🎀⃟.sᴄɪʀᴄʟᴇ
┃｡˚🎀⃟.ɴɪᴄᴋɢᴇɴ
┃｡˚🎀⃟.ᴄᴀʀᴛᴇʀᴀ
┃｡˚🎀⃟.ᴀɴᴛɪғᴀᴋᴇ
┃｡˚🎀⃟.ᴄᴀʟᴄᴜʟᴀʀ
┃｡˚🎀⃟.ғᴀᴋᴇᴄʜᴀᴛ
┃｡˚🎀⃟.ᴄᴀʟᴄᴜʟᴀᴅᴏʀᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [📃 𝗟𝗜𝗦𝗧𝗔𝗦 📃] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ʟɪsᴛᴀʀᴇɢ
┃｡˚🎀⃟.ʟɪsᴛᴀғᴀᴋᴇ
┃｡˚🎀⃟.ʟɪsᴛᴀɴɪᴍᴇ
┃｡˚🎀⃟.ᴀᴅᴍɪɴʟɪsᴛ
┃｡˚🎀⃟.ʟɪsᴛᴀᴍᴜᴛᴇ
┃｡˚🎀⃟.ʟɪsᴛᴀᴛᴏxɪᴄ
┃｡˚🎀⃟.ʟɪsᴛᴀᴀɴᴛɪғᴀᴋᴇ
┃｡˚🎀⃟.ʟɪsᴛᴀᴀɴᴛɪғᴀɴᴛᴀsᴍᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [📥 𝗗𝗘𝗦𝗖𝗔𝗥𝗚𝗔𝗦 📥] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ʏᴛ
┃｡˚🎀⃟.ᴀᴘᴋ
┃｡˚🎀⃟.ᴘʟᴀʏ
┃｡˚🎀⃟.ᴍᴇɢᴀ
┃｡˚🎀⃟.ᴛɪᴋᴛᴏᴋ
┃｡˚🎀⃟.sᴘᴏᴛɪғʏ
┃｡˚🎀⃟.ʏᴛᴍᴜsɪᴄᴀ
┃｡˚🎀⃟.ғᴀᴄᴇʙᴏᴏᴋ
┃｡˚🎀⃟.ᴍᴇᴅɪᴀғɪʀᴇ
┃｡˚🎀⃟.ɪɴsᴛᴀɢʀᴀᴍ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🔍 𝗕𝗨𝗦𝗖𝗔𝗗𝗢𝗥𝗘𝗦 🔎] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ɢᴏᴏɢʟᴇ
┃｡˚🎀⃟.ᴄʜʀᴏᴍᴇ
┃｡˚🎀⃟.ᴘᴇʟɪᴄᴜʟᴀs
╰╼━═━━≺✨≻━━═━╾╯
˚ [🖼️ 𝗜𝗠𝗔𝗚𝗘𝗡𝗘𝗦 🖼️] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ʟᴏʟɪ
┃｡˚🎀⃟.ᴘʟᴀǫ
┃｡˚🎀⃟.ɴᴇᴋᴏ
┃｡˚🎀⃟.ᴘᴀɴᴛɪ
┃｡˚🎀⃟.ᴛᴇᴛᴀs
┃｡˚🎀⃟.ᴡᴀɪғᴜ
┃｡˚🎀⃟.ᴘᴜssʏ
┃｡˚🎀⃟.ʜᴇɴᴛᴀɪ
┃｡˚🎀⃟.ɪᴍᴀɢᴇɴ
┃｡˚🎀⃟.ᴄᴏsᴘʟᴀʏ
┃｡˚🎀⃟.ʟᴇsʙɪᴀɴᴀ
┃｡˚🎀⃟.ᴘɪɴᴛᴇʀᴇsᴛ
╰╼━═━━≺✨≻━━═━╾╯
˚ [⚙️ 𝗛𝗘𝗥𝗥𝗔𝗠𝗜𝗘𝗡𝗧𝗔𝗦 ⚙️] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ɪᴀ
┃｡˚🎀⃟.ɢᴘᴛ
┃｡˚🎀⃟.ᴄʜᴀᴛɢᴘᴛ
┃｡˚🎀⃟.ᴅᴇᴇᴘsᴇᴇᴋ
╰╼━═━━≺✨≻━━═━╾╯
˚ [💳 𝗕𝗜𝗡𝗡𝗜𝗡𝗚 💳] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ɪᴘ <sᴇʀɪᴇ>
┃｡˚🎀⃟.ʙɪɴ <6 ᴅɪɢɪᴛᴏs>
┃｡˚🎀⃟.ɢᴇɴ <ᴇxᴛʀᴀ>
┃｡˚🎀⃟.ᴇxᴛʀᴀ <ʙɪɴ>
┃｡˚🎀⃟.ɴᴋs <ᴄᴄs>
┃｡˚🎀⃟.ɢᴍᴀɪʟ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🔊 𝗘𝗙𝗘𝗖𝗧𝗢𝗦 𝗗𝗘 𝗩𝗢𝗭 🔊] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴍᴀsᴄ
┃｡˚🎀⃟.ɢʀᴀᴠᴇ
┃｡˚🎀⃟.ɪɴғᴀɴᴛɪʟ
┃｡˚🎀⃟.ɴɪɢʜᴛᴄᴏʀᴇ
┃｡˚🎀⃟.ɴɪɢʜᴛᴄᴏʀᴇ2
┃｡˚🎀⃟.ɴɪɢʜᴛᴄᴏʀᴇ3
┃｡˚🎀⃟.ɴɪɢʜᴛᴄᴏʀᴇ4
╰╼━═━━≺✨≻━━═━╾╯
˚ [🎖️ 𝗣𝗥𝗘𝗠𝗜𝗨𝗠 🎖️] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
┃｡˚🎀⃟.ɴᴏ ᴅɪsᴘᴏɴɪʙʟᴇ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🎫 𝗝𝗨𝗘𝗚𝗢𝗦 𝗥𝗣𝗚 🎫] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴄʟᴀɪᴍᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ɢᴜᴀʀᴅᴀʀᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ᴠᴇʀᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ʟɪsᴛᴀᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ᴠᴇɴᴅᴇʀᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ʙᴜʏᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ʟɪsᴛᴀʙᴜʏᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ᴅᴇʟᴘᴇʀsᴏɴᴀᴊᴇ
┃｡˚🎀⃟.ᴛᴏᴘᴘᴇʀsᴏɴᴀᴊᴇs
┃｡˚🎀⃟.ʀᴏʙᴀʀᴘᴇʀsᴏɴᴀᴊᴇ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🌀 𝗡𝗔𝗥𝗨𝗧𝗢 𝗥𝗣𝗚 🌀] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.sᴇʀ ɴɪɴᴊᴀ
┃｡˚🎀⃟.ᴀᴄᴇᴘᴛᴀʀɴɪɴᴊᴀ
┃｡˚🎀⃟.ᴠᴇʀɴɪɴᴊᴀ
┃｡˚🎀⃟.ᴅᴇʟɴɪɴᴊᴀ
┃｡˚🎀⃟.ᴠᴀᴄɪᴀʀɴɪɴᴊᴀs
┃｡˚🎀⃟.ʟɪsᴛᴀɴɪɴᴊᴀ
┃｡˚🎀⃟.ʟɪʙʀᴏʙɪɴɢᴏ
┃｡˚🎀⃟.ɴɪᴠᴇʟᴜᴘ
┃｡˚🎀⃟.ᴍɪsɪᴏɴᴇs
┃｡˚🎀⃟.sᴀɴᴀʀ
┃｡˚🎀⃟.ᴅᴇsᴄᴀɴsᴀʀ
┃｡˚🎀⃟.ʀᴇᴛᴀʀᴘᴇʟᴇᴀ
┃｡˚🎀⃟.ᴀᴄᴇᴘᴛᴀʀᴘᴇʟᴇᴀ
┃｡˚🎀⃟.ᴜɴɪʀᴍᴇ
┃｡˚🎀⃟.ᴘᴇʟᴇᴀ
┃｡˚🎀⃟.ᴄᴀɴᴄᴇʟᴀʀᴘᴇʟᴇᴀ
┃｡˚🎀⃟.sᴛᴀᴛsᴘᴇʟᴇᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [😈 𝗜𝗡𝗩𝗢𝗖𝗔𝗖𝗜𝗢𝗡 𝗥𝗣𝗚 😈] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ɪɴᴠᴏᴄᴀʀ ғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ғɪʀᴍᴀʀᴄᴏɴᴛʀᴀᴛᴏ
┃｡˚🎀⃟.ᴠᴇʀғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ᴛᴏᴘғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ʟɪsᴛᴀғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ᴄᴜʀᴀʀғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.sᴜʙɪʀɴɪᴠᴇʟ
┃｡˚🎀⃟.ᴅᴇsᴀғɪᴀʀ
┃｡˚🎀⃟.ᴀᴄᴇᴘᴛᴀʀᴅᴜᴇʟᴏ
┃｡˚🎀⃟.ʟʟᴀᴍᴀʀғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ᴀᴛᴀᴄᴀʀғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ᴄᴏɴᴛʀᴀᴛᴏғᴀᴍɪʟɪᴀʀ
┃｡˚🎀⃟.ʀᴇᴄʜᴀᴢᴀʀ
┃｡˚🎀⃟.ᴍᴀsᴍᴏʀʀᴀ ᴏɴ
┃｡˚🎀⃟.ᴍᴀsᴍᴏʀʀᴀ ᴏғғ
┃｡˚🎀⃟.ᴄᴀɴᴄᴇʟᴀʀ
┃｡˚🎀⃟.ᴇɴғʀᴇɴᴛᴀʀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🎮 𝗝𝗨𝗘𝗚𝗢𝗦 🎮] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴘᴘᴛ
┃｡˚🎀⃟.ᴅᴀᴅᴏ
┃｡˚🎀⃟.ᴄʟᴀɪᴍ
┃｡˚🎀⃟.ᴄᴏғʀᴇ
┃｡˚🎀⃟.ᴍɪɴᴀʀ
┃｡˚🎀⃟.ʀᴏʙᴀʀ
┃｡˚🎀⃟.ᴄᴀʀᴛᴀs
┃｡˚🎀⃟.ᴀɴɪᴍᴀʟ
┃｡˚🎀⃟.ʟᴏᴛᴇʀɪᴀ
┃｡˚🎀⃟.ᴄᴀʀʀᴇʀᴀ
┃｡˚🎀⃟.ᴛʀᴀʙᴀᴊᴀʀ
┃｡˚🎀⃟.ᴀʜᴏʀᴄᴀᴅᴏ
┃｡˚🎀⃟.ᴀᴅɪᴠɪɴᴀɴᴢᴀ
┃｡˚🎀⃟.ʀᴜʟᴇᴛᴀʀᴜsᴀ
┃｡˚🎀⃟.ᴀᴅɪᴠɪɴᴀᴍᴜsɪᴄᴀ
┃｡˚🎀⃟.ᴀᴅɪᴠɪɴᴀᴘᴇʟɪᴄᴜʟᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🧩 𝗝𝗨𝗘𝗚𝗢𝗦 @𝗧𝗔𝗚 🧩] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴠɪᴏʟᴀʀ
┃｡˚🎀⃟.ᴄᴏɢᴇʀ
┃｡˚🎀⃟.ғᴏʟʟᴀʀ
┃｡˚🎀⃟.ᴄʜᴜᴘᴀʀᴛᴇᴛᴀ
┃｡˚🎀⃟.ᴄʜᴜᴘᴀʀᴘᴇɴᴇ
┃｡˚🎀⃟.ᴄʜᴜᴘᴀʀᴠᴀɢɪɴᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🎭 𝗧𝗢𝗣𝗦 🎭] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ᴛᴏᴘ ɢᴀʏ
┃｡˚🎀⃟.ᴛᴏᴘ ғᴇᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ғɪᴇʟ
┃｡˚🎀⃟.ᴛᴏᴘ ᴠᴀɢᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ʟɪɴᴅᴀ/ᴏ
┃｡˚🎀⃟.ᴛᴏᴘ ᴛᴏɴᴛᴀ/ᴏ
┃｡˚🎀⃟.ᴛᴏᴘ ᴛᴏxɪᴄᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ғʀᴇsᴀs
┃｡˚🎀⃟.ᴛᴏᴘ ᴏᴛᴀᴋᴜs
┃｡˚🎀⃟.ᴛᴏᴘ ᴜʀɢɪᴅᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ᴘɪᴛᴜᴅᴏs
┃｡˚🎀⃟.ᴛᴏᴘ ᴘᴇɴᴅᴇᴊᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ғᴄᴀʜᴇʀᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ʜᴇʀᴍᴏsᴀ/ᴏ
┃｡˚🎀⃟.ᴛᴏᴘ ᴄᴜᴇʀɴᴜᴅᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ᴄᴀᴄʜᴏɴᴅᴀ/ᴏ
┃｡˚🎀⃟.ᴛᴏᴘ ʙᴏʀʀᴀᴄʜᴏ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ᴅᴏʀᴍɪʟᴏɴ/ᴀ
┃｡˚🎀⃟.ᴛᴏᴘ ɪɴᴛᴇʟɪɢᴇɴᴛᴇ
┃｡˚🎀⃟.ᴛᴏᴘ ᴛʀᴀʙᴀᴊᴀᴅᴏʀ/ᴀ
╰╼━═━━≺✨≻━━═━╾╯
˚ [🎱 𝗘𝗫𝗧𝗥𝗔𝗦 🎱] ｡˚
╭•✨╼━━≺✨≻━━╾✨•╮
┃｡˚🎀⃟.ʀᴇᴘᴏʀᴛᴇ
┃｡˚🎀⃟.ᴏᴡɴᴇʀ
┃｡˚🎀⃟.ᴘʀᴜᴇʙᴀ
┃｡˚🎀⃟.ᴄʀᴇᴀᴅᴏʀ
╰╼━═━━≺✨≻━━═━╾╯
· · · · · · · · · • • • 🌸 • • • · · · · · · · · ·
*${botname}*
    `;

    susune.sendMessage(from, { react: { text: `❤`, key: info.key } });
    await new Promise(resolve => setTimeout(resolve, 700));

    // Enviar imagen
    const files = ['menu.jpeg'];
    const path = './archivos/fotos/';
    const randomIndex = Math.floor(Math.random() * files.length);
    const randomImage = files[randomIndex];
    const sendMessage = {
        image: fs.readFileSync(`${path}${randomImage}`),
        caption: menu,
        mentions: mentions
};

    
    await susune.sendMessage(from, sendMessage);

    // Enviar audio
    const audioPath = './archivos/audios/bye.mp3'; // Ruta del archivo de audio
    const sendAudio = {
        audio: fs.readFileSync(audioPath),
        mimetype: 'audio/mp4', // Cambia a 'audio/ogg; codecs=opus' si es un archivo OGG
        ptt: true, // Cambiar a false si no es un audio tipo nota de voz
    };
    await susune.sendMessage(from, sendAudio);
}
break;




//---------Comandos Sin Prefijos---------------//
default:


if (/((https?:\/\/|www\.|t\.me\/|wa\.me\/|bit\.ly\/|tinyurl\.com\/|mega\.nz\/|drive\.google\.com\/|mediafire\.com\/|we\.tl\/|dropbox\.com\/|github\.com\/|pastebin\.com\/|facebook\.com\/|instagram\.com\/|twitter\.com\/|x\.com\/|youtube\.com\/|youtu\.be\/|tiktok\.com\/|snapchat\.com\/|discord\.gg\/|twitch\.tv\/|kick\.com\/|open\.spotify\.com\/|soundcloud\.com\/|telegram\.org\/|steamcommunity\.com\/|roblox\.com\/|epicgames\.com\/|playstation\.com\/|xbox\.com\/|amazon\.com\/|mercadolibre\.(com|com\.mx|com\.ar|com\.co)\/|ebay\.com\/|paypal\.com\/|linktr\.ee\/)\S+)/i.test(body)) {
if (!isGroup) return;
if (!isAntiLink) return;
if (sender === botNumber) return;
if (isGroupAdmins) return enviar(`*🌷 𝙲𝙾𝙼𝙾 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙽𝙾 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾.*`);
if (!isBotGroupAdmins) return enviar(`*🌷 𝙲𝙾𝙼𝙾 𝙰𝙳𝙼𝙸𝙽𝙸𝚂𝚃𝚁𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙶𝚁𝚄𝙿𝙾 𝙽𝙾 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾.*`);
var Kick = `${sender.split("@")[0]}@s.whatsapp.net`;
setTimeout(() => {
enviar(`*🌸 ¡𝙷𝙾𝙻𝙰!,*   ${pushname}\n\n🎀 *𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙴𝙽𝚅𝙸𝙰𝚁 𝙴𝙽𝙻𝙰𝙲𝙴𝚂, 𝙿𝙾𝚁 𝙻𝙾 𝚃𝙰𝙽𝚃𝙾 𝚂𝙴𝚁𝙰𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾.*`);
}, 100);
await susune.groupParticipantsUpdate(from, [Kick], 'remove');
susune.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: [sender] } });
setTimeout(() => {
enviar(`*🌹 𝙴𝙽𝙻𝙰𝙲𝙴 𝙳𝙴𝚃𝙴𝙲𝚃𝙰𝙳𝙾, 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙰𝙼𝙴𝙽𝚃𝙴.*`);
}, 100);
}

if (isGroup && autosticker.includes(from)) {
    if (isImage || isQuotedImage || (info.message.viewOnceMessage && info.message.viewOnceMessage.message.imageMessage)) {
        const { exec } = require('child_process');
        const fs = require('fs');
        const path = require('path');
        let media;
        let type;

        if (isQuotedImage || isImage) {
            media = isQuotedImage ? quoted.message.imageMessage : info.message.imageMessage;
            type = 'image';
        } else if (info.message.viewOnceMessage) {
            media = info.message.viewOnceMessage.message.imageMessage;
            type = 'image';
        }

        // Función para procesar la imagen después de un intervalo aleatorio
        const processImage = async () => {
            let buffer = await getFileBuffer(media, type);
            const tempFolderPath = path.join(__dirname, 'temp');
            if (!fs.existsSync(tempFolderPath)) fs.mkdirSync(tempFolderPath);

            let inputPath = path.join(tempFolderPath, `media-${Date.now()}.${type === 'image' ? 'png' : 'mp4'}`);
            let outputPath = inputPath.replace(/\.(png|mp4)$/, '.webp');

            fs.writeFileSync(inputPath, buffer);

            let command = `ffmpeg -i ${inputPath} -vf "scale=512:512:force_original_aspect_ratio=decrease" -q:v 20 ${outputPath}`;

            exec(command, (err) => {
                if (err) {
                    console.error("❌ Error al convertir a sticker:", err);
                    return;
                }

                let webpBuffer = fs.readFileSync(outputPath);
                susune.sendMessage(from, { sticker: webpBuffer }, { quoted: info });

                fs.unlinkSync(inputPath);
                fs.unlinkSync(outputPath);
            });
        };

        // Establecer un intervalo aleatorio de 2 a 3 segundos
        const delay = Math.floor(Math.random() * (3000 - 2000 + 1)) + 2000;
        setTimeout(processImage, delay);
    }
}




if (body.toUpperCase().startsWith('HOLA')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡Hola! ¿Cómo estás?'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('BOT')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡Hola! ¿Cómo puedo ayudarte hoy?'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('HELP')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡Hola!, soy un bot y estoy para servirte, si quieres ver el menu de comandos escribe *.ᴍᴇɴᴜ*'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('PENE')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: 'Wtf!!! ¿enserio quieres pene?, ¿te lo empacó para llevar o para comer aqui?'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('GRACIAS')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: 'Dé nada preciosura, fue un placer poder interactuar contigo.'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('BIEN')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: 'Que bueno que estes bien, me da gusto por ti'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('MAL')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡Oh!, en serió es una lástima pero no te pongas triste, veras que todo va a salir bien. "Mucho animo"'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('CALLATE')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: 'Hey, tranquila pequeña, ¿Por qué estas brava? yo no tengo la culpa dé qué te abandonarán'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('PUTO')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡JA,JA,JA!, lo suponía eres una completa marica.'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}

if (body.toUpperCase().startsWith('PERDIMOS')) {
  // Asegúrate de enviar el texto dentro de un objeto adecuado
  const messageContent = {
    text: '¡Auch!, qué mal qué hallan perdido, pero no te desanimes almenos lo intentaron y la próxima vez les irá mucho mejor.'
  };

  susune.sendMessage(from, messageContent, { quoted: info });
}



if (body.toUpperCase().startsWith('GEMIR')) {
  // Enviar archivo de audio si la condición se cumple
  const audioContent = { 
    audio: fs.readFileSync('./archivos/audios/a.mp3') 
  };

  susune.sendMessage(from, audioContent, { mimetype: 'audio/mpeg', quoted: info });
}

if (body.toUpperCase().startsWith('ADIOS')) {
  // Enviar archivo de audio si la condición se cumple
  const audioContent = { 
    audio: fs.readFileSync('./archivos/audios/adios.mp3') 
  };

  susune.sendMessage(from, audioContent, { mimetype: 'audio/mpeg', quoted: info });
}

if (body.toUpperCase().startsWith('ADÍOS')) {
  // Enviar archivo de audio si la condición se cumple
  const audioContent = { 
    audio: fs.readFileSync('./archivos/audios/adios.mp3') 
  };

  susune.sendMessage(from, audioContent, { mimetype: 'audio/mpeg', quoted: info });
}




//NO PASAR DE.AQUI
} 


 
 
 
 
 
 
 
 } catch (e) {
 e = String(e)
if (!e.includes("this.isZero") && !e.includes("Could not find MIME for Buffer <null>") && !e.includes("Cannot read property 'conversation' of null") && !e.includes("Cannot read property 'contextInfo' of undefined") && !e.includes("Cannot set property 'mtype' of undefined") && !e.includes("jid is not defined")) {
console.log('Error : %s', color(e, 'yellow'))
}
 
 
}




})





    
}

startProo()
