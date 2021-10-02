
import './App.css';
// import Card from './components/Cards/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import News from './components/News/News';




function App() {


  const [news, setNews]=useState([]) 
  
  useEffect(()=>{
    
    
    fetch('https://newsapi.org/v2/everything?q=tesla&from=2021-09-02&sortBy=publishedAt&apiKey=94d71f1e193b44e5830090f34c6ba14a').then(res=>res.json()).then(data=>setNews(data.articles))    },[])

  return (

<div className="app">

{ news.length ===0 ?<Spinner animation="border" /> :
<Row xs={1} md={3} className="g-4">
  {
    news.map(nw =><News news={nw}></News>)
  }
</Row>}

</div>
  );
}
//button adding in react 

export default App;
