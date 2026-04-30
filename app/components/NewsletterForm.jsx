"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          source: "floridadealshub.com"
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to join right now.");
      }

      setStatus("success");
      setEmail("");
      setMessage("You're on the list. Fresh Florida deals are headed your way.");
    } catch (error) {
      setStatus("error");
      setMessage(error.message || "Unable to join right now.");
    }
  }

  return (
    <form className="newsletter-form" onSubmit={handleSubmit}>
      <label className="sr-only" htmlFor="newsletter-email">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="you@example.com"
        required
      />
      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Me Deals"}
      </button>
      {message ? (
        <p className={`form-message ${status === "error" ? "error" : "success"}`} role="status">
          {message}
        </p>
      ) : null}
    </form>
  );
}
