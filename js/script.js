const board = Array.from(document.querySelectorAll(".board__tile"));
const spots = new Array(board.length).fill(null);
const players = ["O", "X"];
let currentPlayer = players[1]; //initial player is X

const text = document.getElementById("set__text");
const restartBtn = document.getElementById("restart");

function definePlayer() {
  if (currentPlayer === players[1]) {
    currentPlayer = players[0];
  } else {
    currentPlayer = players[1];
  }
}
function hasWon() {
  //Vertical Options
  //036
  //147
  //258
  let flag = false;

  if (
    spots[0] === currentPlayer &&
    spots[3] === currentPlayer &&
    spots[6] === currentPlayer
  ) {
    console.log("On Vertical c1");
    flag = true;
    return flag;
  }
  if (
    spots[1] === currentPlayer &&
    spots[4] === currentPlayer &&
    spots[7] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical c2`);
    flag = true;
    return flag;
  }
  if (
    spots[2] === currentPlayer &&
    spots[5] === currentPlayer &&
    spots[8] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical c3`);
    flag = true;
    return flag;
  }
  //Horizontal Options
  //012
  //345
  //358
  if (
    spots[0] === currentPlayer &&
    spots[1] === currentPlayer &&
    spots[2] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical r1`);
    flag = true;
    return flag;
  }
  if (
    spots[3] === currentPlayer &&
    spots[4] === currentPlayer &&
    spots[5] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical r2`);
    flag = true;
    return flag;
  }
  if (
    spots[6] === currentPlayer &&
    spots[7] === currentPlayer &&
    spots[8] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical r3`);
    flag = true;
    return flag;
  }
  //Diagonal Options
  //048
  //246
  if (
    spots[0] === currentPlayer &&
    spots[4] === currentPlayer &&
    spots[8] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical d1`);
    flag = true;
    return flag;
  }
  if (
    spots[2] === currentPlayer &&
    spots[4] === currentPlayer &&
    spots[6] === currentPlayer
  ) {
    console.log(`${currentPlayer} wins vertical d2`);
    flag = true;
    return flag;
  }

  return flag;
}

board.forEach((tile) => {
  tile.addEventListener("click", () => {
    let tileID = tile.id;
    if (!spots[tileID]) {
      spots[tileID] = currentPlayer;
      tile.innerHTML = currentPlayer;
      if (hasWon()) {
        console.log(`${currentPlayer} wins`);
        text.innerHTML = `${currentPlayer} WON :c`;
      }
      definePlayer();
    }
  });
});

restartBtn.addEventListener("click", () => {
  spots.fill(null);
  board.forEach((tile) => {
    tile.innerHTML = null;
  });
  text.innerHTML = "Can a Human Overcome me?";
  currentPlayer = players[1];
});

console.log(board);
console.log(spots);
