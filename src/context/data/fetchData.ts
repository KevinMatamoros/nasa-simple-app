import axios from "axios";
import type { NearEarthObject } from "../../types/feed";

const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;

/**
 * Formats a `Date` object to the format required by the NASA API (`yyyy-mm-dd`).
 *
 * @param {Date} date - The date to format.
 * @returns {string} A string representing the formatted date.
 *
 * @example
 * formatDate(new Date()) // "2025-06-04"
 */
function formatDate(date: Date): string {
  return date.toISOString().split("T")[0];
}

/**
 * Fetches Near Earth Objects (NEOs) from NASA's NeoWs API for the current day.
 *
 * This function calls the `/feed` endpoint of the NASA API using today's date as both
 * the `start_date` and `end_date`. It returns a flat array of `NearEarthObject` entries
 * grouped by date.
 *
 * If an error occurs (e.g. invalid API key or network failure), it logs the error and returns an empty array.
 *
 * @async
 * @function
 * @returns {Promise<NearEarthObject[]>} A promise resolving to an array of NEO objects.
 *
 * @example
 * const items = await fetchItems();
 */
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
