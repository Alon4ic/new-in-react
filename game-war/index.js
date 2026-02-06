const cardsContainer = document.getElementById("cards");
const newDeckBtn = document.getElementById("new-deck");
const drawCardBtn = document.getElementById("draw-cards");
const header = document.getElementById("header");
const remainingText = document.getElementById("remaining");
const computerScoreEl = document.getElementById("computer-score");
const myScoreEl = document.getElementById("my-score");

let deckId = localStorage.getItem("deckId") || "";
let remaining = Number(localStorage.getItem("remaining")) || 0;
let computerScore = 0;
let myScore = 0;
async function handleClick() {
  const res = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle/");
  const data = await res.json();
  deckId = data.deck_id;
  remaining = data.remaining;
  localStorage.setItem("deckId", deckId);
  localStorage.setItem("remaining", remaining);
  remainingText.textContent = `Remaining cards: ${remaining}`;
}
newDeckBtn.addEventListener("click", handleClick);
drawCardBtn.addEventListener("click", drawCards);
async function drawCards() {
  if (!deckId) {
    console.log("First create a deck");
    return;
  }
  const res = await fetch(
    `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
  );
  const data = await res.json();

  cardsContainer.children[0].innerHTML = `
                <img src=${data.cards[0].image} class="card" />
            `;
  cardsContainer.children[1].innerHTML = `
                <img src=${data.cards[1].image} class="card" />
            `;

  //OR
  //   let num = 0
  //   const cardsContainer = document.getElementById("cards")
  //   for (const item of cardsContainer.children){
  //     item.innerHTML = `
  //     <img src=${data.cards[num].image} width='calc(120 * 5 / 7)' height='120'/>
  //    `;
  //    num += 1
  //   }
  //   num = 0
  remaining = data.remaining;
  remaining > 0
    ? (remainingText.textContent = `Remaining cards: ${remaining}`)
    : (remainingText.textContent = `Remaining cards: ${remaining}. The deck is out of cards.`);
  if (remaining === 0) {
    drawCardBtn.disabled = true;
    if (computerScore > myScore) {
      header.textContent = "The computer won the game!🎉";
    } else if (computerScore < myScore) {
      header.textContent = "You won the game!🎉";
    } else {
      header.textContent = "Draw in the game!";
    }
    return;
  }
  determineCardWinner(data.cards[0], data.cards[1]);
}

function determineCardWinner(card1, card2) {
  const valueOptions = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "JACK",
    "QUEEN",
    "KING",
    "ACE",
  ];
  const card1ValueIndex = valueOptions.indexOf(card1.value);
  const card2ValueIndex = valueOptions.indexOf(card2.value);
  console.log("card 1:", card1ValueIndex);
  console.log("card 2:", card2ValueIndex);

  if (card1ValueIndex > card2ValueIndex) {
    header.textContent = "Computer wins!";
    computerScore += 1;
    computerScoreEl.textContent = `Computer score: ${computerScore}`;
  } else if (card1ValueIndex < card2ValueIndex) {
    header.textContent = "You win!";
    myScore += 1;
    myScoreEl.textContent = `My score: ${myScore}`;
  } else {
    header.textContent = "War!";
  }
}

//=========Async with .then
// const cardsContainer = document.getElementById("cards");
// const newDeckBtn = document.getElementById("new-deck");
// const drawCardBtn = document.getElementById("draw-cards");
// const header = document.getElementById("header");
// const remainingText = document.getElementById("remaining");
// const computerScoreEl = document.getElementById('computer-score')
// const myScoreEl = document.getElementById('my-score')

// let deckId = localStorage.getItem("deckId") || "";
// let remaining = Number(localStorage.getItem("remaining")) || 0;
// let computerScore = 0
// let myScore = 0
// function handleClick() {
//   fetch("https://deckofcardsapi.com/api/deck/new/shuffle/")
//     .then((res) => res.json())
//     .then((data) => {
//       deckId = data.deck_id;
//       remaining = data.remaining;
//       localStorage.setItem("deckId", deckId);
//       localStorage.setItem("remaining", remaining);
//       remainingText.textContent = `Remaining cards: ${remaining}`;
//     });
// }
// newDeckBtn.addEventListener("click", handleClick);
// drawCardBtn.addEventListener("click", drawCards);
// function drawCards() {
//   if (!deckId) {
//     console.log("First create a deck");
//     return;
//   }
//   fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.cards);

