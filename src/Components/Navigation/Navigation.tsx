import React from 'react';

import {NavLink} from "react-router-dom";

export const Navigation = () => {

    return (
        <div>
            <NavLink to={'/onof'}>OnOF</NavLink>
            <NavLink to={'/accordion'}>Accordion</NavLink>
        </div>
    );
};

export default Navigation;