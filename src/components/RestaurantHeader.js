import React from "react";
import { IMG_CDN_URL } from "../constants";
import { AiFillInfoCircle, AiFillStar } from "react-icons/ai";



const RestaurantHeader = ({ name, cuisines, areaName, city, cloudinaryImageId, avgRatingString, totalRatingsString, feeDetails }) => (
    <div className="flex items-center justify-around h-40 w-3/5 border-b-2">
        <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <div className="pt-2 pb-4">
                <p>{cuisines?.join(" , ")}</p>
                <p className="">
                    {areaName} , {city}
                </p>
            </div>
            <div className="flex items-center">
                <AiFillInfoCircle style={{ color: "orange" }} />
                <p className="pl-2"> {feeDetails?.message}</p>
            </div>
        </div>
        <div>
            <img className="h-24" alt="restaurant-img" src={IMG_CDN_URL + cloudinaryImageId} />
            <div className="flex items-center">
                <div className="flex items-center pr-2 text-green-700 font-bold">
                    <AiFillStar />
                    <p>{avgRatingString}</p>
                </div>
                <p className="font-semibold text-gray-600"> | {totalRatingsString}</p>
            </div>
        </div>
    </div>
);


export default RestaurantHeader;