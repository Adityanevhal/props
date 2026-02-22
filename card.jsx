 import React from 'react'

const Card = (props) => {
   console.log(props)
  return (
   
     <div className="card">
        <img src={props.img} alt="pic" />
        <h1>{props.user}, {props.age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, iure?</p>
         <button>View Profile</button>
      </div>
  )
}

export default Card
