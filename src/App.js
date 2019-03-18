import React, { Component } from 'react';
import Title from './components/Title';
import Form from './components/Form';
import Nutrition from './components/Nutrition';
import './App.css';

const api_id = '117aef37';
const api_key = 'a6661a20b3715db55bab42723193a3b1';

class App extends Component {
  state = {
    calories: undefined,
    carbs: undefined,
    protein: undefined,
    fat: undefined,
    error: undefined
  }
  
  getNutrition = async (e) => {
    e.preventDefault();
    const food = e.target.elements.food.value;
    const api_call = await fetch(`https://api.edamam.com/api/food-database/parser?ingr=${food}&app_id=${api_id}&app_key=${api_key}`);
    const data = await api_call.json();
    // console.log(data);
    
    if (food && data.parsed.length !== 0) {           
      this.setState({
      calories: data.parsed[0].food.nutrients.ENERC_KCAL,
      carbs: data.parsed[0].food.nutrients.CHOCDF,
      protein: data.parsed[0].food.nutrients.PROCNT,
      fat: data.parsed[0].food.nutrients.FAT,
      error: ''
    })
    } else {
      this.setState({
        calories: undefined,
        carbs: undefined,
        protein: undefined,
        fat: undefined,
        error: 'Enter valid food name'
      })
    }
        
  }
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <Title />
          <Form getNutrition={this.getNutrition}/>
          <Nutrition
            calories={this.state.calories}
            carbs={this.state.carbs}
            protein={this.state.protein}
            fat={this.state.fat}
            error={this.state.error}
          />
        </div>
      </div>
    );
  }
}

export default App;
