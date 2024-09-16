import React from "react";
import styled from "styled-components";

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

function TermsAndConditions() {
  return (
    <Container>
      <Title>Terms and Conditions</Title>
      <Section>
        <Title>1. Introduction</Title>
        <Paragraph>
          Welcome to CodingDevs! These Terms and Conditions govern your use of
          our website. By accessing or using the site, you agree to comply with
          and be bound by these Terms and Conditions.
        </Paragraph>
      </Section>
      <Section>
        <Title>2. User Responsibilities</Title>
        <Paragraph>
          As a user, you agree to use the site only for lawful purposes and in a
          manner that does not infringe the rights of, restrict, or inhibit
          anyone else’s use and enjoyment of the site. Prohibited behavior
          includes harassing or causing distress or inconvenience to any person.
        </Paragraph>
      </Section>
      <Section>
        <Title>3. Intellectual Property</Title>
        <Paragraph>
          All content, trademarks, and other intellectual property on the site
          are owned by or licensed to CodingDevs. You are granted a limited,
          non-exclusive, non-transferable license to access and use the site for
          personal, non-commercial use only.
        </Paragraph>
      </Section>
      <Section>
        <Title>4. Limitation of Liability</Title>
        <Paragraph>
          CodingDevs will not be liable for any indirect, incidental,
          consequential, or punitive damages arising out of or related to your
          use of the site. We are not responsible for any errors or omissions in
          the content provided on the site.
        </Paragraph>
      </Section>
      <Section>
        <Title>5. Termination</Title>
        <Paragraph>
          We reserve the right to terminate or suspend your access to the site
          at our sole discretion, without notice, for conduct that we believe
          violates these Terms and Conditions or is harmful to the site or other
          users.
        </Paragraph>
      </Section>
      <Section>
        <Title>6. Governing Law</Title>
        <Paragraph>
          These Terms and Conditions are governed by and construed in accordance
          with the laws of the jurisdiction in which CodingDevs operates,
          without regard to its conflict of law principles.
        </Paragraph>
      </Section>
      <Section>
        <Title>7. Changes to These Terms</Title>
        <Paragraph>
          We may update these Terms and Conditions from time to time. We
          encourage you to review these terms periodically to stay informed
          about any changes. Your continued use of the site after any
          modifications to these terms will constitute your acknowledgment of
          the modifications and your consent to abide by and be bound by the
          modified terms.
        </Paragraph>
      </Section>
      <Section>
        <Title>8. Contact Us</Title>
        <Paragraph>
          If you have any questions about these Terms and Conditions, please
          contact us at: support@codingdevs.com
        </Paragraph>
      </Section>
    </Container>
  );
}

export default TermsAndConditions;
