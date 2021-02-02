import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    /* const handleAdd = () => {
        
        setCategories([...categories, 'hunterXhunter']);
    } */

    return (
        <>
          <h2>GifExpertApp</h2>
          <AddCategory setCategory={setCategories}/>
          <hr/>

          <ol>
              {
                  //siempre debe regresar un valor o si no dara error
                  categories.map(category => (
                      <GifGrid key={category} category={category}/>
                  ))
              }
          </ol>
        </>
    )
}
