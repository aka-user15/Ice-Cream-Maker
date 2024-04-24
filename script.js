const choco = document.getElementById("chocolate");
const chocoC = document.getElementById("chocolate-chip");
const strawberry = document.getElementById("strawberry");
const vanilla = document.getElementById("vanilla");
const cherry = document.getElementById("cherry");
const sprinkles = document.getElementById("sprinkles");
const iceCreamPieces = document.getElementsByTagName("span");
const flavors = [];
let index = 0;
const orders = document.getElementById("orders");
choco?.addEventListener("click", () => {
  orders.innerHTML += `<span class="chocolate ${index == 0 ? "mt" : ''}"></span>`;
  index++;
});
vanilla?.addEventListener("click", () => {
  orders.innerHTML += `<span class="vanilla ${index == 0 ? "mt" : ''}"></span>`;
  index++;
});
strawberry?.addEventListener("click", () => {
  orders.innerHTML += `<span class="strawberry ${index == 0 ? "mt" : ''}"></span>`;
  index++;
});
cherry?.addEventListener("click", () => {
  orders.innerHTML += `<img src="cherry.png" class="cherry"></img>`;
  index++;
});
sprinkles?.addEventListener("click", () => {
  iceCreamPieces[iceCreamPieces.length - 1].innerHTML += `<img src='sprinkles.png' class='sprinkles' />`
});
chocoC?.addEventListener("click", () => {
  iceCreamPieces[iceCreamPieces.length - 1].innerHTML += `<img src='cc.png' class='sprinkles' />`
});
