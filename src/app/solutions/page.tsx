import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Solutions",
  description:
    "Industry-focused AI solutions designed for real-world impact by CreativeArc.",
};

export default function SolutionsPage() {
  return (
    <main style={{ padding: "96px 24px", maxWidth: "1100px", margin: "0 auto" }}>
      <h1>AI Solutions</h1>

      <p style={{ marginTop: "20px", color: "var(--text-secondary)" }}>
        We design applied AI solutions tailored to specific industries and
        real-world use cases.
      </p>

      <section style={{ marginTop: "64px", display: "grid", gap: "24px" }}>
        <div style={card}>
          <h3>AI for Creativity</h3>
          <p>
            Intelligent systems that assist artists, designers, and creators
            with precision and control.
          </p>
        </div>

        <div style={card}>
          <h3>AI for Automation</h3>
          <p>
            Automate repetitive workflows while maintaining accuracy and
            transparency.
          </p>
        </div>

        <div style={card}>
          <h3>AI for Knowledge & Documents</h3>
          <p>
            Extract, summarize, translate, and reason over large volumes of
            documents.
          </p>
        </div>
      </section>
    </main>
  );
}

const card = {
  background: "var(--card-bg)",
  padding: "24px",
  borderRadius: "16px",
};
