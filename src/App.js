import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


function Square(props) {
  function handleClick () {
      console.log("aaa");
  }
  const squareclassname = "square" + props.squarevalue
  return (
    <div className={squareclassname} onClick = {() => handleClick()}>

    </div>
  )
}

function Row(props) {
  console.log(props.matrixrow)
  const collumns = props.matrixrow.map((squareelement) => < Square squarevalue={squareelement} />)
  return (
    <div className='boardrow'>
      {collumns}
      
    </div>
  )
}

function Board() {
  const nbhorizontalsquares = 50;
  const nbverticalsquares = 40;
  const [boardmatrix, setMatrix] = useState(Array(nbverticalsquares).fill().map(()=> Array(nbhorizontalsquares).fill(0)));
  const rows = boardmatrix.map((row) =>
    < Row matrixrow = {row}/>
  );
  return (
    <div className='board'>
    {rows}
    </div>
      
    
    
  );
}



function App() {
  return (
    <>
    Hello World!
    <Board />
    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);