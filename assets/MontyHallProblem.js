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
        this.doors.push(new Door(3, false));
        this.doors.push(new Door(2, false));
        this.doors.push(new Door(1, false));
        // step 1: set what is behind the doors
        this.carDoor = this.initCarDoor(); 
        // step 2: set players selection
        this.initialPlayerPick = this.initPlayerPick();
        // step 3: set the open door by computer host (not car and not player's selection)
        this.openedGoatDoor = this.goatDoorPick(); 
    }

    initCarDoor() {
        let carDoorIndex = Math.floor(Math.random() * this.doors.length)
        let carDoor = this.doors[carDoorIndex];
        carDoor.isCar = true;
        return carDoor;
    }
    initPlayerPick() {
        let index = Math.floor(Math.random() * this.doors.length);
        return this.doors[index];
    }
    goatDoorPick() {
        for (let i = 0; i < this.doors.length; i++) {
           let currentDoor = this.doors[i];
            if (!currentDoor.isCar && currentDoor.number !== this.initialPlayerPick.number) {
                currentDoor.isOpen = true;
                return currentDoor;
            }
        }
    }
    switchDoor() {
        for (let door of this.doors){
            if(door.number !== this.initialPlayerPick.number && !door.isOpen){
                return door;
            }
        }
    }
    result (toSwitch) { 
        if(toSwitch){
            this.finalDoor = this.switchDoor();
        } else {
            this.finalDoor = this.initialPlayerPick;
        }
    }
}

// let statistics = new Statistics(); // < Not necessary, but required by requirements.
let percentWinSwitch;
let percentWinNoSwitch;

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

/* HTML ELEMENT */
document.getElementById("demo").innerHTML = percentWinSwitch + "% of games were won when not switching door.";
document.getElementById("demo2").innerHTML = percentWinNoSwitch + "% of games were won when switching door.";
function myFunction() {
    document.getElementById("myForm").reset();
}

