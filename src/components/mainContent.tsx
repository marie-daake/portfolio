import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import About from "./about";
import Training from "./training";
import ArtGallery from "./artwork";
import WebGallery from "./websites";
import OtherGallery from "./other";
import Contact from "./contact";
import Footer from "./footer";

function MainTabs() {
  return (
    <>
      <Tabs
        id="navigation"
        transition={false}
        className="nav"
        justify
        style={{ borderColor: "transparent !important" }}
      >
        <Tab eventKey="about" title="About">
          <About />
          <Footer />
        </Tab>
        <Tab eventKey="training" title="Training">
          <Training />
          <Footer />
        </Tab>
        <Tab eventKey="artwork" title="My Art">
          <ArtGallery />
          <Footer />
        </Tab>
        <Tab eventKey="websites" title="Websites">
          <WebGallery />
          <Footer />
        </Tab>
        <Tab eventKey="other" title="Other">
          <OtherGallery />
          <Footer />
        </Tab>
        <Tab eventKey="contact" title="Contact">
          <Contact />
          <Footer />
        </Tab>
      </Tabs>
    </>
  );
}

export default MainTabs;
