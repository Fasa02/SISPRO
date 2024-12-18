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
    question: "10, 6, 6, 3, 6, 4, 12, x\n\nNilai yang tepat menggantikan x adalah......",
    options: [
      "11",
      "13",
      "15",
      "17",
      "18"
    ],
    correct: "11"
  },
  {
    id: "1",
    question: "Di suatu taman hiburan, pengelola menetapkan bahwa satu tiket harus digunakan untuk memasuki empat area permainan dengan ketentuan berikut.\n(1) Area permainan yang dapat dipilih adalah bianglala, kereta gantung, komidi putar, mandi bola, balap mobil, rumah hantu, dan istana boneka.\n(2) Mandi bola, komidi putar, dan bianglala tidak boleh diambil dalam satu tiket yang sama.\n(3) Rumah hantu dan istana boneka wajib diambil tetapi tidak boleh pada tiket yang sama.\n(4) Peserta yang masuk rumah hantu harus juga memilih mandi bola.\n(5) Peserta yang masuk balap mobil tidak boleh memilih istana boneka\n\nJika dalam suatu tiket pengunjung memilih balap mobil, area permainan lain yang dapat dimasuki ialah ...",
    options: [
      "kereta gantung, mandi bola, rumah hantu",
      "kereta gantung, mandi bola, istana boneka",
      "bianglala, mandi bola, rumah hantu",
      "komidi putar, mandi bola, rumah hantu",
      "kereta gantung, komidi putar, rumah hantu"
    ],
    correct: "kereta gantung, mandi bola, rumah hantu"
  },
  {
    id: "2",
    question: "Sering disebut juga sebagai firasat, intuisi cenderung muncul secara holistik dan cepat, tanpa kesadaran akan proses mental yang mendasari informasi. Para ilmuwan telah berulang kali menunjukkan bagaimana informasi dapat terproses di otak tanpa kesadaran, lalu memengaruhi keputusan serta perilaku lainnya.\n\nManakah DUA simpulan yang PALING DIDUKUNG oleh bacaan tersebut?",
    options: [
      "simpulan yang PALING DIDUKUNG oleh bacaan tersebut?",
      "Intuisi merupakan bentuk sebuah pengetahuan yang muncul tanpa pertimbangan yang jelas.",
      "Keseharian seseorang memengaruhi tingkatan intuisi yang ada dalam dirinya.",
      "Seseorang yang mengambil keputusannya dengan intuisi cenderung memutuskan secara cepat.",
      "Intuisi merupakan bentuk suatu orang berinteraksi dengan orang lain tanpa perlu berkata-kata.",
      "Belum ada penelitian yang mengetahui seberapa akuratnya intuisi manusia dalam pengambilan keputusan.",
      "dan D"
    ],
    correct: "Seseorang yang mengambil keputusannya dengan intuisi cenderung memutuskan secara cepat." 
  },
  {
    id: "3",
    question: "Jika seseorang rajin belajar, maka ia juara kelas. Santo rajin belajar. Jadi,...",
    options: [
      "Santo tidak mau belajar.",
      "Santo tidak rajin belajar.",
      "Santo ingin juara kelas.",
      "Santo juara kelas.",
      "Santo menerima les bimbingan."
    ],
    correct: "Santo juara kelas."
  },
  {
    id: "4",
    question: "Berapa nilai dari 1/25 + 0,257",
    options: [
      "0,13",
      "0,29",
      "0,33",
      "0,52"
    ],
    correct: "0,29"
  },
  {
    id: "5",
    question: "Kita tidak mungkin berada di Jakarta dan di Palembang pada waktu yang sama. Kita berada di Palembang. Jadi,...",
    options: [
      "Kita belum berada di Jakarta.",
      "Kita tidak berada di Jakarta.",
      "Kita tidak berada di Palembang.",
      "Kita perlu mampir ke Jakarta.",
      "Kita tidak ingin pergi ke Jakarta."
    ],
    correct: "Kita tidak berada di Jakarta."
  },
  {
    id: "6",
    question: "Jika pecah, maka harus dilem. Sepatu kaca saya pecah. Jadi,...",
    options: [
      "Sepatu kaca saya harus diperbaiki.",
      "Sepatu kaca saya harus dipecahkan.",
      "Sepatu kaca saya harus dilem.",
      "Sepatu kaca saya tidak bisa dilem.",
      "Sepatu kaca saya milik Ibu Nyunyi."
    ],
    correct: "Sepatu kaca saya harus dilem."
  },
  {
    id: "7",
    question: "C, A...., W, U, S",
    options: [
      "..., W, U, S",
      "T",
      "Y",
      "X",
      "B",
      "E"
    ],
    correct: "T"
  },
  {
    id: "8",
    question: "Udara yang baik adalah yang memiliki kualitas baik dan tidak mengandung unsur bahaya. Semakin baik kualitasnya, udara yang dihirup tidak akan membahayakan kesehatan tubuh. Sebaliknya, jika kualitasnya buruk, udara tersebut dapat menimbulkan dampak negatif bagi makhluk hidup.\n\nBerdasarkan paragraf tersebut, manakah yang PALING MUNGKIN menjadi asumsi yang mendasari argumen di atas?",
    options: [
      "Kualitas udara di pabrik sangat buruk.",
      "Menanam pohon merupakan salah satu upaya untuk menjaga kualitas udara.",
      "Tingkat kualitas udara memengaruhi kondisi kesehatan tubuh.",
      "Seluruh udara tidak ada yang menimbulkan dampak negatif bagi manusia.",
      "Udara tidak memiliki parameter bagi baik dan buruknya kualitas udara tersebut."
    ],
    correct: "Tingkat kualitas udara memengaruhi kondisi kesehatan tubuh."
  },
  {
    id: "9",
    question: "Tubuh membutuhkan mineral untuk membantu proses metabolisme tubuh, yaitu menjadi bahan baku kinerja enzim. Kebutuhan mineral seseorang tergantung pada kebutuhan fisik, umur dan faktor kesehatan secara umum.\n\nManakah kesimpulan yang PALING DIDUKUNG oleh bacaan tersebut?",
    options: [
      "Mineral yang dibutuhkan oleh manusia berbeda-beda.",
      "Terdapat beberapa jenis mineral yang dibutuhkan oleh manusia.",
      "Dosis mineral yang dibutuhkan oleh manusia sama saja.",
      "Terdapat beberapa fungsi lain dari mineral selain untuk bahan baku kinerja enzim.",
      "Terdapat beberapa jenis mineral yang dapat dimanfaatkan tubuh."
    ],
    correct: "Mineral yang dibutuhkan oleh manusia berbeda-beda."
  },
  {
    id: "10",
    question: "Jika semua tetangga adalah ramah adalah salah, lawan kontrarisnya semua tetangga tidak ramah bersifat...",
    options: [
      "Meragukan (tidak diketahui dengan pasti)",
      "Pasti benar",
      "Pasti salah",
      "Selalu benar",
      "Selalu salah",
      "",
      "Rekrutmen Bersama BUMN 2024 dan Jawabannya"
    ],
    correct: "Meragukan (tidak diketahui dengan pasti)"
  },
  {
    id: "11",
    question: "Suasana hati dan kesehatan mental memengaruhi aspek kehidupan seseorang mulai dari perasaan, hubungan dengan orang lain serta kesehatan fisik suatu individu. Ada banyak cara untuk menjaga pikiran dan suasana hati agar tetap optimal seperti olahraga dan makan sehat. Belajar mengelola stres membuat hari-hari lebih memuaskan dan produktif.\n\nBerdasarkan informasi tersebut, manakah pernyataan berikut yang PASTI BENAR?",
    options: [
      "Belajar mengelola stres tidak membuat hari-hari menjadi produktif.",
      "Otak manusia harus selalu dalam kondisi prima.",
      "Ada hubungan antara kesehatan mental dan fisik seseorang.",
      "Masalah kesehatan mental tidak menyebabkan gangguan kesehatan apapun.",
      "Depresi hanya dapat mengakibatkan gangguan pencernaan."
    ],
    correct: "Ada hubungan antara kesehatan mental dan fisik seseorang."
  },
  {
    id: "12",
    question: "4, 7, 10, 13, 16, ...\n\nSuku ke-8 dari deret aritmetika tersebut adalah ...",
    options: [
      "21",
      "23",
      "25",
      "27",
      "29"
    ],
    correct: "25"
  },
  {
    id: "13",
    question: "Jika curah hujan tinggi, petani terancam gagal panen.\nJika kemarau berkepanjangan, penduduk kekurangan air.\nSaat ini, petani sedang panen atau penduduk tidak kekurangan air.\n\nSimpulan yang paling tepat adalah sebagai berikut...",
    options: [
      "Saat ini penduduk tidak gagal panen. karena tidak kekurangan air.",
      "Saat ini, petani tidak kekurangan air dan curah hujan tidak tinggi.",
      "Saat ini curah hujan tidak tinggi atau. kemarau tidak berkepanjangan.",
      "Kemarau panjang berpengaruh terhadap jumlah panen dan curah hujan.",
      "Curah hujan tidak dapat dipakai untuk membantu panen."
    ],
    correct: "Saat ini curah hujan tidak tinggi atau. kemarau tidak berkepanjangan."
  },
  {
    id: "14",
    question: "Semua pelajar memakai sepatu hitam.\n\nBeberapa yang hadir di sekolah tidak memakai sepatu hitam.\nBerdasarkan dua pernyataan di atas simpulan yang paling tepat adalah.",
    options: [
      "Beberapa yang hadir di sekolah bukan pelajar.",
      "Beberapa yang hadir di sekolah memakai sepatu hitam.",
      "Beberapa yang memakai sepatu hitam bukan pelajar.",
      "Semua pelajar tidak memakai sepatu hitam.",
      "Semua yang memakai sepatu hitam adalah pelajar."
    ],
    correct: "Beberapa yang hadir di sekolah bukan pelajar."
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