# Order & Chaos - 6x6 React Game

This is a React-based implementation of the **Order and Chaos** game played on a 6×6 grid. Two players alternate placing either a cross (X) or circle (O), aiming to achieve five-in-a-row in any direction. The game consists of two rounds, followed by a final result.

## 🎮 Gameplay Overview

- The board is a 6×6 grid (36 cells).
- Each cell can be:
  - Empty
  - Filled with a **Cross (X)** — red
  - Filled with a **Circle (O)** — blue
- Players take turns placing either symbol.

### 🧠 Objective

- **Order (X)** tries to create **five** in a row (horizontal, vertical, diagonal).
- **Chaos (O)** tries to prevent that from happening.

Each round alternates roles:
- Round 1: Player 1 is Order, Player 2 is Chaos.
- Round 2: Roles reverse.
- After 2 rounds, the **Final** winner is decided based on:
  - Who won each round
  - Number of 4-in-a-rows
  - Number of moves to win (in case of tiebreaker)

## 🧩 Features

- Click-based cell interaction
- SVG-based rendering of X and O
- Game state tracking for:
  - Current grid state
  - Moves count
  - 4-in-a-row counters
  - Round and final results
- New Game button to reset everything

## 🛠 Tech Stack

- React (Functional Components + Hooks)
- Vanilla CSS
- Pure JavaScript logic (no external libraries)
```bash
Hosted link https://naytyk.github.io/orderandchaos

## 🚀 Getting Started

1. Clone the repository
```bash
git clone https://github.com/your-username/order-chaos-game.git
cd order-chaos-game

    Install dependencies

npm install

    Run the app

npm run dev