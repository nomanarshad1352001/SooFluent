/* ─────────────────────────────────────────────────────────────
   SooFluent — site content (dummy/placeholder data, no backend)
   ───────────────────────────────────────────────────────────── */

export const IMG = {
  avatars: {
    minji:
      "https://images.pexels.com/photos/6497112/pexels-photo-6497112.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    lucas:
      "https://images.pexels.com/photos/27544052/pexels-photo-27544052.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    amara:
      "https://images.pexels.com/photos/6497114/pexels-photo-6497114.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    diego:
      "https://images.pexels.com/photos/6102841/pexels-photo-6102841.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    sele:
      "https://images.pexels.com/photos/7717254/pexels-photo-7717254.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    sofia:
      "https://images.pexels.com/photos/3756985/pexels-photo-3756985.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    peter:
      "https://images.pexels.com/photos/35490803/pexels-photo-35490803.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    maya:
      "https://images.pexels.com/photos/17888489/pexels-photo-17888489.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    jay:
      "https://images.pexels.com/photos/14950779/pexels-photo-14950779.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  lifestyle: {
    friendsCafe:
      "https://images.pexels.com/photos/4921522/pexels-photo-4921522.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    icedCoffee:
      "https://images.pexels.com/photos/9789458/pexels-photo-9789458.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    twoFriends:
      "https://images.pexels.com/photos/8937482/pexels-photo-8937482.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    cityTalk:
      "https://images.pexels.com/photos/6567521/pexels-photo-6567521.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    restaurant:
      "https://images.pexels.com/photos/20416754/pexels-photo-20416754.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    windowSeat:
      "https://images.pexels.com/photos/6340713/pexels-photo-6340713.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
  learn: {
    headphones:
      "https://images.pexels.com/photos/3786659/pexels-photo-3786659.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    cityHeadphones:
      "https://images.pexels.com/photos/16726135/pexels-photo-16726135.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    sunnyWalk:
      "https://images.pexels.com/photos/4908605/pexels-photo-4908605.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    redWall:
      "https://images.pexels.com/photos/14599039/pexels-photo-14599039.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    historyWall:
      "https://images.pexels.com/photos/39714008/pexels-photo-39714008.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  travel: {
    luggage:
      "https://images.pexels.com/photos/3885490/pexels-photo-3885490.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    airportWindow:
      "https://images.pexels.com/photos/18243465/pexels-photo-18243465.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    taxi:
      "https://images.pexels.com/photos/5225461/pexels-photo-5225461.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    benchWait:
      "https://images.pexels.com/photos/3885600/pexels-photo-3885600.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
  },
} as const;

/* ── Testimonials (placeholder) ─────────────────────────────── */
export type Testimonial = {
  name: string;
  place: string;
  level: string;
  quote: string;
  img: string;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Minji K.",
    place: "Seoul, South Korea",
    level: "B1",
    quote:
      "I've studied English for 10 years, but I always froze when someone asked me something. The respond practice changed everything — now answers just come out.",
    img: IMG.avatars.minji,
  },
  {
    name: "Lucas M.",
    place: "São Paulo, Brazil",
    level: "B2",
    quote:
      "The shadowing is addictive. I do one story on the bus every morning and my rhythm sounds noticeably more natural after just a few weeks.",
    img: IMG.avatars.lucas,
  },
  {
    name: "Amara T.",
    place: "Bangkok, Thailand",
    level: "A2",
    quote:
      "Finally an app that doesn't treat me like I'm studying for an exam. The stories feel like real life — coffee shops, airports, awkward small talk. I love it.",
    img: IMG.avatars.amara,
  },
  {
    name: "Diego R.",
    place: "Madrid, Spain",
    level: "B1",
    quote:
      "Tapping a word to hear it again, then recording myself — that loop is genius. My 'th' sounds finally stopped embarrassing me.",
    img: IMG.avatars.diego,
  },
  {
    name: "Sele N.",
    place: "Addis Ababa, Ethiopia",
    level: "B2",
    quote:
      "The AI feedback feels like a patient coach, not a robot. It tells me exactly which sound to fix, not just 'try again'.",
    img: IMG.avatars.sele,
  },
  {
    name: "Sofia V.",
    place: "Warsaw, Poland",
    level: "B1",
    quote:
      "Five-minute stories are perfect. I practice walking my dog and reply to the questions out loud. My mind doesn't go blank in meetings anymore.",
    img: IMG.avatars.sofia,
  },
  {
    name: "Peter N.",
    place: "Hanoi, Vietnam",
    level: "A2",
    quote:
      "I was shy to speak. SooFluent let me practice alone first — just me and my phone. Now I can introduce myself without rehearsing it first.",
    img: IMG.avatars.peter,
  },
  {
    name: "Maya A.",
    place: "Dubai, UAE",
    level: "B2",
    quote:
      "It feels less like studying and more like eavesdropping on real conversations — then being invited to join them.",
    img: IMG.avatars.maya,
  },
  {
    name: "Jay P.",
    place: "Taipei, Taiwan",
    level: "B1",
    quote:
      "The phrasal verbs in context are gold. I finally stopped translating everything word for word in my head.",
    img: IMG.avatars.jay,
  },
];

