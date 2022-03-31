import React from 'react';
import Header from './components/Header';
import  Home  from './components/Home';
import SearchPage from './components/SearchPage';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import {Fragment} from 'react';
import Footer from './components/Footer';


function App() {
  return (
    

    <Router>
      <Header/>
      <Fragment>
      <Routes>

<Route path="/search" element={<SearchPage />}/>
<Route path="/" element={ <Home/>}/>
<Route path="/" element={<Home />}/>





      </Routes>
      <Footer />
      </Fragment>

    </Router>

  )

};

export default App;
