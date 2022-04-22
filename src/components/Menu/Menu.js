import React from 'react';
import "./Menu.css"

const Menu = (props) => {
    let {count} = props;
    return (
        <div >
           <div className="row mb-5 fixed-top bg-success p-3">
                <div className="col-md-2 font-weight-bold">
                    <a className='text-decoration-none fw-bold text-white' href="">LoGo</a>
                </div>

                <div className="col-md-10">
                    <div className="list text-white fw-bold">
                    <li>Home</li>
                    <li>Cart <sup>{count}</sup> </li>
                    <li>About</li>
                    <li>Sign In</li>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Menu;