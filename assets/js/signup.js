/* @flow */
$(document).ready(function() {
  $("#signup").click(function() {
    var phoneNum = $("#phone_us").val();
    $.post(
      '/signup', {
        phoneNum: phoneNum
      }
    ).fail(function(res) {
      alert("Error: " + res.getResponseHeader("error"));
    });
  });
});
