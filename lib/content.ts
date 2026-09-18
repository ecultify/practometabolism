/**
 * Single source of truth for every word on the page.
 * Transcribed verbatim from "Practo_Lilly_Microsite_Script_Final 1.docx".
 * Reference numbers live in `refs` arrays so they render as real <sup>
 * links to the citation list rather than unicode characters.
 *
 * Do not phrase-edit anything in this file without client sign-off.
 */

export type Ref = number;
export interface Line {
  text: string;
  refs?: Ref[];
}

export const nav = {
  brand: 'Practo',
  links: [
    { label: 'Metabolic health', href: '#understand' },
    { label: 'Your health dynamics', href: '#dynamics' },
    { label: 'Health in balance', href: '#balance' },
    { label: 'Your health numbers', href: '#numbers' },
    { label: 'Check what matters', href: '#check' },
  ],
};

export const screen1 = {
  eyebrow: 'Metabolic health awareness',
  headline: 'Health starts with you.',
  subhead:
    'Underneath the everyday things, like what you eat, how you move and how you sleep, your body is always managing sugar, fat and energy. That’s what we mean by metabolic health. It isn’t one test or one number. It’s all of these working together.',
  primaryCta: 'Know More',
  secondaryCta: 'Take the risk assessment',
  readings: [
    'Blood pressure',
    'Blood sugar',
    'Waist circumference',
    'Cholesterol',
    'Body weight',
  ],
  note: '[Know More] opens the Understand Your Metabolism section below. [Take the risk assessment] scrolls to Screen 7.',
};

export const band = {
  eyebrow: 'Metabolic health covers',
  headline: 'Five measures',
  caption: 'No single one tells the whole story',
  listLabel: 'What it includes',
  measures: [
    'Blood sugar',
    'Cholesterol',
    'Body weight',
    'Blood pressure',
    'Waist circumference',
  ],
};

export const explainer = {
  headline: 'Understand your metabolism',
  subhead: 'What metabolic health is, what it includes, and why it matters. A 2-minute read.',
  openLabel: 'Read +',
  closeLabel: 'Close –',
  closeExplainer: 'Close explainer',
  prev: 'Previous',
  next: 'Next',
  note: 'Sits directly below Screen 1 and is collapsed by default. It opens from [Know More] or the “What is it?” link in the header. Inside are four tabs, with [Previous] and [Next] to move between them.',
  tabs: [
    {
      id: 'what',
      label: '1. What is metabolic health?',
      blocks: [
        {
          kind: 'body' as const,
          line: {
            text: 'Metabolic health is how well your body handles the sugar, fat and energy it gets from food, day to day. It is an umbrella term. It isn’t one condition and it isn’t one number. Several everyday health measures together help show the picture.',
            refs: [1],
          },
        },
      ],
    },
    {
      id: 'inclusions',
      label: '2. Inclusions & exclusions',
      blocks: [
        { kind: 'subhead' as const, line: { text: 'Includes things like' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Blood sugar' },
            { text: 'Cholesterol and triglycerides' },
            { text: 'Blood pressure' },
            { text: 'Body weight' },
            { text: 'Waist circumference, which shows where the body stores fat' },
          ],
        },
        { kind: 'subhead' as const, line: { text: 'Doesn’t mean' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Any one of these measures on its own' },
            { text: 'The same thing as body weight' },
            {
              text: 'Something only people who are overweight need to think about. Changes can also happen at a healthy weight.',
              refs: [2],
            },
            { text: 'A diagnosis. Only a doctor can tell you what your own numbers mean.' },
          ],
        },
      ],
    },
    {
      id: 'benefits',
      label: '3. Benefits of good metabolic health',
      blocks: [
        { kind: 'body' as const, line: { text: 'When these measures stay in a healthy range, it is linked with:' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'A lower long-term risk of type 2 diabetes', refs: [1] },
            { text: 'A lower long-term risk of heart and blood vessel disease', refs: [1] },
            { text: 'Everyday habits that support it: food, activity, sleep and stress all play a part' },
          ],
        },
      ],
    },
    {
      id: 'downstream',
      label: '4. Downstream effects',
      blocks: [
        { kind: 'subhead' as const, line: { text: 'If metabolic health isn’t in good shape' } },
        { kind: 'body' as const, line: { text: 'Over time, it can influence the risk of:' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Type 2 diabetes', refs: [1] },
            { text: 'Heart and blood vessel disease', refs: [1] },
            { text: 'Fatty liver disease', refs: [3] },
          ],
        },
        {
          kind: 'body' as const,
          line: {
            text: 'These conditions often occur together, which is why the measures are usually looked at as a group.',
            refs: [1],
          },
        },
      ],
    },
  ],
};

