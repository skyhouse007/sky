// src/components/GodrejProject.jsx
import React from 'react';
import SiteVisitForm from '../SiteVisitForm';

function GodrejProject() {
  const amenities = [
    'Swimming Pool',
    'Indoor Gymnasium',
    'Badminton Court',
    'Jogging Track',
    'Yoga Lawn',
    'Kids Play Area',
    'Party Hall & Pantry',
    'Pool Deck with Shower',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1605146769289-440113cc3d00?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1628592102751-ba83b0314276?q=80&w=1600&auto=format&fit=crop',
  ];

  const heroImage = 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop';

  return (
    <div className="font-sans bg-gray-50">
      <section className="bg-cover bg-center h-96 text-white flex items-center" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="container mx-auto px-6 text-center bg-black bg-opacity-50 p-6 rounded-lg">
          <h2 className="text-4xl font-bold mb-2">Godrej MSR City</h2>
          <p className="text-xl">Shettigere, Bangalore</p>
          <p className="text-2xl font-bold mt-4">Starting Price : ₹ 1.23 Cr* Onwards</p>
          <p className="text-lg mt-2">20:80 Payment Plan for 3 BHK's</p>
        </div>
      </section>

      <main className="container mx-auto px-6 py-12">
        <section id="about" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Overview</h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-2xl font-semibold text-gray-700 mb-2">Godrej MSR City</h4>
              <p className="text-gray-600 mb-4">
                Introducing Godrej MSR City – Magnificent apartments in Shettigere, Bangalore. The growing demand for homes in quieter, well-connected areas is driving interest in Shettigere’s real estate market. With Bengaluru’s city centre becoming more crowded and expensive, Shettigere offers an affordable alternative without compromising on accessibility.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Project Highlights</h4>
              <ul className="space-y-3 text-gray-700 list-disc list-inside">
                <li>60 Acres Township</li>
                <li>Building Heights - 2B+G+12/14 floors</li>
                <li>4 units per Floor with 3 lifts</li>
                <li>Launching Phase -1: 19 Acres - 6 towers</li>
                <li>High-Speed Elevators</li>
                <li>Surrounded by lush greenery and thoughtfully landscaped gardens</li>
                <li>Fully equipped clubhouse, state-of-the-art gymnasium</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="price" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Price Section</h3>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-blue-600 mb-2">2 BHK</h4>
              <p className="text-lg font-semibold text-gray-800 mb-2">₹ 1.23 Cr* Onwards</p>
              <p className="text-gray-600">Size: 1186–1292 Sq. Ft</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-bold text-blue-600 mb-2">3 BHK</h4>
              <p className="text-lg font-semibold text-gray-800 mb-2">₹ 1.49 Cr* Onwards</p>
              <p className="text-gray-600">Size: 1585-1876 Sq. Ft</p>
            </div>
          </div>
        </section>

        <section id="amenities" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Our Amenities</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="gallery" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Gallery image ${index + 1}`} className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"/>
              </div>
            ))}
          </div>
        </section>

        <section id="location" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">Location Advantages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full h-96">
              <iframe
                title="project-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.249510483937!2d77.63933931529998!3d13.0835499907828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae197126583563%3A0x566fd4e925734143!2sShettigere%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1678886393080!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h4 className="text-2xl font-semibold text-gray-800 mb-4">Connectivity</h4>
              <ul className="space-y-2 text-gray-700">
                <li><strong>JW Marriot:</strong> 2.5 Km</li>
                <li><strong>Prestige mall:</strong> 2.2 Km</li>
                <li><strong>Bangalore signature park:</strong> 6 Km</li>
                <li><strong>Airport City:</strong> 6 Km</li>
                <li><strong>KIADB Hardware and Areospace park:</strong> 8 Km</li>
                <li><strong>Airport:</strong> 7 Km</li>
                <li><strong>Nearest Metro station (Doddajala):</strong> 4.4 Km</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="developer" className="mb-12">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">About the Developer</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto text-center">
            Godrej Properties brings the Godrej Group philosophy of innovation, sustainability, and excellence to the real estate industry. Each Godrej Properties development combines a 122–year legacy of excellence and trust with a commitment to cutting-edge design and technology. In recent years, Godrej Properties has received over 250 awards and recognitions, including ‘The Most Trusted Real Estate Brand’ in 2019 from the Brand Trust Report, 'Real Estate Company of the Year' at the 9th Construction Week Awards 2019, ‘Equality and Diversity Champion’ 2019 at the APREA Property Leaders Awards, ‘The Economic Times Best Real Estate Brand 2018’ and the ‘Builder of the Year’ at the CNBC-Awaaz Real Estate Awards 2018.
          </p>
        </section>

        <section id="contact" className="bg-gray-100 py-12 rounded-lg">
          <div className="container mx-auto px-6">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">We're Here to Help You Find Your Perfect Property</h3>
            <div className="flex justify-center">
              <SiteVisitForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default GodrejProject;
