'use client';

/**
 * Screen 7 · Check what matters (Figma 2242:462, relaid to the client's
 * later "dashboard" mock).
 *
 *   tool card   bg #fff, r32, shadow 0 30px 60px rgba(10,18,64,.1)
 *     stepper   w300, border-r #e4e8f4 — three numbered steps, active bg #eaf8fe
 *     middle    flex-1 — "Question N of 8" + progress bar, then every question
 *               as a row: text left, option pills right. The first unanswered
 *               row is highlighted, later rows are dimmed. Every field is optional.
 *     summary   bg #0b1140, w340 — three sub-cards that fill in live:
 *               what you told us · worth reading · questions worth asking
 *   under card  left: "Every field is optional…" note · right: Create my summary
 *
 * Nothing is stored or sent. The summary is derived from local state only.
 */

import { useMemo, useRef, useState } from 'react';
import { screen7 as t } from '@/lib/content';
import { ArrowChip } from './ui';

type Answers = Record<string, string>;

const PILL_PRIMARY =
  'btn btn-primary flex shrink-0 items-center gap-[14px] overflow-hidden rounded-[999px] bg-[#28328c] py-[10px] pl-[22px] pr-[10px] font-semibold leading-[1.55] text-white disabled:opacity-40';

export function AssessmentTool() {
  const [answers, setAnswers] = useState<Answers>({});
  const [summaryShown, setSummaryShown] = useState(false);
  const summaryRef = useRef<HTMLDivElement>(null);

  const total = t.questions.length;
  const answered = t.questions.filter((q) => answers[q.id]).length;
  const current = t.questions.findIndex((q) => !answers[q.id]); // -1 when all answered
  const activeStep = summaryShown ? 2 : answered > 0 ? 1 : 0;

  const answer = (id: string, value: string) => {
    setSummaryShown(false);
    setAnswers((a) => ({ ...a, [id]: value }));
  };
  const createSummary = () => {
    setSummaryShown(true);
    requestAnimationFrame(() => {
      summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      summaryRef.current?.focus();
    });
  };
  const restart = () => { setAnswers({}); setSummaryShown(false); };

  /* Summary is derived, never stored. Nothing leaves this component. */
  const summary = useMemo(() => {
    const told: string[] = [];
    const flags = new Set<string>();
    const doctorQs: string[] = [];
    t.questions.forEach((question) => {
      const opt = question.options.find((o) => o.value === answers[question.id]);
      if (!opt) return;
      told.push(opt.restate);
      if (opt.flags?.length) {
        opt.flags.forEach((f) => flags.add(f));
        if (doctorQs.length < 4) doctorQs.push(question.doctorQuestion);
      }
    });
    if (told.length) flags.add('understand');
    const reading = Array.from(flags)
      .map((f) => t.readingLinks[f as keyof typeof t.readingLinks])
      .filter(Boolean);
    return { told, reading, doctorQs };
  }, [answers]);

  return (
    <section id="check" data-node-id="2242:462" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[48px] px-[56px] py-[120px] max-lg:gap-8 max-lg:px-6 max-lg:py-20">
        <div className="flex w-full flex-col items-center gap-[14px]">
          <p className="whitespace-nowrap text-[13px] font-semibold leading-[1.4] tracking-[1.04px] text-[#28328c]">
            {t.eyebrow}
          </p>
          <h2 className="w-[900px] max-w-full text-center text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
            {t.headline}
          </h2>
          <p className="w-[760px] max-w-full text-center text-[18px] leading-[1.6] text-[#2e3766]">
            {t.subhead}
          </p>
          <p className="w-[760px] max-w-full text-center text-[15px] leading-[1.65] text-[#4a5487]">{t.body}</p>
        </div>

        <p className="shrink-0 overflow-hidden rounded-[999px] bg-[#eaf8fe] px-[22px] py-[10px] text-[14px] font-semibold leading-[1.5] text-[#28328c] max-sm:text-center">
          {t.heading}
        </p>

        <div className="w-full overflow-hidden rounded-[16px] bg-[#f3f6fc] px-[22px] py-[20px]">
          <p className="w-full text-center text-[13px] leading-[1.65] text-[#4a5487]">{t.disclaimer}</p>
        </div>

        {/* ---------- Tool card ---------- */}
        <div className="flex w-full flex-col gap-[24px]">
          <div
            className="flex w-full items-stretch overflow-hidden rounded-[32px] bg-white max-lg:flex-col"
            style={{ boxShadow: '0px 30px 60px 0px rgba(10,18,64,0.1)' }}
          >
            {/* Stepper */}
            <div className="flex w-[300px] shrink-0 flex-col items-start gap-[16px] overflow-hidden border-r border-solid border-[#e4e8f4] px-[24px] py-[36px] max-lg:w-full max-lg:border-b max-lg:border-r-0 max-lg:py-6">
              {t.intro.map((item, i) => {
                const on = i === activeStep;
                return (
                  <div
                    key={item.title}
                    className={`flex w-full items-start gap-[14px] overflow-hidden rounded-[16px] p-[14px] ${on ? 'bg-[#eaf8fe]' : ''}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex size-[40px] shrink-0 items-center justify-center rounded-[999px] text-[16px] font-medium ${
                        on ? 'bg-[#28328c] text-white' : 'border border-solid border-[#d5dcf0] bg-white text-[#28328c]'
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
            </div>

            {/* Questions */}
            <div className="flex min-w-0 flex-1 flex-col items-start gap-[8px] overflow-hidden px-[36px] py-[28px] max-lg:w-full max-lg:px-6">
              <div className="flex w-full items-center gap-[16px] overflow-hidden pb-[16px]">
                <p className="shrink-0 whitespace-nowrap text-[13px] font-medium text-[#4a5487]">
                  Question {current === -1 ? total : current + 1} of {total}
                </p>
                <div
                  role="progressbar"
                  aria-valuemin={0}
                  aria-valuemax={total}
                  aria-valuenow={answered}
                  aria-label={`${answered} of ${total} questions answered`}
                  className="relative h-[6px] min-w-0 flex-1 overflow-hidden rounded-[3px] bg-[#e4e8f4]"
                >
                  <span
                    className="absolute left-0 top-0 block h-[6px] rounded-[3px] bg-[#14bef0] transition-[width] duration-300"
                    style={{ width: `${(answered / total) * 100}%` }}
                  />
                </div>
              </div>

              <ul className="flex w-full flex-col">
                {t.questions.map((q, i) => {
                  const selected = answers[q.id];
                  const isCurrent = i === current;
                  const upcoming = current !== -1 && i > current;
                  return (
                    <li
                      key={q.id}
                      className={`flex w-full flex-wrap items-center justify-between gap-x-[24px] gap-y-[10px] border-b border-solid border-[#e4e8f4] py-[14px] transition-opacity ${
                        isCurrent ? '-mx-[12px] w-[calc(100%+24px)] rounded-[12px] border-transparent bg-[#f3f6fc] px-[12px]' : ''
                      } ${upcoming ? 'opacity-60' : ''}`}
                    >
                      <p className="min-w-[280px] flex-1 text-[15px] font-medium leading-[1.5] text-[#0b1140] max-sm:min-w-full">
                        {q.question}
                      </p>
                      <div
                        role="radiogroup"
                        aria-label={q.question}
                        className={`ml-auto flex shrink-0 flex-wrap items-center gap-[4px] rounded-[999px] p-[4px] max-sm:ml-0 max-sm:w-full max-sm:shrink max-sm:rounded-[16px] ${isCurrent ? 'bg-white' : 'bg-[#f3f6fc]'}`}
                      >
                        {q.options.map((o) => {
                          const active = selected === o.value;
                          return (
                            <button
                              key={o.value}
                              type="button"
                              role="radio"
                              aria-checked={active}
                              onClick={() => answer(q.id, o.value)}
                              className={`btn shrink-0 whitespace-nowrap rounded-[999px] px-[14px] py-[6px] text-[13px] font-semibold max-md:whitespace-normal ${
                                active ? 'bg-[#28328c] text-white' : 'text-[#28328c] hover:bg-white'
                              }`}
                            >
                              {o.label}
                            </button>
                          );
                        })}
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div aria-live="polite" className="sr-only">
                {summaryShown ? 'Your summary is ready.' : `${answered} of ${total} answered`}
              </div>
            </div>

            {/* Your summary */}
            <div
              ref={summaryRef}
              tabIndex={-1}
              className="flex w-[340px] shrink-0 flex-col items-start gap-[16px] overflow-hidden bg-[#0b1140] px-[28px] py-[32px] outline-none max-lg:w-full"
            >
              <p className="whitespace-nowrap text-[20px] font-semibold text-white">{t.summary.heading}</p>
              <p className="w-full text-[13px] leading-[1.5] text-[#a7b1d9]">{t.summary.body}</p>

              {summary.told.length === 0 ? (
                <p className="text-[13px] leading-[1.5] text-[#a7b1d9]">{t.emptySummary}</p>
              ) : (
                <>
                  <SummaryBlock title={t.summary.toldUs}>
                    {summary.told.map((s) => (
                      <li key={s} className="w-full text-[14px] leading-[1.5] text-white">{s}</li>
                    ))}
                  </SummaryBlock>

                  <SummaryBlock title={t.summary.worthReading}>
                    {summary.reading.map((r) => (
                      <li key={r.href} className="w-full">
                        <a href={r.href} className="text-[14px] leading-[1.5] text-white underline-offset-2 hover:underline">
                          {r.label}
                        </a>
                      </li>
                    ))}
                  </SummaryBlock>

                  {summary.doctorQs.length > 0 && (
                    <SummaryBlock title={t.summary.doctorQuestions}>
                      {summary.doctorQs.map((d) => (
                        <li key={d} className="w-full text-[14px] leading-[1.5] text-white">{`“${d}”`}</li>
                      ))}
                    </SummaryBlock>
                  )}

                  {summaryShown && (
                    <button type="button" onClick={restart} className="btn btn-outline rounded-[999px] border-[1.5px] border-solid border-[rgba(255,255,255,0.4)] px-[20px] py-[8px] text-[14px] font-semibold text-white">
                      {t.startAgain}
                    </button>
                  )}
                </>
              )}

              <p className="w-full text-[11px] leading-[1.6] text-[#8fa0d9]">{t.summary.disclaimer}</p>
            </div>
          </div>

          {/* ---------- Under the card: note + CTA ---------- */}
          <div className="flex w-full items-center justify-between gap-[24px] max-lg:flex-col max-lg:items-start">
            <div className="flex min-w-0 flex-col gap-[4px] max-lg:w-full">
              <p className="text-[14px] font-medium text-[#1e2a78]">{t.optionalNote}</p>
              <p className="w-[640px] max-w-full text-[13px] leading-[1.5] text-[#4a5487]">{t.optionalSub}</p>
            </div>
            <button
              type="button"
              onClick={createSummary}
              disabled={answered === 0}
              className={`${PILL_PRIMARY} text-[17px]`}
            >
              {t.createSummary}
              <ArrowChip />
            </button>
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
