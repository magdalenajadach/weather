import { render, screen } from "@testing-library/react";
import Location from "../../components/Location/Location";

test("renders without crashing", () => {
  render(<Location />);
  expect(screen.getByText(/Sneak peak at the best UK running locations/i)).toBeInTheDocument();
});
