import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Layout from "./components/custom/layout";
import Datas from "./pages/datas";
import Help from "./pages/Help";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/datas" element={<Datas />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Perfil />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
