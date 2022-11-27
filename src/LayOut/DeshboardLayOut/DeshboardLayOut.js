import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Header from '../../Pages/Share/Header/Header';

const DeshboardLayOut = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
                <input id="deshboard" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="deshboard" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                        <li><Link to='/deshboard'>My Orders</Link></li>
                        <li><Link to="/deshboard">Sidebar Item 2</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshboardLayOut;