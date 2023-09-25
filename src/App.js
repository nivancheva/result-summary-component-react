import React from 'react';
import './App.css';
import SummaryItem from './SummaryItem';
import { useState } from 'react';
import dataJson from './data.json';

function App() {
  const [summaryItems] = useState(dataJson);
  
  return (
    <main>
      <div className='result-summary'>
        <div className='results'>
          <h1>Your result</h1>
          <p><span>76</span> of 100</p>
          <div>
            <p>Great</p>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>

        <div className='summary'>
          <h2>Summary</h2>
          {summaryItems.map((summaryItem, idx) => {
             return (
              <SummaryItem key={idx} {...summaryItem}/>
             )
          })}
          
          <button>Continue</button>
        </div>
      </div>
    </main>
  );
}

export default App;
