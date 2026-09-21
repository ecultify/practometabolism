'use client';

/**
 * Pixel-matched to Figma node 2242:462 ("07 Check what matters · Screen 7").
 *
 * The Figma frame lays out all eight questions at once so every state can be
 * reviewed. The design note on that frame ("show one question at a time with
 * a progress bar") is the real behaviour, which is what the build does.
 *
 *   section    bg #f3f6fc, px 56, py 120, flex-col items-center, gap 48
 *   eyebrow    SemiBold 13 / 1.4 #28328c tracking 1.04px
 *   h2         Light 56 / 1.1 #0b1140 centred, tracking -1.12px, w900
 *   sub        Regular 18 / 1.6 #2e3766 centred, w760
 *   body       Regular 15 / 1.65 #4a5487, w760
 *   pill       bg #eaf8fe, px22 py10, r999 — SemiBold 14 / 1.5 #28328c
 *   screening  bg #f3f6fc, px22 py20, r16 — Regular 13 / 1.65 #4a5487
 *   tool       bg #fff, r32, shadow 0 30px 60px rgba(10,18,64,.1)
 *     stepper  w300, border-r #e4e8f4, px24 py36, gap 20
 *              step  p14 r16 gap 14 — active bg #eaf8fe
 *                    icon 40px — active #28328c/white, idle white/#d5dcf0/#28328c
 *                    title SemiBold 16 #0b1140 · body Regular 13 #4a5487
 *              start bg #28328c, pl22 pr10 py10, gap 14, r999 + 36px chip
 *     middle   flex-1, px36 py28, gap 26
 *              progress  gap 12, pb 16 — Medium 13 #4a5487, track h6 r3 #e4e8f4,
 *                        fill #14bef0
 *              label     SemiBold 12 / 1.5 #28328c tracking 0.48px
 *              question  Medium 15 / 1.6 #0b1140
 *              option    px16 py6 r999 SemiBold 13 — on #28328c/white
 *              nav       gap 12, outline px22 py10 border 1.5 #28328c SemiBold 16
 *     summary  bg #0b1140, w340, px28 py32, gap 18
 *              h3 SemiBold 20 white · p Regular 13 / 1.5 #a7b1d9 w280
 *              block bg rgba(255,255,255,.06) r16 p16 gap 8
 *                    title SemiBold 12 #8fe3fa · line Regular 14 / 1.5 white
 *              disclaimer Regular 11 / 1.6 #8fa0d9
 *   footer     Medium 14 #1e2a78 · Regular 13 #4a5487, gap 6
 */

import { useMemo, useRef, useState } from 'react';
import { screen7 as t } from '@/lib/content';
import { ArrowChip } from './ui';

type Answers = Record<string, string>;
type Stage = 'intro' | 'questions' | 'summary';

const PILL_PRIMARY =
  'btn btn-primary flex shrink-0 items-center gap-[14px] overflow-hidden rounded-[999px] bg-[#28328c] py-[10px] pl-[22px] pr-[10px] font-semibold leading-[1.55] text-white';
const PILL_OUTLINE =
  'btn btn-outline flex shrink-0 items-center rounded-[999px] border-[1.5px] border-solid border-[#28328c] px-[22px] py-[10px] text-[16px] font-semibold leading-[1.55] text-[#28328c] disabled:opacity-40';

