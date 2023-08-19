// import React, { Component } from 'react'
 import React from 'react'
import './compo.css'
import Cardgall from './propuse';

const ArrCard =()=> {
  const Card=[
        {
             name:"Card1",
            // img:"Cards/2.jpeg",
             des:"hdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvn jbgf bnjnvk nmdfvn bnmnvf bnmdvgf bndfn nmdfn bnvfd jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd ",
             class:"C1"
        },
        {
             name:"Card2",
            // img:"Cards/3.jpeg",
             des:"hdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvn jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd",
             class:"C2"
        },
        {
             name:"Card3",
            // img:"Cards/4.jpeg",
             des:"hdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvn jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd",
             class:"C3"
        },
        {
             name:"Card4",
            // img:"Cards/5.jpeg",
             des:"hdfvbd djhvfjd jndhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhvfjd jnds djfksf djfbvnhdfvbd djhs djfksf djfbvn jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd jbnfdj bfdjbn dvfbfvj nmfvn bhnvdfj jvnd",
             class:"C4"
        },
   
    
    ];

    
    return(
           <Cardgall Card={Card}/>
    )
  }


export default ArrCard;