export const screen2 = {
  eyebrow: 'Metabolic health matters',
  headline: 'Take a closer look at your health',
  subhead: 'Looking beyond weight to overall wellbeing.',
  cards: [
    {
      title: 'Benefits: good metabolic health is linked with',
      items: [
        { text: 'A lower long-term risk of type 2 diabetes', refs: [1] },
        { text: 'A lower long-term risk of heart and blood vessel disease', refs: [1] },
      ],
    },
    {
      title: 'Downstream effects: poor metabolic health can influence the risk of',
      items: [
        { text: 'Type 2 diabetes', refs: [1] },
        { text: 'Heart and blood vessel disease, and other related conditions', refs: [1, 3] },
      ],
    },
  ],
  cta: 'Read the full explainer',
  note: 'Always visible, even when the hidden section is closed. [Read the full explainer] opens the hidden section. Image: no photography. Two simple cards side by side.',
};

export const screen3 = {
  eyebrow: 'Your health dynamics',
  headline: 'Understand how your body manages sugar, fat and energy',
  cards: [
    {
      title: 'Blood sugar',
      body: {
        text: 'Insulin helps the body use the sugar that comes from food. Sometimes this works less efficiently than before, and it can happen without any obvious change in weight.',
        refs: [4, 2],
      },
      image: '/images/illustrations/blood-sugar.webp',
      alt: 'Illustration of sugar from food entering a body cell, with insulin acting as the key',
    },
    {
      title: 'Where fat is stored',
      body: {
        text: 'Fat can also build up inside organs, even in people who aren’t overweight. That’s one reason weight is only one part of the picture.',
        refs: [2],
      },
      image: '/images/illustrations/fat-around-organs.webp',
      alt: 'Illustration of two figures of similar weight, one showing fat stored inside the body',
    },
  ],
  note: 'Image: two simple illustrations — sugar from food entering a body cell, with insulin as the key; and two figures of similar weight, one showing fat stored inside. Not medical, not detailed.',
};

export const screen4 = {
  eyebrow: 'What shapes metabolic health',
  headline: 'Health in balance',
  subhead: 'Support your health with nutrition, activity, sleep, and regular checks.',
  cards: [
    {
      title: 'Sleep',
      body: { text: 'Regularly getting too little or too much sleep is associated with a higher risk of type 2 diabetes.', refs: [9] },
      image: '/images/habits/sleep.webp',
      alt: 'Someone asleep in bed with the phone set aside',
    },
    {
      title: 'Walk after a meal',
      body: { text: 'Breaking up long periods of sitting, for example with a short walk after eating, may support how the body handles blood sugar.', refs: [8] },
      image: '/images/habits/walk-after-meal.webp',
      alt: 'A person walking along a path after a meal',
    },
    {
      title: 'Look at the whole plate',
      body: { text: 'Including protein and fibre in meals is linked with a gentler rise in blood sugar after eating.', refs: [7] },
      image: '/images/habits/plate-bowl.webp',
      // Figma node 2242:631 stacks three photos inside the one 314x380 card box
      mosaic: [
        '/images/habits/plate-bowl.webp',
        '/images/habits/plate-salad.webp',
        '/images/habits/plate-meal.webp',
      ],
      alt: 'A home-cooked meal with vegetables, pulses and grains',
    },
    {
      title: 'Don’t ignore stress',
      body: { text: 'Long-term stress has been linked with changes in metabolic health.', refs: [10] },
      image: '/images/habits/stress.webp',
      alt: 'A person pausing at a desk during a long day',
    },
  ],
  listLine: 'Other things that play a part: Family history · Age · Body weight',
  note: 'Image: normal life — someone walking after dinner, a regular home-cooked meal, someone putting their phone away before bed. Don’t make it look like a fitness campaign.',
};

