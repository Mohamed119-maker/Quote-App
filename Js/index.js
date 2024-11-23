var qoutes = [
    "“Be yourself; everyone else is already taken.”",
    "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    "“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
    "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    "“You only live once, but if you do it right, once is enough.”",
    "“Everything you can imagine is real.”",

]

var aouthersName = [
    "― Oscar Wilde",
    "― Albert Einstein",
    "― Bernard M. Baruch",
    "― Mahatma Gandhi",
    "― Ralph Waldo Emerson",
    "― Mae West",
    "― Pablo Picasso"
]

var aouthersImg = [
    'img/3565._UX200_CR0,15,200,200_.jpg',
    'img/9810._UX200_CR0,14,200,200_.jpg',
    'img/5768330._UX200_CR0,30,200,200_.jpg',
    'img/5810891._UX200_CR0,21,200,200_.jpg',
    'img/12080._UX200_CR0,34,200,200_.jpg',
    'img/259666._UX200_CR0,16,200,200_.jpg',
    'img/3253._UX200_CR0,40,200,200_.jpg'

]
qouteBtn = document.querySelector("button")
heartBtn = document.querySelector(".heart")
soundBtn = document.querySelector(".sound")
copyBtn = document.querySelector(".copy")
twitterBtn = document.querySelector(".twitter")
let lastNum = null;

function randomQuotes() {
    let num;
    do {
        num = Math.floor(Math.random() * qoutes.length);
    } while (num === lastNum);

    document.getElementById('quote').innerHTML = qoutes[num];
    document.getElementById('auotherName').innerHTML = aouthersName[num];
    document.getElementById('image').src = aouthersImg[num];

    lastNum = num;
}

qouteBtn.addEventListener("click", randomQuotes)

soundBtn.addEventListener("click", () => {
    let utterance = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${auotherName.innerHTML}`);
    speechSynthesis.speak(utterance);
})

copyBtn.addEventListener("click", () => {
    navigator.clipboard.writeText(quote.innerHTML)
})

twitterBtn.addEventListener("click", () => {
    let tweetUrl = `https://twitter.com/intent/tweet?url = ${quote.innerHTML}`;
    window.open(tweetUrl, "_blank")
})

