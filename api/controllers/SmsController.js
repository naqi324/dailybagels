/* @flow */
/**
 * SmsController
 *
 * @description :: Server-side logic for managing sms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
  incoming: function(req, res) {
    console.log(req.body);

  },

  outgoing: function(req, res) {
    var twilio_config = sails.config.twilio;
    //console.log(twilio_config);
    //console.log(sails.config.twilio);

    /*twilio.config.update({
    	accountSid: twilio_config.account_sid,
    	authToken: twilio_config.auth_token
    });*/

    var twilio = require('twilio');
    var client = new twilio.RestClient(twilio_config.account_sid, twilio_config.auth_token);

    //console.log(twilio_config.account_sid)

    client.messages.create({
        to: '+14152714735',
				// live from number
				//from: '+19177465805',

				// test from number
				from: '+15005550006',
				body: 'woof woof baby',
        mediaUrl: 'https://c8.staticflickr.com/9/8147/29068997791_9bcb45b650_k.jpg'
      },
      function(err, message) {
        if (err) {
          console.log(err);
        } else {
          console.log(message.sid);
        }

      });

  }
};
