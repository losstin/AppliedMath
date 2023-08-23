import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home, About, News, Students, WhyUme, Teachers, Graduates } from "./pages";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={About}  />
        <Route path="/news" exact Component={News}  />
        <Route path="/students" exact Component={Students}  />
        <Route path="/why-ume" exact Component={WhyUme}  />
        <Route path="/teachers" exact Component={Teachers}  />
        <Route path="/graduates" exact Component={Graduates}  />
        <Route path="*"  element={'404'}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
