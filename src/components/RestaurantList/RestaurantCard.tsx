import React, { useEffect, useState } from "react";
import { Restaurant } from "../../types";
import { getRestaurantOpenStatus } from "../../api/services";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({ restaurant }) => {
  const [isOpen, setIsOpen] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchOpenStatus = async () => {
      const status = await getRestaurantOpenStatus(restaurant.id);
      setIsOpen(status?.is_open);
    };

    fetchOpenStatus();
  }, [restaurant.id]);

  return (
    <div className="relative w-[340px]">
      <div
        className="mx-1.5 -mb-1 p-4 border rounded-lg hover:shadow-md w-auto 
        transition-shadow relative overflow-hidden bg-white h-[200px]"
      >
        {!isOpen && (
          <>
            <div className="absolute inset-0 bg-white opacity-80 z-10" />
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="px-3 py-1 border border-gray-200 rounded-lg bg-gray-50">
                <p className="text-gray-900">Opens tomorrow at 12 PM</p>
              </div>
            </div>
          </>
        )}
        <img
          src={restaurant.image_url}
          alt={restaurant.name}
          className="absolute -top-2 -right-6 w-28 h-20 object-cover rounded-md"
        />

        <div className="flex flex-col justify-between h-full pr-24">
          <div className="flex gap-2 relative z-20">
            <div
              className="
              border rounded-full px-3 py-1 inline-flex items-center gap-2 text-gray-900 border-gray-200 "
            >
              <span
                className={`
                w-2 h-2 rounded-full
                ${isOpen ? "bg-green-800" : "bg-gray-900"}
              `}
              />
              {isOpen ? "Open" : "Closed"}
            </div>
            {isOpen && (
              <p className="border rounded-full px-3 py-1 inline-block">
                {restaurant.delivery_time_minutes} min
              </p>
            )}
          </div>

          <div>
            <h3 className="text-2xl">{restaurant.name}</h3>
          </div>
        </div>
        <button
          className="
            absolute 
            bottom-4 
            right-4 
            z-20
            bg-green-800 
            hover:bg-green-700 
            text-white 
            rounded-full 
            w-8 
            h-8 
            flex 
            items-center 
            justify-center 
            transition-colors
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
