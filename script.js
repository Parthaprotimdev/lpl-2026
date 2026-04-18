// ================= TEAM REGISTRATION =================
function registerTeam() {
  const team = document.getElementById("team").value.trim();
  const captain = document.getElementById("captain").value.trim();
  const phone = document.getElementById("phone").value.trim();

  if (!team || !captain || !phone) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  if (phone.length < 11) {
    alert("⚠️ Enter valid phone number!");
    return;
  }

  alert(
    "✅ Team Registered Successfully!\n\n" +
      "Team: " +
      team +
      "\n" +
      "Captain: " +
      captain +
      "\n" +
      "Phone: " +
      phone
  );

  document.getElementById("team").value = "";
  document.getElementById("captain").value = "";
  document.getElementById("phone").value = "";
}

// ================= MOBILE MENU =================
const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");

if (menu && nav) {
  // toggle menu
  menu.addEventListener("click", (e) => {
    nav.classList.toggle("active");
    e.stopPropagation();
  });

  // close on outside click
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !menu.contains(e.target)) {
      nav.classList.remove("active");
    }
  });

  // close on link click
  document.querySelectorAll("nav a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("active");
    });
  });
}
