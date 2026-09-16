import React from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { AppProvider } from "./context/AppContext";
import { PhoneFrame } from "./components/layout/PhoneFrame";

export default function App() {
  return (
    <AppProvider>
      <PhoneFrame>
        <div style={{ flex: 1, display: "flex", flexDirection: "column", minHeight: 0, overflow: "hidden" }}>
          <RouterProvider router={router} />
        </div>
      </PhoneFrame>
    </AppProvider>
  );
}
