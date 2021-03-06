import React from 'react'
import { getGifts } from '../Helpers/getGifts';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => { 

    // const [images, setImages] = useState([])
    
    const {data:images, loading} = useFetchGifs(category);
    
    return (
        <>
            
            <h3> {category}  </h3>
            {loading ? <p className="animate__animated animate__flash">cargando</p> : <p> melo caramelo</p>}
            <div className="card-grid">          
            {
                images.map(img => (
                    <GifGridItem {...img} key={img.id}/>  
                ))
            }
                            
            </div>
        </>
         
         
    )
}
