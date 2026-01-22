const pages = {
  1: document.getElementById("page1"),
  2: document.getElementById("page2"),
  3: document.getElementById("page3"),
};

const questions = [
  {
    text: "อุปกรณ์นี้เป็นส่วนประกอบใดในคอมพิวเตอร์",
    image: "https://i.extremetech.com/imagery/content-types/026WiHQDsNea1mcA4hV0xIk/hero-image.fit_lim.size_1600x900.v1678673231.jpg",
    choices: ["CPU", "Mouse", "Keyboard", "Monitor"],
    answer: "CPU"
  },
  {
    text: "อุปกรณ์สำหรับควบคุมเคอร์เซอร์",
    image: "",
    choices: ["Printer", "Mouse", "RAM", "SSD"],
    answer: "Mouse"
  },
  {
    text: "อุปกรณ์นี้เป็นส่วนประกอบใดในคอมพิวเตอร์",
    image: "https://ihcupload.s3.ap-southeast-1.amazonaws.com/img/product/products144010_150.jpg",
    choices: ["Keyboard", "Monitor", "CPU", "Power Supply"],
    answer: "Monitor"
  },
  {
    text: "อุปกรณ์เก็บข้อมูลถาวร",
    image: "",
    choices: ["RAM", "SSD", "CPU", "GPU"],
    answer: "SSD"
  },
  {
    text: "อุปกรณ์นี้เป็นส่วนประกอบใดในคอมพิวเตอร์",
    image: "https://m.media-amazon.com/images/I/71+p3Hx03dL._AC_SL1000__.jpg",
    choices: ["Mouse", "Monitor", "Keyboard", "Speaker"],
    answer: "Keyboard"
  },
  {
  text: "อุปกรณ์สำหรับพิมพ์เอกสารออกมาเป็นกระดาษ",
  image: "",
  choices: ["Monitor", "Printer", "Keyboard", "Mouse"],
  answer: "Printer"
},
{
  text: "อุปกรณ์ที่ใช้แสดงผลภาพและวิดีโอ",
  image: "",
  choices: ["CPU", "Monitor", "RAM", "SSD"],
  answer: "Monitor"
},
{
  text: "อุปกรณ์ที่ใช้พิมพ์ตัวอักษรและตัวเลข",
  image: "",
  choices: ["Mouse", "Keyboard", "Speaker", "Scanner"],
  answer: "Keyboard"
},
{
  text: "อุปกรณ์ที่ทำหน้าที่ประมวลผลหลักของคอมพิวเตอร์",
  image: "",
  choices: ["CPU", "RAM", "Hard Disk", "Monitor"],
  answer: "CPU"
},
{
  text: "อุปกรณ์ที่ใช้เก็บข้อมูลชั่วคราวขณะเปิดเครื่อง",
  image: "",
  choices: ["SSD", "RAM", "Hard Disk", "CPU"],
  answer: "RAM"
},
{
  text: "อุปกรณ์เก็บข้อมูลถาวรภายในเครื่อง",
  image: "",
  choices: ["RAM", "CPU", "SSD", "Cache"],
  answer: "SSD"
},
{
  text: "อุปกรณ์นี้เป็นส่วนประกอบใดในคอมพิวเตอร์",
  image: "https://th.misumi-ec.com/en/linked/material/el/MSM1/PHOTO/110410654029_004.JPG",
  choices: ["Power Supply", "Cooling Fan", "RAM", "GPU"],
  answer: "Cooling Fan"
},
{
  text: "อุปกรณ์ที่ใช้แสดงผลกราฟิกขั้นสูง",
  image: "",
  choices: ["RAM", "CPU", "GPU", "Hard Disk"],
  answer: "GPU"
},
{
  text: "อุปกรณ์ที่ใช้ควบคุมการทำงานด้วยการคลิก",
  image: "",
  choices: ["Keyboard", "Mouse", "Monitor", "Printer"],
  answer: "Mouse"
},
{
  text: "อุปกรณ์ที่ใช้สแกนเอกสารหรือรูปภาพ",
  image: "",
  choices: ["Printer", "Scanner", "Monitor", "Speaker"],
  answer: "Scanner"
},
{
  text: "อุปกรณ์ที่ใช้ฟังเสียงจากคอมพิวเตอร์",
  image: "",
  choices: ["Microphone", "Speaker", "Scanner", "Keyboard"],
  answer: "Speaker"
},
{
  text: "อุปกรณ์ที่ใช้บันทึกเสียงเข้าสู่คอมพิวเตอร์",
  image: "",
  choices: ["Speaker", "Microphone", "Webcam", "Mouse"],
  answer: "Microphone"
},
{
  text: "อุปกรณ์ที่ใช้เชื่อมต่ออินเทอร์เน็ตแบบไร้สาย",
  image: "",
  choices: ["LAN Card", "Wi-Fi Adapter", "CPU", "RAM"],
  answer: "Wi-Fi Adapter"
},
{
  text: "อุปกรณ์ที่จ่ายไฟให้กับคอมพิวเตอร์",
  image: "",
  choices: ["Power Supply", "Battery", "CPU", "UPS"],
  answer: "Power Supply"
},
{
  text: "อุปกรณ์สำรองไฟเมื่อไฟดับ",
  image: "",
  choices: ["Adapter", "Power Supply", "UPS", "SSD"],
  answer: "UPS"
},
{
  text: "อุปกรณ์ที่ใช้ถ่ายภาพหรือวิดีโอเข้าสู่คอมพิวเตอร์",
  image: "",
  choices: ["Scanner", "Webcam", "Monitor", "Printer"],
  answer: "Webcam"
},
{
  text: "อุปกรณ์ที่เชื่อมต่ออุปกรณ์ต่าง ๆ เข้าด้วยกัน",
  image: "",
  choices: ["CPU", "Motherboard", "RAM", "SSD"],
  answer: "Motherboard"
},
{
  text: "อุปกรณ์ที่ใช้เชื่อมต่อเครือข่ายผ่านสาย",
  image: "",
  choices: ["Wi-Fi Adapter", "LAN Card", "Router", "Modem"],
  answer: "LAN Card"
},
{
  text: "อุปกรณ์ที่กระจายสัญญาณอินเทอร์เน็ต",
  image: "",
  choices: ["Modem", "Router", "LAN Card", "CPU"],
  answer: "Router"
},
{
  text: "อุปกรณ์ที่แปลงสัญญาณอินเทอร์เน็ตจากผู้ให้บริการ",
  image: "",
  choices: ["Router", "Modem", "Switch", "Hub"],
  answer: "Modem"
},
{
  text: "อุปกรณ์ที่ใช้เก็บข้อมูลแบบพกพา",
  image: "",
  choices: ["SSD", "Flash Drive", "RAM", "Hard Disk"],
  answer: "Flash Drive"
},
{
  text: "อุปกรณ์ที่ใช้เชื่อมต่ออุปกรณ์ภายนอก",
  image: "",
  choices: ["USB Port", "CPU", "RAM", "GPU"],
  answer: "USB Port"
},
{
  text: "อุปกรณ์ที่ใช้เล่นแผ่น CD หรือ DVD",
  image: "",
  choices: ["Hard Disk", "Optical Drive", "SSD", "RAM"],
  answer: "Optical Drive"
},
{
  text: "อุปกรณ์ที่ช่วยให้คอมพิวเตอร์เปิด–ปิดได้",
  image: "",
  choices: ["Power Button", "Reset Button", "UPS", "CPU"],
  answer: "Power Button"
},
{
  text: "อุปกรณ์ที่ใช้ควบคุมเกม",
  image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Nintendo-Switch-Pro-Controller-FL.jpg",
  choices: ["Keyboard", "Mouse", "Game Controller", "Monitor"],
  answer: "Game Controller"
}
];

