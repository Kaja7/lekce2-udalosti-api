// tady je místo pro náš program

//při najetí myší text ztuční
function priNajeti() {
    let odstavec = document.querySelector(".odstavec");
    odstavec.style.fontWeight = "bold"
}

let odstavec = document.querySelector(".odstavec");

function cervenyPoKliknuti(event) {
    odstavec.classlist.add(".cervena");
    console.log(event);
}

function vetsiPoKliknuti(event) {
    odstavec.style.fontSize = "17px";
    console.log(event)
}

//nastavení audio
let prehravac = document.querySelector(".mujPrehravac")

function spustAudio() {
    prehravac.play();
}

function zastavAudio() {
    prehravac.pause();
}

function resetAudio() {
    prehravac.currentTime() = 0;
}