export const screen5 = {
  eyebrow: 'Know your health numbers',
  headline: 'Every number tells a story',
  subhead: 'Know the health measures that shape your future wellbeing.',
  body: 'Know your health numbers: blood sugar, cholesterol, blood pressure, waist circumference matter.',
  measures: [
    { title: 'Blood sugar — HbA1c & blood glucose', body: { text: 'HbA1c reflects your average blood sugar over roughly the past three months.', refs: [5] } },
    { title: 'Blood fats — Cholesterol', body: { text: 'A lipid profile shows cholesterol and triglycerides together.' } },
    { title: 'Circulation — Blood pressure', body: { text: 'Blood pressure can be high without any obvious symptoms.', refs: [6] } },
    { title: 'Body shape — Waist circumference', body: { text: 'Shows where the body stores fat, which matters as well as how much.', refs: [1] } },
    { title: 'Body size — Weight & BMI', body: { text: 'A useful measure, best understood alongside the others.' } },
  ],
  closing:
    'These are some of the measures that may be relevant to understanding metabolic health. A doctor can explain which ones matter for you and what your own numbers mean.',
  note: 'Image: keep this one clean. Five simple cards, no stock images. A very simple illustration of where the tape goes inside the panel: no “good” versus “bad” waist, no colours indicating risk.',
};

export const waistPanel = {
  heading: 'How waist circumference is measured',
  optional: 'Optional · collapsed panel',
  disclaimer:
    'This is a general guide, not a diagnosis. A waist circumference measurement alone can’t tell you whether you have a health problem.',
  steps: [
    'Stand normally and breathe out. Don’t pull your stomach in.',
    'Place the tape around your waist at roughly navel level, against the skin.',
    'Note the number. A doctor can help you understand it alongside your other measures.',
  ],
  markerLabel: 'Tape at navel level, on the skin',
  // Strings below are transcribed from Figma node 2242:205, which carries
  // panel copy that is not in the client script document.
  beforeYouStart:
    'Optional panel. Collapsed by default, it opens from the Know your health numbers section above.',
  ruleTitle: 'A simple rule of thumb',
  ruleBody:
    'Waist size should ideally be less than half your height. But don\u2019t read too much into one number. It\u2019s simply something useful to know and, if needed, discuss with a doctor along with things like blood sugar, cholesterol and blood pressure.',
  ruleGlyph: '\u00bd',
  footnote:
    'Image: a very simple illustration of where the tape goes: no \u201cgood\u201d versus \u201cbad\u201d waist, no colours indicating risk.',
  photo: '/images/waist/waist-tape.webp',
  photoAlt: 'A measuring tape held around the waist at navel level',
  inset: '/images/waist/waist-apple.webp',
  insetAlt: 'A measuring tape and an apple held at waist level',
  illustration: '/images/illustrations/waist-front.webp',
  illustrationAlt: 'Simple illustration showing where the tape sits around the waist',
  illustrationCaption: 'Where the tape goes',
  stepIllustration: '/images/illustrations/waist-side.webp',
  stepIllustrationAlt: 'Side view illustration of the tape position at navel level',
};

