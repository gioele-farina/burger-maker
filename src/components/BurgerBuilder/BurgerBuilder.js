import React from 'react';
import classes from './BurgerBuilder.css';

const burgerBuilder = (props) => {

  let ingredientsList = [];

  ingredientsList = props.ingredientsList.map((ingr, i) => {
    return (
      <li key={ingr.name} onClick={() => props.addIngr(ingr.name)}>
        <div className={classes.nameContainer}>
          <i className={'fas fa-plus-circle ' + classes.addButton}></i>
          <span className={classes.ingName}>{ingr.name}</span>
        </div>
        <span className={classes.ingPrice}>{ingr.price.toFixed(2)}€</span>
      </li>
    );
  });

  return (
    <div className={classes.ingredientsList}>
      <ul>
        {ingredientsList}
      </ul>
      <div>
        <p>Price: {props.price}€.</p>
      </div>
    </div>
  );
}

export default burgerBuilder;
