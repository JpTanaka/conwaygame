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

function BeginButton(props) {
  return (
    <button class="button-30 begin" role="button" onClick={props.isToggle}>
      Begin
    </button>

    )
}

function Counter(props) {
  
  const counterphrase = "Counter: " + props.counter + (props.toggle? " true":" false")
  // 
  return (
    <div>
    {counterphrase}
    </div>
  )
}

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

        }, 1000)  
        return () => clearInterval(interval);}
    }
, [toggle])
  
//
  return (
    <>
    <div className="container">
      {counter}
      < Counter counter = {counter} setCounter = {setCounter} toggle = {toggle} />
    < BeginButton isToggle = {isToggle} />  
    < Board />
    
    </div>

    </>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);