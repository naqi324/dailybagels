/* @flow */
$(document).ready(function(){

  $("#signup").click(function() {
    var phoneNum = $("#phone_us").val();
    window.alert(phoneNum);
    /*
    $.post(
      window.alert(phoneNum),
    ).fail(function(res) {
      alert("Error: " + res.getResponseHeader("error"));
    });*/
  });
});
