# Copy revision: Practo metabolic health microsite

## What this is

A Practo health-awareness microsite, built as a Next.js static export and
pixel-matched to a Figma frame. Project root:

    ~/practomicrositedesign2/v2-microsite

Every user-facing string was transcribed verbatim from the client script
document, so this copy has already been signed off once. You are making a
narrow compliance edit to it, not rewriting it.

Work in two phases. Phase 1 is a proposal. Do not edit a single file until
the proposal has been approved.

---

## The three words to remove

    1. <WORD 1>
    2. <WORD 2>
    3. <WORD 3>

Treat each as a word family, not a literal string. Catch singular, plural,
adjectival and hyphenated forms, and any capitalisation. If word 1 were
"obesity" you would also be looking for "obese" and "obesity-related".

---

## The one rule that matters most

Change as few words as possible.

Work at phrase level, not sentence level. Find the word, read the clause it
sits in and the few words either side, and rework only that clause. Leave the
rest of the sentence exactly as it is. Leave neighbouring sentences alone
entirely.

The test for every edit: a reader who knows the original should struggle to
say what changed, other than the word being gone. The point the sentence was
making must survive intact, at the same strength, in the same voice, at
roughly the same length.

Do not take the opportunity to improve, tighten, modernise or re-tone
anything. Do not merge or split sentences. Do not reorder clauses unless
removing the word forces it.

If a sentence cannot lose the word without changing what it tells the reader,
do not force it. Flag it in the report as "needs a client decision" and give
two candidate rewrites with a note on what each one costs in meaning.

---

## Where the copy actually lives

Most of it is in one file, but not all of it, and this is the part people get
wrong.

**Primary source of truth**

    lib/content.ts

Every string on the site, plus a `references` array of 15 citations.

**Copy hardcoded in components**

Four headlines are written directly into JSX, because the Figma design breaks
them across two lines at specific points and the line break had to be
preserved. Editing `lib/content.ts` alone will not change these on screen:

    components/Doctor.tsx:100        "When is it worth"
    components/Doctor.tsx:~102       "speaking to a doctor"
    components/NextSteps.tsx:99      "Choose what you'd like"
    components/NextSteps.tsx:100     "to explore next"
    components/WaistPanel.tsx:181    "How waist circumference" / "is measured"

Note a live inconsistency you should fix while you are in there:
`screen9.headline` on line 486 of `lib/content.ts` holds the same sentence as
the hardcoded spans in `NextSteps.tsx`, and is currently unused. The two must
end up saying the same thing. Say in your report how you reconciled them.

Search every file before you conclude you have found all instances:

    grep -rniE "<word1>|<word2>|<word3>" lib/ components/ app/

---

## Contractions

Mandatory, separate from the three-word task.

Expand every `'ll` and `'d` contraction in user-facing copy:

    I'll    -> I will
    you'll  -> you will
    we'll   -> we will
    I'd     -> I would, I should or I could, whichever the sentence means
    you'd   -> you would, you should or you could, same test

For `'d`, read the sentence and pick the correct modal. "I'd like to
understand my health measures" is "I would like". Getting this wrong changes
the meaning, so do not pattern-match it blindly.

Known instances at time of writing:

    lib/content.ts:486    "Choose what you'd like to explore next"
    lib/content.ts:495    "I'd like to understand my health measures"
    lib/content.ts:500    "I'd like guidance on everyday habits"
    lib/content.ts:513    "You'll now go to a page on practo.com ..."
    lib/content.ts:514    "You'll now go to a page on practo.com ..."
    components/NextSteps.tsx:99   "Choose what you'd like"

Verify that list yourself rather than trusting it.

**Do not touch other contractions** without asking. The copy uses `don't`,
`isn't`, `can't`, `doesn't`, `aren't`, `haven't`, `it's`, `that's`, `I'm`,
`they've`, `you're`. Expanding all of them would flatten a deliberately warm,
plain-spoken tone across a health page. Instead, list every one you find in
the report, grouped by file and line, and let the client decide.

Apostrophes in this file are typographic (U+2019), not straight quotes. Match
the existing character when you edit.

---

## What you must not change

- Any object key, array shape, `refs` array, `id`, `href`, image path or
  anchor target in `lib/content.ts`. Only the human-readable string values.
- The 15-item `references` array. Those are citations.
- The legal disclaimer, the screening-tool disclaimer, or the copyright line.
- Medical hedging. Phrases like "may", "can be linked with", "is associated
  with" and "does not diagnose" are compliance language on a health-awareness
  page. Do not strengthen a claim, and do not soften one either. If your
  rewrite changes how certain a statement sounds, it is wrong.
- Any component logic, class name, `data-node-id` attribute or layout value.
  This is a copy task only.
- Existing punctuation. Do not introduce new em dashes or double hyphens.

---

## Watch string length

Several strings sit in fixed-width boxes taken from the Figma frame. A longer
replacement will wrap badly or overflow. Flag any replacement that grows one
of these by more than about two characters:

- the five nav labels in `nav.links`
- the five measure names in `band.measures`
- the four explainer tab labels
- every `label` on an assessment-tool option, which render as pills
- the `cta` and button strings

---

## Phase 1 deliverable: the change report

A table, one row per edit, nothing applied yet:

| # | File | Line | Section | Trigger | Before | After | Chars |
|---|------|------|---------|---------|--------|-------|-------|

- **Section** is the screen or block a reader would recognise, for example
  "Screen 6, Signs you may notice", not the variable name alone.
- **Trigger** is which of the three words, or "contraction".
- **Before** and **After** are the complete sentence, not a fragment, so the
  edit can be judged in context.
- **Chars** is the character count delta, signed.

Then three short lists:

1. Instances you could not resolve without a client decision, each with two
   candidate rewrites and what each costs.
2. Every other contraction found, by file and line, with no change made.
3. Any place where the same sentence exists in two files, with how you
   reconciled it.

Stop there and wait for approval.

---

## Phase 2: apply, then prove it

Only after approval.

    # no instance of any of the three words survives, in any form
    grep -rniE "<word1>|<word2>|<word3>" lib/ components/ app/

    # no 'll or 'd contraction survives
    grep -rnE "[A-Za-z]+[’'](ll|d)\b" lib/ components/ app/

    # the build still passes
    npm run build

Report the output of all three. The build must reach "Compiled successfully"
and generate the static export without a type error.

Then re-read the four hardcoded headlines on screen, not just in source, and
confirm the rendered text changed.

---

## Do not

- Commit, push, deploy, or touch the Vercel project.
- Edit anything under `out/`, `.next/` or `node_modules/`.
- Regenerate or reformat `lib/content.ts`. Targeted edits only, so the diff
  stays readable and reviewable by the client.
