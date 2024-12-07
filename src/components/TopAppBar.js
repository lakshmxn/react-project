import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '/public/static/img/logo_black_bg.jpeg';

const TopAppBar = () =>{
    const [buttonState,setButtonState] = useState('login');
    console.log('initially a',a);
    var a = 10;

    useEffect(()=>{
        console.log('render useeffet')
    },[]);

    console.log('rerender');
    a = 20;
    console.log('later a',a);

    return (
        <div className="top-app-bar">
            <Link to='/'><img src={logo} alt="Logo" className="logo"/></Link>
            <div className="nav-bar">
                <ul>
                    <li>Profile</li>
                    <li>Cart</li>
                    <li><Link to='/about'>About</Link></li>
                    <button onClick={()=>{
                        if(buttonState == 'logout')
                        {
                            setButtonState('login');
                        }
                        else{
                                setButtonState('logout');
                        }
                    }}>
                        {buttonState}
                    </button>
                </ul>
            </div>
        </div>
    )
}

export default TopAppBar;