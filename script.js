function registerTeam() {
  const team = document.getElementById("team").value.trim();
  const captain = document.getElementById("captain").value.trim();
  const phone = document.getElementById("phone").value.trim();

  // Validation
  if (!team || !captain || !phone) {
    alert("⚠️ Please fill all fields!");
    return;
  }

  // Simple phone check
  if (phone.length < 11) {
    alert("⚠️ Enter valid phone number!");
    return;
  }

  // Success message
  alert(
    "✅ Team Registered Successfully!\n\n" +
    "Team: " + team + "\n" +
    "Captain: " + captain + "\n" +
    "Phone: " + phone
  );

  // Clear form
  document.getElementById("team").value = "";
  document.getElementById("captain").value = "";
  document.getElementById("phone").value = "";
}