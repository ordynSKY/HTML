const goBtn = document.querySelector(".btn");
const redirectionText = document.querySelector(".redirection");

goBtn.addEventListener("click", () => {
  let secsToEnd = 6;
  const timerId = setInterval(() => {
    redirectionText.textContent = `Вы будете перенаправлены через ${--secsToEnd}...`;
  }, 1000);

  setTimeout(() => {
    clearInterval(timerId);
  }, 5000);

  setTimeout(() => {
    location = "https://google.com/";
  }, 6000);

  goBtn.setAttribute("disabled", true);
});
