import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./notes/Form.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Theme>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/create" element={<Form />} />
          <Route path="/edit/:id" element={<Form />} />
        </Routes>
      </Theme>
    </BrowserRouter>
  </React.StrictMode>
);
