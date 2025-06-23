export function checkOrder(fives, grid, checkfor) {
  for (let i = 0; i < fives.length; i++) {
    let isWinningLine = true;
    for (let j = 0; j < fives[i].length; j++) {
      const index = fives[i][j];
      if (grid[index] !== checkfor) {
        isWinningLine = false;
        break;
      }
    }
    if (isWinningLine) return true;
  }
  return false;
}

export function checkFours(fours, grid, checkfor) {
  for (let i = 0; i < fours.length; i++) {
    let isaFour = true;
    for (let j = 0; j < fours[i].length; j++) {
      const index = fours[i][j];
      if (grid[index] !== checkfor) {
        isaFour = false;
        break;
      }
    }
    if (isaFour) { fours.splice(i, 1); return true; }
  }
  return false;
}

export function checkChaos(n) {
  if (n == 35) return true;
  else return false;
}

export function checkFinalWin(winner, moves, fours) {
  if (winner[0] == 'cross') {
    if (moves[1]) {
      if (moves[1] < moves[0]) {
        return 'circle';
      }
      else if (moves[1] == moves[0]) {
        if (fours[1] > fours[0]) {
          return 'circle';
        }
        else if (moves[1] == moves[0]) {
          return 'draw';
        }
        else {
          return 'cross';
        }
      }
      else {
        return 'cross';
      }
    }
    else {
      return 'cross';
    }
  }
  else {
    if (moves[1]) {
      return 'circle';
    }
    else {
      if (fours[1] > fours[0]) {
        return 'circle';
      }
      else if (fours[1] == fours[0]) {
        return 'draw';
      }
      else {
        return 'cross'
      }
    }
  }
}