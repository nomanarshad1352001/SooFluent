import LegalPage from "../components/LegalPage";
import { CONTACT } from "../config/site";
import { TERMS_SECTIONS } from "../data/content";

export default function Terms() {
  return (
    <LegalPage
      eyebrow="The fine print, in plain English"
      title="Terms of Use"
      intro="The agreement between you and SooFluent Inc. when you use the SooFluent app and website."
      updated="February 2026"
      note="SooFluent is preparing for public launch. These terms reflect the service as currently designed and may be refined before release (for example, to name a governing jurisdiction). The version published at launch will govern use of the released app."
      sections={TERMS_SECTIONS}
      contactEmail={CONTACT.support}
    />
  );
}