export const screen6 = {
  eyebrow: 'Health starts with you',
  headline: 'Understand the symptoms',
  subhead: 'Some changes are easy to put down to a busy life.',
  quotes: [
    '“It’s just a busy phase.”',
    '“I haven’t been sleeping well.”',
    '“Maybe I’m just getting older.”',
  ],
  // Feature collage, Figma node 2242:138
  collage: [
    { image: '/images/signs/stairs-legs.webp', alt: 'Someone partway up a flight of stairs' },
    { image: '/images/signs/pause-glass.webp', alt: 'A pause during the day, holding a glass of water' },
  ],
  signsHeading: 'Signs you may notice',
  signs: [
    { text: 'Gradual weight gain', refs: [1, 13], image: '/images/signs/clothes-jeans.webp', alt: 'Waistband of jeans fitting more tightly than before' },
    { text: 'Increasing waist circumference', refs: [13], image: '/images/signs/waist-increase.webp', alt: 'Everyday moment, no clinical framing' },
  ],
  signsNoImage: [
    { text: 'Swelling around the feet or ankles', refs: [14] },
    { text: 'Knee joint pain', refs: [15] },
  ],
  otherHeading: 'Other changes people sometimes mention',
  other: [
    { text: 'Fatigue, low energy or reduced stamina', refs: [11], image: '/images/signs/tired.webp', alt: 'Someone pausing at a desk, tired during the day' },
    { text: 'Breathlessness during routine activities', refs: [12], image: '/images/signs/stairs.webp', alt: 'Someone partway up a flight of stairs' },
  ],
  closing: {
    text: 'These changes can happen for many different reasons and don’t necessarily mean there is a metabolic problem. If they persist or can’t be explained, it may be worth discussing them with a healthcare professional.',
    refs: [11, 14],
  },
  note: 'Image: everyday moments rather than “symptoms”: someone halfway up a staircase, a pair of shoes by the door. Nothing medical, nothing dramatic.',
};