/* ── Levels ─────────────────────────────────────────────────── */
export const LEVELS = [
  {
    id: "a2",
    code: "A2",
    name: "Everyday English",
    color: "#4c9a6c",
    soft: "#e7f3eb",
    desc: "Short, gentle stories and everyday survival English. Build your ear and your confidence one small win at a time.",
    stories: ["Ordering coffee", "At the airport", "Meeting a neighbor", "A rainy morning"],
    line: "“Excuse me, could I get a latte to go?”",
  },
  {
    id: "b1",
    code: "B1",
    name: "Real-life flow",
    color: "#f59a2f",
    soft: "#fdf0dd",
    desc: "Natural conversations with more detail, feelings and opinions. Start thinking in English instead of translating.",
    stories: ["A surprise reunion", "The job interview", "Small talk at a party", "Plans that fell through"],
    line: "“Honestly, I wasn't sure about it at first, but it really grew on me.”",
  },
  {
    id: "b2",
    code: "B2",
    name: "Nuanced & fast",
    color: "#ff5a3c",
    soft: "#ffe9e5",
    desc: "Faster speech, richer vocabulary, subtle humor and disagreement. Train the reflexes you need at work and in life.",
    stories: ["The startup pitch", "Debate night", "An unexpected apology", "The long way home"],
    line: "“That's a fair point — though I'd argue it depends on the timing.”",
  },
] as const;

/* ── Situations — Real English in context ───────────────────── */
export const SITUATIONS = [
  { title: "At the café", img: IMG.lifestyle.icedCoffee, tag: "Small talk" },
  { title: "Travel & airports", img: IMG.travel.luggage, tag: "Asking for help" },
  { title: "Meeting friends", img: IMG.lifestyle.friendsCafe, tag: "Catching up" },
  { title: "Job interviews", img: IMG.lifestyle.restaurant, tag: "Talking about you" },
  { title: "Exploring the city", img: IMG.travel.taxi, tag: "Directions" },
  { title: "Dinner with colleagues", img: IMG.lifestyle.twoFriends, tag: "Stories & jokes" },
];

export const PHRASAL_VERBS = [
  "catch up",
  "run into",
  "put off",
  "figure out",
  "look forward to",
  "get along",
  "come over",
  "drop by",
];

/* ── Support / FAQ ──────────────────────────────────────────── */
export type Faq = { q: string; a: string };

