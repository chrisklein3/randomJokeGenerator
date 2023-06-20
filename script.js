const emojiGen = ["&#128516", "&#128513", "&#128518", "&#128517", "&#128514", "&#129315"];

function changeEmoji() {
    let chosenEmoji = emojiGen[Math.floor(Math.random() * 6)];
    document.getElementById("emoji").innerHTML = chosenEmoji;
}

changeEmoji();

const emojiContainer = document.getElementById("emoji");
const jokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn")
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {

    btn.classList.remove("fadeSlower");
    emojiContainer.classList.remove("fadeSlower");
    jokeContainer.classList.remove("fade");


    fetch(url)
        .then(data => data.json())
        .then(item => {
            jokeContainer.textContent = `${item.joke}`;


            btn.classList.add("fadeSlower");
            emojiContainer.classList.add("fadeSlower");
            jokeContainer.classList.add("fade");
        });
    changeEmoji();
}


btn.addEventListener("click", getJoke);
getJoke();