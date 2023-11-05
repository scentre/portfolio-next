import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Section,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
const ContactFormEmail = ({
  message,
  email,
}: {
  message: string;
  email: string;
}) => {
  return (
    <Html>
      <Head></Head>

      <Preview>New message from your portfolio site</Preview>

      <Tailwind>
        <Body className="bg-gray-100">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">
                you received the following message from the contact form
              </Heading>

              <Text>{message}</Text>

              <Hr />

              <Text> the senders email is : {email}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
