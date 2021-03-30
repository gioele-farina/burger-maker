import React, {Component} from 'react';

import classes from './CheckOut.css';
import Wrapper from '../../Wrapper/Wrapper';

class CheckOut extends Component {

  state = {
    summaryActive: false,
  }

  summaryActiveHandler = (state) => {
    if (this.props.chosenIng.length === 0) {
      return null;
    }
    this.setState({
      summaryActive: state
    });
  }

  render(){

    let finalChosenList = {};
    this.props.chosenIng.forEach((ingr, i) => {
      if (!(ingr in finalChosenList)) {
        finalChosenList[ingr] = 1;
      } else {
        finalChosenList[ingr] += 1;
      }
    });

    let displayedSummary = [];
    for (var key in finalChosenList) {
      displayedSummary.push(<li key={key}>{key}: {finalChosenList[key]}.</li>);
    }

    return (
      <Wrapper>
        <button className={this.props.chosenIng.length === 0 ? classes.orderButton + " " + classes.disabled : classes.orderButton}
        onClick={()=> this.summaryActiveHandler(true)}
        >Order</button>

        <div className={this.state.summaryActive ? classes.backdrop : classes.backdrop + " " + classes.disabled}
        onClick={()=> this.summaryActiveHandler(false)}
        ></div>

        <div className={this.state.summaryActive ? classes.summary : classes.summary + " " + classes.disabled}>
            <h3>Your delicious Burger!</h3>
            <ul>
              {displayedSummary}
            </ul>

            <h4>Price: {this.props.price}€</h4>
        </div>


      </ Wrapper>
    )
  }
}

export default CheckOut;
