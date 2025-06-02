import { useContext } from "react";
import DataContext from "./DataContext";

export function useData() {
  const context = useContext(DataContext);
  if (!context)
    throw new Error("useData debe usarse dentro de <DataProvider>");
  return context;
}