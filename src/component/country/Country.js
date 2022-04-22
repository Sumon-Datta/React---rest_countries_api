import React, { useState } from 'react';
import "./Country.css"

const Country = (props) => {

    let [country, setcountry] = useState([0])
    
    let addCount= () =>{
         let newCount = parseInt (country) + (1);
         if(newCount > 5){
             newCount.innerText = 5;
         }
         else{
            setcountry(newCount)
         }
         
    }

    let decreCount = () =>{
        if(country <= 0){
            country.innerText = 0; 
        }
        else{
        let newCOunt = parseInt(country) - 1;

        
        
        setcountry(newCOunt)
    }
    }
    
    let {name,population,area,flags} = props.country
    return (
        <div className='country'>
           <h3>Name: {name.common}</h3>
           <h4>Population: {population}</h4> 
           <h4>Area: {area}</h4>
           <img className='image' src={flags.png} alt="" />

            <div>
                <h4>Product: {country}</h4>
                <button className='btn btn-dark mx-3' onClick={addCount}>increase</button>
                <button className='btn btn-danger' onClick={decreCount}>decrease</button>
            </div>
           
        </div>
    );
};

export default Country;