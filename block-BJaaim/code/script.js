let form = document.querySelector("form");
let formBox = document.querySelector(".form");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let quesNo = document.querySelector(".quesNo");
let countdownElem = document.querySelector(".time");

// CountDown
const startingMinutes = data.length / 2;
let time = startingMinutes * 60;

setInterval(updateCountdown, 1000);
function updateCountdown() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  countdownElem.innerText = `${minutes} : ${seconds}`;
  time--;
}

// Question
class Question {
  constructor(title, options, correctIndex) {
    this.question = title;
    this.options = options;
    this.correctAnswerIndex = correctIndex;
  }

  isCorrect(answer) {
    return this.options[this.correctAnswerIndex] === answer;
  }

  getCorrectAnswer() {
    return this.options[this.correctAnswerIndex];
  }
}

// Quiz
class Quiz {
  constructor(questions = [], score = 0) {
    this.questions = data.map((elm) => {
      return new Question(elm.question, elm.options, elm.correctAnswerIndex);
    });
    this.score = score;
    this.activeIndex = 0;
  }

  // addQuestion(title, options, correctAnswerIndex) {
  //   let question = new Question(title, options, correctAnswerIndex);
  //   this.questions = question;
  // }

  handleNextBtn(event) {
    // localStorage.clear();
    this.activeIndex += 1;
    this.createUI();
  }

  handlePrevBtn() {
    this.activeIndex -= 1;
    this.createUI();
  }

  handleScore() {
    this.score += 1;
    console.log(this.score, "score");
  }

  handleButtons() {
    if (this.activeIndex === 0) {
      prev.style.visibility = "hidden";
      next.style.visibility = "visible";
    } else if (this.activeIndex === this.questions.length - 1) {
      prev.style.visibility = "visible";
      next.style.visibility = "hidden";
    } else {
      prev.style.visibility = "visible";
      next.style.visibility = "visible";
    }
  }

  createUI() {
    formBox.innerHTML = "";
    let activeQuestion = this.questions[this.activeIndex];
    console.log(activeQuestion);

    let legend = document.createElement("legend");
    legend.innerText = activeQuestion.question;
    let optionBox = document.createElement("div");
    optionBox.classList.add("option-box");

    activeQuestion.options.forEach((option, index) => {
      let input = document.createElement("input");
      input.id = `option-${index}`;
      input.type = `radio`;
      input.name = `options`;
      input.value = option;
      let label = document.createElement("label");
      label.setAttribute("for", `option-${index}`);
      label.innerText = option;
      let divOpt = document.createElement("div");
      divOpt.append(input, label);
      optionBox.append(divOpt);

      form.addEventListener("submit", (event) => {
        event.preventDefault();
        if (input.checked) {
          console.log(activeQuestion);
          if (activeQuestion.isCorrect(input.value)) {
            // this.handleSco;
          }
        }
      });
    });

    this.handleButtons();

    formBox.append(legend, optionBox);
    quesNo.innerText = `Question ${this.activeIndex + 1} of ${data.length}`;
  }
}

let quiz = new Quiz(data, 0);

quiz.createUI();

// form.addEventListener("submit", (event) => {
//   event.preventDefault();
// });

next.addEventListener("click", quiz.handleNextBtn.bind(quiz));
prev.addEventListener("click", quiz.handlePrevBtn.bind(quiz));
// submit.addEventListener("click", quiz.handleSubmitBtn.bind(quiz));
