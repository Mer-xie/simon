 //so dumb me created a function without a function
//step 3 creating an array
var buttonColor = ["red", "blue", "green", "yellow"];
//step 5 empty array
var gamePattern = [];
var userClickedPattern = [];

var started =false;
var level = 0;

$(document).keypress(function() {
    if (!started) {
  
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });

$(".btn").click(function() {
      var userChosenColour = $(this).attr("id");
      userClickedPattern.push(userChosenColour);

      playSound(userChosenColour);
      animatePress(userChosenColour);
    
      console.log(userClickedPattern);
})

function nextSequence() {
    //shortened the lines of code I had 
    var randomNumber = Math.floor ((Math.random(randomNumber) * 4 + 1));
    console.log(randomNumber);
    //I could've done math.floor(math.random() *4)
    // create a random variable don't forget it's always camel cased call the math.random function then add 3 to random nmber then nest the random number in the math.floor to get an integer number back then add one to it  
    //step 4 creating a var that uses the randomNumber kini
    var randomChosenColour = buttonColor[randomNumber];
    //step 6 adding something to the end of the array with the push method
    gamePattern.push (randomChosenColour);

    // adding  animations with jquery
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);
    // $('.btn').click().animate()  
}

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}
  
function animatePress(currentColor) {

    $("#" + currentColor).addClass("pressed");
  
    setTimeout(function () {
      $("#" + currentColor).removeClass("pressed");
    }, 100);
  }
  






















    // var randomNumber = Math.random();
    // randomNumber = randomNumber * 3;
    // randomNumber = Math.floor(randomNumber) + 1;
    // console.log(randomNumber);
    // var randomNumber = Math.floor(Math.random);