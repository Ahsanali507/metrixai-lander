import type { Metadata } from "next";
import { PricingCards, CTASection } from "@/components/sections";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Simple, transparent pricing for MetrixAI. Choose the plan that fits your organization's needs.",
};

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-8 lg:pt-40 lg:pb-12 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />

        <Container size="lg" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Simple, Transparent{" "}
              <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600">
              Choose the plan that fits your organization. All plans include
              core AI features and dedicated support.
            </p>
          </div>
        </Container>
      </section>

      <PricingCards />

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <Container size="md">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {[
              {
                q: "How is pricing calculated?",
                a: "Pricing is based on the number of employees in your organization. Contact us for a custom quote tailored to your needs.",
              },
              {
                q: "Is there a free trial?",
                a: "We offer personalized demos and pilot programs for qualified organizations. Schedule a demo to learn more.",
              },
              {
                q: "Can I upgrade or downgrade my plan?",
                a: "Yes, you can change your plan at any time. Our team will help ensure a smooth transition.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, ACH transfers, and can accommodate enterprise billing requirements.",
              },
              {
                q: "Is there a long-term contract?",
                a: "We offer both annual and multi-year contracts with flexible terms. Monthly billing is available for Growth plans.",
              },
            ].map((item) => (
              <div
                key={item.q}
                className="bg-gray-50 rounded-2xl p-6"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{item.q}</h3>
                <p className="text-gray-600">{item.a}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
