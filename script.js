let userRate = document.querySelector("#userFeedbackContainer");
let feedCont = document.querySelector("#feedbackContainer");
let rateCont = document.querySelector("#mainContainer");
let rateBTNs = document.querySelectorAll(".rattingBTN");
let rate1 = document.querySelector("#rat1");
let rate2 = document.querySelector("#rat2");
let rate3 = document.querySelector("#rat3");
let rate4 = document.querySelector("#rat4");
let rate5 = document.querySelector("#rat5");
let submit = document.querySelector("#submit");
let rate = 0;
let selected = false;
function setRating(rating) {
  rate = rating;
  for (i = 0; i < rateBTNs.length; i++) {
    rateBTNs[i].style.background = "rgb(37, 45, 55)";
    rateBTNs[i].style.color = "rgb(149, 158, 172)";
  }
}
submit.addEventListener("click", () => {
  userRate.style.display = "flex";
  userRate.innerHTML = `You selected ${rate} out of 5`;
  feedCont.style.display = "flex";
  rateCont.style.display = "none";
});
rate1.addEventListener("click", () => {
  setRating(1);
  rate1.style.background = "rgb(149, 158, 172)";
  rate1.style.color = "rgb(255, 255, 255)";
});
rate2.addEventListener("click", () => {
  setRating(2);
  rate2.style.background = "rgb(149, 158, 172)";
  rate2.style.color = "rgb(255, 255, 255)";
});
rate3.addEventListener("click", () => {
  setRating(3);
  rate3.style.background = "rgb(149, 158, 172)";
  rate3.style.color = "rgb(255, 255, 255)";
});
rate4.addEventListener("click", () => {
  setRating(4);
  rate4.style.background = "rgb(149, 158, 172)";
  rate4.style.color = "rgb(255, 255, 255)";
});
rate5.addEventListener("click", () => {
  setRating(5);
  rate5.style.background = "rgb(149, 158, 172)";
  rate5.style.color = "rgb(255, 255, 255)";
});
