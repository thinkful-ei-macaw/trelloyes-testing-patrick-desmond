import React from 'react';
import Card from './card';
import './list.css';

function List(props) {
  return <section classname-list="true">
    <header>{props.header}</header>

    <div className='List-cards'>
    
      <ul> {props.cards.map((card) => {
        return <Card
          key={card.id}
          id={card.id}
          title={card.title}
          content={card.content} 
          onClickDelete={props.onClickDelete}/>
      })}</ul>
      <button type="button" className='add-button' onClick={props.onClickAdd}>Random Card</button>



    </div>
  </section>
};

export default List
