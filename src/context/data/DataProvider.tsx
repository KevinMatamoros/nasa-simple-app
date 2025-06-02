import { useState, useEffect, useMemo, type ReactNode, useRef } from "react";
import DataContext from "./DataContext";
import { fetchItems } from "./fetchData";
import type { NearEarthObject } from "../../types/feed";

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
