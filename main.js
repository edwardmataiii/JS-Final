
const eightBallAnswer = [

    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,

];


function askQuestion() {
const question = prompt("Please Ask Me A Question!", "Question here");
if (question != null) {

    document.getElementById("answer").innerHTML = question;
    
}

}

function eightBallReply() {

document.getElementById("8ballresponse").innerHTML = eightBallAnswer



}

askQuestion
    .then(eightBallReply)