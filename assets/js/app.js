// sanity check
console.log("app.js linked.");
var contactList = $('<div class="contacts"><p><a href="mailto:johnson.rl@gmail.com">Email</a></p><p><a href="#">Linked In</a></p><p><a href="https://github.com/johnson-rl">Github</a></p></div>');
function aboutMe(){
  $('.right-section-el').empty();
  $('.right-section-el').append("<img class='signature-image2' src='assets/imgs/On-tree.jpg' alt='Ryan on a tree bridge'>");
  $('.right-section-el').append("<H2>Contact Info</H2>");
  $('.right-section-el').append(contactList);
}
var recentWork = $('<h3>Most Recent Accomplishment</h3><p id="recent">I made a pyramid in javascript! Click here to see:</p>')
function myRecentWork(){
  $('.left-section-el').empty();
  $('.left-section-el').append(recentWork);
}
var moreWork = $('<p></p><p><div id="contentPost2">For more examples of my work, please <a href="https://github.com/johnson-rl">click here</a>.</div></p>')
$(document).ready(function(){
  $("#contentPost").delay(3000).fadeIn(500);
  $('#aboutme').on('click',aboutMe)
  $('#myworks').on('click',myRecentWork)
  var elementEdit = document.getElementById("most-recent");

  $("#most-recent").on('click',function printPyramid(length){
      // console.log("working")
      var length = 10;
      var x = ''
      for (j = 0;j<length-1;j++){
          x+=' '
      }
      // var element = document.getElementsByClassName('most-recent')
      for (var i = 0; i<length; i++){
          x = x.slice(1)
          x += ' *';
          var node = document.createElement('div');
          var textNode = document.createTextNode(x);
          node.appendChild(textNode);
          // console.log(node);
          // console.log(elementEdit);
          // elementEdit += node
          elementEdit.appendChild(node);
          // console.log(x);
      }
      $("#most-recent").append(moreWork);
      $("#contentPost2").delay(3000).fadeIn(500);
  })
// $("#most-recent").on('click',printPyramid())



})
