
loadData = function(){
  username = $("#username").val();
  age = $("#age").val();
  matchLocation = $("#matchLocation").val().toLowerCase();
  posSmoker = $("#posSmoker").val().toLowerCase();
  children = $("#children").val().toLowerCase();
  religion = $("#religion").val().toLowerCase();
  diet = $("#diet").val().toLowerCase();
  $("#prefForm").css("display","none");
  $("#robot").css("display","block");
  $("#chatSubtitle").text("Motherbot is screening matches for " + username).css("display","block");
  $("#header").css("display","block");
  $("#footer").css("display","block");
}

$("#nextForm").click(function(){
  $("#hero").css("display","none");
  $("#header").css("display","block");
  $("#prefForm").css("display","block");
  $("#footer").css("display","block");
});

$("#submit").click(function(){
  console.log("click function")
  loadData()
});

$('#prefForm').keypress(function(e){
  if(e.which == 13){
    $('#submit').click();
  }
});


$(function() {
  var userInput = document.getElementById("userInput");
  console.log(userInput)
// chat aliases
var you = 'You';
var robot = 'MotherBot';

// slow reply by 400 to 800 ms
var delayStart = 400;
var delayEnd = 800;

// initialize
//is chatBot a class?
console.log(matchLocation);
var bot = new chatBot();
var chat = $('.chat');
var waiting = 0;
$('.busy').text(robot + ' is typing...');

// submit user input and get chat-bot's reply
var submitChat = function() {

//is one of these .input the css, and the other is the actual input variable?
var input = $('.input input').val();
if(input == '') return;

$('.input input').val('');
updateChat(you, input);

var reply = bot.respondTo(input);
if(reply == null) return;

//this changes the delay response everytime to make it seem more human?
var latency = Math.floor((Math.random() * (delayEnd - delayStart)) + delayStart);
$('.busy').css('display', 'block');
waiting++;
setTimeout( function() {
  if(typeof reply === 'string') {
    updateChat(robot, reply);
  } else {
// no idea what is going on here
for(var r in reply) {
  updateChat(robot, reply[r]);
}
}
//what are the two minus signs here
if(--waiting == 0) $('.busy').css('display', 'none');
}, latency);
}

// add a new line to the chat
var updateChat = function(party, text) {

  var style = 'you';
  if(party != you) {
    style = 'other';
  }

  var line = $('<div><span class="party"></span> <span class="text"></span></div>');
  line.find('.party').addClass(style).text(party + ':');
  line.find('.text').text(text);

  chat.append(line);

  chat.stop().animate({ scrollTop: chat.prop("scrollHeight")});

}

// event binding
$('.input').bind('keydown', function(e) {
  if(e.keyCode == 13) {
    submitChat();
  }
});
$('.input a').bind('click', submitChat);

// initial chat state
updateChat(robot, 'Hi there. What\'s your name?');

});

//https://github.com/liouh/chat-bot/tree/master/js
