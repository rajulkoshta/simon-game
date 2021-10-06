var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

var started = false;
var level = 0;

$(document).keypress(function () {
    if (!started) {
        $("level-title").text(`level ${level}`);  
        nextSequence();
        started = true;
    }
});


$(".btn").click(function () {
    userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});
  
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedPattern[currentLevel]){
        if(gamePattern.length === userClickedPattern.length){
            setTimeout(function (){
                nextSequence();
            },1000);
        }
    }else{
        playSound("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("game over, press Any key to restart");
       
        setTimeout(function (){
            $("body").removeClass("game-over");
        },200);
       
        startOver();
    }
        
}


function nextSequence() {
    userClickedPattern = [];
    level++;
    $("#level-title").text(`level ${level}`);

    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    $(`#${randomChosenColour}`).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColour);

}


function playSound(name) {
    var audio = new Audio(`sounds/sounds_${name}.mp3`);
    audio.play();
}

function animatePress(currentColour) {
    $(`.${currentColour}`).addClass("pressed");
    setTimeout(function () {
        $(`.${currentColour}`).removeClass("pressed")
    }, 100);
}

function startOver(){
    level = 0;
    gamePattern = [];
    started = false;
}