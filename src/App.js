
import './App.css';
// import Card from './components/Cards/Card';
import {Button,Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import Card from './components/Cards/Card';



function App() {
  const items =[
    
    {name:'  Shohid minar', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'},

    {name:'  Shohid minar', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'},

    {name:'  Shohid minar', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'},

    {name:'  Shohid minar', description:'This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.', img:'https://upload.wikimedia.org/wikipedia/commons/d/dd/Shaheed_minar_Roehl.jpg'}
  
  
  
  ]





  return (

    <div>
    
<div className="row row-cols-1 row-cols-md-4 g-4">
 
{
  items.map(item=><Card item={item}>
    
    
    </Card>)
}


</div>
<Button variant='danger'> hello</Button>
<Spinner animation="grow" />




</div>



  );
}
//button adding in react 

export default App;