export const FAQ_GROUPS: { id: string; title: string; blurb: string; items: Faq[] }[] = [
  {
    id: "getting-started",
    title: "Getting started",
    blurb: "What SooFluent is and how the method works.",
    items: [
      {
        q: "What is SooFluent?",
        a: "SooFluent is an English-learning app built around short, real-life stories. Every story guides you through three steps — Listen, Shadow, and Respond — so you move from understanding English to actually speaking it naturally.",
      },
      {
        q: "Which English levels are supported?",
        a: "Stories are available at three CEFR-aligned levels: A2 (everyday English), B1 (real-life flow) and B2 (nuanced, faster speech). You can switch levels at any time, and we recommend choosing the level where you understand most of the story but still meet new language.",
      },
      {
        q: "How much time do I need per day?",
        a: "Most stories take about five minutes. A complete Listen → Shadow → Respond session fits comfortably into 10–15 minutes, so it works on a commute, a walk, or a coffee break.",
      },
      {
        q: "When will the app be available?",
        a: "SooFluent is currently in its final pre-launch stage and will be available on the App Store and Google Play. Join the waitlist to be notified the moment it goes live.",
      },
    ],
  },
  {
    id: "account",
    title: "Account & profile",
    blurb: "Signing in, switching devices and managing your profile.",
    items: [
      {
        q: "Do I need an account to use SooFluent?",
        a: "An account keeps your progress, streaks and recordings synced across devices. You can browse some sample content first, then create an account when you're ready.",
      },
      {
        q: "How do I change my level or learning goal?",
        a: "Open Profile → Learning settings, and choose your level (A2, B1 or B2) and daily goal. Recommendations update immediately.",
      },
      {
        q: "Can I use SooFluent on more than one device?",
        a: "Yes. Sign in with the same account on your phone or tablet and your progress follows you.",
      },
      {
        q: "How do I delete my account?",
        a: "In the app, go to Profile → Settings → Delete account. This removes your profile and stored recordings from our systems, subject to the retention rules in our Privacy Policy. You can also email support@soofluent.com and we'll help.",
      },
    ],
  },
  {
    id: "subscription",
    title: "Subscription & billing",
    blurb: "Plans, trials, renewals and refunds.",
    items: [
      {
        q: "Is SooFluent free?",
        a: "SooFluent will offer free access to a rotating selection of stories, with an optional premium subscription unlocking the full library, unlimited pronunciation feedback and advanced progress tracking.",
      },
      {
        q: "How are subscriptions billed?",
        a: "Subscriptions are billed securely by the App Store or Google Play through the account you used to subscribe. We never see or store your payment card details.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "Manage or cancel anytime in your App Store / Google Play account settings under Subscriptions. You'll keep premium access until the end of the current billing period.",
      },
      {
        q: "How do I request a refund?",
        a: "Refunds are handled by the store you purchased from (Apple or Google) under their policies. If you're stuck, email us and we'll point you to the right place.",
      },
    ],
  },
  {
    id: "recording",
    title: "Recording & pronunciation",
    blurb: "Microphone, shadowing and AI feedback.",
    items: [
      {
        q: "Why does the app need microphone access?",
        a: "Shadowing and Respond practice work by recording your voice and giving you feedback on your pronunciation. The microphone is used only while you actively record, and you can deny access — the app will still work for listening.",
      },
      {
        q: "The app can't hear me. What should I check?",
        a: "First, confirm microphone permission for SooFluent is enabled in your device settings. Then check that nothing else is using the mic, move to a quieter spot, and hold the phone naturally — about 30 cm (12 in) from your mouth works best.",
      },
      {
        q: "How does pronunciation feedback work?",
        a: "When you record, your speech is analyzed to compare your sounds, rhythm and stress against natural reference pronunciation. Feedback appears instantly — including word-by-word detail — so you know exactly what to adjust on your next try.",
      },
      {
        q: "Are my voice recordings private?",
        a: "Yes. Recordings are processed to generate feedback and are handled according to our Privacy Policy. You can request deletion of your recordings at any time from Profile → Privacy, or by writing to privacy@soofluent.com.",
      },
    ],
  },
  {
    id: "technical",
    title: "Technical issues",
    blurb: "Crashes, audio problems and performance.",
    items: [
      {
        q: "The app crashed or froze. What can I do?",
        a: "Fully close and reopen the app first — that solves most issues. If it keeps happening, make sure you're on the latest version, then email support@soofluent.com with your device model, OS version and what you were doing. Screenshots help a lot.",
      },
      {
        q: "Stories are buffering or won't play.",
        a: "Check your connection, then try switching between Wi-Fi and mobile data. If a downloaded story won't play offline, remove and re-download it from the story menu.",
      },
      {
        q: "I found a bug. Where do I report it?",
        a: "Email support@soofluent.com with the steps to reproduce it, your device and app version (Profile → Settings → About shows the version). We read every report.",
      },
    ],
  },
];

/* ── Legal page scaffolding ─────────────────────────────────── */
export type LegalSection = { id: string; title: string; body: string[] };

