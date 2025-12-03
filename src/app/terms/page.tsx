import type { Metadata } from "next";
import { Container } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "MetrixAI Terms of Service - The agreement governing use of our platform.",
};

export default function TermsPage() {
  return (
    <section className="pt-32 pb-20 lg:pt-40 lg:pb-24">
      <Container size="md">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-gray-600 mb-8">Last updated: November 2024</p>

        <div className="prose prose-lg max-w-none text-gray-600">
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p>
            By accessing or using MetrixAI&apos;s platform and services, you agree to
            be bound by these Terms of Service. If you do not agree to these
            terms, please do not use our services.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            2. Description of Service
          </h2>
          <p>
            MetrixAI provides an AI-powered Talent Intelligence Platform that
            includes career pathing, skill mapping, development plans, coaching,
            and succession planning tools. The specific features available to
            you depend on your subscription plan.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            3. User Accounts
          </h2>
          <p>
            To use our services, you must create an account. You are responsible
            for:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Maintaining the confidentiality of your account credentials</li>
            <li>All activities that occur under your account</li>
            <li>Notifying us immediately of any unauthorized use</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            4. Acceptable Use
          </h2>
          <p>You agree not to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the service for any unlawful purpose</li>
            <li>Attempt to gain unauthorized access to any part of the service</li>
            <li>Interfere with or disrupt the service or servers</li>
            <li>Upload malicious code or content</li>
            <li>Reverse engineer or attempt to extract source code</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            5. Intellectual Property
          </h2>
          <p>
            All content, features, and functionality of the MetrixAI platform
            are owned by MetrixAI and are protected by intellectual property
            laws. You may not copy, modify, distribute, or create derivative
            works without our express permission.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            6. Data Ownership
          </h2>
          <p>
            You retain ownership of all data you upload to our platform. By
            using our services, you grant us a license to process and analyze
            this data to provide our services. We will not share your data with
            third parties except as described in our Privacy Policy.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            7. Payment Terms
          </h2>
          <p>
            Fees for our services are as described in your subscription
            agreement. All fees are non-refundable except as required by law or
            as otherwise specified in your agreement.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            8. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, MetrixAI shall not be liable
            for any indirect, incidental, special, consequential, or punitive
            damages resulting from your use of or inability to use the service.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            9. Termination
          </h2>
          <p>
            We may terminate or suspend your access to the service immediately,
            without prior notice, for any reason, including breach of these
            Terms. Upon termination, your right to use the service will cease
            immediately.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            10. Changes to Terms
          </h2>
          <p>
            We reserve the right to modify these terms at any time. We will
            provide notice of significant changes. Your continued use of the
            service after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
            11. Contact
          </h2>
          <p>
            For questions about these Terms of Service, please contact us at:
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
