import React, { useState } from 'react';
import './App.css';
import List from './list.js';
import data from './data.js';

function App() {
    const [fruits, setFruits] = useState(data);

    return <main>
        <section className='container'>
            <h3>{fruits.length} kinds of fruit</h3>
            <List fruits={fruits} />
            <button onClick={() => setFruits([])}>Clear all</button>
            <button onClick={() => setFruits(data)}>Recover all</button>
        </section>
    </main>
}

export default App;
