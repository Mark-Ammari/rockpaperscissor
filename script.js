const player_rock = document.querySelector("#pl-rock")
const player_paper = document.querySelector("#pl-paper")
const player_scissor = document.querySelector("#pl-scissors")

const ai_img = document.querySelector(".ai-img")
const player_img = document.querySelector(".player-img")
const ai_answer = document.querySelector("#ai-answer")
const player_answer = document.querySelector("#pl-answer")

const result = document.querySelector("#result")
const resetBtn = document.querySelector("#reset")

const player_choices = document.querySelector(".player-choices")

const scoreboard = document.querySelector(".scoreboard")

const rps = ['rock', 'paper', 'scissor']
const faces = ['lost', 'thinking', 'win']

let cpuScore = 0
let playerScore = 0
let round = 3

player_choices.addEventListener('click', function(e) {
    player_answer.innerHTML = "<img src=" + e.target.src + " />"
    player_answer.style.visibility = "visible"
    player_answer.id = e.target.id
    ai_answer.style.visibility = "hidden"
    player_answer.style.transform = 'scale(0.9)'
    player_answer.style.transition = '200ms ease-in-out'
    setTimeout(function() {
        player_answer.style.transform = 'scale(1.0)'
    }, 200)
    round--
    setTimeout(function() {
        ai_answer.style.visibility = "visible"
        if (player_answer.id === "pl-rock" && ai_answer.id === "scissor") {
            player_img.src = "./assets/ai/win.png"
            ai_img.src = "./assets/ai/lost.png"
            playerScore++
            scoreboard.children[3].innerHTML = playerScore
        } else if (player_answer.id === "pl-paper" && ai_answer.id === "rock") {
            player_img.src = "./assets/ai/win.png"
            ai_img.src = "./assets/ai/lost.png"
            playerScore++
            scoreboard.children[3].innerHTML = playerScore
        } else if (player_answer.id === "pl-scissor" && ai_answer.id === "paper") {
            player_img.src = "./assets/ai/win.png"
            ai_img.src = "./assets/ai/lost.png"
            playerScore++
            scoreboard.children[3].innerHTML = playerScore
        } else if (player_answer.id.substring(3) === ai_answer.id) {
            player_img.src = "./assets/ai/tie.png"
            ai_img.src = "./assets/ai/tie.png"
            playerScore++
            scoreboard.children[3].innerHTML = playerScore
            cpuScore++
            scoreboard.children[1].innerHTML = cpuScore
        } else {
            player_img.src = "./assets/ai/lost.png"
            ai_img.src = "./assets/ai/win.png"
            cpuScore++
            scoreboard.children[1].innerHTML = cpuScore
        }
        if (round <= 0 && cpuScore === playerScore) {
            console.log("tie")
            result.style.display = "block"
            result.innerHTML = "TIE"
            resetBtn.style.display = "block"
            result.style.color = "black"
        } else if (round <= 0 && cpuScore < playerScore) {
            console.log("player win")
            result.style.display = "block"
            result.innerHTML = "YOU WIN"
            result.style.color = "green"
            resetBtn.style.display = "block"
        } else if (round <= 0 && cpuScore > playerScore) {
            console.log("cpu win")
            result.style.display = "block"
            result.innerHTML = "YOU LOSE"
            result.style.color = "red"
            resetBtn.style.display = "block"
        }
    }, 1000)
    let randomIndex = Math.floor(Math.random()*3)
    ai_answer.innerHTML = "<img src=" + "./assets/player/" + rps[randomIndex] + ".png" + " />"
    ai_answer.id = rps[randomIndex]
    player_img.src = "./assets/ai/thinking.png"
    ai_img.src = "./assets/ai/thinking.png"
})

resetBtn.addEventListener('click', function() {
    player_answer.innerHTML = "<img />"
    ai_answer.style.visibility = "hidden"
    player_answer.style.visibility = "hidden"
    round = 3
    cpuScore = 0
    playerScore = 0
    player_img.src = "./assets/ai/thinking.png"
    ai_img.src = "./assets/ai/thinking.png"
    result.style.display = "none"
    result.innerHTML = ""
    result.style.color = ""
    resetBtn.style.display = "none"
    scoreboard.children[1].innerHTML = 0
    scoreboard.children[3].innerHTML = 0
})









