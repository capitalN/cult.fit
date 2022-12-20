import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import AllRoutes from "./pages/AllRoutes";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="App">
      {/* <Navbar /> */}
      <AllRoutes />
    </div>
  );
}

export default App;
