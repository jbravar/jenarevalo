import Image from "next/image";

import Page from "../../components/Page";

// import images to enable auto blur while loading (doesn't work for .gif?) and
// auto width/height detection.
import iHero from "../../public/images/work/boundlessvr-hero.jpg";
import iCardboard from "../../public/images/work/boundlessvr-cardboard.jpg";
import iDemo from "../../public/images/work/boundlessvr-demo.gif";
import iScalable from "../../public/images/work/boundlessvr-scalable.jpg";

export default function BoundlessVr() {
  return (
    <Page>
      <div className="hero hero--work" />
      <div className="summary">
        <div className="wrapper">
          <div className="summary__photo">
            <Image
              src={iHero}
              placeholder="blur"
              title="Boundless Florida Virtual Reality"
              alt="Boundless Florida Virtual Reality"
            />
            <div className="photo__flag">
              <p>UI/UX / Mobile App Design</p>
              <h3>Boundless Florida VR</h3>
            </div>
          </div>
          <div className="summary__title">
            <h1>Florida The Future Is Here</h1>
            <p>
              To expand and diversify the state’s economy through job creation
            </p>
          </div>
          <div className="summary__credits">
            <ul>
              <li>
                Client:{" "}
                <a href="https://www.enterpriseflorida.com/" target="_blank">
                  Enterprise Florida
                </a>
              </li>
              <li>Role: UI/UX, Mobile App Design</li>
            </ul>
            <ul>
              <li>Creative Director: Shane Santiago</li>
              <li>Developers: Mitch Cichocki, Julian Bravard</li>
            </ul>
          </div>
          <div className="summary__description">
            <p>
              Enterprise Florida, the state's public-private partnership for
              statewide economic development wanted to reposition the State as
              the top-tier place for business relocation and expansion. They
              believed for a business to reach its potential, it had to think
              beyond the limits. What better way to illustrate this aspiration
              than to literally allow viewers to reach for the stars? We helped
              to concept, design, and build a mobile application for virtual
              reality.
            </p>
            <p>
              In order to embody the brand, we had to think innovatively on how
              we market Florida. By leveraging cutting-edge VR technologies in
              providing inaccessible Florida pillar experiences (innovation,
              markets, potential, freedom) to our target audience (C-Suite
              business decision-makers, general counsel, and HR directors) to
              directly communicate the future is in Florida, we allow them to
              experience their future first-hand without leaving their home.
            </p>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            A key takeaway was the VR hub to present the Boundless campaign 360
            content in an engaging way that encourages users to shift their
            perceptions of doing business in Florida. The VR/360 mobile
            experience tapped into the viewer's innate need to discover and
            explore by highlighting the ULA rocket launch process. C-level
            decision makers, site selectors, and consultants would feel as if
            the launch was at their fingertips.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iCardboard}
            placeholder="blur"
            title="Google Cardboard"
            alt="Google Cardboard"
          />
        </div>
        <div className="wrapper">
          <div className="details__split">
            <div className="details__button">
              <a
                href="https://preview.uxpin.com/b9c84de4530e0999fa06fd14a758f364df3b6b11chd"
                target="_blank"
              >
                <button>Mobile Prototype</button>
              </a>
            </div>
          </div>
          <div className="details__split">
            <div className="details__button">
              <a href="https://invis.io/PWB0G7VEF" target="_blank">
                <button>Desktop Prototype</button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The app would visually tie to each pillar in terms of imagery,
            color, typography, etc. This would set up the opportunity to
            experience aspects of Florida no one has experienced before, and
            imagine what you could do with your business when you move to a
            state where the possibilities for growth are
            limitless.Desktop/Mobile web app with a simple list of videos and
            custom web VR video player would showcase a list of videos on a
            landing page. A custom 360 video player using A-frame for VR-mode
            was built and tested to support iOS 10 and Android 6 & 7
            (Marshmallow and Nougat).
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image src={iDemo} title="VR Demo" alt="VR Demo" />
          <div className="details__button">
            <a href="http://boundlessfloridavr.com/" target="_blank">
              <button>Boundless FL VR</button>
            </a>
          </div>
        </div>
      </div>
      <div className="callout">
        <div className="wrapper">
          <p>
            The landing page would be the home base scaling the virtual reality
            content using the pre-existing branding of Florida The Future Is
            Here. It was vital to keep a low bounce rate on the site and keep
            the user engaged with links to related content, and the "Contact Us"
            CTA journey. The initial experience featured the ULA launch, and
            would follow with additional content as the 360 video library grows.
          </p>
        </div>
      </div>
      <div className="details">
        <div className="wrapper">
          <Image
            src={iScalable}
            placeholder="blur"
            title="Additional Videos"
            alt="Additional Videos"
          />
        </div>
      </div>
    </Page>
  );
}
