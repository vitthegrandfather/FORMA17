import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FORMA/17 — Ideas made inevitable",
  description:
    "Independent creative direction, identity systems and digital experiences for culture-led studios and brands.",
};

const MEDIA = "/FORMA17/media";

const projects = [
  {
    no: "01",
    title: ["PERMANENT", "GESTURE"],
    tags: "ART DIRECTION / IDENTITY / CAMPAIGN",
    year: "2026",
    image: `${MEDIA}/process-01.jpg`,
    alt: "Tattoo artist working in a monochrome studio",
    intro: "Turning a private ritual into a public language.",
    challenge: "A new tattoo practice needed to feel precise and human without borrowing the usual visual codes of the category.",
    move: "We built the identity around the tension between control and instinct: strict typography, documentary image-making and an intentionally unfinished verbal tone.",
    impact: "06-week launch / identity, campaign, film and booking experience delivered as one coherent system.",
  },
  {
    no: "02",
    title: ["RAW", "VOLUME"],
    tags: "STRATEGY / SPACE / DIGITAL",
    year: "2025",
    image: `${MEDIA}/structure-02.jpg`,
    alt: "Curved concrete architecture in black and white",
    intro: "A cultural space designed to resist easy definition.",
    challenge: "The venue moved between exhibition, performance and retail. Its identity had to hold every format without flattening any of them.",
    move: "A modular system derived from the building itself: expanding fields, compressed type and layouts that change density with the programme.",
    impact: "32 launch assets / one adaptable visual engine across space, screen and social.",
  },
  {
    no: "03",
    title: ["HUMAN", "TRACE"],
    tags: "EDITORIAL / FILM / PLATFORM",
    year: "2025",
    image: `${MEDIA}/process-02.jpg`,
    alt: "Close view of an artist at work",
    intro: "An editorial platform about the intelligence of the hand.",
    challenge: "A craft collective needed to communicate expertise without becoming nostalgic, precious or overly polished.",
    move: "We treated process as the hero: macro film, close-set typography and essays structured like working notes rather than finished statements.",
    impact: "3.4× longer session time / a repeatable publishing format for twelve contributors.",
  },
];

