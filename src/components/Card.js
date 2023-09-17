import React from 'react'

const Card = ({robot}) => {
  const { name, email, id} = robot
  return (
    <div className="card">
        <div className="top">
            <img src={`https://robohash.org/${id}?set=set2?size=120x120`} alt="" />
        </div>
        <div className="bottom">
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    </div>
  )
}

export default Card