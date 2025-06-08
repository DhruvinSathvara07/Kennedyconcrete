import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout/Layout";
import Home from "./Views/Pages/Home/Home";
import "./assets/CSS/style.css";
import "./assets/CSS/About.css";
import "./assets/CSS/Contact.css";
import "./assets/CSS/Login.css";
import "./assets/CSS/Location.css";
import "./assets/CSS/Blogs.css";
import Buildingmaterials from "./Views/Pages/Service/Buildingmaterials/Buildingmaterials";
import PreferredContractors from "./Views/Pages/Service/PreferredContractors/PreferredContractors";
import Sidewalk from "./Views/Pages/Service/ConcreteProjects/Sidewalk/Sidewalk";
import Driveway from "./Views/Pages/Service/ConcreteProjects/Driveway/Driveway";
import Slab from "./Views/Pages/Service/ConcreteProjects/Slab/Slab";
import CellFill from "./Views/Pages/Service/ConcreteProjects/CellFill/CellFill";
import Commercial from "./Views/Pages/Service/ConcreteProjects/Commercial/Commercial";
import ShotCreate from "./Views/Pages/Service/ConcreteProjects/ShotCreate/ShotCreate";
import DecorativeConcrete from "./Views/Pages/Service/ConcreteProjects/DecorativeConcrete/DecorativeConcrete";
import InstantQuote from "./Views/Pages/Homeowners/InstantQuote_and_Order/InstantQuote";
import Driver from "./Views/Pages/About/DriverJobs/Driver";
import ConcreteDeliveryService from "./Views/Pages/Service/ConcreteDeliveryService/ConcreteDeliveryService";
import Contact from "./Views/Pages/Contact/Contact";
import Login from "./Views/Pages/Login/Login";
import Location from "./Views/Pages/Locations/Orlando/Location";
import Blogs from "./Views/Pages/About/Blogs/Blogs";
import BlogCard from "./Views/Components/BlogCard/BlogCard";
import SearchResults from "./Views/Pages/About/Blogs/SearchResults";
function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* Route without Layout */}

          <Route path="/login" element={<Login />} />
          {/* All other routes with Layout */}
          <Route
            path="*"
            element={
              <Layout>
                <Routes>
                  {/* HomePage */}
                  <Route path="/" element={<Home />} />

                  {/* AboutPage */}
                  <Route path="/blog" element={<Blogs />} />
                  {/* <Route path="/blogs/:pageNumber" element={<BlogCard />} /> */}
                  <Route path="/blog/page/:page" element={<BlogCard />} />
                  <Route path="/search" element={<SearchResults />} />
                  <Route path="/driver-jobs" element={<Driver />} />

                  {/* ServicePage */}
                  <Route
                    path="/concrete-delivery-service"
                    element={<ConcreteDeliveryService />}
                  />
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
                  <Route
                    path="/construction-building-materials"
                    element={<Buildingmaterials />}
                  />
                  <Route
                    path="/preferred-contractors"
                    element={<PreferredContractors />}
                  />

                  {/* Location */}
                  {/* <Route path="/orlando" element={<Location />} /> */}

                  {/* HomeownersPage */}
                  <Route path="/instance-quote" element={<InstantQuote />} />

                  {/* ContactPage */}
                  <Route path="/contact-us" element={<Contact />} />
                </Routes>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
