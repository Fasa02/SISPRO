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
    question: "Indonesia sebagai anggota ASEAN berperan penting dalam...",
    options: [
      "Mengatasi masalah kemiskinan di kawasan Eropa",
      "Memperkuat kerja sama ekonomi, stabilitas, dan perdamaian di Asia Tenggara",
      "Membentuk sistem pertahanan bersama dengan negara-negara Afrika",
      "Meningkatkan kerjasama antara Asia dan Amerika Latin",
      "Mengurangi ketergantungan pada negara-negara Barat"
    ],
    correct: "Memperkuat kerja sama ekonomi, stabilitas, dan perdamaian di Asia Tenggara"
  },
  {
    id: "1",
    question: "Pola desa tersebar tidak teratur dijumpai di daerah dengan kondisi...",
    options: [
      "Dataran tinggi dengan lereng terjal",
      "Topografi miring terutama pada lereng gunungapi",
      "Kesuburan tanah tidak merata dan topografi kasar",
      "Dataran rendah yang subur",
      "Dataran rendah di sepanjang pantai"
    ],
    correct: "Kesuburan tanah tidak merata dan topografi kasar"
  },
  {
    id: "2",
    question: "Fungsi kota menurut Christaller dalam konsep Central Place Theory adalah pusat...",
    options: [
      "Kegiatan",
      "Pemasaran",
      "Pelayanan",
      "Permukiman",
      "Perdagangan"
    ],
    correct: "Pelayanan"
  },
  {
    id: "3",
    question: "Penggunaan lahan di pinggiran kota (rural urban fringe) adalah...",
    options: [
      "Homogen",
      "Marginal",
      "Cenderung berubah",
      "Cenderung tidak berubah",
      "Pertanian saja"
    ],
    correct: "Cenderung berubah"
  },
  {
    id: "4",
    question: "Berikut ini adalah faktor-faktor yang memengaruhi potensi desa, kecuali...",
    options: [
      "Keadaan lingkungan geografis",
      "Jumlah penduduk",
      "Pola desa",
      "Jenis dan tingkat kesuburan tanah",
      "Luas tanah"
    ],
    correct: "Pola desa"
  },
  {
    id: "5",
    question: "Penggunaan lahan di wilayah perkotaan didominasi oleh jenis penggunaan lahan...",
    options: [
      "Industri",
      "Perdagangan",
      "Perkantoran",
      "Permukiman",
      "Pertambangan"
    ],
    correct: "Permukiman"
  },
  {
    id: "6",
    question: "Berikut ini merupakan faktor yang menyebabkan indeks pembangunan manusia di negara berkembang masih rendah seperti negara Indonesia adalah...",
    options: [
      "Masih tingginya masyarakat yang putus sekolah",
      "Sumber daya alam belum dikelola dengan baik",
      "Tingginya angka kelahiran",
      "Kurangnya pembangunan industri",
      "Rendahnya pendapatan di sektor pertanian"
    ],
    correct: "Masih tingginya masyarakat yang putus sekolah"
  },
  {
    id: "7",
    question: "Ciri pembangunan berkelanjutan yaitu...",
    options: [
      "Menerapkan prinsip ekonomi pada kegiatan industri di lingkungan industri",
      "Memanfaatkan sumber daya alam untuk kebutuhan penduduk masa kini",
      "Menggunakan pandangan jangka panjang dalam pengelolaan sumber daya alam",
      "Tidak menjual sumber daya alam untuk keperluan pribadi maupun golongan",
      "Memanfaatkan teknologi yang canggih dalam mengelola sumber daya alam"
    ],
    correct: "Menggunakan pandangan jangka panjang dalam pengelolaan sumber daya alam"
  },
  {
    id: "8",
    question: "Pembangunan yang dilaksanakan mengacu pada standar nilai Pancasila adalah maksud dari...",
    options: [
      "Pancasila sebagai ideologi terbuka",
      "Pancasila sebagai ideologi tertutup",
      "Pancasila sebagai nilai instrumental",
      "Pancasila sebagai dasar negara",
      "Pancasila sebagai paradigma pembangunan"
    ],
    correct: "Pancasila sebagai paradigma pembangunan"
  },
  {
    id: "9",
    question: "Pernyataan di bawah ini merupakan tujuan pembangunan industri di Indonesia, kecuali...",
    options: [
      "Meningkatkan produk ekspor",
      "Meningkatkan kegiatan dan produk impor",
      "Meningkatkan pendapatan negara",
      "Meningkatkan kesejahteraan masyarakat",
      "Meningkatkan pertumbuhan ekonomi nasional"
    ],
    correct: "Meningkatkan kegiatan dan produk impor"
  },
  {
    id: "10",
    question: "Menentukan lokasi industri perlu pertimbangan yang baik. Industri yang sebaiknya didirikan di daerah pemasaran, antara lain industri...",
    options: [
      "Makanan",
      "Air minum",
      "Semen",
      "Tekstil",
      "Garmen"
    ],
    correct: "Makanan"
  },
  {
    id: "11",
    question: "Pada KTT ASEAN ke-9 di Bali tahun 2003, dihasilkan kesepakatan Bali Concord II, yang salah satu isinya adalah...",
    options: [
      "Rencana pembentukan ASEAN Economy Community (AEC)",
      "Upaya pembentukan ASEAN Free Trade Area (AFTA)",
      "MEA bergabung dengan Masyarakat Ekonomi Eropa (MEE)",
      "Rencana penyamaan mata uang di kawasan Asia Tenggara",
      "Negara-negara di Asia Tenggara bebas mengekspor barang ke negara Barat"
    ],
    correct: "Rencana pembentukan ASEAN Economy Community (AEC)"
  },
  {
    id: "12",
    question: "Indonesia memiliki posisi strategis sebagai jembatan maritim karena terletak di persimpangan antara...",
    options: [
      "Samudra Atlantik dan Hindia",
      "Samudra Pasifik dan Atlantik",
      "Samudra Hindia dan Pasifik",
      "Laut Mediterania dan Pasifik",
      "Laut China Selatan dan Samudra Atlantik"
    ],
    correct: "Samudra Hindia dan Pasifik"
  },
  {
    id: "13",
    question: "Keragaman sumber daya alam Indonesia memberikan peluang kerja sama internasional terutama dalam bidang...",
    options: [
      "Pendidikan dan teknologi",
      "Energi dan lingkungan",
      "Pariwisata dan budaya",
      "Stabilitas keamanan regional",
      "Manufaktur dan logistik"
    ],
    correct: "Energi dan lingkungan"
  },
  {
    id: "14",
    question: "Kerja sama bilateral Indonesia dengan negara-negara seperti China, Jepang, dan Amerika Serikat di bidang ekonomi bertujuan untuk...",
    options: [
      "Meningkatkan hubungan politik antara negara-negara tersebut",
      "Mengurangi ketergantungan Indonesia terhadap sumber daya alam",
      "Meningkatkan perdagangan dan investasi antara Indonesia dan negara mitra",
      "Membentuk aliansi militer regional",
      "Menurunkan jumlah penduduk di Indonesia"
    ],
    correct: "Meningkatkan perdagangan dan investasi antara Indonesia dan negara mitra"
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