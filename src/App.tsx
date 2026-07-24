import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import { Route as RouteName } from "./constants/route";
import CodeOfConduct from "./pages/code-of-conduct";
import ComingSoon from "./pages/ComingSoon";
import IndexPage from "./pages/index";
import NotFoundPage from "./pages/not-found/404";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import TravelGuidelines from "./pages/travel-guidelines";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RouteName.MAIN} element={<IndexPage />} />
        <Route path={RouteName.PRIVACY} element={<Privacy />} />
        <Route path={RouteName.CODE_OF_CONDUCT} element={<CodeOfConduct />} />
        <Route path={RouteName.TERMS_AND_CONDITIONS} element={<Terms />} />
        <Route
          path={RouteName.TRAVEL_GUIDELINES}
          element={<TravelGuidelines />}
        />
        <Route path={RouteName.TEAM} element={<ComingSoon title="Team" />} />
        <Route
          path={RouteName.EVENTS}
          element={<ComingSoon title="Events" />}
        />
        <Route
          path={RouteName.ANNOUNCEMENTS}
          element={<ComingSoon title="Announcements" />}
        />
        <Route
          path={RouteName.ALUMNI}
          element={<ComingSoon title="Alumni" />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
