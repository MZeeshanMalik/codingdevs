import {
  FormWrapper,
  Input,
  InputGroup,
  Label,
  SubmitButton,
  TextArea,
} from "./contactstyles";

const ContactForm = () => {
  return (
    <FormWrapper>
      <h2>Contact Us</h2>

      <InputGroup>
        <Label>Full Name</Label>
        <Input type="text" placeholder="First Name" />
        <Input
          type="text"
          placeholder="Last Name"
          style={{ marginTop: "10px" }}
        />
      </InputGroup>

      <InputGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Your Email" />
      </InputGroup>

      <InputGroup>
        <Label>Message</Label>
        <TextArea placeholder="Your Message"></TextArea>
      </InputGroup>

      <SubmitButton type="submit">Submit</SubmitButton>
    </FormWrapper>
  );
};

export default ContactForm;
