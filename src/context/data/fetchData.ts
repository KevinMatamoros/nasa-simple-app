import axios from "axios";
import type { NearEarthObject } from "../../types/feed";

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

export async function fetchItems() {
  try {
    const end = new Date();
    const start = new Date();

    const response = await axios.get("https://api.nasa.gov/neo/rest/v1/feed", {
      params: {
        start_date: formatDate(start),
        end_date: formatDate(end),
        api_key: NASA_API_KEY,
      },
    });

    const data = response.data;
    const dates = Object.keys(data.near_earth_objects);
    return dates.flatMap((date) =>
      data.near_earth_objects[date].map((element: NearEarthObject) => ({
        ...element,
      }))
    );
  } catch (error) {
    console.error("Error fetching items from NASA API:", error);
    return [];
  }
}
