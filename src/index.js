function displayFact(response) {
  let factsAnswerElement = document.querySelector("#facts-answer");
  new Typewriter("#facts-answer", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 20,
  });
}

function showAnswer(event) {
  event.preventDefault();
  let instructionsInput = document.querySelector("#user-instruction");
  let context =
    "You are an animal expert and know a lot of interesting facts about them, please write short and unique facts about animals. You mission is generate an interesting fact about animals. Make sure the answer is short. Do not include a title. Make sure to follow the user instructions.";
  let prompt = `User instructions: Generate an interesting fact about ${instructionsInput.value}`;

  let apiKey = "80083fa950bb6bac505970t4eao412fe";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let hiddenElement = document.querySelector("#facts-answer");
  hiddenElement.classList.remove("hidden");

  hiddenElement.innerHTML = `<span class = "generating">⏳</span> Generating a fact about ${instructionsInput.value}`;

  axios.get(apiUrl).then(displayFact);
}

let formElement = document.querySelector("#facts-generator");
formElement.addEventListener("submit", showAnswer);
