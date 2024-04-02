function showAnswer(event) {
  event.preventDefault();

  let factsAnswerElement = document.querySelector("#facts-answer");
  new Typewriter("#facts-answer", {
    strings:
      "A pistol shrimp can make a sound louder than a jet engine by snapping its claw",
    autoStart: true,
    cursor: null,
    delay: 4,
  });
}

let formElement = document.querySelector("#facts-generator");
formElement.addEventListener("submit", showAnswer);
