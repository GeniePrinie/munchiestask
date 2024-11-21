import React from "react";
import { PriceRange } from "../../types";

interface PriceRangeProps {
  priceRange: PriceRange;
  isActive: boolean;
  onToggle: (timeRange: PriceRange) => void;
}

const PriceRangeFilter: React.FC<PriceRangeProps> = ({
  priceRange,
  isActive,
  onToggle,
}) => {
  return (
    <button
      onClick={() => onToggle(priceRange)}
      className={`
        w-fit 
        px-3 pb-1 
        rounded-lg 
        transition-all duration-200 ease-in-out
        hover:shadow-md
      ${
        isActive
          ? "bg-blue-50 border border-blue-500 text-blue-700"
          : "bg-white border border-gray-100 text-gray-700 hover:bg-gray-50"
      }
    `}
    >
      <span className="text-xs whitespace-nowrap">{priceRange.name}</span>
    </button>
  );
};

export default PriceRangeFilter;
