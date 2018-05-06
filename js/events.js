//define functions here

$(document).ready(function(){

// call functions here
getIt()

});

function getIt(){
  $('p').on("click", function(){
    alert("Hey!")
  })  
}

function frameIt(){
  $('.tasty').on("load", function(){
    //add red frame
  })  
  
function pressIt(){
  $('#typing').on("keydown", function(key){
  if (key.which ==71){
    alert('G was pressed');
  }
  }) 
}

function submitIt(){
  $('.tasty').on("load", function(){
    alert()
  })  
