
DUE TODAY
wireframe
github repo link
pseudocode //add to google doc

GAME RULES

1. player must land a combination of matching symbols when they roll
2. all spins should be treated individually since the outcome is determined by Random Number Generator
3. if you hit 0 points you lose the game



PSEUDOCODE


1. Define constants
   > symbol: all symbols in the slot machine.
     - symbols have different scores when matched, example: apple = 3 points, but grape = 5 points.
     - if no symbols match, points are lost
   > winningCombos: 3 matching symbols wins points
   > specialSymbol: if special symbol, win some points 



2. Define the 'state'(data) variables, but dont assign values to them (use init function to take care of this)
  -


3. select and save(cache) elements in variables that need to be accessed in the JS more than once

4. add event listeners to listen to multiple elements with a single listener
    > when player clicks the 'SPIN' button, the game will run
    > if (board spinning) player cant click again until the roll is done
    > else (refresh the 'SPIN' button so that it's clickable to roll again)

5. invoke the init function used to initialize all state(data) variables

6. invole the main render function responsible for transferring ALL state variables to the DOM


update all state variables impacted by the user interaction
  - every matching roll, add the points earner to the current score.

invoke the main render function


additional:
- naruto music playing in the background
  -player can choose to stop bg music

- naruto picture / gif that:
  -get excited everytime you earn points
  -sad when lose points or lose the game

tldr...
~ Update all state impacted by the interaction, then
~ Update the DOM by calling render().














*/
