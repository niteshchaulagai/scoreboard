
let homeScore = document.getElementById("home-score")
let guestScore = document.getElementById("guest-score")

homeScore.textContent = 0
guestScore.textContent = 0

let scoreHome = 0
let scoreGuest = 0

function add1ScoreH(){
    scoreHome += 1
    homeScore.textContent = scoreHome
}
function add2ScoreH(){
    scoreHome += 2
    homeScore.textContent = scoreHome
}
function add3ScoreH(){
    scoreHome += 3
    homeScore.textContent = scoreHome
}
function minus1Score(){
    scoreHome -= 1
    homeScore.textContent = scoreHome
}

function add1ScoreG() {
    scoreGuest += 1
    guestScore.textContent = scoreGuest
}
function add2ScoreG() {
    scoreGuest += 2
    guestScore.textContent = scoreGuest
}
function add3ScoreG() {
    scoreGuest += 3
    guestScore.textContent = scoreGuest
}
function minus1ScoreG() {
    scoreGuest -= 1
    guestScore.textContent = scoreGuest
}
