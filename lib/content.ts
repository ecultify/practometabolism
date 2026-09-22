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
    { label: 'Internal health', href: '#understand' },
    { label: 'Your health dynamics', href: '#dynamics' },
    { label: 'Health in balance', href: '#balance' },
    { label: 'Your health numbers', href: '#numbers' },
    { label: 'Check what matters', href: '#check' },
  ],
};

export const screen1 = {
  eyebrow: 'Internal health awareness',
  headline: 'Health starts with you.',
  subhead:
    'Every day, your body is handling sugar, fat and energy.\n\nBlood sugar, cholesterol, blood pressure, waist circumference and body weight can each tell you something about how that is going.\n\nBut no single measure tells the whole story.',
  primaryCta: 'Know More',
  secondaryCta: 'Take the risk assessment',
  readings: [
    'Blood pressure',
    'Blood sugar',
    'Waist circumference',
    'Cholesterol',
    'Body weight',
  ],
  note: '[Know More] opens the Understand Your Internal Health section below. [Take the risk assessment] scrolls to Screen 7.',
};

export const band = {
  eyebrow: 'Internal health covers',
  headline: 'FIVE MEASURES. ONE BIGGER PICTURE.',
  caption: 'Each tells you something. Together, they tell you more.',
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
  headline: 'Understand what your health numbers mean together',
  subhead: 'What internal health is, what it includes, and why it matters. A 2-minute read.',
  openLabel: 'Read +',
  closeLabel: 'Close –',
  closeExplainer: 'Close explainer',
  prev: 'Previous',
  next: 'Next',
  note: 'Sits directly below Screen 1 and is collapsed by default. It opens from [Know More] or the “What is it?” link in the header. Inside are four tabs, with [Previous] and [Next] to move between them.',
  tabs: [
    {
      id: 'what',
      label: '1. Why these numbers matter?',
      blocks: [
        {
          kind: 'body' as const,
          line: {
            text: 'Your body is constantly handling sugar, fat and energy. Blood sugar, blood fats, blood pressure, waist circumference and weight each show a different part of that process.',
          },
        },
        {
          kind: 'body' as const,
          line: {
            text: 'Looking at them together gives you a more complete picture than any one number alone.',
            refs: [1, 2, 3],
          },
        },
      ],
    },
    {
      id: 'inclusions',
      label: '2. What the picture includes',
      blocks: [
        { kind: 'subhead' as const, line: { text: 'Key measures' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Blood sugar' },
            { text: 'Cholesterol & triglycerides' },
            { text: 'Blood pressure' },
            { text: 'Waist circumference' },
            { text: 'Body weight' },
          ],
        },
        { kind: 'subhead' as const, line: { text: 'What it does not mean' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Any one measure tells the whole story' },
            { text: 'Body weight alone defines your health' },
            {
              text: 'Only people above a healthy weight need to pay attention. Changes can occur at a healthy weight too.',
              refs: [4],
            },
            { text: 'These numbers are a diagnosis. A doctor can help interpret what they mean for you.' },
          ],
        },
      ],
    },
    {
      id: 'benefits',
      label: '3. When your numbers are in a healthy range',
      blocks: [
        { kind: 'body' as const, line: { text: 'When these measures stay in a healthy range, it is linked with:' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'A lower long-term risk of type 2 diabetes', refs: [5] },
            { text: 'A lower long-term risk of heart and blood vessel disease', refs: [6] },
            { text: 'Everyday habits that support it: food, activity, sleep and stress all play a part' },
          ],
        },
      ],
    },
    {
      id: 'downstream',
      label: '4. When several numbers shift',
      blocks: [
        { kind: 'body' as const, line: { text: 'Changes across key health measures can be linked with a higher long-term risk of:' } },
        {
          kind: 'list' as const,
          items: [
            { text: 'Type 2 diabetes', refs: [5] },
            { text: 'Heart and blood vessel disease', refs: [6] },
            { text: 'Fatty liver disease', refs: [7] },
          ],
        },
      ],
    },
  ],
};

