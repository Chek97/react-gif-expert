import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategory}) => {

    const [inputValue, setInputValue] = useState('');//si se deja solo es un undefined y es preferible no hacerlo

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategory(categories => [inputValue, ...categories ]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategory: PropTypes.func.isRequired
}