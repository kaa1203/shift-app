import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.jsx";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import NotFound from "./pages/NotFound.jsx";
import Home from "./pages/Home.jsx";
import Entries from "./pages/Entries.jsx";
import Entry from "./pages/Entry.jsx";
import Profile from "./pages/Profile.jsx";
import Tags from "./pages/Tags.jsx";
import Ideas from "./pages/Ideas.jsx";
import Journals from "./pages/Journals.jsx";
import Goals from "./pages/Goals.jsx";
import MentalHealth from "./pages/MentalHealth.jsx";
import Favorites from "./pages/Favorites.jsx";
import Archive from "./pages/Archive.jsx";
import Insights from "./pages/Insights.jsx";
import Reminders from "./pages/Reminders.jsx";
import Settings from "./pages/Settings.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/entries">
          <Route index element={<Entries />} />
          <Route path=":id" element={<Entry />} />
        </Route>
        <Route path="/journals" element={<Journals />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/ideas" element={<Ideas />} />
        <Route path="/mental-health" element={<MentalHealth />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/archive" element={<Archive />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/reminders" element={<Reminders />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </>
  ),
  { basename: "/shift/" }
);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
);
