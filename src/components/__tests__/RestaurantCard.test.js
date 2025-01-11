import React from "react";
import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";
import { withPromotedLabel } from "../RestaurantCard";

it("should render RestaurantCard component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText("Cake & Cream");

  expect(name).toBeInTheDocument();
});

it("should render RestaurantCard component with Promoted Label", () => {
  const WrappedRestaurantCard = withPromotedLabel(RestaurantCard);
  render(<WrappedRestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Promoted");
  expect(name).toBeInTheDocument();
});
