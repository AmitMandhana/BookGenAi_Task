import React from 'react';

const Endpoints = () => (
  <section id="endpoints" className="bg-sectionBackground p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-secondary text-2xl font-semibold mb-4">Endpoints</h2>
    <h3 className="text-lg font-semibold mb-2">Generate Book</h3>
    <p><span className="bg-primary text-white py-1 px-2 rounded mr-2">POST</span> <span className="font-mono bg-accent text-background py-1 px-2 rounded">/api/generate-book</span></p>
    <h4 className="mt-4 text-xl font-semibold">Request Body</h4>
    <table className="mt-4 w-full bg-sectionBackground rounded border border-border text-sm">
      <thead>
        <tr className="bg-primary text-white">
          <th className="p-2">Parameter</th>
          <th className="p-2">Type</th>
          <th className="p-2">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="p-2 font-semibold text-accent">api</td>
          <td className="p-2">string</td>
          <td className="p-2">The API provider to use. Options: "openai" or "together"</td>
        </tr>
        <tr>
          <td className="p-2 font-semibold text-accent">model</td>
          <td className="p-2">string</td>
          <td className="p-2">The specific model to use (e.g., "gpt-3.5-turbo", "gpt-4", "llama-2-70b")</td>
        </tr>
        <tr>
          <td className="p-2 font-semibold text-accent">topic</td>
          <td className="p-2">string</td>
          <td className="p-2">The main topic or theme of the book</td>
        </tr>
      </tbody>
    </table>
  </section>
);

export default Endpoints;
