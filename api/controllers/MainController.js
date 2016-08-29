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

  hooray: function(req, res) {
    res.view();
  },

  signup: function(req, res) {
    var phoneNum = req.param('tel');
    Friend.findOne({
      phoneNum: phoneNum
    }).exec(function(err, usr) {
      if (err) {
        req.addFlash('error', 'DB Error 1');
        return res.redirect('/');
      } else if (usr) {
        req.addFlash('error', 'Phone number already registered');
        return res.redirect('/');
      } else {
        Friend.create({
          phoneNum: phoneNum
        }).exec(function(error, phoneNum) {
          if (error) {
            req.addFlash('error', 'DB error 2');
            console.log('2');
            return res.redirect('/');
          } else {
            return res.redirect('/hooray');
          }
        });
      }
    });
  }

};
