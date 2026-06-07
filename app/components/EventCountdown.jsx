"use client";

import { useEffect, useState } from "react";

function getRemaining(startDate) {
  const distance = new Date(startDate).getTime() - Date.now();
  if (distance <= 0) return null;
  return {
    days: Math.floor(distance / 86400000),
    hours: Math.floor((distance % 86400000) / 3600000),
    minutes: Math.floor((distance % 3600000) / 60000)
  };
}

export default function EventCountdown({ startDate, dateVerified = false }) {
  const [remaining, setRemaining] = useState(() => dateVerified && startDate ? getRemaining(startDate) : null);

  useEffect(() => {
    if (!dateVerified || !startDate) return undefined;
    const timer = window.setInterval(() => setRemaining(getRemaining(startDate)), 60000);
    return () => window.clearInterval(timer);
  }, [dateVerified, startDate]);

  if (!dateVerified || !startDate) {
    return <div className="event-countdown event-countdown-pending"><span>Schedule status</span><strong>Verify official dates before booking</strong><p>Countdowns activate only after a date is confirmed from an official event source.</p></div>;
  }

  if (!remaining) {
    return <div className="event-countdown"><span>Event timing</span><strong>Event window has started</strong><p>Confirm current schedules and entry requirements with the official source.</p></div>;
  }

  return (
    <div className="event-countdown" aria-label="Verified event countdown">
      <span>Verified event countdown</span>
      <div><strong>{remaining.days}</strong><small>Days</small><strong>{remaining.hours}</strong><small>Hours</small><strong>{remaining.minutes}</strong><small>Minutes</small></div>
    </div>
  );
}
