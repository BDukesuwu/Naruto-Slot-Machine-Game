
WIREFRAME: https://www.figma.com/proto/LzGgt5KdB81m0cQzQubkTm/Naruto-Slot-Machine-Game?node-id=5%3A23&scaling=min-zoom&page-id=0%3A1

GITHUB REPO: https://github.com/BDukesuwu/Naruto-Slot-Machine-Game

PSEUDOCODE: https://docs.google.com/document/d/1MT2TdjnlCMnCaqgLnQ9KKwn3EiEnILEbIfbRkWJdWn4/edit?usp=sharing

                                          NARUTO SLOT MACHINE GAME

PSEUDOCODE

                                              GAME RULES
                                              
Player must land a combination of matching symbols when they roll
All spins should be treated individually since the outcome is determined by Random Number Generator
If you hit 0 points, you lose the game


                                               DEFINE CONSTANTS
                                               

Symbol - all symbols in the slot machine.
If no symbols match, points are lost
Symbols have different scores when matched, example: apple = 3 points, but grape = 5 points.

WinningCombos - 3 matching symbols wins points



                                            DEFINE THE STATE VARIABLES
                                            

CurrentScore - the current score of the player. Will increase and decrease depending on the players rolls.
Use a winner variable to represent three different game states - game in session, waiting for roll, or player lost.

SELECT AND CACHE ELEMENTS (that need to be accessed in the JS more than once)

pointsEarned - select and save points earned to add to the current score to create a new current score
The slots

                                            ADD EVENT LISTENERS
                                            

When player clicks the 'SPIN' button, the game will run

When player clicks sound button, sound is muted, but sound plays on start-up





                             INVOKE INIT FUNCTION TO INITIALIZE ALL STATE VARIABLES
                             

Upon loading, the game will:
Initialize the state variables: current score 0, and game state

3 symbols will map to each square, randomly
Initialize gameLost to null to represent that there is no end game yet
Render those values to the page
Wait for the user to click a square

        INVOLVE THE MAIN RENDER FUNCTION RESPONSIBLE FOR TRANSFERRING ALL STATE VERIABLES TO THE DOM


                                                        ADDITIONAL
                                                        
Naruto music playing in the background, stoppable if player chooses

