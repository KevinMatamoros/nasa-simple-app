import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import DataContext from "../../context/data/DataContext";

function DetailsPage() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const context = useContext(DataContext);

  if (!context) {
    return <p className="p-8 text-red-600">DataContext is not available</p>;
  }

  const { getItemById } = context;
  const item = id ? getItemById(id) : null;

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className=" p-4 rounded shadow md:max-w-2xl">
        <button
          onClick={() => navigate("/")}
          className="mb-4 px-4 py-2 bg-gray-200 text-sm rounded hover:bg-gray-300 transition"
        >
          &lt; Back
        </button>
        {item ? (
          <>
            <h2 className="text-2xl font-bold pb-4">
              Asteroid Details – {item.name}
            </h2>

            <img
              src="/asteroid.jpg"
              alt={item.name}
              className="w-full h-48 object-cover rounded mb-4"
            />

            <div className="mb-4">
              <span className="font-semibold">Absolute Magnitude (H):</span>{" "}
              {item.absolute_magnitude_h}
            </div>

            <div className="mb-2">
              <span className="font-semibold">Estimated Diameter:</span>
              <ul className="pl-6 py-4 list-disc">
                <li className="pb-2">
                  <strong>Kilometers:</strong>{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_min.toFixed(
                    2
                  )}{" "}
                  –{" "}
                  {item.estimated_diameter.kilometers.estimated_diameter_max.toFixed(
                    2
                  )}{" "}
                  km
                </li>
                <li>
                  <strong>Meters:</strong>{" "}
                  {item.estimated_diameter.meters.estimated_diameter_min.toFixed(
                    2
                  )}{" "}
                  –{" "}
                  {item.estimated_diameter.meters.estimated_diameter_max.toFixed(
                    2
                  )}{" "}
                  m
                </li>
              </ul>
            </div>

            <div className="mb-2">
              <span className="font-semibold">Potentially Hazardous:</span>{" "}
              <span
                className={
                  item.is_potentially_hazardous_asteroid
                    ? "text-red-600 font-bold"
                    : "text-green-700 font-semibold"
                }
              >
                {item.is_potentially_hazardous_asteroid ? "Yes 🚨" : "No"}
              </span>
            </div>
          </>
        ) : (
          <h4 className="text-blue-600/75 dark:text-sky-400/75 pt-4">
            Loading ...
          </h4>
        )}
      </div>
    </div>
  );
}
export default DetailsPage;