export const PRIVACY_SECTIONS: LegalSection[] = [
  {
    id: "overview",
    title: "Overview",
    body: [
      "This Privacy Policy explains how SooFluent Inc. (“SooFluent”, “we”, “us”) handles information in connection with the SooFluent mobile application and soofluent.com (together, the “Service”). It is intended for our learners, and we've tried to write it in plain, clear language.",
      "We designed SooFluent to be a warm, safe place to practice speaking. That means collecting only what's needed to run the Service, being transparent about it, and giving you control over your information.",
    ],
  },
  {
    id: "information-we-collect",
    title: "Information we collect",
    body: [
      "Account information — such as your name, email address and chosen settings (e.g., your English level and daily goal) when you create an account.",
      "Learning activity — the stories you listen to, practice sessions you complete, streaks, and pronunciation scores, so we can show your progress and recommend the right stories.",
      "Voice recordings — when you use shadowing or response practice, your voice is recorded to provide pronunciation feedback. Recordings are captured only when you press record.",
      "Device & technical data — such as device model, operating system, app version, crash logs and diagnostic data that help us keep the Service reliable.",
      "Support communications — messages you send us through the website or email, so we can respond and follow up.",
    ],
  },
  {
    id: "how-we-use",
    title: "How we use information",
    body: [
      "To operate the core features of the Service — playing stories, recording shadowing attempts, and generating pronunciation feedback.",
      "To personalize your learning path, including level-appropriate stories and practice recommendations.",
      "To maintain, debug and improve the Service, including aggregated, de-identified analytics about how features are used.",
      "To communicate with you about your account, support requests, and — only with your consent — product updates and launch announcements.",
      "To meet legal obligations and protect the security of the Service and its users.",
    ],
  },
  {
    id: "voice-and-ai",
    title: "Voice recordings & AI-powered feedback",
    body: [
      "SooFluent provides AI-powered pronunciation feedback. To do this, audio you record while shadowing or responding may be processed by speech-analysis technology, which may include trusted third-party service providers acting on our instructions.",
      "Feedback is used to show you scores, highlight words to improve, and track your progress over time. We do not sell voice recordings, and we do not use them for advertising.",
      "You may request deletion of your recordings at any time using the in-app privacy controls (planned for launch) or by contacting privacy@soofluent.com.",
    ],
  },
  {
    id: "third-parties",
    title: "Third-party services",
    body: [
      "The Service relies on a small number of essential providers, such as app-store platforms (Apple App Store and Google Play) for distribution and billing, cloud hosting providers for infrastructure, and speech-processing providers for pronunciation feedback.",
      "Subscriptions and payments are processed by the app stores; we do not receive or store your payment card details.",
      "Each provider processes information only as needed to deliver their part of the Service and is bound by appropriate contractual protections.",
    ],
  },
  {
    id: "data-retention",
    title: "Data retention",
    body: [
      "We keep account and learning data for as long as your account is active so your progress history remains available to you.",
      "You can delete your account from the app settings. After deletion, we remove personal data within a reasonable period, except where we must retain limited information to meet legal, tax or security requirements.",
    ],
  },
  {
    id: "your-rights",
    title: "Your choices & rights",
    body: [
      "Depending on where you live, you may have rights to access, correct, export or delete your personal data, and to object to or restrict certain processing.",
      "Microphone access is optional and can be turned off in your device settings at any time; listening features will still work.",
      "To exercise any of these rights, contact us at privacy@soofluent.com. We may need to verify your identity before acting on a request.",
    ],
  },
  {
    id: "children",
    title: "Children's privacy",
    body: [
      "SooFluent is intended for users aged 13 and older (or the minimum age required in your country). We do not knowingly collect personal information from children below that age. If you believe a child has provided us information, contact us and we will delete it.",
    ],
  },
  {
    id: "security",
    title: "Security",
    body: [
      "We use industry-standard safeguards — including encryption in transit and access controls — to protect information. No method of transmission or storage is perfectly secure, but we work hard to keep your data safe.",
    ],
  },
  {
    id: "changes",
    title: "Changes to this policy",
    body: [
      "We may update this Privacy Policy as the Service evolves, including as features are finalized for launch. When we make material changes, we'll update the “Last updated” date below and, where appropriate, notify you in the app or by email.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      "SooFluent Inc. · Email: privacy@soofluent.com",
      "If you have questions, concerns or requests about your information, we're happy to help.",
    ],
  },
];

export const TERMS_SECTIONS: LegalSection[] = [
  {
    id: "acceptance",
    title: "Acceptance of these Terms",
    body: [
      "These Terms of Use (“Terms”) form an agreement between you and SooFluent Inc. (“SooFluent”, “we”, “us”) governing your use of the SooFluent mobile application, soofluent.com and related services (the “Service”).",
      "By creating an account or using the Service, you agree to these Terms. If you do not agree, please do not use the Service.",
    ],
  },
  {
    id: "service",
    title: "The Service",
    body: [
      "SooFluent provides self-guided English practice built around short stories: listening, shadow-reading (repeating aloud), pronunciation feedback and real-life response practice.",
      "SooFluent is an educational aid. It helps you practice; it does not guarantee any particular level of fluency, exam result or communication outcome.",
      "We may add, change or remove features and content over time as we improve the Service.",
    ],
  },
  {
    id: "accounts",
    title: "Accounts",
    body: [
      "You are responsible for the activity on your account and for keeping your sign-in credentials secure.",
      "You must provide accurate information and be at least 13 years old (or the minimum age in your country) to use the Service.",
      "You may delete your account at any time in the app settings.",
    ],
  },
  {
    id: "subscriptions",
    title: "Subscriptions & billing",
    body: [
      "Some features require a paid subscription purchased through the Apple App Store or Google Play. Pricing, billing, renewal and cancellation are managed by your app store account.",
      "Subscriptions renew automatically unless cancelled before the renewal date. You can cancel anytime in your store account settings; access continues until the end of the paid period.",
      "Refunds are handled by the applicable app store under its policies.",
    ],
  },
  {
    id: "your-content",
    title: "Your content & recordings",
    body: [
      "When you use speaking features, you create voice recordings. You retain ownership of your recordings.",
      "You grant us a limited license to process your recordings solely to operate and improve the Service for you — for example, to generate pronunciation feedback and show your progress — as described in our Privacy Policy.",
      "You agree your recordings will not contain unlawful, abusive or inappropriate material, including personal information about other people.",
    ],
  },
  {
    id: "acceptable-use",
    title: "Acceptable use",
    body: [
      "Don't misuse the Service. For example: don't try to disrupt or probe the Service or its security; don't scrape, copy or redistribute our content; don't use the Service to harass others or for commercial purposes without permission.",
      "We may suspend or terminate accounts that violate these Terms or that put other users or the Service at risk.",
    ],
  },
  {
    id: "intellectual-property",
    title: "Intellectual property",
    body: [
      "The Service — including stories, audio, exercises, software, design, and the SooFluent name and logo — is owned by or licensed to SooFluent Inc. and protected by intellectual property laws.",
      "We grant you a personal, non-exclusive, non-transferable license to use the Service for your own learning, subject to these Terms.",
    ],
  },
  {
    id: "disclaimers",
    title: "Disclaimers",
    body: [
      "The Service is provided “as is” and “as available”. To the maximum extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose and non-infringement.",
      "Pronunciation feedback is generated automatically and may occasionally be inaccurate; treat it as practice guidance, not professional assessment.",
    ],
  },
  {
    id: "liability",
    title: "Limitation of liability",
    body: [
      "To the maximum extent permitted by law, SooFluent Inc. will not be liable for indirect, incidental, special, consequential or punitive damages, or for lost profits, data or goodwill, arising from your use of the Service.",
      "Our total liability for any claim relating to the Service is limited to the amount you paid us (if any) in the twelve months before the claim, or the minimum permitted by applicable law.",
    ],
  },
  {
    id: "termination",
    title: "Termination",
    body: [
      "You can stop using the Service and delete your account at any time. We may suspend or end access for violations of these Terms or where required for legal or security reasons.",
      "On termination, the licenses in these Terms end, though sections that by nature should survive (such as intellectual property, disclaimers and liability limits) continue to apply.",
    ],
  },
  {
    id: "changes",
    title: "Changes to these Terms",
    body: [
      "We may update these Terms from time to time. If changes are material, we'll provide reasonable notice (for example, in the app or by email). Continued use of the Service after the changes take effect means you accept the updated Terms.",
    ],
  },
  {
    id: "contact",
    title: "Contact us",
    body: [
      "Questions about these Terms? Email us at support@soofluent.com or write to SooFluent Inc.",
    ],
  },
];

