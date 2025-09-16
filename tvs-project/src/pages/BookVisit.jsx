import React from 'react';
import SiteVisitForm from '../SiteVisitForm';

function BookVisit() {
  return (
    <div className="container mx-auto px-6 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Book a Site Visit</h1>
        <SiteVisitForm />
      </div>
    </div>
  );
}

export default BookVisit;
