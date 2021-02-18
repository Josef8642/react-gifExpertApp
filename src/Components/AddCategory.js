import userEvent from '@testing-library/user-event'
import React, { useState } from 'react'
import Proptypes from 'prop-types'

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');
    const handleInput = (e) => {
        
        setInputValue(e.target.value);
        
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCategories( cats => [inputValue, ...cats ] ) ;
        setInputValue('');
        
    }

    return (
        <>
            <h3>AddCategory</h3>
            <form onSubmit = {handleSubmit} >
                <input type= "text" value= {inputValue} onChange = {handleInput} />
                
            </form>
        </>
    )
}

AddCategory.propTypes = {
    setCategories: Proptypes.func.isRequired,
}


