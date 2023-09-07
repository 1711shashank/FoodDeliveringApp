import React from "react";
import { IMG_CDN_URL } from "../constants";
import { FaRupeeSign } from "react-icons/fa";


const RestaurantItem = ({ info, cartItems, handleAddItem, handleRemoveItem }) => {
    const price = String(info?.price);
    const slicedPrice = (price / 100).toFixed(2);

    return (
        <div className="flex items-center justify-between my-2 border-b-2 py-4" key={info?.id}>
            <div className="">
                <p className="text-medium font-semibold">{info?.name}</p>
                <p className="flex items-center text-medium">
                    <FaRupeeSign />
                    {slicedPrice}
                </p>
                <p className="my-2 text-gray-400 w-[55%] ">{info?.description}</p>
            </div>
            <div className="flex flex-col items-center">
                <img className="h-24 rounded-xl" src={IMG_CDN_URL + info?.imageId} />

                {cartItems.filter((f) => f.id === info.id).length === 0 ? (
                    <button
                        className="px-2 mt-2 bg-white text-sm text-green-600 font-bold border border-gray-500"
                        onClick={() => {
                            handleAddItem(info);
                        }}
                    >
                        ADD
                    </button>
                ) : (
                    <div className="flex items-center mt-2  bg-white text-green-600 font-bold border border-gray-500">
                        <button
                            className="mx-2 text-lg"
                            onClick={() => {
                                handleRemoveItem(info);
                            }}
                        >
                            -
                        </button>
                        <div>{cartItems.filter((f) => f.id === info.id).length}</div>
                        <button
                            className="mx-2 text-lg"
                            onClick={() => {
                                handleAddItem(info);
                            }}
                        >
                            +
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};



export default RestaurantItem;