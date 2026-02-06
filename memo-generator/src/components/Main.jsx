import React, { useEffect } from 'react'
import { useState } from 'react'

export default function Main() {
    const [allMemes, setAllMemes] = useState([])
    const [ meme, setMeme ] = useState({
        topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg"
    })
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
        .then(res => res.json())
        .then(data => {
            setAllMemes(data.data.memes)
        })
        .catch(err => console.log(err))
    }, [])


    function handleChange(event) {
        const {name, value} = event.currentTarget
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }
    
    function handleChangeImage() {
        const randomIndex = Math.round(Math.random() * allMemes.length)
        const randomImage = allMemes[randomIndex].url
        
        setMeme(prev => ({
            ...prev,
            imageUrl: randomImage
        }))
    }
  return (
    <main>
            <div className="form">
                <label>Top Text
                    <input
                        type="text"
                        placeholder="One does not simply"
                        name="topText"
                        onChange={handleChange}
                        value={meme.topText}
                    />
                </label>

                <label>Bottom Text
                    <input
                        type="text"
                        placeholder="Walk into Mordor"
                        name="bottomText"
                        onChange={handleChange}
                        value={meme.bottomText}
                    />
                </label>
                <button onClick={handleChangeImage}>Get a new meme image 🖼</button>
            </div>
            <div className="meme">
                <img src={meme.imageUrl} />
                <span className="top">{meme.topText}</span>
                <span className="bottom">{meme.bottomText}</span>
            </div>
        </main>
  )
}
