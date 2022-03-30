import React from 'react';

import MarketingApp from './components/MarketingApp';
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom';
// Test commitee
export default ()=>{
    return <BrowserRouter>
        <div> 
            <Header/>
            <MarketingApp/>
        </div>
    </BrowserRouter>
    
}