import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Authentication from './components/Authentication';
import Endpoints from './components/Endpoints';
import Tutorial from './components/Tutorial';
import CodeExamples from './components/CodeExamples';
import Pricing from './components/Pricing';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <main className="max-w-4xl mx-auto px-4">
        <Overview />
        <Authentication />
        <Endpoints />
        <Tutorial />
        <CodeExamples />
        <Pricing />
      </main>
    </div>
  );
}

export default App;
