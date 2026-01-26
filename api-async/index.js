let postsArray = []

function renderPosts(){
    let html = "";
    for (let post of postsArray) {
      html += `
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            `;
    }
    document.getElementById("blog-list").innerHTML = html;
}

fetch("https://apis.scrimba.com/jsonplaceholder/posts")
  .then((res) => res.json())
  .then((data) => {
    postsArray = data.slice(0, 5);
    renderPosts()
  });

//Teacher's decission
document.getElementById("new-post").addEventListener("submit", function (e) {
  e.preventDefault();
  const postTitle = document.getElementById("post-title").value;
  const postBody = document.getElementById("post-body").value;
  const data = {
    title: postTitle,
    body: postBody,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch("https://apis.scrimba.com/jsonplaceholder/posts", options)
    .then((res) => res.json())
    .then((post) => {
      postsArray.unshift(post)
      renderPosts()
    })
    this.reset()
});

fetch("https://apis.scrimba.com/jsonplaceholder/posts/2/comments")
    .then(res =>res.json())
    .then(data => console.log(data))


fetch("https://api.openweathermap.org/data/2.5/weather?q=rivne&units=metric")
    .then(res => res.json())
    .then(data => console.log(data))

// {
//   coord: { lon: 26.2274, lat: 50.6231 },
//   weather: [
//     {
//       id: 804,
//       main: 'Clouds',
//       description: 'overcast clouds',
//       icon: '04d'
//     }
//   ],
//   base: 'stations',
//   main: {
//     temp: 267.63,
//     feels_like: 261.15,
//     temp_min: 267.63,
//     temp_max: 267.63,
//     pressure: 1016,
//     humidity: 94,
//     sea_level: 1016,
//     grnd_level: 989
//   },
//   visibility: 5608,
//   wind: { speed: 5.27, deg: 115, gust: 8.83 },
//   clouds: { all: 100 },
//   dt: 1769337873,
//   sys: {
//     type: 2,
//     id: 2046291,
//     country: 'UA',
//     sunrise: 1769320821,
//     sunset: 1769352844
//   },
//   timezone: 7200,
//   id: 695594,
//   name: 'Rivne',
//   cod: 200
// }

// BaseUrl: https://mikes-bikes.com/
// GET /bikeracks
// GET /bikeracks?available=true
// GET /bikeracks?brand=thule&numBikes=4
// //My decission
// document.getElementById("new-post").addEventListener("submit", function(e) {
//     e.preventDefault()
//     const postTitle = document.getElementById("post-title").value
//     const postBody = document.getElementById("post-body").value
//     fetch("https://apis.scrimba.com/jsonplaceholder/posts",
//     {
//         method: "POST",
//         headers: {"Content-Type" : "application/json"},
//         body: JSON.stringify({
//             title: postTitle,
//             body: postBody
//         })
//     }
// )

// })
// fetch("https://apis.scrimba.com/jsonplaceholder/todos",
//     {
//         method: "POST",
//         headers: {"Content-Type" : "application/json"},
//         body: JSON.stringify({
//             title: "Buy Milk",
//             completed: false
//         })
//     }
// )
//     .then((res) => res.json())
//     .then(data => console.log(data))

// fetch("https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#supplying_request_options", {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json"
//     },
//     body: ""
// })
// .then(res => res.json())
// .then(data => console.log(data))

// // MY OPTION
// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     const postsArr = data.slice(0, 5);

//     const postsHTML = postsArr
//       .map((post) => {
//         return `
//             <h2>${post.title}</h2>
//             <p>${post.body}</p>
//         `;
//       })
//       .join("");
//     document.getElementById("blog-list").innerHTML = postsHTML;
//   });

// fetch("https://apis.scrimba.com/jsonplaceholder/todos", {method: "GET"})
//     .then((res) => res.json())
//     .then(data => console.log(data))

// fetch("https://apis.scrimba.com/jsonplaceholder/posts")
//     .then((res) => res.json())
//     .then(data => console.log(data))
