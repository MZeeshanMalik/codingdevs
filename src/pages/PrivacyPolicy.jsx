import React from "react";
import styled from "styled-components";
import TermsAndConditions from "../components/TermsAndConditions";

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Title = styled.h1`
  color: #333;
`;

const Section = styled.section`
  margin-bottom: 20px;
`;

const Paragraph = styled.p`
  line-height: 1.6;
`;

function PrivacyPolicy() {
  return (
    <Container>
      <Title>Privacy Policy</Title>
      <Section>
        <Title>1. Introduction</Title>
        <Paragraph>
          Welcome to CodingDevs! This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our
          website. Please read this privacy policy carefully.
        </Paragraph>
      </Section>
      <Section>
        <Title>2. Information We Collect</Title>
        <Paragraph>
          We may collect information about you in a variety of ways. The
          information we may collect includes:
        </Paragraph>
        <ul>
          <li>
            Personal Data: Personally identifiable information, such as your
            name and email address, that you voluntarily give to us when you
            register with the site or when you choose to participate in various
            activities related to the site.
          </li>
          <li>
            Derivative Data: Information our servers automatically collect when
            you access the site, such as your IP address, your browser type, and
            your operating system.
          </li>
        </ul>
      </Section>
      <Section>
        <Title>3. Use of Your Information</Title>
        <Paragraph>
          Having accurate information about you permits us to provide you with a
          smooth, efficient, and customized experience. Specifically, we may use
          information collected about you via the site to:
        </Paragraph>
        <ul>
          <li>Assist you in creating an account.</li>
          <li>
            Deliver targeted advertising, coupons, newsletters, and other
            information regarding promotions and the site to you.
          </li>
          <li>
            Compile anonymous statistical data and analysis for use internally
            or with third parties.
          </li>
        </ul>
      </Section>
      <Section>
        <Title>4. Disclosure of Your Information</Title>
        <Paragraph>
          We may share information we have collected about you in certain
          situations. Your information may be disclosed as follows:
        </Paragraph>
        <ul>
          <li>
            By Law or to Protect Rights: If we believe the release of
            information about you is necessary to respond to legal process, to
            investigate or remedy potential violations of our policies, or to
            protect the rights, property, and safety of others.
          </li>
          <li>
            Business Transfers: We may share or transfer your information in
            connection with, or during negotiations of, any merger, sale of
            company assets, financing, or acquisition of all or a portion of our
            business to another company.
          </li>
        </ul>
      </Section>
      <Section>
        <Title>5. Security of Your Information</Title>
        <Paragraph>
          We use administrative, technical, and physical security measures to
          help protect your personal information. While we have taken reasonable
          steps to secure the personal information you provide to us, please be
          aware that despite our efforts, no security measures are perfect or
          impenetrable, and no method of data transmission can be guaranteed
          against any interception or other type of misuse.
        </Paragraph>
      </Section>
      <Section>
        <Title>6. Changes to This Privacy Policy</Title>
        <Paragraph>
          We may update this Privacy Policy from time to time in order to
          reflect, for example, changes to our practices or for other
          operational, legal, or regulatory reasons.
        </Paragraph>
      </Section>
      <Section>
        <Title>7. Contact Us</Title>
        <Paragraph>
          If you have questions or comments about this Privacy Policy, please
          contact us at: privacy@codingdevs.com
        </Paragraph>
      </Section>
      <TermsAndConditions />
    </Container>
  );
}

export default PrivacyPolicy;
