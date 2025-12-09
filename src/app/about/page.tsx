import type { Metadata } from "next";
import { Section, Container } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Target, Heart, Lightbulb, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about MetrixAI's mission to transform talent management with AI-powered intelligence.",
};

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description:
      "We believe every organization should have access to world-class talent intelligence.",
  },
  {
    icon: Heart,
    title: "People First",
    description:
      "We put employees at the center of everything we build, enabling growth and development.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We leverage cutting-edge AI to solve complex talent challenges in new ways.",
  },
  {
    icon: Users,
    title: "Partnership",
    description:
      "We work alongside our customers as partners, not just vendors.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
        <div className="absolute inset-0 animated-gradient" />
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white" />

        <Container size="lg" className="relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our Mission
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We&apos;re building the future of talent management. MetrixAI empowers
              organizations to unlock the full potential of their workforce
              through AI-powered insights that drive retention, growth, and
              success.
            </p>
          </div>
        </Container>
      </section>

      {/* Story Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-4 text-lg font-medium text-gray-800">
              MetrixAI was founded on one simple observation: there is a lack of visibility into our internal talent.
            </p>
            <p className="mb-4">
              HR leaders face a constant challenge: building strong talent pipelines while preventing costly turnover. Traditional systems track data but don&apos;t solve the real problem—helping HR professionals connect skills to opportunities in a way that drives retention and growth.
            </p>
            <p className="mb-4">
              MetrixAI was created to change that. We give HR leaders the insights they need to identify hidden skills, spot promotion readiness, and design career paths that keep employees engaged. Instead of relying on guesswork, HR professionals can make confident, data-driven decisions about succession planning, workforce agility, and internal mobility.
            </p>
            <p className="mb-4">
              For employees, this means clarity. They can finally see how their skills translate into future opportunities, making career growth visible and achievable. For HR, it means solving the problem at the source: empowering people while strengthening the organization.
            </p>
            <p>
              By combining advanced AI with deep HR expertise, MetrixAI makes talent intelligence accessible to every organization—not just the Fortune 500. Today, we help HR leaders transform workforce data into actionable strategies that unlock potential, reduce attrition, and build resilient teams.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section background="gray" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </Section>

      {/* Contact */}
      <Section background="white" spacing="lg">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            Have questions? We&apos;d love to hear from you.
          </p>
          <a
            href="mailto:info@metrixai.io"
            className="text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            info@metrixai.io
          </a>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
