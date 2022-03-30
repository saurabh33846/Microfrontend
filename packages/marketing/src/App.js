import React from "react";

import {Switch, Route, BrowserRouter} from 'react-router-dom'

import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from './components/Landing';
import Pricing from './components/Pricing';
//test commit

const generateClassNames = createGenerateClassName({
    productionPrefix:'ma'
})

export default()=>{
    return <div>
        <StylesProvider generateClassName={generateClassNames}>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/pricing'>
                        <Pricing/>
                    </Route>
                    <Route path='/'>
                        <Landing/>
                    </Route>
                </Switch>
            </BrowserRouter>
        </StylesProvider>
    </div>
}