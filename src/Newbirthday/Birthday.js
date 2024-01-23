import React, { useState } from 'react';
import Data from './Data' 
import './birthday.css'

const Birthday = () => {
    let[data,setState]=useState(Data);
    console.log(data)
  return (
    <div className='style'>
        <section>
            <div className='head'>
            <h2>Birthday Reminder {data.length}</h2>
            
            </div>
         {
            data.map((item)=>{
                return(
                    <div className='cards'>
                    <img src={item.ImageURL} alt=''></img>
                    <h3>Name: {item.ActorName}</h3>
                    <h3>Age: {item.Birthday}</h3>
                    </div>
                )
            })
         }
         <center><button onClick={()=>setState([])}>Clear</button></center>
        </section>
        
    </div>
  )
}

export default Birthday