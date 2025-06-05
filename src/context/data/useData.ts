import { useContext } from "react";
import DataContext from "./DataContext";


/**
 * `useData` is a custom React hook that provides access to the shared data context.
 *
 * This hook must be used within a `<DataProvider>` component; otherwise, it will throw an error.
 * It returns the full context value, which includes:
 * - `items`: the list of Near Earth Objects (NEOs)
 * - `loading`: the loading state
 * - `getItemById`: a helper function to retrieve a specific NEO by its ID
 *
 * @throws {Error} If used outside of a `<DataProvider>`, it throws an explicit error.
 *
 * @returns {DataContextType} The current value of the data context.
 *
 * @example
 * const { items, loading, getItemById } = useData();
 */
export function useData() {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useData should be use inside <DataProvider>");
  return context;
}