import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [searchItem, searchFunction] = useState("");

  let fruits  = ['Apple','Adele','Agnes',
  'Billy','Bob','Jack','jillY'];

  return (
    <>
       <div className='mt-5 text-center'>
        <h3>Search Filter In React</h3>
        <input type='search' onKeyUp={(event)=>{ searchFunction(event.target.value)}}></input>
        <div className='text-justify'>
          {
              fruits.filter((val)=>{
                if(searchItem === ''){
                  return val;
                }else if(val.toLowerCase().includes(searchItem.toLowerCase())){
                    return val;
                }
              })
              .map((val,key)=>{
                  return <li key={key}>{val}</li>
              })
          }
        </div>
    </div>
    </>
  );
}

export default App;
