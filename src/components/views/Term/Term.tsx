import React from "react";

const Term = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="md:pr-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Term of Use
          </h1>
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
            Welcome to Main Construction Inc{" "}
            <a
              href="https://mainco.io"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Mainco.io
            </a>
            . These Terms of Use govern your access to and use of our website,
            which provides information about construction services, projects,
            and related content, and any materials made available through it. By
            accessing or using Mainco.io, you agree to be bound by these Terms
            and our Privacy Policy. If you do not agree, please discontinue use
            immediately.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Eligibility
          </h2>
          <p>
            You must be at least 18 years old or of legal age in your
            jurisdiction to use this website. By accessing Mainco.io, you
            represent that you have the legal capacity to enter into binding
            agreements.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Use of Website
          </h2>
          <p>
            You agree to use the website only for lawful purposes, and
            specifically agree not to misuse any project plans, proprietary
            construction methodologies, or client information presented on the
            site, and in a manner that does not infringe upon the rights of
            others. You may not:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Use the site for fraudulent or harmful purposes;</li>
            <li>
              Attempt to gain unauthorized access to our systems, servers, or
              data;
            </li>
            <li>Interfere with the website’s functionality or integrity.</li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Intellectual Property Rights
          </h2>
          <p>
            All materials, designs, graphics, project plans, renderings,
            proprietary construction methodologies, and trademarks displayed on
            Mainco.io are owned or licensed by MAIN Construction Inc.You are
            granted a limited, non-exclusive, non-transferable license to access
            and use the website for personal or business purposes consistent
            with these Terms. <br /> Reproduction, distribution, or modification
            without our prior written consent is strictly prohibited.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            5. Third-Party Links
          </h2>
          <p>
            <a
              href="https://mainco.io"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Mainco.io
            </a>{" "}
            may include links to third-party websites for informational
            purposes. We have no control over the content or policies of such
            websites and disclaim responsibility for any damages or losses
            arising from their use.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            6. Disclaimer of Warranties
          </h2>
          <p>
            Main Construction Inc{" "}
            <a
              href="https://mainco.io"
              target="_blank"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Mainco.io
            </a>{" "}
            is provided “as is” and “as available.” We make no warranties,
            express or implied, regarding the accuracy, completeness, or
            reliability of the information presented, including but not limited
            to project examples, material specifications, or service
            descriptions.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            7. Limitation of Liability
          </h2>
          <p>
            To the maximum extent permitted by law, Main Construction Inc, its
            affiliates, directors, employees, and partners shall not be liable
            for any indirect, incidental, consequential, or punitive damages
            arising from your use of the website.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            8. Indemnification
          </h2>
          <p>
            You agree to indemnify and hold harmless Main Construction Inc from
            any claims, losses, or liabilities arising out of your breach of
            these Terms or misuse of the website.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            9. Governing Law & Jurisdiction
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with
            the laws of the United States, without regard to its conflict of
            laws principles. Any dispute shall be submitted to the exclusive
            jurisdiction of the courts in that jurisdiction.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            10. Amendments
          </h2>
          <p>
            Main Construction Inc (Mainco.io) reserves the right to modify or
            update these Terms at any time. Updates will be posted on this page
            with a revised “Last Updated” date.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Term;
