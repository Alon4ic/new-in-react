import React from "react"
import avatar from "./images/user.png"
import starFilled from "../public/images/"
import starEmpty from "./images/star-empty.png"


export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    let starIcon = contact.isFavorite ? starFilled : starEmpty

    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <button
                        onClick={toggleFavorite}
                        aria-pressed={contact.isFavorite}
                        aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
                        className="favorite-button"
                    >
                        <img
                            src={starIcon}
                            alt={contact.isFavorite ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                    </button>
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}


// import Contact from "./Contact"
// import Joke from "./Joke"
// import jokesData from "./jokesData.js"
// import React from "react"


// function App() {
//     const [messages, setMessages] = React.useState([])
//     /**
//      * Challenge:
//      * - If there are no unread messages, display "You're all caught up!"
//      * - If there's exactly 1 unread message, it should read "You have 
//      *   1 unread message" (singular)
//      * - If there are > 1 unread messages, display "You have <n> unread
//      *   messages" (plural)
//      */
//     function showMessage() {
//       let n = messages.length
//       if (n === 1) {
//         return "You have 1 unread message"
//       } else if(n > 1) {
//         return `You have ${n} unread messages`
//       } else if (n === 0) {
//         return `You're all caught up!`
//       }
//     }
//     return (
//         <div>
//             <h1>{showMessage()}</h1>
//         </div>
//     )
// }


// //Условный рендеринг
// function App() {
//     const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])
    
//     /**
//      * Challenge:
//      * Only display the <h1> below if there are unread messages
//      */
    
//     return (
//         <div>
//             {unreadMessages.length > 0 && <h1>You have _ unread messages!</h1>}
//             {unreadMessages.length === 0 && <p>You have no unread messages</p>}
//         </div>
//     )
// }

// function App() {
//  const jokeElement = jokesData.map((j) => {
//   return <Joke key={j.id} setup={j.setup} punchline={j.punchline} />
//  })
//     return (
//       <main>
//         {jokeElement}
//       </main>
      
//     )
// }
    //   <>
    //   <Joke 
    //     setup="Why don’t programmers like nature?"
    //     punchline="It has too many bugs."
    //     like={32}
    //      onLike={() => console.log("Like!")}
    //   />
    //   <Joke 
    //     setup="Why did the developer go broke?"
    //     punchline="Because he used up all his cache."
    //     like={10}
    //     onLike={() => console.log("Like!")}
    //   />
    //   <Joke 
    //     setup="Why was the computer cold?"
    //     punchline="Because it forgot to close its Windows."
    //     like={20}
    //      onLike={() => console.log("Like!")}
    //   />
    //   <Joke 
    //     punchline="Debugging is like being a detective in a crime movie where you are also the murderer."
    //     like={18}
    //      onLike={() => console.log("Like!")}
    //   />
    //   <Joke 
    //     setup="Why did the React component feel stressed?"
    //     punchline="Because it had too many props."
    //     like={33}
    //      onLike={() => console.log("Like!")}
    //   />
    //   </>
    //     // <div className="contacts">
    //     //     <Contact 
    //     //       img="./images/mr-whiskerson.png"
    //     //       name="Mr. Whiskerson"
    //     //       phone="(212) 555-1234"
    //     //       email="mr.whiskaz@catnap.meow"
    //     //     />
    //     //     <Contact 
    //     //       img="./images/fluffykins.png"
    //     //       name="Fluffykins"
    //     //       phone="(212) 555-2345"
    //     //       email="fluff@me.com"
    //     //     />
    //     //     <Contact
    //     //       img="./images/felix.png"
    //     //       name="Felix"
    //     //       phone="(212) 555-4567"
    //     //       email="thecat@hotmail.com"
    //     //     />
    //     //     <Contact
    //     //       img="./images/pumpkin.png"
    //     //       name="Pumpkin"
    //     //       phone="(0800) CAT KING"
    //     //       email="pumpkin@scrimba.com"
    //     //     />
            
    //     // </div>
  //  )
//}