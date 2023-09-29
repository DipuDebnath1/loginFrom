import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Auth</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                     <li><NavLink to={'/'}>Home </NavLink> </li>
                     <li><NavLink to={'/login'}>Login </NavLink> </li>
                     <li><NavLink to={'/register'}>Register </NavLink> </li>
                     <li><NavLink to={'/heroregister'}>Hero Register </NavLink> </li>
                </ul>
            </div>
            </div>
        </div>
    );
};

export default Navbar;