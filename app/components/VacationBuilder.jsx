"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import SafeImage from "./SafeImage";
import { trackEvent } from "../lib/analytics";

const stepNames = ["Travelers", "Budget", "Vacation type", "Departure & dates"];

function scoreRecommendation(item, answers) {
  let score = 0;
  if (item.travelers.includes(answers.travelers)) score += 25;
  if (item.estimatedCost <= answers.budget) score += 30;
  else if (item.estimatedCost <= answers.budget * 1.2) score += 10;
  if (item.styles.includes(answers.style)) score += 35;
  if (item.departureRegions.includes(answers.region)) score += 10;
  return score;
}

export default function VacationBuilder({ recommendations, budgetOptions, travelerOptions, vacationTypeOptions, departureRegionOptions }) {
  const [step, setStep] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [answers, setAnswers] = useState({
    travelers: "Family of 4",
    budget: 3000,
    style: "Family Vacation",
    region: "Florida",
    startDate: "",
    endDate: ""
  });

  const ranked = useMemo(() => recommendations
    .map((item) => ({ ...item, matchScore: scoreRecommendation(item, answers) }))
    .sort((a, b) => b.matchScore - a.matchScore || a.estimatedCost - b.estimatedCost)
    .slice(0, 6), [answers, recommendations]);

  function selectAnswer(key, value) {
    setAnswers((current) => ({ ...current, [key]: value }));
    trackEvent("vacation_builder_selection", { step: stepNames[step], selection: String(value), page_path: window.location.pathname });
  }

  function startBuilder() {
    setShowResults(false);
    setStep(0);
    trackEvent("vacation_builder_started", { page_path: window.location.pathname });
  }

  function finishBuilder() {
    setShowResults(true);
    trackEvent("vacation_builder_completed", {
      travelers: answers.travelers,
      budget: answers.budget,
      vacation_type: answers.style,
      departure_region: answers.region,
      page_path: window.location.pathname
    });
  }

  const choices = step === 0 ? travelerOptions : step === 1 ? budgetOptions.map((item) => item.label) : step === 2 ? vacationTypeOptions : departureRegionOptions;
  const selected = step === 0 ? answers.travelers : step === 1 ? budgetOptions.find((item) => item.value === answers.budget)?.label : step === 2 ? answers.style : answers.region;
  const selectionKey = step === 0 ? "travelers" : step === 1 ? "budget" : step === 2 ? "style" : "region";

  return (
    <section className="vacation-builder section-pad" aria-labelledby="vacation-builder-title">
      <div className="section-heading">
        <p className="eyebrow">Interactive vacation discovery</p>
        <h2 id="vacation-builder-title">Start With Your Budget. Discover Your Florida Vacation.</h2>
        <p>Answer four quick questions to compare complete trip ideas across the Florida Deals Network.</p>
      </div>

      {!showResults ? (
        <div className="builder-shell">
          <ol className="builder-progress" aria-label="Vacation builder progress">
            {stepNames.map((name, index) => <li className={index === step ? "active" : index < step ? "complete" : ""} key={name}><span>{index + 1}</span>{name}</li>)}
          </ol>
          <div className="builder-panel">
            <p className="best-for-tag">Step {step + 1} of {stepNames.length}</p>
            <h3>{step === 0 ? "Who is traveling?" : step === 1 ? "What is the complete trip budget?" : step === 2 ? "What kind of vacation sounds right?" : "Where are you leaving from?"}</h3>
            <div className="builder-choice-grid">
              {choices.map((choice) => {
                const value = step === 1 ? budgetOptions.find((item) => item.label === choice)?.value : choice;
                return <button className={selected === choice ? "selected" : ""} type="button" onClick={() => selectAnswer(selectionKey, value)} key={choice}>{choice}</button>;
              })}
            </div>
            {step === 3 ? (
              <div className="builder-date-grid">
                <label>Earliest departure<input type="date" value={answers.startDate} onChange={(event) => selectAnswer("startDate", event.target.value)} /></label>
                <label>Latest return<input type="date" value={answers.endDate} onChange={(event) => selectAnswer("endDate", event.target.value)} /></label>
                <p>Dates are optional. They help frame the plan but do not change these editorial cost estimates yet.</p>
              </div>
            ) : null}
            <div className="builder-controls">
              <button type="button" disabled={step === 0} onClick={() => setStep((current) => current - 1)}>Back</button>
              {step < stepNames.length - 1 ? <button type="button" onClick={() => setStep((current) => current + 1)}>Next Step</button> : <button type="button" onClick={finishBuilder}>Show My Vacations</button>}
            </div>
          </div>
        </div>
      ) : (
        <div className="builder-results" aria-live="polite">
          <div className="builder-result-summary">
            <div><span>Travelers</span><strong>{answers.travelers}</strong></div>
            <div><span>Budget</span><strong>Up to ${answers.budget.toLocaleString()}</strong></div>
            <div><span>Vacation type</span><strong>{answers.style}</strong></div>
            <div><span>Departure</span><strong>{answers.region}</strong></div>
            <button type="button" onClick={startBuilder}>Change Answers</button>
          </div>
          <div className="section-heading compact">
            <p className="eyebrow">Recommended vacations</p>
            <h3>Your Strongest Florida Trip Matches</h3>
            <p>Costs are editorial planning estimates, not live quotes. Confirm prices, fees, and availability before booking.</p>
          </div>
          <div className="builder-recommendation-grid">
            {ranked.map((item, index) => (
              <article className="builder-recommendation" key={item.id}>
                <SafeImage src={item.image} alt={item.imageAlt} fallback="/images/fallbacks/florida-travel-placeholder.svg" width="760" height="480" loading="lazy" decoding="async" />
                <div className="builder-recommendation-copy">
                  <p className="story-category-label">Option {index + 1} · {item.matchScore}% match</p>
                  <h3>{item.title}</h3>
                  <p>{item.summary}</p>
                  <dl><div><dt>Estimated cost</dt><dd>{item.costLabel}</dd></div><div><dt>Duration</dt><dd>{item.duration}</dd></div><div><dt>Best months</dt><dd>{item.bestMonths}</dd></div></dl>
                  <p className="best-for-tag">Includes: {item.includes.join(" · ")}</p>
                  <div className="builder-action-row">
                    <Link href={item.packageHref} onClick={() => trackEvent("vacation_recommendation_click", { item_title: item.title, action: "view_package", page_path: window.location.pathname })}>View Package Plan</Link>
                    {item.actions.map(([label, href]) => <a href={href} key={href} onClick={() => trackEvent("vacation_recommendation_click", { item_title: item.title, action: label, outbound_url: href, page_path: window.location.pathname })}>{label}</a>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
