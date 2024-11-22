import React, { useEffect, useState } from "react";
import Topbar from "../components/Layout/Topbar";
import RestaurantList from "../components/RestaurantList/RestaurantList";
import Sidebar from "../components/Layout/Sidebar";
import { DeliveryTimeRange, Filter, PriceRange } from "../types";
import { getFilters } from "../api/services";

const MainPage: React.FC = () => {
  const [filters, setFilters] = useState<Filter[]>([]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [activeDeliveryTimes, setActiveDeliveryTimes] = useState<string[]>([]);
  const [activePriceRanges, setActivePriceRanges] = useState<string[]>([]);
  useEffect(() => {
    const fetchFilters = async () => {
      try {
        const filtersData = await getFilters();
        setFilters(filtersData);
      } catch (error) {
        console.error("App: Error fetching filters:", error);
      }
    };

    fetchFilters();
  }, []);

  const handleFilterToggle = (filter: Filter) => {
    setActiveFilters((prev) =>
      prev.includes(filter.id)
        ? prev.filter((id) => id !== filter.id)
        : [...prev, filter.id]
    );
  };

  const handleDeliveryTimeToggle = (timeRange: DeliveryTimeRange) => {
    setActiveDeliveryTimes((prev) =>
      prev.includes(timeRange.id)
        ? prev.filter((id) => id !== timeRange.id)
        : [...prev, timeRange.id]
    );
  };

  const handlePriceRangeToggle = (priceRange: PriceRange) => {
    setActivePriceRanges((prev) =>
      prev.includes(priceRange.id)
        ? prev.filter((id) => id !== priceRange.id)
        : [...prev, priceRange.id]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="flex items-center gap-2 py-6 px-7">
        <div className="w-7">
          <img src="/images/logo/munchiesLogo.png" alt="munchies logo" />
        </div>
        <h1 className="text-4xl">Munchies</h1>
      </header>

      {/* <div className="min-h-screen bg-gray-50 flex"> */}
      {/* <div className="w-64 absolute left-8 top-20 h-screen"> */}
      <Sidebar
        filters={filters}
        activeFilters={activeFilters}
        activeDeliveryTimes={activeDeliveryTimes}
        activePriceRanges={activePriceRanges}
        onToggle={handleFilterToggle}
        onDeliveryTimeToggle={handleDeliveryTimeToggle}
        onPriceRangeToggle={handlePriceRangeToggle}
      />
      {/* </div> */}

      {/* <div className="flex-1 ml-64"> */}
      <Topbar
        filters={filters}
        activeFilters={activeFilters}
        onToggle={handleFilterToggle}
      />

      {/* <main className="px-4 sm:px-6 lg:px-8 py-4"> */}
      <RestaurantList
        activeFilters={activeFilters}
        activeDeliveryTimes={activeDeliveryTimes}
        activePriceRanges={activePriceRanges}
      />
      {/* </main> */}
    </div>
    // </div>
    // </div>
  );
};

export default MainPage;
