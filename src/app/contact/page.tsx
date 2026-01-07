import type { Metadata } from "next";
import ContactHero from "@/components/sections/contact/ContactHero";
import ContactInfo from "@/components/sections/contact/ContactInfo";
import ContactForm from "@/components/sections/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with CreativeArc to discuss AI solutions, products, collaborations, or opportunities.",
};

export default function ContactPage() {
  return (
    <main>
      <ContactHero />
      <ContactInfo />
      <ContactForm />
    </main>
  );
}
