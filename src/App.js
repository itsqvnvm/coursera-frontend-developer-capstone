// src/App.js
import React from 'react';
import BookingForm from './BookingForm';
import './App.css'; // You can add your styles here

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Little Lemon</h1>
        <BookingForm />
      </header>
    </div>
  );
}

export default App;

