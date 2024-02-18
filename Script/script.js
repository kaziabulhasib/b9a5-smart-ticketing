function goToSection() {
  window.location.href = "#ph-paribahan";
}

// button click event

const bookButtons = document.getElementsByClassName("seat-button");
let setBookCount = 0;
let seatLeft = 8;
let bookDetailsContainer = document.getElementById("book-details-container");
let totalPrice = 0;
let grandTotal = 0;
let discount = 0;

for (const bookButton of bookButtons) {
  bookButton.addEventListener("click", function () {
    // seting the value of seat book count & seat left

    // alert for more than 4 tickets
    if (setBookCount >= 4) {
      alert("you are allowed only 4 ticket to book.");
    } else {
      setBookCount++;
      bookButton.style.backgroundColor = "#1DD100";
      bookButton.style.color = "white";
      bookButton.disabled = true;

      // total price
      totalPrice += 550;
      document.getElementById("total-price").innerText = totalPrice;

      // grand total
      grandTotal = totalPrice - discount;
      console.log(grandTotal);
      document.getElementById("grand-total").innerText = grandTotal;

      // seat left
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
    }
  });
}

// coupon apply button

function applyCoupon() {
  // hide the container
  document.getElementById("coupon-container").classList.add("hidden");
  const couponInput = document.getElementById("coupon-input");
  const couponCode = couponInput.value.split(" ").join("").toLowerCase();
  if (couponCode === "new15") {
    discount = totalPrice * 0.15;
  } else if (couponCode === "couple20") {
    discount = totalPrice * 0.2;
  } else {
    discount = 0;
  }
  grandTotal = totalPrice - discount;
  document.getElementById("grand-total").innerText = grandTotal;
}
// hide the modal on click()

function modalHide() {
  document.getElementById("modal-container").classList.add("hidden");
}
