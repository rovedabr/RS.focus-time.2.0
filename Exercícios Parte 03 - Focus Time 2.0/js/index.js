
const buttonPlayTimer = document.querySelector(".play-timer")
const buttonStopTimer = document.querySelector(".stop-timer")
const buttonAddFiveMinutes = document.querySelector(".add-five-minutes")
const buttonRemoveFiveMinutes = document.querySelector(".remove-five-minutes")

const buttonSoundForest = document.querySelector(".forest")
const buttonSoundRain = document.querySelector(".rain")
const buttonCoffeeShop = document.querySelector(".coffee-shop")
const buttonFireplace = document.querySelector(".fireplace")

const soundForest = new Audio("./sounds/Floresta.wav")
const soundRain = new Audio("./sounds/Chuva.wav")
const soundCoffeeShop = new Audio("./sounds/Cafeteria.wav")
const soundFireplace = new Audio("./sounds/Lareira.wav")

soundForest.loop = true
soundRain.loop = true
soundCoffeeShop.loop = true
soundFireplace.loop = true

const secondsDisplay = document.querySelector(".seconds")
const minutesDisplay = document.querySelector(".minutes")

var minutes = Number(minutesDisplay.textContent)
var seconds = Number(secondsDisplay.textContent)
var newMinutes
var moreFiveMinutes
var timerTimeOut

function countDown() {
  timerTimeOut = setTimeout(function() {

    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0) {
      stopSounds()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2,"0")
    }

    secondsDisplay.textContent = String(seconds -1).padStart(2,"0")

    countDown()

  }, 1000)
}

function playSoundForest() {
  soundForest.play()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()

  buttonSoundForest.classList.add("on")
  buttonSoundRain.classList.remove("on")
  buttonCoffeeShop.classList.remove("on")
  buttonFireplace.classList.remove("on")

}

function playSoundRain() {
  soundRain.play()
  soundForest.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()

  buttonSoundRain.classList.add("on")
  buttonSoundForest.classList.remove("on")
  buttonCoffeeShop.classList.remove("on")
  buttonFireplace.classList.remove("on")
}

function playSoundCofeeShop() {
  soundCoffeeShop.play()
  soundForest.pause()
  soundRain.pause()
  soundFireplace.pause()

  buttonCoffeeShop.classList.add("on")
  buttonSoundRain.classList.remove("on")
  buttonSoundForest.classList.remove("on")
  buttonFireplace.classList.remove("on")
}

function playSoundFirePlace() {
  soundFireplace.play()
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()

  buttonFireplace.classList.add("on")
  buttonSoundRain.classList.remove("on")
  buttonSoundForest.classList.remove("on")
  buttonCoffeeShop.classList.remove("on")
}

function stopSounds() {
  soundForest.pause()
  soundRain.pause()
  soundCoffeeShop.pause()
  soundFireplace.pause()
}

function resetButtons() {
  buttonSoundForest.classList.remove("on")
  buttonSoundRain.classList.remove("on")
  buttonCoffeeShop.classList.remove("on")
  buttonFireplace.classList.remove("on")
}

buttonPlayTimer.addEventListener("click", () => { countDown() 
  var newMinutes = Number(prompt("Defina o tempo:"))
  minutesDisplay.textContent = String(newMinutes)
})

buttonAddFiveMinutes.addEventListener("click", function() {
  var moreFiveMinutes = Number(minutes + 5)
  minutes = moreFiveMinutes
  minutesDisplay.textContent = String(moreFiveMinutes)
})

buttonRemoveFiveMinutes.addEventListener("click", function() {
  var lessFiveMinutes = Number(minutes - 5)
  minutes = lessFiveMinutes
  minutesDisplay.textContent = String(lessFiveMinutes)
})

buttonStopTimer.addEventListener("click", function() {
  clearInterval(timerTimeOut)
  minutesDisplay.textContent = String(minutes)
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
  stopSounds()
  resetButtons()
})


buttonSoundForest.addEventListener("click", function() {
  playSoundForest()
})

buttonSoundRain.addEventListener("click", function() {
  playSoundRain()
})

buttonCoffeeShop.addEventListener("click", function() {
  playSoundCofeeShop()
})

buttonFireplace.addEventListener("click", function() {
  playSoundFirePlace()
})