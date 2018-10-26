$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    //back-end logic begin
    var name = $("#name").val();
    var number = Math.abs($("#number").val());
    var track = $("#track").val();
    //check the name to be a real name
    if (name.match(/^[a-zA-Z]+$/)){

      var beepArray = [];
      //create array
      for (var i=0;i<=number;i++){
        beepArray[i]= i.toString();
        //check the most important condition
        if (i>0 && i%3==0) {
          beepArray[i] = "I'm sorry, "+name+". I'm afraid I can't do that.";
        };
        //check second condition
        if (beepArray[i].match(/1/)) {
          beepArray[i] = "Boop!";
        };
        //check lost condition
        if (beepArray[i].match(/0/)) {
          beepArray[i] = "Beep!";
        };
      };
      //reverse the array if backward was choosed
      if (track==1) {
        beepArray = beepArray.reverse();
      };
      //back-end logic finish
      //front-end begin
      $(".container").hide();
      $(".show").show();
      //define a counter to count elements of array
      counter=0;
      //put a callback function with the intervall to run animation every 1 sec
      setTimeout(anim(beepArray),1000);
    } else {
      alert("Enter a real name");
    };
  });
});
//callback function to call itself after running animation
function anim(beepArray){
  //fade element in 0.5 sec
  $('#element').animate({ opacity: 0 }, 500,function(){
    //four condition to change background color depend on the type of elements
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
      $(document.body).removeClass();
      $(document.body).addClass("dont");
    }
    //show elementss in a row
    $('#element').text(beepArray[counter]);
    //show element in .1 sec
    $('#element').animate({ opacity: 1 }, 100,function(){
      //go to next element
      counter++;
      //return if the last element was shown
      if(counter > beepArray.length-1){
        return
      };
      //fade element in 0.4 sec again and callback the function after animation was shown
      $('#element').animate({ opacity: 0}, 400,function(){
        setTimeout(anim(beepArray),1000);
      });
    });
  });
};
