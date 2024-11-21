export interface Restaurant {
  id: string;
  name: string;
  rating: number;
  filter_ids: string[];
  image_url: string;
  delivery_time_minutes: number;
  price_range_id: string;
}

export interface RestaurantResponse {
  restaurants: Restaurant[];
}

export interface Filter {
  id: string;
  name: string;
  image_url: string;
}

export interface FilterResponse {
  filters: Filter[];
}

export interface DeliveryTimeRange {
  id: string;
  name: string;
  min: number;
  max: number | null;
}

export const DELIVERY_TIME_RANGES: DeliveryTimeRange[] = [
  { id: "dt-1", name: "0-10 min", min: 0, max: 10 },
  { id: "dt-2", name: "10-30 min", min: 10, max: 30 },
  { id: "dt-3", name: "30-60 min", min: 30, max: 60 },
  { id: "dt-4", name: "1 hour+", min: 60, max: null },
];

export interface PriceRange {
  id: string;
  name: string;
}

export const PRICE_RANGES: PriceRange[] = [
  { id: "93a626e5-5017-416b-9505-7411d22f7b38", name: "$" },
  { id: "d09ff4c9-e90e-42c7-b78b-bdc65e3331ce", name: "$$" },
  { id: "ff6b5391-2f0d-4b39-8ba8-d415c52a425d", name: "$$$" },
  { id: "f24fc0fb-a339-4240-a223-1365ec1aee07", name: "$$$$" },
];
