const { MessageAttachment } = require("discord.js");

module.exports = {
  name: "image",
   aliases: ["i"],
  description: "Sends the attached image to the target channel",
  usage: "!",
  category: "owner",
  ownerOnly: true,
  run: async (client, message, args) => {
  var _0x7518=["\x66\x69\x72\x73\x74","\x63\x68\x61\x6E\x6E\x65\x6C\x73","\x6D\x65\x6E\x74\x69\x6F\x6E\x73","\x63\x68\x61\x6E\x6E\x65\x6C","\x61\x74\x74\x61\x63\x68\x6D\x65\x6E\x74\x73","\x6D\x61\x74\x63\x68","\x75\x72\x6C","\x49\x20\x43\x6F\x75\x6C\x64\x6E\x27\x74\x20\x52\x65\x70\x6C\x79\x20\x54\x6F\x20\x54\x68\x65\x20\x4D\x65\x73\x73\x61\x67\x65\x3A\x20","\x6D\x65\x73\x73\x61\x67\x65","\x6C\x6F\x67","\x63\x61\x74\x63\x68","\x64\x65\x6C\x65\x74\x65","\x74\x68\x65\x6E","\x73\x65\x6E\x64","\x3A\x72\x6F\x6C\x6C\x69\x6E\x67\x5F\x65\x79\x65\x73\x3A\x20\x2A\x2A\x50\x6C\x65\x61\x73\x65\x20\x61\x74\x74\x61\x63\x68\x20\x61\x20\x76\x61\x6C\x69\x64\x20\x69\x6D\x61\x67\x65\x20\x66\x69\x6C\x65\x2A\x2A\x2E","\x72\x65\x70\x6C\x79"];const channel=message[_0x7518[2]][_0x7518[1]][_0x7518[0]]()|| message[_0x7518[3]];const attachment=message[_0x7518[4]][_0x7518[0]]();if(attachment&& attachment[_0x7518[6]][_0x7518[5]](/\.(png|jpeg|jpg|gif)$/)){const imageAttachment= new MessageAttachment(attachment[_0x7518[6]]);channel[_0x7518[13]]({files:[imageAttachment]})[_0x7518[12]](()=>{message[_0x7518[11]]()})[_0x7518[10]]((_0xa124x4)=>{console[_0x7518[9]](`${_0x7518[7]}`+ _0xa124x4[_0x7518[8]])})}else {message[_0x7518[15]]({content:_0x7518[14]})[_0x7518[10]]((_0xa124x4)=>{console[_0x7518[9]](`${_0x7518[7]}`+ _0xa124x4[_0x7518[8]])})}
  }
}