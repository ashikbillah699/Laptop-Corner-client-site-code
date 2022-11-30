import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hookes/useAdmin';
import useTitle from '../../hookes/useTitle';
import Header from '../../Pages/Share/Header/Header';

const DeshboardLayOut = () => {
    const { user } = useContext(AuthContext)
    const [isAdmin] = useAdmin(user?.email)
    useTitle('Deshboard')
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
                    <ul className="menu p-4 w-80 text-base-content">
                        <li className='mb-4'><Link to='/deshboard'>My Orders</Link></li>
                        {
                            isAdmin && <>
                                <li className='mb-4'><Link to="/deshboard/allusers">All Users</Link></li>
                            </>
                        }
                        <li className='mb-4'><Link to='/deshboard/addproduct'>Add Product</Link></li>

                    </ul>

                </div>
            </div>
        </div>
    );
};

export default DeshboardLayOut;