import React from 'react';

const Pricing = () => (
  <section id="pricing" className="bg-sectionBackground p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-secondary text-2xl font-semibold mb-4">API Pricing</h2>
    <p className="mb-4">
      Our API pricing is based on the model used and the number of tokens processed. Here's a breakdown of the costs:
    </p>

    <table className="w-full text-left border-collapse overflow-hidden rounded-lg mb-6">
      <thead className="bg-primary text-white text-sm uppercase tracking-wider">
        <tr>
          <th className="p-4">API</th>
          <th className="p-4">Model</th>
          <th className="p-4">Price per 1K tokens</th>
        </tr>
      </thead>
      <tbody className="bg-sectionBackground text-textColor">
        <tr className="border-b border-border">
          <td className="p-4">OpenAI</td>
          <td className="p-4">GPT-3.5</td>
          <td className="p-4">$0.002</td>
        </tr>
        <tr className="border-b border-border">
          <td className="p-4">OpenAI</td>
          <td className="p-4">GPT-4</td>
          <td className="p-4">$0.03</td>
        </tr>
        <tr className="border-b border-border">
          <td className="p-4">Together AI</td>
          <td className="p-4">Llama-2-70b</td>
          <td className="p-4">$0.0008</td>
        </tr>
        <tr>
          <td className="p-4">Together AI</td>
          <td className="p-4">Llama-2-13b</td>
          <td className="p-4">$0.0006</td>
        </tr>
      </tbody>
    </table>

    <h3 className="text-secondary text-xl font-semibold mb-4">Token Estimation</h3>
    <p className="mb-4">
      On average, 1 token is approximately 4 characters or 0.75 words. For precise pricing, we recommend using our token calculator tool.
    </p>
    <h3 className="text-secondary text-xl font-semibold mb-4">Billing</h3>
    <p>
      You will only be charged for the tokens used in generating the book. The API tracks token usage and bills accordingly. Detailed usage reports are available in your account dashboard.
    </p>
  </section>
);

export default Pricing;
