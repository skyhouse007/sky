// src/components/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';

function Projects() {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Our Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={project.image} alt={project.name} className="w-full h-56 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{project.name}</h3>
              <p className="text-gray-600 mb-4">{project.location}</p>
              <div className="flex justify-between items-center">
                <p className="text-lg font-bold text-blue-600">{project.price}</p>
                <Link to={project.path} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">View Details</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
