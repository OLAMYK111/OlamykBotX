// OlamykBot111: Savage WhatsApp AI Bot 💬🔥

let savageMode = true;

// Toggle savage mode
function toggleSavageMode() {
  savageMode = !savageMode;
  const status = savageMode ? "ON 🔥" : "OFF ❄️";
  document.getElementById("savageStatus").innerText = `Savage Mode: ${status}`;
}

// Respond to greeting or insult
function handleMessage(input) {
  const message = input.toLowerCase();

  if (message.includes("hi") || message.includes("hello")) {
    return "Hey boss, you're welcome 🤝";
  } else if (message.includes("how are you")) {
    return "I'm coded and loaded 🤖✅";
  } else if (message.includes("fool") || message.includes("mumu")) {
    return savageMode ? "Your papa 🤡💀" : "Peace not war ✌️";
  } else {
    return savageMode ? "Talk with sense abeg 😤" : "I dey here for you boss 😎";
  }
}

// Simulate bot response
function simulateReply() {
  const input = document.getElementById("userInput").value;
  const response = handleMessage(input);
  document.getElementById("botReply").innerText = response;
}
