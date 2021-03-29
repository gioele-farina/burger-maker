import React from 'react';
import classes from './Burger.css';
import Ingredient from './Ingredient/Ingredient';

const burger = (props) => {
  let ingredients = null;

  if (props.myBurger.length === 0) {
    ingredients = <p key="noel" className={classes.emptyBurger}>Please add some ingredients</p>;
  } else {
    ingredients = props.myBurger.map((ing, i) => {
      return <Ingredient type={ing} key={ing+i} />;
    });
    ingredients.reverse();
  }

  return (
    <div className={classes.burgerContainer}>
      <Ingredient type="BreadTop" />
        {ingredients}
      <Ingredient type="BreadBottom" />
    </div>
  );
}

export default burger;
