/* ========================= COMPLETE WORKING FINAL script.js ========================= */


/* INTRO */

const intro = document.getElementById("intro");
const song = document.getElementById("song");

intro.addEventListener("click",()=>{

  intro.style.display = "none";

  song.play();

});


/* HEARTS */

function createHeart(){

  const heart = document.createElement("div");

  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";

  heart.style.fontSize = Math.random() * 20 + 20 + "px";

  heart.style.animationDuration = Math.random() * 3 + 4 + "s";

  document.querySelector(".hearts-container").appendChild(heart);

  setTimeout(()=>{

    heart.remove();

  },7000);

}

setInterval(createHeart,200);


/* COUNTDOWN */

const anniversary = new Date("May 18, 2026 00:00:00").getTime();

setInterval(()=>{

  const now = new Date().getTime();

  const distance = anniversary - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);


/* QUOTES */

const quotes = [

"“A perfect family begins with loving parents ❤️”",

"“Your love story is our favorite story ✨”",

"“Together forever looks beautiful on you both 💞”",

"“Maa Papa = Purest form of love ❤️”",

"“Home feels special because of you both 🏡”"

];

let quoteIndex = 0;

const quoteSlider = document.getElementById("quoteSlider");

setInterval(()=>{

  quoteIndex++;

  if(quoteIndex >= quotes.length){

    quoteIndex = 0;

  }

  quoteSlider.innerHTML = quotes[quoteIndex];

},3000);


/* POPUPS */

const quotesBtn = document.getElementById("quotesBtn");
const letterBtn = document.getElementById("letterBtn");

const quotesPopup = document.getElementById("quotesPopup");
const letterPopup = document.getElementById("letterPopup");

const closeQuotes = document.getElementById("closeQuotes");
const closeLetter = document.getElementById("closeLetter");

quotesBtn.addEventListener("click",()=>{

  quotesPopup.style.display = "flex";

});

letterBtn.addEventListener("click",()=>{

  letterPopup.style.display = "flex";

});

closeQuotes.addEventListener("click",()=>{

  quotesPopup.style.display = "none";

});

closeLetter.addEventListener("click",()=>{

  letterPopup.style.display = "none";

});


/* CAKE */

const cake = document.getElementById("cake");

cake.addEventListener("click",()=>{

  const message = document.getElementById("anniversaryMessage");

  message.classList.add("show");

  setTimeout(()=>{

    message.classList.remove("show");

  },5000);

});


/* CURSOR EFFECT */

document.addEventListener("mousemove",(e)=>{

  const sparkle = document.createElement("div");

  sparkle.innerHTML = "💖";

  sparkle.style.position = "fixed";

  sparkle.style.left = e.clientX + "px";

  sparkle.style.top = e.clientY + "px";

  sparkle.style.pointerEvents = "none";

  sparkle.style.fontSize = "18px";

  sparkle.style.zIndex = "99999";

  document.body.appendChild(sparkle);

  setTimeout(()=>{

    sparkle.remove();

  },500);

});
/* VIDEO PLAY PAR SONG PAUSE */

const specialVideo = document.getElementById("specialVideo");


specialVideo.addEventListener("play",()=>{

  song.pause();

});


specialVideo.addEventListener("pause",()=>{

  song.play();

});


specialVideo.addEventListener("ended",()=>{

  song.play();

});
