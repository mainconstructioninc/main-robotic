import React from "react";

const CookiePolicy = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="md:pr-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Cookie Policy
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700">
        {/* Each section */}
        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            1. What Are Cookies
          </h2>
          <p className="mb-2">
            Cookies are small text files stored on your device to enable site
            functionality, analyze usage, and personalize content.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            2. Types of Cookies Used
          </h2>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              <span className="font-semibold">Essential Cookies:</span> Required
              for website operation
            </li>
            <li>
              <span className="font-semibold">Analytics Cookies:</span> Measure
              traffic and performance.
            </li>
            <li>
              <span className="font-semibold">Preference Cookies:</span>{" "}
              Remember user settings.
            </li>
            <li>
              <span className="font-semibold">Marketing Cookies: </span> Help
              deliver relevant advertising (if applicable).
            </li>
          </ul>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            3. Managing Cookies
          </h2>
          <p>
            You can modify your browser settings to block or delete cookies.
            Note that disabling cookies may impact site performance.
          </p>
        </section>

        <section className="pb-6 border-b border-gray-200 last:border-none">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">
            4. Consent
          </h2>
          <p>
            By continuing to use Mainco.io, you consent to our use of cookies as
            outlined in this policy.
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
