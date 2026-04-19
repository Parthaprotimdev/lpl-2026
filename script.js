// ================= MENU =================
const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-links");

if (menu && nav) {
  menu.addEventListener("click", (e) => {
    nav.classList.toggle("active");
    e.stopPropagation();
  });

  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}

// ================= TEAM REGISTRATION =================
function registerTeam() {
  const team = document.getElementById("team");
  const captain = document.getElementById("captain");
  const phone = document.getElementById("phone");

  if (!team.value || !captain.value || !phone.value) {
    alert("Fill all fields!");
    return;
  }

  const div = document.createElement("div");
  div.innerText = `${team.value} - ${captain.value} - ${phone.value}`;
  document.getElementById("teamList").appendChild(div);

  team.value = "";
  captain.value = "";
  phone.value = "";
}

// ================= ADMIN =================
function adminLogin() {
  const pass = prompt("Enter Admin Password");

  if (pass === "1234") {
    alert("Welcome Admin!");
  } else {
    alert("Wrong Password!");
  }
}

// ================= LIVE SCORE =================
setInterval(() => {
  const scoreA = document.getElementById("scoreA");
  const scoreB = document.getElementById("scoreB");
  const overs = document.getElementById("overs");

  if (scoreA && scoreB && overs) {
    scoreA.innerText = Math.floor(Math.random() * 150);
    scoreB.innerText = Math.floor(Math.random() * 150);
    overs.innerText = "Overs: " + (Math.random() * 20).toFixed(1);
  }
}, 4000);
