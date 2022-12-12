
const eightBallResponses = [

    'It is certain.',
    'It is decidedly so.',
    'Without a Doubt.',
    'Yes, Definitley.',
    'Ask again later.',
    'Better not tell you now.',
    'Outlook not so good.',
    "don't count on it.",

];


function askQuestion() {
const question = prompt("Please Ask Me A Question!", "Question here");
if (question != null) {
    document.getElementById("answer").innerHTML = question;
    console.log(question)
    giveReply()
}};

const randomIndex = Math.floor(Math.random() * eightBallResponses.length);
const randomResponse = eightBallResponses[randomIndex];

function giveReply() {
    document.getElementById("8ballresponse").innerHTML = randomResponse
    console.log(randomResponse)
};
