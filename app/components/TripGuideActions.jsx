"use client";

import { useEffect, useState } from "react";

function emit(event, payload) {
  window.gtag?.("event", event, payload);
  window.dataLayer?.push({ event, ...payload });
}

export function GuideLink({ href, route, children, className, eventName = "related_guide_click", placement = "trip_reality_next_steps" }) {
  return <a className={className} href={href} onClick={() => emit(eventName, { network: "Florida Deals Network", site: "floridadealshub.com", route, destination: href, placement })}>{children}</a>;
}

export function TripChecklist({ route, storageKey, items }) {
  const [checked, setChecked] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      try { setChecked(JSON.parse(window.localStorage.getItem(storageKey) || "{}")); } catch { setChecked({}); }
    });
    return () => window.cancelAnimationFrame(frame);
  }, [storageKey]);

  function persist(next, action) {
    setChecked(next);
    window.localStorage.setItem(storageKey, JSON.stringify(next));
    emit("trip_checklist_interaction", { network: "Florida Deals Network", site: "floridadealshub.com", route, action, completed_items: Object.values(next).filter(Boolean).length });
  }

  async function copyChecklist() {
    await navigator.clipboard.writeText(items.map((item) => `${checked[item] ? "[x]" : "[ ]"} ${item}`).join("\n"));
    setMessage("Checklist copied");
    emit("trip_checklist_interaction", { network: "Florida Deals Network", site: "floridadealshub.com", route, action: "copy", completed_items: Object.values(checked).filter(Boolean).length });
  }

  return (
    <section className="reality-checklist" aria-labelledby={`${storageKey}-title`}>
      <p className="eyebrow">Private, on this device</p>
      <h2 id={`${storageKey}-title`}>My Trip Checklist</h2>
      <p>Selections stay in this browser. No account or personal information is used.</p>
      <div className="reality-checklist-grid">
        {items.map((item) => <label key={item}><input checked={Boolean(checked[item])} onChange={(event) => persist({ ...checked, [item]: event.target.checked }, event.target.checked ? "check" : "uncheck")} type="checkbox" /><span>{item}</span></label>)}
      </div>
      <div className="reality-checklist-actions">
        <button onClick={() => { persist({}, "reset"); setMessage("Checklist reset"); }} type="button">Reset checklist</button>
        <button onClick={() => { window.print(); emit("trip_checklist_interaction", { network: "Florida Deals Network", site: "floridadealshub.com", route, action: "print", completed_items: Object.values(checked).filter(Boolean).length }); }} type="button">Print checklist</button>
        <button onClick={copyChecklist} type="button">Copy checklist</button>
        {message ? <span role="status">{message}</span> : null}
      </div>
    </section>
  );
}
