// tady je místo pro náš program

//při najetí myší text ztuční

let odstavec = document.querySelector(".odstavec");

function priNajeti() {
    let odstavec = document.querySelector(".odstavec");
    odstavec.style.fontWeight = "bold"
}

function priOdjeti() {
    let odstavec = document.querySelector(".odstavec");
    odstavec.style.fontWeight = "normal"
}


function prepniZcervenani(text) {
    odstavec.classList.toggle('cervena');
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

function volume0() {
    prehravac.volume = 0.0
}

function volumeNapul() {
    prehravac.volume = 0.5
}

function volumeHlasite() {
    prehravac.volume = 1.0
}

function resetAudio() {
    prehravac.currentTime = 0;
}