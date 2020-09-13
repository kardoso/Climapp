import React from "react";
import { render, within } from "@testing-library/react";
import InfoClima from ".";
import { weatherIconUrl } from "../../constants";

const mockData = {
  coord: { lon: 139, lat: 35 },
  weather: [
    {
      id: 800,
      main: "Clear",
      description: "clear sky",
      icon: "01n",
    },
  ],
  base: "stations",
  main: {
    temp: 281.52,
    feels_like: 278.99,
    temp_min: 280.15,
    temp_max: 283.71,
    pressure: 1016,
    humidity: 93,
  },
  wind: {
    speed: 0.47,
    deg: 107.538,
  },
  clouds: {
    all: 2,
  },
  dt: 1560350192,
  sys: {
    type: 3,
    id: 2019346,
    message: 0.0065,
    country: "JP",
    sunrise: 1560281377,
    sunset: 1560333478,
  },
  timezone: 32400,
  id: 1851632,
  name: "Shuzenji",
  cod: 200,
};

test("Should show temperature correctly", () => {
  const { getByTestId } = render(<InfoClima data={mockData} />);
  const { getByText } = within(getByTestId("temp"));

  expect(getByText(`${Math.round(mockData.main.temp)}°C`)).toBeInTheDocument();
});

test("Should show description correctly", () => {
  const { getByTestId } = render(<InfoClima data={mockData} />);
  const { getByText } = within(getByTestId("description"));

  expect(getByText(mockData.weather[0].description)).toBeInTheDocument();
});

test("Should show location correctly", () => {
  const { getByTestId } = render(<InfoClima data={mockData} />);
  const { getByText } = within(getByTestId("location"));

  expect(
    getByText(`${mockData.name}, ${mockData.sys.country}`)
  ).toBeInTheDocument();
});

test("Should show the correct icon", () => {
  const { getByTestId } = render(<InfoClima data={mockData} />);
  const iconImg = getByTestId("icon");

  expect(iconImg).toHaveAttribute(
    "src",
    weatherIconUrl(mockData.weather[0].icon)
  );
});
