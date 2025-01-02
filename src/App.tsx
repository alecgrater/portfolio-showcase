import React, { useState } from 'react';
import ProjectsTab from './components/ProjectsTab';
import ExperienceTab from './components/ExperienceTab';

function App() {
  const [activeTab, setActiveTab] = useState<'projects' | 'experience'>('projects');

  return (
    <div className="min-h-screen bg-[#F4F7FA]">
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-center space-x-8">
            <button
              onClick={() => setActiveTab('projects')}
              className={`py-4 px-6 font-medium transition-all duration-300 border-b-2 ${
                activeTab === 'projects'
                  ? 'text-[#2980B9] border-[#2980B9]'
                  : 'text-[#7F8C8D] border-transparent hover:text-[#2C3E50]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`py-4 px-6 font-medium transition-all duration-300 border-b-2 ${
                activeTab === 'experience'
                  ? 'text-[#2980B9] border-[#2980B9]'
                  : 'text-[#7F8C8D] border-transparent hover:text-[#2C3E50]'
              }`}
            >
              Experience
            </button>
          </div>
        </div>
      </nav>

      <main className="transition-all duration-500 ease-in-out">
        {activeTab === 'projects' ? <ProjectsTab /> : <ExperienceTab />}
      </main>
    </div>
  );
}

export default App;