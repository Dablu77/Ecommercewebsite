import React from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"

function Login() {
    return <div className='login'>
        <Link to="/">
            <img className='login_logo'
                src='logo193.png' alt='' />
        </Link>
        <div className='login_container'>
            <h1>Sign-in-Online Quick Shop</h1>
            <form>
                <h5>E-mail</h5>
                <input type='email' placeholder='Enter email address' />
                <h5>Password</h5>
                <input type='password' placeholder='Password' />
                <button className='login_singInButton'>Sign In</button>
            </form>
            <p>must take a look at our handpicked selection of high-quality kitchen products.

                Stationery & Office Supplies: If you are looking for inexpensive stationery items</p>

            <h6>By continuing, you agree to Online Quick Shop
                <Link> Terms & Conditions </Link>
                and
                <Link> Privacy Policy </Link></h6>
        </div>
    </div>;
}

export default Login;