/* ── Method steps ───────────────────────────────────────────── */
export const KARAOKE_SENTENCE =
  "Sometimes the smallest conversations can change everything.".split(" ");

/* ── Story library (placeholder catalogue) ──────────────────── */
export type Story = {
  title: string;
  blurb: string;
  level: "A2" | "B1" | "B2";
  category: string;
  minutes: number;
  img: string;
};

export const CATEGORIES = ["Everyday", "Travel", "Work", "Friends", "Food", "City"] as const;

export const STORIES: Story[] = [
  { title: "Ordering coffee", blurb: "Size, milk, name on the cup — the five-second dance every learner deserves to ace.", level: "A2", category: "Food", minutes: 3, img: IMG.lifestyle.icedCoffee },
  { title: "At the airport", blurb: "Check-in, security, gate changes — travel English in its natural habitat.", level: "A2", category: "Travel", minutes: 4, img: IMG.travel.airportWindow },
  { title: "Meeting a neighbor", blurb: "Hallway small talk, packages and awkward smiles. The gentlest way to start.", level: "A2", category: "Everyday", minutes: 3, img: IMG.lifestyle.cityTalk },
  { title: "A rainy morning", blurb: "Commuters, umbrellas and a stranger's kindness — weather talk that isn't boring.", level: "A2", category: "Everyday", minutes: 3, img: IMG.lifestyle.windowSeat },
  { title: "The market run", blurb: "Bargaining, sampling and chatting with vendors — food English with flavor.", level: "A2", category: "Food", minutes: 4, img: IMG.lifestyle.friendsCafe },
  { title: "A surprise reunion", blurb: "Two old friends collide at a café and play catch-up at full emotional speed.", level: "B1", category: "Friends", minutes: 5, img: IMG.lifestyle.restaurant },
  { title: "The job interview", blurb: "“Tell me about yourself” — the answer that sounds confident, not rehearsed.", level: "B1", category: "Work", minutes: 6, img: IMG.lifestyle.twoFriends },
  { title: "Plans that fell through", blurb: "A canceled trip becomes a lesson in disappointment — and the phrases to carry it.", level: "B1", category: "Friends", minutes: 5, img: IMG.travel.benchWait },
  { title: "Small talk at a party", blurb: "Entering a room of strangers and finding your first real conversation.", level: "B1", category: "Friends", minutes: 5, img: IMG.lifestyle.friendsCafe },
  { title: "Lost in the old town", blurb: "Asking for directions, misunderstanding them, and trying again anyway.", level: "B1", category: "City", minutes: 5, img: IMG.travel.taxi },
  { title: "The startup pitch", blurb: "Numbers, vision and pushback — fast speech and sharper questions.", level: "B2", category: "Work", minutes: 7, img: IMG.lifestyle.windowSeat },
  { title: "Debate night", blurb: "Two friends disagree about everything and stay friends. Nuance, humor, hedging.", level: "B2", category: "Friends", minutes: 7, img: IMG.lifestyle.twoFriends },
  { title: "An unexpected apology", blurb: "Saying sorry like you mean it — tone, timing and the right amount of detail.", level: "B2", category: "Everyday", minutes: 6, img: IMG.lifestyle.cityTalk },
  { title: "The long way home", blurb: "A late train, a phone call, and the English of thinking out loud.", level: "B2", category: "City", minutes: 7, img: IMG.travel.luggage },
  { title: "The mystery package", blurb: "A delivery mix-up turns into a detective story — and a neighborhood connection.", level: "B1", category: "Everyday", minutes: 5, img: IMG.lifestyle.windowSeat },
];

