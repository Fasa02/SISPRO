//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 60;
let countdown;

//Questions and Options array

const quizArray = [
  {
    id: "0",
    question: "Larutan yang isotonis dengan asam nitrat 0,2 M adalah...",
    options: [
      "Aluminum sulfat 0,08 M",
      "Feri bromida 0,2 M",
      "Asam klorida 0,3 M",
      "Magnesium sulfat 0,4 M",
      "Urea 0,5 M"
    ],
    correct: "Aluminum sulfat 0,08 M"
  },
  {
    id: "1",
    question: "Menurut Teori asam basa Arrhenius, zat diakatakan asam jika....",
    options: [
      "Dalam air menghasilkan ion H+",
      "Dalam air menghasilkan atom H",
      "Donor proton",
      "Akseptor proton",
      "Donor pasangan elektron"
    ],
    correct: "Dalam air menghasilkan ion H+"
  },
  {
    id: "2",
    question: "Di antara larutan-larutan berikut, larutan yang termasuk dalam larutan basa adalah...",
    options: [
      "C2H5OH",
      "CH3COOH",
      "HCl",
      "NaOH",
      "NaCl"
    ],
    correct: "NaOH"
  },
  {
    id: "3",
    question: "Di antara spesi berikut, yang tidak berlaku sebagai asam Bronsted-Lowry adalah....",
    options: [
      "NH4+",
      "H2O",
      "HCO3-",
      "CO3^2-",
      "H2CO3"
    ],
    correct: "CO3^2-"
  },
  {
    id: "4",
    question: "Indikator lakmus merah jika dicelupkan pada larutan basa akan berubah menjadi warna....",
    options: [
      "Merah",
      "Biru",
      "Orange",
      "Tidak berwarna",
      "Kuning"
    ],
    correct: "Biru"
  },
  {
    id: "5",
    question: "Zat di bawah ini yang dapat memerahkan kertas lakmus adalah....",
    options: [
      "NaOH",
      "Ca(OH)2",
      "CH3COOH",
      "CO(NH2)2",
      "C2H5OH"
    ],
    correct: "CH3COOH"
  },
  {
    id: "6",
    question: "Di antara campuran berikut ini yang bukan merupakan koloid yaitu ....",
    options: [
      "Tinta",
      "Air teh",
      "Larutan gula",
      "Air sabun",
      "Larutan kanji"
    ],
    correct: "Larutan gula"
  },
  {
    id: "7",
    question: "Salah satu tipe koloid berikut ini yang terdiri atas fase terdispersi padat dalam medium pendispersi gas yaitu ....",
    options: [
      "Gel",
      "Emulsi padat",
      "Sol padat",
      "Aerosol padat",
      "Buih padat"
    ],
    correct: "Aerosol padat"
  },
  {
    id: "8",
    question: "Sepuluh gram urea CO(NH2)2 dilarutkan dalam 90 mL air. Bila tekanan uap jenuh air pada suhu 25 derajat celcius adalah 62 mmHG, maka tekanan uap larutan urea tersebut adalah.....",
    options: [
      "2 mmHG",
      "30 mmHG",
      "31 mmHG",
      "60 mmHG",
      "64 mmHG"
    ],
    correct: "60 mmHG"
  },
  {
    id: "9",
    question: "Untuk mengetahui massa molekul relatif suatu senyawa elektrolit biner yang belum diketahui rumus molekulnya, seorang kimiawan melakukan percobaan di laboratorium dengan melarutkan 4 gram senyawa elektrolit tersebut ke 250 gram air. Suhu pada termometer menunjukkan 100,26\u00b0C pada tekanan 1 atm. Bila diketahui Kb air=0,52\u00b0C/m, maka Mr zat tersebut diperkirakan sejumlah....",
    options: [
      "16",
      "32",
      "64",
      "103",
      "128"
    ],
    correct: "64"
  }
];

restart.addEventListener("click", () => {
  initial();
  displayContainer.classList.remove("hide");
  scoreContainer.classList.add("hide");
});


nextBtn.addEventListener(
  "click",
  (displayNext = () => {
    questionCount += 1;
    if (questionCount == quizArray.length) {
      displayContainer.classList.add("hide");
      scoreContainer.classList.remove("hide");

      userScore.innerHTML =
        "Your score is " + scoreCount + " out of " + questionCount;
    } else {
      countOfQuestion.innerHTML =
        questionCount + 1 + " / " + quizArray.length;

      quizDisplay(questionCount);
      count = 60;
      clearInterval(countdown);
      timerDisplay();
    }
  })
);


const timerDisplay = () => {
  countdown = setInterval(() => {
    count--;
    timeLeft.innerHTML = `00:${count}`;
    if (count == 0) {
      clearInterval(countdown);
      displayNext();
    }
  }, 1000);
};


const quizDisplay = (questionCount) => {
  let quizCards = document.querySelectorAll(".container-mid");
  quizCards.forEach((card) => {
    card.classList.add("hide");
  });
  quizCards[questionCount].classList.remove("hide");
};

function quizCreator() {
  quizArray.sort(() => Math.random() - 0.5);
  for (let i of quizArray) {
    i.options.sort(() => Math.random() - 0.5);
    let div = document.createElement("div");
    div.classList.add("container-mid", "hide");
    countOfQuestion.innerHTML = 1 + " / " + quizArray.length;
    let question_DIV = document.createElement("p");
    question_DIV.classList.add("question");
    question_DIV.innerHTML = i.question;
    div.appendChild(question_DIV);
    div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
        <button class="option-div" onclick="checker(this)">${i.options[4]}</button>
    `;
    quizContainer.appendChild(div);
  }
}

function checker(userOption) {
  let userSolution = userOption.innerText;
  let question =
    document.getElementsByClassName("container-mid")[questionCount];
  let options = question.querySelectorAll(".option-div");

  if (userSolution === quizArray[questionCount].correct) {
    userOption.classList.add("correct");
    scoreCount++;
  } else {
    userOption.classList.add("incorrect");
    options.forEach((element) => {
      if (element.innerText == quizArray[questionCount].correct) {
        element.classList.add("correct");
      }
    });
  }

  clearInterval(countdown);
  options.forEach((element) => {
    element.disabled = true;
  });
}

function initial() {
  quizContainer.innerHTML = "";
  questionCount = 0;
  scoreCount = 0;
  count = 60;
  clearInterval(countdown);
  timerDisplay();
  quizCreator();
  quizDisplay(questionCount);
}

startButton.addEventListener("click", () => {
  startScreen.classList.add("hide");
  displayContainer.classList.remove("hide");
  initial();
});

window.onload = () => {
  startScreen.classList.remove("hide");
  displayContainer.classList.add("hide");
};