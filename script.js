let completed = Number(localStorage.getItem("completedDay")) || 0;
let score = Number(localStorage.getItem("score")) || 0;

function showLessons() {
  document.getElementById("home").style.display = "none";
  document.getElementById("lessons").style.display = "block";
  document.getElementById("profile").style.display = "none";
}

function goHome() {
  document.getElementById("home").style.display = "block";
  document.getElementById("lessons").style.display = "none";

  const profile = document.getElementById("profile");
  if (profile) profile.style.display = "none";

  document.getElementById("lesson").innerHTML = "";
}

function openDay(day) {
  const lesson = document.getElementById("lesson");

  completed = Math.max(completed, day);
  localStorage.setItem("completedDay", completed);

  const completedText = document.getElementById("completed");
  if (completedText) completedText.textContent = completed;

  if (day === 1) {
    lesson.innerHTML = `
      <h2>🛡️ Day 1: Cybersecurity</h2>
      <p>Cybersecurity protects computers, networks and data.</p>
      <ul>
        <li>✅ Use strong passwords</li>
        <li>✅ Turn on 2FA</li>
        <li>✅ Don't click unknown links</li>
        <li>✅ Keep apps updated</li>
      </ul>
      <button onclick="startQuiz(1)">📝 Take Quiz</button>
    `;
  }

  else if (day === 2) {
    lesson.innerHTML = `
      <h2>🔐 Day 2: Strong Passwords</h2>
      <p>A strong password should be long and difficult to guess.</p>
      <ul>
        <li>✅ Letters</li>
        <li>✅ Numbers</li>
        <li>✅ Symbols</li>
      </ul>
      <button onclick="startQuiz(2)">📝 Take Quiz</button>
    `;
  }

  else if (day === 3) {
    lesson.innerHTML = `
      <h2>🔑 Day 3: Password Safety</h2>
      <p>Never share your password with other people.</p>
      <button onclick="startQuiz(3)">📝 Take Quiz</button>
    `;
  }

  else if (day === 4) {
    lesson.innerHTML = `
      <h2>🎣 Day 4: Phishing</h2>
      <p>Phishing tries to trick you into giving away information.</p>
      <button onclick="startQuiz(4)">📝 Take Quiz</button>
    `;
  }

  else if (day === 5) {
    lesson.innerHTML = `
      <h2>🌐 Day 5: Safe Browsing</h2>
      <p>Check website addresses before entering sensitive information.</p>
      <button onclick="startQuiz(5)">📝 Take Quiz</button>
    `;
  }

  else if (day === 6) {
    lesson.innerHTML = `
      <h2>🦠 Day 6: Malware</h2>
      <p>Avoid unknown apps, files and suspicious downloads.</p>
      <button onclick="startQuiz(6)">📝 Take Quiz</button>
    `;
  }

  else if (day === 7) {
    lesson.innerHTML = `
      <h2>📶 Day 7: Wi-Fi Safety</h2>
      <p>Be careful when using public or unknown Wi-Fi networks.</p>
      <button onclick="startQuiz(7)">📝 Take Quiz</button>
    `;
  }

  else if (day === 8) {
    lesson.innerHTML = `
      <h2>🔒 Day 8: Privacy</h2>
      <p>Protect passwords, verification codes and personal information.</p>
      <button onclick="startQuiz(8)">📝 Take Quiz</button>
    `;
  }

  else if (day === 9) {
    lesson.innerHTML = `
      <h2>🧠 Day 9: Social Engineering</h2>
      <p>Scammers may pretend to be trusted people.</p>
      <button onclick="startQuiz(9)">📝 Take Quiz</button>
    `;
  }

  else if (day === 10) {
    lesson.innerHTML = `
      <h2>🏆 Day 10: Final Quiz</h2>
      <p>Complete the final quiz to finish the course.</p>
      <button onclick="startQuiz(10)">📝 Start Final Quiz</button>
    `;
  }
}

