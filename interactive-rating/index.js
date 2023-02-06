const buttons = [...document.querySelectorAll(".buttons > button")]

buttons.map((button) => {
  button.addEventListener("click", () => {
    buttons.map((button) => button.classList.remove("active"))
    button.classList.add("active")
  })
})

const submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener("click", () => {
  document.querySelector(".card.rating").classList.add("hidden")
  document.querySelector(".card.thank-you").classList.remove("hidden")
  const activeBtnTextContent =
    document.querySelector("button.active").textContent
  document.querySelector(
    ".card.thank-you>span"
  ).textContent = `You selected ${activeBtnTextContent} out of 5`
})
