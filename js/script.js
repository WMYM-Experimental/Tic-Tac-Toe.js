const tiles = Array.from(document.querySelectorAll(".board__tile"));

const players = ["O", "X"];
let currentPlayer = players[1];

const spot = new Array(tiles.length).fill(null);

tiles.forEach((tile) => {
  tile.addEventListener("click", () => {
    let tileID = tile.id;
    if (!spot[tileID]) {
      console.log(tileID);
      spot[tileID] = currentPlayer;
      tile.innerHTML = currentPlayer;
      console.log(spot);
    }
  });
});
