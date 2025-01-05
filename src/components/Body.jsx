import React from "react";
import { useState, useEffect, useContext } from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const { loggedInUser, setUserName } = useContext(UserContext);
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "334475",
  //       name: "KFC",
  //       avgRating: "3.5",
  //       costForTwo: 40000,
  //       cuisine: "Burger",
  //     },
  //   },
  //   {
  //     type: "restaurant",
  //     data: {
  //       type: "F",
  //       id: "334476",
  //       name: "Meghana",
  //       avgRating: "4.2",
  //       costForTwo: 40000,
  //       cuisine: "Pizza",
  //     }
  //     },
  //     {
  //         type: "restaurant",
  //         data: {
  //           type: "F",
  //           id: "334477",
  //           name: "Dominos",
  //           avgRating: "4.2",
  //           costForTwo: 40000,
  //           cuisine: "Pizza",
  //         },
  //   }],);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch(
    //   "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    // )
    // const json = await data.json();
    setListOfRestaurants(resList);
    setFilteredRestaurant(resList);
  };

  // let listOfRestaurants = [

  // ];

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>looks you are offline</h1>;
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="search ">
          <input
            type="text"
            className="border border-solid border-black rounded-2xl"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4"
            onClick={() => {
              const filteredRestaurant = listOfRestaurants.filter((res) =>
                res.data.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.data.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <input
        type="text"
        className="border border-solid border-black rounded-2xl"
        value={loggedInUser}
        onChange = {(e) => setUserName(e.target.value)}
      />
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.data.id} to={"/restaurants/" + 425}>
            {restaurant.data.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
