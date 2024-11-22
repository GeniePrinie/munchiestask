import React from "react";
import { Filter } from "../../types";
import FilterItem from "../Filters/FilterItem";

interface TopbarProps {
  filters: Filter[];
  activeFilters: string[];
  onToggle: (filter: Filter) => void;
}

const Topbar: React.FC<TopbarProps> = ({
  filters,
  activeFilters,
  onToggle,
}) => {
  if (!Array.isArray(filters)) {
    return null;
  }
  return (
    <div className="bg-gray-50 px-6">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-3 py-4 md:py-6 w-max">
          {filters.map((filter) => (
            <FilterItem
              key={filter.id}
              filter={filter}
              isActive={activeFilters.includes(filter.id)}
              onToggle={onToggle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Topbar;
