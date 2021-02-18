import React, { useState } from 'react'
import { AddCategory } from './Components/AddCategory';
import { GifGrid } from './Components/GifGrid';

export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [catergories, setCategorias] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    const [categories, setCategories] = useState(['One Piece']);

    // const handleAdd = () =>{
    //     //setCategories( [...categories,  'Naruto'] );
    //     setCategories( cats => [...cats, 'Boruto'] ) ;
    
    return (
        <div>
            
            <>
                <h2>GifExpertApp</h2>
                <AddCategory setCategories = {setCategories} />
                <hr />
                    
                <ol>
                    {
                        categories.map((category) => (
                            <GifGrid category = {category} key= {category}/>
                            
                        ))
                    }
                </ol>

            </>
            
        </div>
    )
    
}
