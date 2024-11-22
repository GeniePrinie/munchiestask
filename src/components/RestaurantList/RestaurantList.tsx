import React, { useEffect, useState } from "react";
import { getRestaurants } from "../../api/services";
import { DELIVERY_TIME_RANGES, Restaurant } from "../../types";
import RestaurantCard from "./RestaurantCard";

interface RestaurantListProps {
  activeFilters: string[];
  activeDeliveryTimes: string[];
  activePriceRanges: string[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({
  activeFilters,
  activeDeliveryTimes,
  activePriceRanges,
}) => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const data = await getRestaurants();
        const restaurantArray = Array.isArray(data) ? data : [];
        setRestaurants(restaurantArray);
      } catch (error) {
        setError("Failed to fetch restaurants");
      } finally {
        setIsLoading(false);
      }
    };

    fetchRestaurants();
  }, []);

  const filteredRestaurants = restaurants.filter((restaurant) => {
    const passesFilterCheck =
      activeFilters.length === 0 ||
      restaurant.filter_ids.some((id) => activeFilters.includes(id));

    const passesDeliveryTimeCheck =
      activeDeliveryTimes.length === 0 ||
      activeDeliveryTimes.some((timeRangeId) => {
        const range = DELIVERY_TIME_RANGES.find((r) => r.id === timeRangeId);
        if (!range) return false;

        return (
          restaurant.delivery_time_minutes >= range.min &&
          (range.max === null || restaurant.delivery_time_minutes <= range.max)
        );
      });

    const passesPriceRangeCheck =
      activePriceRanges.length === 0 ||
      activePriceRanges.includes(restaurant.price_range_id);

    return (
      passesFilterCheck && passesDeliveryTimeCheck && passesPriceRangeCheck
    );
  });

  if (isLoading) {
    return <div className="text-center p-4">Loading restaurants...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

  const restaurantArray = Array.isArray(filteredRestaurants)
    ? filteredRestaurants
    : [];

  return (
    <div className="mx-auto p-4">
      <h2 className="text-2xl md:text-4xl mb-6 mx-1.5">Restaurant's</h2>
      <div className="flex flex-col gap-4 md:flex-row md:flex-wrap">
        {restaurantArray.length > 0 ? (
          restaurantArray.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))
        ) : (
          <div className="text-center text-gray-500 p-4">
            {activeFilters.length > 0
              ? "No restaurants found with selected filters"
              : "No restaurants available"}
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantList;
