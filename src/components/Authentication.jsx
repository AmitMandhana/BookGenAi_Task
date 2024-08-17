import React, { useState } from 'react';

const Authentication = () => {
  const [apiKey, setApiKey] = useState('');

  const generateApiKey = () => {
    // Simulate an API call to generate an API key
    setTimeout(() => {
      setApiKey('your-generated-api-key');
    }, 1000);
  };

  return (
    <section id="authentication" className="bg-sectionBackground p-6 rounded-lg shadow-md mb-6 border border-border">
      <h2 className="text-secondary text-2xl font-semibold mb-4">Authentication</h2>
      <p>To use the API, you need to include your API key in the header of each request:</p>
      <pre className="bg-codeBackground text-sm p-4 rounded mt-4">
        <code>X-API-Key: YOUR_API_KEY</code>
      </pre>
      <button onClick={generateApiKey} className="mt-4 bg-accent text-background py-2 px-4 rounded shadow hover:bg-sky-400 transition">
        Generate API Key
      </button>
      {apiKey && (
        <div id="apiKeyDisplay" className="bg-codeBackground p-4 rounded mt-4 text-sm">
          <strong>Your API Key:</strong> {apiKey}
        </div>
      )}
    </section>
  );
};

export default Authentication;