let time = 200;
let timer;
let correct = 0;
let wrong = 0;
let current;
let questionCount = 0; //เพิ่ม นับคำถาม
let usedQuestions = []; //เพิ่ม เก็บข้อที่ใช้ไปแล้ว

function showPage(n) {
  Object.values(pages).forEach(p => p.classList.remove("active"));
  pages[n].classList.add("active");
}

document.getElementById("startGame").onclick = () => {
  time = 200; //เพิ่มรีเซ็ตเวลา
  correct = 0; //เพิ่มรีเซ็ตคะแนน
  wrong = 0; //เพิ่มรีเซ็ตคะแนน
  questionCount = 0;  //เพิ่มรีเซ็ตจำนวนข้อ
  usedQuestions = [];  //เพิ่มล้างข้อที่ใช้แล้ว
  startTimer();
  nextQuestion();
  showPage(2);
};

function startTimer() {
  timer = setInterval(() => {
    time--;
    document.getElementById("timer").innerText = `⏱ ${time} วินาที`;
    if (time <= 0) finishGame();
  }, 1000);
}

function nextQuestion() {
  //เพิ่มตรวจสอบว่าตอบครบ 30 ข้อหรือยัง
  if (questionCount >= 30) {
    finishGame();
    return;
  }

  //เพิ่มหาคำถามที่ยังไม่ได้ใช้
  let availableQuestions = questions.filter((q, index) => !usedQuestions.includes(index));
  
  if (availableQuestions.length === 0) {
    finishGame();
    return;
  }

  //เปลี่ยนเป็นสุ่มคำถามจากที่ยังไม่ได้ใช้
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  current = availableQuestions[randomIndex];
  
  //เพิ่ม Index ของคำถามที่ใช้แล้ว
  const originalIndex = questions.indexOf(current);
  usedQuestions.push(originalIndex);
  questionCount++;

  document.getElementById("questionText").innerText = current.text;

  const img = document.getElementById("questionImage");
  if (current.image) {
    img.src = current.image;
    img.style.display = "block";
  } else {
    img.style.display = "none";
  }

  const shuffled = [...current.choices].sort(() => Math.random() - 0.5);
  document.querySelectorAll(".choice").forEach((btn, i) => {
    btn.innerText = shuffled[i];
    btn.style.background = "#bbdefb";
    btn.onclick = () => selectAnswer(btn);
  });
}

function selectAnswer(btn) {
  if (btn.innerText === current.answer) {
    btn.style.background = "#4caf50";
    correct++;
  } else {
    btn.style.background = "#f44336";
    wrong++;
  }
  setTimeout(nextQuestion, 1000);
}

function finishGame() {
  clearInterval(timer);
  document.getElementById("correctScore").innerText = correct;
  document.getElementById("wrongScore").innerText = wrong;

  const total = correct + wrong || 1;
  document.getElementById("barCorrect").style.width = `${(correct / total) * 100}%`;
  document.getElementById("barWrong").style.width = `${(wrong / total) * 100}%`;

  showPage(3);
}

document.getElementById("restart").onclick = () => location.reload();

document.getElementById("menuBtn").onclick = () => {
  document.getElementById("menuBox").style.display =
    document.getElementById("menuBox").style.display === "block" ? "none" : "block";
};

document.getElementById("goHome").onclick = () => location.reload();
document.getElementById("endGame").onclick = finishGame;
