// section of values n stuff
let wCredit = parseInt(localStorage.getItem("wCredit")) || 0;
let wPerS = parseInt(localStorage.getItem("wPerS")) || 1;
let upgPr = parseInt(localStorage.getItem("upg1")) || 130;
let upgPr3 = 600;
let expoIn = false;
let gamerun = false;
let idInter;
let expo;
//section 2
let wAsideCredit = parseInt(localStorage.getItem("wAsideCredit")) || 0;
let wAsidePerS = 0;
let wAsideVar = parseInt(localStorage.getItem("asideVariable")) || false;
let secondVar;
// start this shi
// also upgrades part 1
function gameSt() {
    if (!gamerun) {
        gamerun = true
        idInter = setInterval(() =>{
            wCredit += wPerS;
            saveDat();
            updateUI();
        }, 40);
    console.log("game's running");
    console.log(`upgrade 1 price is ${upgPr}`)
    }
}
function upg1n1() {
    if (wCredit >= upgPr) {
        wCredit -= upgPr;
        wPerS += 5;
        upgPr = Math.floor(upgPr * 1.5);
        console.log(upgPr);
        saveDat();
        updateUI();
    }
}
function upg1e1() {
    if (wCredit >= upgPr3) {
        wCredit -= upgPr3;
        expoIn = true;
        console.log("expo bought");
    }
    if (expoIn = true) {
        expo = setInterval (() => {
            wPerS *= 1.02;
            saveDat()
            console.log("expo is true")
        }, 4000);
    }
    else {
        expoIn = null;
    }
}
// section 2 upgrades
let asideUnlock = 17000;
function convertWCr() {
    if (wCredit >= asideUnlock) {
        wCredit -= asideUnlock;
        wAsidePerS = 0.5;
        wAsideVar = true;
        console.log("second income unlocked");
        saveDat();
    }
    else {
        console.log("not enough");
        wAsideVar = null;
    }
}
if (wAsideVar = true) {
    secondVar = setInterval (() => {
        wAsideCredit += wAsidePerS;
        saveDat();
    }, 350);
}
if (wAsideVar = true);
console.log("already bought");

function getKAside() {
    if (wCredit >= 50000) {
        wCredit = 0;
        wPerS = 1;
        wAsideCredit += 10000;
        expoIn = null;
        clearInterval(expo);
    }
}
//format function (test only)
function formattAll() {
    localStorage.clear();
    wCredit = 0;
    wPerS = 1;
    wAsideCredit = 0;
    upgPr = 130;
    gamerun = null;
    expoIn = null;
    wAsideVar = null;
    clearInterval(gamerun)
    clearInterval(expo)
    clearInterval(secondVar)
    console.log("all gone!")
    updateUI();
}
function updateUI(){
    document.getElementById("testreset");
    document.getElementById("span1").textContent = wCredit;
    document.getElementById("span2").textContent = wAsideCredit;
}
// save useless count
function saveDat() {
    localStorage.setItem("gamerun", gamerun);
    localStorage.setItem("wCredit", wCredit);
    localStorage.setItem("wPerS", wPerS);
    localStorage.setItem("upg1", upgPr);
    localStorage.setItem("wAsideCredit", wAsideCredit);
    localStorage.setItem("asideVariable", wAsideVar);
}