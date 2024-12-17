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
    question: "Penyusun utama enzim dalam bentuk molekul protein adalah....",
    options: ["Kofaktor", "Apoenzeim", "Koenzim", "Holoenzim", "Gugis Prostektik"],
    correct: "Apoenzeim",
  },
  {
    id: "1", 
    question: "Enzim mengkatalis reaksi dengan cara meningkatkan laju reaksi. Peningkatan laju reaksi dalam enzim melalui.....", 
    options: ['Penurunan energi aktivasi', 'Energi aktivasi meningkatkan kerja enzim', 'Energi aktivasi tidak mempengaruhi kerja enzim', 'Penurunan energi aktivasi', 'Kerja enzim tidak ada hubungan dengan energi aktivasi'], 
    correct: "Penurunan energi aktivasi"
  },
{
    id: "2", 
    question: "Asam piruvat merupakan produk dari metabolisme....", 
    options: ['Glikolisis', 'Siklus Krebs', 'Fotosintesis', 'Siklus Calvin', 'Dekarboksilasi oksidatif'], 
    correct: "Glikolisis"
  },
{
    id: "3", 
    question: "Pernyataan berikut ini yang merupakan ciri dari fermentasi alkohol adalah....", 
    options: ['Dihasilkan alkohol dan CO', 'Dihasilkan alkohol dan CO2', 'Dihasilkan alkohol dan CO+', 'Dihasilkan alkohol dan CO+2', 'Dihasilkan alkohol dan CO-2'], 
    correct: "Dihasilkan alkohol dan CO2"
  },
{
    id: "4", 
    question: "Dalam respirasi aerob akan menghasilkan ATP sebanyak....", 
    options: ['30 ATP', '32 ATP', '34 ATP', '36 ATP', '38 ATP'], 
    correct: "36 ATP"
  },
{
    id: "5", 
    question: "Komponen DNA yang tersusun atas phosfat, gula, dan basa nitrogen membentuk....", 
    options: ['Nukleosida', 'Polypeptide', 'Nukleotida', 'Ikatan hidrogen', 'Double helix'], 
    correct: "Nukleotida"
  },
{
    id: "6", 
    question: "Letak DNA dalam sel yaitu....", 
    options: ['Terletak dalam sitoplasma, inti, terutama dalam ribosom', 'Terdapat dalam inti sel, terutama pada kromosom', 'Terdapat dalam inti sel pada kromosom dan dalam sitoplasma', 'Terdapat dalam inti sel, terutama dalam ribosom', 'Terdapat dalam sitoplasma terutama pada ribosom'], 
    correct: "Terdapat dalam inti sel, terutama pada kromosom"
  },
{
    id: "7", 
    question: "DNA dan RNA bertanggung jawab untuk....", 
    options: ['Mengurangi cacat kelahiran', 'Penurunan sifat hereditas', 'Penyusun lemak', 'Mempercepat proses tubuh', 'Membentuk antibodi'], 
    correct: "Penurunan sifat hereditas"
  },
{
    id: "8", 
    question: "Bentuk kromosom dengan letak stromer agak jauh dari ujung kromosom dan biasanya membentuk huruf L atau J adalah bentuk.....", 
    options: ['Telosentrik', 'Akrosentik', 'Submetasentrik', 'Metasentrik', 'Subakrosentrik'], 
    correct: "Submetasentrik"
  },
{
    id: "9", 
    question: "Jika terjemahan kode genetik dalam sintesis protein yang dihasilkan oleh RNA-t adalah AAU UGU AAA, informasi genetik yang dirancang dalam DNA adalah.....", 
    options: ['TTA ASA TTT', 'AAT TGT AAA', 'UUU AGA TTT', 'AAU AGA UUU', 'UUT UGU UUU'], 
    correct: "AAT TGT AAA"
  },
{
    id: "10", 
    question: "Pernyataan yang benar tentang pembelahan meiosis adalah....", 
    options: ['Menghasilkan empat sel anak dengan kromosom tereduksi', 'Menghasilkan dua sel anak dengan kromosom diploid', 'Sel induk haploid dan sel anak diploid', 'Kromosom terbentuk pada tahap telofase', 'Tidak terjadi perubahan-perubahan pada inti sel'], 
    correct: "Menghasilkan empat sel anak dengan kromosom tereduksi"
  },
{
    id: "11", 
    question: "Pada tumbuhan, pembelahan reduksi terjadi pada....", 
    options: ['Lingkaran kambium', 'Alat berkembang biak', 'Pucuk batang', 'Jaringan meristem', 'Ujung akar'], 
    correct: "Alat berkembang biak"
  },
{
    id: "12", 
    question: "Metafase II pembelahan meiosis ditandai dengan....", 
    options: ['Kromosom homolog berpisah menuju kutub masing-masing', 'Pemisah kromatid saudara', 'Kromosom homolog berjajar di bidang ekuator', 'Kromatid sister berjajar di bidang equator'], 
    correct: "Kromosom homolog berjajar di bidang ekuator"
  },
{
    id: "13", 
    question: "Dari pernyataan berikut ini, yang paling benar mengenai gametogenesis pada manusia yaitu....", 
    options: ['Spermatogenesis terjadi di tubulus seminiferus sejak janin dalam kandungan', 'Sel gamet yang dihasilkan merupakan sel-sel diploid', 'Pada proses oogenesis dihasilkan 4 sel telur yang fungsional', 'Pada proses oogenesis dihasilkan 1 buah sel telur yang fungsional dan 3 badan polar', 'Spermatogenesis menghasilkan 3 sel yang fungsional dan 1 sel yang steril'], 
    correct: "Pada proses oogenesis dihasilkan 1 buah sel telur yang fungsional dan 3 badan polar"
  },
{
    id: "14", 
    question: "Sel-sel yang mengalami meiosis dalam tubulus seminiferus pada proses spermatogenesis adalah...", 
    options: ['Spermatid', 'Spermatogonium', 'Spermatozoa', 'Spermatosit primer', 'Spermatosit sekunder'], 
    correct: "Spermatosit primer"
  },
{
    id: "15", 
    question: "Pernyataan ini yang merupakan definisi dari evolusi yaitu....", 
    options: ['Evolusi adalah pewarisan sifat organisme yang berubah dari generasi ke generasi berikutnya dalam jangka waktu jutaan tahun', 'Evolusi adalah proses adaptasi terhadap lingkungan', 'Evolusi adalah variasi dalam keturunan', 'Evolusi adalah perubahan-perubahan organisme akibat suatu genetika dalam jangka waktu yang pendek', 'Evolusi adalah proses seleksi alam'], 
    correct: "Evolusi adalah pewarisan sifat organisme yang berubah dari generasi ke generasi berikutnya dalam jangka waktu jutaan tahun"
  },
{
    id: "16", 
    question: "Teori abiogenesis runtuh karena percobaan yang dilakukan oleh....", 
    options: ['Aristoteles', 'Alexander Oparin', 'Harold Urey', 'Anthonie van Leeuwenhoek', 'Louise Pasteur'], 
    correct: "Louise Pasteur"
  },
{
    id: "17", 
    question: "Hal-hal berikut yang bukan merupakan petunjuk evolusi adalah....", 
    options: ['Fosil pada berbagai lapisan batuan', 'Anatomi perbandingan yang bersifat analog', 'Anatomi perbandingan yang bersifat homolog', 'Embriologi perbandingan', 'Perkawinan silang'], 
    correct: "Perkawinan silang"
  },
{
    id: "18", 
    question: "Kesimpulan dari teori Darwin adalah....", 
    options: ['Manusia bisa saja berasal dari monyet', 'Homologi menjadi dasar makhluk hidup berevolusi', 'Makhluk hidup dapat berubah sendiri secara spontan', 'Makhluk hidup berubah karena seleksi dan adaptasi', 'Hanya melalui mutasi makhluk hidup berubah bentuk dan berevolusi'], 
    correct: "Makhluk hidup berubah karena seleksi dan adaptasi"
  },
{
    id: "19", 
    question: "Pada suatu daerah dengan 10.000 penduduk terdapat 4% warga albino, maka perbandingan jumlah orang yang berkulit homozigot dan normal heterozigot berturut-turut adalah...", 
    options: ['6.400 dan 1.600', '6.400 dan 3.200', '3.200 dan 1.600', '3.200 dan 4.000', '1.600 dan 400'], 
    correct: "6.400 dan 3.200"
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