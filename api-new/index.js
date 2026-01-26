// //TEACHER's OPTION
document.getElementById("get-activity").addEventListener("click", function () {
  fetch("https://apis.scrimba.com/bored/api/activity")
    .then((response) => response.json())
    .then((data) => {
      const activity = document.getElementById("activity");
      activity.textContent = data.activity;
      activity.ariaLabel = data.activity;
      document.getElementById("title").textContent = "🦾 HappyBot🦿";
      document.body.classList.add("fun");
    });
});

// //MY OPTION
// const btn = document.getElementById("btn")

// function handleShow() {
// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then((res) => res.json())
//   .then((data) => {
//     const title = document.getElementById("activity-message")
//     title.textContent = data.activity;
//     title.classList.add("typewriter")
//   })
// }
// btn.addEventListener("click", handleShow)

// fetch("https://apis.scrimba.com/bored/api/activity")
//   .then((res) => res.json())
//   .then((data) => {
//     document.body.innerHTML = `<p>${data.activity}</p>`;
//   });

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     document.body.innerHTML = `<img src="${data.message}" alt="dog" />`;
//   });

// async function getData() {
//   const url = "https://example.org/products.json";
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Response status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log(result);
//   } catch (error) {
//     console.error(error.message);
//   }
// }

// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => console.log(data.message));

// const createImg = (imgUrl) => {
//   const img = document.createElement("img");
//   img.alt = "dog";
//   img.src = imgUrl;
//   return img;
// };
// fetch("https://dog.ceo/api/breeds/image/random")
//   .then((response) => response.json())
//   .then((data) => {
//     const dogImg = createImg(data.message);
//     document.body.appendChild(dogImg);
//   });
