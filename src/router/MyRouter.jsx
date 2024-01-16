import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Form from "../pages/Form";
import { CollectionList } from "../components/Collections/CollectionList";
import { BotOrai } from "../canvas/BotOrai";
import { LandingPage } from "../components/LandingPage";

export default function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<p>Home</p>} />
        <Route path="collections" element={<CollectionList />}>
          <Route path="add" element={<Form />} />
        </Route>
        <Route path="collections/:id" element={<App />}></Route>
        <Route path="bot" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}
