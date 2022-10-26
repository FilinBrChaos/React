import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/header';
import { HomePage } from './components/home-page/home-page';
import { NewsPage } from './components/news-page/news-page';
import { Footer } from './components/footer';

function App() {
  return (
    <Router>
        <div className='content'>
          <Routes>
            <Route path="/" element={<HomePage></HomePage>}/>
            <Route path='/news' element={<NewsPage></NewsPage>}/>
          </Routes>
        </div>
        <Footer></Footer>
    </Router>
  );
}

export default App;
