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
            <p className="mb-4">
              MetrixAI was founded on a simple observation: organizations were
              losing their best people not because of compensation or benefits,
              but because employees couldn&apos;t see a clear path forward.
            </p>
            <p className="mb-4">
              Traditional HR systems track employee data but fail to connect
              skills with opportunities. Managers struggle to identify who&apos;s
              ready for promotion. Employees leave because they can&apos;t see how to
              grow. And HR leaders lack the insights needed to build effective
              talent pipelines.
            </p>
            <p className="mb-4">
              We built MetrixAI to change this. By combining advanced AI with
              deep HR expertise, we&apos;ve created a platform that makes talent
              intelligence accessible to every organization—not just the
              Fortune 500.
            </p>
            <p>
              Today, MetrixAI helps organizations of all sizes understand their
              workforce at a deeper level, enabling data-driven decisions about
              career development, succession planning, and internal mobility.
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
