import { AppProvider } from "@/app/providers";
import { router } from "@/app/router";
import { RouterProvider } from "react-router-dom";

function App() {
  return (
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
  );
}

export default App;
