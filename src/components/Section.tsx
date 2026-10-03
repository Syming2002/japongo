import { useState } from "react";
import "../css/main.css";

interface SectionProps {
  isHomePageSection?: boolean;
  isGrammarSection?: boolean;
  particle?: string;
}

interface SectionGrammarProps {
  particle?: string;
}

function Section({
  isHomePageSection,
  isGrammarSection,
  particle,
}: SectionProps) {
  return (
    (isHomePageSection && <HomePageSection />) ||
    (isGrammarSection && <GrammarSection particle={particle} />)
  );
}

function HomePageSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  function onFlipHomeCard() {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  }

  return (
    <div className="card-div">
      <div className={`flip-card${isFlipped ? " flipped" : ""}`}>
        <div onClick={() => onFlipHomeCard()} className="flip-card-inner-div">
          <section className="home-section home-card-front">
            Welcome on Japongo, a website to learn the japanese language. On
            this website you'll find all the needs to learn the japaense
            language. Be careful, I'm not a japanese teacher, I created this
            website with passion because I love the japanese culture. During
            your visit on this website you can click on card like this one to
            see its back side content.
          </section>
          <section className="home-card-back">
            <div id="japan-silhouette-div">
              <h1 id="japan-silhouette">🗾</h1>
              <p>日本へようこそ！！</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

function GrammarSection({ particle }: SectionGrammarProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  function onFlipGrammarCard() {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  }

  function particleNo() {
    return (
      <div className="card-div">
        <div className={`flip-card${isFlipped ? " flipped" : ""}`}>
          <div
            onClick={() => onFlipGrammarCard()}
            className="flip-card-inner-div"
          >
            <section className="card-front-section">
              <h2 className="second-title-section">
                When do we use the の particle
              </h2>
              <p className="particle-introduction">
                There are several usages for this particle
              </p>
              <ol>
                <li className="particle-usage-list">
                  1. First of all the の particle can be used to express the
                  possession.
                </li>
                <li className="particle-usage-list">
                  2. It can be used to describe a noun with another noun.
                </li>
                <li className="particle-usage-list">
                  3. It can be used for nominalization.
                </li>
                <li className="particle-usage-list">
                  4. It can be used for a pronoun replacement.
                </li>
                <li className="particle-usage-list">
                  5. It can be used as a end soft sentence particle to ask a
                  question.
                </li>
              </ol>
            </section>
            <section className="card-back-section">
              <h2 className="second-title-section">
                Example of usage of the の particle
              </h2>
              <div>
                1. {""}
                <ruby className="particle-example-ruby">
                  私
                  <>
                    <rp>(</rp>
                    <rt>わたし</rt>
                    <rp>)</rp>
                  </>
                </ruby>
                の
                <ruby>
                  猫
                  <>
                    <rp>(</rp>
                    <rt>ねこ</rt>
                    <rp>)</rp>
                  </>
                  。 {"→"} My cat.
                </ruby>
              </div>
              <div>
                2. {""}
                <ruby className="particle-example-ruby">
                  日本語
                  <>
                    <rp>(</rp>
                    <rt>ニホンゴ</rt>
                    <rp>)</rp>
                  </>
                </ruby>
                の
                <ruby>
                  先生
                  <>
                    <rp>(</rp>
                    <rt>センセイ</rt>
                    <rp>)</rp>
                  </>
                  。 {"→"} Japanese teacher.
                </ruby>
              </div>
              <div>
                3. {""}
                <ruby className="particle-example-ruby">
                  泳
                  <>
                    <rp>(</rp>
                    <rt>およ</rt>
                    <rp>)</rp>
                  </>
                </ruby>
                ぐの
                <ruby>
                  好
                  <>
                    <rp>(</rp>
                    <rt>す</rt>
                    <rp>)</rp>
                  </>
                  きです。 {"→"} I like swimming.
                </ruby>
              </div>
              <div>
                4. {""}
                <ruby className="particle-example-ruby">
                  赤
                  <>
                    <rp>(</rp>
                    <rt>あか</rt>
                    <rp>)</rp>
                  </>
                </ruby>
                いのをください。 {"→"} The red one please.
              </div>
              <div>
                5. {""}
                <ruby className="particle-example-ruby">
                  行
                  <>
                    <rp>(</rp>
                    <rt>い</rt>
                    <rp>)</rp>
                  </>
                </ruby>
                くの？ {"→"} Are we going ?
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }

  return (
    particle === "の" && (
      <div className="particle-section-wrapper">{particleNo()}</div>
    )
  );
}

export default Section;