export const screen7 = {
  eyebrow: 'Risk assessment tool',
  headline: 'Check what matters',
  subhead: 'Know your key health measures and discuss them with a doctor.',
  body: 'This short self-assessment has eight questions and takes about 2 minutes. Nothing is saved or sent anywhere.',
  heading: 'Metabolic health check · 8 questions · about 2 minutes · no sign-in',
  disclaimer:
    'This screening tool is for health awareness and educational purposes only and does not promote any specific product, treatment, or brand. Your results are indicative only and do NOT constitute a medical diagnosis. This tool does not diagnose, treat, cure, mitigate, or prevent any disease or condition. Always consult a qualified healthcare professional for proper evaluation and diagnosis before making any health-related decisions. © 2026 Practo Technologies Private Limited.',
  intro: [
    {
      title: 'What this tool is for',
      body: 'Showing which everyday factors are linked with metabolic health, and what you could talk about with a doctor.',
    },
    {
      title: 'What it doesn’t do',
      body: 'It gives no diagnosis, score or risk rating, and it can’t tell you whether you have a health condition.',
    },
    {
      title: 'How your answers are handled',
      body: 'Your answers stay on this page. Nothing is saved or sent, and no name, phone number or email is asked for.',
    },
  ],
  start: 'Start the check',
  back: '← Back',
  next: 'Next →',
  seeSummary: 'See my summary →',
  startAgain: 'Start again',
  questions: [
    {
      id: 'activity',
      label: '1. Physical activity',
      question: 'On most days, how much of your time is spent sitting?',
      options: [
        { value: 'most', label: 'Most of the day', restate: 'Most of your day is spent sitting.', flags: ['balance'] },
        { value: 'half', label: 'About half the day', restate: 'About half your day is spent sitting.', flags: ['balance'] },
        { value: 'little', label: 'Very little of the day', restate: 'Very little of your day is spent sitting.' },
      ],
      doctorQuestion: 'What kind of activity would suit my routine?',
    },
    {
      id: 'food',
      label: '2. Food habits',
      question: 'How would you describe your usual meals?',
      options: [
        { value: 'home', label: 'Mostly home-cooked and balanced', restate: 'Your meals are mostly home-cooked and balanced.' },
        { value: 'mix', label: 'A mix', restate: 'Your meals are a mix.', flags: ['balance'] },
        { value: 'processed', label: 'Often fried, sugary or processed', restate: 'Your meals are often fried, sugary or processed.', flags: ['balance'] },
      ],
      doctorQuestion: 'Is there anything in my routine I should change first?',
    },
    {
      id: 'sleep',
      label: '3. Sleep',
      question: 'How would you describe your sleep on most nights?',
      options: [
        { value: 'enough', label: 'Enough and regular', restate: 'Your sleep is enough and regular.' },
        { value: 'irregular', label: 'Too little or irregular', restate: 'Your sleep is too little or irregular.', flags: ['balance'] },
      ],
      doctorQuestion: 'Could my sleep be affecting my health numbers?',
    },
    {
      id: 'stress',
      label: '4. Stress',
      question: 'Over the past few months, how often have you felt stressed?',
      options: [
        { value: 'rarely', label: 'Rarely', restate: 'You have rarely felt stressed over the past few months.' },
        { value: 'sometimes', label: 'Sometimes', restate: 'You have sometimes felt stressed over the past few months.' },
        { value: 'often', label: 'Most of the time', restate: 'You have felt stressed most of the time over the past few months.', flags: ['balance'] },
      ],
      doctorQuestion: 'How much could stress be affecting this?',
    },
    {
      id: 'family',
      label: '5. Family history',
      question: 'Has anyone in your immediate family had diabetes, high blood pressure or heart disease?',
      options: [
        { value: 'yes', label: 'Yes', restate: 'Diabetes, high blood pressure or heart disease runs in your immediate family.', flags: ['numbers'] },
        { value: 'no', label: 'No', restate: 'No diabetes, high blood pressure or heart disease in your immediate family.' },
        { value: 'unsure', label: 'Not sure', restate: 'You are not sure whether these run in your immediate family.', flags: ['numbers'] },
      ],
      doctorQuestion: 'Given my family history, which measures are relevant for me?',
    },
    {
      id: 'age',
      label: '6. Age',
      question: 'Which age group are you in?',
      options: [
        { value: 'u30', label: 'Under 30', restate: 'You are under 30.' },
        { value: '30to44', label: '30 to 44', restate: 'You are between 30 and 44.' },
        { value: '45plus', label: '45 or above', restate: 'You are 45 or above.', flags: ['numbers'] },
      ],
      doctorQuestion: 'What do my numbers mean for my age?',
    },
    {
      id: 'waist',
      label: '7. Waist circumference',
      question: 'Has your waist circumference (waist measurement) increased over time?',
      options: [
        { value: 'yes', label: 'Yes', restate: 'Your waist circumference has increased over time.', flags: ['numbers', 'dynamics'] },
        { value: 'no', label: 'No', restate: 'Your waist circumference has not increased over time.' },
        { value: 'unsure', label: 'Not sure', restate: 'You are not sure whether your waist circumference has increased.', flags: ['numbers'] },
      ],
      doctorQuestion: 'How should I be measuring my waist circumference?',
    },
    {
      id: 'numbers',
      label: '8. Health numbers',
      question: 'Has a doctor ever told you that your blood sugar, cholesterol or blood pressure was higher than usual?',
      options: [
        { value: 'yes', label: 'Yes', restate: 'A doctor has told you before that your blood sugar, cholesterol or blood pressure was higher than usual.', flags: ['numbers', 'dynamics'] },
        { value: 'no', label: 'No', restate: 'No doctor has told you that these were higher than usual.' },
        { value: 'unsure', label: 'Not sure', restate: 'You are not sure whether a doctor has told you these were higher than usual.', flags: ['numbers'] },
      ],
      doctorQuestion: 'How often should these be looked at?',
    },
  ],
  summary: {
    heading: 'Your summary',
    body: 'This is not a score or a rating. It lists what you told us and where to read more.',
    toldUs: 'What you told us',
    worthReading: 'Worth reading on this page',
    doctorQuestions: 'Questions worth asking a doctor',
    disclaimer:
      'Your results are indicative only and do NOT constitute a medical diagnosis. Always consult a qualified healthcare professional for proper evaluation and diagnosis. Nothing you entered has been saved.',
  },
  readingLinks: {
    balance: { label: 'Health in balance', href: '#balance' },
    dynamics: { label: 'Your health dynamics', href: '#dynamics' },
    numbers: { label: 'Every number tells a story', href: '#numbers' },
    understand: { label: 'Understand your metabolism', href: '#understand' },
  },
  note: 'Note: show one question at a time with a progress bar (“1 of 8”). Everything runs on the page; nothing is stored or logged. Only the total number of completions is counted. The summary links only to sections on this page.',
  imageNote: 'Image: no illustration needed. The tool is the content on this screen.',
};