//       cardsContainer.children[0].innerHTML = `
//                 <img src=${data.cards[0].image} class="card" />
//             `;
//       cardsContainer.children[1].innerHTML = `
//                 <img src=${data.cards[1].image} class="card" />
//             `;

//       //OR
//       //   let num = 0
//       //   const cardsContainer = document.getElementById("cards")
//       //   for (const item of cardsContainer.children){
//       //     item.innerHTML = `
//       //     <img src=${data.cards[num].image} width='calc(120 * 5 / 7)' height='120'/>
//       //    `;
//       //    num += 1
//       //   }
//       //   num = 0
//       remaining = data.remaining;
//       remaining > 0
//         ? (remainingText.textContent = `Remaining cards: ${remaining}`)
//         : (remainingText.textContent = `Remaining cards: ${remaining}. The deck is out of cards.`);
//       if (remaining === 0) {
//         drawCardBtn.disabled = true;
//         if (computerScore > myScore) {
//             header.textContent = "The computer won the game!🎉"
//         } else if (computerScore < myScore) {
//             header.textContent = "You won the game!🎉"
//         } else {
//             header.textContent = "Draw in the game!"
//         }
//         return;
//       }
//       determineCardWinner(data.cards[0], data.cards[1]);
//     });
// }

// function determineCardWinner(card1, card2) {
//   const valueOptions = [
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "JACK",
//     "QUEEN",
//     "KING",
//     "ACE",
//   ];
//   const card1ValueIndex = valueOptions.indexOf(card1.value);
//   const card2ValueIndex = valueOptions.indexOf(card2.value);
//   console.log("card 1:", card1ValueIndex);
//   console.log("card 2:", card2ValueIndex);

