/* @flow */
/**
 * MainController
 *
 * @description :: Server-side logic for managing mains
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  index: function(req, res) {
    res.view();
  },
  signup: function(req, res) {
    var phoneNum = req.param('phoneNum');
    Friend.findOne({phoneNum: phoneNum}, function(err, usr) {
      if (err) {
        res.set('error', 'DB Error');
        res.send(500, {
          error: 'DB Error'
        });
      } else if (usr) {
        res.set('error', 'Phone number already registered');
        res.send(400, {
          error: 'Phone number already registered'
        });
      } else {
        Friend.create({
          phoneNum: phoneNum
        }).exec(function(error, phoneNum) {
          if (error) {
            res.set('error', 'DB Error');
            res.send(500, {
              error: 'DB Error'
            });
          } else {
            req.session.user = phoneNum;
            res.send(phoneNum);
          }
        });
      }
    });
  },

};
