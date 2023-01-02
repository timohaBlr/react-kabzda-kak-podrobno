import React, {useState} from 'react';
import './App.css';
import OnOf from "./Components/OnOf/OnOf";
import {HashRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import {Accordion} from "./Components/Accordion/Accordion";
import SelectContainer from "./Components/Select/SelectContainer";

export type ItemType = {
    id: number,
    value: string
}

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const items = [
        {id: 1, value: 'Minsk'},
        {id: 2, value: 'London'},
        {id: 3, value: 'Moscow'},
        {id: 4, value: 'Kiev'},
    ]
    return (
        <HashRouter>
            <div className="App">
                <Navigation/>
                <Routes>
                    <Route path={'/onof'}
                           element={<OnOf/>}
                    />
                    <Route path={'/accordion'}
                           element={
                               <Accordion
                                   collapsed={collapsed}
                                   setCollapsed={setCollapsed}
                                   title={'Menu'}
                                   items={items}
                               />}
                    />
                </Routes>
                <SelectContainer/>
            </div>
        </HashRouter>
    );
}

export default App;
