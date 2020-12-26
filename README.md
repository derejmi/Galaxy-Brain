# Galaxy Brain

A galaxy-themed multiplayer trivia quiz game built in React.

![](src/Components/Background/readme.gif)

## Installation & Usage

### Installation

- Clone or download the repo

### Usage

- Open your terminal/CLI and navigate to the `Galaxy-Brain` folder
- Run `npm install` to install dependencies
- Run `npm start` to launch server.
- Navigate to your browser of choice (compatible with Chrome, Safari, Firefox, Edge)
- Enjoy the game!

## Technologies

- App: React, JavaScript, CSS and HTML
- Testing: Jest and Enzyme 

## Process

- Researched quiz apps to see popular themes and layouts
- Mapped out initial ideas on Figma
- Started first by defining the component hierachy of the app.
- Once we established `<QuestionContainer/>` as the parent container component that would hold all of our quiz components we divided the labour of building these child components.
- In cases where the component relied on data gathered by others, dummy data was used to start building the logic.
- These child components were passed information as props from `</QuestionContainer>` in the form of data or methods.
- When good progress was made on these components, we started styling and developing tests for these components.
- We also took a behavioural approach to building functionality and styling - making iterations based on the behaviour of the app and user experience.

## Wins & Challenges

### Wins
- Effective management of state without the need of tech such as Redux or MobX
- User can sucessfully choose number of players/rounds and decide category and difficulty of quiz
- Score count is updated
- Winner is shown on final page

### Challenges

- Category dropdown list not consistent on all browsers
- Implementation of different players/keeping score

## Bugs

- Have not implemented media queries in styling

## Future Features

- Countdown Timer
- User input for player names
- Allowing players to play from different locations - potentially using sockets.io
- Authentication

## Licence

- ISC
