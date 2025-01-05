import React from "react";

const RestaurantCard = (props) => {
  // eslint-disable-next-line react/prop-types
  const { resData } = props;
  // eslint-disable-next-line no-unsafe-optional-chaining, react/prop-types
  const {
    name,
    avgRating,
    cuisines,
    costForTwo,
    //deliveryTime,
  } = resData?.data;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-400">
      <img
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/x4uyxvihmg8qa3pddkgf"
        alt="res-logo"
        className="rounded-lg"
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

//Higher Order Component

export const withPromotedLabel = (RestaurantCard) => {
  // eslint-disable-next-line react/display-name
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