export const screen8 = {
  eyebrow: 'When to talk to a doctor',
  headline: 'When is it worth speaking to a doctor?',
  intro: 'You don’t need to wait until something feels seriously wrong. It may be worth a conversation if:',
  list: [
    'Changes like the ones above don’t settle, or you can’t explain them',
    'Diabetes, high blood pressure or heart disease runs in your immediate family',
    'A doctor has told you before that your blood sugar, cholesterol or blood pressure was high',
  ],
  chatIntro: 'Not sure what to ask? You could start with:',
  chat: [
    '“Which of these measures are relevant for me?”',
    '“What do my numbers mean for my age?”',
    '“How often should these be looked at?”',
    '“Is there anything in my routine I should change first?”',
  ],
  urgent:
    'Don’t wait for a routine visit if breathlessness is sudden or severe, or comes with chest pain, fainting or severe discomfort. Seek urgent medical care.',
  image: '/images/doctor/consultation.webp',
  imageAlt: 'A doctor and a patient sitting at the same eye level, having a conversation',
  note: 'Image: a doctor and a person having an actual conversation. Both sitting down, same eye level, relaxed. It should look like someone asking questions, not like they’ve just been given bad news.',
};

export const screen9 = {
  eyebrow: 'Learn your next steps',
  headline: 'Choose what you’d like to explore next',
  note: 'Both buttons open the interstitial below before going to the Practo page.',
  cta: 'Learn Your Next Steps',
  // Figma node 2242:682 — pull quote under the two options
  quote:
    'Health is the umbrella conversation. Diabetes, high cholesterol, hypertension and fatty liver may seem like separate conditions, but they are often closely connected and influenced by many of the same underlying risk factors.',
  options: [
    {
      id: 'measures' as const,
      title: 'I’d like to understand my health measures',
      body: 'A conversation about blood sugar, cholesterol, blood pressure, body weight and waist circumference, and what they mean for you.',
    },
    {
      id: 'habits' as const,
      title: 'I’d like guidance on everyday habits',
      body: 'Guidance on nutrition, physical activity, sleep and other everyday routines.',
    },
  ],
};

export const interstitial = {
  headline: 'You’re leaving this health information page',
  labels: {
    measures: 'Option 1: Learn Your Next Steps · Understanding your health measures',
    habits: 'Option 2: Learn Your Next Steps · Guidance on everyday habits',
  },
  bodies: {
    measures: 'You’ll now go to a page on practo.com, where you can speak with a doctor about your health measures.',
    habits: 'You’ll now go to a page on practo.com, where you can get guidance on nutrition, activity and everyday habits.',
  },
  instruction: 'Select “Continue to Practo” to go ahead, or “Stay on this page” to go back.',
  stay: 'Stay on this page',
  go: 'Continue to Practo',
  href: 'https://www.practo.com/',
};

export const footer = {
  disclaimer:
    'This content is for health awareness and educational purposes only and does not promote, advertise or endorse any specific product, treatment, or brand and is solely to raise awareness. It is not to be considered as substitute for medical advice, diagnosis or treatment, nor should it be construed as a medical guidance or treatment recommendation. Always consult a qualified healthcare professional before making any health-related decisions. Medical knowledge evolves continuously and regulations / guidelines continuously evolve. No claim, representation or warranty is made with respect to the completeness or accuracy of this content. © 2026 Practo Technologies Private Limited.',
  published:
    'Published by Practo Technologies Private Limited · No account or sign-in required · This page does not collect your name, phone number or email address.',
  copyright: '© 2026 Practo. For health awareness only.',
  referencesHeading: 'References',
  referencesNote: 'Shown as numbered superscripts on the page, with this list at the foot of the site.',
};

