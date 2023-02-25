
import './App.css';
import Card from './Components/card';
import React from 'react';
import Header from './Components/header';
import useFilter from './hook/use-filter';

export default  function App() {
  const data = useFilter()
  return (
    <> 
      <div className='container-lg col-lg-10' style={{marginTop:'8rem'}}>
        <Header/>
        {
          data.map(x=>{
            return (
              <Card key={x.id} info={x}/>
            )
          })
        }
      </div>
    </>
  );
}


