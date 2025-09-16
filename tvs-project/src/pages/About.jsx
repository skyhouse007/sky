import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Akash Khandelwal</h1>
        <p className="text-gray-600 mb-6">
          Real estate investment advisor based in Bengaluru. I help buyers and investors discover the right projects across North and East Bangalore, compare options, and book seamless site visits.
        </p>
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Services</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Project discovery and comparisons</li>
              <li>End-to-end site visit coordination</li>
              <li>Price negotiations and offers</li>
              <li>Home loan guidance via partners</li>
            </ul>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-xl font-semibold text-gray-800 mb-3">Focus Areas</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>Thanisandra, Manyata Belt</li>
              <li>Yelahanka, Hebbal</li>
              <li>Shettigere, Airport Corridor</li>
              <li>Whitefield Peripheral</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link to="/book" className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700">Book Site Visit</Link>
          <a href="mailto:" className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300">Email</a>
          <a href="tel:" className="bg-gray-200 text-gray-800 px-5 py-2 rounded-lg hover:bg-gray-300">Call</a>
        </div>
      </div>
      <p className="text-xs text-gray-500 mt-6 text-center">RERA Authorized Channel Partner</p>
    </div>
  );
}

export default About;
