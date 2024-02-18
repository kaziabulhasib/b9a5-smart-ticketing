function goToSection() {
  window.location.href = "#ph-paribahan";
}

// but click event

const bookButtons = document.getElementsByClassName("seat-button");
let setBookCount = 0;
let seatLeft = 40;

for (const bookButton of bookButtons) {
  bookButton.addEventListener("click", function () {
    bookButton.style.backgroundColor = "#1DD100";
    bookButton.style.color = "white";
    bookButton.disabled = true;

    // seting the value of seat book count
    setBookCount++;
    console.log(setBookCount);
    document.getElementById("seat-book-count").innerText = setBookCount;
    seatLeft--;
    document.getElementById("seat-left").innerText = seatLeft;
  });
}
