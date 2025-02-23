import { Route, Routes } from "react-router-dom";
import DefaultTemplate from "./template";
import ListProductsPage from "./pages/ListProducts";

function App() {
  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={
            <DefaultTemplate>
              <ListProductsPage />
            </DefaultTemplate>
          }
        ></Route>
      </Routes>
    </main>
  );
}

export default App;