export function AssessmentTool() {
  const [stage, setStage] = useState<Stage>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const headingRef = useRef<HTMLHeadingElement>(null);

  const q = t.questions[step];
  const total = t.questions.length;
  const selected = answers[q?.id ?? ''];
  const isLast = step === total - 1;

  const focusPanel = () => requestAnimationFrame(() => headingRef.current?.focus());

  const start = () => { setStage('questions'); setStep(0); focusPanel(); };
  const back = () => { if (step > 0) { setStep(step - 1); focusPanel(); } };
  const next = () => {
    if (isLast) { setStage('summary'); focusPanel(); }
    else { setStep(step + 1); focusPanel(); }
  };
  const restart = () => { setAnswers({}); setStep(0); setStage('intro'); focusPanel(); };

  /* Summary is derived, never stored. Nothing leaves this component. */
  const summary = useMemo(() => {
    const told: string[] = [];
    const flags = new Set<string>();
    const doctorQs: string[] = [];

    t.questions.forEach((question) => {
      const value = answers[question.id];
      if (!value) return;
      const opt = question.options.find((o) => o.value === value);
      if (!opt) return;
      told.push(opt.restate);
      if (opt.flags?.length) {
        opt.flags.forEach((f) => flags.add(f));
        if (doctorQs.length < 4) doctorQs.push(question.doctorQuestion);
      }
    });

    flags.add('understand');
    const reading = Array.from(flags)
      .map((f) => t.readingLinks[f as keyof typeof t.readingLinks])
      .filter(Boolean);

    return { told, reading, doctorQs };
  }, [answers]);

  /* which stepper card is highlighted */
  const activeIntro = stage === 'intro' ? 0 : stage === 'questions' ? 1 : 2;

  return (
    <section id="check" data-node-id="2242:462" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[48px] px-[56px] py-[120px] max-lg:gap-8 max-lg:px-6 max-lg:py-20">
        <p className="whitespace-nowrap text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#28328c]">
          {t.eyebrow}
        </p>
        <h2 className="w-[900px] max-w-full text-center text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
          {t.headline}
        </h2>
        <p className="w-[760px] max-w-full text-center text-[18px] leading-[1.6] text-[#2e3766]">
          {t.subhead}
        </p>
        <p className="w-[760px] max-w-full text-[15px] leading-[1.65] text-[#4a5487]">{t.body}</p>

        <p className="shrink-0 overflow-hidden rounded-[999px] bg-[#eaf8fe] px-[22px] py-[10px] text-[14px] font-semibold leading-[1.5] text-[#28328c] max-sm:text-center">
          {t.heading}
        </p>

        <div className="w-full overflow-hidden rounded-[16px] bg-[#f3f6fc] px-[22px] py-[20px]">
          <p className="w-full text-[13px] leading-[1.65] text-[#4a5487]">{t.disclaimer}</p>
        </div>

        {/* ---------- Tool (2242:465) ---------- */}
        <div
          className="flex w-full items-start overflow-hidden rounded-[32px] bg-white max-lg:flex-col"
          style={{ boxShadow: '0px 30px 60px 0px rgba(10,18,64,0.1)' }}
        >
          {/* Stepper (2242:466) */}
          <div className="flex w-[300px] shrink-0 flex-col items-start gap-[20px] self-stretch overflow-hidden border-r border-solid border-[#e4e8f4] px-[24px] py-[36px] max-lg:w-full max-lg:border-b max-lg:border-r-0">
            {t.intro.map((item, i) => {
              const on = i === activeIntro;
              return (
                <div
                  key={item.title}
                  className={`flex w-full items-start gap-[14px] overflow-hidden rounded-[16px] p-[14px] ${
                    on ? 'bg-[#eaf8fe]' : ''
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className={`flex size-[40px] shrink-0 items-center justify-center rounded-[999px] text-[16px] font-medium ${
                      on
                        ? 'bg-[#28328c] text-white'
                        : 'border border-solid border-[#d5dcf0] bg-white text-[#28328c]'
                    }`}
                  >
                    {i + 1}
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
                    <p className="w-full text-[16px] font-semibold text-[#0b1140]">{item.title}</p>
                    <p className="w-full text-[13px] text-[#4a5487]">{item.body}</p>
                  </div>
                </div>
              );
            })}

            {stage === 'intro' && (
              <button type="button" onClick={start} className={`${PILL_PRIMARY} text-[16px]`}>
                {t.start}
                <ArrowChip />
              </button>
            )}
          </div>

          {/* Questions (2242:485) */}
          <div className="flex min-w-0 flex-1 flex-col items-start gap-[26px] overflow-hidden px-[36px] py-[28px] max-lg:w-full max-lg:px-6">
            {stage === 'intro' && (
              <div className="flex min-h-[320px] w-full items-center justify-center">
                <p className="max-w-[34ch] text-center text-[15px] leading-[1.6] text-[#4a5487]">
                  {t.subhead}
                </p>
              </div>
            )}

            {stage === 'questions' && q && (
              <>
                <div className="flex w-full items-center gap-[12px] overflow-hidden pb-[16px]">
                  <p className="shrink-0 whitespace-nowrap text-[13px] font-medium text-[#4a5487]">
                    Question {step + 1} of {total}
                  </p>
                  <div
                    role="progressbar"
                    aria-valuemin={1}
                    aria-valuemax={total}
                    aria-valuenow={step + 1}
                    aria-label={`Question ${step + 1} of ${total}`}
                    className="relative h-[6px] min-w-0 flex-1 overflow-hidden rounded-[3px] bg-[#e4e8f4]"
                  >
                    <span
                      className="absolute left-0 top-0 block h-[6px] rounded-[3px] bg-[#14bef0] transition-[width] duration-300"
                      style={{ width: `${((step + 1) / total) * 100}%` }}
                    />
                  </div>
                </div>

                <fieldset key={q.id} className="step-in flex w-full flex-col items-start gap-[12px]">
                  <legend className="sr-only">{q.question}</legend>
                  <p className="w-full text-[12px] font-semibold leading-[1.5] tracking-[0.48px] text-[#28328c]">
                    {q.label}
                  </p>
                  <h3
                    ref={headingRef}
                    tabIndex={-1}
                    className="w-full text-[15px] font-medium leading-[1.6] text-[#0b1140] outline-none"
                  >
                    {q.question}
                  </h3>
                  <div
                    role="radiogroup"
                    aria-label={q.question}
                    className="flex w-full flex-wrap content-start items-start gap-[10px]"
                  >
                    {q.options.map((o) => {
                      const active = selected === o.value;
                      return (
                        <button
                          key={o.value}
                          type="button"
                          role="radio"
                          aria-checked={active}
                          onClick={() => setAnswers((a) => ({ ...a, [q.id]: o.value }))}
                          className={`btn shrink-0 whitespace-nowrap rounded-[999px] px-[16px] py-[6px] text-[13px] font-semibold max-sm:whitespace-normal ${
                            active
                              ? 'bg-[#28328c] text-white'
                              : 'bg-[#f3f6fc] text-[#28328c] hover:bg-[#eaf8fe]'
                          }`}
                        >
                          {o.label}
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <div className="flex flex-wrap items-start gap-[12px]">
                  <button type="button" onClick={back} disabled={step === 0} className={PILL_OUTLINE}>
                    {t.back}
                  </button>
                  {isLast ? (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!selected}
                      className={`${PILL_PRIMARY} text-[16px] disabled:opacity-40`}
                    >
                      {t.seeSummary}
                      <ArrowChip />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={next}
                      disabled={!selected}
                      className={PILL_OUTLINE}
                    >
                      {t.next}
                    </button>
                  )}
                </div>
              </>
            )}

            {stage === 'summary' && (
              <div className="flex w-full flex-col items-start gap-[12px]">
                <h3
                  ref={headingRef}
                  tabIndex={-1}
                  className="text-[20px] font-semibold text-[#0b1140] outline-none"
                >
                  {t.summary.heading}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[#4a5487]">{t.summary.body}</p>
                <button
                  type="button"
                  onClick={restart}
                  className={`${PILL_PRIMARY} mt-2 text-[15px]`}
                >
                  {t.startAgain}
                  <ArrowChip />
                </button>
              </div>
            )}

            <div aria-live="polite" className="sr-only">
              {stage === 'questions' ? `Question ${step + 1} of ${total}` : ''}
              {stage === 'summary' ? 'Your summary is ready.' : ''}
            </div>
          </div>

          {/* Your summary (2242:532) */}
          <div className="flex w-[340px] shrink-0 flex-col items-start gap-[18px] self-stretch overflow-hidden bg-[#0b1140] px-[28px] py-[32px] max-lg:w-full">
            <p className="whitespace-nowrap text-[20px] font-semibold text-white">
              {t.summary.heading}
            </p>
            <p className="w-[280px] max-w-full text-[13px] leading-[1.5] text-[#a7b1d9]">
              {t.summary.body}
            </p>

            {stage !== 'summary' ? (
              <p className="text-[13px] leading-[1.5] text-[#a7b1d9]">
                Your summary appears here once you have answered the questions.
              </p>
            ) : (
              <>
                <SummaryBlock title={t.summary.toldUs}>
                  {summary.told.map((s) => (
                    <li key={s} className="w-full text-[14px] leading-[1.5] text-white">
                      {s}
                    </li>
                  ))}
                </SummaryBlock>

                <SummaryBlock title={t.summary.worthReading}>
                  {summary.reading.map((r) => (
                    <li key={r.href} className="w-full">
                      <a
                        href={r.href}
                        className="text-[14px] leading-[1.5] text-white underline-offset-2 hover:underline"
                      >
                        {r.label}
                      </a>
                    </li>
                  ))}
                </SummaryBlock>

                {summary.doctorQs.length > 0 && (
                  <SummaryBlock title={t.summary.doctorQuestions}>
                    {summary.doctorQs.map((d) => (
                      <li key={d} className="w-full text-[14px] leading-[1.5] text-white">
                        {`“${d}”`}
                      </li>
                    ))}
                  </SummaryBlock>
                )}

                <button type="button" onClick={restart} className={`${PILL_PRIMARY} text-[15px]`}>
                  {t.startAgain}
                  <ArrowChip />
                </button>
              </>
            )}

            <p className="w-full text-[11px] leading-[1.6] text-[#8fa0d9]">
              {t.summary.disclaimer}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

function SummaryBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[8px] overflow-hidden rounded-[16px] bg-[rgba(255,255,255,0.06)] p-[16px]">
      <p className="whitespace-nowrap text-[12px] font-semibold text-[#8fe3fa]">{title}</p>
      <ul className="flex w-full flex-col gap-[8px]">{children}</ul>
    </div>
  );
}
