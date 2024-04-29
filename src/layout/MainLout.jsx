import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from 'react-router-dom';

const MainLout = () => {
    return (
        <div>
            <div>
                <Nav/>
            </div>
            {/* packet */}
            <Outlet/>
        </div>
    );
};

export default MainLout;