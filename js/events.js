//define functions here

$(document).ready(function(){

// call functions here
getIt()
frameIt()
pressIt()
submitIt()
});

function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })  
}

function frameIt(){
  $('.tasty').on("load", function(){
    $('.tasty').style.border='2px solid red'
  })  
}
  
function pressIt(){
  $('#typing').on("keydown", function(key){
  if (key.which ==71){
    alert('G was pressed');
  }
  }) 
}

function submitIt(){
  $('form').on("submit", function(){
    alert("Your form is going to be submitted now.")
  })  
}
