const board = Array.from(document.querySelectorAll(".board__tile"));

const spots = new Array(board.length).fill(null);

const players = ["O", "X"];
let currentPlayer = players[1]; //initial player is X

function definePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[0];
  } else {
    currentPlayer = players[1];
  }
}
function hasWon() {
  //036
  //147
  //358
  if (spots[0] === currentPlayer) {
    if (spots[3] === currentPlayer && spots[6] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical c1`);
      return true;
    }
  }
  if (spots[1] === currentPlayer) {
    if (spots[4] === currentPlayer && spots[7] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical c2`);
      return true;
    }
  }
  if (spots[3] === currentPlayer) {
    if (spots[5] === currentPlayer && spots[8] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical c3`);
      return true;
    }
  }
  //012
  //345
  //358
  if (spots[0] === currentPlayer) {
    if (spots[1] === currentPlayer && spots[2] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical r1`);
      return true;
    }
  }
  if (spots[3] === currentPlayer) {
    if (spots[4] === currentPlayer && spots[5] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical r2`);
      return true;
    }
  }
  if (spots[6] === currentPlayer) {
    if (spots[7] === currentPlayer && spots[8] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical r3`);
      return true;
    }
  }
  //048
  //246
  if (spots[0] === currentPlayer) {
    if (spots[4] === currentPlayer && spots[8] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical d1`);
      return true;
    }
  }
  if (spots[2] === currentPlayer) {
    if (spots[4] === currentPlayer && spots[6] === currentPlayer) {
      console.log(`${currentPlayer} wins vertical d2`);
      return true;
    }
  }
}

board.forEach((tile) => {
  tile.addEventListener("click", () => {
    let tileID = tile.id;
    if (!spots[tileID]) {
      spots[tileID] = currentPlayer;
      tile.innerHTML = currentPlayer;
      definePlayer();
      console.log(spots);
      if (hasWon()) {
        console.log(currentPlayer);
      }
    }
  });
});

console.log(board);
console.log(spots);
