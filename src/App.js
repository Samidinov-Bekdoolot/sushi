import { Card } from "./components/Card";
import "./App.css";
import rolly from './rolly.jpg'
import rolly2 from './rolly2.jpg'
import rolly3 from './rolly3.png'

function App() {
  const data = [
    {
      title: "УНАГИ УРАМАКИ",
      img: rolly,
      text: <p>Рисовая бумага,лист салата,баклажан в чесночном соусе,помидор.</p>,
      prise:<h3>1900,00 TГ</h3>,
      sum:<p>8 штук</p>,
      col: <p>Калорийность Ккал: 298</p>,
      input:<div>
      <a href="#">-</a>
      <input placeholder="1"></input>
      <a href="#">+</a>
  </div>,
      button:<a href="#">ДОБАВИТЬ В КОРЗИНУ</a>
    },
    {
      title: "МАДРИД РОЛЛ",
      img: rolly2,
      text: <p>Рисовая бумага,лист салата,баклажан в чесночном соусе,помидор.</p>,
      prise:<h3>1100,00 TГ</h3>,
      sum:<p>8 штук</p>,
      col: <p>Калорийность Ккал: 275</p>,
      input:<div>
      <a href="#">-</a>
      <input placeholder="1"></input>
      <a href="#">+</a>
  </div>,
      button:<a href="#">ДОБАВИТЬ В КОРЗИНУ</a>
    },  
    {
      title: "ТЕПЛАЯ КРЕВЕТКА С МОЦАРЕЛЛОЙ",
      img: rolly3,
      text: <p>Рисовая бумага,лист салата,баклажан в чесночном соусе,помидор.</p>,
      prise:<h3>1700,00 TГ</h3>,
      sum:<p>8 штук</p>,
      col: <p>Калорийность Ккал: 257</p>,
      input:<div>
      <a href="#">-</a>
      <input placeholder="1"></input>
      <a href="#">+</a>
  </div>,
      button:<a href="#">ДОБАВИТЬ В КОРЗИНУ</a>
    },
    {
      title: "ФРЕШ РОЛЛ С БАКЛАЖАНОМ",
      img: rolly,
      text: <p>Рисовая бумага,лист салата,баклажан в чесночном соусе,помидор.</p>,
      prise:<h3>550,00 ТГ</h3>,
      sum:<p>6 штук</p>,
      col: <p>Калорийность Ккал: 235</p>,
      input:<div>
      <a href="#">-</a>
      <input placeholder="1"></input>
      <a href="#">+</a>
  </div>,
      button:<a href="#">ДОБАВИТЬ В КОРЗИНУ</a>
    },

  ];

  return (
    <div className="App">
      {data.map((el, id) => {
        return <Card data={el} key={id} />
        
        ;
      })}
    </div>
  );
}

export default App;
