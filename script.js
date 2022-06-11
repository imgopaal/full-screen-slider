let slider = document.querySelector(".slider");
let slide = document.querySelector(".slide");
let images = document.querySelectorAll(".image");

slide.style.overflow = "hidden";
slide.style.display = "flex";
slide.style.flexDirection = "row";
slide.style.maxHeight = "100vw";

let btnRight = document.getElementById("right");
let btnLeft = document.getElementById("left");

let currentImage = 1;

let img = document.createElement("img");
img.setAttribute("class", "image");
slide.appendChild(img);
function setAttr() {
  img.setAttribute("src", `images/${currentImage}.jpg`);
}
setAttr();
btnLeft.addEventListener("click", () => {
  currentImage > 1 ? (currentImage -= 1) : "";
  setAttr();
});
btnRight.addEventListener("click", () => {
  currentImage < 1 ? "" : (currentImage += 1);
  setAttr();
});
