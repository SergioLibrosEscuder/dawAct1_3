let image = document.querySelector("img");
let imgContainer = document.querySelector(".img-container");

let phrase = document.createElement("p");
phrase.innerText = "IES ABASTOS";
imgContainer.appendChild(phrase);

image.addEventListener("click", () => {
  phrase.classList.toggle("hidden");
});
