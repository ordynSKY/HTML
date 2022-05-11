const likeBtn = document.querySelector(".btn-primary");
const likesQuantity = document.querySelector(".like");

likeBtn.addEventListener("click", () => {
  likesQuantity.textContent = "1 лайк";
});
