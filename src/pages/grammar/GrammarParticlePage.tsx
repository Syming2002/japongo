import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Section from "../../components/Section";
import Sidebar from "../../components/Sidebar";

import "../../css/pages.css";

interface GrammarParticulePageProps {
  hiraganaParticle: string;
}

function GrammarParticulePage({ hiraganaParticle }: GrammarParticulePageProps) {
  return (
    <div
      className={`particle-grammar-page-div ${hiraganaParticle}-particle-grammar-page-div`}
    >
      <Header />
      <Sidebar />
      <h1
        className={
          "particle-main-title " + hiraganaParticle + "particle-main-title"
        }
      >
        {"Welcome on the course of the " + hiraganaParticle + " particle "}
      </h1>
      <Section isGrammarSection={true} particle={hiraganaParticle} />
      <Footer
        footerClassName="main-footer"
        footerHrClassName="main-hr-footer"
        version={0.1}
      />
    </div>
  );
}

export default GrammarParticulePage;
