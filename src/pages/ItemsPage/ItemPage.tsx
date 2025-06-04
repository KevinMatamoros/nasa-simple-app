import { useContext } from "react";
import DataContext from "../../context/data/DataContext";
import Card from "../../components/Card/Card";

function ItemPage() {
  const context = useContext(DataContext);
  if (!context) throw new Error("ItemList should have to be inside of DataProvider");

  const { items, loading } = context;

  return (
    <div className="w-screen h-screen flex justify-center">
      <div className=" pt-4 px-4 rounded shadow md:max-w-2xl">
        <h1 className="text-xl font-bold pb-4">Asteroids - NeoWs</h1>
        <p className="pb-4">
          NeoWs (Near Earth Object Web Service). With NeoWs a user can: search for
          Asteroids based on their closest approach date to Earth, lookup a
          specific Asteroid.
        </p>
        <div className="max-h-[82%] overflow-scroll">
          {!loading ? (
            items.map((el) => <Card key={el.id} item={el} />)
          ) : (
            <h4 className="text-blue-600/75 dark:text-sky-400/75 pt-4">
              Loading ...
            </h4>
          )}
        </div>
      </div>
    </div>
  );
}
export default ItemPage;
