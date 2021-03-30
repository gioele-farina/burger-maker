import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import Burger from './components/Burger/Burger';
import BurgerBuilder from './components/BurgerBuilder/BurgerBuilder';

class App extends Component {
  state = {
    ingredients: [
      { name: 'Meat', price: 1},
      { name: 'Cheese', price: 0.50},
      { name: 'Salad', price: 0.25},
      { name: 'Bacon', price: 0.30},
    ],

    chosenIng: [],

    price: 1,
  }

  addIngr = (type) => {
    let newChosenList = [...this.state.chosenIng, type];
    this.setState({
      chosenIng: newChosenList,
    });

    let oldPrice = this.state.price;
    let newPrice = 0;
    this.state.ingredients.forEach((item, i) => {
      if (item.name === type) {
        newPrice = item.price;
      }
    });

    let finalPrice = parseFloat(oldPrice) + parseFloat(newPrice);
    finalPrice = finalPrice.toFixed(2);
    this.setState({
      price: finalPrice
    });
  }

  removeIng = (index, type) => {
    let newChosenList = this.state.chosenIng;
    newChosenList.splice(index, 1);
    this.setState({
      chosenIng: newChosenList
    });

    let oldPrice = this.state.price;
    let newPrice = 0;
    this.state.ingredients.forEach((item, i) => {
      if (item.name === type) {
        newPrice = item.price;
      }
    });

    let finalPrice = parseFloat(oldPrice) - parseFloat(newPrice);
    finalPrice = finalPrice.toFixed(2);
    this.setState({
      price: finalPrice
    });
  }

  render() {
    return (
      <Layout>
        <BurgerBuilder
           ingredientsList={this.state.ingredients}
           addIngr={this.addIngr}
           price={this.state.price}
           chosenIng={this.state.chosenIng}
        />
         <Burger myBurger={this.state.chosenIng} removeIng={this.removeIng}/>
      </Layout>
    );
  }
}

export default App;
