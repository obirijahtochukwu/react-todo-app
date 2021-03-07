import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './NavBar';
import HomePage from './components/HomePage';



export default function App() {
  return (
    <React.Fragment>
      <Navigation/>
      <HomePage/>
    </React.Fragment>
  )
}
