import myAlbums from '../data/json/music.json';
const musicGrid = document.getElementById("music-grid");

const allButton = document.getElementById("all-button");
const ownedButton = document.getElementById("owned-button");
const wishlistButton = document.getElementById("wishlist-button");

function display(requiredTag = "") {
    musicGrid!.innerHTML = '';
    for(let album of myAlbums) {
        if(requiredTag === "" || album.tags.includes(requiredTag))
        {
            let img = "images/favourites/albums/" + album.fileName;
            let newItem = document.createElement("img");
            newItem.setAttribute("src", img);
            musicGrid?.appendChild(newItem);
        }
    }
}

allButton!.onclick = () => {
    display();
    if (!allButton?.classList.contains("active")) {
        allButton?.classList.add("active");
        ownedButton?.classList.remove("active")
        wishlistButton?.classList.remove("active")
    }
}

ownedButton!.onclick = () => {
    display("owned");
    if (!ownedButton?.classList.contains("active")) {
        allButton?.classList.remove("active");
        ownedButton?.classList.add("active")
        wishlistButton?.classList.remove("active")
    }
}

wishlistButton!.onclick = () => {
    display("wishlist");
    if (!wishlistButton?.classList.contains("active")) {
        allButton?.classList.remove("active");
        ownedButton?.classList.remove("active")
        wishlistButton?.classList.add("active")
    }
}

display();