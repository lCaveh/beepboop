$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    var number = $("#number").val();
    var initialArray = []
    for (var i=0;i<=number;i++){
      initialArray[i]= i;
    };




  });
});
