import React, { useEffect, useState } from "react";
import SearchCity from "./SearchCity";
import { Link } from "react-router-dom";
import { IoMdHelpBuoy } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";
import { BsFillInfoSquareFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setLatitude, setLongitude } from "../utils/coordsSlice";

const Title = () => (
    <div className="flex items-center">
        <img className="h-12  ml-10" alt="logo" src="https://seeklogo.com/images/S/swiggy-logo-8EF8260FA4-seeklogo.com.png" />
        <Link to="/">
            <h2 className="text-xl font-bold mx-2 text-orange-600"> Swiggy Clone </h2>
        </Link>
    </div>
);

const Header = () => {

    const dispatch = useDispatch();
    const [city, setCity] = useState("");

    const cartItems = useSelector((store) => store.cart.items);
    const { latitude, longitude, searchedCity } = useSelector((store) => store.coords);

    const searchRestaurants = () => {
        dispatch(fetchCoords(city));
        setCity("");
    };

    const getCurrCoords = () => {
        if ("geolocation" in navigator && latitude == null && longitude == null) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    dispatch(setLatitude(position.coords.latitude));
                    dispatch(setLongitude(position.coords.longitude));
                },
                (error) => {
                    console.log("Error", error);
                }
            );
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    };

    useEffect(() => {
        getCurrCoords();
    }, []);

    return (
        <div className="flex items-center justify-between border py-2">

            <div className="flex items-center">
                <Title />
                <SearchCity
                    searchRestaurants={searchRestaurants}
                    setCity={setCity}
                    city={city}
                />
            </div>

            <div className="mx-6">
                <ul className="flex">
                    <Link to="/about">
                        <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
                            <BsFillInfoSquareFill style={{ fontSize: "1rem", marginRight: "8px" }} />
                            About
                        </li>
                    </Link>
                    <Link to="/cart">
                        <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
                            <BsFillCartFill style={{ fontSize: "1.5rem", marginRight: "8px" }} />
                            Cart
                            <div className="ml-2.5 mb-1  text-xs text-white absolute font-semibold  ">
                                {cartItems.length === 0 ? "" : cartItems.length}
                            </div>
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    );
};

export default Header;
