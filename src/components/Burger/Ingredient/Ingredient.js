import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Ingredient.css';
import Wrapper from '../../Wrapper/Wrapper';

class Ingredient extends Component {

  render(){
    let renderedIng = null;

    switch (this.props.type)
    {
     case 'BreadTop':
       renderedIng =
       <div className={classes.BreadTop}>
         <div className={classes.Seeds1}></div>
         <div className={classes.Seeds2}></div>
       </div>;
       break;
     case 'BreadBottom':
      renderedIng = <div className={classes.BreadBottom}></div>;
      break;
     case 'Meat':
      renderedIng = <div className={classes.Meat} onClick={() => this.props.removeIng(this.props.index)}></div>;
      break;
     case 'Cheese':
      renderedIng = <div className={classes.Cheese} onClick={() => this.props.removeIng(this.props.index)}></div>;
      break;
     case 'Salad':
      renderedIng = <div className={classes.Salad} onClick={() => this.props.removeIng(this.props.index)}></div>;
      break;
     case 'Bacon':
      renderedIng = <div className={classes.Bacon} onClick={() => this.props.removeIng(this.props.index)}></div>;
      break;
     default:
      renderedIng = null;
    }

    return (
      <Wrapper>
        {renderedIng}
      </Wrapper>
    );
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired
}

export default Ingredient;
