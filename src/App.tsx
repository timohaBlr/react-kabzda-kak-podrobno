import React, {useState} from 'react';
import './App.css';
import OnOf from "./Components/OnOf/OnOf";
import {HashRouter, Route, Routes} from "react-router-dom";
import Navigation from "./Components/Navigation/Navigation";
import {Accordion} from "./Components/Accordion/Accordion";
import {Select} from "./Components/Select/Select";

export type ItemType = {
    id: number,
    value: string
}

function App() {
    const [collapsed, setCollapsed] = useState<boolean>(true);
    const [activeId, setActiveId] = useState<number>(0);
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
                <Select
                    options={items}
                    activeId={activeId}
                    callBack={setActiveId}/>
            </div>
        </HashRouter>
    );
}

export default App;
