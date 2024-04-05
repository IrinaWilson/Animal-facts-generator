function displayFact(response) {
  let factsAnswerElement = document.querySelector("#facts-answer");
  new Typewriter("#facts-answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function clearInput() {
  document.querySelector("#user-instruction").value = "";
}

function showAnswer(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instruction");
  let context =
    "You are an animal expert and know a lot of interesting facts about them, please write three short and unique facts about animals. You mission is to generate a 3 line answer in basic HTML and separate each line with a <br />, do not repeat user instructions on each line. Do not include a title. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate interesting facts about ${instructionsInput.value}`;

  let apiKey = "80083fa950bb6bac505970t4eao412fe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let hiddenElement = document.querySelector("#facts-answer");
  hiddenElement.classList.remove("hidden");

  hiddenElement.innerHTML = `<span class = "generating">⏳</span> Generating facts about ${instructionsInput.value}`;
  clearInput();
  axios.get(apiUrl).then(displayFact);
}

let formElement = document.querySelector("#facts-generator");
formElement.addEventListener("submit", showAnswer);
