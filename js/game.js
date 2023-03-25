const grid = document.querySelector(".grid");
const spanplayer = document.querySelector(".player");
const timer = document.querySelector('.timer')

const characters = [
    "beth",
    "jerry",
    "jessica",
    "morty",
    "pessoa-passaro",
    "pickle-rick",
    "rick",
    "summer",
    "meeseeks",
    "scroopy",
];

const createElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
};

let firstcard = "";
let secondcard = "";

const checkEndGame = () => {
    const disabledcard = document.querySelectorAll(".disabled-card");

    if (disabledcard.length === 20) {     
        clearInterval(this.loop)
   alert(`Parabéns, ${spanplayer.innerHTML}! Seu tempo foi: ${timer.innerHTML}`);
    }
};

const checkCards = () => {
    const firstCharacter = firstcard.getAttribute("data-character");
    const secondcharacter = secondcard.getAttribute("data-character");

    if (firstCharacter === secondcharacter) {
        firstcard.firstChild.classList.add("disabled-card");
        secondcard.firstChild.classList.add("disabled-card");
        firstcard = "";
        secondcard = "";

        checkEndGame();
    } else {
        setTimeout(() => {
            firstcard.classList.remove("reveal-card");
            secondcard.classList.remove("reveal-card");

            firstcard = "";
            secondcard = "";
        }, 500);
    }
};

const revealCard = ({ target }) => {
    if (target.parentNode.className.includes("reveal-card")) {
        return;
    }
    if (firstcard === "") {
        target.parentNode.classList.add("reveal-card");
        firstcard = target.parentNode;
    } else if (secondcard === "") {
        target.parentNode.classList.add("reveal-card");
        secondcard = target.parentNode;
    }

    checkCards();
};

const createCard = (characters) => {
    const card = createElement("div", "card");
    const front = createElement("div", "face front");
    const back = createElement("div", "face back");

    front.style.backgroundImage = `url('../images/${characters}.png')`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener("click", revealCard);
    card.setAttribute("data-character", characters);

    return card;
};

const loadgame = () => {
    const duplicateCharacters = [...characters, ...characters];

    const shuffledarray = duplicateCharacters.sort(() => Math.random() - 0.5);

    shuffledarray.forEach((characters) => {
        const card = createCard(characters);
        grid.appendChild(card);
    });
};

const startTimer = () => {
 this.loop = setInterval(() => {
    
    const currentTimer = +timer.innerHTML;
    timer.innerHTML = currentTimer + 1;

}, 1000);
}

window.onload = () => {
    const playerName = localStorage.getItem("player");

    spanplayer.innerHTML = playerName;

    startTimer()
    loadgame();


};
