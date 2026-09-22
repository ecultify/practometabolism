'use client';

/**
 * Screen 7 · Check what matters — built to the client's dashboard mock.
 *
 *   tool card   bg #fff, r32, shadow 0 30px 60px rgba(10,18,64,.1)
 *     stepper   w300, border-r #e4e8f4 — 1 Your routine · 2 Numbers you have · 3 Your summary
 *     middle    step 1: "Question N of 6" + progress bar, six yes/no rows
 *               step 2: optional number fields with reference values
 *               step 3: "Your summary is ready"
 *     summary   bg #0b1140, w340 — What you told us · Numbers you entered ·
 *               Questions worth asking, filling in live
 *   under card  left: "Every field is optional…" · right: Create my summary
 *
 * Nothing is stored or sent. The summary is derived from local state only.
 */

import { useMemo, useRef, useState } from 'react';
import { screen7 as t, tool } from '@/lib/content';
import { ArrowChip, TitleLines } from './ui';


const PRIMARY =
  'btn btn-primary flex shrink-0 items-center gap-[14px] overflow-hidden rounded-[999px] bg-[#28328c] py-[10px] pl-[22px] pr-[10px] text-[17px] font-semibold leading-[1.55] text-white';
const OUTLINE =
  'btn btn-outline flex shrink-0 items-center rounded-[999px] border-[1.5px] border-solid border-[#28328c] px-[22px] py-[10px] text-[15px] font-semibold leading-[1.55] text-[#28328c]';

/* "Worth mentioning" when a number sits at or above the reference limit */
function flag(id: string, raw: string): boolean | null {
  const f = tool.fields.find((x) => x.id === id);
  if (!f || !raw.trim()) return null;
  const limit = f.limit;
  if (typeof limit === 'number') {
    const n = Number(raw.replace(/[^\d.]/g, ''));
    return Number.isFinite(n) && n > 0 ? n >= limit : null;
  }
  const m = raw.match(/(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)/);
  if (!m) return null;
  return Number(m[1]) >= limit[0] || Number(m[2]) >= limit[1];
}

