import React from "react";
import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import resList from "../utils/mockData";

const Body = () => {
  //State Variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState();
  const [searchText, setSearchText] = useState("");
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
    console.log("useeffect called");
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

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
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
            console.log(listOfRestaurants);
          }}
        >
          Top rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
