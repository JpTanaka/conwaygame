import React, { useState, useEffect} from 'react';
import './App.css';
import ReactDOM from 'react-dom';
export default App;

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

function Board(props) {
  
  const rows = props.boardmatrix.map((row, index) =>
    < Row click = {props.handleClick} key = {row.id} matrixrow = {row} matrixrownumber = {index}/>
  );
  return (
    
    <div className='board'>
    {rows}
    </div>
      
    
    
  );
}

function BeginButton(props) {
  const phrase = (props.toggle? "Stop":"Begin");
  return (
    <button class="button-30 begin" role="button" onClick={props.isToggle}>
      {phrase}
    </button>

    )
}

// function Counter(props) {
  
//   const counterphrase = "Counter: " + props.counter + (props.toggle? " true":" false")
//   // 
//   return (
//     <div>
//     {counterphrase}
//     </div>
//   )
// }

function App() {
  
  const [counter, setCounter] = useState(0)
  const [toggle, setToggle] = useState(false)
  function isToggle() {
    setToggle(prevState => !prevState)
  }
  useEffect(()=> {
    if (toggle) {
        const interval = setInterval(() => {
            setCounter(counter=>counter+1);
            setMatrix(boardmatrix=>nextGen(boardmatrix));
        }, 500)  
        return () => clearInterval(interval);}
    }
, [toggle])


function nextGen(cells) {
  var get = function (i, j) { return (cells[i] && cells[i][j]) | 0 };
  
  cells = cells.map(function (row, i) {
    return row.map(function (alive, j) {
      var neighbors =
        get(i-1, j-1) + get(i-1, j) + get(i-1, j+1) +
        get(i  , j-1)               + get(i  , j+1) +
        get(i+1, j-1) + get(i+1, j) + get(i+1, j+1);
        
      return (neighbors === 3 || (neighbors === 2 && alive)) | 0;
    });
  });
  
  return cells;
}


function handleClick (matrixcollumnnumber, matrixrownumber) {
  let temp_matrix = [...boardmatrix];
  temp_matrix[matrixrownumber][matrixcollumnnumber] = (temp_matrix[matrixrownumber][matrixcollumnnumber] ? 0 : 1);
  
  setMatrix(temp_matrix);
  console.log(boardmatrix);
}
const nbhorizontalsquares = 50;
const nbverticalsquares = 40;
let i = 0;
const [boardmatrix, setMatrix] = useState(Array(nbverticalsquares).fill().map(()=> Array(nbhorizontalsquares).fill(0)));


//
  return (
    <>
    <div className="container">
      <div className="title">
        <p className="title-game">Conway's Game of 
        {/* <span className='title-game life'> Life</span> */}
        </p>
      </div>
      {/* < Counter counter = {counter} setCounter = {setCounter} toggle = {toggle} /> */}
    < BeginButton isToggle = {isToggle} toggle = {toggle} />  
    < Board handleClick={handleClick} boardmatrix={boardmatrix} setMatrix={setMatrix} />
    
    </div>

    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);