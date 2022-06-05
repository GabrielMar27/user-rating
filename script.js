let userRate = document.querySelector("#userFeedbackContainer");
let feedCont = document.querySelector("#feedbackContainer");
let rateCont = document.querySelector("#mainContainer");
let rate1 = document.querySelector("#rat1");
let rate2 = document.querySelector("#rat2");
let rate3 = document.querySelector("#rat3");
let rate4 = document.querySelector("#rat4");
let rate5 = document.querySelector("#rat5");
let submit = document.querySelector("#submit");
let rate = 0;
function setRating(rating) {
  rate = rating;
}
submit.addEventListener("click", () => {
  userRate.style.display = "flex";
  userRate.innerHTML = `You selected ${rate} out of 5`;
  feedCont.style.display = "flex";
  rateCont.style.display = "none";
});
rate1.addEventListener("click", () => {
  setRating(1);
});
rate2.addEventListener("click", () => {
  setRating(2);
});
rate3.addEventListener("click", () => {
  setRating(3);
});
rate4.addEventListener("click", () => {
  setRating(4);
});
rate5.addEventListener("click", () => {
  setRating(5);
});
