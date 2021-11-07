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
  //look if someone won
}

board.forEach((tile) => {
  tile.addEventListener("click", () => {
    let tileID = tile.id;
    console.log(tileID);

    if (!spots[tileID]) {
      spots[tileID] = currentPlayer;
      tile.innerHTML = currentPlayer;
      definePlayer();
    }
  });
});

console.log(board);
console.log(spots);
