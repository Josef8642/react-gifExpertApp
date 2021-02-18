import React, { useEffect, useState } from 'react'
import { getGifts } from '../Helpers/getGifts';

export const useFetchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true,
    });
    useEffect(() => {
        console.log(category)
        getGifts(category)
        .then(img => {
            
            setTimeout(() => {
                setState({
                    data: img,
                    loading:false
                })
            }, 2000);
            
        });
    }, [category]) 

    return state;
}

