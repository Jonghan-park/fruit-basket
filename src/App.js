import React, { useState } from 'react';
import './App.css';
import list from './list.js';
import data from './data.js';

function App() {
    const [fruits, setFruits] = useState(data);

    return <main>
        <section className='container'>
            <h3>{fruits.length} kinds of fruit</h3>
            <list fruits={fruits} />
            <button onClick={() => setFruits([])}>Clear all</button>
        </section>
    </main>
}

export default App;
