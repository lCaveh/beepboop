$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var BeepArray = []
    for (var i=0;i<=number;i++){
      BeepArray[i]= i.toString();
      if (i>0 && i%3==0) {
        BeepArray[i] = "I'm sorry, "+name+". I'm afraid I can't do that."
      };
      if (BeepArray[i].match(/1/)) {
        BeepArray[i] = "Boop!"
      };
      if (BeepArray[i].match(/0/)) {
        BeepArray[i] = "Beep!"
      };
    };
  });
});
