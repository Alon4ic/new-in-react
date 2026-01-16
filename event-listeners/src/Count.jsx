// import React from 'react'

// export default function Count({number}) {
//     console.log("Count rendered")
//   return (
//     <h2 className='count'>{number}</h2>
//   )
// }
//или 
import React from 'react'

export default function Count(props) {
    console.log("Count rendered")
  return (
    <h2 className='count'>{props.number}</h2>
  )
}