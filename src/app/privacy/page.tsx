import type { Metadata } from "next";
import { Section, Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "MetrixAI Privacy Policy - How we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
      <Container size="md">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-gray-600 mb-8">Last updated: November 2024</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Introduction
          </h2>
          <p>
            MetrixAI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy.
            This Privacy Policy explains how we collect, use, disclose, and
            safeguard your information when you use our platform and services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Personal Information:</strong> Name, email address, job
              title, company name, and other contact information you provide.
            </li>
            <li>
              <strong>Usage Data:</strong> Information about how you interact
              with our platform, including pages visited, features used, and
              time spent.
            </li>
            <li>
              <strong>Employee Data:</strong> For customers using our platform,
              we process employee information as directed by your organization.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. How We Use Your Information
          </h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Provide, maintain, and improve our services</li>
            <li>Process your requests and respond to inquiries</li>
            <li>Send you updates, marketing communications, and other information</li>
            <li>Analyze usage patterns to improve user experience</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. Our platform is SOC 2
            compliant and we use industry-standard encryption for data in
            transit and at rest.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Data Sharing
          </h2>
          <p>
            We do not sell your personal information. We may share your
            information with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Service providers who assist in operating our platform</li>
            <li>Legal authorities when required by law</li>
            <li>Business partners with your consent</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Your Rights
          </h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access your personal information</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Opt out of marketing communications</li>
            <li>Data portability</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Cookies
          </h2>
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and deliver personalized content. You can manage
            your cookie preferences through your browser settings.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify
            you of any changes by posting the new Privacy Policy on this page
            and updating the &quot;Last updated&quot; date.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Contact Us
          </h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us at:
          </p>
          <p className="mt-2">
            <a
              href="mailto:info@metrixai.io"
              className="text-blue-600 hover:text-blue-700"
            >
              info@metrixai.io
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
