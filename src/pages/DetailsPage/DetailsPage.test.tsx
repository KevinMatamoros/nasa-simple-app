import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailsPage from "./DetailsPage";
import DataContext from "../../context/data/DataContext";
import type { NearEarthObject } from "../../types/feed";

const mockNavigate = vi.fn();

vi.mock("react-router-dom", async () => {
  const actual: any = await vi.importActual("react-router-dom");
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockItem: NearEarthObject = {
  id: "123",
  name: "Test Asteroid",
  absolute_magnitude_h: 22.1,
  estimated_diameter: {
    kilometers: { estimated_diameter_min: 0.1, estimated_diameter_max: 0.3 },
    meters: { estimated_diameter_min: 100, estimated_diameter_max: 300 },
    miles: { estimated_diameter_min: 0.06, estimated_diameter_max: 0.18 },
    feet: { estimated_diameter_min: 328, estimated_diameter_max: 984 },
  },
  is_potentially_hazardous_asteroid: true,
  close_approach_data: [],
  is_sentry_object: false,
  links: { self: "https://nasa.gov" },
  neo_reference_id: "123",
  nasa_jpl_url: "https://ssd.jpl.nasa.gov",
};

const wrapper = (contextValue: any, routeId: string) => (
  <DataContext.Provider value={contextValue}>
    <MemoryRouter initialEntries={[`/details/${routeId}`]}>
      <Routes>
        <Route path="/details/:id" element={<DetailsPage />} />
      </Routes>
    </MemoryRouter>
  </DataContext.Provider>
);

describe("DetailsPage", () => {
  it("renders asteroid details if found", () => {
    render(
      wrapper({ getItemById: () => mockItem }, "123")
    );

    expect(screen.getByText(/Test Asteroid/)).toBeInTheDocument();
    expect(screen.getByText(/Absolute Magnitude/i)).toBeInTheDocument();
    expect(screen.getByText(/Yes 🚨/)).toBeInTheDocument();
  });

  it("shows loading when item not found", () => {
    render(wrapper({ getItemById: () => null }, "999"));

    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });

  it("navigates back when < Back button is clicked", () => {
    render(wrapper({ getItemById: () => mockItem }, "123"));

    fireEvent.click(screen.getByText(/< Back/i));
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("shows error when context is missing", () => {
    render(
      <MemoryRouter initialEntries={["/details/123"]}>
        <Routes>
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText(/DataContext is not available/)).toBeInTheDocument();
  });
});