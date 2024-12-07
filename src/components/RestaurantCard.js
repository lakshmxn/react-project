
const RestaurantCard = (props) =>{
    const data = props.data;
    return (
        <div className="Restaurant-card">
            <img className="dish_image" src={'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/'+data.info.cloudinaryImageId}
            alt="biriyani image"
            />
            <div>{data.info.name} {data.info.totalRatingsString} {data.info.avgRating}</div>
        </div>
    )
}

export default RestaurantCard;