// Create and fill an array with the prizes
let prizes = ["mug", "GTA VI digital code", "make-up bag", "Playstation 5", "Xbox Series X", "$2000 Custom PC", 
    "$15 Chick-fil-A gift card", "4' x 4' Rug", "Digital Camera", "Key chain", "M6 MacBook Pro", "Lenovo 300e Chromebook"]

// Using a Fisher–Yates shuffle to shuffle the array and put the shuffled array in a new array
function shuffle(prizes) {
    let shuffledPrizes = [...prizes];

    for(let i = shuffledPrizes.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [shuffledPrizes[i], shuffledPrizes[j]] = [shuffledPrizes[j], shuffledPrizes[i]];
    }
    return shuffledPrizes;
}

// Select the first 3 values in the new array and connect them to their doors
let doorPrizes = shuffle(prizes).slice(0, 3);
let door1 = document.getElementById("door1");
let door2 = document.getElementById("door2");
let door3 = document.getElementById("door3");
let door1img = door1.querySelector("img");
let door2img = door2.querySelector("img");
let door3img = door3.querySelector("img");
door1.dataset.prize = doorPrizes[1];
door2.dataset.prize = doorPrizes[2];
door3.dataset.prize = doorPrizes[0];

// Giving the user a random deal so it is pretty much unpredictable if the dealer is tryign to lowball or highball you
let cashOffer = Math.floor(Math.random() * (2000 - 10 + 1)) + 10;
let cashOfferText = document.getElementById("cashOffer");