export const screen2 = {
  eyebrow: 'Internal health matters',
  headline: 'Take a closer look at your health',
  subhead: 'Looking beyond weight to overall well-being.',
  cards: [
    {
      title: 'When key measures stay in healthy ranges',
      items: [
        { text: 'A lower long-term risk of type 2 diabetes', refs: [5] },
        { text: 'A lower long-term risk of heart and blood vessel disease', refs: [6] },
      ],
    },
    {
      title: 'When several measures begin to shift',
      items: [
        { text: 'Type 2 diabetes', refs: [5] },
        { text: 'Heart and blood vessel disease, and other related conditions', refs: [6, 7] },
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
        refs: [8, 9],
      },
      image: '/images/illustrations/blood-sugar.webp',
      alt: 'Illustration of sugar from food entering a body cell, with insulin acting as the key',
    },
    {
      title: 'Where fat is stored',
      body: {
        text: 'Fat can also build up inside organs, even in people who are not overweight. That is one reason weight is only one part of the picture.',
        refs: [10, 4],
      },
      image: '/images/illustrations/fat-around-organs.webp',
      alt: 'Illustration of two figures of similar weight, one showing fat stored inside the body',
    },
  ],
  note: 'Image: two simple illustrations — sugar from food entering a body cell, with insulin as the key; and two figures of similar weight, one showing fat stored inside. Not medical, not detailed.',
};

export const screen4 = {
  eyebrow: 'What shapes internal health',
  headline: 'What you do every day can influence the bigger picture.',
  subhead: 'Support your health with nutrition, activity, sleep, and regular checks.',
  cards: [
    {
      title: 'Sleep',
      body: { text: 'Regularly getting too little or too much sleep is associated with a higher risk of type 2 diabetes.', refs: [11] },
      image: '/images/habits/sleep.webp',
      alt: 'Someone asleep in bed with the phone set aside',
    },
    {
      title: 'Walk after a meal',
      body: { text: 'Breaking up long periods of sitting, for example with a short walk after eating, may support how the body handles blood sugar.', refs: [12, 13] },
      image: '/images/habits/walk-after-meal.webp',
      alt: 'A person walking along a path after a meal',
    },
    {
      title: 'Look at the whole plate',
      body: { text: 'Including protein and fibre in meals is linked with a gentler rise in blood sugar after eating.', refs: [14, 15] },
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
      title: 'Do not ignore stress',
      body: { text: 'Long-term stress can influence blood sugar and other key health measures over time.', refs: [16] },
      image: '/images/habits/stress.webp',
      alt: 'A person pausing at a desk during a long day',
    },
  ],
  listLine: 'Other things that play a part: Family history · Age · Body weight',
  note: 'Image: normal life — someone walking after dinner, a regular home-cooked meal, someone putting their phone away before bed. Do not make it look like a fitness campaign.',
};

export const screen5 = {
  eyebrow: 'Know your health numbers',
  headline: 'Every number tells a story',
  subhead: 'Know the health measures that shape your future well-being.',
  body: 'Know your health numbers: blood sugar, cholesterol, blood pressure, waist circumference matter.',
  measures: [
    { title: 'Blood sugar — HbA1c & blood glucose', body: { text: 'HbA1c reflects your average blood sugar over roughly the past three months.', refs: [17] } },
    { title: 'Blood fats — Cholesterol', body: { text: 'A lipid profile shows cholesterol and triglycerides together.' } },
    { title: 'Circulation — Blood pressure', body: { text: 'Blood pressure can be high without any obvious symptoms.', refs: [18] } },
    { title: 'Body shape — Waist circumference', body: { text: 'Shows where the body stores fat, which matters as well as how much.', refs: [3] } },
    { title: 'Body size — Weight & BMI', body: { text: 'A useful measure, best understood alongside the others.' } },
  ],
  closing:
    'These are some of the measures that may be relevant to understanding internal health. A doctor can explain which ones matter for you and what your own numbers mean.',
  note: 'Image: keep this one clean. Five simple cards, no stock images. A very simple illustration of where the tape goes inside the panel: no “good” versus “bad” waist, no colours indicating risk.',
};

