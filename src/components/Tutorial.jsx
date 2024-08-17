import React from 'react';

const Tutorial = () => (
  <section id="tutorial" className="bg-sectionBackground p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-secondary text-2xl font-semibold mb-4">Tutorial</h2>
    <p className="mb-4">
      Follow these steps to get started with the Book Generator API:
    </p>

    <ol className="list-decimal list-inside space-y-4">
      <li>
        <h3 className="text-lg font-semibold">Step 1: Get Your API Key</h3>
        <p>
          Sign up on our platform and generate an API key from your dashboard. This key is required to authenticate your API requests.
        </p>
      </li>

      <li>
        <h3 className="text-lg font-semibold">Step 2: Install Dependencies</h3>
        <p>
          If you’re using Node.js, install the required libraries:
        </p>
        <pre className="bg-codeBackground text-sm p-4 rounded mt-2">
          <code>npm install axios</code>
        </pre>
      </li>

      <li>
        <h3 className="text-lg font-semibold">Step 3: Make Your First Request</h3>
        <p>
          Here’s an example of how to make a request using Axios:
        </p>
        <pre className="bg-codeBackground text-sm p-4 rounded mt-2">
          <code>
            {`const axios = require('axios');

const options = {
  method: 'POST',
  url: 'https://api.example.com/generate-book',
  headers: {
    'X-API-Key': 'YOUR_API_KEY'
  },
  data: {
    api: 'openai',
    model: 'gpt-4',
    topic: 'The Future of AI'
  }
};

axios.request(options).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});`}
          </code>
        </pre>
      </li>

      <li>
        <h3 className="text-lg font-semibold">Step 4: Handle the Response</h3>
        <p>
          The response will contain the generated book content. You can store or display this content as needed in your application.
        </p>
      </li>
    </ol>
  </section>
);

export default Tutorial;