// Adding a click event handler for when the user clicks a door and outputting a message
let selectedDoor = null;
let switchingDoors = false;
let gameOver = false;
let hasUserSwitched = false;
let gameMessage = document.getElementById("gameMessageText");
let playAgain = document.getElementById("playAgain")
door1.addEventListener ("click", function() { 
    if (gameOver === false && selectedDoor === null && switchingDoors !== true) {
        selectedDoor = door1;
        door1img.src = "images/open_door.png"
        gameMessage.textContent = "You selected Door 1!";
        cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
        document.getElementById("dealer").style.display = "block";
    }
    else if (gameOver === false && switchingDoors === true && door1 !== selectedDoor) {
        switchingDoors = false;
        selectedDoor = door1;
        door1img.src = "images/open_door.png";
        gameMessage.textContent = "You switched to Door 1!";
        gameOver = true;
        winnings.textContent = "Congratulations! You won a " + selectedDoor.dataset.prize + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});
door2.addEventListener ("click", function() {
    if (gameOver === false && selectedDoor === null && switchingDoors !== true) {    
        selectedDoor = door2;
        door2img.src = "images/open_door.png";
        gameMessage.textContent = "You selected Door 2!";
        cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
        document.getElementById("dealer").style.display = "block";
    }
    else if (gameOver === false && switchingDoors === true && door2 !== selectedDoor) {
        switchingDoors = false;
        selectedDoor = door2;
        door2img.src = "images/open_door.png";
        gameMessage.textContent = "You switched to Door 2!";
        gameOver = true;
        winnings.textContent = "Congratulations! You won a " + selectedDoor.dataset.prize + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});
door3.addEventListener ("click", function() {
    if (gameOver === false && selectedDoor === null && switchingDoors !== true) {    
        selectedDoor = door3;
        door3img.src = "images/open_door.png";
        gameMessage.textContent = "You selected Door 3!";
        cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
        document.getElementById("dealer").style.display = "block";
    }
    else if (gameOver === false && switchingDoors === true && door3 !== selectedDoor) {
        switchingDoors = false;
        selectedDoor = door3;
        door3img.src = "images/open_door.png";
        gameMessage.textContent = "You switched to Door 3!";
        gameOver = true;
        winnings.textContent = "Congratulations! You won a " + selectedDoor.dataset.prize + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});

// Keyboard Event Handler
document.addEventListener ("keydown", function(event) {
    if (event.key.toLowerCase() === "r") {
        resetGame();
        return;
    }
    else if (gameOver === false && selectedDoor != null && event.key.toLowerCase() === "a") {
        acceptOffer.click();
    }
    else if (gameOver === false && selectedDoor != null && event.key.toLowerCase() === "k") {
        keepDoor.click();
    }
    else if (gameOver === false && selectedDoor != null && event.key.toLowerCase() === "s") {
        switchDoor.click();
    }
    if (gameOver === false && selectedDoor === null && switchingDoors !== true) {    
        if(event.key === "1") {
            selectedDoor = door1;
            door1img.src = "images/open_door.png";
            gameMessage.textContent = "You selected Door 1!";
            cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
            document.getElementById("dealer").style.display = "block";
        }
        else if(event.key === "2") {
            selectedDoor = door2;
            door2img.src = "images/open_door.png";
            gameMessage.textContent = "You selected Door 2!";
            cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
            document.getElementById("dealer").style.display = "block";
        }
        else if(event.key === "3") {
            selectedDoor = door3;
            door3img.src = "images/open_door.png";
            gameMessage.textContent = "You selected Door 3!";
            cashOfferText.textContent = "Are you sure about that door? How about $" + cashOffer + "?";
            document.getElementById("dealer").style.display = "block";
        }
    }
    else if (gameOver === false && 
        switchingDoors === true &&
        ["1", "2", "3"].includes(event.key) && 
        "door" + event.key !== selectedDoor.id) {
        switchingDoors = false;
        if (event.key === "1") {
            selectedDoor = door1;
            door1img.src = "images/open_door.png";
        }
        else if (event.key === "2") {
            selectedDoor = door2;
            door2img.src = "images/open_door.png";
        }
        else if (event.key === "3") {
            selectedDoor = door3;
            door3img.src = "images/open_door.png";
        }
        gameMessage.textContent = "You switched to Door " + event.key +"!";
        gameOver = true;
        winnings.textContent = "Congratulations! You won a " + selectedDoor.dataset.prize + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});

// Put up the dealer's options and outputs them and the winnings and the big reveal
let acceptOffer = document.getElementById("acceptOffer");
let keepDoor = document.getElementById("keepDoor");
let switchDoor = document.getElementById("switchDoor");
let winnings = document.getElementById("winnings");
let door1Prize = document.getElementById("door1Prize");
let door2Prize = document.getElementById("door2Prize");
let door3Prize = document.getElementById("door3Prize");
acceptOffer.addEventListener ("click", function() { 
    if (gameOver === false) {
        gameOver = true;
        winnings.textContent = "Congratulations, you won $" + cashOffer + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});
keepDoor.addEventListener ("click", function() { 
    if (gameOver === false) {
        gameOver = true;
        winnings.textContent = "Congratulations, you won a " + selectedDoor.dataset.prize + ".";
        door1Prize.textContent = "Door 1: " + door1.dataset.prize;
        door2Prize.textContent = "Door 2: " + door2.dataset.prize;
        door3Prize.textContent = "Door 3: " + door3.dataset.prize;
        document.getElementById("finalResult").style.display = "block";
        document.getElementById("dealer").style.display = "none";
    }
});
switchDoor.addEventListener ("click", function() { 
    if (gameOver === false && hasUserSwitched === false) {   
        switchingDoors = true;
        acceptOffer.disabled = true;
        hasUserSwitched = true;
        switchDoor.disabled = true;
        keepDoor.disabled = true;
        gameMessage.textContent = "Choose another door!";
        cashOfferText.textContent = "The dealer has withdrawn the cash offer!";
    }
});

// Reset the entire game
function resetGame() {
    doorPrizes = shuffle(prizes).slice(0, 3);
    cashOffer = Math.floor(Math.random() * (2000 - 10 + 1)) + 10;
    gameMessage.textContent = "Choose your door!";
    cashOfferText.textContent = "The dealer's offer will appear here.";
    winnings.textContent = "Your winnings will appear here!";
    door1.dataset.prize = doorPrizes[1];
    door2.dataset.prize = doorPrizes[2];
    door3.dataset.prize = doorPrizes[0];
    door1Prize.textContent = "";
    door2Prize.textContent = "";
    door3Prize.textContent = "";
    door1img.src = "images/closed_door.png";
    door2img.src = "images/closed_door.png";
    door3img.src = "images/closed_door.png";
    selectedDoor = null;
    switchingDoors = false;
    gameOver = false;
    acceptOffer.disabled = false;
    hasUserSwitched = false;
    keepDoor.disabled = false;
    switchDoor.disabled = false;
    document.getElementById("finalResult").style.display = "none";
    document.getElementById("dealer").style.display = "none";
}
playAgain.addEventListener("click", resetGame)