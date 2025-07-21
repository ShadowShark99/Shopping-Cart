// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { createBrowserRouter, MemoryRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

describe("App component", () => {
  it("renders the app", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
     const { container } = render(<MemoryRouter><App /></MemoryRouter>);
     expect(container).toMatchSnapshot();
  });

  it("Shopping page", async () => {
    const router = createBrowserRouter(routes);

    const user = userEvent.setup();

    render(<RouterProvider router={router}></RouterProvider>);
    const button = screen.getByRole("link", { name: "Shop" });

    await user.click(button);

    const heading = await screen.getByRole("heading", {level: 2});
    // for(let i = 0; i < headings.length; i++)
    // {
    //   console.log(i);
    // }
    // expect(screen.getByRole("heading").textContent).toMatch(/Hi, want to buy something?/i);
    expect(heading.textContent).toMatch(/Hi, want to buy something?/i);
  });
});
