import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderImg1 from '../../../assest/HeaderImg/Headerimg2.jpg'
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Header = () => {
    const navigate = useNavigate();
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const mennuItem = <React.Fragment>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''>Category</Link></li>
        <li><Link to='/Blog'>Blog</Link></li>
        {user?.uid &&
            <li><Link to='/deshboard'>Deshboard</Link></li>
        }
        <li><Link to='/review'>Review</Link></li>
    </React.Fragment>
    return (
        <div className="navbar bg-base-100 py-5 container mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {mennuItem}
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-3xl"><div className="avatar">
                    <div className="w-12 rounded-full">
                        <img alt='' src={HeaderImg1} />
                    </div>
                </div>Laptop Corner</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {mennuItem}
                </ul>
            </div>
            <div className="navbar-end gap-2">
                {user?.uid ?
                    <Link to='/signout' onClick={handleLogOut} className="btn btn-sm">Sign Out</Link>
                    :
                    <>
                        <Link to='/Login' className="btn btn-sm">Login</Link>
                        <Link to='/signup' className="btn btn-sm">Sign Up</Link>
                    </>
                }
                <label htmlFor="deshboard" tabIndex={0} className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;