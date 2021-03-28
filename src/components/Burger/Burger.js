import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  return (

    <div className={classes.burgerContainer}>
      <Ingredient type="BreadTop" />
      <Ingredient type="Meat" />
      <Ingredient type="Cheese" />
      <Ingredient type="Salad" />
      <Ingredient type="Bacon" />
      <Ingredient type="BreadBottom" />
    </div>
  );
}

export default burger;
