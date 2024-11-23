import React from "react";
import ReactDOM from "react-dom/client";
import logo from '/public/static/img/logo_black_bg.jpeg';


const TopAppBar = () =>{
    return (
        <div className="top-app-bar">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="nav-bar">
                <ul>
                    <li>Profile</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}
const Search = () =>{
    return (
        <input/>
    )
}
const RestaurantCard = () =>{
    return (
        <div className="Restaurant-card">
            <img className="dish_image" src="https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/da2592e0d25f079cbf9aedf436cabf6f"
            alt="biriyani image"
            />
            <div>Biriyanni (500+) 4/5</div>
        </div>
    )
}
const CardContainer = () =>{
    return (
        <div className="card-container">
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
            <RestaurantCard/>
        </div>
    )
}

const Container = () =>{
    return (
        <div>
            <Search/>
            <CardContainer/>
        </div>
    )
}

const Footer = () =>{
    return (
        <div className="footer">c</div>
    )
}

const App = () => {
    return (
        <div className="app">
            <TopAppBar/>
            <Container/>
            <Footer/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);