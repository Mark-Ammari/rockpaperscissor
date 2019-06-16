const player_rock = document.querySelector("#pl-rock")
const player_paper = document.querySelector("#pl-paper")
const player_scissor = document.querySelector("#pl-scissors")

const ai_img = document.querySelector(".ai-img")
const player_img = document.querySelector(".player-img")
const ai_answer = document.querySelector(".ai-answer")
const player_answer = document.querySelector(".pl-answer")

const player_choices = document.querySelector(".player-choices")

const rps = ['rock', 'paper', 'scissor']
const faces = ['lost', 'thinking', 'win']

player_choices.addEventListener('click', function(e) {
    e.target.style.transform = 'scale(0.9)'
    e.target.style.transition = '200ms ease-in-out'
    setTimeout(function() {
        e.target.style.transform = 'scale(1.0)'
    }, 200)
    player_answer.innerHTML = "<img src=" + e.target.src + " />"
    player_answer.style.visibility = "visible"
    player_answer.id = e.target.id
    ai_answer.style.visibility = "hidden"
    setTimeout(function() {
        ai_answer.style.visibility = "visible"
    }, 1000)
    let randomIndex = Math.floor(Math.random()*3)
    ai_answer.innerHTML = "<img src=" + "./assets/player/" + rps[randomIndex] + ".png" + " />"
    ai_answer.id = rps[randomIndex]
    if (player_answer.id === "pl-rock" && ai_answer.id === "scissor") {
        player_img.src = "./assets/ai/win.png"
        ai_img.src = "./assets/ai/lost.png"
    } else if (player_answer.id === "pl-paper" && ai_answer.id === "rock") {
        player_img.src = "./assets/ai/win.png"
        ai_img.src = "./assets/ai/lost.png"
    } else if (player_answer.id === "pl-scissor" && ai_answer.id === "paper") {
        player_img.src = "./assets/ai/win.png"
        ai_img.src = "./assets/ai/lost.png"
    } else if (player_answer.id.substring(3) === ai_answer.id){
        player_img.src = "./assets/ai/thinking.png"
        ai_img.src = "./assets/ai/thinking.png"
    } else {
        player_img.src = "./assets/ai/lost.png"
        ai_img.src = "./assets/ai/win.png"
    } 
    console.log(player_img.src)
})






