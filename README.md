Order vs Chaos - React Game

A 6x6 grid-based turn-based game built in React. Two players alternate placing symbols (crosses and circles) with opposing goals: one aims to create a straight line of five, while the other tries to prevent it.

🕹️ Game Rules

The board is a 6x6 grid with 36 cells.

Two players take turns: Order and Chaos.

Order wins by making a straight line of 5 identical symbols (horizontal, vertical, or diagonal).

Chaos wins by preventing all such lines.

After 2 full games (rounds), a final result is computed based on performance (including move efficiency and 4-in-a-row achievements).

⚙️ Features

Built with React using functional components and hooks.

SVG-based rendering of cross and circle.

Tracks each round's winner and calculates a final result.

Counts 4-in-a-rows and moves per player.

Fully responsive design with vanilla CSS.

🚀 How to Run

Clone the repo:

git clone https://github.com/yourusername/order-vs-chaos.git

Navigate to the project:

cd order-vs-chaos

Install dependencies:

npm install

Start the development server:

npm start


📁 File Structure

src/
├── App.jsx            # Main component
├── App.css            # Styling
├── src
|     |
|    Functions/
│     ├── logic.js       # Game logic like win conditions
│     └── utility.js     # Combination generator