const goBtn = document.querySelector(".btn");
const redirectionText = document.querySelector(".redirection");

goBtn.addEventListener("click", () => {
  let secsToEnd = 6;

  setInterval(() => {
    redirectionText.textContent = `Вы будете перенаправлены через ${--secsToEnd}...`;
  }, 1000);

  setTimeout(() => {
    location = "https://google.com/";
  }, 6000);
});
