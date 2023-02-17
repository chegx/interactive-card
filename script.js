  // Error only appears when a key is pressed 
  document.querySelectorAll("input").forEach(function(input) {
    input.addEventListener('keydown', () => {
      input.classList.add("active");
    });
  });

  //Error when sending empty input
  document.querySelector("button").onclick = () => {
    document.querySelectorAll("input").forEach((input) => {
      input.addEventListener('invalid', () => {
        input.classList.add("active");
      });
    });

  };
 
    const cardholderName = document.getElementById("cardholderName")
    const cardNumber = document.getElementById("cardNumber")
    const month = document.getElementById("month")
    const year = document.getElementById("year")
    const cvc = document.getElementById("cvc")

    //Changing credit card data in real time
    cardholderName.addEventListener("keyup", () => {
document.getElementById("imgName").textContent = cardholderName.value
    })

    cardNumber.addEventListener("keyup", () => {
document.getElementById("imgNumber").textContent = cardNumber.value
    })

    month.addEventListener("keyup", () => {
document.getElementById("imgDate").textContent = month.value + "/" + year.value
    })

    year.addEventListener("keyup", () => {
document.getElementById("imgDate").textContent = month.value + "/" + year.value
    })

    cvc.addEventListener("keyup", () => {
document.getElementById("imgCvc").textContent = cvc.value
    })

    //Add a white space after every 4 digits
    document.getElementById("cardNumber").addEventListener("input", (e) => {
  e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});