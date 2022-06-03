import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


function Square(props) {
  const squareclassname = "square " + (props.squarevalue ? "alive" : "dead")
  return (
    <div className={squareclassname} onClick = {() => props.click(props.matrixcollumnnumber, props.matrixrownumber)}>
        
    </div>
  )
}

function Row(props) {
  const collumns = props.matrixrow.map((squareelement, index) => < Square click = {props.click} key = {squareelement.id}
  matrixrownumber = {props.matrixrownumber} matrixcollumnnumber = {index} squarevalue={squareelement} />)
  return (
    <div className='boardrow'>
      {collumns}
      
    </div>
  )
}

function Board() {
  function handleClick (matrixcollumnnumber, matrixrownumber) {
      let temp_matrix = [...boardmatrix];
      temp_matrix[matrixrownumber][matrixcollumnnumber] = 1;
      
      setMatrix(temp_matrix);
      console.log(boardmatrix);
  }
  const nbhorizontalsquares = 50;
  const nbverticalsquares = 40;
  let i = 0;
  const [boardmatrix, setMatrix] = useState(Array(nbverticalsquares).fill().map(()=> Array(nbhorizontalsquares).fill(0)));
  const rows = boardmatrix.map((row, index) =>
    < Row click = {handleClick} key = {row.id} matrixrow = {row} matrixrownumber = {index}/>
  );
  return (
    
    <div className='board'>
    {rows}
    </div>
      
    
    
  );
}

function BeginButton() {
  return (
    <button class="button-30 begin" role="button">
      Begin
    </button>

    )
}

function App() {
  return (
    <>
    <div className="container">
    < BeginButton  />
    <Board />
    
    </div>

    </>
  );
}

export default App;
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);