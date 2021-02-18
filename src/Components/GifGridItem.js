import React from 'react'

export const GifGridItem = ({id, title, url}) => {
    //console.log(id, title,url)
    return (
        <div className ='imagenes animate__animated animate__zoomIn'>
            {/* {img.title} */}
            <img src={url} alt={title} />
            <p>{title}</p>
        </div>
    )
}
 