//   if (card1ValueIndex > card2ValueIndex) {
//     header.textContent = "Computer wins!";
//     computerScore += 1;
//     computerScoreEl.textContent = `Computer score: ${computerScore}`
//   } else if (card1ValueIndex < card2ValueIndex) {
//     header.textContent = "You win!";
//     myScore += 1;
//     myScoreEl.textContent = `My score: ${myScore}`
//   } else {
//     header.textContent = "War!";
//   }
// }
// const cardPower = {
//   "2": 2,
//   "3": 3,
//   "4": 4,
//   "5": 5,
//   "6": 6,
//   "7": 7,
//   "8": 8,
//   "9": 9,
//   "10": 10,
//   "JACK": 11,
//   "QUEEN": 12,
//   "KING": 13,
//   "ACE": 14
// };
// let computer = 0
// let gamer = 0
// function comparingCards(card1, card2) {
//     const firstCard = cardPower[card1];
//     const secondCart = cardPower[card2]
//     if (firstCard > secondCart) {
//         computer +=1
//         console.log("Computer win",)
//     } else if (secondCart > firstCard) {
//         gamer +=1
//         console.log("Gamer win", gamer)
//     } else {
//         console.log("It's a tie!")
//     }
// }
// document.getElementById("draw-cards").addEventListener("click", drawCards);
// let cardArr = []
// const cards = document.getElementById("cards")
// function drawCards() {
//   if (!deckId) {
//     console.log("First create a deck");
//     return;
//   }
//   fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//     .then((res) => res.json())
//     .then((data) => {
//         cardArr = data.cards;
//         console.log(cardArr)
//         cardArr.forEach(element => {
//             const img = document.createElement('img')
//             img.src = element.image
//             img.alt =  `cart ${element.code}`
//             cards.appendChild(img)
//         });
//     });
// }
// fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`)
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(function(res) {
//         return "Hello"
//     })
//     .then(function(whatever) {
//         console.log(whatever)
//         return "World"
//     })
//     .then(function(another) {
//         console.log(another)
//     })

// fetch("https://apis.scrimba.com/bored/api/activity")
//     .then(function(res) {
//         return "Hello"
//     })
//     .then(function(date) {
//         return "World"
//     })
//     .then(function(world) {
//         console.log(world)
//     })

// const promise = fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
// const option = promise.then(res => res.json())
// console.log(option)

// const voters = [
//     {name: "Joe", email: "joe@joe.com", voted: true},
//     {name: "Jane", email: "jane@jane.com", voted: true},
//     {name: "Bo", email: "bo@bo.com", voted: false},
//     {name: "Bane", email: "bane@bane.com", voted: false}
// ]
// console.log((voters.filter(person => person.voted)).map(person => person.email))

// document.getElementById('new-deck').addEventListener('click', () => console.log('Clicked!'))

// document.getElementById("new-deck").addEventListener("click", newFunction)

// function newFunction() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// function movie() {
//     console.log("I finally ran!")
// }

// // Решение, если бы чисто теоретически пришлось бы заменить .then колбеками
// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/", function(response){
//         response.json(function(data) {
//             console.log(data)
//             // Do cool stuff with the data here
//         })
//     })
//         // .then(res => res.json())
//         // .then(data => console.log(data))
// }
// document.getElementById("new-deck").addEventListener("click", handleClick)

// const people = [
//     { name: "Jack", hasPet: true, age: 12 },
//     { name: "Jill", hasPet: false, age: 18 },
//     { name: "Alice", hasPet: true, age: 22 },
//     { name: "Bob", hasPet: false, age: 32 },
// ]
// const adults = people.filter(person => person.age >= 18)
// console.log(adults)

// const people = [
//     { name: "Jack", hasPet: true },
//     { name: "Jill", hasPet: false },
//     { name: "Alice", hasPet: true },
//     { name: "Bob", hasPet: false },
// ]

// const newObject = people.filter(getPerson)
// console.log(newObject)

// function getPerson(person) {
//     if(person.hasPet){
//         return person
//     }
// }
// const newPeople = people.filter((item, index, array) => {
//     console.log(item)
//     console.log(index)
//     console.log(array)
// })
// document.getElementById("new-deck").addEventListener("click", newFunction)

// function newFunction() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//     .then(res => res.json())
//     .then(data => console.log(data))
// }
// function movie() {
//     console.log("I finally ran!")
// }

// setTimeout(movie, 2000)

// let deckId
// let computerScore = 0
// let myScore = 0
// const cardsContainer = document.getElementById("cards")
// const newDeckBtn = document.getElementById("new-deck")
// const drawCardBtn = document.getElementById("draw-cards")
// const header = document.getElementById("header")
// const remainingText = document.getElementById("remaining")
// const computerScoreEl = document.getElementById("computer-score")
// const myScoreEl = document.getElementById("my-score")

// function handleClick() {
//     fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             deckId = data.deck_id
//             console.log(deckId)
//         })
// }

// newDeckBtn.addEventListener("click", handleClick)

// drawCardBtn.addEventListener("click", () => {
//     fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
//         .then(res => res.json())
//         .then(data => {
//             remainingText.textContent = `Remaining cards: ${data.remaining}`
//             cardsContainer.children[0].innerHTML = `
//                 <img src=${data.cards[0].image} class="card" />
//             `
//             cardsContainer.children[1].innerHTML = `
//                 <img src=${data.cards[1].image} class="card" />
//             `
//             const winnerText = determineCardWinner(data.cards[0], data.cards[1])
//             header.textContent = winnerText

//             if (data.remaining === 0) {
//                 drawCardBtn.disabled = true
//                 if (computerScore > myScore) {
//                     header.textContent = "The computer won the game!"
//                 } else if (myScore > computerScore) {
//                     header.textContent = "You won the game!"
//                 } else {
//                     header.textContent = "It's a tie game!"
//                 }
//             }
//         })
// })

// function determineCardWinner(card1, card2) {
//     const valueOptions = ["2", "3", "4", "5", "6", "7", "8", "9",
//     "10", "JACK", "QUEEN", "KING", "ACE"]
//     const card1ValueIndex = valueOptions.indexOf(card1.value)
//     const card2ValueIndex = valueOptions.indexOf(card2.value)

//     if (card1ValueIndex > card2ValueIndex) {
//         computerScore++
//         computerScoreEl.textContent = `Computer score: ${computerScore}`
//         return "Computer wins!"
//     } else if (card1ValueIndex < card2ValueIndex) {
//         myScore++
//         myScoreEl.textContent = `My score: ${myScore}`
//         return "You win!"
//     } else {
//         return "War!"
//     }
// }
