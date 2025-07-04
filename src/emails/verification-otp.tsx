import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface VerificationOTPEmailProps {
    verificationCode: string;
}

const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : '';

export default function VerificationOTPEmail({
    verificationCode,
}: VerificationOTPEmailProps) {
    return (
        <Html>
            <Head />
            <Body style={main}>
                <Preview>YouFlow Email Verification</Preview>
                <Container style={container}>
                    <Section style={coverSection}>
                        <Section style={imageSection}>
                            <Img
                                src={`${baseUrl}/static/aws-logo.png`}
                                width="75"
                                height="45"
                                alt="YouFlow Logo"
                            />
                        </Section>
                        <Section style={upperSection}>
                            <Heading style={h1}>Verify your email address</Heading>
                            <Text style={mainText}>
                                Thank you for signing up with <strong>YouFlow</strong>! To complete your account setup, please verify your email address.
                                Enter the verification code below when prompted. If you didn’t request this, you can safely ignore this email.
                            </Text>
                            <Section style={verificationSection}>
                                <Text style={verifyText}>Verification code</Text>

                                <Text style={codeText}>{verificationCode}</Text>
                                <Text style={validityText}>
                                    (This code is valid for 10 minutes)
                                </Text>
                            </Section>
                        </Section>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#fff',
    color: '#212121',
};

const container = {
    padding: '20px',
    margin: '0 auto',
    backgroundColor: '#eee',
};

const h1 = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '15px',
};

const link = {
    color: '#2754C5',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    textDecoration: 'underline',
};

const text = {
    color: '#333',
    fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
    fontSize: '14px',
    margin: '24px 0',
};

const imageSection = {
    backgroundColor: '#252f3d',
    display: 'flex',
    padding: '20px 0',
    alignItems: 'center',
    justifyContent: 'center',
};

const coverSection = { backgroundColor: '#fff' };

const upperSection = { padding: '25px 35px' };

const lowerSection = { padding: '25px 35px' };

const footerText = {
    ...text,
    fontSize: '12px',
    padding: '0 20px',
};

const verifyText = {
    ...text,
    margin: 0,
    fontWeight: 'bold',
    textAlign: 'center' as const,
};

const codeText = {
    ...text,
    fontWeight: 'bold',
    fontSize: '36px',
    margin: '10px 0',
    textAlign: 'center' as const,
};

const validityText = {
    ...text,
    margin: '0px',
    textAlign: 'center' as const,
};

const verificationSection = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const mainText = { ...text, marginBottom: '14px' };

const cautionText = { ...text, margin: '0px' };
