import React, { useState } from 'react';
import './App.css';
import list from './list.js';
import data from './data.js';

function App() {
    const [fruits, setFruits] = useState(data);

    <main>
        <section className='container'>
            <list />
        </section>
    </main>
}

export default App;
