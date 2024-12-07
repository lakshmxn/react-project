import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { resListData } from "../../utils/mockData";
const CardContainer = () =>{

    const [resList,setResList] = useState([]);

    useEffect(() => {
        fetchRestaurantList();
    },[]);

    fetchRestaurantList = async function(){
        let resPayload = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.1067448&lng=80.0969511');
        let resData = await resPayload.json();
        resData = resData.data.cards;
        resData = resData.filter( card => card.card.card['id'] == 'restaurant_grid_listing');
        setResList(resData[0].card.card.gridElements.infoWithStyle.restaurants);
    }

    return (
        <div className="card-container">
            {
                resList.map((restaurant) => <RestaurantCard key={restaurant.id} data={restaurant}/>)
            }
        </div>
    )
}

export default CardContainer;