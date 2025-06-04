import { useContext } from "react";
import DataContext from "./DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useData should be use inside <DataProvider>");
  return context;
}