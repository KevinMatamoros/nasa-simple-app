import { useState, useEffect, useMemo, type ReactNode, useRef } from "react";
import DataContext from "./DataContext";
import { fetchItems } from "./fetchData";
import type { NearEarthObject } from "../../types/feed";


/**
 * DataProvider is a React context provider that fetches and stores a list of Near Earth Objects (NEOs)
 * from NASA's API. It exposes the list, a loading state, and a utility to find an item by its ID.
 *
 * This provider ensures that data is only fetched once using a `hasFetched` ref flag.
 * The fetched data is passed down via the `DataContext`.
 *
 * @component
 * @param {ReactNode} children - React children elements that will have access to the context.
 *
 * @returns A provider component wrapping any child components needing NEO data.
 *
 * @example
 * <DataProvider>
 *   <ItemPage />
 * </DataProvider>
 */
export function DataProvider({ children }: Readonly<{ children: ReactNode }>) {
  const [items, setItems] = useState<NearEarthObject[]>([]);
  const [loading, setLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    fetchItems()
      .then(setItems)
      .finally(() => setLoading(false));
  }, []);

  const getItemById = (id: string): NearEarthObject | null =>
    items.find((item) => item.id === id) || null;

  const value = useMemo(
    () => ({
      items,
      loading,
      getItemById,
    }),
    [items, loading]
  );

  return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
}