export default function Home() {
  return (
    <main id="top">
      <div className="introLoader" aria-hidden="true">
        <div className="loaderTop"><span>FORMA/17</span><span>EST. 2017 — KYIV</span></div>
        <div className="loaderWord"><span>FORM</span><span>FOLLOWS</span><span>INTENT</span></div>
        <div className="loaderLine"><i /></div>
      </div>

      <aside className="side" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="FORMA 17 home">
          <span>FORMA</span><b>/17</b>
        </a>
        <nav className="sideNav">
          <a href="#work"><span>01</span>Selected work</a>
          <a href="#about"><span>02</span>Point of view</a>
          <a href="#services"><span>03</span>Capabilities</a>
          <a href="#contact"><span>04</span>Start a project</a>
        </nav>
        <div className="sideObject" aria-hidden="true">
          <div className="orbit"><span>F</span></div>
          <p>FORM / FUNCTION<br />FEELING / FRICTION</p>
        </div>
        <div className="sideMeta">
          <span>Independent practice</span><span>Kyiv / Worldwide</span><span>UTC +02:00</span>
        </div>
        <a className="availability" href="mailto:hello@forma17.studio">
          <i aria-hidden="true" /> Taking on 02 projects / Q4
        </a>
      </aside>

      <header className="mobileHeader">
        <a className="mobileBrand" href="#top">FORMA/17</a>
        <details className="mobileMenu">
          <summary>MENU +</summary>
          <nav>
            <a href="#work">Work</a><a href="#about">About</a>
            <a href="#services">Capabilities</a><a href="#contact">Contact</a>
          </nav>
        </details>
      </header>

      <div className="page">
        <section className="hero" aria-labelledby="hero-title">
          <video className="heroVideo" autoPlay muted loop playsInline poster={`${MEDIA}/process-01.jpg`}>
            <source src={`${MEDIA}/hero.mp4`} type="video/mp4" />
          </video>
          <div className="heroShade" />
          <div className="heroTop"><span>INDEPENDENT CREATIVE PRACTICE</span><span>IDENTITY — DIGITAL — DIRECTION</span></div>
          <h1 id="hero-title">
            <span><i>FORM</i></span>
            <span className="outline"><i>WITH</i></span>
            <span><i>INTENT</i></span>
          </h1>
          <div className="heroDisc" aria-hidden="true"><span>F/17</span><small>CREATIVE PRACTICE · KYIV ·</small></div>
          <div className="heroBottom">
            <p>We turn clear thinking into identities people can feel — and organisations can use.</p>
            <a href="#work">Selected work <span aria-hidden="true">↓</span></a>
          </div>
          <div className="heroCounter" aria-hidden="true">00—01</div>
        </section>

        <div className="ticker" aria-label="Capabilities">
          <div>STRATEGY <b>—</b> IDENTITY <b>—</b> DIGITAL <b>—</b> MOTION <b>—</b> SPATIAL <b>—</b> STRATEGY <b>—</b> IDENTITY <b>—</b> DIGITAL <b>—</b> MOTION <b>—</b> SPATIAL <b>—</b></div>
        </div>

        <section className="statement" id="about">
          <div className="sectionLabel"><span>( A )</span><span>POINT OF VIEW</span><span>READ / 01:20</span></div>
          <div className="statementLockup reveal">
            <span>NOT A STYLE.</span>
            <span className="reverse">A SYSTEM.</span>
          </div>
          <div className="statementGrid">
            <div className="statementPortrait reveal">
              <img src={`${MEDIA}/interior-01.jpg`} alt="Minimal monochrome architectural interior" />
              <div className="imageIndex"><span>FIG. 01</span><span>STRUCTURE AS LANGUAGE</span></div>
            </div>
            <div className="statementCopy reveal">
              <p className="lead">We work with ambitious studios and founders who have outgrown the way they present themselves.</p>
              <div className="copyColumns">
                <p>Our job is not to make things look expensive. It is to make an idea feel obvious, ownable and alive across every place it appears.</p>
                <p>We combine strategic clarity with editorial instinct. Small senior team, direct access, no hand-offs between the thought and the thing.</p>
              </div>
              <a href="#principles">Our operating principles <span>↘</span></a>
            </div>
          </div>
        </section>

        <section className="proof" aria-label="Studio facts">
          <div><strong>09</strong><span>YEARS SHAPING<br />INDEPENDENT CULTURE</span></div>
          <div><strong>41</strong><span>IDENTITIES<br />LAUNCHED</span></div>
          <div><strong>12</strong><span>COUNTRIES<br />COLLABORATED IN</span></div>
          <div><strong>01</strong><span>TEAM FROM BRIEF<br />TO FINAL DETAIL</span></div>
        </section>

        <section className="work" id="work" aria-labelledby="work-title">
          <div className="workHead">
            <div className="sectionLabel light"><span>( B )</span><span>SELECTED WORK / 2024—2026</span><span>03 CASES</span></div>
            <h2 id="work-title" className="reveal">WORK THAT<br /><span>HOLDS</span> ATTENTION.</h2>
          </div>
          <div className="projects">
            {projects.map((project, index) => (
              <article className={`project project${index + 1}`} key={project.no}>
                <div className="projectMeta"><span>{project.no}</span><span>{project.tags}</span><span>{project.year}</span></div>
                <figure>
                  <img src={project.image} alt={project.alt} />
                  <figcaption><span>View case / {project.no}</span><span aria-hidden="true">↗</span></figcaption>
                </figure>
                <div className="projectText">
                  <div>
                    <p className="projectKicker">{project.intro}</p>
                    <h3>{project.title.map((line) => <span key={line}>{line}</span>)}</h3>
                  </div>
                  <details>
                    <summary>Case notes <span>+</span></summary>
                    <div className="caseNotes">
                      <p><b>THE ASK</b>{project.challenge}</p>
                      <p><b>THE MOVE</b>{project.move}</p>
                      <p><b>THE SHIFT</b>{project.impact}</p>
                    </div>
                  </details>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="interlude" aria-label="Studio philosophy">
          <img src={`${MEDIA}/structure-01.jpg`} alt="Geometric brutalist architecture" />
          <div className="interludeTrack" aria-hidden="true"><span>STRUCTURE / EMOTION / STRUCTURE / EMOTION /</span></div>
          <div className="interludeNote"><span>FORM FOLLOWS INTENTION</span><span>NOT TREND</span></div>
        </section>

        <section className="archive" aria-labelledby="archive-title">
          <div className="sectionLabel"><span>( C )</span><span>VISUAL RESEARCH / ARCHIVE</span><span>ONGOING</span></div>
          <div className="archiveTitle"><h2 id="archive-title">LOOK<br />CLOSER.</h2><p>Ideas are rarely invented in a room. They are noticed — in material, movement, language and the way people make things.</p></div>
          <div className="archiveGrid">
            <figure className="a1"><img src={`${MEDIA}/studio-01.jpg`} alt="Artist working inside a studio" /><figcaption>PROCESS / 0042</figcaption></figure>
            <figure className="a2"><img src={`${MEDIA}/structure-02.jpg`} alt="Concrete architectural detail" /><figcaption>VOLUME / 0018</figcaption></figure>
            <div className="archiveQuote"><span>“</span><p>Good identity does not describe an organisation. It reveals the tension that makes it interesting.</p></div>
            <figure className="a3"><img src={`${MEDIA}/process-02.jpg`} alt="Close view of a craft process" /><figcaption>GESTURE / 0026</figcaption></figure>
          </div>
        </section>

        <section className="principles" id="principles">
          <div className="sectionLabel light"><span>( D )</span><span>HOW WE THINK</span><span>04 PRINCIPLES</span></div>
          <div className="principleRows">
            <div><span>01</span><h3>REDUCE UNTIL IT MEANS MORE.</h3><p>Clarity is not minimalism. It is the removal of everything that weakens the idea.</p></div>
            <div><span>02</span><h3>BUILD A WORLD, NOT A LOGO.</h3><p>A useful identity behaves consistently without repeating itself.</p></div>
            <div><span>03</span><h3>KEEP THE HUMAN FRICTION.</h3><p>Precision matters. So do texture, surprise and signs that a person made it.</p></div>
            <div><span>04</span><h3>MAKE IT LIVE IN THE REAL WORLD.</h3><p>The system is finished only when your team can use it with confidence.</p></div>
          </div>
        </section>

        <section className="services" id="services">
          <div className="sectionLabel"><span>( E )</span><span>CAPABILITIES</span><span>BUILT TOGETHER</span></div>
          <div className="servicesIntro reveal"><h2>SMALL TEAM.<br />FULL ATTENTION.</h2><p>Senior thinking from the first conversation to the final pixel. We shape the idea, build the system and stay until it works.</p></div>
          <div className="serviceRows">
            <div><span>01</span><h3>Strategy & positioning</h3><p>Research / workshops / audience / positioning / verbal direction</p><i>↗</i></div>
            <div><span>02</span><h3>Identity systems</h3><p>Naming / visual identity / type / image language / guidelines</p><i>↗</i></div>
            <div><span>03</span><h3>Digital experiences</h3><p>Portfolio / campaign / editorial / commerce / design systems</p><i>↗</i></div>
            <div><span>04</span><h3>Campaign & motion</h3><p>Launch concepts / photography / film / social / toolkits</p><i>↗</i></div>
          </div>
        </section>

        <section className="process">
          <div className="processVisual"><video autoPlay muted loop playsInline poster={`${MEDIA}/process-01.jpg`}><source src={`${MEDIA}/hero.mp4`} type="video/mp4" /></video><span>FIELD NOTES / FILM 03</span></div>
          <div className="processText">
            <span className="eyebrow">THE PROCESS / 04—10 WEEKS</span>
            <h2>ONE LINE<br />FROM WHY<br />TO LIVE.</h2>
            <p>Each stage makes the next one more certain. You see the work early, understand every decision and never wait for a grand reveal.</p>
            <ol><li><span>01</span><b>Frame</b><small>Find the real problem</small></li><li><span>02</span><b>Define</b><small>Set the creative edge</small></li><li><span>03</span><b>Build</b><small>Turn direction into system</small></li><li><span>04</span><b>Release</b><small>Make it work in public</small></li></ol>
          </div>
        </section>

        <section className="testimonial">
          <div className="testimonialMeta"><span>CLIENT NOTE / 03</span><span>FOUNDER, CULTURAL PLATFORM</span></div>
          <blockquote>“They did not give us a new coat of paint. They gave us a sharper way to see ourselves — and a system that finally made every decision easier.”</blockquote>
          <div className="testimonialFooter"><span>01 / 03</span><span>Drag the idea forward →</span></div>
        </section>

        <section className="contact" id="contact">
          <div className="contactTop"><span>HAVE SOMETHING WORTH SHAPING?</span><span>BOOKING Q4 / 2026</span></div>
          <a href="mailto:hello@forma17.studio" className="contactLink"><span>START WITH</span><span>A GOOD</span><span className="accent">QUESTION ↗</span></a>
          <div className="contactBottom">
            <div><span>EMAIL</span><a href="mailto:hello@forma17.studio">hello@forma17.studio</a></div>
            <div><span>SOCIAL</span><a href="#top">Instagram ↗</a><a href="#top">Behance ↗</a></div>
            <div><span>BASE</span><p>Kyiv, Ukraine<br />Working worldwide</p></div>
            <div><span>CREDITS</span><p>Imagery: Pexels<br />Film: Coverr</p></div>
          </div>
        </section>

        <footer><span>© FORMA/17 — 2026</span><span>INDEPENDENT CREATIVE PRACTICE</span><a href="#top">BACK TO TOP ↑</a></footer>
      </div>
    </main>
  );
}
