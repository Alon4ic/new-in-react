const modes = [
  { value: "monochrome", label: "Monochrome" },
  { value: "monochrome-dark", label: "Monochrome Dark" },
  { value: "monochrome-light", label: "Monochrome Light" },
  { value: "analogic", label: "Analogic" },
  { value: "complement", label: "Complement" },
  { value: "analogic-complement", label: "Analogic + Complement" },
  { value: "triad", label: "Triad" },
  { value: "quad", label: "Quad" },
];
const inputEl = document.getElementById("input")
const select = document.getElementById("fav-color");
modes.forEach((mode) => {
  const option = document.createElement("option");
  option.value = mode.value;
  option.textContent = mode.label;
  select.appendChild(option);
});
colorChoose()
document.getElementById("btn").addEventListener('click', () => {
    colorChoose()
})

function colorChoose() {
    const elite = inputEl.value.replace("#", "")
    const pick = select.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${elite}&mode=${pick}&count=5`)
  .then((res) => res.json())
  .then((data) => {
    const colors = data.colors;
    const block = document.querySelector(".block-colors");
    const footer = document.querySelector(".footer")
    block.innerHTML = "";
     footer.innerHTML = "";
    colors.forEach((color) => {
      const item = document.createElement("div");
      item.style.backgroundColor = color.hex.value;
      item.classList.add("item");
      block.appendChild(item);
      const content = document.createElement("p")
      content.textContent = color.hex.value;
      footer.appendChild(content)
    });
  });
}