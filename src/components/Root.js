import React from 'react';
import  {BrowserRouter, Route} from 'react-router-dom';
import List from './List';
import Detail from './Detail';
import About from './About';

const Root = () => (
    <BrowserRouter>
        <div>
            <Route exact path="/" component={List}></Route>
            <Route exact path="/:id" component={Detail}></Route>
            <Route exact path="/:About" component={About}></Route>
        </div>
    </BrowserRouter>
);

export default Root;