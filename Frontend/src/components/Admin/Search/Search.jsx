import React, { useEffect } from "react";
import {useState } from "react";
import { useDispatch } from "react-redux";
import { getAlumn } from "../../redux/actions";

export default function SearchBar() {


    const [input, setInput] = useState('');

    const dispatch = useDispatch();

    function sacarAlumn(e){
      if(e.target.value)
        setInput(e.target.value)
    }
    
    function onClickHandle(){
        dispatch(getAlumn(input))
        setInput('')
    }

    function onClickRefresh(){
        dispatch(getAlumn())
    }


  return (
    <div id='searchbar'>
      <input className='busqueda'
        type="text"
        value={input}
        placeholder="Type the dog"
        onChange={(e)=>sacarAlumn(e)}
      />
      <button className='boton' type='button' onClick={onClickHandle}>Search</button>
      <button className='boton' type='button' onClick={onClickRefresh}>Refresh</button>

    </div>
  );
}
