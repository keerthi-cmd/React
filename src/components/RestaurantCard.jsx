import React from 'react';

const RestaurantCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { resData } = props;
    // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        //deliveryTime,
      } = resData?.data;
    console.log(props);
    return (
      <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x4uyxvihmg8qa3pddkgf"
          alt="res-logo"
          className="res-logo"
        />
        <h3>{name}</h3>
         <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      </div>
    );
  };

  export default RestaurantCard;