export const waistPanel = {
  heading: 'How waist circumference is measured',
  optional: 'Optional · collapsed panel',
  disclaimer:
    'This is a general guide, not a diagnosis. A waist circumference measurement alone cannot tell you whether you have a health problem.',
  steps: [
    'Stand normally and breathe out. Do not pull your stomach in.',
    'Place the tape around your waist at roughly navel level, against the skin.',
    'Note the number. A doctor can help you understand it alongside your other measures.',
  ],
  markerLabel: 'Tape at navel level, on the skin',
  // Strings below are transcribed from Figma node 2242:205, which carries
  // panel copy that is not in the client script document.
  beforeYouStart:
    'Optional panel. Collapsed by default, it opens from the Know your health numbers section above.',
  ruleTitle: 'A simple rule of thumb',
  ruleBody: {
    text: 'Waist size should ideally be less than half your height. But do not read too much into one number. It is simply something useful to know and, if needed, discuss with a doctor along with things like blood sugar, cholesterol and blood pressure.',
    refs: [19],
  },
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
    '“It is just a busy phase.”',
    '“I have not been sleeping well.”',
    '“Maybe I am just getting older.”',
  ],
  // Feature collage, Figma node 2242:138
  collage: [
    { image: '/images/signs/stairs-legs.webp', alt: 'Someone partway up a flight of stairs' },
    { image: '/images/signs/pause-glass.webp', alt: 'A pause during the day, holding a glass of water' },
  ],
  signsHeading: 'Signs you may notice',
  signs: [
    { text: 'Gradual weight gain', refs: [20, 3], image: '/images/signs/clothes-jeans.webp', alt: 'Waistband of jeans fitting more tightly than before' },
    { text: 'Increasing waist circumference', refs: [3], image: '/images/signs/waist-increase.webp', alt: 'Everyday moment, no clinical framing' },
    { text: 'Swelling around the feet or ankles', refs: [21, 22], image: '/images/signs/ankles.webp', alt: 'Hands resting on bare feet and ankles at home' },
    { text: 'Knee joint pain', refs: [23, 24], image: '/images/signs/knee.webp', alt: 'Someone sitting on a sofa, holding their knee' },
  ],
  otherHeading: 'Other changes people sometimes mention',
  other: [
    { text: 'Fatigue, low energy or reduced stamina', refs: [25], image: '/images/signs/tired.webp', alt: 'Someone pausing at a desk, tired during the day' },
    { text: 'Breathlessness during routine activities', refs: [26], image: '/images/signs/stairs.webp', alt: 'Someone partway up a flight of stairs' },
  ],
  closing: {
    text: 'These changes can happen for many different reasons and do not necessarily mean there is an underlying problem. If they persist or cannot be explained, it may be worth discussing them with a healthcare professional.',
    refs: [25, 22],
  },
  note: 'Image: everyday moments rather than “symptoms”: someone halfway up a staircase, a pair of shoes by the door. Nothing medical, nothing dramatic.',
};