export const references: { n: number; text: string; url: string }[] = [
  { n: 1, text: 'Alberti KGMM, Eckel RH, Grundy SM, et al. Harmonizing the metabolic syndrome: a joint interim statement of the International Diabetes Federation Task Force on Epidemiology and Prevention; National Heart, Lung, and Blood Institute; American Heart Association; World Heart Federation; International Atherosclerosis Society; and International Association for the Study of Obesity. Circulation. 2009;120(16):1640–1645.', url: 'https://doi.org/10.1161/CIRCULATIONAHA.109.192644' },
  { n: 2, text: 'Tang A, Ng CH, Phang PH, et al. Comparative burden of metabolic dysfunction in lean NAFLD vs non-lean NAFLD: a systematic review and meta-analysis. Clin Gastroenterol Hepatol. 2023;21(7):1750–1760.', url: 'https://doi.org/10.1016/j.cgh.2022.06.029' },
  { n: 3, text: 'Rinella ME, Lazarus JV, Ratziu V, et al. A multisociety Delphi consensus statement on new fatty liver disease nomenclature. J Hepatol. 2023;79(6):1542–1556.', url: 'https://doi.org/10.1016/j.jhep.2023.06.003' },
  { n: 4, text: 'American Diabetes Association Professional Practice Committee. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. Diabetes Care. 2026;49(Suppl 1):S27–S49.', url: 'https://doi.org/10.2337/dc26-S002' },
  { n: 5, text: 'American Diabetes Association Professional Practice Committee. 6. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes—2026. Diabetes Care. 2026;49(Suppl 1):S132–S149.', url: 'https://doi.org/10.2337/dc26-S006' },
  { n: 6, text: 'World Health Organization. Hypertension. Fact sheet, updated 25 September 2025.', url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension' },
  { n: 7, text: 'Rebello CJ, Johnson WD, Martin CK, et al. Effects of higher dietary protein and fiber intakes at breakfast on postprandial glucose, insulin, and 24-h interstitial glucose in overweight adults. Nutrients. 2017;9(4):352.', url: 'https://doi.org/10.3390/nu9040352' },
  { n: 8, text: 'Quan M, Xun P, Wu H, et al. Effects of interrupting prolonged sitting on postprandial glycemia and insulin responses: a network meta-analysis. J Sport Health Sci. 2021;10(4):419–429.', url: 'https://doi.org/10.1016/j.jshs.2020.12.006' },
  { n: 9, text: 'Shan Z, Ma H, Xie M, et al. Sleep duration and risk of type 2 diabetes: a meta-analysis of prospective studies. Diabetes Care. 2015;38(3):529–537.', url: 'https://doi.org/10.2337/dc14-2073' },
  { n: 10, text: 'Bergmann N, Gyntelberg F, Faber J. The appraisal of chronic stress and the development of the metabolic syndrome: a systematic review of prospective cohort studies. Endocr Connect. 2014;3(2):R55–R80.', url: 'https://doi.org/10.1530/EC-14-0031' },
  { n: 11, text: 'Fritschi C, Quinn L. Fatigue in patients with diabetes: a review. J Psychosom Res. 2010;69(1):33–41.', url: 'https://doi.org/10.1016/j.jpsychores.2010.01.021' },
  { n: 12, text: 'Bernhardt V, Babb TG. Exertional dyspnoea in obesity. Eur Respir Rev. 2016;25(142):487–495.', url: 'https://doi.org/10.1183/16000617.0081-2016' },
  { n: 13, text: 'Ross R, Neeland IJ, Yamashita S, et al. Waist circumference as a vital sign in clinical practice: a Consensus Statement from the IAS and ICCR Working Group on Visceral Obesity. Nat Rev Endocrinol. 2020;16(3):177–189.', url: 'https://doi.org/10.1038/s41574-019-0310-7' },
  { n: 14, text: 'Trayes KP, Studdiford JS, Pickle S, Tully AS. Edema: diagnosis and management. Am Fam Physician. 2013;88(2):102–110.', url: 'https://www.aafp.org/pubs/afp/issues/2013/0715/p102.html' },
  { n: 15, text: 'Zhuo Q, Yang W, Chen J, Wang Y. Metabolic syndrome meets osteoarthritis. Nat Rev Rheumatol. 2012;8(12):729–737.', url: 'https://doi.org/10.1038/nrrheum.2012.135' },
];
