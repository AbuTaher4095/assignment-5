const loveEl = document.getElementById("love");
const coinEl = document.getElementById("coinCount");
const copyEl = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// Function for Love
function increaseLove() {
  loveEl.textContent = parseInt(loveEl.textContent) + 1;
}

// Function for Copy
function increaseCopy() {
  copyEl.textContent = parseInt(copyEl.textContent) + 1;
}

// Function for Call
function makeCall(serviceName, number) {
  let coins = parseInt(coinCount.textContent);
  if (coins < 20) {
    alert("কমপক্ষে ২০ কয়েন থাকতে হবে!");
    return;
  }
  coinCount.textContent = coins - 20;

  let now = new Date();
  let time = now.toLocaleTimeString();
  let li = document.createElement("li");
  li.className = "flex justify-between pb-1";
  li.innerHTML = `<span> <h1 class="font-bold">${serviceName}</h1> (${number})</span>
  <span>${time}</span>`;


  if (historyList.firstChild) {
    historyList.insertBefore(li, historyList.firstChild.nextSibling);
  } else {
    historyList.appendChild(li);
  }
}

// Function for Clear
function clearHistory() {
  historyList.innerHTML = "";

}


document.querySelectorAll(".service-card").forEach(card => {
  let service = card.dataset.service;
  let number = card.dataset.number;

  card.querySelector(".loveBtn").addEventListener("click", increaseLove);
  card.querySelector(".copyBtn").addEventListener("click", increaseCopy);
  card.querySelector(".callBtn").addEventListener("click", () => makeCall(service, number));
});

// Clear button
document.getElementById("clearBtn").addEventListener("click", clearHistory);


