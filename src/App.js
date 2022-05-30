import React, { useState } from 'react';
import './App.css';
import ReactDOM from 'react-dom';


function Row() {
  return (
    <>
    <p>aaa</p>
    </>
  )
}

function Board() {
  const nbhorizontalsquares = 50;
  const nbverticalsquares = 40;
  const [boardmatrix, setMatrix] = useState(Array(nbverticalsquares).fill().map(()=> Array(nbhorizontalsquares).fill(0)));
  const rows = boardmatrix.map((row) =>
    < Row />
  );
  return (
    <ul>{rows}</ul>
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