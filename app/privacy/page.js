import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Florida Deals Hub",
  description: "Privacy policy for Florida Deals Hub.",
  alternates: { canonical: "https://floridadealshub.com/privacy" }
};

export default function PrivacyPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          Florida Deals Hub collects the information you choose to provide, such as an email
          address submitted for free deal alerts.
        </p>
        <p>
          We use email addresses to send Florida deal alerts and network updates. We do not sell
          subscriber email addresses. You can unsubscribe from marketing emails when an unsubscribe
          option is provided in an email.
        </p>
        <p>
          We may receive basic technical information such as browser, device, and traffic data to
          operate and improve the website.
        </p>
        <p>
          Questions can be sent to{" "}
          <a href="mailto:hello@floridadealshub.com">hello@floridadealshub.com</a>.
        </p>
        <p>
          <Link href="/">Return home</Link>
        </p>
      </article>
    </main>
  );
}
