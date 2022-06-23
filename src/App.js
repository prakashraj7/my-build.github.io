import React from "react";
import About from "./components/About";
import Footers from "./components/Footers";
import Head1 from "./components/Head1";
// import Footer from "./components/Footers";
// import Header from "./components/Header";
import Home from "./components/Home";
import LatestAnnouncement from "./components/LatestAnnouncement";
import LatestNews from "./components/LatestNews";
import Lnp from "./components/Lnp";
import OurProjects from "./components/OurProjects";
import PreFot from "./components/PreFot";
import Up2 from "./components/Up2";
import UpcomingProject from "./components/UpcomingProject";
// import './App.css';

function App() {
  return (
    <div className="App">

      <Head1 />
      <About />
      <OurProjects />
      <UpcomingProject />
      <Up2 />
      <Lnp />
      <LatestNews />
      <LatestAnnouncement />
      <PreFot />

    </div>
  );
}

export default App;
