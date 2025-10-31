import React from "react";

const Disclaimer = () => {
  return (
    <div className="max-w-5xl mx-auto py-20 mt-10">
      {/* Header */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12">
        <div className="md:pr-8">
          <h1 className="text-3xl md:text-5xl font-extrabold mb-3 text-gray-900">
            Disclaimer
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-8 text-gray-700">
        {/* Each section */}
        <section className="pb-6 border-b border-gray-200 last:border-none">
          <p className="mb-2">
            All content on Mainco.io, including but not limited to project
            photographs, material specifications, timeline estimates, and cost
            examples, is for general informational purposes only. Main
            Construction Inc does not guarantee the accuracy, completeness, or
            reliability of any information or materials provided. Any reference
            to past projects is for illustrative purposes only and does not
            constitute a guarantee of future results or pricing.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Disclaimer;