/* ── Journal articles ───────────────────────────────────────── */
export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  minutes: number;
  date: string;
  cover: string;
  pullQuote: string;
  body: { heading?: string; paragraphs: string[] }[];
};

export const ARTICLES: Article[] = [
  {
    slug: "mind-goes-blank",
    title: "Why your mind goes blank — and how to train the respond reflex",
    excerpt:
      "You understood every word. The answer exists somewhere. So why does it vanish the moment someone looks at you? The answer is a skill almost nobody practices.",
    tag: "The science",
    minutes: 6,
    date: "Feb 2026",
    cover: IMG.lifestyle.restaurant,
    pullQuote: "Fluency isn't a bigger brain. It's a faster reflex.",
    body: [
      {
        paragraphs: [
          "It happens to almost every learner. You're in a meeting, a café, a hallway — you follow everything, you're nodding, you're basically fluent. Then someone turns to you and asks something simple: “So, what do you think?”",
          "And your mind goes blank.",
          "The words you knew five seconds ago are suddenly filed somewhere you can't reach. You manage “well, maybe...” and the conversation moves on without you. Later, in the shower, the perfect answer arrives — three hours too late.",
        ],
      },
      {
        heading: "Understanding and answering are different skills",
        paragraphs: [
          "Most English learning trains recognition: reading, listening, choosing the right option. Recognition lives in one part of your memory. Responding — producing language on demand, under time pressure, while someone waits — lives in another.",
          "Linguists call the second one retrieval. The uncomfortable truth is that retrieval doesn't improve just because recognition does. You can grow your vocabulary for years and still freeze, because the skill you never trained is the one the real world asks for.",
        ],
      },
      {
        heading: "The respond reflex is trainable",
        paragraphs: [
          "The fix is almost comically simple: practice being asked. When you regularly answer real questions out loud — “What would you do?”, “How was your weekend?”, “Why do you think that?” — your brain builds the shortcut between having a thought and saying it.",
          "Each answer is a small rehearsal for a future real moment. After enough repetitions, the panic window shrinks. The answer arrives while it still matters.",
          "This is exactly why every SooFluent story ends with your turn: a real-life question, your real voice, and friendly feedback. Not to grade you — to train the reflex until it belongs to you.",
        ],
      },
    ],
  },
  {
    slug: "shadowing-explained",
    title: "Shadowing: the speaking technique hiding in plain sight",
    excerpt:
      "Interpreters use it to stay sharp. Polyglots swear by it. Yet most learners have never tried the simplest speaking workout there is: repeating, out loud, right behind the voice.",
    tag: "Technique",
    minutes: 5,
    date: "Feb 2026",
    cover: IMG.learn.sunnyWalk,
    pullQuote: "You can't sound like a language until your mouth has rehearsed it.",
    body: [
      {
        paragraphs: [
          "Shadowing means listening to speech and repeating it almost simultaneously, like an echo — or, for beginners, right after each line. No writing, no analysis, no translating. You hear it, you say it.",
          "It feels too simple to be powerful. But watch what it actually trains.",
        ],
      },
      {
        heading: "Your mouth is part of your English",
        paragraphs: [
          "Pronunciation isn't only about sounds you know — it's about movements your mouth hasn't made enough. Shadowing is repetition with direction: rhythm, stress, linking (“gonna”, “wanna”, “didja”) and the rise and fall of real sentences all get rehearsed at once.",
          "It's also honest. The first time you shadow a natural-speed sentence and trip over three words, you've found exactly where your listening ends and your speaking begins. That gap is where progress lives.",
        ],
      },
      {
        heading: "How to shadow without hating it",
        paragraphs: [
          "Start short — one story, a few minutes. First, just listen once. Then replay line by line and copy the speaker's melody, not just their words. Record yourself at least once and compare; it's uncomfortable for about a week and addictive after that.",
          "SooFluent builds this loop into every story: listen, shadow with word-by-word taps when you get stuck, and get instant feedback on rhythm and clarity — so your imitation gets measurably better, one take at a time.",
        ],
      },
    ],
  },
  {
    slug: "five-minutes",
    title: "Five minutes a day is enough — if it's the right five minutes",
    excerpt:
      "Motivation is unreliable. Habits are portable. A short daily practice beats the heroic weekend study session — here's the minimum effective dose.",
    tag: "Habits",
    minutes: 4,
    date: "Jan 2026",
    cover: IMG.learn.headphones,
    pullQuote: "Consistency isn't a personality trait. It's a small enough promise.",
    body: [
      {
        paragraphs: [
          "Every January, millions of learners schedule two-hour study blocks. By March, almost all of them are having “sm0oth” relationships with their calendars — and not with English.",
          "The research-y way to say it: spaced, repeated exposure beats massed cramming. The human way to say it: you'll actually do five minutes.",
        ],
      },
      {
        heading: "What a five-minute dose should contain",
        paragraphs: [
          "Not all five minutes are equal. Scrolling flashcards for five minutes trains your eyes. The ideal micro-session touches all three skills most learners neglect: hearing something natural, repeating it out loud, and answering a question with your own voice.",
          "That's the anatomy of one SooFluent story — crafted to fit a commute, a queue, or one coffee. Small enough that you never break the chain, complete enough that the chain actually changes you.",
        ],
      },
      {
        heading: "Protect the chain, not the intensity",
        paragraphs: [
          "Missed a day? Do two minutes the next. Traveling? Offline mode, one story. The metric that matters isn't minutes logged — it's days alive. A 60-day streak of five minutes quietly outperforms every abandoned bootcamp.",
        ],
      },
    ],
  },
  {
    slug: "phrasal-verbs-scenes",
    title: "Phrasal verbs aren't vocabulary. They're scenes.",
    excerpt:
      "“Figure out”, “catch up”, “put off” — the glue of everyday English. Memorizing them from a list almost never works. Meeting them inside a moment almost always does.",
    tag: "Language",
    minutes: 5,
    date: "Jan 2026",
    cover: IMG.travel.benchWait,
    pullQuote: "You don't remember “put off”. You remember the moody Monday it belonged to.",
    body: [
      {
        paragraphs: [
          "Ask an intermediate learner what “put off” means and there's a chance they'll recite “to postpone”. Ask them to use it in a sentence and the room gets quiet.",
          "Phrasal verbs are famously slippery: the meaning hides in the relationship between verb and particle, and one particle (“up”!) can change everything. Lists make them look learnable. Life disagrees.",
        ],
      },
      {
        heading: "Memory loves context",
        paragraphs: [
          "Your brain is a far better story-keeper than list-keeper. When you hear a colleague say “Can we put off our meeting until Friday? I just ran into the client.” — with the sigh, the calendar, the office noise — the phrase gets glued to a scene. Next Friday, your own calendar will recall it for you.",
          "That's why SooFluent hides everyday expressions inside five-minute stories instead of showing you a deck of definitions: you absorb them the way native speakers carry them — attached to moments.",
        ],
      },
      {
        heading: "From hearing to using",
        paragraphs: [
          "The journey has three stops: notice the expression in the story, say it aloud while shadowing the line, and then — this is the one everyone skips — answer a question where it actually fits. Use it once in your own voice and it's no longer vocabulary. It's yours.",
        ],
      },
    ],
  },
  {
    slug: "a2-to-b2",
    title: "From A2 to B2: what actually changes when you level up",
    excerpt:
      "Levels aren't bigger words and longer sentences. Each step changes what English feels like — here's an honest map of the road from careful to comfortable.",
    tag: "Levels",
    minutes: 6,
    date: "Dec 2025",
    cover: IMG.learn.historyWall,
    pullQuote: "The real jump from A2 to B2 isn't vocabulary. It's tolerance for uncertainty.",
    body: [
      {
        paragraphs: [
          "CEFR levels can feel like airport codes: mysterious letters separating you from a destination. But they're really descriptions of a feeling — what it's like to live inside the language at each stage.",
        ],
      },
      {
        heading: "A2 — survival and sincerity",
        paragraphs: [
          "At A2, English is a toolkit: you can order, ask, thank, apologize. Sentences are short and true. The skill to build is confidence — saying simple things smoothly, not reaching for complicated ones. Gentle stories with clear structure are your best friend.",
        ],
      },
      {
        heading: "B1 — opinions and flow",
        paragraphs: [
          "B1 is where the language starts telling you things you didn't expect: feelings, reasons, side stories. You begin to think in English because translating can't keep up. Practice shifts toward natural pace, connected sentences, and answering questions with more than one line.",
        ],
      },
      {
        heading: "B2 — nuance and speed",
        paragraphs: [
          "At B2, English gets fast and cheeky: jokes, hedging (“that's a fair point, but...”), disagreement without conflict. The final skill is taste — choosing the phrase that fits the moment. Rich, fast stories with real pushback stretch exactly that muscle.",
        ],
      },
      {
        paragraphs: [
          "Wherever you are on the map, the advice is the same: meet English one small step above comfortable, every day, out loud. SooFluent labels every story by level so your daily five minutes is always the right size of hard.",
        ],
      },
    ],
  },
];

