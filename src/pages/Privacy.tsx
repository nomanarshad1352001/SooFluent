import LegalPage from "../components/LegalPage";
import { CONTACT } from "../config/site";
import { PRIVACY_SECTIONS } from "../data/content";

export default function Privacy() {
  return (
    <LegalPage
      eyebrow="Your privacy"
      title="Privacy Policy"
      intro="How SooFluent handles your information — accounts, voice recordings, AI-powered pronunciation feedback and everything in between."
      updated="February 2026"
      note="SooFluent is preparing for public launch. This policy describes the service as currently designed and will be reviewed and finalized together with the app's release — including the exact third-party providers used. Where features or practices change, this page will be updated before they go live."
      sections={PRIVACY_SECTIONS}
      contactEmail={CONTACT.privacy}
    />
  );
}
