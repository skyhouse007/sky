// src/components/Projects.jsx
import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import projectsData from '../data/projects';

function Projects() {
  const areas = useMemo(() => ['All', ...Array.from(new Set(projectsData.map(p => p.area)))], []);
  const [activeArea, setActiveArea] = useState('All');
  const projects = activeArea === 'All' ? projectsData : projectsData.filter(p => p.area === activeArea);

  return (
    <div className="container mx-auto px-6 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6">Available Projects</h2>

      <div className="flex justify-center mb-8">
        <div className="inline-flex bg-white/80 backdrop-blur border border-gray-200 rounded-full p-1">
          {areas.map(area => (
            <button
              key={area}
              onClick={() => setActiveArea(area)}
              className={`px-4 py-2 text-sm rounded-full transition ${activeArea===area ? 'bg-blue-600 text-white shadow' : 'text-gray-700 hover:bg-gray-100'}`}
            >
              {area}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-0.5 transition">
            <div className="relative">
              <img src={project.image} alt={project.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <span className="absolute top-3 left-3 text-xs bg-white/90 text-gray-800 px-2 py-1 rounded">{project.area}</span>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-1">{project.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{project.location}</p>
              <div className="flex items-center justify-between">
                <p className="text-blue-600 font-bold">{project.price}</p>
                <Link to={project.path} className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