function startQuiz(day) {
  const lesson = document.getElementById("lesson");

  const quizzes = {
    1: {
      q: "What does cybersecurity protect?",
      a: ["Only games", "Computers and data", "Only music"],
      c: 1
    },

    2: {
      q: "Which is the strongest password?",
      a: ["123456", "password123", "T!9x#Q2@Lm7"],
      c: 2
    },

    3: {
      q: "Should you share your password with a stranger?",
      a: ["Yes", "No", "Only sometimes"],
      c: 1
    },

    4: {
      q: "Which message is most likely phishing?",
      a: [
        "Hi, how are you?",
        "Your homework is ready.",
        "URGENT! Click this unknown link to win $1,000!"
      ],
      c: 2
    },

    5: {
      q: "What should you do before entering your password on a website?",
      a: [
        "Check the website address",
        "Click every link",
        "Download a random file"
      ],
      c: 0
    },

    6: {
      q: "Which action helps protect against malware?",
      a: [
        "Download cracked apps",
        "Open unknown attachments",
        "Keep your device updated"
      ],
      c: 2
    },

    7: {
      q: "What is safer on public Wi-Fi?",
      a: [
        "Share your password",
        "Avoid sensitive activities on unknown networks",
        "Enter information on every website"
      ],
      c: 1
    },

    8: {
      q: "Which should you keep private?",
      a: [
        "Favorite color",
        "Favorite game",
        "Password and verification code"
      ],
      c: 2
    },

    9: {
      q: "Someone asks for your verification code. What should you do?",
      a: [
        "Give it to them",
        "Share your password too",
        "Don't share it and verify who they are"
      ],
      c: 2
    },

    10: {
      q: "What is a good cybersecurity habit?",
      a: [
        "Use strong passwords and 2FA",
        "Share verification codes",
        "Click suspicious links"
      ],
      c: 0
    }
  };

  const quiz = quizzes[day];

  let html = `
    <h2>📝 Day ${day} Quiz</h2>
    <p><b>${quiz.q}</b></p>
  `;

  quiz.a.forEach((answer, index) => {
    html += `
      <button onclick="checkAnswer(${index}, ${quiz.c}, ${day})">
        ${String.fromCharCode(65 + index)}. ${answer}
      </button>
    `;
  });

  html += `<p id="quizResult"></p>`;

  lesson.innerHTML = html;
}

function checkAnswer(selected, correct, day) {
  const result = document.getElementById("quizResult");

  if (selected === correct) {
    score++;
    localStorage.setItem("score", score);

    result.textContent = "✅ Correct! Excellent! 🎉";

    if (day === 10) {
      setTimeout(showCertificate, 700);
    } else {
      completed = Math.max(completed, day);
      localStorage.setItem("completedDay", completed);
    }
  } else {
    result.textContent = "❌ Wrong answer. Try again!";
  }

  updateScore();
}

function showCertificate() {
  const lesson = document.getElementById("lesson");

  const name =
    localStorage.getItem("studentName") || "Student";

  lesson.innerHTML = `
    <div class="card">
      <h1>🏆 Certificate</h1>

      <h2>🎓 Certificate of Completion</h2>

      <p>This certificate is awarded to</p>

      <h2>👤 ${name}</h2>

      <p>
        For successfully completing the
        <b>10-Day Cybersecurity Course</b>.
      </p>

      <h2>🎉 Congratulations!</h2>

      <p>Final Score: <b>${score}</b></p>

      <button onclick="window.print()">
        🖨️ Print Certificate
      </button>

      <button onclick="goHome()">
        🏠 Home
      </button>
    </div>
  `;
}

function updateScore() {
  const scoreDisplay = document.getElementById("scoreDisplay");

  if (scoreDisplay) {
    scoreDisplay.textContent = score;
  }

  const completedText = document.getElementById("completed");

  if (completedText) {
    completedText.textContent = completed;
  }

  const progress = document.getElementById("progress");

  if (progress) {
    progress.style.width = (completed / 10) * 100 + "%";
  }

  const progressText = document.getElementById("progressText");

  if (progressText) {
    progressText.textContent =
      Math.round((completed / 10) * 100) + "% Complete";
  }
}

function saveName() {
  const input = document.getElementById("studentName");

  if (!input) return;

  const name = input.value.trim();

  if (name === "") {
    document.getElementById("nameMessage").textContent =
      "⚠️ Please enter your name.";
    return;
  }

  localStorage.setItem("studentName", name);

  document.getElementById("nameMessage").textContent =
    "✅ Name saved!";
}

function toggleTheme() {
  document.body.classList.toggle("light-mode");

  localStorage.setItem(
    "theme",
    document.body.classList.contains("light-mode")
      ? "light"
      : "dark"
  );
}

if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
}

updateScore();

window.showLessons = showLessons;
window.goHome = goHome;
window.openDay = openDay;
window.startQuiz = startQuiz;
window.checkAnswer = checkAnswer;
window.showCertificate = showCertificate;
window.saveName = saveName;
window.toggleTheme = toggleTheme;