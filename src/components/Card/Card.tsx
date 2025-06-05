import type { NearEarthObject } from "../../types/feed";
import { useNavigate } from "react-router-dom";

/**
 * Card component to display a summary of a Near Earth Object (NEO) from NASA's data.
 *
 * @component
 * @param {NearEarthObject} item - The NEO data to display, including name, id, magnitude, diameter, and hazard status.
 *
 * @example
 * <Card item={neo} />
 *
 * Clicking the card navigates to `/asteroid/{id}` with more details.
 */
function Card({ item }: Readonly<{ item: NearEarthObject }>) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/asteroid/${item.id}`)}
      className="border rounded-md p-4 mb-4 shadow hover:border-sky-700 transition-all duration-200"
    >
      <div className="text-lg font-semibold mb-2">{item.name}</div>

      <div className="text-sm mb-1">
        <span className="font-medium">ID:</span> {item.id}
      </div>

      <div className="text-sm mb-1">
        <span className="font-medium">Magnitude (H):</span>{" "}
        {item.absolute_magnitude_h}
      </div>

      <div className="text-sm mb-1">
        <span className="font-medium">Diameter (m):</span>{" "}
        {item.estimated_diameter.meters.estimated_diameter_min.toFixed(1)} –{" "}
        {item.estimated_diameter.meters.estimated_diameter_max.toFixed(1)}
      </div>

      <div className="text-sm mb-1">
        <span className="font-medium">Potentially Hazardous:</span>{" "}
        <span
          className={
            item.is_potentially_hazardous_asteroid
              ? "text-red-600 font-bold"
              : "text-green-600"
          }
        >
          {item.is_potentially_hazardous_asteroid ? "Yes 🚨" : "No"}
        </span>
      </div>
    </div>
  );
}

export default Card;
