import Link from "next/link";

export const metadata = {
  title: "Contact Florida Deals Hub | Questions, Corrections & Partnerships",
  description:
    "Contact Florida Deals Hub for Florida travel network questions, corrections, partnerships, and feedback about deal or guide pages.",
  alternates: {
    canonical: "https://floridadealshub.com/contact"
  }
};

export default function ContactPage() {
  return (
    <main className="section-pad simple-page">
      <article className="content-card">
        <p className="eyebrow">Contact</p>
        <h1>Contact Florida Deals Hub</h1>
        <p>
          For network questions, partnership inquiries, corrections, or general feedback, email{" "}
          <a href="mailto:hello@floridadealshub.com">hello@floridadealshub.com</a>.
        </p>
        <p>
          If a price, schedule, event, restaurant detail, attraction listing, hotel note, cruise
          detail, or flight route appears out of date, send the page URL and the source you are
          comparing it against. Florida travel information can change quickly, and the Hub is built
          to route visitors toward current sources.
        </p>
        <p>
          Deal alert signups are handled through the newsletter form on the homepage.
        </p>
        <p>
          <Link href="/#newsletter">Get Florida deal alerts</Link>
        </p>
      </article>
    </main>
  );
}
