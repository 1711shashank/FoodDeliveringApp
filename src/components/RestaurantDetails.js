import React from "react";
import { useParams, Link } from "react-router-dom";
import RestaurantInfo from "./RestaurantInfo";
import { BsFillCartFill } from "react-icons/bs";
import RestaurantHeader from "./RestaurantHeader";
import useRestaurant from "../utils/useResraurant";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import RestaurantItem from './RestaurantItem';
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";


const RestaurantDetails = () => {
    const { resId } = useParams();
    const cartItems = useSelector((store) => store.cart.items);
    const { restaurantMenu, restaurantInfo } = useRestaurant(resId);
    const { name, areaName, avgRatingString, city, cuisines, cloudinaryImageId, feeDetails, aggregatedDiscountInfo, costForTwoMessage, totalRatingsString } = restaurantInfo;
    const descriptionList = aggregatedDiscountInfo?.descriptionList || [];

    const dispatch = useDispatch();
    const handleAddItem = (info) => dispatch(addItem(info));
    const handleRemoveItem = (info) => dispatch(removeItem(info));

    return Object.keys(restaurantInfo || restaurantMenu).length === 0
        ? <ShimmerRestaurantMenu />
        : <div className="flex flex-col items-center">
            <RestaurantHeader
                name={name}
                cuisines={cuisines}
                areaName={areaName}
                city={city}
                cloudinaryImageId={cloudinaryImageId}
                avgRatingString={avgRatingString}
                totalRatingsString={totalRatingsString}
                feeDetails={feeDetails}
            />
            <RestaurantInfo costForTwoMessage={costForTwoMessage} descriptionList={descriptionList} />

            {
                restaurantMenu?.map((item) => (
                    <div className="w-3/5 my-4 border-b-4" key={item?.card?.info?.id}>
                        <h2 className="text-xl font-bold">
                            {item?.card?.card?.title} {item?.card?.card?.itemCards?.length && <span>({item?.card?.card?.itemCards?.length})</span>}
                        </h2>
                        {
                            item?.card?.card?.itemCards?.map((list, index) => (
                                <RestaurantItem
                                    key={index}
                                    info={list?.card?.info}
                                    cartItems={cartItems}
                                    handleAddItem={handleAddItem}
                                    handleRemoveItem={handleRemoveItem}
                                />
                            ))}
                    </div>
                ))
            }
            {
                cartItems?.length > 0 && (
                    <div className="flex justify-between fixed bottom-9 right-3 mb-12 mr-10">
                        <span className="px-5 py-2 text-sm font-bold tracking-wide text-white rounded-full focus:outline-none"></span>
                        <Link to="/cart">
                            <button className="flex items-center px-4 py-2 text-sm font-bold tracking-wide text-white bg-orange-500 rounded-full">
                                <BsFillCartFill style={{ fontSize: "1.2rem", paddingRight: "5px" }} /> Cart - {''}
                                {cartItems.length}
                            </button>
                        </Link>
                    </div>
                )
            }
        </div>

};

export default RestaurantDetails;
