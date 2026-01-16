import React from 'react';

export default function Entry(props) {
    console.log(props)
    return (
        <div className="inner">
            <img src={props.entry.img.src} alt={props.entry.img.alt} className="inner-img" />
            <div className="inner-block">
                <div className="inner-block-top">
                <div className="inner-block-top-map">
                    <img src="../../images/marker.png" className='map-img' alt="marker" />
                    <p className='map-text'>{props.entry.country}</p>
                </div>
                <a href={props.entry.googleMapsLink} className="inner-block-top-link">View on Google Maps</a>
            </div>
            <h2 className="inner-block-title">{props.entry.title}</h2>
            <p className='inner-block-date'>{props.entry.dates}</p>
            <p className="inner-block-content">{props.entry.text}</p>
            </div>
        </div>
    )
}


/**
 * Challenge: Fix our component! 😱
 */











// export default function Entry(props) {
//     return (
//         <article className="journal-entry">
//             <div className="main-image-container">
//                 <img 
//                     className="main-image"
//                     src={props.img.src}
//                     alt={props.img.alt}
//                 />
//             </div>
//             <div className="info-container">
//                 <img 
//                     className="marker"
//                     src="../images/marker.png" 
//                     alt="map marker icon"
//                 />
//                 <span className="country">{props.country}</span>
//                 <a href={props.googleMapsLink} target="_blank">View on Google Maps</a>
//                 <h2 className="entry-title">{props.title}</h2>
//                 <p className="trip-dates">{props.dates}</p>
//                 <p className="entry-text">{props.text}</p>
//             </div>
            
//         </article>
//     )
// }