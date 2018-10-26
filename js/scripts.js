$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var track = $("#track").val();
    var beepArray = []
    for (var i=0;i<=number;i++){
      beepArray[i]= i.toString();
      if (i>0 && i%3==0) {
        beepArray[i] = "I'm sorry, "+name+". I'm afraid I can't do that."
      };
      if (beepArray[i].match(/1/)) {
        beepArray[i] = "Boop!"
      };
      if (beepArray[i].match(/0/)) {
        beepArray[i] = "Beep!"
      };
    };
    if (track==1) {
      beepArray = beepArray.reverse();
    };
    $(".container").hide();
    $(".show").show();

  counter=0
  setTimeout(anim(beepArray),1000);
    console.log(beepArray)
  });
});
function anim(beepArray){
  $('#element').animate({ opacity: 0 }, 500,function(){
    if (beepArray[counter]==="Beep!"){
      $(document.body).removeClass();
      $(document.body).addClass("beep");
    } else if (beepArray[counter]==="Boop!"){
      $(document.body).removeClass();
      $(document.body).addClass("boop");
    } else if (beepArray[counter].match(/[1-9]/)){
      $(document.body).removeClass();
      $(document.body).addClass("num");
    } else {
      console.log("no")
      $(document.body).removeClass();
      $(document.body).addClass("dont");
    }
    $('#element').text(beepArray[counter])
    $('#element').animate({ opacity: 1 }, 100,function(){
      counter++;
      if(counter > beepArray.length-1){
        return
      };
      $('#element').animate({ opacity: 0}, 400,function(){
        setTimeout(anim(beepArray),1000);
      });
    });
  });
}
