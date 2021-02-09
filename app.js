const game = ()=> {
    let pScore = 0;
    let cScore =0;

    //start the game
    const startgame = () => {
        const playButton = document.querySelector(".intro button");
        const introScreen =document.querySelector(".intro");
        const match = document.querySelector(".match");

        playButton.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            //match.classList.add("fadeIn");
            //options.classList.add("fadeIn");
        });
    };
    //play match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");

        hands.forEach(hand => {
            hand.addEventListener("animationend", function (){
                this.style.animation = "";
            });
        });

        //computer options
        const computerOptions = ["rock", "paper", "scissors"];

        options.forEach(option => {
            option.addEventListener("click", function() {
                //computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoise = computerOptions[computerNumber];
                // here is where we call compare hands
               
                setTimeout(() => {
                    compareHands(this.textContent, computerChoise);
                    //update images
    
                    // here is my problem, can't find the assets fold
                    playerHand.src = "./assets/${this.textContent}.png";
                    computerHand.src = "./assets/${computerChoice}.png";

                },2000);

                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";
            });
        });
    };

    const updateScore = () => {
        const playerScore = document.querySelector(".player-score p");
        const computerScore = document.querySelector(".computer-score p");
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    };

    const compareHands = (playerChoice, computerChoise) => {
        //update text 
        const winner = document.querySelector(".winner");
        //checking for a tie 
        if(playerChoice === computerChoise) {
            winner.textContent = "it is a tie";
            return;
        }
        //check for rock
        if(playerChoice === "rock") {
            if(computerChoise === "scissors") {
                winner.textContent = "player wins";
                pScore++;
                updateScore();
                return;
            }
            esle
            {winner.textContent = "computer wins";
            cScore++;
            updateScore();
                return; 
            }
        }

        //check for paper
        if(playerChoice === "paper"){
            if(computerChoise === "scissors"){
                winner.textContent = "computer wins";
                pScore++;
                updateScore();
                return;
            }
            else
            {winner.textContent = "player wins";
            cScore++;
            updateScore();
                return; 
            }
        }

        //check for scissors
        if(playerChoice === "scissors"){
            if(computerChoise === "rock"){
                winner.textContent = "computer wins";
                cScore++;
                updateScore();
                return;
            }
            else
            {winner.textContent = "player wins";
            pScore++;
            updateScore();
                return; 
            }
        }
    }

    //is call all the inner function
    startgame();
    playMatch();
};

//start the game function
game();