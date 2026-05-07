/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { AICapabilities } from "./pages/AICapabilities";
import { DataCapabilities } from "./pages/DataCapabilities";
import { Solutions } from "./pages/Solutions";
import { FAQ } from "./pages/FAQ";

export default function App() {
  return (
    <Router basename="/cognivora">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="ai-capabilities" element={<AICapabilities />} />
          <Route path="data-capabilities" element={<DataCapabilities />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="faq" element={<FAQ />} />
        </Route>
      </Routes>
    </Router>
  );
}
