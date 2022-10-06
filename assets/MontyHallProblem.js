class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
        
    }  

    // Percentage between win and losses arrays
    percentageWonNotChangingDoor() {
        console.log('PCTWonNotChangingDoor');
        console.log(this.gamesWithSameDoorWon);
        console.log(this.gamesWithSameDoorLost);
        let percentageWonNotChangingDoor = (this.gamesWithSameDoorWon.length / this.gamesWithSameDoorLost.length) * 100;
        return Math.floor(percentageWonNotChangingDoor);
    }
    

    // Percentage between win and losses arrays
    pctWinChangingDoor() {
        console.log('PCTWinChangingDoor');
        console.log(this.gamesWithDoorChangeWon)
        console.log(this.gamesWithDoorChangeLost)
        let pctWinChangingDoor = (this.gamesWithDoorChangeWon.length / this.gamesWithDoorChangeLost.length) * 100;
        return Math.floor(pctWinChangingDoor);
    }
    

}

class Game {
    constructor(toSwitch) {
        
        
        this.doors = [];
        
        this.doors.push(new Door(3,false));
        this.doors.push(new Door(2, false));
        this.doors.push(new Door(1, false));

        this.carDoor = this.selectCarDoor();
        this.doorPicked = toSwitch;
        this.openedGoatDoor = this.goatDoorPick();
        this.finalPick = [];
        
        this.won;
        //this.result();
        // console.log(this.doors)
        // console.log(this.doorPicked)
        // console.log(this.openedGoatDoor)
        // console.log(this.finalPick)
        
    }

    // Picks a door at random with a car behind it
    selectCarDoor() {
        let carDoorIndex = Math.floor(Math.random() * this.doors.length)
        let carDoor = this.doors[carDoorIndex];
        carDoor.isCar = true;
        return carDoor;
    }

    // Player pick 
    playerChoicePick() {
        let playerChoicePick = Math.floor(Math.random() * this.doors.length);
        return this.doors[playerChoicePick];

    }

    // Computer door pick with the goat behind it
    goatDoorPick() {
        for (let i = 0; i < this.doors.length; i++) {
           let goat = this.doors[i];
           if (goat.isCar !== true && goat !== this.doorPicked){
            goat.opened = true;

            return goat;

           }

        }

    }

    // Push the players random decisions to the Statistics Class arrays
    result () { 
        this.finalPick.push(this.doorPicked);
        this.finalPick.push(this.carDoor);
        //console.log('finalPick index:');
        //const randomNum = Math.random();
        //console.log(randomNum);
        //console.log(this.finalPick.length);
        //console.log('------------- X');
       // console.log('--------- -1');
        let doorIndex = Math.floor(Math.random() * (this.finalPick.length));
        //console.log(doorIndex)
        return this.finalPick[doorIndex];
    }


}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;

    }


}

// Scenario
// runSimulation();

let statistics = new Statistics();

// Run the game x amount of times 
function runSimulation() {

    let gamesCounter = 5;
    console.log('NO SWITCH')
    for (let i = 0; i < gamesCounter; i++) {    
        let game = new Game(false);
        let finalChoice = game.result();
        console.log('finalChoice ', finalChoice);
        if (finalChoice === game.carDoor && finalChoice === game.doorPicked) {
            statistics.gamesWithSameDoorWon.push(game);
        } else if (finalChoice !== game.carDoor && finalChoice === game.doorPicked) {
            statistics.gamesWithSameDoorLost.push(game);
        }
    } 
    console.log(statistics.percentageWonNotChangingDoor() + "% of games were won when not switching door.");

    console.log('SWITCH')
    for (let i = 0; i < gamesCounter; i++) {
        let game = new Game(true);
        let finalChoice = game.result();
        console.log('finalChoice ', finalChoice);    
        if (finalChoice === game.carDoor && finalChoice !== game.doorPicked){
            // gamesWithDoorChangeWon.length = gamesCounter
            statistics.gamesWithDoorChangeWon.push(game);
        } else if (finalChoice !== game.carDoor && finalChoice === game.doorPicked){
            // gamesWithDoorChangeLost.length === 0
            statistics.gamesWithDoorChangeLost.push(game);
        }
    }
    console.log(statistics.pctWinChangingDoor() + "% of games were won when switching door.");
}
runSimulation();
// let statistics = new Statistics();
//console.log(statistics.gamesWithSameDoorWonSum)
//let percentageWonNotChangingDoor = (statistics.gamesWithSameDoorWon.length / statistics.gamesWithSameDoorLostSum.length) * 100;

document.getElementById("demo").innerHTML = statistics.percentageWonNotChangingDoor() + "% of games were won when not switching door.";

document.getElementById("demo2").innerHTML = statistics.pctWinChangingDoor() + "% of games were won when switching door.";

function myFunction() {
    document.getElementById("myForm").reset();

  }

