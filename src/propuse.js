// import React, { Component } from 'react'
import './compo.css'
 const Cardgall=(props)=>{

        return(
            <>   <h1>My Cards</h1>  
        <div className='flx'>
               
            <div className='cardd'>
             {props.Card.map((item) => {
            return <>
          
            <div className={item.class}> 
            {/* <div className='cardrow'> */}
                <h3>{item.name}</h3> 
                <hr/>
                <h4>Card Title</h4>
                <p> {item.des}</p>
            </div>
            {/* </div> */}
            </>
            })}
        </div>
        </div>
            </>

        )
      }

export default Cardgall;
    
    