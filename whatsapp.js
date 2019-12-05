const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: '6cd2b74c',
  apiSecret: 'HfeJ4VERcIR4M9xF'

})

nexmo.channel.send(
  { "type": "whatsapp", "number": "917598412387" },
  { "type": "whatsapp", "number": "917598412387" },
  {
    "content": {
      "type": "text",
      "text": "This is a WhatsApp Message sent from the Messages API"
    }
  },
  (err, data) => { console.log(data.message_uuid); }
);