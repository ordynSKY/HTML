const likeBtn = document.querySelector(".btn-primary");
const likesQuantity = document.querySelector(".like");

likeBtn.addEventListener("click", () => {
  let likes = 0;
  likes += 1;
  const word = "лайк";
  likesQuantity.innerHTML = `${likes} ${word}`;
});
