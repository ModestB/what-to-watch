import React from 'react';

// Boostrap imports
import Card from 'react-bootstrap/Card';


// Style imports
import classes from "./ReviewCard.module.css";

const reviewCard = ( props ) => {
  return (
    <Card className={`${classes.card} rounded-0 mb-3`}>
      <Card.Body className='p-2'>
        <Card.Title className={`${classes.title} font-weight-bold text-left`}>
          {props.author}
        </Card.Title>
        <Card.Text className={`${classes.text} text-justify pl-2`}>
          {props.content}
        </Card.Text>
      </Card.Body>
    </Card>
  )
};

export default reviewCard;