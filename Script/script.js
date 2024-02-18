function goToSection() {
  window.location.href = "#ph-paribahan";
}

// button click event

const bookButtons = document.getElementsByClassName("seat-button");
let setBookCount = 0;
let seatLeft = 40;
let bookDetailsContainer = document.getElementById("book-details-container");

for (const bookButton of bookButtons) {
  bookButton.addEventListener("click", function () {
    bookButton.style.backgroundColor = "#1DD100";
    bookButton.style.color = "white";
    bookButton.disabled = true;

    // seting the value of seat book count & seat left
    setBookCount++;
    // console.log(setBookCount);
    document.getElementById("seat-book-count").innerText = setBookCount;
    seatLeft--;
    document.getElementById("seat-left").innerText = seatLeft;

    // adding book details in the container
    const div = document.createElement("div");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    p1.innerText = bookButton.innerText;
    p2.innerText = "Economoy";
    p3.innerText = "550";
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);
    div.setAttribute("class", "seat-class-price");

    bookDetailsContainer.appendChild(div);
  });
}
