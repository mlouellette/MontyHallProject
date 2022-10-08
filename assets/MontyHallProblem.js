class Statistics {
    constructor() {
        this.gamesWithSameDoorWon = [];
        this.gamesWithSameDoorLost = [];
        this.gamesWithDoorChangeWon = [];
        this.gamesWithDoorChangeLost = [];
        
    }  


}

class Door {
    constructor(number, isCar) {
        this.number = number;
        this.isCar = isCar;
        this.opened = false;

    }


}

class Game {
    constructor() {
        this.doors = [];
        // Push the values to the this.doors array
        this.doors.push(new Door(3,false));
        this.doors.push(new Door(2, false));
        this.doors.push(new Door(1, false));
        //steps
        this.carDoor = this.initCarDoor();
        this.initialPlayerPick = this.initPlayerPick();
        this.openedGoatDoor = this.goatDoorPick();
        
    }

    // Picks a door at random with a car behind it
    initCarDoor() {
        let carDoorIndex = Math.floor(Math.random() * this.doors.length)
        let carDoor = this.doors[carDoorIndex];
        carDoor.isCar = true;
        return carDoor;
    }

    // Player pick 
    initPlayerPick() {
        let index = Math.floor(Math.random() * this.doors.length);
        return this.doors[index];

    }

    // Computer door pick with the goat behind it
    goatDoorPick() {
        for (let i = 0; i < this.doors.length; i++) {
           let goat = this.doors[i];
           if (!goat.isCar && goat.number !== this.initialPlayerPick.number){
            goat.isOpen = true;

            return goat;

           }

        }

    }

    // Simulate the switch door decision
    switchDoor() {
        for (let door of this.doors){
            if(door.number !== this.initialPlayerPick.number && !door.isOpen){
                return door;
            }
        }
    }
    
    // Result for switch
    result (toSwitch) { 
        if(toSwitch){
            this.finalDoor = this.switchDoor();
        } else {
            this.finalDoor = this.initialPlayerPick;
        }
    }

}

// let statistics = new Statistics(); // < Not necessary, but required by requirements.
let statistics = new Statistics();

// empty global variable to switch their values later on
let percentWinSwitch;
let percentWinNoSwitch;

// Function that runs the game x amount of times
function runGameSimulations(numberOfGames){
    let switchWinTally = 0;
    let noSwitchWinTally = 0;
    for(let i = 0; i < numberOfGames; i++){
        const game = new Game();
        // result of same game, when player do switch
        game.result(true)
        if(game.finalDoor.isCar){
            switchWinTally++;
        }
        // result of the same game, when player do not switch, 
        game.result(false)
        if(game.finalDoor.isCar){
            noSwitchWinTally++;
        }
    }
    percentWinSwitch = switchWinTally * 100 / numberOfGames;
    percentWinNoSwitch = noSwitchWinTally * 100 / numberOfGames;
}

runGameSimulations(100000);

// Html element 
document.getElementById("demo").innerHTML = percentWinSwitch + "% of games were won when not switching door.";
document.getElementById("demo2").innerHTML = percentWinNoSwitch + "% of games were won when switching door.";

// Reset the page after pressing the button element
function myFunction() {
    document.getElementById("myForm").reset();
}

