// section of values n stuff
const counterDisplay =  parseInt(localStorage.getItem("time")) || 0;
let wCredit = parseInt(localStorage.getItem("wCredit")) || 0;
let wPerS = parseInt(localStorage.getItem("wPerS")) || 1;
let upgPr = parseInt(localStorage.getItem("upg1")) || 130;
let upgPr3 = 600;
let upgExpo = 1e+24;
let expoIn = false;
let gamerun = false;
let idInter;
let expo;
//section 2
let wAsideCredit = parseInt(localStorage.getItem("wAsideCredit")) || 0;
let wAsidePerS = parseInt(localStorage.getItem("asideperS")) || 0;
let wAsideVar = parseInt(localStorage.getItem("asideVariable")) || false;
let wAsideMult = 2500;
let secondVar;
//infs
let infs = parseInt(localStorage.getItem("infs")) || 0;
// start this gaem
function gameSt() {
    if (!gamerun) {
        gamerun = true;
        expoIn = false;
        idInter = setInterval(() =>{
            wCredit += wPerS;
            saveDat();
            updateUI();
        }, 40);
    console.log("game's running");
    console.log(`upgrade 1 price is ${upgPr}`)
    }
}
window.addEventListener('load', () => {
      let secondsPassed = 0;
      const counterDisplay = document.getElementById("timetick");    
      setInterval(() => {
        secondsPassed++;

        const days = Math.floor(secondsPassed / (60 * 60 * 24));
        const hours = Math.floor((secondsPassed % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((secondsPassed % (60 * 60)) / 60);
        const seconds = secondsPassed % 60;

        const formattedTime = `${days}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        counterDisplay.textContent = formattedTime;
      }, 1000);
});
// also upgrades part 1
function upg1n1() {
    if (wCredit >= upgPr) {
        wCredit -= upgPr;
        wPerS += 5;
        upgPr = Math.floor(upgPr * 1.5);
        console.log(`price is now ${upgPr}`);
        saveDat();
        updateUI();
    }
}
function upg1e1() {
    if (wCredit >= upgPr3) {
        wCredit -= upgPr3;
        expoIn = true;
        upgPr3 = NaN;
        expo = setInterval (() => {
            wPerS *= 1.04;
            updateUI();
            console.log("expo is true")
        }, 4000);        
        console.log("expo bought");
    } else if (wCredit < upgPr3) {
        expoIn = false;
        upgPr3 = 600;
    }
}
function expoPush() {
    if (wCredit >= upgExpo) {
        wCredit -= upgExpo;
        wAsidePerS += 25;
        wPerS *= 300;
        saveDat();
        updateUI();
    }
}
// section 2 upgrades
let asideUnlock = 17000;
function convertWCr() {
    if (wCredit >= asideUnlock) {
        wCredit -= asideUnlock;
        wAsidePerS = 0.5;
        wAsideVar = true;
        asideUnlock = Infinity;
        console.log("second income unlocked");
        secondVar = setInterval (() => {
            wAsideCredit += wAsidePerS;
            saveDat();
        }, 350);
        saveDat();
    }
    else if (wAsideVar = true) {
        console.log("already bought(wAsideVar)");
    }
    else if (wCredit < asideUnlock) {
        console.log("not enough");
        wAsideVar = null;
    }
}

function getKAside() {
    if (wCredit >= 50000) {
        wCredit = 0;
        wPerS = 1;
        upgPr = 130;
        wAsideCredit += 1000;
        expoIn = false;
        upgPr3 = 600;
        clearInterval(expo);
        console.log("yes")
    }
}
function wAsidePerSNew() {
    if (wCredit >= 10000000) {
        wCredit -= 10000000;
        wAsidePerS = 15;
        console.log("upg perS bought");
        saveDat();
    } else if (wAsidePerS === 15) {
        console.log("wpg already bought");
    }
}

function upg1e2() {
    if (wAsideCredit >= wAsideMult) {
        wAsideCredit -= wAsideMult;
        wPerS *= 30.5;
        console.log("expo 2 bought");
        saveDat();
    } else if (wAsideCredit < wAsideMult) {
        console.log("bruh");
    }
}
// infinities (aka, section third)
function infVal() {
    if (wCredit == Infinity) {
        wCredit = 0;
        infs += 1;
        localStorage.clear("expo2in");
        localStorage.clear("upg1");
        expoIn = false;
        upgPr = 130;
        wPerS = 1;
        wAsideCredit = wAsideCredit / 70;
        clearInterval();
        saveDat()
        updateUI();
    } else if (wCredit < Infinity) {
        console.log("youre not enough")
    }
}
// random text for attention span
let tickerDisp = document.getElementById("tickerspan")
const textDisplay = [
"hello, your computer has virus",
"we dont have news for now, come back in 34 minutes",
"wowzers",
"so, just looking at numbers? nice.",
// "1/30 Silly Studios members think this is cool, that one is me",
"so, what's this about anyways?",
":]",
"if it runs MsPaint, you should be good",
"🚄🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃🚃",
"TypeScript sucks, it threw me 41 errors in this code"
]
showRandomHeadline();
setInterval(showRandomHeadline, 16500);
function showRandomHeadline() {
    const newSpan = tickerDisp.cloneNode(true);
    const randomText = textDisplay[Math.floor(Math.random() * textDisplay.length)];
    newSpan.textContent = randomText;

    newSpan.style.animation = "none";
    newSpan.offsetWidth;
    newSpan.style.animation = "scroll-left 15s linear forwards";

    tickerDisp.parentNode.replaceChild(newSpan, tickerDisp);
    tickerDisp = newSpan;
}
//format function (test only)
function formattAll() {
    localStorage.clear();
    wCredit = 0;
    wPerS = 1;
    wAsideCredit = 0;
    wAsidePerS = 0;
    infs = 0;
    upgPr = 130;
    gamerun = null;
    expoIn = null;
    wAsideVar = null;
    clearInterval(expo)
    clearInterval(gamerun)
    clearInterval(idInter)
    console.log("all gone!")
    updateUI();
}
function updateUI(){
    document.getElementById("testreset");
    document.getElementById("span1").textContent = wCredit;
    document.getElementById("span2").textContent = wAsideCredit;
    document.getElementById("span3").textContent = infs;
}
// save useless count
function saveDat() {
    localStorage.setItem("gamerun", gamerun);
    localStorage.setItem("wCredit", wCredit);
    localStorage.setItem("wPerS", wPerS);
    localStorage.setItem("upg1", upgPr);
    localStorage.setItem("wAsideCredit", wAsideCredit);
    localStorage.setItem("asideperS", wAsidePerS);
    localStorage.setItem("asideVariable", wAsideVar);
    localStorage.setItem("infs", infs);
}