export function AssessmentTool() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [numbers, setNumbers] = useState<Record<string, string>>({});
  const summaryRef = useRef<HTMLDivElement>(null);

  const questions = t.questions;
  const total = questions.length;
  const answered = questions.filter((q) => answers[q.id]).length;
  const current = questions.findIndex((q) => !answers[q.id]);

  const go = (i: number) => {
    setStep(i);
    if (i === 2) {
      requestAnimationFrame(() => {
        summaryRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        summaryRef.current?.focus();
      });
    }
  };
  const restart = () => { setAnswers({}); setNumbers({}); setStep(0); };

  const summary = useMemo(() => {
    // every answered question is restated; doctor questions come from the options the script flags
    const picked = questions
      .map((q) => ({ q, opt: q.options.find((o) => o.value === answers[q.id]) }))
      .filter((x): x is { q: (typeof questions)[number]; opt: (typeof questions)[number]['options'][number] } => Boolean(x.opt));
    const told = picked.map(({ q, opt }) => ({ id: q.id, restate: opt.restate }));
    const entered = tool.fields
      .filter((f) => numbers[f.id]?.trim())
      .map((f) => ({ ...f, value: numbers[f.id].trim(), worth: flag(f.id, numbers[f.id]) === true }));
    const asks: string[] = [];
    picked.forEach(({ q, opt }) => { if (opt.flags?.length) asks.push(q.doctorQuestion); });
    entered.forEach((f) => { if (f.worth) asks.push(f.ask); });
    return { told, entered, asks: asks.slice(0, 4), any: answered > 0 || entered.length > 0 };
  }, [answers, numbers, answered]);

  return (
    <section id="check" data-node-id="2242:462" className="scroll-mt-24 bg-[#f3f6fc]">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-[28px] px-[56px] py-[80px] max-lg:gap-6 max-lg:px-6 max-lg:py-14">
        <div className="flex w-full flex-col items-center gap-[14px]">
          <h2 className="w-[900px] max-w-full text-center text-[clamp(2.25rem,3.89vw,3.5rem)] font-light leading-[1.1] tracking-[-0.02em] text-[#0b1140]">
            <TitleLines text={t.headline} at={1} inline />
          </h2>
          <p data-reveal className="w-[760px] max-w-full text-center text-[18px] leading-[1.6] text-[#2e3766]">{t.subhead}</p>
          <p data-reveal className="w-[760px] max-w-full text-center text-[15px] leading-[1.65] text-[#4a5487]">{t.body}</p>
        </div>

        <p data-reveal className="shrink-0 overflow-hidden rounded-[999px] bg-[#eaf8fe] px-[22px] py-[10px] text-[14px] font-semibold leading-[1.5] text-[#28328c] max-sm:text-center">
          {t.heading}
        </p>

        <p className="w-full text-center text-[13px] leading-[1.65] text-[#4a5487]">{t.disclaimer}</p>

        {/* ---------- Tool card ---------- */}
        <div className="flex w-full flex-col gap-[24px] pt-[12px]">
          <div
            data-reveal
            className="flex w-full items-stretch overflow-hidden rounded-[32px] bg-white max-lg:flex-col"
            style={{ boxShadow: '0px 30px 60px 0px rgba(10,18,64,0.1)' }}
          >
            {/* Stepper */}
            <div className="flex w-[300px] shrink-0 flex-col items-start gap-[12px] overflow-hidden border-r border-solid border-[#e4e8f4] px-[24px] py-[36px] max-lg:w-full max-lg:border-b max-lg:border-r-0 max-lg:py-6">
              {tool.steps.map((item, i) => {
                const on = i === step;
                return (
                  <button
                    key={item.title}
                    type="button"
                    onClick={() => go(i)}
                    aria-current={on ? 'step' : undefined}
                    className={`btn flex w-full items-start gap-[14px] overflow-hidden rounded-[16px] p-[14px] text-left ${on ? 'bg-[#eaf8fe]' : 'hover:bg-[#f3f6fc]'}`}
                  >
                    <span
                      aria-hidden="true"
                      className={`flex size-[40px] shrink-0 items-center justify-center rounded-[999px] text-[16px] font-medium ${
                        on ? 'bg-[#28328c] text-white' : 'border border-solid border-[#d5dcf0] bg-white text-[#28328c]'
                      }`}
                    >
                      {i + 1}
                    </span>
                    <span className="flex min-w-0 flex-1 flex-col items-start gap-[2px]">
                      <span className="w-full text-[16px] font-semibold text-[#0b1140]">{item.title}</span>
                      <span className="w-full text-[13px] leading-[1.5] text-[#4a5487]">{item.body}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Middle */}
            <div className="flex min-w-0 flex-1 flex-col items-start overflow-hidden px-[36px] py-[28px] max-lg:w-full max-lg:px-6">
              {step === 0 && (
                <>
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
                    {questions.map((q, i) => {
                      const isCurrent = i === current;
                      const upcoming = current !== -1 && i > current;
                      // long option sets go on their own row under the question
                      const wide = q.options.reduce((n, o) => n + o.label.length, 0) > 40;
                      return (
                        <li
                          key={q.id}
                          className={`flex w-full items-center justify-between gap-[24px] border-b border-solid border-[#e4e8f4] py-[14px] transition-opacity max-md:flex-col max-md:items-start max-md:gap-[10px] ${wide ? '!flex-col !items-start !justify-start gap-[10px]' : ''} ${
                            isCurrent ? '-mx-[12px] w-[calc(100%+24px)] rounded-[12px] border-transparent bg-[#f3f6fc] px-[12px]' : ''
                          } ${upcoming ? 'opacity-60' : ''}`}
                        >
                          <p className="min-w-0 flex-1 text-[15px] font-medium leading-[1.5] text-[#0b1140] max-md:w-full">{q.question}</p>
                          <div
                            role="radiogroup"
                            aria-label={q.question}
                            className={`flex shrink-0 flex-wrap items-center gap-[4px] rounded-[999px] p-[4px] max-md:rounded-[16px] ${wide ? 'max-w-full' : 'justify-end max-md:justify-start'} ${isCurrent ? 'bg-white' : 'bg-[#f3f6fc]'}`}
                          >
                            {q.options.map((o) => {
                              const v = o.value;
                              const active = answers[q.id] === v;
                              return (
                                <button
                                  key={v}
                                  type="button"
                                  role="radio"
                                  aria-checked={active}
                                  onClick={() => setAnswers((a) => ({ ...a, [q.id]: v }))}
                                  className={`btn shrink-0 rounded-[999px] px-[16px] py-[6px] text-[13px] font-semibold ${
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
                </>
              )}

              {step === 1 && (
                <div className="flex w-full flex-col items-start gap-[6px]">
                  <p className="text-[16px] font-semibold text-[#0b1140]">{tool.steps[1].title}</p>
                  <p className="pb-[10px] text-[13px] leading-[1.5] text-[#4a5487]">{tool.steps[1].body}</p>
                  <ul className="flex w-full flex-col">
                    {tool.fields.map((f) => {
                      const worth = flag(f.id, numbers[f.id] ?? '');
                      return (
                        <li key={f.id} className="flex w-full items-center justify-between gap-[24px] border-b border-solid border-[#e4e8f4] py-[14px] max-sm:flex-col max-sm:items-start max-sm:gap-[8px]">
                          <label htmlFor={`num-${f.id}`} className="flex min-w-0 flex-1 flex-col">
                            <span className="text-[15px] font-medium leading-[1.5] text-[#0b1140]">{f.label}</span>
                            <span className="text-[12px] text-[#4a5487]">{tool.refPrefix} {f.ref}</span>
                          </label>
                          <div className="flex shrink-0 items-center gap-[10px]">
                            {worth && (
                              <span className="whitespace-nowrap rounded-[999px] bg-[#eaf8fe] px-[10px] py-[3px] text-[11px] font-semibold text-[#28328c]">
                                {tool.worth}
                              </span>
                            )}
                            <span className="flex items-center gap-[6px] rounded-[999px] border border-solid border-[#d5dcf0] bg-white px-[14px] py-[6px]">
                              <input
                                id={`num-${f.id}`}
                                type="text"
                                inputMode="decimal"
                                autoComplete="off"
                                placeholder={f.placeholder}
                                value={numbers[f.id] ?? ''}
                                onChange={(e) => setNumbers((n) => ({ ...n, [f.id]: e.target.value }))}
                                className="w-[80px] bg-transparent text-[14px] font-semibold text-[#0b1140] outline-none placeholder:text-[#a7b1d9]"
                              />
                              <span className="text-[12px] text-[#4a5487]">{f.unit}</span>
                            </span>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}

              {step === 2 && (
                <div className="flex w-full flex-col items-start gap-[8px]">
                  <p className="text-[20px] font-semibold text-[#0b1140]">{tool.summary.ready}</p>
                  <p className="text-[15px] leading-[1.6] text-[#4a5487]">{tool.summary.readyBody}</p>
                  <button type="button" onClick={restart} className={`${OUTLINE} mt-[10px]`}>
                    {tool.startAgain}
                  </button>
                </div>
              )}

              <div aria-live="polite" className="sr-only">
                {step === 2 ? tool.summary.ready : `${answered} of ${total} answered`}
              </div>
            </div>

            {/* Your summary */}
            <div
              ref={summaryRef}
              tabIndex={-1}
              className="flex w-[340px] shrink-0 flex-col items-start gap-[14px] overflow-hidden bg-[#0b1140] px-[28px] py-[32px] outline-none max-lg:w-full"
            >
              <p className="whitespace-nowrap text-[20px] font-semibold text-white">{tool.summary.heading}</p>
              <p className="w-full text-[13px] leading-[1.5] text-[#a7b1d9]">{tool.summary.body}</p>

              {!summary.any ? (
                <p className="text-[13px] leading-[1.5] text-[#a7b1d9]">{tool.summary.empty}</p>
              ) : (
                <>
                  <Block title={tool.summary.toldUs}>
                    {summary.told.length === 0 ? (
                      <li className="text-[14px] leading-[1.5] text-[#c9d1ee]">{tool.summary.nothing}</li>
                    ) : (
                      summary.told.map((q) => (
                        <li key={q.id} className="w-full text-[14px] leading-[1.5] text-white">{q.restate}</li>
                      ))
                    )}
                  </Block>

                  {summary.entered.length > 0 && (
                    <Block title={tool.summary.numbers}>
                      {summary.entered.map((f) => (
                        <li key={f.id} className="flex w-full flex-wrap items-center gap-x-[8px] gap-y-[4px] text-[14px] leading-[1.5] text-white">
                          <span>
                            {f.label} {f.value}{f.unit === '%' ? '%' : ''} · {tool.refPrefix} {f.ref}
                          </span>
                          {f.worth && (
                            <span className="whitespace-nowrap rounded-[999px] bg-[#14bef0] px-[10px] py-[2px] text-[11px] font-semibold text-[#0b1140]">
                              {tool.worth}
                            </span>
                          )}
                        </li>
                      ))}
                    </Block>
                  )}

                  {summary.asks.length > 0 && (
                    <Block title={tool.summary.asking}>
                      {summary.asks.map((d) => (
                        <li key={d} className="w-full text-[14px] leading-[1.5] text-white">{`“${d}”`}</li>
                      ))}
                    </Block>
                  )}
                </>
              )}

              <p className="w-full text-[11px] leading-[1.6] text-[#8fa0d9]">{t.summary.disclaimer}</p>
            </div>
          </div>

          {/* ---------- Under the card ---------- */}
          <div className="flex w-full items-center justify-between gap-[24px] max-lg:flex-col max-lg:items-start">
            <div className="flex min-w-0 flex-col gap-[4px] max-lg:w-full">
              <p className="text-[14px] font-medium text-[#1e2a78]">{tool.optionalNote}</p>
              <p className="w-[640px] max-w-full text-[13px] leading-[1.5] text-[#4a5487]">{tool.optionalSub}</p>
            </div>
            <div className="flex shrink-0 flex-wrap items-center gap-[12px]">
              {step === 0 && (
                <button type="button" onClick={() => go(1)} className={OUTLINE}>{tool.nextNumbers}</button>
              )}
              {step === 1 && (
                <button type="button" onClick={() => go(0)} className={OUTLINE}>{tool.backRoutine}</button>
              )}
              {step < 2 ? (
                <button type="button" onClick={() => go(2)} className={PRIMARY}>
                  {tool.createSummary}
                  <ArrowChip />
                </button>
              ) : (
                <button type="button" onClick={restart} className={PRIMARY}>
                  {tool.startAgain}
                  <ArrowChip />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex w-full flex-col items-start gap-[8px] overflow-hidden rounded-[16px] bg-[rgba(255,255,255,0.06)] p-[16px]">
      <p className="whitespace-nowrap text-[12px] font-semibold text-[#8fe3fa]">{title}</p>
      <ul className="flex w-full flex-col gap-[8px]">{children}</ul>
    </div>
  );
}
