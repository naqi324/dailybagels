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
    var phoneNum = req.param("phoneNum");
    Friend.findByPhoneNum(phoneNum).done(function(err, usr) {
      if (err) {
        res.send(500, {
          error: "DB Error"
        });
      } else if (usr) {
        res.send(400, {
          error: "Phone number already registered"
        });
      } else {
        Friend.create({
          phoneNum: phoneNum
        }).done(function(error, phoneNum) {
          if (error) {
            res.send(500, {
              error: "DB Error"
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