/* ── Pricing ────────────────────────────────────────────────── */
export type Plan = {
  id: string;
  name: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  highlight?: boolean;
  note?: string;
  cta: string;
  perks: string[];
};

export const PLANS: Plan[] = [
  {
    id: "free",
    name: "Free",
    tagline: "A taste of the method",
    monthly: 0,
    yearly: 0,
    cta: "Start at launch",
    perks: ["Rotating story of the week", "Listen & shadow practice", "Word-by-word tappable audio", "3 AI feedback checks a day", "Progress across A2–B2"],
  },
  {
    id: "premium",
    name: "Premium",
    tagline: "The full SooFluent",
    monthly: 7.99,
    yearly: 4.99,
    highlight: true,
    note: "Save ~38% billed yearly",
    cta: "Join the waitlist",
    perks: ["Unlimited stories — full library", "Unlimited AI pronunciation feedback", "Respond practice with scores", "Offline downloads", "Streaks & speaking stats", "New situation packs monthly", "Early access to new features"],
  },
  {
    id: "founder",
    name: "Founding Member",
    tagline: "One payment, forever",
    monthly: null,
    yearly: null,
    note: "Waitlist only — limited",
    cta: "Claim the offer",
    perks: ["Everything in Premium, for life", "Founding member badge in-app", "Vote on future story packs", "Your name in the credits wall", "Lock in before launch pricing"],
  },
];

