let slider = document.querySelector(".slider");
let slide = document.querySelector(".slide");
let images = document.querySelectorAll(".image");

slider.style.overflow = "hidden";
slider.style.display = "flex";
slider.style.flexDirection = "row";
slider.style.maxHeight = "100vw";

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

// slides.style.minHeight = "100vh";
// slides.style.minWidth = "100vw";

// images.style.objectFit = "cover";
// images.style.maxHeight = "100%";
// images.style.maxWidth = "100%";