export const screen7 = {
  eyebrow: 'Risk assessment tool',
  headline: 'Check what matters',
  subhead: 'Answer 8 quick questions to understand which areas may be worth discussing with a doctor.',
  body: 'Takes about 2 minutes. No sign-in required. Your responses are not saved or sent anywhere.',
  heading: '8 questions • about 2 minutes • no sign-in',
  disclaimer:
    'This screening tool is for health awareness and educational purposes only and does not promote any specific product, treatment, or brand. Your results are indicative only and do NOT constitute a medical diagnosis. This tool does not diagnose, treat, cure, mitigate, or prevent any disease or condition. Always consult a qualified healthcare professional for proper evaluation and diagnosis before making any health-related decisions. © 2026 Practo Technologies Private Limited.',
  intro: [
    {
      title: 'What this tool is for',
      body: 'Everyday factors and key health measures that may be worth discussing with a doctor.',
    },
    {
      title: 'What it does not do',
      body: 'It gives no diagnosis, score or risk rating, and it cannot tell you whether you have a health condition.',
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
  createSummary: 'Create my summary',
  optionalNote: 'Every field is optional. No name, contact or identity is collected.',
  optionalSub: 'No score, no percentage, no risk band, no colour rating. “Worth mentioning” is a prompt to raise it with a doctor, not a verdict.',
  emptySummary: 'Your summary appears here as you answer the questions.',
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
    understand: { label: 'Understand your internal health', href: '#understand' },
  },
  note: 'Note: show one question at a time with a progress bar (“1 of 8”). Everything runs on the page; nothing is stored or logged. Only the total number of completions is counted. The summary links only to sections on this page.',
  imageNote: 'Image: no illustration needed. The tool is the content on this screen.',
};

export const tool = {
  steps: [
    { title: 'Your routine', body: 'Six quick yes/no questions' },
    {
      title: 'Numbers you have',
      body: 'All fields are optional. Fill this in only if you have a recent report at hand. The summary works either way.',
    },
    { title: 'Your summary', body: 'A short summary to take to your doctor.' },
  ],
  yes: 'Yes',
  no: 'No',
  questions: [
    { id: 'sleep', text: 'Do you usually get less than 7 hours of sleep?', restate: 'You usually sleep less than 7 hours.', ask: 'Could my sleep be affecting my health numbers?' },
    { id: 'sitting', text: 'Are most of your days spent mostly sitting?', restate: 'Most of your days are spent sitting.', ask: 'What kind of activity would suit my routine?' },
    { id: 'eatout', text: 'Do you eat out or order in more than three times a week?', restate: 'You eat out or order in more than three times a week.', ask: 'Is there anything in my routine I should change first?' },
    { id: 'family', text: 'Has anyone in your immediate family had diabetes, high blood pressure or heart disease?', restate: 'Diabetes, high blood pressure or heart disease runs in your immediate family.', ask: 'Given my family history, which measures are relevant for me?' },
    { id: 'check', text: 'Has it been more than a year since your last health check?', restate: 'It has been more than a year since your last health check.', ask: 'Which of these checks have I already had?' },
    { id: 'waist', text: 'Have your clothes been getting tighter around the waist?', restate: 'Your clothes have been getting tighter around the waist.', ask: 'How should I be measuring my waist circumference?' },
  ],
  fields: [
    { id: 'hba1c', label: 'HbA1c', unit: '%', placeholder: '5.6', ref: 'below 5.7%', limit: 5.7, ask: 'How often should I check my HbA1c?' },
    { id: 'glucose', label: 'Fasting blood sugar', unit: 'mg/dL', placeholder: '95', ref: 'below 100', limit: 100, ask: 'What do my blood sugar numbers mean for my age?' },
    { id: 'bp', label: 'Blood pressure', unit: 'mmHg', placeholder: '120/80', ref: 'below 120/80', limit: [120, 80] as const, ask: 'Is my blood pressure something to keep an eye on?' },
    { id: 'chol', label: 'Total cholesterol', unit: 'mg/dL', placeholder: '180', ref: 'below 200', limit: 200, ask: 'Should I have a full lipid profile done?' },
  ],
  worth: 'Worth mentioning',
  refPrefix: 'ref.',
  nextNumbers: 'Next: Numbers you have',
  backRoutine: 'Back to your routine',
  createSummary: 'Create my summary',
  startAgain: 'Start again',
  optionalNote: 'Every field is optional. No name, contact or identity is collected.',
  optionalSub: 'No score, no percentage, no risk band, no colour rating. “Worth mentioning” is a prompt to raise it with a doctor, not a verdict.',
  summary: {
    heading: 'Your summary',
    body: 'A short summary to take to your doctor.',
    toldUs: 'What you told us',
    numbers: 'Numbers you entered',
    asking: 'Questions worth asking',
    empty: 'Your summary appears here as you answer the questions.',
    nothing: 'Nothing you told us stood out.',
    ready: 'Your summary is ready.',
    readyBody: 'It is in the panel alongside. Nothing has been saved or sent anywhere.',
  },
};

export const screen8 = {
  eyebrow: 'When to talk to a doctor',
  headline: 'When is it worth speaking to a doctor?',
  intro: 'You do not need to wait until something feels seriously wrong. It may be worth a conversation if:',
  list: [
    'Changes like the ones above do not settle, or you cannot explain them',
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
    'Do not wait for a routine visit if breathlessness is sudden or severe, or comes with chest pain, fainting or severe discomfort. Seek urgent medical care.',
  image: '/images/doctor/consultation.webp',
  imageAlt: 'A doctor and a patient sitting at the same eye level, having a conversation',
  note: 'Image: a doctor and a person having an actual conversation. Both sitting down, same eye level, relaxed. It should look like someone asking questions, not like they have just been given bad news.',
};

export const screen9 = {
  eyebrow: 'Learn your next steps',
  headline: 'Choose what you would like to explore next',
  note: 'Both buttons open the interstitial below before going to the Practo page.',
  cta: 'Learn Your Next Steps',
  // Figma node 2242:682 — pull quote under the two options
  quote: {
    text: 'Health is the umbrella conversation. Diabetes, high cholesterol, hypertension and fatty liver may seem like separate conditions, but they are often closely connected and influenced by many of the same underlying risk factors.',
    refs: [7],
  },
  options: [
    {
      id: 'measures' as const,
      title: 'I would like to understand my health measures',
      body: 'A conversation about blood sugar, cholesterol, blood pressure, body weight and waist circumference, and what they mean for you.',
    },
    {
      id: 'habits' as const,
      title: 'I would like guidance on everyday habits',
      body: 'Guidance on nutrition, physical activity, sleep and other everyday routines.',
    },
  ],
};

export const interstitial = {
  headline: 'You are leaving this health information page',
  labels: {
    measures: 'Option 1: Learn Your Next Steps · Understanding your health measures',
    habits: 'Option 2: Learn Your Next Steps · Guidance on everyday habits',
  },
  bodies: {
    measures: 'You will now go to a page on practo.com, where you can speak with a doctor about your health measures.',
    habits: 'You will now go to a page on practo.com, where you can get guidance on nutrition, activity and everyday habits.',
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
  { n: 1, text: 'Lloyd-Jones DM, Allen NB, Anderson CAM, et al. Life’s Essential 8: updating and enhancing the American Heart Association’s construct of cardiovascular health: a presidential advisory from the American Heart Association. Circulation. 2022;146(5):e18–e43.', url: 'https://doi.org/10.1161/CIR.0000000000001078' },
  { n: 2, text: 'Araújo J, Cai J, Stevens J. Prevalence of optimal metabolic health in American adults: National Health and Nutrition Examination Survey 2009–2016. Metab Syndr Relat Disord. 2019;17(1):46–52.', url: 'https://doi.org/10.1089/met.2018.0105' },
  { n: 3, text: 'Ross R, Neeland IJ, Yamashita S, et al. Waist circumference as a vital sign in clinical practice: a Consensus Statement from the IAS and ICCR Working Group on Visceral Obesity. Nat Rev Endocrinol. 2020;16(3):177–189.', url: 'https://doi.org/10.1038/s41574-019-0310-7' },
  { n: 4, text: 'Tang A, Ng CH, Phang PH, et al. Comparative burden of metabolic dysfunction in lean NAFLD vs non-lean NAFLD: a systematic review and meta-analysis. Clin Gastroenterol Hepatol. 2023;21(7):1750–1760.', url: 'https://doi.org/10.1016/j.cgh.2022.06.029' },
  { n: 5, text: 'Ford ES, Li C, Sattar N. Metabolic syndrome and incident diabetes: current state of the evidence. Diabetes Care. 2008;31(9):1898–1904.', url: 'https://doi.org/10.2337/dc08-0423' },
  { n: 6, text: 'Mottillo S, Filion KB, Genest J, et al. The metabolic syndrome and cardiovascular risk: a systematic review and meta-analysis. J Am Coll Cardiol. 2010;56(14):1113–1132.', url: 'https://doi.org/10.1016/j.jacc.2010.05.034' },
  { n: 7, text: 'Muzurović E, Mikhailidis DP, Mantzoros C. Nonalcoholic fatty liver disease and cardiovascular disease: a review of shared cardiometabolic risk factors. Hypertension. 2022;79(7):1319–1326.', url: 'https://doi.org/10.1161/HYPERTENSIONAHA.122.17982' },
  { n: 8, text: 'Stefan N, Schick F, Häring HU. Causes, characteristics, and consequences of metabolically unhealthy normal weight in humans. Cell Metab. 2017;26(2):292–300.', url: 'https://doi.org/10.1016/j.cmet.2017.07.008' },
  { n: 9, text: 'American Diabetes Association Professional Practice Committee. 2. Diagnosis and Classification of Diabetes: Standards of Care in Diabetes—2026. Diabetes Care. 2026;49(Suppl 1):S27–S49.', url: 'https://doi.org/10.2337/dc26-S002' },
  { n: 10, text: 'Thomas EL, Frost G, Taylor-Robinson SD, Bell JD. Excess body fat in obese and normal-weight subjects. Nutr Res Rev. 2012;25(1):150–161.', url: 'https://doi.org/10.1017/S0954422412000054' },
  { n: 11, text: 'Shan Z, Ma H, Xie M, et al. Sleep duration and risk of type 2 diabetes: a meta-analysis of prospective studies. Diabetes Care. 2015;38(3):529–537.', url: 'https://doi.org/10.2337/dc14-2073' },
  { n: 12, text: 'Quan M, Xun P, Wu H, et al. Effects of interrupting prolonged sitting on postprandial glycemia and insulin responses: a network meta-analysis. J Sport Health Sci. 2021;10(4):419–429.', url: 'https://doi.org/10.1016/j.jshs.2020.12.006' },
  { n: 13, text: 'Engeroff T, Groneberg DA, Wilke J. After dinner rest a while, after supper walk a mile? A systematic review with meta-analysis on the acute postprandial glycemic response to exercise before and after meal ingestion. Sports Med. 2023;53(4):849–869.', url: 'https://doi.org/10.1007/s40279-022-01808-7' },
  { n: 14, text: 'Wolever TMS, Zurbau A, Koecher K, Au-Yeung F. The effect of adding protein to a carbohydrate meal on postprandial glucose and insulin responses: a systematic review and meta-analysis of acute controlled feeding trials. J Nutr. 2024;154(9):2640–2654.', url: 'https://doi.org/10.1016/j.tjnut.2024.07.011' },
  { n: 15, text: 'Zurbau A, Noronha JC, Khan TA, Sievenpiper JL, Wolever TMS. The effect of oat β-glucan on postprandial blood glucose and insulin responses: a systematic review and meta-analysis. Eur J Clin Nutr. 2021;75(11):1540–1554.', url: 'https://doi.org/10.1038/s41430-021-00875-9' },
  { n: 16, text: 'Bergmann N, Gyntelberg F, Faber J. The appraisal of chronic stress and the development of the metabolic syndrome: a systematic review of prospective cohort studies. Endocr Connect. 2014;3(2):R55–R80.', url: 'https://doi.org/10.1530/EC-14-0031' },
  { n: 17, text: 'American Diabetes Association Professional Practice Committee. 6. Glycemic Goals, Hypoglycemia, and Hyperglycemic Crises: Standards of Care in Diabetes—2026. Diabetes Care. 2026;49(Suppl 1):S132–S149.', url: 'https://doi.org/10.2337/dc26-S006' },
  { n: 18, text: 'World Health Organization. Hypertension. Fact sheet, updated 25 September 2025.', url: 'https://www.who.int/news-room/fact-sheets/detail/hypertension' },
  { n: 19, text: 'National Institute for Health and Care Excellence. Overweight and obesity management: identifying and assessing overweight, obesity and central adiposity. NICE guideline NG246. 2025.', url: 'https://www.nice.org.uk/guidance/ng246/chapter/Identifying-and-assessing-overweight-obesity-and-central-adiposity' },
  { n: 20, text: 'Jayedi A, Soltani S, Zargar MS, Khan TA, Shab-Bidar S. Adult weight gain and the risk of cardiovascular disease: a systematic review and dose-response meta-analysis of prospective cohort studies. Eur J Clin Nutr. 2020;74(9):1263–1275.', url: 'https://doi.org/10.1038/s41430-020-0610-y' },
  { n: 21, text: 'Burian EA, Franks PJ, Borman P, et al. The impact of obesity on chronic oedema/lymphoedema of the leg: an international multicenter cross-sectional study (LIMPRINT). Int J Obes (Lond). 2024;48(9):1238–1247.', url: 'https://doi.org/10.1038/s41366-024-01544-0' },
  { n: 22, text: 'Trayes KP, Studdiford JS, Pickle S, Tully AS. Edema: diagnosis and management. Am Fam Physician. 2013;88(2):102–110.', url: 'https://www.aafp.org/pubs/afp/issues/2013/0715/p102.html' },
  { n: 23, text: 'Zheng H, Chen C. Body mass index and risk of knee osteoarthritis: systematic review and meta-analysis of prospective studies. BMJ Open. 2015;5(12):e007568.', url: 'https://doi.org/10.1136/bmjopen-2014-007568' },
  { n: 24, text: 'Zhuo Q, Yang W, Chen J, Wang Y. Metabolic syndrome meets osteoarthritis. Nat Rev Rheumatol. 2012;8(12):729–737.', url: 'https://doi.org/10.1038/nrrheum.2012.135' },
  { n: 25, text: 'Fritschi C, Quinn L. Fatigue in patients with diabetes: a review. J Psychosom Res. 2010;69(1):33–41.', url: 'https://doi.org/10.1016/j.jpsychores.2010.01.021' },
  { n: 26, text: 'Bernhardt V, Babb TG. Exertional dyspnoea in obesity. Eur Respir Rev. 2016;25(142):487–495.', url: 'https://doi.org/10.1183/16000617.0081-2016' },
];
