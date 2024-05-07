import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import productsFetch from './api/productsFetch';
import Contact from './views/contact/Contact';
import ListProducts from './views/listProducts/ListProducts'


function HomePage() {
  return (<h1>Home Page</h1>);
}
function AboutPage() {
  return (<div><h1> about page</h1></div>)
}
function ContactPage(){
  console.log(' contact ::');
  return (<div><h1>contact page</h1></div>);
}
function App() {
  console.log('app');
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/products" element={<ListProducts/>} />
        {/* Define more routes as needed */}
      </Routes>
  </Router>
  );
}

export default App;
