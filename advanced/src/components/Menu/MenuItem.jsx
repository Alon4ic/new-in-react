import React from 'react'

export default function MenuItem({children }) {
 
  return (
    <div className='menu-item'>
      {children}
    </div>
  )
}
// export default function MenuItem({children, open, toggle}) {
//   console.log(open, toggle);
//   return (
//     <div className='menu-item'>
//       {children}
//     </div>
//   )
// }
