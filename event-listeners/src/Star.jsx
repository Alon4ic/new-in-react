import React from 'react'
import starFilled from "./images/star-filled.png"
import starEmpty from "./images/star-empty.png"

export default function Star(props) {

  let starIcon = props.state ? starFilled : starEmpty

  return (
    <>
    <button
      onClick={props.click}
      aria-pressed={props.state}
      aria-label={props.state ? "Remove from favorites" : "Add to favorites"}
      className="favorite-button"
                    >
      <img
        src={starIcon}
        alt={props.state ? "filled star icon" : "empty star icon"}
        className="favorite"
        
      />
      </button>
    </>
  )
}
