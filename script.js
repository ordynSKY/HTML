const goBtn = document.querySelector(".btn");
const redirectionText = document.querySelector(".redirection");

goBtn.addEventListener("click", () => {
  let secs = 6;
  const timer = setInterval(() => {
    redirectionText.textContent = `Вы будете перенаправлены через ${--secs}...`;
  }, 1000);
  setTimeout(() => {
    location = "https://google.com/";
  }, 6000);
});
