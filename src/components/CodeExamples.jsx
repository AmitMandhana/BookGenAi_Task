import React from 'react';

const CodeExamples = () => (
  <section id="code-examples" className="bg-sectionBackground p-6 rounded-lg shadow-md mb-6 border border-border">
    <h2 className="text-secondary text-2xl font-semibold mb-4">Code Examples</h2>

    <h3 className="text-xl font-semibold mb-2">Python</h3>
    <pre className="bg-codeBackground text-sm p-4 rounded mb-6 overflow-x-auto">
      <code>
{`import requests

API_KEY = "your_api_key_here"
API_ENDPOINT = "https://tryBookAI.com/api/generate-book"

headers = {
    "Content-Type": "application/json",
    "X-API-Key": API_KEY
}

data = {
    "api": "openai",
    "model": "gpt-3.5-turbo",
    "topic": "The Future of Artificial Intelligence",
    "language": "English",
    "word_count": 5000
}

response = requests.post(API_ENDPOINT, json=data, headers=headers)

if response.status_code == 200:
    result = response.json()
    print(f"Book generation started. Job ID: {result['job_id']}")
else:
    print(f"Error: {response.status_code} - {response.text}")
`}
      </code>
    </pre>

    <h3 className="text-xl font-semibold mb-2">JavaScript (Node.js)</h3>
    <pre className="bg-codeBackground text-sm p-4 rounded mb-6 overflow-x-auto">
      <code>
{`const axios = require('axios');

const API_KEY = 'your_api_key_here';
const API_ENDPOINT = 'https://tryBookAI.com/api/generate-book';

const headers = {
    'Content-Type': 'application/json',
    'X-API-Key': API_KEY
};

const data = {
    api: 'openai',
    model: 'gpt-3.5-turbo',
    topic: 'The Future of Artificial Intelligence',
    language: 'English',
    word_count: 5000
};

axios.post(API_ENDPOINT, data, { headers })
    .then(response => {
        console.log(\`Book generation started. Job ID: \${response.data.job_id}\`);
    })
    .catch(error => {
        console.error('Error:', error.response ? error.response.data : error.message);
    });
`}
      </code>
    </pre>
  </section>
);

export default CodeExamples;
