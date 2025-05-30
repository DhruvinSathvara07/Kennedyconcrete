import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Views/Pages/Home/Home";
import "./assets/CSS/style.css";
import "./assets/CSS/About.css";
import Buildingmaterials from "./Views/Pages/Service/Buildingmaterials/Buildingmaterials";
import PreferredContractors from "./Views/Pages/Service/PreferredContractors/PreferredContractors";
import Sidewalk from "./Views/Pages/Service/ConcreteProjects/Sidewalk/Sidewalk";
import Driveway from "./Views/Pages/Service/ConcreteProjects/Driveway/Driveway";
import Slab from "./Views/Pages/Service/ConcreteProjects/Slab/Slab";
import CellFill from "./Views/Pages/Service/ConcreteProjects/CellFill/CellFill";
import Commercial from "./Views/Pages/Service/ConcreteProjects/Commercial/Commercial";
import ShotCreate from "./Views/Pages/Service/ConcreteProjects/ShotCreate/ShotCreate";
import DecorativeConcrete from "./Views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcrete";
import InstantQuote from "./Views/Pages/InstantQuote_and_Order/InstantQuote";
import Driver from "./Views/Pages/About/DriverJobs/Driver";
function App() {
  return (
    <>
      <Router>
        <Layout>
          <Routes>
            {/* HomePage Routes */}

            <Route path="/" element={<Home />} />

            {/* AboutPage Routes */}

            <Route path="/driver-jobs" element={<Driver />} />

            {/* ServicePage Routes */}

            <Route
              path="/construction-building-materials"
              element={<Buildingmaterials />}
            />
            <Route
              path="/preferred-contractors"
              element={<PreferredContractors />}
            />
            {/* Servicepage ConcreteDropdown Routes */}
            <Route path="/sidewalk" element={<Sidewalk />} />
            <Route path="/driveway" element={<Driveway />} />
            <Route path="/slab" element={<Slab />} />
            <Route path="/cell-fill" element={<CellFill />} />
            <Route path="/commercial" element={<Commercial />} />
            <Route path="/shotcrete" element={<ShotCreate />} />
            <Route
              path="/decorative-concrete"
              element={<DecorativeConcrete />}
            />

            {/* Instance Quoute */}
            <Route path="/instance-quote" element={<InstantQuote />} />
          </Routes>
        </Layout>
      </Router>
    </>
  );
}

export default App;
