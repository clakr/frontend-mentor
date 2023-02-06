const buttons = [...document.querySelectorAll(".buttons > button")]

buttons.map((button) => {
  button.addEventListener("click", () => {
    buttons.map((button) => button.classList.remove("active"))
    button.classList.add("active")
  })
})

const submitBtn = document.querySelector('button[type="submit"]')

submitBtn.addEventListener("click", () => {
  document.querySelector(".card.rating").animate(
    [
      {
        transform: "translateY(calc(-50% + 2.5em)) translateX(-50%)",
        opacity: "0%",
        pointerEvents: "none",
      },
    ],
    {
      duration: 300,
      fill: "forwards",
    }
  )

  document.querySelector(".card.thank-you").animate(
    [
      {
        transform: "translateY(-50%) translateX(-50%)",
        opacity: "100%",
      },
    ],
    {
      duration: 300,
      fill: "forwards",
    }
  )

  const activeBtnTextContent =
    document.querySelector("button.active").textContent
  document.querySelector(
    ".card.thank-you>span"
  ).textContent = `You selected ${activeBtnTextContent} out of 5`
})
