const eightBallResponses = [
    //Array of 8ball responses

    'It is certain.',
    'It is decidedly so.',
    'Without a Doubt.',
    'Yes, Definitley.',
    'As I see it, yes.',
    'Most likely.',
    'Outlook good.',
    'Signs point to yes.',

    'Ask again later.',
    'Better not tell you now.',
    'Reply hazy, Try again.',
    'Cannot predict now.',
    'Concentrate and ask again.',

    'Outlook not so good.',
    "Don't count on it.",
    'My reply is no.',
    'Very doubtful.',
    'My sources say no.',

];


function askQuestion() {     //When you click the button it runs this function
    
    const question = prompt("Please Ask Me A Question!", "Question here");
    // Question equalling the question you give
                                                                            
    const randomIndex = Math.floor(Math.random() * eightBallResponses.length); 
    //randomIndex gets a random number out of how many eightBallResponses there are 
    
    const randomResponse = eightBallResponses[randomIndex];
    //This function gets the response correleting with the number

    if (question != null) {
    // If The question is answered

        document.getElementById("question").innerHTML = question;
        // It displays the question on the page
        
        console.log("Question:", question)
        // Console logs the question
        
        giveReply()
        // Runs the function giveReply        
        
        function giveReply() {
            document.getElementById("8ballresponse").innerHTML = randomResponse
            // Displays the 8BallResponse
        
            console.log("Answer:",randomResponse)
            // Console logs the Response
        };
    }
};


