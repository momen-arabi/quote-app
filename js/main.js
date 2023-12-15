var quoteArr = [
  {
    qt: "Be yourself; everyone else is already taken.",
    at: "Oscar Wilde",
  },
  {
    qt: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind",
    at: "Bernard M. Baruch",
  },
  {
    qt: "It is better to be hated for what you are than to be loved for what you are not.",
    at: "Andre Gide, Autumn Leaves",
  },
  {
    qt: "You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
    at: "Dr. Seuss, Oh, the Places You'll Go!",
  },
  {
    qt: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
    at: "J.K. Rowling, Harry Potter and the Sorcerer's Stone",
  },
  {
    qt: "If you can't explain it to a six year old, you don't understand it yourself.",
    at: "Albert Einstein",
  },
  {
    qt: "Anyone who thinks sitting in church can make you a Christian must also think that sitting in a garage can make you a car.",
    at: "Garrison Keillor",
  },
  {
    qt: "Sometimes the questions are complicated and the answers are simple.",
    at: "Dr. Seuss",
  },
  {
    qt: "Don't think or judge, just listen.",
    at: "Sarah Dessen, Just Listen",
  },
  {
    qt: "And once the storm is over, you won’t remember how you made it through, how you managed to survive. You won’t even be sure, whether the storm is really over. But one thing is certain. When you come out of the storm, you won’t be the same person who walked in. That’s what this storm’s all about.",
    at: "Haruki Murakami, Kafka on the Shore",
  },
];

var addQuoteBtn = document.getElementById("add-quote");
var instruction = document.getElementById("inst");

addQuoteBtn.onclick = function () {
  if (quoteArr.length > 0) {
    var num = Math.random() * (quoteArr.length - 1);
    var index = Math.round(num);
    document.getElementById("quote").innerHTML = `
     <figure class="shadow-lg px-3 py-4 bg-light bg-gradient rounded">
      <blockquote class="blockquote">
        <p>"${quoteArr[index].qt}"</p>
      </blockquote>
      <figcaption class="blockquote-footer text-center mb-0 pt-1">${quoteArr[index].at}</figcaption>
     </figure>
    `;
    quoteArr.splice(index, 1);
  } else {
    instruction.innerHTML = `Press the button below to refresh the page!`;

    document.getElementById("quote").innerHTML = "";
    addQuoteBtn.classList.add("d-none");

    var resetQuoteBtn = document.getElementById("reset-quote");
    resetQuoteBtn.classList.remove("d-none");
    resetQuoteBtn.onclick = function () {
      location.reload();
    };
  }
};
