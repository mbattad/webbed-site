import myGames from '../data/json/games.json'
const gamesGrid = document.getElementById("games-grid");

gamesGrid!.innerHTML = '';
for(let game of myGames) {
    let img = "images/favourites/games/" + game.fileName;
    let newItem = document.createElement("img");
    newItem.setAttribute("src", img);
    gamesGrid?.appendChild(newItem)
}