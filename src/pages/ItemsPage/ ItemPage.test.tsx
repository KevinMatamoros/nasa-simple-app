import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import ItemPage from "./ItemPage";
import DataContext from "../../context/data/DataContext";
import type { NearEarthObject } from "../../types/feed";

const mockItems: NearEarthObject[] = [
  {
    id: "1",
    name: "Asteroid 1",
    absolute_magnitude_h: 22.5,
    estimated_diameter: {
      kilometers: {
        estimated_diameter_min: 0.1,
        estimated_diameter_max: 0.3,
      },
      meters: {
        estimated_diameter_min: 100,
        estimated_diameter_max: 300,
      },
    },
    is_potentially_hazardous_asteroid: false,
  },
];

describe("ItemPage", () => {
  it("renders loading state", () => {
    render(
      <MemoryRouter>
        <DataContext.Provider value={{ items: [], loading: true }}>
          <ItemPage />
        </DataContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("renders list of asteroids", () => {
    render(
      <MemoryRouter>
        <DataContext.Provider
          value={{
            items: mockItems,
            loading: false,
          }}
        >
          <ItemPage />
        </DataContext.Provider>
      </MemoryRouter>
    );

    expect(screen.getByText("Asteroid 1")).toBeInTheDocument();
    expect(screen.queryByText(/Loading/i)).not.toBeInTheDocument();
  });

  it("throws error if context is missing", () => {
    const spy = vi.spyOn(console, "error").mockImplementation(() => {});
    expect(() =>
      render(
        <MemoryRouter>
          <ItemPage />
        </MemoryRouter>
      )
    ).toThrow("ItemList debe estar dentro de DataProvider");
    spy.mockRestore();
  });
});