export const COMPARISON: { feature: string; free: string | boolean; premium: string | boolean; founder: string | boolean }[] = [
  { feature: "Real-life stories", free: "Story of the week", premium: "Unlimited", founder: "Unlimited" },
  { feature: "All levels (A2–B2)", free: true, premium: true, founder: true },
  { feature: "Shadowing & recording", free: true, premium: true, founder: true },
  { feature: "Word-by-word pronunciation", free: true, premium: true, founder: true },
  { feature: "AI feedback checks", free: "3 / day", premium: "Unlimited", founder: "Unlimited" },
  { feature: "Respond practice scores", free: false, premium: true, founder: true },
  { feature: "Offline downloads", free: false, premium: true, founder: true },
  { feature: "New packs every month", free: false, premium: true, founder: true },
  { feature: "Founding badge & credits", free: false, premium: false, founder: true },
  { feature: "Vote on future content", free: false, premium: false, founder: true },
];

/* ── Roadmap ────────────────────────────────────────────────── */
export const ROADMAP = [
  {
    when: "Now",
    status: "Polishing",
    tint: "#ff5a3c",
    title: "The final stretch",
    items: ["Beta testing with real learners", "Recording the story library", "Tuning AI pronunciation feedback", "App store review prep"],
  },
  {
    when: "Launch · 2026",
    status: "On track",
    tint: "#f59a2f",
    title: "SooFluent 1.0 — iOS & Android",
    items: ["100+ stories across A2, B1 & B2", "Listen → Shadow → Respond on every story", "Word-by-word tappable audio", "Streaks, stats & offline mode"],
  },
  {
    when: "After launch",
    status: "Planned",
    tint: "#4c9a6c",
    title: "The community chapter",
    items: ["Monthly themed situation packs", "Weekly reply challenges", "Reading clubs & comment walls", "Family & classroom plans"],
  },
  {
    when: "Exploring",
    status: "Dreaming",
    tint: "#5b8def",
    title: "The far horizon",
    items: ["Natural conversation mode", "C1 advanced track", "Web companion app", "More interface languages"],
  },
] as const;

/* ── Press kit ──────────────────────────────────────────────── */
export const PRESS_FACTS = [
  { k: "Founded", v: "2025" },
  { k: "Company", v: "SooFluent Inc." },
  { k: "Focus", v: "Consumer language learning" },
  { k: "Platforms", v: "iOS & Android (2026)" },
  { k: "Method", v: "Listen · Shadow · Respond" },
  { k: "Press contact", v: "hello@soofluent.com" },
] as const;

export const BRAND_COLORS = [
  { name: "Coral", hex: "#FF5A3C" },
  { name: "Apricot", hex: "#FFB25E" },
  { name: "Ivory", hex: "#FBF6EE" },
  { name: "Warm Ink", hex: "#241C14" },
  { name: "Leaf", hex: "#4C9A6C" },
  { name: "Sky", hex: "#5B8DEF" },
];

