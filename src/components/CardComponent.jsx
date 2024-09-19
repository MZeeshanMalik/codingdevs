// Import necessary libraries
import {
  CommunityGrid,
  Container,
  HeroSection,
  MemberCard,
  Section,
} from "./cardcomponentStyles";
import CommunityComponent from "./Community";
import LatestPosts from "./LatestPosts";

// Main Component
const CardComponent = () => {
  return (
    <Container>
      <HeroSection>
        <h1>Coding Insights</h1>
        <p>Unlock the secrets of coding with expert articles</p>
        <button>
          <a href="/useEffect-hook">Read more</a>
        </button>
      </HeroSection>
      <LatestPosts />

      <Section>
        <h2>Meet Our Community Members</h2>
        <CommunityGrid>
          <MemberCard>
            <img src="../images/pic1.jpg" />

            <h4>Alice Wong</h4>
            <span>Role: Community Manager</span>
            <p>Passionate about fostering connections and growth.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic2.jpg" />

            <h4>Elice perry</h4>
            <span>Role: Content Creator</span>
            <p>Bringing stories to life through engaging content.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic3.jpg" />

            <h4>Micheal clark</h4>
            <span>Role: Developer</span>
            <p>Loves coding and solving complex problems.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/pic4.jpg" />

            <h4>Emily chen</h4>
            <span>Role: Designer</span>
            <p>Creating visually stunning and user-friendly designs.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/macclaren.jpg" alt="Macclaren" />

            <h4>Macclaren</h4>
            <span>Role: Backen Developer</span>
            <p>Creating fully functional websites handeling backend work.</p>
          </MemberCard>
          <MemberCard>
            <img src="../images/Micheal.jpg" alt="Micheal" />

            <h4>Micheal</h4>
            <span>Role: Database Engenieer</span>
            <p>Creating and handeling complex database designs.</p>
          </MemberCard>
        </CommunityGrid>
      </Section>
      {/* <Section> */}
      <CommunityComponent />
      {/* </Section> */}
      <Section>
        <h2>Trusted by</h2>
        <LogoGrid>
          <img src="../images/astra.png" alt="astra" />
          <img src="../images/canva.png" alt="canva" />
          <img src="../images/pintrest.png" alt="pintrest" />
          <img src="../images/youtube.png" alt="youtube" />
          <img src="../images/linkdin.png" alt="linkdin" />
        </LogoGrid>
      </Section>
    </Container>
  );
};

export default CardComponent;
