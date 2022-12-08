// Import Library's Hook
import { RouterProvider } from "react-router-dom";

// Import Routes
import routes from "./routers/routes";

function App() {
   return <RouterProvider router={routes} />;
}

export default App;
