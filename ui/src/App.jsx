import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import IssueCertificate from "./pages/IssueCertificate";
import View from "./pages/View";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/issuecertificate" element={<IssueCertificate />} />
         
        </Route>
        <Route path="/view/:certiId" element={<View />} />
      </>
    )
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
