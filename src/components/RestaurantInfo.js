import React from "react";
import { CiDiscount1 } from "react-icons/ci";


const RestaurantInfo = ({ costForTwoMessage, descriptionList }) => (
    <div className="flex justify-around w-3/5 border-b-2 py-4">
        <div className="flex items-center">
            <p className="text-base font-bold">{costForTwoMessage}</p>
        </div>
        <div className="flex items-center">
            {descriptionList.map((description) => (
                <div className="flex  items-center border p-2 w-60 text-sm m-2" key={description?.meta}>
                    <CiDiscount1 style={{ color: "brown", fontSize: "40px" }} />{" "}
                    <p className="px-2 text-base font-medium text-gray-500">{description?.meta}</p>
                </div>
            ))}
        </div>
    </div>
);

export default RestaurantInfo