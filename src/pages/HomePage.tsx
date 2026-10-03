import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";
import Sidebar from "../components/Sidebar";

import "../css/pages.css";

function HomePage() {
  return (
    <div className="home-page-div">
      <div className="home-page-wrapper">
        <Header />
        <Sidebar />
        <Section isHomePageSection={true} />
        <Footer
          version={0.1}
          footerClassName="main-footer"
          footerHrClassName="main-hr-footer"
        />
      </div>
    </div>
  );
}

export default HomePage;
