import React from 'react'
import Card from './Card'

const CardsList = ({filteredRobots}) => {
  return (
    <div className="cardList">
        {filteredRobots.map(robot => (
            <Card key={robot.id} robot={robot}></Card>
        ))}
    </div>
  )
}

export default CardsList