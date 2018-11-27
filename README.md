# Memory Game Project

## Project Overview

The Memory Game Project is all about demonstrating the mastery of JavaScript by building a complete browser-based card matching game (also known as Concentration). But this isn’t just any memory game! It’s a **shnazzy**, **well-designed**, **feature-packed** memory game!

The styling of the game was up to me and here's what i came up with:
![Memory Game Screenshot](../master/img/screenshot.png?raw=true "Screenshot")


## How the Game Works

The game board consists of sixteen "cards" arranged in a grid. The deck is made up of eight different pairs of cards, each with different symbols on one side. The cards are arranged randomly on the grid with the symbol face down. The gameplay rules are very simple: flip over two hidden cards at a time to locate the ones that match!

**Each turn:**

* The player flips one card over to reveal its underlying symbol.
* The player then turns over a second card, trying to find the corresponding card with the same symbol.
* If the cards match, both cards stay flipped over.
* If the cards do not match, both cards are flipped face down.
The game ends once all cards have been correctly matched.

## Game Functionality
The real-life game, players flip over cards to locate the pairs that match The goal is to recreate this effect in your project. There are a couple of interactions that you'll need to handle:

**Flipping cards**
* What happens when cards match?
* What happens when cards do not match?
* When the game finishes?


## Development Strategy

1. **Start by building a grid of cards.**
2. **Add the functionality to handle clicks.**
3. **Work on the matching logic.**
4. **Create the winning condition.**
5. **Implement additional functionality:**
* Move counter.
* Timer.
* Star rating.
* Reset button.

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Getting Started

### Play the Game
##### Navigate into **fend-project-memory-game-master** directory
```
# cd fend-project-memory-game
```
##### Install **Gulp**
```
# npm install gulp-cli -g
# npm install gulp
```
##### Install dependencies
```
# npm install
```
##### Start the game in browser
```
# gulp
```
