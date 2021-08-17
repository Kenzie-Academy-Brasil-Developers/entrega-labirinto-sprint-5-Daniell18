const map = [
    "WWWWWWWWWWWWWWWWWWWWW",
    "W   W     W     W W W",
    "W W W WWW WWWWW W W W",
    "W W W   W     W W   W",
    "W WWWWWWW W WWW W W W",
    "W         W     W W W",
    "W WWW WWWWW WWWWW W W",
    "W W   W   W W     W W",
    "W WWWWW W W W WWW W F",
    "S     W W W W W W WWW",
    "WWWWW W W W W W W W W",
    "W     W W W   W W W W",
    "W WWWWWWW WWWWW W W W",
    "W       W       W   W",
    "WWWWWWWWWWWWWWWWWWWWW",
];

const winscreen=document.querySelector(".winscreen")
const game = document.getElementById("game")
const button=document.querySelector("#button")
let posicao=199
function Creatlab() {
    for (let i = 0; i < map.length; i++) {
        let x = document.createElement("div")
        game.appendChild(x)
        x.classList.add("nulo")
        for (let j = 0; j < map[i].length; j++) {
            let y = document.createElement("div")
            x.appendChild(y)
            
            if (map[i][j] === "W") {
              
                y.classList.add("parede")
            } else {
                y.classList.add("espaco")
            }
            if(map[i][j]==="F"){
                y.classList.add("win")
            }

            if(map[i][j]==="S"){
                y.classList.add("player")
            }

        }
    }
}
Creatlab()
const t = document.querySelectorAll("div")
function player(e) {
    if (e.key === "ArrowUp") {
        if (t[posicao - 22].classList.contains("espaco")) {
            t[posicao].classList.remove("player")
            t[posicao - 22].classList.add("player")  
            posicao=posicao-22      
        }
    }
    if (e.key === "ArrowDown") {
        if (t[posicao + 22].classList.contains("espaco")) {
            t[posicao].classList.remove("player")
            t[posicao + 22].classList.add("player")
            posicao=posicao+22 
        }
    }
    if (e.key === "ArrowRight") {
        if (t[posicao + 1].classList.contains("espaco")) {
            t[posicao].classList.remove("player")
            t[posicao + 1].classList.add("player")
            posicao=posicao+1 
        }
    }
    if (e.key === "ArrowLeft") {
        if (t[posicao - 1].classList.contains("espaco")) {
            t[posicao].classList.remove("player")
            t[posicao - 1].classList.add("player")
            posicao=posicao-1
        }
    }
    win(posicao)
}
function win (){
    if(t[posicao].classList.contains("win")&&t[posicao].classList.contains("player")){
        t[posicao].style.backgroundColor="black"
        tecla=document.removeEventListener('keydown',player)
        window.location.href = "telavitoria.html";
        
    }
}
document.addEventListener('keydown', player)
