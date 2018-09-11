import React, { Component } from 'react';
import Flexbox from'./components/Flexbox.js';
import './Assets/css/default.css';

let items = [
    {
        describe: "Сказочное заморское яство",
        describe_hover:"Котэ не одобряет?",
        brand: "Нямушка",
        taste: "с фуа-гра",
        servings: "10 порций ",
        bonus:"мышь в подарок",
        weight:"0.5",
        slogan_available: "Чего сидишь? Порадуй котэ, ",
        slogan_disable:"Печалька, с фуа-гра закончился.",
        slogan_selected:"Печень утки разварная с артишоками.",
        available:true,
        hover:false,
        count_hover_selected:0
    },
    {
        describe: "Сказочное заморское яство",
        describe_hover:"Котэ не одобряет?",
        brand: "Нямушка",
        taste: "c рыбой",
        servings: "40 порций",
        bonus:"2 мыши в подарок",
        weight:"2",
        slogan_available: "Чего сидишь? Порадуй котэ, ",
        slogan_disable:"Печалька, с рыбой закончился.",
        slogan_selected:"Головы щучьи с чесноком да свежайшая сёмгушка.",
        available:true,
        hover:false,
        count_hover_selected:0
    },
    {
        describe: "Сказочное заморское яство",
        describe_hover:"Котэ не одобряет?",
        brand: "Нямушка",
        taste: "с курой",
        servings: "100 порций ",
        bonus:"5 мышей в подарок",
        weight:"5",
        slogan_available: "Чего сидишь? Порадуй котэ, ",
        slogan_disable:"Печалька, с курой закончился.",
        slogan_selected:"Филе из цыплят с трюфелями в бульоне.",
        available:false,
        hover:false,
        count_hover_selected:0
    }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Ты сегодня покормил кота?</h1>
        <Flexbox data={items}/>
      </div>
    );
  }
}

export default App;
 
