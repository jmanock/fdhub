import Link from "next/link";

export const metadata = {
  title: "Contact Florida Deals Hub",
  description: "Contact Florida Deals Hub for network questions, partnerships, and deal alerts."
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
          Deal alert signups are handled through the newsletter form on the homepage.
        </p>
        <p>
          <Link href="/#newsletter">Get Florida deal alerts</Link>
        </p>
      </article>
    </main>
  );
}
