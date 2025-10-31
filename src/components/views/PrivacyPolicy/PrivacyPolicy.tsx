import Image from "next/image";
import React from "react";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="md:pr-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Privacy Policy
          </h1>
        </div>
        <div className="mt-6 md:mt-0">
          <Image
            src="/privacy.png"
            alt="Privacy Illustration"
            width={150}
            height={150}
            className="w-60 h-auto"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700">
        {/* Each section */}
        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. Introduction
          </h2>
          <p className="mb-2">
            Main Construction Inc (Mainco.io) is committed to safeguarding your
            privacy. This Privacy Policy explains how we collect, use, store,
            and protect personal data.
          </p>
          <p>
            By using{" "}
            <a
              href="https://mainco.io"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Mainco.io
            </a>
            , you consent to the practices described herein.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Information We May Collect
          </h2>
          <p>We may collect:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <span className="font-semibold">Personal Identifiers:</span> Name,
              email, phone, company, position, business-specific details.
            </li>
            <li>
              <span className="font-semibold">Usage Data:</span> IP address,
              browser type, operating system, interaction data.
            </li>
            <li>
              <span className="font-semibold">Voluntary Data:</span> Info
              submitted through forms, subscriptions, or surveys.
            </li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Purpose of Data Processing
          </h2>
          <p>We process your data for:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Providing, improving, and quoting construction services.</li>
            <li>Managing communications, inquiries, or newsletters.</li>
            <li>Compliance with legal obligations and recordkeeping.</li>
            <li>Preventing fraud and ensuring website security.</li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Legal Basis for Processing
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Your consent</li>
            <li>Contractual necessity</li>
            <li>Compliance with legal obligations</li>
            <li>
              Legitimate business interests (analytics, service improvement)
            </li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Data Retention
          </h2>
          <p>
            We retain personal data only as long as necessary to fulfill
            purposes or comply with law.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Data Sharing & Disclosure
          </h2>
          <p>
            We do not sell your data. Limited sharing may occur with authorized
            third-party service providers bound by confidentiality.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Your Rights
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Access your personal data</li>
            <li>Request correction or deletion</li>
            <li>Object or restrict processing</li>
            <li>
              Withdraw consent anytime:{" "}
              <a
                href="mailto:support@mainco.io"
                className="text-blue-600 underline hover:text-blue-800"
              >
                support@mainco.io
              </a>
            </li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Data Security
          </h2>
          <p>
            We implement technical and organizational measures to prevent
            unauthorized access or data loss.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Children’s Privacy
          </h2>
          <p>
            Mainco.io is not for individuals under 18. We do not knowingly
            collect data from minors.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. Updates to This Policy
          </h2>
          <p>Latest version will always be available on this page.</p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
