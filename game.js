gamePattern = [];
buttonColours = ["red", "blue" ,"green" , "yellow" ];

function nextSequence(){
    randomNumber = Math.floor(Math.random()*4);
    randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
}
// nextSequence();
//     console.log(gamePattern);
