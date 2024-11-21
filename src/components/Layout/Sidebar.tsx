import React from "react";
import {
  DELIVERY_TIME_RANGES,
  DeliveryTimeRange,
  Filter,
  PRICE_RANGES,
  PriceRange,
} from "../../types";
import FoodCategory from "../Filters/FoodCategory";
import DeliveryTime from "../Filters/DeliveryTime";
import PriceRangeFilter from "../Filters/PriceRange";

interface SidebarProps {
  filters: Filter[];
  activeFilters: string[];
  activeDeliveryTimes: string[];
  activePriceRanges: string[];
  onToggle: (filter: Filter) => void;
  onDeliveryTimeToggle: (timeRange: DeliveryTimeRange) => void;
  onPriceRangeToggle: (priceRange: PriceRange) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  filters,
  activeFilters,
  activeDeliveryTimes,
  activePriceRanges,
  onToggle,
  onDeliveryTimeToggle,
  onPriceRangeToggle,
}) => {
  if (!Array.isArray(filters)) {
    return null;
  }
  return (
    <div className="bg-white border rounded-lg border-gray-200 shadow-sm overflow-y-auto p-4">
      <h3 className="text-xl">Filter</h3>

      <div className="flex flex-col  gap-4 pb-4">
        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Food category
        </h4>

        {filters.map((filter) => (
          <FoodCategory
            key={filter.id}
            filter={filter}
            isActive={activeFilters.includes(filter.id)}
            onToggle={onToggle}
          />
        ))}

        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Delivery time
        </h4>

        <div className="flex flex-row flex-wrap gap-2">
          {DELIVERY_TIME_RANGES.map((timeRange) => (
            <DeliveryTime
              key={timeRange.id}
              timeRange={timeRange}
              isActive={activeDeliveryTimes.includes(timeRange.id)}
              onToggle={onDeliveryTimeToggle}
            />
          ))}
        </div>

        <h4 className="text-gray-400 uppercase text-xs font-semibold pt-5">
          Price range
        </h4>

        <div className="flex flex-row gap-2">
          {PRICE_RANGES.map((priceRange) => (
            <PriceRangeFilter
              key={priceRange.id}
              priceRange={priceRange}
              isActive={activePriceRanges.includes(priceRange.id)}
              onToggle={onPriceRangeToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
