let handler = function (m) {
	this.sendContact(m.chat, '60128422518', 'Owner SenBotz :)', m)
}

handler.customPrefix = ['🍭Owner Jalel'] 
handler.command = new RegExp

module.exports = handler