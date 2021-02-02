import React from 'react';

import './App.css';
import Header from './features/Header';
import SideBar from './features/SideBar';

function App() {
    return (
        <div className="app">
            <Header />
            <SideBar />
        </div>
    );
}

export default App;
