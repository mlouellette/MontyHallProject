

# Monty Hall Problem JavaScript Project
This project implements a simulation of the famous Monty Hall problem using JavaScript. The problem is a probability puzzle based on a game show where you have to pick the correct door to find a car behind it. After you make your initial choice, one of the remaining doors is opened, revealing a goat. You then have a chance to switch your choice to the remaining closed door, or stick with your original choice.

## Classes
There are three main classes implemented in this project:

Statistics: This class tracks the outcomes of the games. It holds four arrays to store games that were won or lost when the player either stayed with the same door or decided to switch doors.

Door: This class represents a door in the game. It has a number and a boolean indicating whether there's a car behind it. It also includes an opened attribute to indicate if the door has been opened.

Game: This class implements the game logic. It initializes the game with three doors and randomly assigns the car to one of them. It also manages the player's initial pick and the opening of one of the remaining doors (with a goat behind it).

## Functions
Several functions are defined to manage the game flow:

1. initCarDoor(): Randomly assigns a car to one of the doors.
2. initPlayerPick(): Randomly selects a door as the player's initial choice.
3. goatDoorPick(): Selects a door with a goat behind it that isn't the player's initial choice.
4. switchDoor(): Simulates the player's decision to switch doors.
5. result(): Determines the final door based on the player's decision to switch or not.
6. runGameSimulations(): Runs the game for a specified number of times and calculates the win percentages for switching and not switching doors.
   How to Run
7. Load the HTML file in your browser, which will automatically run the game simulation for 100,000 iterations. The results are displayed on the webpage showing the percentage of games won when the player decided to switch doors and when the player decided to stick with the initial choice. There is also a reset button to clear the results.

## Note
This project is intended for educational purposes to demonstrate the counter-intuitive solution to the Monty Hall problem - that you have a higher chance of winning if you switch doors.
