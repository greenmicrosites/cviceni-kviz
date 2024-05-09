
const question = document.querySelector(".question")
question.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon."

const answerElement = document.querySelector(".answer__text")
const answer = prompt(question.textContent = "Uveďte příjmení amerického vynálezce, který v roce 1876 jako první úspěšně podal patent na zařízení, které je dnes považováno za první telefon.")

answerElement.textContent = answer

if (answer == "Bell") {
    answerElement.classList.add("answer--correct") 
} else {
    answerElement.classList.add("answer--wrong")
}

