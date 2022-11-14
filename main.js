const list = document.querySelectorAll(".list1")
const buttonList = document.querySelector("#buttonList")

// console.log(list)
//-------------------DOM 1
buttonList.onclick = () => {
    list.forEach(e => {
        if (e.style.background === "red") {
            e.style.background = "white"
        }
        else { e.style.background = "red" }
    })
}

//-------------------- DOM 2
const listRock = document.querySelector("#rockList");
const listPunk = document.querySelector("#punkList");
const listHiphop = document.querySelector("#hiphopList");
const listReggae = document.querySelector("#reggaeList");
const listClasic = document.querySelector("#clasicList");


const buttonRock = document.querySelector("#rockButton");
const buttonPunk = document.querySelector("#punkButton");
const buttonHiphop = document.querySelector("#hiphopButton");
const buttonReggae = document.querySelector("#reggaeButton");
const buttonClasic = document.querySelector("#clasicButton");


buttonRock.onclick = e => {
    if (listRock.textContent === "ROCK") {
        listRock.textContent = "THE BEATLES"
    } else if (listRock.textContent === "THE BEATLES") {
        listRock.textContent = "ROLLING STONES"
    } else if (listRock.textContent === "ROLLING STONES") {
        listRock.textContent = "QUEEN"
    } else if (listRock.textContent === "QUEEN") {
        listRock.textContent = "ROCK"
    }
}

buttonPunk.onclick = e => {
    if (listPunk.textContent === "PUNK") {
        listPunk.textContent = "RAMONES"
    } else if (listPunk.textContent === "RAMONES") {
        listPunk.textContent = "THE CLASH"
    } else if (listPunk.textContent === "THE CLASH") {
        listPunk.textContent = "NOFX"
    } else if (listPunk.textContent === "NOFX") {
        listPunk.textContent = "PUNK"
    }
}

buttonHiphop.onclick = e => {
    if (listHiphop.textContent === "HIPHOP") {
        listHiphop.textContent = "KASE-O"
    } else if (listHiphop.textContent === "KASE-O") {
        listHiphop.textContent = "NACH"
    } else if (listHiphop.textContent === "NACH") {
        listHiphop.textContent = "CANSERBERO"
    } else if (listHiphop.textContent === "CANSERBERO") {
        listHiphop.textContent = "HIPHOP"
    }
}

buttonReggae.onclick = e => {
    if (listReggae.textContent === "REGGAE") {
        listReggae.textContent = "BOB MARLEY"
    } else if (listReggae.textContent === "BOB MARLEY") {
        listReggae.textContent = "PETER TOSH"
    } else if (listReggae.textContent === "PETER TOSH") {
        listReggae.textContent = "BUNNY WAILER"
    } else if (listReggae.textContent === "BUNNY WAILER") {
        listReggae.textContent = "REGGAE"
    }
}


buttonClasic.onclick = e => {
    if (listClasic.textContent === "CLASIC MUSIC") {
        listClasic.textContent = "BEETHOVEN"
    } else if (listClasic.textContent === "BEETHOVEN") {
        listClasic.textContent = "MOZART"
    } else if (listClasic.textContent === "MOZART") {
        listClasic.textContent = "TCHAIKOVSKY"
    } else if (listClasic.textContent === "TCHAIKOVSKY") {
        listClasic.textContent = "CLASIC MUSIC"
    }
}
